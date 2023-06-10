import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const limit = 300;
  if (children.length <= limit) return <Text>{children}</Text>;
  const [isClicked, setIsClicked] = useState(false);
  const sliced = isClicked ? children : children.slice(0, limit) + "...";
  return (
    <Text>
      {sliced + " "}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setIsClicked(!isClicked)}
      >
        {isClicked ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
