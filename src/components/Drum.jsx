import React from 'react';
import './Drum.scss';

export default function Drum(props) {
    const {letter, sound } = props.sound;
    const inputRef = React.useRef();

    const handlePlay = () => {
        if (sound){
            return inputRef.current.play();
        }
    }

    return(
        <div className="drum-pad" onClick={() => handlePlay()}>
            {letter}
            <audio ref={inputRef} src={sound} className="clip" id={letter} />
        </div>
    )
}
