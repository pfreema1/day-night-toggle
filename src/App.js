import React, { Component } from "react";
import styled from "styled-components";
import { Motion, StaggeredMotion, spring } from "react-motion";

const OutterWrapper = styled.div`
  width: 100%;
  height: 100%;
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
`;

const Ball = styled.div`
  width: 3rem;
  height: 3rem;
  background: red;
  border-radius: 50%;
  transform: translate3d(0, ${props => props.y}px, 0);
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    /*
        Settings Values
    */
    this.startY = 100;
    this.startOpacity = 0;

    this.initialStiffness = 400;
    this.initialDamping = 60;

    this.finalStiffness = 400;
    this.finalDamping = 60;

    this.state = {};
    /* --------------------------- */
  }

  render() {
    return (
      <OutterWrapper>
        <StaggeredMotion
          defaultStyles={[
            //add more items here for more dots  ****not sure if the 'this' values will work!
            {y: 100, o: 0 },
            {y: 100, o: 0 },
            {y: 100, o: 0 },
            {y: 100, o: 0 }
          ]}
          styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
            return i === 0
              // initial stiffness and damping
              ? { y: spring(0), o: spring(1) }
              // final stiffness and damping
              : {
                  y: spring(prevInterpolatedStyles[i - 1].y),
                  o: spring(prevInterpolatedStyles[i - 1].o)
                };
          })

          }
        >
          {interpolatingStyles =>}

        </StaggeredMotion>
      </OutterWrapper>
    );
  }
}

export default App;
