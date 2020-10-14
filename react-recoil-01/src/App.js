import React from 'react';
import {
  RecoilRoot,
  atom,
  useRecoilState,
} from 'recoil'

const textState = atom({
  key: "textState",
  default: "",
})

const TextInput = () => {
  const [text, setText] = useRecoilState(textState)
  const onChange = (event) => setText(event.target.value)

  return (
    <>
      <input type="text" value={text} onChange={onChange}/>
      <br/>
      Echo: {text}
    </>
  )
}

const App = () => (
  <RecoilRoot>
    <h1>DEMO</h1>
    <TextInput/>
  </RecoilRoot>
)


export default App;
