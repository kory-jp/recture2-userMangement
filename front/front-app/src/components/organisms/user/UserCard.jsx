import React, {memo} from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/react"

export const UserCard = memo((props) => {
  const { id, imageUrl, userName, fullName, onClick } = props;
  return (
    <Box
      w="260px" 
      h="260px" 
      bg="white" 
      borderRadius="10px" 
      shadow="md" 
      p={4}
      _hover={{ cursor:"pointer", opacity: 0.8}}
      onClick={() => onClick(id)}
  >
    <Stack textAlign="center">
      <Image 
        borderRadius="full" 
        boxSize="160px" 
        src={imageUrl}
        alt={userName}
        m="auto"
      />
      <Text fontSize="lg" fontWeight="bold">{userName}</Text>
      <Text fontSize="sm" color="gray">{fullName}</Text>
    </Stack>
  </Box>
  )
})

export default UserCard;