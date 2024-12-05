import { useEffect, useRef, useState } from "react";
import {
  Container,
  SearchInput,
  IconRightArrow,
  IconMagnifyingGlass,
} from "./styles";

function Search({ setSearchQuery }) {
  const targetRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showSearchInput = isHovered || isFocused;

  const handleInputChange = () => {
    setSearchQuery(targetRef.current.value); // Update the search query in the parent
  };

  useEffect(() => {
    targetRef.current.value = "";
  }, [showSearchInput]);

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      hover={showSearchInput}
    >
      <SearchInput
        ref={targetRef}
        showSearchInput={showSearchInput}
        onChange={handleInputChange} // Trigger filtering logic on input change
      />
      {showSearchInput ? <IconRightArrow /> : <IconMagnifyingGlass />}
    </Container>
  );
}

export default Search;
