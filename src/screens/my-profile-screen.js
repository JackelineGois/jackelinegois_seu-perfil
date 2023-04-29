import {
  VStack,
  Container,
  Heading,
  Divider,
  Button,
  Box,
  HStack,
  Text,
} from "native-base";
import { TopSearch } from "../components/top-search";
import { CustomAlert } from "../components/custom-alert";
import { ProfileCard } from "../components/profile-card";
import { AntDesign } from "@expo/vector-icons";
import { AdsSlider } from "../components/ads-slider/index.js";

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
        <VStack space={2} paddingLeft={5}>
          <Box width={"100%"}>
            <CustomAlert />
            <Heading size={"2x1"}> Seu Perfil</Heading>
            <ProfileCard />
            <Divider />
          </Box>

          <Button
            variant={"ghost"}
            rightIcon={<AntDesign name="arrowright" size={24} color="black" />}
          >
            Completar perfil
          </Button>
          <Box>
            <HStack justifyContent={"space-between"}>
              <Text> Capacitações profissionais</Text>
              <b>Ver Mais </b>
            </HStack>
          </Box>
        </VStack>
        <AdsSlider />
      </Container>
    </VStack>
  );
};
