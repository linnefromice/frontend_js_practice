import { NextPage } from "next";
import * as L from "../components/layouts";

const Layouts: NextPage = () => {
  return (
    <div style={{ padding: "16px" }}>
      <h1>Layouts</h1>
      <h2>aspect ratio</h2>
      <L.AspectRatio />
      <h2>Autobot</h2>
      <L.Autobot />
      <h2>Clamping card</h2>
      <L.ClampingCard />
      <h2>Deconstructed pancake</h2>
      <L.DeconstructedPancake />
      <h2>Holy grail layout</h2>
      <L.HolyGrailLayout />
      <h2>Line up</h2>
      <L.LineUp />
      <h2>Pancake stack</h2>
      <L.PancakeStack />
      <h2>RAM (Repeat, Auto, Minmax)</h2>
      <L.Ram />
    </div>
  )
}

export default Layouts