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

const PancakeStackRaw: FC<{ className?: string }> = (props) => {
  return (
    <div {...props}>
      <div className="parent">
        <header className="section yellow">Header</header>
        <main className="section blue">Main</main>
        <footer className="section green">Footer</footer>
      </div>
    </div>
  )
}

export const PancakeStack = styled(PancakeStackRaw)`
  .parent {
    display: grid;
    grid-template-rows: auto 1fr auto;

    height: 20vh; /* Just for parent demo size */
  }
  .section {
    font-size: 18px;
    font-weight: 500;
  }
  .yellow { background-color: coral; }
  .blue { background-color: lightblue; }
  .green { background-color: lightgreen; }
`

const RamRaw: FC<{ className?: string }> = (props) => {
  return (
    <div {...props}>
      <div className="parent white">
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
      </div>
    </div>
  )
}

export const Ram = styled(RamRaw)`
  .parent {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  .box {
    height: 48px;
    background-color: plum;
    border: 1px solid purple;
    border-radius: 8px;
  }
`

const SidebarSaysRaw: FC<{ className?: string }> = (props) => {
  return (
    <div {...props}>
      <div className="parent">
        <div className="section yellow">Min: 100% / Max: 25%</div>
        <div className="section blue">
          This element takes the second grid position (1fr), meaning it takes up the rest of the remaining space.
        </div>
      </div>
    </div>
  )
}

export const SidebarSays = styled(SidebarSaysRaw)`
  .parent {
    display: grid;
    grid-template-columns: minmax(100px, 25%) 1fr;
  }
  .yellow { background-color: coral; }
  .blue { background-color: lightblue; }
`

const TwelveSpanGridRaw: FC<{ className?: string }> = (props) => {
  return (
    <div {...props}>
      <div className="parent">
        <div className="span-12 section coral">Span 12</div>
        <div className="span-6 section green">Span 6</div>
        <div className="span-4 section yellow">Span 4</div>
        <div className="span-2 section blue">Span 2</div>
      </div>
    </div>
  )
}

export const TwelveSpanGrid = styled(TwelveSpanGridRaw)`
  .parent {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
  .section {
    border: 1px solid gray;
  }
  .span-12 {
    grid-column: 1 / span 12;
  }
  .span-6 {
    grid-column: 1 / span 6;
  }
  .span-4 {
    grid-column: 4 / span 4;
  }
  .span-2 {
    grid-column: 3 / span 2;
  }
  .coral { background-color: coral; }
  .green { background-color: lightgreen; }
  .yellow { background-color: lightyellow; }
  .blue { background-color: lightblue; }
`
