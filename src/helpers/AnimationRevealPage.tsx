import React from "react";
import { useInView, MotionSection } from "helpers";
import { IAnimatedSlideInComponent, IAnimationReveal } from "types";

const StyledDiv = `font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;
const x = { target: "0%", initial: "-150%" };

const AnimatedSlideInComponent = ({ children }: IAnimatedSlideInComponent) => {
  const [ref, inView] = useInView();

  return (
    <div ref={ref}>
      <MotionSection
        initial={{ x: x.initial }}
        animate={{
          x: inView && x.target,
          transitionEnd: {
            x: inView && 0,
          },
        }}
        transition={{ type: "spring", damping: 19 }}
      >
        {children}
      </MotionSection>
    </div>
  );
};

const AnimationReveal = (props: IAnimationReveal) => {
  let { disabled, children } = props;
  if (disabled) {
    return children;
  }

  if (!Array.isArray(children)) children = [children];

  const directions = ["left", "right"];
  return children ? (
    children.map((child: any, i: number) => {
      return (
        <AnimatedSlideInComponent
          key={i}
          direction={directions[i % directions.length]}
        >
          {child}
        </AnimatedSlideInComponent>
      );
    })
  ) : (
    <div {...props}></div>
  );
};

const AnimationRevealPage = (props: IAnimationReveal) => (
  <div className={StyledDiv}>
    <AnimationReveal {...props} />
  </div>
);

export default AnimationRevealPage
