import { HStack, Input } from "native-base";
import { Feather } from "@expo/vector-icons";
import { Palette } from "../../theme/palette";

export const TopSearch = () => {
  return (
    <HStack
      bg={"#006557"}
      w="full"
      space={3}
      py={4}
      alignItems={"end"}
      justifyContent={"center"}
      safeAreaTop
      minHeight={150}
    >
      <Input
        placeholderTextColor={Palette.text}
        marginBottom={3}
        InputLeftElement={
          <Feather
            name="search"
            size={14}
            color={Palette.text}
            style={{ marginLeft: "8px" }}
          />
        }
        fontSize={14}
        fontWeight={"regular"}
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
