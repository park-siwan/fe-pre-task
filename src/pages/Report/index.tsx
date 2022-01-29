import React, { ReactSVGElement, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Svg, Circle, Text } from "./style";

export default function Report() {
  //라인차트는 cycle 사용, 바 차트는 period, startDate
  const [data, setData] = useState([{ cycle: 0, period: 0, startDate: "" }]);

  useEffect(() => {
    const url = "https://motionz-kr.github.io/playground/apis/report.json";
    axios.get(url).then((response) => {
      const {
        data: { data },
      } = response;

      console.log(data);
      setData(data);
    });
  }, []);
  if (typeof data === "undefined" || data[0].cycle === 0) {
    return null;
  }

  //CircleList에 영향을 주는 상수 정의
  const START_POINT = 100;
  const TEXT_CENTER = -10; //글자 가운데 정렬용
  const DOWN_Y = 160;

  interface GroupProps {
    x: number;
    y: number;
    children: JSX.Element[];
  }
  const Group = ({ x, y, children }: GroupProps): JSX.Element => {
    return <g transform={`translate(${x},${y})`}>{children}</g>;
  };

  const CircleList = (): JSX.Element => {
    return (
      <>
        {data.map(({ cycle }, index: number) => {
          if (index === 0) {
            return (
              <Group x={START_POINT} y={DOWN_Y - cycle} key={cycle}>
                <Text x={TEXT_CENTER} y={TEXT_CENTER}>
                  {cycle}일
                </Text>
                <Circle />
              </Group>
            );
          } else {
            return (
              <Group
                x={START_POINT * (index + 1)}
                y={DOWN_Y - cycle}
                key={cycle}
              >
                <Text x={TEXT_CENTER} y={TEXT_CENTER}>
                  {cycle}일
                </Text>
                <Circle />
              </Group>
            );
          }
        })}
      </>
    );
  };

  return (
    <>
      <h1>User Report</h1>
      <div>
        <header>상태</header>
        <div>
          라인차트
          <Svg>
            <CircleList />
          </Svg>
        </div>
        <div> 바차트</div>
      </div>
    </>
  );
}
