import React from "react";

interface Props extends React.PropsWithChildren {
  title: string;
}

const Section = ({ children, title }: Props) => {
  return (
    <section className="p-2 flex flex-col gap-2">
      <h2 className="text-lg font-bold">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
