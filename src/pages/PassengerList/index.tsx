import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '../../components/atoms/Typography';
import { CardList } from './style';

export default function PassengerList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = 'https://api.instantwebtools.net/v1/passenger?page=0&size=10';
    axios.get(url).then((response) => {
      let {
        data: { data },
      } = response;

      setData(data);
      console.log(data);
    });
  }, []);

  if (data.length === 0) {
    return <p>loading...</p>;
  }

  interface DataType {
    name: string;
    trips: number;
    airline: [
      {
        logo: string;
        slogan: string;
      }
    ];
    _id: number;
  }

  return (
    <>
      <header>
        <Typography variant='h1'>Passenger List</Typography>
      </header>

      {data.map(
        ({ _id, name, trips, airline: [{ logo, slogan }] }: DataType) => (
          <CardList key={_id}>
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
        )
      )}
    </>
  );
}
