import React from "react";
import {
  Provider,
  defaultTheme,
  Button,
  Header,
  Footer,
  Content,
} from "@adobe/react-spectrum";

function App() {
  return (
    <Provider theme={defaultTheme}>
      <Header>Header</Header>
      <Content>
        Content
        <Button variant="cta" onPress={() => alert("Hey there!")}>
          Hello, React Spectrum!
        </Button>
      </Content>
      <Footer>Footer</Footer>
    </Provider>
  );
}

export default App;
