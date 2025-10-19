import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

// Data for the consultation steps
const steps = [
  {
    number: 1,
    title: "Initial Consultation",
    description:
      "Every procedure at Derma Veritas starts with an initial consultation to get to know you and your individual needs. Our specialist consultants will conduct an in-depth assessment",
  },
  {
    number: 2,
    title: "Your Treatment",
    description:
      "Once you are happy with your treatment plan, we will arrange your procedure(s) to take place in our state-of-the-art Birmingham or London clinic.",
  },
  {
    number: 3,
    title: "Specialist Aftercare",
    description:
      "At Derma Veritas, we want to make sure you are satisfied. After your treatment(s) is completed, our compassionate team will be in touch.",
  },
];

const StepCard = ({ number, title, description }: any) => (
  <View className="bg-zinc-900 mx-4 p-6 rounded-2xl shadow-lg my-4">
    <View className="flex-row items-center mb-4">
      {/* Placeholder for the shield icon with number */}
      <View className="w-10 h-10 rounded-full bg-zinc-700 items-center justify-center mr-4">
        <Text className="text-white text-lg font-bold">{number}</Text>
      </View>
      <Text className="text-white font-semibold text-lg">{title}</Text>
    </View>
    <Text className="text-gray-400 mb-4">{description}</Text>
    {/* Read more link navigates to treatments page for simplicity */}
    <Link href="/treatments" asChild>
      <TouchableOpacity>
        <Text className="text-white underline">Read more</Text>
      </TouchableOpacity>
    </Link>
  </View>
);

export default function ConsultationSteps() {
  return (
    <View className="my-20">
      <Text className="text-2xl font-bold text-center text-black mb-6">
        Your Consultation — what to expect.
      </Text>

      {/* Container for the step cards, stacked vertically */}
      <View className="flex-col">
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </View>

      {/* "Book a consultation" Button */}
      <View className="items-center mt-8">
        <Link href="/bookings" asChild>
          <TouchableOpacity className="px-6 py-4 border bg-zinc-900 border-gray-500 rounded-full">
            <Text className="text-white font-semibold">
              Book a consultation
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
