import { ScrollView } from "react-native";
import GalleryScreen from "./(tabs)/gallery";

export default function Gallery() {
  return (
    <ScrollView className="flex-1 bg-white ">
      <GalleryScreen />
    </ScrollView>
  );
}
