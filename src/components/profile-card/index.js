import { HStack, Avatar, Box, Text } from "native-base";
import { Palette } from "../../theme/palette";
import { Ionicons } from "@expo/vector-icons";
import { TypographyP1 } from "../typography/p1";
import { TypographyDescription } from "../typography/description";

export const ProfileCard = () => {
  return (
    <HStack width={"100%"} space={2}>
      <Avatar mr={2} size={"lg"} background={Palette.gray_background}>
        <Ionicons name="person" size={30} color={Palette.dark_green} />
      </Avatar>
      <Box>
        <TypographyP1 text={"Jackeline de Morais"} />
        <TypographyDescription text={"Anápolis-GO"} />

        <Box>Stars </Box>
      </Box>
    </HStack>
  );
};
