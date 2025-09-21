import { ScrollView } from "react-native";
import GalleryScreen from "./pages/gallery/GallerySection";

export default function Gallery() {
  return (
    <ScrollView className="flex-1 bg-white ">
      <GalleryScreen />
    </ScrollView>
  );
}
