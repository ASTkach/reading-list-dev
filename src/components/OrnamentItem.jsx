import { useEffect, useRef } from 'react';

const OrnamentItem = ({ svgClass, svgWidth, svgHeight, svgViewBox, svgPath, delay, duration }) => {
    const svgRef = useRef(null);
    const STROKE_COLOR = 'hsl(208, 25%, 65%)';

    useEffect(() => {
        const svg = svgRef.current;
        getSvgItems(svg);
    }, []);

    const getSvgItems = (svg) => {
        svg.innerHTML = svgPath;

        const svgItems = Array.from(svg.children);

        svgItems.map((item, index) => {
            let itemLength = `${Math.ceil(item.getTotalLength())}`;
            item.style.strokeDasharray = itemLength;
            item.style.strokeDashoffset = itemLength;
            item.style.stroke = STROKE_COLOR;

            item.animate([{ strokeDashoffset: `${itemLength}` }, { strokeDashoffset: 0 }], {
                duration,
                delay: index * delay,
                fill: 'forwards',
            });
        });
    };

    return (
        <svg
            ref={svgRef}
            className={svgClass}
            width={svgWidth}
            height={svgHeight}
            viewBox={svgViewBox}
            xmlns="http://www.w3.org/2000/svg"
        />
    );
};

export default OrnamentItem;
