import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  padding-left: 40px;
`;
const Li = styled.li`
  margin: 40px 0px;
  list-style-type: disc;
  text-decoration: underline;
  font-weight: bold;
  a {
    font-size: 18px;
  }
`;
export default function Home() {
  return (
    <Ul>
      <Li>
        <Link to='/report'>레포트</Link>
      </Li>
      <Li>
        <Link to='/passenger'>승객목록</Link>
      </Li>
    </Ul>
  );
}
