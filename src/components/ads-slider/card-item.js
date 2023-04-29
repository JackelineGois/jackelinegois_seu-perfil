import { Badge, Box, Image, Text } from "native-base";
import { Dimensions } from "react-native";

export const SliderCardItem = () => {
  const width = Dimensions.get("window").width;
  return (
    <Box
      style={{
        width: width / 1.8,
        height: width / 2.5,
        backgroundColor: "#123493",
        justifyContent: "space-between",
        alignItems: "left",
        position: "left",
        flexDir: "column",
      }}
      marginRight={5}
      px={2}
      py={2}
      rounded={"md"}
      display={"flex"}
    >
      <Badge
        rounded={"lg"}
        colorScheme="warning"
        variant={"solid"}
        alignSelf="flex-start"
      >
        Parceiros
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
        source={require("../../../assets/image-frutas.jpg")}
        zIndex={-1}
      />
      <Text color={"white"} variant={"h1"}>
        {" "}
        Diabtes: Alimentos para evitar!
      </Text>
    </Box>
  );
};
