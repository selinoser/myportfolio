import React, { useEffect, useState } from "react";

const FadeIn = ({
    children,
    delay = 50,
    transitionDuration = 400,
    wrapperTag: WrapperTag = "div",
    childTag: ChildTag = "div",
    className = "",
    childClassName = "",
    visible = true,
    onComplete,
    direction = "down",
}) => {
    const childrenArray = React.Children.toArray(children).filter(Boolean);
    const childCount = visible ? childrenArray.length : 0;
    const [maxIsVisible, setMaxIsVisible] = useState(0);

    useEffect(() => {
        if (childCount === maxIsVisible) {
            const timeout = setTimeout(() => {
                if (onComplete) onComplete();
            }, transitionDuration);
            return () => clearTimeout(timeout);
        }

        const increment = childCount > maxIsVisible ? 1 : -1;
        const timeout = setTimeout(() => {
            setMaxIsVisible((prev) => prev + increment);
        }, delay);
        return () => clearTimeout(timeout);
    }, [childCount, delay, maxIsVisible, transitionDuration, onComplete]);

    const getTransform = (i) => {
        if (maxIsVisible > i) return "none";
        switch (direction) {
            case "up":
                return "translateY(-20px)";
            case "down":
                return "translateY(20px)";
            case "left":
                return "translateX(-20px)";
            case "right":
                return "translateX(20px)";
            default:
                return "translateY(20px)";
        }
    };

    return (
        <WrapperTag className={className}>
            {childrenArray.map((child, i) => (
                <ChildTag
                    key={i}
                    className={childClassName}
                    style={{
                        transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
                        transform: getTransform(i),
                        opacity: maxIsVisible > i ? 1 : 0,
                    }}
                >
                    {child}
                </ChildTag>
            ))}
        </WrapperTag>
    );
};

export default FadeIn;
