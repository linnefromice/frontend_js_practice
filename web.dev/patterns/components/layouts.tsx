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

const HolyGrailLayoutRaw: FC<{ className?: string }> = (props) => {
  return (
    <div {...props}>
      <div className="parent">
        <header className="section coral">Header</header>
        <div className="left-side section blue">Left Sidebar</div>
        <main className="section green">Main Content</main>
        <div className="right-side section yellow">Right Sidebar</div>
        <footer className="section coral">Footer</footer>
      </div>
    </div>
  )
}

export const HolyGrailLayout = styled(HolyGrailLayoutRaw)`
  .parent {
    height: 20vh;
    display: grid;
    grid-template: auto 1fr auto / auto 1fr auto;
  }
  header {
    grid-column: 1 / 4;
  }
  .left-side {
    grid-column: 1 / 2;
  }
  main {
    grid-column: 2 / 3;
  }
  .right-side {
    grid-column: 3 / 4;
  }
  footer {
    grid-column: 1 / 4;
  }
  /* for coloring */
  .section {
    padding-top: 4px;
    padding-left: 4px;
    border: 1px dotted;
  }
  .coral {
    background-color: coral;
    border-color: red;
  }
  .blue {
    background-color: lightblue;
    border: blue;
  }
  .green {
    background-color: lightgreen;
    border: green;
  }
  .yellow {
    background-color: lightyellow;
    border: yellow;
  }
`

const LineUpRaw: FC<{ className?: string }> = (props) => {
  return (
    <div {...props}>
      <div className="container">
        <div className="card">
          <h3>Title - Card 1</h3>
          <p contentEditable>Medium length description with a few more words here.</p>
          <div className="visual"/>
        </div>
        <div className="card">
          <h3>Title - Card 2</h3>
          <p contentEditable>Long Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <div className="visual"/>
        </div>
        <div className="card">
          <h3>Title - Card 3</h3>
          <p contentEditable>Short Description.</p>
          <div className="visual"/>
        </div>
      </div>
    </div>
  )
}

export const LineUp = styled(LineUpRaw)`
  .container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
  }
  .card {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: space-between;

    border: 1px solid blue;
    background-color: lightblue;
  }
  .visual {
    height: 100px;
    width: 100%;

    border: 1px solid green;
    background-color: lightgreen;
  }
  h3 {
    margin: 0;
  }
`
