import React from "react";
import styled, { css } from "styled-components";

const Logo = styled.div`
  font-size: 1.5em;
  color: orange;
`;

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonStyled = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      color: blue;
      text-shadow: 0px 0px 30px orange;
    `}
`;

function toProperCase(lower) {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({ name, active }) {
  return <ControlButtonStyled active={active}>{toProperCase(name)}</ControlButtonStyled>;
}

export default function () {
  return (
    <Bar>
      <Logo> CryptoDash </Logo>
      <div></div>
      <ControlButton active name="dashboard"/>
      <ControlButton name="settings"/>
    </Bar>
  );
}
