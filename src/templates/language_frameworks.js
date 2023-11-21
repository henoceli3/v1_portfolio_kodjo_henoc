import theme from "@/styles/root";
import { Center,Text } from "@chakra-ui/react";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LanguagesFrameworks = ({ children }) => {
  return (
    <>
      <Center justifyContent={"start"}>
        <FontAwesomeIcon
          icon={faCaretRight}
          style={{ color: theme.green }}
          size="xs"
        />
        <Text ml={"1em"}>{children.name}</Text>
      </Center>
    </>
  );
};

export default LanguagesFrameworks;
