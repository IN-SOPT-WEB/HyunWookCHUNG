import React, { useState } from "react";
import styled from "styled-components";
const answer = [
  {
    src: "img/좜.png",
    alt: "좜이다~",
    answer: "주함",
  },
  {
    src: "img/hyunwook.png",
    alt: "현욱이다~",
    answer: "현욱",
  },
  {
    src: "img/jiyoung.png",
    alt: "지영이다",
    answer: "지영",
  },
  {
    src: "img/jaewook.png",
    alt: "쨰욱쨰욱~",
    answer: "재욱",
  },
  {
    src: "img/hyunji.png",
    alt: "현지야",
    answer: "현지",
  },
];
export default function App() {
  const [score, setScore] = useState(0);

  const onCheck = (ans) => {
    if (ans === answer[score].answer) {
      setScore(score + 1);
    } else {
      console.log("틀림");
    }

    console.log(score, answer[score]);
  };

  return (
    <>
      <Container>
        <Header>당신 누구얒!</Header>
        <Content>
          <Score>{score} 점</Score>
          <Img src={answer[score].src} alt={answer[score].alt} />
          <ButtonBlock>
            <Btn onClick={() => onCheck("현욱")}>현욱</Btn>
            <Btn onClick={() => onCheck("재욱")}>재욱</Btn>
            <Btn onClick={() => onCheck("현지")}>현지</Btn>
            <Btn onClick={() => onCheck("지영")}>지영</Btn>
            <Btn onClick={() => onCheck("주함")}>주함</Btn>
          </ButtonBlock>
          <ResetButton
            onClick={() => {
              setScore(0);
            }}
          >
            다시하기~
          </ResetButton>
        </Content>
      </Container>
    </>
  );
}
const Container = styled.div`
  height: 58rem;
  background-color: #9f8772;
  position: relative;
`;
const Header = styled.div`
  background-color: #665a48;
  height: 4rem;
  text-align: center;
  line-height: 3.5rem;
  color: white;
  font-size: 25px;
`;
const Content = styled.div`
  background-color: #9f8772;
  text-align: center;
`;
const Score = styled.div`
  background-color: #eee3cb;
  height: 2rem;
  line-height: 2rem;
  font-weight: bold;
`;
const Img = styled.img`
  height: 20rem;
`;
const ButtonBlock = styled.div`
  background-color: #eee3cb;
`;
const ResetButton = styled.button`
  background-color: red;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  margin-top: 20px;
  color: white;
`;
const Btn = styled.button`
  margin: 2rem 1.5rem;
  border-radius: 10px;
  background-color: #665a48;
  color: white;
  border: none;
  height: 30px;
  width: auto;
`;
