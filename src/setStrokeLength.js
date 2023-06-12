const setStrokeLength = () => {
    const animatedItems = [
        { animatedItem: '.ornament__item--text path', delay: 200 },
        { animatedItem: '.ornament__item--book path', delay: 330 },
        { animatedItem: '.ornament__item--border rect', delay: 0 },
        { animatedItem: '.ornament__item--corner path', delay: 0 },
    ];

    const strokeLength = (item, delay) => {
        const letters = Array.from(document.querySelectorAll(`${item}`));
        let duration;

        if (item === '.ornament__item--corner path' || item === '.ornament__item--border rect') {
            duration = 4000;
        } else duration = 2000;

        letters.map((letter, index) => {
            let letterLength = `${Math.ceil(letter.getTotalLength())}`;
            letter.style.strokeDasharray = letterLength;
            letter.style.strokeDashoffset =
                item === '.ornament__item--border rect' ? letterLength * -1 : letterLength;
            letter.style.stroke = 'hsl(208, 25%, 65%)';

            letter.animate([{ strokeaDshoffset: `${letterLength}` }, { strokeDashoffset: 0 }], {
                duration,
                delay: index * delay,
                fill: 'forwards',
            });
        });
    };

    animatedItems.forEach((item) => {
        strokeLength(item.animatedItem, item.delay);
    });
};

export default setStrokeLength;
