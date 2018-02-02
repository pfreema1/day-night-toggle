import React, { Component } from "react";
import styled from "styled-components";
import { Motion, StaggeredMotion, spring } from "react-motion";

const colorArray = ["#DA3D52", "#F4DC71", "#F6FFFD", "#061934", "#485360"];

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  background: skyblue;
`;

const Box = styled.div`
  flex-basis: ${props => props.width}%;
  background: ${props => props.bgColor};
  // border-right: 1px solid white;
`;

class EntranceAnimation extends Component {
  render() {
    return (
      <StaggeredMotion
        defaultStyles={[
          { width: 100 },
          { width: 100 },
          { width: 100 },
          { width: 100 }
        ]}
        styles={prevStyles => [
          { width: spring(0) },
          { width: spring(prevStyles[0].width) },
          { width: spring(prevStyles[1].width) },
          { width: spring(prevStyles[2].width) }
        ]}
      >
        {styles => (
          <Wrapper>
            <Box bgColor={colorArray[0]} width={styles[0].width} />
            <Box bgColor={colorArray[1]} width={styles[1].width} />
            <Box bgColor={colorArray[3]} width={styles[2].width} />
            <Box bgColor={colorArray[4]} width={styles[3].width} />
          </Wrapper>
        )}
      </StaggeredMotion>
    );
  }
}

export default EntranceAnimation;
