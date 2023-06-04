import { ChangeEventHandler, ChangeEvent } from "react";

import "./search-box.styles.css";

// Interface for objects in Typescript
// interface IsearchBoxProps {
//   ClassName: string;
//     placeholder?: string;
// }

// Main typescript addition
type SearchBoxProps = {
  className: string;
  placeholder?: string;
  //   onChangeHandler: ChangeEventHandler;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  onChangeHandler,
  placeholder,
  className,
}: SearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
