import React from "react";
import { Header } from "../../components/header";
import { Pastels } from "../../components/pastels";
import { Chanel } from "../../components/chanel"
import { Bowl } from "../../components/bowl";
import { Googl } from "../../components/googl";
import { Orign } from "../../components/orign"

export const Home = () => {
  return (
    <>
      <Header />
      <Pastels />
      <Chanel />
      <Bowl />
      <Googl />
      <Orign />
    </>
  );
};
