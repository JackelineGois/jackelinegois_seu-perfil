import { Badge, Box, Image, Text } from "native-base";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const AdsSliderCardItem = (props) => {
  const width = Dimensions.get("window").width;
  return (
    <Box
      style={{
        width: width / 1.8,
        height: width / 2.5,
        justifyContent: "space-between",
        alignItems: "left",
        position: "relative",
        flexDir: "column",
      }}
      marginRight={5}
      px={2}
      py={2}
      rounded={"md"}
      display={"flex"}
    >
      <Badge
        zIndex={1}
        rounded={"lg"}
        colorScheme={props.colorScheme ? props.colorScheme : "error"}
        variant={"solid"}
        alignSelf="flex-start"
      >
        {props.text_badge}
      </Badge>
      <Image
        top={0}
        left={0}
        right={0}
        bottom={0}
        position={"absolute"}
        width={"100%"}
        height={"100%"}
        rounded={"md"}
        source={props.image_source ? props.image_source : null}
        zIndex={-1}
      />
      <Text zIndex={1} color={"white"} fontSize={14}>
        {props.text_bottom}
      </Text>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
        zIndex={0}
      />
    </Box>
  );
};
