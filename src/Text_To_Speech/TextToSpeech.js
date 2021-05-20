/*
    This file is taken from the src folder of the react-speech component and modified to fit this project
*/

import React, { Component } from "react";
import SpeechSynthesis from "./SpeechSynthesis"
import { Button } from 'reactstrap'
import 'font-awesome/css/font-awesome.min.css'

class TextToSpeech extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SPEAKING: false,
            PAUSED: false,
            STOPPED: false,
            REAL_STOP: false
        };
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.stop = this.stop.bind(this);
        this.onend = this.onend.bind(this);
        this.onerror = this.onerror.bind(this);
    }

    //  function for the displaying the buttons
    //  when pressed
    //
    //  when the play button is pressed:
    //      play    ->  invisible
    //      paused  ->  visible
    //      stop    ->  visible
    // 
    //  when the paused or stop button is pressed:
    //      play    ->  visible
    //      paused  ->  invisible
    //      stop    ->  invisible
    // 
    setButtonState() {
        var play = document.getElementById("play");
        var pause = document.getElementById("pause");
        var stop = document.getElementById("stop");

        if (this.state.SPEAKING === true) {
            play.style.display = "none"
            pause.style.display = "inline"
            stop.style.display = "inline"
        }

        if (this.state.PAUSED === true || this.state.STOPPED === true) {
            play.style.display = "inline"
            pause.style.display = "none"
            stop.style.display = "none"
        }

    }

    //  re-render the state of the buttons
    //  when pressed
    componentDidUpdate() {
        this.setButtonState()
    }

    //  helps stop the speechSynthesis
    //  when page is refreshed or open new page 
    //  (when the page is unloaded)
    componentDidMount() {
        window.addEventListener("unload", this.stop)
    }
    componentWillUnmount() {
        window.removeEventListener("unload", this.stop)
    }
    //  end of helping the stop of the speechSynthesis speech
    //  when page is unloaded

    //  function for setting up the speech sysnthesis utterance
    //  for text-to-speech
    setSpeechSynthesis() {
        var text = this.props.split[this.props.index].replace(/\n/g, '')
        //console.log(text)
        //console.log(text.replace(/\n/g, ''))
        this.speechSynthesis = new SpeechSynthesis(this.props, text)
        this.speechSynthesis.onend(this.onend);
        this.speechSynthesis.onerror(this.onerror);
        //console.log(this.props.split)
    }

    //  function for playing the text-to-speech
    //  if the speech was not paused, play a new speech
    //  if the speech was paused, resume the speech
    play() {
        if (this.state.SPEAKING === false && this.state.PAUSED === false) {
            this.setSpeechSynthesis();
            this.speechSynthesis.speak();
            this.setState({ SPEAKING: true, PAUSED: false, STOPPED: false, REAL_STOP: false });
        } else if (this.state.PAUSED === true && this.state.SPEAKING === false) {
            this.speechSynthesis.resume();
            this.setState({ SPEAKING: true, PAUSED: false, STOPPED: false, REAL_STOP: false });
        } else {
            this.setState({ SPEAKING: false, PAUSED: false, STOPPED: false, REAL_STOP: false });
        }
    }

    //  function for pausing the speech
    pause() {
        this.speechSynthesis.pause();
        this.setState({ PAUSED: true, SPEAKING: false, STOPPED: false, REAL_STOP: false });
    }

    //  function for stopping the speech
    stop() {
        this.speechSynthesis.cancel();
        this.setState({ SPEAKING: false, PAUSED: false, STOPPED: true, REAL_STOP: true });
    }

    //  function for what happens when the speech finishes
    onend() {
        if (this.props.index < this.props.split.length - 1 && this.state.REAL_STOP === false) {
            this.stop();
            this.props.handleIndex(this.props.index + 1);
            //this.setState({ index: index_temp });
            //console.log(this.props.index)
            this.play();
        } else {
            this.props.changeColor(0, this.props.index)
            this.props.handleIndex(0);
            this.stop();
        }
    }

    //  function for what happens when there are errors
    //  in the speechSynthesis
    onerror() {
        this.stop();
    }

    render() {
        return (
            <div className="row">
                <Button id="play" className="play" onClick={this.play}>
                    <span className="fa fa-play fa-2x"></span>
                </Button>
                <Button id="pause" className="pause" onClick={this.pause} style={{ display: "none" }}>
                    <span className="fa fa-pause fa-2x"></span>
                </Button>
                <Button id="stop" className="stop" onClick={this.stop} style={{ display: "none" }}>
                    <span className="fa fa-stop fa-2x"></span>
                </Button>
            </div>
        )
    }
}

// function setconsole(text) {
//     console.log(text)
// }


export default TextToSpeech;
//export { setconsole };