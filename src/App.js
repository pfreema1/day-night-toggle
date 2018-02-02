import React, { Component } from "react";
import styled from "styled-components";
import { Motion, StaggeredMotion, spring } from "react-motion";

const Wrapper = styled.div`
  background-color: #eaecf4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  font-family: Verdana, Geneva, sans-serif;
`;

const ImageWrapper = styled.div`
  > img {
    border-radius: 5px;
    max-height: 500px;
  }
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  background-color: #8e4055;
  color: white;
  margin-top: 10px;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacityNum: 1,
      imgSrc: "http://thecatapi.com/api/images/get?format=src&type=gif",
      key: 10
    };
  }

  handleClick = () => {
    //first set imgSrc to new src with cache buster, increment key to restart animation, and put opacityNum at
    //0 so the animation restarts
    this.setState(prevState => {
      console.log(prevState);
      return {
        imgSrc:
          "http://thecatapi.com/api/images/get?format=src&type=gif&" +
          this.state.key,
        key: prevState.key + 1,
        opacityNum: 0
      };
    });

    //load the image and when it is loaded, re-set the opacityNum to 1 so the animation will run
    this.loadImage(
      "http://thecatapi.com/api/images/get?format=src&type=gif&" +
        this.state.key
    ).then(img => {
      this.setState({
        opacityNum: 1
      });
      console.log(img);
    });
  };

  loadImage = url => {
    return new Promise((resolve, reject) => {
      let image = new Image();

      image.onload = function() {
        resolve(image);
      };

      image.src = url;
    });
  };

  render() {
    return (
      <Wrapper>
        <Motion
          key={this.state.key}
          defaultStyle={{ opacity: 0 }}
          style={{
            opacity: spring(this.state.opacityNum, {
              stiffness: 20,
              damping: 30
            })
          }}
        >
          {style => (
            <ImageWrapper style={style}>
              <img src={this.state.imgSrc} />
            </ImageWrapper>
          )}
        </Motion>
        <Button onClick={this.handleClick}>Cat Me!</Button>
      </Wrapper>
    );
  }
}

export default App;
