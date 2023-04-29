import { VStack, Container, Heading, Divider, Button } from "native-base";
import { TopSearch } from "../components/top-search";
import { CustomAlert } from "../components/custom-alert";
import { ProfileCard } from "../components/profile-card";
import { AntDesign } from "@expo/vector-icons";

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
        <VStack>
          <CustomAlert />
          <Heading size={"2x1"}> Seu Perfil</Heading>
          <ProfileCard />
        </VStack>
        <Divider />
        <Button
          variant={"ghost"}
          rightIcon={<AntDesign name="arrowright" size={24} color="black" />}
        >
          Completar perfil
        </Button>
      </Container>
    </VStack>
  );
};
