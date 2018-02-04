import React from "react";
import styled from "styled-components";
import { Motion, spring, StaggeredMotion } from "react-motion";
import LinearScale from "simple-linear-scale";

/* 
  STYLING
*/

/* styling vars */
//general
const borderThickness = 5;

//day

//night
const nightWrapperBgColor = "RGBA(72, 72, 72, 1.00)";
const nightWrapperBorderColor = "RGBA(32, 32, 32, 1.00)";
const nightButtonBgColor = "RGBA(255, 253, 242, 1.00)";
const nightButtonBorderColor = "RGBA(225, 228, 198, 1.00)";

//utility functions for scaling color values
const buttonBgColorScale = {
  r: LinearScale([0, 1], [255, 244]),
  g: LinearScale([0, 1], [253, 236]),
  b: LinearScale([0, 1], [242, 87])
};

const buttonBorderColorScale = {
  r: LinearScale([0, 1], [225, 224]),
  g: LinearScale([0, 1], [228, 197]),
  b: LinearScale([0, 1], [198, 89])
};

const wrapperBgColorScale = {
  r: LinearScale([0, 1], [72, 199]),
  g: LinearScale([0, 1], [72, 229]),
  b: LinearScale([0, 1], [72, 245])
};

const wrapperBorderColorScale = {
  r: LinearScale([0, 1], [32, 142]),
  g: LinearScale([0, 1], [32, 193]),
  b: LinearScale([0, 1], [32, 212])
};

const mainWrapperBgColorScale = {
  r: LinearScale([0, 1], [122, 238]),
  g: LinearScale([0, 1], [112, 254]),
  b: LinearScale([0, 1], [110, 253])
};

const MainWrapper = styled.div`
  background-color: #f3f3f3;
  height: 95vh;
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

const CloudWrapper = styled.div`
  width: 50px;
  height: 30px;
  // border: 1px solid red;
  position: absolute;
  top: 44%;
  left: 50%;
  transform: translate3d(-50%, 0, 0) scale(0.9);
`;

const CloudLarge = styled.div`
  border: ${borderThickness}px solid RGBA(212, 212, 210, 1);
  position: absolute;
  background: RGBA(245, 246, 248, 1);
  width: 50px;
  height: 25px;
  border-radius: 20px;
`;

const CloudMedium = styled.div`
  border: ${borderThickness}px solid RGBA(212, 212, 210, 1);
  border-right-color: transparent;
  border-bottom-color: transparent;
  position: absolute;
  background: RGBA(245, 246, 248, 1);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  top: -29%;
  left: 18%;
  transform: rotate(36deg);
`;

const CloudSmall = styled.div`
  border: ${borderThickness}px solid RGBA(212, 212, 210, 1);
  border-right-color: transparent;
  border-bottom-color: transparent;
  position: absolute;
  background: RGBA(245, 246, 248, 1);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  // display: none;
  transform: rotate(63deg);
  top: -19%;
  left: 60%;
`;

const MoonCraterLarge = styled.div`
  width: 12px;
  height: 12px;
  border: ${borderThickness}px solid RGBA(225, 227, 199, 1);
  position: absolute;
  // border: 1px solid red;
  background: RGBA(239, 238, 219, 1);
  border-radius: 50%;
  top: 3%;
  left: 53%;
`;
const MoonCraterMedium = styled.div`
  width: 5px;
  height: 5px;
  border: ${borderThickness}px solid RGBA(225, 227, 199, 1);
  position: absolute;
  // border: 1px solid red;
  background: RGBA(239, 238, 219, 1);
  border-radius: 50%;
  top: 67%;
  left: 46%;
`;
const MoonCraterSmall = styled.div`
  width: 2px;
  height: 2px;
  border: ${borderThickness}px solid RGBA(225, 227, 199, 1);
  position: absolute;
  // border: 1px solid red;
  background: RGBA(239, 238, 219, 1);
  border-radius: 50%;
  top: 15%;
  left: 7%;
`;

const Star = styled.div`
  border-radius: 50%;
  background: RGBA(255, 255, 255, 1);
  // border: 1px solid red;
  position: absolute;
`;

const Respect = styled.div`
  margin-left: 20px;
  font-family: Helvetica, Arial, Sans-Serif;
  display: flex;
  align-items: center;
  height: 5vh;
  > div a {
    font-weight: bold;
    margin-left: 10px;
  }
`;
// element attributes
const starWidthHeightArr = [10, 4, 8, 6, 9, 5, 7];
const starPosArr = [
  {
    top: "36%",
    left: "86%"
  },
  {
    top: "25%",
    left: "59%"
  },
  {
    top: "78%",
    left: "50%"
  },
  {
    top: "8%",
    left: "80%"
  },
  {
    top: "70%",
    left: "83%"
  },
  {
    top: "56%",
    left: "69%"
  },
  {
    top: "10%",
    left: "44%"
  }
];

/* 
  END STYLING
*/

class App extends React.Component {
  constructor(props) {
    super(props);

    this.springScaleSettingsOpen = {
      stiffness: 170,
      damping: 7
    };

    this.springScaleSettingsClosed = {
      stiffness: 270,
      damping: 30
    };

    this.starScaleSettingsOpen = {
      stiffness: 1070,
      damping: 40
    };

    this.starScaleSettingsClosed = {
      stiffness: 300,
      damping: 18
    };

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
      <div>
        <Motion
          style={{
            x: spring(this.state.open ? 100 : 0),
            color: spring(this.state.open ? 1 : 0),
            scale: spring(
              this.state.open ? 0.9 : 0,
              this.state.open
                ? this.springScaleSettingsOpen
                : this.springScaleSettingsClosed
            ),
            craterOpacity: spring(this.state.open ? 0 : 1),
            buttonRotation: spring(this.state.open ? 0 : 45)
          }}
        >
          {style => {
            /* 
              using the scaling function to translate the interpolated color value (0 - 1) into 
              the correct rgba values (between night color and day color)
          */
            const rgbaButtonBgValues = {
              r: Math.round(buttonBgColorScale.r(style.color)),
              g: Math.round(buttonBgColorScale.g(style.color)),
              b: Math.round(buttonBgColorScale.b(style.color))
            };

            const rgbaButtonBorderValues = {
              r: Math.round(buttonBorderColorScale.r(style.color)),
              g: Math.round(buttonBorderColorScale.g(style.color)),
              b: Math.round(buttonBorderColorScale.b(style.color))
            };

            const rgbaWrapperBgValues = {
              r: Math.round(wrapperBgColorScale.r(style.color)),
              g: Math.round(wrapperBgColorScale.g(style.color)),
              b: Math.round(wrapperBgColorScale.b(style.color))
            };

            const rgbaWrapperBorderValues = {
              r: Math.round(wrapperBorderColorScale.r(style.color)),
              g: Math.round(wrapperBorderColorScale.g(style.color)),
              b: Math.round(wrapperBorderColorScale.b(style.color))
            };

            const rgbaMainWrapperBgValues = {
              r: Math.round(mainWrapperBgColorScale.r(style.color)),
              g: Math.round(mainWrapperBgColorScale.g(style.color)),
              b: Math.round(mainWrapperBgColorScale.b(style.color))
            };

            // const rgbaWrapperBgValues

            return (
              <MainWrapper
                style={{
                  background: `rgba(${rgbaMainWrapperBgValues.r}, ${
                    rgbaMainWrapperBgValues.g
                  }, ${rgbaMainWrapperBgValues.b}, 1`
                }}
              >
                <ButtonWrapper
                  onClick={this.handleClick}
                  style={{
                    background: `rgba(${rgbaWrapperBgValues.r}, ${
                      rgbaWrapperBgValues.g
                    }, ${rgbaWrapperBgValues.b}, 1`,
                    border: `${borderThickness}px solid rgba(${
                      rgbaWrapperBorderValues.r
                    }, ${rgbaWrapperBorderValues.g}, ${
                      rgbaWrapperBorderValues.b
                    }, 1`
                  }}
                >
                  <Button
                    style={{
                      transform: `translate3d(${style.x}px, -50%, 0) rotate(-${
                        style.buttonRotation
                      }deg)`,
                      background: `rgba(${rgbaButtonBgValues.r}, ${
                        rgbaButtonBgValues.g
                      }, ${rgbaButtonBgValues.b}, 1`,
                      border: `${borderThickness}px solid rgba(${
                        rgbaButtonBorderValues.r
                      }, ${rgbaButtonBorderValues.g}, ${
                        rgbaButtonBorderValues.b
                      }, 1`
                    }}
                  >
                    <MoonCraterLarge
                      style={{ opacity: `${style.craterOpacity}` }}
                    />
                    <MoonCraterMedium
                      style={{ opacity: `${style.craterOpacity}` }}
                    />
                    <MoonCraterSmall
                      style={{ opacity: `${style.craterOpacity}` }}
                    />
                  </Button>
                  <CloudWrapper
                    style={{
                      transform: `translate3d(-50%, 0, 0) scale(${
                        style.scale
                      })`,
                      opacity: `${this.state.open ? 1 : style.color}`
                    }}
                  >
                    {/* default transform values:  transform: translate3d(-50%, 0, 0) scale(0.9); */}
                    <CloudLarge />
                    <CloudMedium />
                    <CloudSmall />
                  </CloudWrapper>
                  <StaggeredMotion
                    defaultStyles={[
                      { starScale: 1 },
                      { starScale: 1 },
                      { starScale: 1 },
                      { starScale: 1 },
                      { starScale: 1 },
                      { starScale: 1 },
                      { starScale: 1 }
                    ]}
                    styles={prevInterpolatedStyles =>
                      prevInterpolatedStyles.map((_, i) => {
                        return i === 0
                          ? {
                              starScale: this.state.open
                                ? spring(0, this.starScaleSettingsOpen)
                                : spring(1, this.starScaleSettingsClosed)
                            }
                          : {
                              starScale: this.state.open
                                ? spring(
                                    prevInterpolatedStyles[i - 1].starScale,
                                    this.starScaleSettingsOpen
                                  )
                                : spring(
                                    prevInterpolatedStyles[i - 1].starScale,
                                    this.starScaleSettingsClosed
                                  )
                            };
                      })
                    }
                  >
                    {interpolatingStyles => (
                      <div>
                        {interpolatingStyles.map((style, i) => {
                          // console.log(i);
                          return (
                            <Star
                              key={i}
                              style={{
                                transform: `scale(${style.starScale})`,
                                width: `${starWidthHeightArr[i]}px`,
                                height: `${starWidthHeightArr[i]}px`,
                                top: `${starPosArr[i].top}`,
                                left: `${starPosArr[i].left}`
                              }}
                            />
                          );
                        })}
                      </div>
                    )}
                  </StaggeredMotion>
                </ButtonWrapper>
              </MainWrapper>
            );
          }}
        </Motion>
        <Respect>
          <div>
            Design inspired by:
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://dribbble.com/shots/1907553-Day-Night-Toggle-Button"
            >
              Ramakrishna V
            </a>
          </div>
        </Respect>
      </div>
    );
  }
}

export default App;
