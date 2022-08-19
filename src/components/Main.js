import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import styled from "styled-components";

function Main() {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <NavLink to="/search">
        <Button>week1_Search</Button>
      </NavLink>
      <NavLink to="/iconbutton">
        <Button>Week2_Button</Button>
      </NavLink>
      <NavLink to="/modal">
        <Button>Week3_Modal</Button>
      </NavLink>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
