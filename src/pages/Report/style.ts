import styled from "styled-components";

export const Svg = styled.svg`
  height: 160px;
  width: 100%;
`;
export const Circle = styled.circle`
  r: 4.5;
  fill: #222;
`;
export const Text = styled.text`
  fill: ${(props) => props.color || "rgb(112, 112, 112)"};
  font-size: 12px;
  font-weight: bold;
`;
export const Line = styled.line`
  stroke: #222;
  stroke-width: 2;
`;
