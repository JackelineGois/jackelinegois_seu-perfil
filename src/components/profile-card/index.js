import { HStack, Avatar, Box, Text } from "native-base";

export const ProfileCard = () => {
  return (
    <HStack>
      <Avatar mr={2} />
      <Box>
        <Text> Name</Text>
        <Text> State</Text>
        <Box>Stars </Box>
      </Box>
    </HStack>
  );
};