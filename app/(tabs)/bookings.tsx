import { Picker } from "@react-native-picker/picker"; // <- native picker
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { treatmentOptions } from "../constants/treatment-options.constants";
import { treatments } from "../constants/treatments.constants";

const Bookings = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    treatment: "",
    treatmentOption: "",
    clientType: "new",
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
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

  const handleSubmit = () => {
    console.log("Form Data", formData);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 12 }} keyboardShouldPersistTaps="handled">
      <View className="flex-1 items-center justify-start bg-gray-100">
        <Text className="text-2xl font-bold mt-4 mb-2">Book a Consultation</Text>
        <Text className="mb-4 text-gray-500 text-center">Schedule your personalized aesthetic consultation</Text>

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
                <View className="bg-green-50 border  border-green-200 rounded-lg w-full px-4 py-2">
                  <View className="d-flex flex-row justify-between items-center">
                    <View>
                      <Text className="font-semibold text-green-800">Selected Treatment:</Text>
                      <Text className="font-semibold text-green-800">{selectedOption?.name}</Text>
                      {selectedOption?.description && <Text>{selectedOption.description}</Text>}
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

        {/* Submit Button */}
        <Pressable
          onPress={handleSubmit}
          className={`w-full py-3 rounded-lg items-center ${loading ? "bg-zinc-600" : "bg-zinc-900"}`}
          disabled={loading}
        >
          <Text className="text-white font-semibold text-base">{loading ? "Submitting..." : "Submit Consultation Request"}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Bookings;
