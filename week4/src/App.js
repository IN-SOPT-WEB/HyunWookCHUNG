import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Content from "./Content";
import Header from "./Header";
import Router from "./Router";

const App = () => {
  const [click, setClick] = useState("검색해주세요!");

  return <Router />;
};
export default App;

const MainBlock = styled.div`
  margin: 2rem auto 1rem auto;
`;
