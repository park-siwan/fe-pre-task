import React from "react";
import { Circle, Text, Line } from "../style";
import { dataProps, START_POINT, Group } from "../common";

export default function LineChart({ data }: dataProps) {
  //CircleList LineList에서 사용하는 공통 상수값
  const TEXT_MARGIN = -10; //글자 정렬용
  const DOWN_Y = 160;
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
  return (
    <>
      <LineList />
      <CircleList />
    </>
  );
}
