import { VStack, Container, Text } from "native-base";
import { TopSearch } from "../components/top-search";
import { CustomAlert } from "../components/custom-alert";

export const MyProfileScreen = () => {
  return (
    <VStack space={3} justifyContent={"center"} alignItems={"center"}>
      <TopSearch />
      <Container
        minWidth={"100%"}
        pl={2}
        pr={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <CustomAlert />
        <Text> My Profile Screen</Text>
      </Container>
    </VStack>
  );
};
