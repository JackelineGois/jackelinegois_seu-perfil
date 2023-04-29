import { Heading } from "native-base";
import { Palette } from "../../../theme/palette";

export const TypographyDescription = (props) => {
  return (
    <Heading
      fontSize={12}
      color={Palette.text}
      fontWeight={"regular"}
      style={props.style ? props.style : {}}
    >
      {props.text}
    </Heading>
  );
};
