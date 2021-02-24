import React from 'react';
import './Drum.scss';

export default function Drum(props) {
    const {letter, sound, id } = props.sound;
    const inputRef = React.useRef();

    const handlePlay = () => {

        if (sound){
            let parent = inputRef.current.parentNode;
            parent.classList.add('active');
            inputRef.current.addEventListener('ended', () => {
                parent.classList.remove('active');
            });
            props.setCurrent(id);
            inputRef.current.pause();
            return inputRef.current.play();
        }
    }

    return(
        <div className="drum-pad" onClick={() => handlePlay()} id={id}>
            {letter}
            <audio ref={inputRef} src={sound} className="clip" id={letter}/>
        </div>
    )
}
