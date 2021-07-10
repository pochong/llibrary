import '../App.css';
import { postText } from '../redux/ActionCreators'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Label, Button, Row, Col, Input, Form, FormGroup } from 'reactstrap'
//import { Control, LocalForm } from 'react-redux-form'
import TextToSpeech from '../Text_To_Speech/TextToSpeech'
import TabComponent from './TabComponent'

const mapStateToProps = state => {
    return {
        text: state.text
    }
};

const mapDispatchToProps = (dispatch) => ({
    postText: (text) => { dispatch(postText(text)) }
});

// RenderText receives a text props for use in rendering the
// text of the novel in a nice format, seperating each section 
// with new line
function RenderText(props) {

    function handleClick(index) {
        props.handleIndex(index);
    }

    return (
        <ul className="list-unstyled">
            {props.text.map((sen, index) => {
                if (index === 0) {
                    return (
                        <p id={index} className='Text_font_text' key={index} onClick={() => handleClick(index)} style={{ color: 'goldenrod' }} >{sen}</p>
                    )
                } else {
                    return (
                        <p id={index} className='Text_font_text' key={index} onClick={() => handleClick(index)} >{sen}</p>
                    )
                }
            })}
        </ul>
    )

};

function RenderVoices(props) {

    function handleClick(voice) {
        props.handleVoice(voice);
    }

    //console.log(props.voices)
    if (props.voices.length != 0) {
        var voices_arr = []
        props.voices.forEach(voices => {
            voices_arr.push(voices.name)
        });

        return (

            <Input type="select" name="select" id="select" style={{ width: "450px", fontSize: "calc(10px + 2vmin)" }} onChange={(e) => handleClick(e.target.value)}>
                {voices_arr.map((voice, index) => {
                    return (
                        <option key={index} value={voice}>{voice}</option>
                    )
                })}
            </Input>

        )
    } else {
        return (
            <div style={{ fontSize: "20px" }}>
                <p>No voices at the moment.</p>
                <p>Please select an Url for voices to be displayed.</p>
            </div>
        )
    }
}

//function Main(props) {
class Main extends Component {
    //useEffect(() => { props.fetchText(); }, []);

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            voice_speed: 1,
            volume: 1,
            pitch: 1,
            voice: "",
        }
        this.handleIndex = this.handleIndex.bind(this);
        this.handleSpeed = this.handleSpeed.bind(this);
        this.handlePitch = this.handlePitch.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        this.handleVoice = this.handleVoice.bind(this);
        this.changeColor = this.changeColor.bind(this)
    }

    handleIndex(index) {
        this.setState({ index: index });
        //setconsole("this is working fine, index: " + this.state.index);
        this.changeColor(index, this.state.index)
    }

    handleVoice(voice) {
        this.setState({ voice: voice });
    }

    handleSpeed(speed) {
        this.setState({ voice_speed: speed });
    }

    handleVolume(volume) {
        this.setState({ volume: volume });
    }

    handlePitch(pitch) {
        this.setState({ pitch: pitch });
    }

    changeColor(index, stateIndex) {
        //console.log("switching colors")
        var list = document.getElementsByClassName('Text_font_text');
        if (index === stateIndex && index > 0) {
            list.namedItem(index.toString()).style.color = 'goldenrod'
            //console.log(list.namedItem((index - 1).toString()).style.color)
            if (list.namedItem((index - 1).toString()).style.color === 'goldenrod') {
                list.namedItem((index - 1).toString()).style.color = 'white'
            }
        } else if (index === 0 && index === stateIndex) {
            list.namedItem(index.toString()).style.color = 'goldenrod'
        } else {
            list.namedItem(index.toString()).style.color = 'goldenrod'
            list.namedItem(stateIndex.toString()).style.color = 'white'
        }
    }

    render() {

        const handleSubmit = (text) => {
            text.preventDefault();
            this.props.postText(text.target[0].value)
        }

        var text_split = this.props.text.split('\n')

        var voices = window.speechSynthesis.getVoices()

        //console.log(this.state.voice)

        return (
            <div className="App">
                <header className="App-header">
                    <h1>LLibrary</h1>
                </header>
                <div className=" Text_font">
                    <TabComponent handleSubmit={handleSubmit} />
                    <div className="sidenav">
                        <div className="slidecontainer">
                            <p>Voices</p>
                            <RenderVoices voices={voices} handleVoice={this.handleVoice} />

                            <p>Playback Speed : {this.state.voice_speed}</p>
                            <input type="range" min="0" max="1" value={this.state.voice_speed} step="0.01" className="slider" id="speed" onChange={(event) => this.handleSpeed(event.target.value)} />

                            <p>Volume : {this.state.volume}</p>
                            <input type="range" min="0.1" max="9.99" value={this.state.volume} step="0.01" className="slider" id="volume" onChange={(event) => this.handleVolume(event.target.value)} />

                            <p>Pitch : {this.state.pitch}</p>
                            <input type="range" min="0" max="2" value={this.state.pitch} step="0.01" className="slider" id="pitch" onChange={(event) => this.handlePitch(event.target.value)} />
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <TextToSpeech voice={this.state.voice} rate={this.state.voice_speed} pitch={this.state.pitch} volume={this.state.volume} split={text_split} index={this.state.index} handleIndex={this.handleIndex} changeColor={this.changeColor} />
                    </div>
                    <div>
                        <RenderText text={text_split} handleIndex={this.handleIndex} />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);