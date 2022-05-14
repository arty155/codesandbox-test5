import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  const context = useContext(UserContext);
  console.log(context);
  console.log(context.userinfo.isAdmin);

  return (
    <SContainer>
      <SImg height={160} width={160} alt="プロフィール写真" src={image} />
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
