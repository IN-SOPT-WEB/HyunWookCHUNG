import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Content = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const getUser = async (userName) => {
    const response = await axios.get(
      `https://api.github.com/users/${userName}`
    );

    setUser(response.data);
  };

  useEffect(() => {
    if (params.username) {
      getUser(params.username);
    }
  }, [params.username]);
  return (
    <Container>
      <CloseButton
        onClick={() => {
          navigate("/search");
        }}
      >
        X
      </CloseButton>
      <ImageBox src={user.avatar_url} />
      <UserNickName>{user.name}</UserNickName>
      <UserName>{user.login}</UserName>
      <VisitButton onClick={() => window.open(user.html_url)}>
        Visit
      </VisitButton>
      <InfoBlock>
        <FollowerBlock>
          Followers
          <FollowerBlockNum>{user.followers}명</FollowerBlockNum>
        </FollowerBlock>
        <FollowingBlock>
          Following
          <FollowingBlockNum>{user.following}명</FollowingBlockNum>
        </FollowingBlock>
        <ReposBlock>
          Repos
          <ReposBlockNum>{user.public_repos}개</ReposBlockNum>
        </ReposBlock>
      </InfoBlock>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  position: relative;
  margin: 1.5rem auto;
  border-radius: 10px;
  background-color: #84b9bf;
  color: white;
  border: none;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageBox = styled.img`
  border: 3px solid black;
  height: 20rem;
  width: 20rem;
  margin-top: 2rem;
  display: inline-block;
`;

const UserNickName = styled.h1``;

const UserName = styled.h1``;

const VisitButton = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  width: 15rem;
  height: 2rem;
  font-weight: bold;
  font-size: 1.5rem;
`;

const InfoBlock = styled.div`
  height: 8rem;
  margin-top: 2rem;
  display: flex;
  width: 100%;
  font-weight: bold;
  justify-content: space-around;
`;

const FollowerBlock = styled.div`
  height: 80%;
  background-color: white;
  color: black;
  border-radius: 2rem;
  width: 10rem;
  text-align: center;
  padding-top: 1rem;
  font-size: 1.5rem;
`;
const FollowerBlockNum = styled.div`
  text-align: center;
  margin-top: 2rem;
`;
const FollowingBlock = styled.div`
  height: 80%;
  background-color: white;
  color: black;
  border-radius: 2rem;
  width: 10rem;
  text-align: center;
  padding-top: 1rem;
  font-size: 1.5rem;
`;
const FollowingBlockNum = styled.div`
  text-align: center;
  margin-top: 2rem;
`;
const ReposBlock = styled.div`
  height: 80%;
  background-color: white;
  color: black;
  border-radius: 2rem;
  width: 10rem;
  text-align: center;
  padding-top: 1rem;
  font-size: 1.5rem;
`;
const ReposBlockNum = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 20px;
  font-weight: bold;
  color: red;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;
