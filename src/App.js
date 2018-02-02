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
  constructor(props) {
    super(props);

    this.state = {
      animationNumber: 1
    };
  }

  componentDidMount() {
    setTimeout(this.startNextAnimation, 500);
    setTimeout(this.startNextAnimation, 1000);
    setTimeout(this.startNextAnimation, 1500);
  }

  startNextAnimation = () => {
    this.setState({
      animationNumber: this.state.animationNumber + 1
    });
  };

  render() {
    const { animationNumber } = this.state;

    return (
      <Wrapper>
        <ImageBox>
          <BlackBoxAnimated
            heightPercentage={25}
            startAnimation={animationNumber >= 1}
          />
          <BlackBoxAnimated
            heightPercentage={25}
            reverseDirection
            startAnimation={animationNumber >= 2}
          />
          <BlackBoxAnimated
            heightPercentage={25}
            startAnimation={animationNumber >= 3}
          />
          <BlackBoxAnimated
            heightPercentage={25}
            reverseDirection
            startAnimation={animationNumber >= 4}
          />
        </ImageBox>
      </Wrapper>
    );
  }
}

export default App;
