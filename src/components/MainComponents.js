import '../App.css';
import { postText } from '../redux/ActionCreators'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Label, Button, Row, Col } from 'reactstrap'
import { Control, LocalForm } from 'react-redux-form'
import TextToSpeech from '../Text_To_Speech/TextToSpeech'

const mapStateToProps = state => {
    return {
        text: state.text
    }
};

const mapDispatchToProps = (dispatch) => ({
    postText: (text) => { dispatch(postText(text)) }
});

// const style = {
//     play: {
//         hover: {
//             backgroundColor: 'GhostWhite',
//             color: 'white'
//         },
//         button: {
//             width: '50px',
//             height: '50px',
//             cursor: 'pointer',
//             pointerEvents: 'none',
//             fontFamily: 'Helvetica',
//             fontSize: '1.0em',
//             outline: 'none',
//             backgroundColor: 'gray',
//             border: 'solid 1px rgba(255,255,255,1)',
//             borderRadius: 6
//         },
//     },
//     pause: {
//         hover: {
//             backgroundColor: 'GhostWhite',
//         },
//         button: {
//             width: '50px',
//             height: '50px',
//             cursor: 'pointer',
//             pointerEvents: 'none',
//             fontFamily: 'Helvetica',
//             fontSize: '1.0em',
//             outline: 'none',
//             backgroundColor: 'gray',
//             border: 'solid 1px rgba(255,255,255,1)',
//             borderRadius: 6,
//             title: "pause"
//         },
//     },
//     stop: {
//         hover: {
//             backgroundColor: 'GhostWhite',
//         },
//         button: {
//             width: '50px',
//             height: '50px',
//             cursor: 'pointer',
//             pointerEvents: 'none',
//             fontFamily: 'Helvetica',
//             fontSize: '1.0em',
//             outline: 'none',
//             backgroundColor: 'gray',
//             border: 'solid 1px rgba(255,255,255,1)',
//             borderRadius: 6
//         },
//     },
//     resume: {
//         hover: {
//             backgroundColor: 'GhostWhite',
//         },
//         button: {
//             width: '50px',
//             height: '50px',
//             cursor: 'pointer',
//             pointerEvents: 'none',
//             fontFamily: 'Helvetica',
//             fontSize: '1.0em',
//             outline: 'none',
//             backgroundColor: 'gray',
//             border: 'solid 1px rgba(255,255,255,1)',
//             borderRadius: 6
//         },
//     },
// };

// RenderText receives a text props for use in rendering the
// text of the novel in a nice format, seperating each section 
// with new line
function RenderText(props) {
    //console.log(text)

    //var text_string = Object.values(text)
    //console.log(text_string)

    //console.log(Object.values(text))
    //var text_string = String(text.text);
    //var sentence = text.text.split("\n");
    //var sentence = text_string.toString().split("\n");
    //console.log(typeof props.handleIndex)

    function handleClick(index) {
        props.handleIndex(index);
        //setconsole("this is working  " + index)
        //setconsole("this is stateIndex: " + props.stateIndex)
        // document.getElementById(index).style.color = "blue"
        //changeColor(index, props.stateIndex)
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

// function handleIndex(state, index) {
//     state.setState({ index: index });
//     setconsole("this is working fine")
// }

//function Main(props) {
class Main extends Component {
    //useEffect(() => { props.fetchText(); }, []);

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
        this.handleIndex = this.handleIndex.bind(this);
        this.changeColor = this.changeColor.bind(this)
    }

    handleIndex(index) {
        this.setState({ index: index });
        //setconsole("this is working fine, index: " + this.state.index);
        this.changeColor(index, this.state.index)
    }

    changeColor(index, stateIndex) {
        //console.log("switching colors")
        var list = document.getElementsByClassName('Text_font_text');
        if (index === stateIndex && index > 0) {
            list.namedItem(index.toString()).style.color = 'goldenrod'
            console.log(list.namedItem((index - 1).toString()).style.color)
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
            this.props.postText(text.url)
        }

        // const handleIndex = (index) => {
        //     this.setState({ index: index });
        //     setconsole("this is working fine");
        // }

        var text_split = this.props.text.split('\n')
        //console.log(text_split)

        return (
            <div className="App">
                <header className="App-header">
                    <h1>LLibrary</h1>
                </header>
                <div className="container-fluid">
                    <div className="col-12 col-md-9 Text_font">
                        <LocalForm onSubmit={(text) => handleSubmit(text)}>
                            <Row className="form-group">
                                <Label htmlFor="text" className="column"> Url </Label>
                                <Col>
                                    <Control.text model=".url" id="url" name="url" placeholder="Enter Text" className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group button">
                                <Col>
                                    <Button type="submit" color="primary"> Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                        <div>
                            <TextToSpeech split={text_split} index={this.state.index} handleIndex={this.handleIndex} changeColor={this.changeColor} />
                        </div>
                        <div>
                            <RenderText text={text_split} handleIndex={this.handleIndex} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);