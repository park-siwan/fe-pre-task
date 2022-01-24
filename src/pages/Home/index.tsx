import { Link } from "react-router-dom";
export default function Home() {
  return (
    <ul>
      <li>
        <Link to="/report">레포트</Link>
      </li>
      <li>
        <Link to="/passenger">승객목록</Link>
      </li>
    </ul>
  );
}
