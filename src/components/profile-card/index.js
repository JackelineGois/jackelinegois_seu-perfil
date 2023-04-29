import { HStack, Avatar, VStack } from "native-base";
import { Palette } from "../../theme/palette";
import { Ionicons } from "@expo/vector-icons";
import { TypographyP1 } from "../typography/p1";
import { TypographyDescription } from "../typography/description";
import { StarRating } from "../star-rating";

export const ProfileCard = () => {
  return (
    <HStack width={"100%"} space={2}>
      <Avatar mr={2} size={"lg"} background={Palette.gray_background}>
        <Ionicons name="person" size={30} color={Palette.dark_green} />
      </Avatar>
      <VStack space={1}>
        <TypographyP1 text={"Jackeline de Morais"} />
        <TypographyDescription text={"Anápolis-GO"} />
        <StarRating totalStars={5} totalComments={0} />
      </VStack>
    </HStack>
  );
};
