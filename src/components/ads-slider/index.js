import { ScrollView } from "native-base";
import { Dimensions } from "react-native";
import { SliderCardItem } from "./card-item";

export const AdsSlider = () => {
  const width = Dimensions.get("window").width;
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      widht={"100%"}
      paddingLeft={5}
    >
      <SliderCardItem />
      <SliderCardItem />
    </ScrollView>
  );
};
