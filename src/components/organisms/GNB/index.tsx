import styled from "styled-components";
import Typography from "../../atoms/Typography";
import { Link } from "react-router-dom";
const Header = styled.header`
  height: 70px;
  background-color: rgb(0, 0, 0);
`;
const Nav = styled.nav`
  height: 100%;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 20px;
`;
export default function GNB() {
  return (
    <Header>
      <Nav>
        <Link to="/">
          <Typography variant="h1" color="white">
            Motionlabs
          </Typography>
        </Link>
        \
      </Nav>
    </Header>
  );
}
