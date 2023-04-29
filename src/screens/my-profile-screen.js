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
import { TypographyP4 } from "../components/typography/p4";

export const MyProfileScreen = () => {
  return (
    <VStack space={3} justifyContent={"center"} alignItems={"center"}>
      <TopSearch />
      <Container
        minWidth={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VStack space={3} paddingLeft={5} paddingRight={5}>
          <Box width={"100%"}>
            <CustomAlert />
            <TypographyP4 text={"Seu Perfil"} />
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
