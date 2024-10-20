import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Header } from "../components/header";
import { Pastels } from "../components/pastels";
import {Chanel} from "../components/chanel"
import { Bowl } from "../components/bowl";
import { Googl } from "../components/googl";
import { Orign } from "../components/orign"

export function RouteWrraper () {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
        <Route path="/pastels" element={<Pastels />} />
        <Route path="/Chanel" element={<Chanel />} />
        <Route path="/Bowl" element={<Bowl />} />
        <Route path="/Googl" element={<Googl />} />
        <Route path="/Orign" element={<Orign />} /> 
      </Routes>
    </>
  );
}
