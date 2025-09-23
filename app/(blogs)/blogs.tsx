import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const staticBlogPosts = [
  {
    id: "static-1",
    title: "How to Prepare Your Skin for a Special Event",
    date: "August 14, 2025",
    image: "https://derma-veritas.vercel.app/images/woman-at-vanity-mirror-applying-skincare.png",
    tags: ["Face", "Aesthetics"],
    excerpt: "Get your skin glowing and camera-ready for your special day with these expert tips.",
    content:
      "Preparing your skin for a special event is all about consistency and a little extra care. Start your regimen at least one month in advance. Focus on gentle cleansing, targeted serums, and consistent moisturization. A week before, avoid new products that could cause irritation. On the day of the event, a simple, hydrating sheet mask can give your skin an instant glow. Remember, a healthy diet and plenty of water are just as important as your skincare products.",
  },
  {
    id: "static-2",
    title: "Why is Sun Protection So Important After Aesthetic Procedures?",
    date: "July 22, 2025",
    image: "https://derma-veritas.vercel.app/images/woman-wearing-sun-hat-smiling-outdoors.png",
    tags: ["Face", "Aesthetics"],
    excerpt: "Learn why proper sun protection is crucial for optimal healing and results.",
    content:
      "After any aesthetic procedure, your skin is in a vulnerable state. UV radiation can cause hyperpigmentation, prolong healing, and even reverse the positive effects of your treatment. It's crucial to use a broad-spectrum SPF 30 or higher daily, even on cloudy days. Physical sunscreens containing zinc oxide or titanium dioxide are often recommended for their gentle, protective qualities. Consistent sun protection ensures your results are long-lasting and your skin remains healthy.",
  },
  {
    id: "static-3",
    title: "The Benefits of Aesthetic Treatments for Brides-to-Be",
    date: "July 10, 2025",
    image: "https://derma-veritas.vercel.app/images/elegant-bride-in-white-dress-natural-lighting.png",
    tags: ["Face", "Aesthetics"],
    excerpt: "Discover the perfect aesthetic treatments to help you look radiant on your wedding day.",
    content:
      "For brides-to-be, achieving a radiant and flawless complexion for the big day is a top priority. Treatments like gentle chemical peels or hydrating facials can refine skin texture and boost luminosity. For more targeted concerns, a series of microneedling sessions can improve overall skin tone and firmness. Timing is everything, so be sure to book a consultation well in advance of your wedding to create a personalized treatment plan.",
  },
  {
    id: "static-4",
    title: "Building an Effective Anti-Aging Skincare Routine",
    date: "June 28, 2025",
    image: "https://derma-veritas.vercel.app/images/luxury-skincare-products-on-marble-surface.png",
    tags: ["Face", "Skincare"],
    excerpt: "Create a comprehensive anti-aging routine that delivers visible results.",
    content:
      "An effective anti-aging routine starts with the basics: cleanse, treat, moisturize, and protect. Incorporate powerful ingredients like retinoids to accelerate cell turnover and reduce fine lines, and Vitamin C serums to protect against environmental damage and brighten the complexion. Don't forget to extend your routine to your neck and décolletage. Consistency is key to seeing a visible difference over time.",
  },
  {
    id: "static-5",
    title: "Anti-Wrinkle Treatment: Separating Myths from Facts",
    date: "June 15, 2025",
    image: "https://derma-veritas.vercel.app/images/professional-aesthetic-consultation-modern-clinic.png",
    tags: ["Face", "Aesthetics"],
    excerpt: "Get the truth about Anti-Wrinkle treatments and what to expect from the procedure.",
    content:
      "There are many misconceptions about anti-wrinkle treatments. A common myth is that they make your face look 'frozen.' In reality, a skilled professional will administer the treatment to soften lines and wrinkles while still allowing for natural facial expressions. Another fact is that results are temporary, typically lasting 3-6 months. The treatment works by temporarily relaxing the muscles that cause wrinkles, leading to a smoother, more youthful appearance.",
  },
  {
    id: "static-6",
    title: "Essential Summer Skincare Tips for Healthy Skin",
    date: "June 5, 2025",
    image: "https://derma-veritas.vercel.app/images/woman-applying-sunscreen-at-beach-summer-vibes.png",
    tags: ["Face", "Skincare"],
    excerpt: "Protect and nourish your skin during the hot summer months with these expert tips.",
    content:
      "Summer skincare requires a special approach to protect your skin from sun, heat, and humidity. It's essential to use a lightweight moisturizer and a non-greasy sunscreen with a high SPF. Reapplying sunscreen every two hours, especially after swimming or sweating, is crucial. Additionally, incorporating antioxidants like Vitamin C can help fight off free radical damage from sun exposure.",
  },
  {
    id: "static-7",
    title: "The Complete Guide to Chemical Peels",
    date: "May 20, 2025",
    image: "https://derma-veritas.vercel.app/images/aesthetic-treatment-room-professional-equipment.png",
    tags: ["Face", "Aesthetics"],
    excerpt: "Everything you need to know about chemical peels and their transformative benefits.",
  },
  {
    id: "static-8",
    title: "The Role of Hydration in Maintaining Healthy Skin",
    date: "May 8, 2025",
    image: "https://derma-veritas.vercel.app/images/woman-drinking-water-glowing-skin-wellness.png",
    tags: ["Face", "Skincare"],
    excerpt: "Discover how proper hydration impacts your skin health and appearance.",
  },
  {
    id: "static-9",
    title: "Dermal Fillers Explained: What You Need to Know",
    date: "April 25, 2025",
    image: "https://derma-veritas.vercel.app/images/before-after-aesthetic-treatment-natural-results.png",
    tags: ["Face", "Aesthetics"],
    excerpt: "Learn about different types of dermal fillers and their applications.",
  },
  {
    id: "static-10",
    title: "Post-Treatment Care: Maximizing Your Results",
    date: "April 12, 2025",
    image: "https://derma-veritas.vercel.app/images/serene-spa-environment-recovery-skincare.png",
    tags: ["Face", "Aesthetics"],
    excerpt: "Follow these essential aftercare tips to ensure the best possible treatment outcomes.",
  },
];

const BlogListScreen = ({ onSelectBlog, onOpenClinicsModal }: any) => (
  <ScrollView className="bg-white">
    {/* Hero Section */}
    <View className="py-10 px-5 items-center bg-gray-50">
      <View className="w-24 h-24 bg-zinc-900 rounded-2xl justify-center items-center mb-5">
        <Text className="text-white text-3xl font-bold">DV</Text>
      </View>
      <Text className="text-5xl text-center">
        <Text className="text-black font-semibold">News</Text> <Text className="text-gray-500 font-normal">& Events</Text>
      </Text>
      <Text className="text-lg text-gray-600 text-center mt-2 leading-relaxed">
        Stay updated with the latest insights, tips, and news from Derma Veritas. Discover expert advice on skincare, aesthetic treatments,
        and wellness.
      </Text>
    </View>

    {/* Content Overview */}
    <View className="flex-col p-5 bg-white">
      <View className="py-5">
        <Text className="text-xs text-gray-500 uppercase tracking-widest">Latest Insights</Text>
        <Text className="text-4xl font-light text-gray-900 mt-2">Expert Knowledge for Your Skincare Journey</Text>
        <Text className="text-base text-gray-600 leading-relaxed mt-2">
          Our blog features carefully curated articles written by our team of medical professionals to help you make informed decisions
          about your skincare and aesthetic treatments.
        </Text>
        <Text className="text-base text-gray-600 leading-relaxed mt-2">
          From preparation tips for special events to in-depth explanations of various procedures, we&apos;re committed to providing
          valuable information that supports your aesthetic goals.
        </Text>
      </View>
      <View className="bg-gray-50 p-5 rounded-md mt-5">
        <View className="flex-row items-center">
          <View className="w-16 h-16 bg-zinc-900 rounded-md justify-center items-center">
            <Text className="text-white text-2xl font-bold">DV</Text>
          </View>
          <View className="ml-2">
            <Text className="text-2xl font-light text-gray-900">Expert</Text>
            <Text className="text-2xl font-light text-gray-500">Insights</Text>
          </View>
        </View>
        <Text className="text-2xl font-light text-gray-900 mt-5">Explore Our Categories:</Text>
        <View className="mt-2">
          {[
            "Skincare routines and tips",
            "Aesthetic treatment guides",
            "Pre and post-treatment care",
            "Seasonal skincare advice",
            "Myth-busting and fact-checking",
            "Industry trends and innovations",
          ].map((benefit, index) => (
            <View key={index} className="flex-row items-center mt-2">
              <View className="w-2 h-2 bg-zinc-900 rounded-full mr-2" />
              <Text className="text-base text-gray-700">{benefit}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>

    {/* Blog Posts Grid */}
    <View className="p-5 bg-gray-50">
      <Text className="text-4xl font-light text-center mb-2">Latest Articles</Text>
      <Text className="text-base text-gray-600 text-center mb-5">
        Explore our collection of expert-written articles on skincare and aesthetics
      </Text>
      <View className="flex-row flex-wrap justify-between">
        {staticBlogPosts.map((post) => (
          <TouchableOpacity
            key={post.id}
            className="w-full bg-white rounded-md overflow-hidden mb-5 shadow-md"
            onPress={() => onSelectBlog(post)}
            activeOpacity={0.7}
          >
            <Image source={{ uri: post.image }} className="w-full h-52" resizeMode="cover" />
            <View className="p-4">
              <View className="flex-row items-center mb-2">
                <MaterialCommunityIcons name="calendar" size={14} color="#6B7280" />
                <Text className="text-xs text-gray-500 ml-1">{post.date}</Text>
              </View>
              <Text className="text-lg font-bold text-gray-900 mb-1">{post.title}</Text>
              <Text className="text-sm text-gray-600 mb-2">{post.excerpt}</Text>
              <View className="flex-row justify-between items-center mt-2">
                <Text className="text-sm text-gray-600">Read more →</Text>
                <View className="flex-row">
                  {post.tags.map((tag, index) => (
                    <Text key={index} className="text-xs text-gray-600 bg-gray-200 px-2 py-1 rounded-full ml-1">
                      {tag}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>

    {/* CTA Section */}
    <View className="flex-col">
      <View className="p-5">
        <Text className="text-4xl font-light text-gray-900">Stay Informed About Your Skincare</Text>
        <Text className="text-base text-gray-600 leading-relaxed mt-2">
          Our blog is regularly updated with new content to keep you informed about the latest developments in skincare and aesthetic
          treatments. Bookmark this page and check back often for new articles.
        </Text>
        <Text className="text-base text-gray-600 leading-relaxed mt-2">
          Have a topic you&lsquo;d like us to cover? Visit our clinic for a consultation and let us know what information would be most
          valuable to you.
        </Text>
        <Link href={"/(tabs)/bookings"} asChild>
          <TouchableOpacity className="bg-zinc-900 px-6 py-4 rounded-md mt-5 self-start">
            <Text className="text-white text-sm font-bold uppercase tracking-widest">BOOK A CONSULTATION</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <View className="bg-gray-50 h-72 justify-center items-center relative">
        <View className="w-full h-full justify-center items-center bg-gray-300">
          <View className="w-24 h-24 bg-gray-400 rounded-full" />
          <Text className="text-gray-600 mt-2">Skincare Consultation Image</Text>
        </View>
        <View className="absolute top-5 right-5 bg-white/95 px-4 py-2 rounded-md shadow-md">
          <Text className="text-base font-light text-gray-900">Dr. Expert</Text>
          <Text className="text-sm text-gray-600">Medical Director</Text>
        </View>
      </View>
    </View>
  </ScrollView>
);

const BlogPostDetailScreen = ({ blog, onGoBack }: any) => (
  <ScrollView className="flex-1 bg-white">
    <View className="p-5">
      <TouchableOpacity className="flex-row items-center mb-5" onPress={onGoBack}>
        <MaterialCommunityIcons name="arrow-left" size={20} color="#6B7280" />
        <Text className="text-base text-gray-600 ml-1">Back to Articles</Text>
      </TouchableOpacity>
    </View>
    <View className="p-5">
      <Text className="text-xs text-gray-500 uppercase tracking-widest mb-1">{blog.tags.join(", ")}</Text>
      <Text className="text-3xl font-bold text-gray-900">{blog.title}</Text>
      <Text className="text-base text-gray-600 mt-1">
        <MaterialCommunityIcons name="calendar" size={16} color="#6B7280" /> {blog.date}
      </Text>
      <Image source={{ uri: blog.image }} className="w-full h-64 my-5 rounded-md" resizeMode="cover" />
      <Text className="text-base text-gray-700 leading-relaxed">{blog.content}</Text>
    </View>
  </ScrollView>
);

export default function App() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleSelectBlog = (blog: any) => {
    setSelectedBlog(blog);
  };

  const handleGoBack = () => {
    setSelectedBlog(null);
  };

  return (
    <View className="flex-1 bg-white">
      {selectedBlog ? (
        <BlogPostDetailScreen blog={selectedBlog} onGoBack={handleGoBack} />
      ) : (
        <BlogListScreen onSelectBlog={handleSelectBlog} />
      )}
    </View>
  );
}
