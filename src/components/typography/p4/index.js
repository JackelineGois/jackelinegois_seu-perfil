import { Heading } from "native-base";
import { Palette } from "../../../theme/palette";

export const TypographyP4 = ({ text }) => {
  return (
    <Heading
      fontSize={14}
      color={Palette.text}
      fontWeight={"semibold"}
      marginTop={15}
    >
      {text}
    </Heading>
  );
};
