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
import { TypographyLink } from "../components/typography/link";

export const MyProfileScreen = () => {
  return (
    <VStack space={3} justifyContent={"center"} alignItems={"center"}>
      <TopSearch />
      <Container
        minWidth={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VStack width={"100%"} space={3} paddingLeft={5} paddingRight={5}>
          <Box width={"100%"}>
            <CustomAlert />
            <TypographyP4 text={"Seu Perfil"} />
            <ProfileCard />

            <Divider marginTop={5} />
          </Box>
          <TypographyLink
            variant={"ghost"}
            rightIcon={
              <AntDesign name="arrowright" size={24} color="inherit" />
            }
            text={"Completar perfil"}
          />
          <Box marginBottom={2}>
            <HStack justifyContent={"space-between"} alignItems={"center"}>
              <TypographyP4 text={"Capacitações profissionais"} />
              <TypographyLink text={"Ver mais"} />
            </HStack>
          </Box>
        </VStack>
        <AdsSlider />
      </Container>
    </VStack>
  );
};
