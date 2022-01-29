import styled from "styled-components";
export const LineChartContainer = styled.div`
  margin-bottom: 40px;
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
  font-weight: bold;
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
