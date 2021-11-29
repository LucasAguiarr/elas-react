import styled from "styled-components";
import { Colors } from "../../utils";

export const Text = styled.h5`
  color: ${Colors.black};
  font-family: sans-serif;
  font-size: 14px;
  font-weight: bold;
`;
export const Date = styled.h5`
  color: ${Colors.gray_dark};
  font-family: sans-serif;
  font-size: 12px;
`;

export const Container = styled.button`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: ${Colors.white};
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;

  border: 1px solid ${Colors.black};
  padding: 3px;
  transition: all 0.5s;

  :hover {
    background-color: ${Colors.black};

    ${Text} {
      color: ${Colors.white};
    }
    ${Date} {
      color: ${Colors.gray_light};
    }
  }
`;

export const Avatar = styled.div`
  display: flex;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.orange};
  border-radius: 10px;
  img {
    height: 45px;
    width: 45px;
    border-radius: 10px;
  }
`;
