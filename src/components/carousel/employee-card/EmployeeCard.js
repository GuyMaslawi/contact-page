import React from "react";
import {
  EmployeeCardWrapper,
  Img,
  FirstName,
  Role,
} from "./EmployeeCard.style";

const EmployeeCard = ({ data }) => {
  return (
    <EmployeeCardWrapper>
      <Img src={data.img} alt={`Img of ${data.name}`} />
      <FirstName>{data.name}</FirstName>
      <Role>{data.role}</Role>
    </EmployeeCardWrapper>
  );
};

export default EmployeeCard;
