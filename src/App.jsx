import React, {useState} from 'react';
import './App.scss';
import Drum from "./components/Drum";

const sounds = [
    {
        letter: 'Q',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        letter: 'W',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
        letter: 'E',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
        letter: 'A',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
        letter: 'S',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        letter: 'D',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        letter: 'Z',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        letter: 'X',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        letter: 'C',
        sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
]


function App() {
    return (
        <div className="container" id="drum-machine">
            <div id="display" className="display">
                {sounds && sounds.map((sound, index) =>
                    <Drum key={index} sound={sound}/>
                )}
            </div>
        </div>
    );
}

export default App;
