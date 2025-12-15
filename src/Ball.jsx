import { useState } from 'react';
import './Ball.css';
import { sentences } from './Sentences';

const Ball = () => {
    const [animationKey, setAnimationKey] = useState(0);
    const [currentSentence, setCurrentSentence] = useState(sentences[0]);

    const handleBallClick = () => {
        const randomIndex = Math.floor(Math.random() * (sentences.length - 1));
        setCurrentSentence(sentences[randomIndex + 1]);
        setAnimationKey((prevKey) => prevKey + 1);
    };

    return (
        <div className='black-circle' onClick={handleBallClick}>
            <div className='white-circle'>
                <svg
                    viewBox='0 0 100 100'
                    width='100%'
                    height='100%'
                    preserveAspectRatio='xMidYMid meet'
                >
                    <defs>
                        <path id='myArc' d='M 10 50 A 40 40 0 0 1 90 50' />

                        <filter
                            id='blueGlow'
                            x='-60%'
                            y='-60%'
                            width='220%'
                            height='220%'
                        >
                            <feGaussianBlur stdDeviation='4' result='blur1' />
                            <feGaussianBlur stdDeviation='2' result='blur2' />

                            <feMerge>
                                <feMergeNode in='blur1' />
                                <feMergeNode in='blur2' />
                                <feMergeNode in='SourceGraphic' />
                            </feMerge>
                        </filter>
                    </defs>

                    <g
                        key={animationKey}
                        className='zoom-in-text'
                        filter='url(#blueGlow)'
                    >
                        <text
                            fontFamily='Arial, sans-serif'
                            fontSize='6.5'
                            fill='#235fe0'
                        >
                            <textPath
                                xlinkHref='#myArc'
                                startOffset='50%'
                                textAnchor='middle'
                            >
                                {currentSentence}
                            </textPath>
                        </text>
                    </g>

                    <polygon
                        points='30,40 70,40 50,80'
                        fill='#235fe0'
                        filter='url(#blueGlow)'
                    />
                </svg>
            </div>
        </div>
    );
};

export default Ball;
