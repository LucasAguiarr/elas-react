import React, { useEffect, useState } from "react";
import { Container, Avatar, Text, Date } from "./styles";
import profileUser from "../../assets/images/stitch.jpeg";
interface IProps {
  name: string;
  date: Date;
}

export const UserCard: React.FC<IProps> = ({ name, date }) => {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <Container>
      <Avatar>
        <img src={profileUser} alt="user image" />
      </Avatar>
      <Text>{name}</Text>
      <Date>{date.toLocaleDateString("pt-BR")}</Date>
    </Container>
  );
};
