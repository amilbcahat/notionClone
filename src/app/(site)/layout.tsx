import React from "react";
//Typescript provides types of React.ReactNode for children of React
const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default HomePageLayout;
