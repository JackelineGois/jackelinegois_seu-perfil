import { Box, HStack, Text, VStack } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { Palette } from "../../theme/palette";
import { TypographyDescription } from "../typography/description";

export const StarRating = (props) => {
  return (
    <HStack space={1} alignItems={"center"}>
      {props.totalStars &&
        Array.from(Array(props.totalStars).keys()).map((star, starKey) => {
          return (
            <Box key={starKey} style={props.style ? props.style : {}}>
              <FontAwesome
                name="star"
                size={18}
                color={Palette.gray_background}
              />
            </Box>
          );
        })}
      <TypographyDescription
        style={{ fontSize: 14 }}
        text={`(${props.totalComments})`}
      />
    </HStack>
  );
};
