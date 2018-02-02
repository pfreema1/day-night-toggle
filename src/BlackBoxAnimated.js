import React from "react";
import styled from "styled-components";
import { Motion, spring } from "react-motion";

const BlackBox = styled.div`
  height: ${props => props.heightPercentage}%;
  width: 100%;
  background: black;
  transform: scaleX(${props => props.scaleX});
  transform-origin: ${props => props.xDirection} center;
`;

const BlackBoxAnimated = ({
  startAnimation = false,
  heightPercentage,
  reverseDirection = false
}) => (
  <Motion
    defaultStyle={{ scaleX: 1 }}
    style={{ scaleX: spring(startAnimation ? 0 : 1) }}
  >
    {style => (
      <BlackBox
        heightPercentage={heightPercentage}
        xDirection={reverseDirection ? `left` : `right`}
        style={{ transform: `scaleX(${style.scaleX})` }}
      />
    )}
  </Motion>
);

export default BlackBoxAnimated;
