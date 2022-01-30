import React, { useState, useEffect } from "react";
import axios from "axios";
export default function PassengerList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://api.instantwebtools.net/v1/passenger?page=0&size=10";
    axios.get(url).then((response) => {
      let {
        data: { data },
      } = response;

      setData(data);
      console.log(data);
    });
  }, []);

  if (typeof data === "undefined") {
    return null;
  }

  interface itemList {
    name: string;
    _id: number;
  }

  return (
    <div>
      {data.map(({ _id, name }: itemList) => (
        <div key={_id}>{name}</div>
      ))}
    </div>
  );
}
