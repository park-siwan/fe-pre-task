import styled from "styled-components";

const H1 = styled.h1`
  color: ${(props) => props.color || "rgb(36, 36, 36)"};
  font-size: 24px;
  font-weight: 700;
`;
const H2 = styled.h2``;

type TypographyProps = {
  variant: string;
  children: string;
  color?: string;
};

const Typography = ({ variant, children, color }: TypographyProps): any => {
  switch (variant) {
    case "h1":
      return <H1 color={color}>{children}</H1>;
    case "h2":
      return <H2 color={color}>{children}</H2>;
    default:
      <p>{children}</p>;
  }
};
export default Typography;
