import { FC } from "react";
import styled from "styled-components"

const AspectRatioRaw: FC<{ className?: string }> = (props) => {
  return (
    <div {...props}>
      <div className={`parent`}>
        <div className="card">
          <h1>Video Title</h1>
          <div className="visual"></div>
          <p>Tony Stark is charismatic and eccentric, he is also very proud, but also very altruist and heroic.</p>
          <p>He did not have a good childhood, and this affects how he acts. Stark is very smart, and a very talented inventor.</p>
          <p>His technology is always very advanced, and Iron Man is his greatest piece of work.</p>
        </div>
      </div>
    </div>
  )
}
export const AspectRatio = styled(AspectRatioRaw)`
  display: inline-block;
  .parent {
    background-color: lightblue;
    border: 1px solid blue;
    display: grid;
    place-items: center;
  }
  .card {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  .visual {
    background-color: lightgreen;
    border: 1px solid green;
    aspect-ratio: 16 / 9;
  }
`;

const AutobotRaw: FC<{ className?: string }> = (props) => {
  return (
    <div {...props}>
      <article className="autobot">
        <div>
          <h1>Autobot</h1>
          <p>description</p>
        </div>
      </article>
    </div>
  )
}

export const Autobot = styled(AutobotRaw)`
  .autobot {
    display: flex;
    border: 1px solid pink;
    background-color: gray;
  }
  .autobot > * {
    margin: auto;
    border: 1px solid pink;
    background-color: gray;
  }
`

const ClampingCardRaw: FC<{ className?: string }> = (props) => {
  return (
    <div {...props}>
      <div className="parent">
        <div className="card">
          <h1>Title here</h1>
          <div className="visual"></div>
          <p>Descriptive Text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed est error repellat veritatis.</p>
        </div>
      </div>
    </div>
  )
}

export const ClampingCard = styled(ClampingCardRaw)`
  .parent {
    border: 1px solid blue;
    background-color: lightblue;
    display: grid;
    place-items: center;
  }
  .card {
    width: clamp(40ch, 60%, 46ch);
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
  .visual {
    border: 1px solid green;
    background-color: lightgreen;
    height: 125px;
    width: 100%;
  }
`

const DeconstructedPancakeRaw: FC<{ className?: string }> = (props) => {
  return (
    <div {...props}>
      <div className="parent">
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
      </div>
    </div>
  )
}

export const DeconstructedPancake = styled(DeconstructedPancakeRaw)`
  .parent {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .box {
    background-color: plum;
    border: 1px solid darkviolet;
    text-align: center;
    /* Stretching */
    flex: 1 1 150px;
    margin: 5px;
    gap: 1rem;
  }
`
