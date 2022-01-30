import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '../../components/atoms/Typography';
import { CardList } from './style';
import InfiniteScroll from './InfiniteScroll';
interface Airline {
  logo: string;
  slogan: string;
}

interface DataType {
  _id: string;
  name: string;
  trips: number;
  airline: Airline[];
}

export default function PassengerList() {
  const [data, setData] = useState<Array<DataType>>([]);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    const params = { page, size: 10 };
    console.log(`page${page}장 로드됨`);
    const url = 'https://api.instantwebtools.net/v1/passenger';
    try {
      setLoading(true);
      const res = await axios.get(url, { params });
      const newData = res.data.data;
      const isLast = res.data.totalPages === page;
      setData((prev) => [...prev, ...newData]);
      setIsLast(isLast);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.error(e);
    }
  };

  useEffect(() => {
    !isLast && getData(); //마지막페이지가 아니면 호출
  }, [page]); //페이지가 변경될 때 마다 호출

  if (data.length === 0) {
    return <p>loading...</p>;
  }

  return (
    <>
      <header>
        <Typography variant='h1'>Passenger List</Typography>
      </header>

      {data.map(({ _id, name, trips, airline: [{ logo, slogan }] }, index) => (
        <InfiniteScroll
          key={_id}
          isLastItem={data.length - 1 === index}
          setPage={setPage}
          loading={loading}
        >
          <CardList>
            <header>
              <h3>{name}</h3>
              <h4>{trips} trips</h4>
            </header>
            <main>
              <img src={logo} alt={name} />
              <h2>{slogan}</h2>
            </main>
            <footer>
              <h5>{_id}</h5>
            </footer>
          </CardList>
        </InfiniteScroll>
      ))}
    </>
  );
}
