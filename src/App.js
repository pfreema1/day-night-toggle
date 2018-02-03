import React, { Component } from "react";
import styled from "styled-components";
import { Motion, spring } from "react-motion";

/* 
  STYLING
*/

/* styling vars */
//general
const borderThickness = 5;

//day
const dayWrapperBgColor = "RGBA(199, 229, 245, 1.00)";
const dayWrapperBorderColor = "RGBA(142, 193, 212, 1.00)";
const dayButtonBgColor = "RGBA(244, 236, 87, 1.00)";
const dayButtonBorderColor = "RGBA(224, 197, 89, 1.00)";

//night
const nightWrapperBgColor = "RGBA(72, 72, 72, 1.00)";
const nightWrapperBorderColor = "RGBA(32, 32, 32, 1.00)";
const nightButtonBgColor = "RGBA(255, 253, 242, 1.00)";
const nightButtonBorderColor = "RGBA(225, 228, 198, 1.00)";

const Wrapper = styled.div`
  background-color: #f3f3f3;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 180px;
  height: 80px;
  background-color: ${nightWrapperBgColor};
  border: ${borderThickness}px solid ${nightWrapperBorderColor};
  position: relative;
  border-radius: 100px;
`;

const Button = styled.div`
  border-radius: 50%;
  background-color: ${nightButtonBgColor};
  border: ${borderThickness}px solid ${nightButtonBorderColor};
  width: 60px;
  height: 60px;
  position: absolute;
  top: 50%;
  transform: translate3d(0, -50%, 0); //the x value moves from 0px to 100px
  left: 5px;
`;

/* 
  END STYLING
*/

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleClick = () => {
    // console.log("clicked!");
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  render() {
    return (
      <Motion
        
        style={{
          x: spring(this.state.open ? 100 : 0),
          color: spring(this.state.open ? 0 : 1)
        }}
      >
        {style => {
          const rgbaButton = {
            r: Math.round(style.color * 255),
            g: Math.round(style.color * 255),
            b: Math.round(style.color * 255),
            a: 1.0
          };
          return (
            <Wrapper>
              <ButtonWrapper onClick={this.handleClick}>
                <Button
                  style={{ transform: `translate3d(${style.x}px, -50%, 0)`, background-color: `rgba(${rgbaButton.r}, ${rgbaButton.g}, ${rgbaButton.b}, ${rgbaButton.a})` }}
                />
              </ButtonWrapper>
            </Wrapper>
          );
        }}
      </Motion>
    );
  }
}

export default App;
