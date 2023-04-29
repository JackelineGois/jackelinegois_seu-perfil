import { Button, Text } from "native-base";
import { Palette } from "../../../theme/palette";

export const TypographyLink = (props) => {
  return (
    <Button
      color={Palette.dark_blue}
      variant={"ghost"}
      rightIcon={props.rightIcon ? props.rightIcon : null}
    >
      <Text color={Palette.dark_blue} fontSize={14} fontWeight={"semibold"}>
        {props.text}
      </Text>
    </Button>
  );
};
