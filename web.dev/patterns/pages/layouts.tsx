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
    </div>
  )
}

export default Layouts