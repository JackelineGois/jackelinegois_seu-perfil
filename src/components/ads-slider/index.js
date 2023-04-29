import { ScrollView } from "native-base";
import { Dimensions } from "react-native";
import { AdsSliderCardItem } from "./_card-item";

export const AdsSlider = () => {
  const width = Dimensions.get("window").width;
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      widht={"100%"}
      paddingLeft={5}
    >
      <AdsSliderCardItem
        colorScheme={"warning"}
        text_badge="Parceiros"
        text_bottom="Diabetes: Alimentos para evitar."
        image_source={require("../../../assets/image-frutas.jpg")}
      />
      <AdsSliderCardItem
        colorScheme={"info"}
        text_badge="Capacitações"
        text_bottom="Como ministrar doses"
        image_source={require("../../../assets/image-saude.jpg")}
      />
    </ScrollView>
  );
};
