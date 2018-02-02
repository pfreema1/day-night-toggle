import React, { Component } from "react";
import styled from "styled-components";
import BlackBoxAnimated from "./BlackBoxAnimated";

const Wrapper = styled.div``;

const ImageBox = styled.div`
  background: url("https://www.adventure-journal.com/wp-content/uploads/2015/06/o-the-glory-of-it-all.jpg");
  width: 600px;
  height: 400px;
  background-size: cover;
  background-position: center;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <ImageBox>
          <BlackBoxAnimated heightPercentage={5} />
          <BlackBoxAnimated heightPercentage={5} reverseDirection />
          <BlackBoxAnimated heightPercentage={5} />
          <BlackBoxAnimated heightPercentage={5} reverseDirection />
        </ImageBox>
      </Wrapper>
    );
  }
}

export default App;
