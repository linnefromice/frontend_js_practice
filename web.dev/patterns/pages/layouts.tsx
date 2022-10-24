import { NextPage } from "next";
import { AspectRatio } from "../components/layouts";

const Layouts: NextPage = () => {
  return (
    <div style={{ margin: "16px" }}>
      <h1>Layouts</h1>
      <h2>aspect ratio</h2>
      <div><AspectRatio/></div>
    </div>
  )
}

export default Layouts