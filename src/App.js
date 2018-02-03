import React, { Component } from "react";
import styled from "styled-components";
import { Motion, StaggeredMotion, spring } from "react-motion";

const OutterWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: #e0f7fa;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  width: 15rem;
  height: 100%;
  // border: 1px solid blue;
`;

const Ball = styled.div`
  width: 3rem;
  height: 3rem;
  background: red;
  border-radius: 50%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const springConfigObj = { stiffness: 20, damping: 17 };
    return (
      <OutterWrapper>
        <StaggeredMotion
          defaultStyles={[
            { y: 300, o: 0, x: 300 },
            { y: 300, o: 0, x: 300 },
            { y: 300, o: 0, x: 300 },
            { y: 300, o: 0, x: 300 }
          ]}
          styles={prevInterpolatedStyles => {
            return prevInterpolatedStyles.map((_, i) => {
              return i === 0
                ? {
                    y: spring(0, springConfigObj),
                    o: spring(1),
                    x: spring(0, springConfigObj)
                  }
                : {
                    y: spring(prevInterpolatedStyles[i - 1].y),
                    o: spring(prevInterpolatedStyles[i - 1].o),
                    x: spring(prevInterpolatedStyles[i - 1].x)
                  };
            });
          }}
        >
          {interpolatingStyles => (
            <InnerWrapper>
              {interpolatingStyles.map((style, i) => {
                let movement;
                if (i === 0) {
                  // movement = style.y;
                  movement = "translate3d(" + style.x * -1 + "px, 0, 0)";
                } else if (i === 1) {
                  // movement = style.y * -1;
                  movement = "translate3d(0," + style.y * -1 + "px, 0)";
                } else if (i === 2) {
                  // movement = style.y;
                  movement = "translate3d(0," + style.y + "px, 0)";
                } else if (i === 3) {
                  // movement = style.y * -1;
                  movement = "translate3d(" + style.x + "px, 0, 0)";
                }

                console.log(movement);

                return (
                  <Ball
                    key={i}
                    style={{
                      transform: movement,
                      opacity: `${style.o}`
                    }}
                  />
                );
              })}
            </InnerWrapper>
          )}
        </StaggeredMotion>
      </OutterWrapper>
    );
  }
}

export default App;
