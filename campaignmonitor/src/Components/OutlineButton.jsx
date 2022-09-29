import { Button } from "@chakra-ui/react";

function OutlineButton({ text }) {
  return (
    <Button
      w="257.39px"
      h="60.93px"
      colorScheme="purple"
      variant="outline"
      size="lg"
      _hover={{ bg: "#6B46C1", color: "white" }}
    >
      {text}
    </Button>
  );
}

export default OutlineButton;
