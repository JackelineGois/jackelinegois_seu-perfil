import { VStack, Container, Heading } from "native-base";
import { TopSearch } from "../components/top-search";
import { CustomAlert } from "../components/custom-alert";
import { ProfileCard } from "../components/profile-card";

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
        <Heading size={"2x1"}> Seu Perfil</Heading>
        <ProfileCard />
      </Container>
    </VStack>
  );
};
