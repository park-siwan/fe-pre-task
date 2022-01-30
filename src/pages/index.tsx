import Layout from '../Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Report from './Report';
import Passenger from './PassengerList';
import NotFound from './NotFound';

export default function Root() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/report' element={<Report />} />
        <Route path='/passenger' element={<Passenger />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
