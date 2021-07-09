import React, { FC } from "react";

interface ITextProps {
  color?: string;
}

const Text: FC<ITextProps> = ({ color }) => {
  return <p style={{ color: color }}>Hello World</p>;
};

export default Text;
