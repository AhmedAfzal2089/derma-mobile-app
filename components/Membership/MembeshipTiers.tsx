import { STRIPE_CONFIG } from "@/constants/stripe-config.constants";
import { tiers } from "@/constants/tiers.constants";
import { createPaymentIntent } from "@/utils/api/createPaymentIntent";
import { updatePlanStatus } from "@/utils/api/updatePlanStatus";
import { Feather } from "@expo/vector-icons";
import { useStripe } from "@stripe/stripe-react-native";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const USER_ID = "vB2UxgEP1oZTEDVskDun4X2bcdE3";

export default function MembershipTiers() {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (planName: string) => {
    try {
      setLoading(true);

      const { clientSecret } = await createPaymentIntent({
        planName,
        userId: USER_ID,
      });

      const init = await initPaymentSheet({
        merchantDisplayName: STRIPE_CONFIG.MERCHANT_NAME,
        paymentIntentClientSecret: clientSecret,
        allowsDelayedPaymentMethods: true,
      });

      if (init.error) {
        Alert.alert("Error", init.error.message);
        return;
      }

      const paymentResult = await presentPaymentSheet();

      if (paymentResult.error) {
        Alert.alert("Payment Failed", paymentResult.error.message);
      } else {
        await updatePlanStatus({
          userId: USER_ID,
          planName,
          paymentStatus: "succeeded",
        });
        Alert.alert("Success", `Payment successful for ${planName}!`);
      }
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="bg-white py-12 px-6">
      {/* Section Header */}
      <Text className="text-3xl font-bold text-center text-zinc-800 mb-2">Choose Your Membership Tier</Text>
      <Text className="text-gray-600 text-center text-base mb-8">
        Select the membership level that best fits your aesthetic goals and lifestyle.
      </Text>

      {/* Membership Cards Container */}
      <View className="flex-col">
        {tiers.map((tier, index) => (
          <View
            key={index}
            className={`
              w-full p-6 rounded-2xl shadow-md mb-8
              ${tier.isPopular ? "bg-blue-600" : "bg-zinc-900"}
            `}
          >
            {/* "Most Popular" Banner */}
            {tier.isPopular && (
              <View className="absolute top-0 right-0 px-4 py-1 rounded-bl-xl bg-white">
                <Text className="text-xs font-bold text-blue-600">MOST POPULAR</Text>
              </View>
            )}

            {/* Tier Name and Subtitle */}
            <Text
              className={`
              text-sm font-semibold mb-1
              ${tier.isPopular ? "text-white" : "text-gray-400"}
            `}
            >
              {tier.name}
            </Text>
            <Text
              className={`
              text-lg font-bold mb-4
              ${tier.isPopular ? "text-white" : "text-gray-400"}
            `}
            >
              {tier.subtitle}
            </Text>

            {/* Price */}
            <Text className="text-5xl font-bold text-white mb-2">
              {tier.price}
              <Text className="text-base font-normal">/month</Text>
            </Text>
            <Text className="text-gray-300 text-sm mb-6">{tier.billing}</Text>

            {/* Benefits List */}
            <View className="mb-8">
              {tier.benefits.map((benefit, i) => (
                <View key={i} className="flex-row items-start mb-2">
                  <Feather name="check" size={16} color={tier.isPopular ? "white" : "white"} className="mr-2 mt-1" />
                  <Text className="text-gray-300 ml-2 flex-1">{benefit}</Text>
                </View>
              ))}
            </View>

            {/* Select Tier Button */}
            <TouchableOpacity
              className={`
    w-full px-6 py-4 rounded-md items-center
    ${loading ? "bg-green-500 text-white" : tier.buttonColor}
    ${tier.isPopular ? "border-2 border-white" : ""}
  `}
              onPress={() => handleSubscribe(tier.name)}
            >
              <Text
                className={`
                text-black font-semibold
                ${tier.isPopular ? "text-white" : "text-black"}
              `}
              >
                {loading ? "Processing..." : tier.buttonText}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}
