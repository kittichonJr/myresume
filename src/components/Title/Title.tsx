import React, { FC } from "react";

interface Props {
  title: string;
}
interface HeadTitle {
  first: string;
  rest: string | string[];
}

const Title: FC<Props> = ({ title }) => {
  const headTitle: HeadTitle = {
    first: "",
    rest: "",
  };
  const splitTitle = title.split("");
  if (splitTitle.includes(" ")) {
    const [first, ...rest] = title.split(" ");

    headTitle.first = first.concat(" ");
    headTitle.rest = rest;
  } else {
    const tempTitle = title.split("");
    const first = tempTitle.shift();

    headTitle.first = first!;
    headTitle.rest = tempTitle;
  }

  return (
    <section className="title-container">
      <div className="circle-shadow"></div>
      <h1 className="title">
        <span>{headTitle.first}</span>
        <span>{headTitle.rest}</span>
      </h1>
    </section>
  );
};

export default Title;
