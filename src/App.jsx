import React, {useState} from 'react';
import './App.scss';
import Drum from "./components/Drum";
import  {sounds} from "./utils/sounds";

function App() {

    const [current, setCurrent] = useState("");

    return (
        <div className="container" id="drum-machine">
            <div id="display" className="display">
                {sounds && sounds.map((sound, index) =>
                    <Drum key={index} sound={sound} setCurrent={setCurrent}/>
                )}
                <h5 id="currentSound" className="title-sound">{current}</h5>
            </div>
        </div>
    );
}

export default App;
