import React, { useState, useEffect } from "react";
import axios from "axios";
import { Svg, LineChartContainer } from "./style";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

export default function Report() {
  //라인차트는 cycle 사용, 바 차트는 period, startDate
  const [data, setData] = useState([
    { cycle: 0, period: 0, startDate: "", maxPeriod: 0 },
  ]);

  useEffect(() => {
    //BarChart에서 사용할 최대 값을 구한다.
    const maxPeriodFindPush = (data: [{ maxPeriod: number }]) => {
      let periodList: [number] = [0];
      data.forEach((item: any) => {
        periodList.push(item.period);
      });
      const maxPeriod: number = Math.max(...periodList);
      for (let i in data) {
        data[i].maxPeriod = maxPeriod;
      }
    };

    const url = "https://motionz-kr.github.io/playground/apis/report.json";
    axios.get(url).then((response) => {
      let {
        data: { data },
      } = response;
      maxPeriodFindPush(data);
      setData(data);
      console.log(data);
    });
  }, []);

  if (typeof data === "undefined" || data[0].cycle === 0) {
    return null;
  }

  return (
    <>
      <h1>User Report</h1>
      <div>
        <header>상태</header>
        <LineChartContainer>
          <Svg>
            <LineChart data={data} />
          </Svg>
        </LineChartContainer>
        <div>
          <Svg>
            <BarChart data={data} />
          </Svg>
        </div>
      </div>
    </>
  );
}
