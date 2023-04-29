import { VStack } from "native-base";
import { TopSearch } from "../components/top-search";

export const MyProfileScreen = () => {
  return (
    <VStack space={3} justifyContent={"center"} alignItems={"center"}>
      <TopSearch />
    </VStack>
  );
};
