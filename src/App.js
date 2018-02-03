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
  transform: translate3d(0);
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
    return <OutterWrapper />;
  }
}

export default App;
