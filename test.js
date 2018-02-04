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
</OutterWrapper>;
