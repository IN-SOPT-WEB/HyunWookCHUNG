import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };

  return (
    <HeaderBlock>
      <HeaderWrapper>Github Profile Finder </HeaderWrapper>
      <SearchBar onSubmit={onSubmit}>
        <SearchBlock
          type="text"
          value={input}
          onChange={onChange}
        ></SearchBlock>
        <SearchButton type="submit">go</SearchButton>
      </SearchBar>
    </HeaderBlock>
  );
};

export default Header;

const HeaderBlock = styled.header`
  margin: 0 auto;
  border-radius: 10px;
  background-color: #84b9bf;
  color: white;
  border: none;
  /* height: 7rem; */
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBar = styled.form`
  display: flex;
  width: 100%;
  margin: 0 0 0 50%;
`;
const SearchBlock = styled.input`
  border: none;
  border-radius: 50px;
  width: 45%;
  height: 3rem;
  font-size: 1.5rem;
  /* display: inline-block; */
  margin-bottom: 1.5rem;
`;
const SearchButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  font-size: 1.5rem;
  margin-left: 0.5rem;
  border: none;
`;
const HeaderWrapper = styled.h1`
  text-align: center;
`;
