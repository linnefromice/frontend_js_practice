import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core"

function App() {
  const [useString, setUseString] = useState("1");
  const [useNumber, setUseNumber] = useState(1);
  const [useBoolean, setUseBoolean] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Box>
          <FormControl component="fieldset">
            <FormLabel component="legend">String</FormLabel>
            <RadioGroup
              defaultValue="1"
              // value={useString}
              onChange={e => setUseString(e.target.value)}
              name="customized-radios"
            >
              <FormControlLabel value={"1"} control={<Radio color="primary"/>} label="1" />
              <FormControlLabel value={"2"} control={<Radio color="primary"/>} label="2" />
              <FormControlLabel value={"3"} control={<Radio color="primary"/>} label="3" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box>
          <FormControl component="fieldset">
            <FormLabel component="legend">Number</FormLabel>
            <RadioGroup
              defaultValue={1}
              // value={useNumber}
              onChange={e => setUseNumber(parseInt(e.target.value))}
              name="customized-radios"
            >
              <FormControlLabel value={1} control={<Radio color="primary"/>} label="1" />
              <FormControlLabel value={2} control={<Radio color="primary"/>} label="2" />
              <FormControlLabel value={3} control={<Radio color="primary"/>} label="3" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box>
          <FormControl component="fieldset">
          <FormLabel component="legend">Boolean</FormLabel>
            <RadioGroup
              defaultValue={true}
              // value={useBoolean}
              onChange={e => setUseBoolean(Boolean(e.target.value))}
              name="customized-radios"
            >
              <FormControlLabel value={false} control={<Radio color="primary"/>} label="true" />
              <FormControlLabel value={true} control={<Radio color="primary"/>} label="false" />
            </RadioGroup>
          </FormControl>
        </Box>
      </header>
    </div>
  );
}

export default App;
