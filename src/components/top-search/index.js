import { HStack, Input } from "native-base";
import { Feather } from "@expo/vector-icons";

export const TopSearch = () => {
  return (
    <HStack
      bg={"#006557"}
      w="full"
      space={3}
      py={4}
      alignItems={"center"}
      justifyContent={"center"}
      safeAreaTop
      minHeight={250}
    >
      <Input
        InputLeftElement={
          <Feather
            name="search"
            size={24}
            color="black"
            style={{ marginLeft: "8px" }}
          />
        }
        variant={"filled"}
        placeholder="Buscar Capacitações, profissionais..."
        w="85%"
        type="search"
        h={12}
        borderWidht={0}
        bgColor={"white"}
        color={"black"}
      />
    </HStack>
  );
};
