import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0px auto;
  max-width: 600px;
  background-color: rgb(255, 255, 255);
  min-height: 100vh;
  height: 100%;
`;

const Layout: FC = ({ children }) => {
  return <Container>{children}</Container>;
};
export default Layout;
