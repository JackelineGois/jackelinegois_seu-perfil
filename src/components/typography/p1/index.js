import { Heading } from "native-base";
import { Palette } from "../../../theme/palette";

export const TypographyP1 = ({ text }) => {
  return (
    <Heading fontSize={18} color={Palette.dark} fontWeight={"semibold"}>
      {text}
    </Heading>
  );
};
