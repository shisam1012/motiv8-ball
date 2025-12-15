import { useState } from 'react';
import './Ball.css';
import { sentences } from './Sentences';

const Ball = () => {
    const [animationKey, setAnimationKey] = useState(0);

    const [currentSentence, setCurrentSentence] = useState(sentences[0]);

    const handleBallClick = () => {
        const randomIndex = Math.floor(Math.random() * (sentences.length - 1));
        const newSentence = sentences[randomIndex + 1];
        setCurrentSentence(newSentence);

        setAnimationKey((prevKey) => prevKey + 1);
    };

    return (
        <div className='black-circle' onClick={handleBallClick}>
            <div className='white-circle'>
                <svg viewBox='0 0 100 100'>
                    <path
                        id='myArc'
                        d='M 10 50 A 40 40 0 0 1 90 50'
                        fill='none'
                        stroke='none'
                    />

                    <g key={animationKey} className='zoom-in-text text-glow'>
                        <text
                            fontFamily='Arial'
                            fontSize='6.5'
                            fill='#235fe0ff'
                        >
                            <textPath
                                href='#myArc'
                                startOffset='50%'
                                textAnchor='middle'
                            >
                                {currentSentence}
                            </textPath>
                        </text>
                    </g>

                    <polygon
                        points='30,40 70,40 50,80'
                        fill='#235fe0ff'
                        className='triangle-glow'
                    />
                </svg>
            </div>
        </div>
    );
};

export default Ball;
