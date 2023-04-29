import { Heading } from "native-base";
import { Palette } from "../../../theme/palette";

export const TypographyP4 = (props) => {
  return (
    <Heading
      style={props.style ? props.style : {}}
      fontSize={14}
      color={Palette.dark_green}
      fontWeight={"semibold"}
      marginTop={15}
    >
      {props.text}
    </Heading>
  );
};
