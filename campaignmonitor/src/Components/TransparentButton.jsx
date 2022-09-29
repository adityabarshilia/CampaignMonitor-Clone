import { Button } from "@chakra-ui/react";

function TransparentButton({ text }) {
  return (
    <Button
      w="257.39px"
      h="60.93px"
      bg="white"
      color="#6B46C1"
      size="lg"
      _hover={{
        border: "1px solid white",
        color: "white",
        bg: "transparent",
      }}
    >
      {text}
    </Button>
  );
}

export default TransparentButton;
