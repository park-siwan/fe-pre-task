import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { Svg, Circle, Text, Line, Bar } from "./style";
import styled from "styled-components";

const LineListContainer = styled.div`
  margin-bottom: 40px;
`;

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

  //CircleList LineList에서 사용하는 공통 상수값
  const START_POINT = 100;
  const TEXT_MARGIN = -10; //글자 정렬용
  const DOWN_Y = 160;

  interface GroupProps {
    x: number;
    y: number;
    children: JSX.Element[];
  }
  const Group = ({ x, y, children }: GroupProps): JSX.Element => {
    // const GroupStyle = styled.g`
    //   /* display: flex; */
    //   display: block;
    //   margin: auto;
    //   /* transform-origin: center center; */
    //   /* width: 30px; */
    // `;
    return <g transform={`translate(${x},${y})`}>{children}</g>;
  };

  const CircleList = (): JSX.Element => {
    return (
      <>
        {data.map(({ cycle }, index: number) => {
          if (index === 0) {
            return (
              <Group x={START_POINT} y={DOWN_Y - cycle} key={cycle}>
                <Text
                  y={TEXT_MARGIN}
                  color={cycle >= 100 ? "#f00" : "rgb(112, 112, 112)"}
                >
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
                <Text
                  y={TEXT_MARGIN}
                  color={cycle >= 100 ? "#f00" : "rgb(112, 112, 112)"}
                >
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

  const LineList = (): JSX.Element => {
    return (
      <>
        {data.map(({ cycle }, index: number) => {
          if (index !== data.length - 1) {
            return (
              <Line
                key={index}
                x1={START_POINT * (index + 1)}
                y1={DOWN_Y - cycle}
                x2={START_POINT * (index + 2)}
                y2={DOWN_Y - data[index + 1].cycle}
              ></Line>
            );
          } else {
            return null;
          }
        })}
      </>
    );
  };
  const BarList = (): JSX.Element => {
    //최대 값기준으로 상대비율
    //최대 100px
    //최대값 선별
    //4, 7, 5, 10, 15
    // max;
    return (
      <>
        {data.map(({ period, startDate }, index: number) => {
          return (
            <Group x={START_POINT * (index + 1)} y={30} key={period}>
              <Text y={50 - 10}>{period}일</Text>
              <Bar x={-15} y={50} height={50}></Bar>
              <Text y={125}>{format(new Date(startDate), "MM/dd")}</Text>
            </Group>
          );
        })}
      </>
    );
  };

  return (
    <>
      <h1>User Report</h1>
      <div>
        <header>상태</header>
        <LineListContainer>
          <Svg>
            <CircleList />
            <LineList />
          </Svg>
        </LineListContainer>
        <div>
          <Svg>
            <BarList />
          </Svg>
        </div>
      </div>
    </>
  );
}
