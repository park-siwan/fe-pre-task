import React from "react";
import { format } from "date-fns";
import { Text, Bar } from "../style";
import { dataProps, START_POINT, Group } from "../common";
export default function BarChart({ data }: dataProps) {
  const BarList = (): JSX.Element => {
    return (
      <>
        {data.map(({ period, startDate, maxPeriod }, index: number) => {
          const RELATIVE_RATIO = 100 * (period / maxPeriod);
          return (
            <Group x={START_POINT * (index + 1)} y={30} key={period}>
              <Text y={-10}>{period}일</Text>
              <Bar
                x={-15}
                y={100 - RELATIVE_RATIO}
                height={RELATIVE_RATIO}
              ></Bar>
              <Text y={125}>{format(new Date(startDate), "MM/dd")}</Text>
            </Group>
          );
        })}
      </>
    );
  };
  return <BarList />;
}
