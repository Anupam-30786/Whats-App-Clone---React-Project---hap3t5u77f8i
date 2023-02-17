import React from "react";
import { InputGroup, Form } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
function SearchBar() {
  return (
    <div className="d-flex align-items-lg-center">
      <InputGroup size="sm" className="m-3">
        <InputGroup.Text id="inputGroup-sizing-sm" placeholder="hello">
          {<AiOutlineSearch />}
        </InputGroup.Text>
        <Form.Control
          aria-label="small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <span className="m-2">
        <BsFilter size={20} />
      </span>
    </div>
  );
}

export default SearchBar;
