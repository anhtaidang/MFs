import React from "react";

interface Props {
  text: string;
}

const ComponentTest = function ComponentTest({ text }: Props) {
  return (
    <>
      <div>{text}</div>
      <div className="test-image" />
    </>
  );
};

export default ComponentTest;
