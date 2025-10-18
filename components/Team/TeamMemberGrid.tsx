// components/Team/TeamMemberGrid.tsx
import { Link } from "expo-router";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Medical Director & Founder",
    bio: "Board-certified dermatologist with over 15 years of experience in medical and cosmetic dermatology. Dr. Johnson specializes in laser treatments and innovative skin rejuvenation techniques.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Aesthetic Practitioner",
    bio: "With a background in nursing and advanced certifications in injectables and laser technology, Michael brings precision and artistry to every treatment he performs.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Senior Esthetician",
    bio: "Jessica is a licensed esthetician with expertise in advanced facial treatments, chemical peels, and developing personalized skincare regimens for clients with diverse skin concerns.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Patient Care Coordinator",
    bio: "David ensures every patient's journey is seamless from consultation to follow-up. His extensive knowledge of treatments helps clients make informed decisions about their care.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Emily Thompson",
    role: "Nurse Practitioner",
    bio: "Emily is an experienced nurse practitioner specializing in non-surgical facial rejuvenation. She is known for her gentle approach and natural-looking results with injectables.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Laser Specialist",
    bio: "Robert is certified in multiple laser platforms and specializes in tattoo removal, hair reduction, and treating pigmentation issues with cutting-edge technology.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

export default function TeamMemberGrid() {
  const windowWidth = Dimensions.get("window").width;
  const isTablet = windowWidth >= 768;

  return (
    <View className="bg-zinc-100 py-12 px-6">
      <Text className="text-4xl font-bold text-center text-zinc-800 mb-2">Our Medical Team</Text>
      <Text className="text-gray-600 text-center text-base mb-8">
        Meet the skilled professionals dedicated to providing exceptional aesthetic care with medical expertise
      </Text>

      <View className={`flex-row flex-wrap justify-between ${isTablet ? "justify-between" : "justify-center"}`}>
        {teamMembers.map((member) => (
          <View
            key={member.id}
            className={`
              bg-white p-4 rounded-lg shadow-md mb-6
              ${isTablet ? "w-[48%] mb-6" : "w-full max-w-sm mb-6"}
            `}
          >
            <Image source={{ uri: member.image }} className="w-full h-64 rounded-lg mb-4" resizeMode="cover" />
            <Text className="text-lg font-bold text-zinc-800">{member.name}</Text>
            <Text className="text-gray-600 text-sm mb-4">{member.role}</Text>

            <Link href="/pages/bookings/bookings" asChild>
              <TouchableOpacity className="w-full px-4 py-3 border border-zinc-300 rounded-md bg-zinc-950 items-center">
                <Text className="text-white font-semibold text-sm">BOOK CONSULTATION</Text>
              </TouchableOpacity>
            </Link>
          </View>
        ))}
      </View>
    </View>
  );
}
