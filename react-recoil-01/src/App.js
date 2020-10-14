import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil'

const textState = atom({
  key: "textState",
  default: "",
})
const charCountState = selector({
  key: "charCountState",
  get: ({get}) => {
    const text = get(textState)
    return text.length
  }
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

const CharacterCount = () => {
  const count = useRecoilValue(charCountState)
  return <>Character Count: {count}</>
}

const App = () => (
  <RecoilRoot>
    <h1>DEMO</h1>
    <TextInput/>
    <CharacterCount/>
  </RecoilRoot>
)


export default App;
