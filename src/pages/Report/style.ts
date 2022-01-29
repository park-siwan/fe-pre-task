import styled from "styled-components";

export const ReportContainer = styled.div`
  padding: 20px;
`;
export const ReportWrap = styled.div`
  border: 1px solid rgb(234, 234, 234);
  border-radius: 10px;
`;
export const Header = styled.header`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  div:nth-child(1) {
    background-color: rgb(34, 34, 34);
    width: 7px;
    height: 7px;
    border-radius: 14px;
    margin-right: 6px;
  }
  div:nth-child(3) {
    background-color: rgb(34, 34, 34);
    width: 22px;
    height: 7px;
    border-radius: 14px;
    margin-right: 6px;
    margin-left: 18px;
  }

  h2 {
    font-size: 10px;
    color: rgb(96, 96, 96);
    font-weight: 400;
  }
`;

export const LineChartContainer = styled.div`
  margin-bottom: 40px;
`;
export const BarChartContainer = styled.div`
  margin-bottom: 20px;
`;
export const Svg = styled.svg`
  height: 160px;
  width: 100%;
`;
export const Circle = styled.circle`
  r: 4.5;
  fill: #222;
`;
export const Text = styled.text`
  fill: ${(props) => props.color};
  font-size: 12px;
  font-weight: ${(props) => props.fontWeight || "bold"};
  text-anchor: middle;
`;
export const Line = styled.line`
  stroke: #222;
  stroke-width: 2;
`;
export const Bar = styled.rect`
  fill: rgb(51, 51, 51);
  width: 30px;
  rx: 10px;
  ry: 10px;
`;
