import NoticeBanner from "@/components/Booking/NoticeBanner";
import CustomCheckbox from "@/components/Common/CustomCheckBox";
import Spinner from "@/components/Common/Spinner";
import { treatmentOptions } from "@/constants/treatment-options.constants";
import { treatments } from "@/constants/treatments.constants";
import { useAuth } from "@/context/AuthProvider";
import { createAppointment } from "@/utils/api/appointment";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

const Bookings = () => {
  const [loading, setLoading] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [referralError, setReferralError] = useState<string | null>(null);
  const [originalReferralCode, setOriginalReferralCode] = useState<string | null>(null);
  const { profile } = useAuth();

  const [formData, setFormData] = useState({
    treatment: "",
    treatmentOption: "",
    clientType: "new",
    name: profile?.name,
    phone: profile?.phone,
    email: profile?.email,
    preferredDate: new Date(),
    additionalInfo: "",
    ageConfirm: false,
    newsletter: false,
    referralCode: "",
  });

  const selectedTreatmentData = formData.treatment && treatmentOptions[formData.treatment] ? treatmentOptions[formData.treatment] : null;

  const clientOptions = [
    { label: "I am a new patient", value: "new" },
    { label: "I am an old patient", value: "returning" },
  ];

  const handleSubmit = async () => {
    if (!profile?.id) {
      router.replace("/(auth)/login");
      return;
    }

    try {
      setLoading(true);

      const selectedTreatment = treatmentOptions[formData.treatment];
      const selectedOption = selectedTreatment?.options.find((opt) => opt.id === formData.treatmentOption);

      const payload = {
        ...formData,
        preferredDate: formData.preferredDate ? new Date(formData.preferredDate).toISOString() : null,
        treatmentDetails: {
          treatmentId: formData.treatment,
          treatmentName: selectedTreatment?.name || "",
          optionId: selectedOption?.id || "",
          optionName: selectedOption?.name || "",
          optionPrice: selectedOption?.price || "",
          optionDescription: selectedOption?.description || "",
        },
        clinic: "main",
        userId: profile?.id,
        status: "pending",
        createdAt: new Date().toISOString(),
      };

      const response = await createAppointment(payload);

      const successMessage = response.referralRewardProcessed
        ? `Appointment request submitted successfully! You received a 5% discount (£${response.discountAmount}). We'll contact you soon.`
        : "Appointment request submitted successfully! We'll contact you soon.";

      Toast.show({ type: "success", text1: "Appointment Confirmed", text2: successMessage });

      Toast.show({
        type: "success",
        text1: "Appointment Confirmed",
        text2: successMessage,
        position: "top",
        visibilityTime: 5000,
        autoHide: true,
        topOffset: 50,
      });

      router.replace("/");

      // Reset form state
      setFormData({
        treatment: "",
        treatmentOption: "",
        clientType: "new",
        name: "",
        phone: "",
        email: "",
        preferredDate: new Date(),
        additionalInfo: "",
        ageConfirm: false,
        newsletter: false,
        referralCode: "",
      });
    } catch (error: any) {
      if (error.message.includes("referral code") || error.message.includes("referred")) {
        setReferralError(error.message);

        if (error.originalReferralCode) {
          setOriginalReferralCode(error.originalReferralCode);
        }
      } else {
        Toast.show({
          type: "error",
          text1: "Request failed",
          text2: error.message || "Please try again later.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView
        className="flex-1 pb-40 px-2"
        contentContainerStyle={{ paddingBottom: 90, paddingHorizontal: 4 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="items-center justify-start bg-gray-100">
          <Text className="text-2xl font-bold mt-4 mb-2">Book a Consultation</Text>
          <Text className="mb-4 text-gray-500 text-center">Schedule your personalized aesthetic consultation</Text>

          <View className="bg-white rounded-xl w-full px-2 py-4 mt-2 mb-4">
            {/* Treatment Picker */}
            <View className="w-full mb-3">
              <Text className="font-bold text-lg mb-2">Select Treatment</Text>
              <View className="border border-gray-300 rounded-lg bg-white">
                <Picker
                  selectedValue={formData.treatment}
                  onValueChange={(value) => setFormData({ ...formData, treatment: value })}
                  className="text-gray-800 px-2"
                >
                  <Picker.Item label="Select a treatment" value="" />
                  {treatments.map((item) => (
                    <Picker.Item key={item.value} label={item.label} value={item.value} enabled={!item.disabled} />
                  ))}
                </Picker>
              </View>
            </View>

            {/* Step 2: Treatment Options */}
            {selectedTreatmentData && (
              <View className="w-full mb-3">
                <Text className="font-bold text-lg mb-2">{selectedTreatmentData.name} - Selected Option</Text>
                <View className="border border-gray-300 rounded-lg bg-white">
                  <Picker
                    selectedValue={formData.treatmentOption}
                    onValueChange={(value) => setFormData({ ...formData, treatmentOption: value })}
                  >
                    <Picker.Item label="Choose specific treatment option" value="" />
                    {selectedTreatmentData.options.map((option) => (
                      <Picker.Item key={option.id} label={`${option.name} (${option.price})`} value={option.id} />
                    ))}
                  </Picker>
                </View>
              </View>
            )}

            {/* Step 3: Selected Option Details */}
            {formData.treatmentOption && selectedTreatmentData?.options.find((opt) => opt.id === formData.treatmentOption) && (
              <View className="w-full">
                {(() => {
                  const selectedOption = selectedTreatmentData.options.find((opt) => opt.id === formData.treatmentOption);
                  return (
                    <View className="bg-green-50 border  border-green-200 rounded-lg px-4 py-2">
                      <View className="d-flex flex-row justify-between items-center gap-2">
                        <View className="w-[80%]">
                          <Text className="font-semibold text-green-800">Selected Treatment:</Text>
                          <Text className="font-semibold text-green-800">{selectedOption?.name}</Text>
                          {selectedOption?.description && <Text className="flex-wrap">{selectedOption.description}</Text>}
                        </View>
                        <Text className="font-bold text-lg text-green-800">{selectedOption?.price}</Text>
                      </View>
                    </View>
                  );
                })()}
              </View>
            )}

            {/* Client Status Picker */}
            <View className="w-full mb-3">
              <Text className="font-bold text-lg mb-2">Client Status</Text>
              <View className="border border-gray-300 rounded-lg bg-white">
                <Picker
                  selectedValue={formData.clientType}
                  onValueChange={(value) => setFormData({ ...formData, clientType: value })}
                  className="text-gray-800 px-2"
                >
                  {clientOptions.map((option) => (
                    <Picker.Item key={option.value} label={option.label} value={option.value} />
                  ))}
                </Picker>
              </View>
            </View>
          </View>

          {/* Personal Information */}

          <View className="w-full bg-white rounded-xl py-4 px-2">
            <Text className="font-bold mb-1 text-xl text-center">Personal Information</Text>
            <View>
              <Text className="font-bold mb-1">Full Name:</Text>
              <TextInput
                placeholder="Full Name"
                onChangeText={(text) => setFormData({ ...formData, name: text })}
                className="w-full border border-zinc-300 rounded-lg px-2 py-3 mb-4 text-base text-zinc-900"
                value={formData?.name}
              />
            </View>
            <View>
              <Text className="font-bold mb-1">Email:</Text>
              <TextInput
                placeholder="Email"
                onChangeText={(text) => setFormData({ ...formData, email: text })}
                className="w-full border border-zinc-300 rounded-lg px-2 py-3 mb-4 text-base text-zinc-900"
                value={formData?.email}
              />
            </View>
            <View>
              <Text className="font-bold mb-1">Phone:</Text>
              <TextInput
                placeholder="Phone"
                onChangeText={(text) => setFormData({ ...formData, phone: text })}
                className="w-full border border-zinc-300 rounded-lg px-2 py-3 mb-4 text-base text-zinc-900"
                value={formData?.phone}
              />
            </View>

            <View className="mb-2">
              <Text className="font-bold mb-1">Preferred Appointment Date:</Text>
              <View className="border border-gray-300 rounded-lg flex flex-row justify-between items-center py-3 px-4">
                <Text>{new Date(formData.preferredDate).toLocaleDateString("en-GB")}</Text>

                <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                  <Ionicons name="calendar" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View className="d-flex flex-row justify-center items-start gap-1 px-4">
                <Ionicons className="mt-1" name="calendar" size={14} color="black" />
                <Text className="text-xs">
                  Please select your preferred date for the consultation. We&apos;ll contact you to confirm the exact time.
                </Text>
              </View>

              {showDatePicker && (
                <DateTimePicker
                  value={new Date(formData?.preferredDate)}
                  mode="date"
                  display="default"
                  onChange={(e, selectedDate) => {
                    setShowDatePicker(false);
                    if (selectedDate) {
                      setFormData({ ...formData, preferredDate: selectedDate });
                    }
                  }}
                />
              )}
            </View>
            <View className="mb-2">
              <Text className="font-bold mb-1">Additional Information(Optional):</Text>
              <TextInput
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                placeholder="Please share any additional information, specific concerns, questions, or preferences you'd like us to know about..."
                onChangeText={(text) => setFormData({ ...formData, additionalInfo: text })}
                className="w-full border border-zinc-300 rounded-lg px-2 py-3 text-base text-zinc-900"
                value={formData?.additionalInfo}
              />
              <Text>Feel free to mention any specific areas of concern, medical history, or questions</Text>
            </View>
            <View className="mb-4">
              <Text className="font-bold mb-1">Referral Code(Optional):</Text>
              <TextInput
                placeholder="Enter Referral Code If You Have any"
                onChangeText={(text) => setFormData({ ...formData, referralCode: text })}
                className="w-full border border-zinc-300 rounded-lg px-2 text-base text-zinc-900"
                value={formData?.referralCode}
              />
              <View>
                <Text className="text-green-600 italic">Valid codes give you 5% discount reward based on your treatment cost</Text>
              </View>
            </View>
          </View>

          <NoticeBanner />

          <View className="bg-white rounded-xl w-full my-2">
            <CustomCheckbox
              checked={formData.ageConfirm}
              onToggle={(confirm) => setFormData({ ...formData, ageConfirm: confirm })}
              label="I confirm that I am 18+ years old, and the treatment is intended for someone aged 18+."
            />
            <CustomCheckbox
              checked={formData.newsletter}
              onToggle={(confirm) => setFormData({ ...formData, newsletter: confirm })}
              label="I would like to receive occasional news & exclusive offers from Derma Veritas."
            />
          </View>

          {/* Submit Button */}
          <Pressable
            onPress={handleSubmit}
            className={`w-full py-3 rounded-lg items-center ${loading ? "bg-zinc-600" : "bg-zinc-900"}`}
            disabled={loading}
          >
            <Text className="text-white font-semibold text-base">
              {loading ? <Spinner size="small" color="#fff" /> : "Submit Consultation Request"}
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Bookings;
