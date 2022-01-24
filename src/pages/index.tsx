import Layout from "../Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Report from "./Report";
import Passenger from "./PassengerList";

export default function Root() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/passenger" element={<Passenger />} />
      </Routes>
    </Layout>
  );
}
