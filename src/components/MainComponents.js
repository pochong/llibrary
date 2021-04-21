import '../App.css';
import { postText, textFailed } from '../redux/ActionCreators'
import React from 'react';
import { connect, ReactReduxContext } from 'react-redux'
import { Label, Button, Row, Col } from 'reactstrap'
import { Control, LocalForm } from 'react-redux-form'
import TextToSpeech from '../Text_To_Speech/TextToSpeech'

const mapStateToProps = state => {
    return {
        text: state.text,
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
function RenderText(text) {
    //console.log(text)

    //var text_string = Object.values(text)
    //console.log(text_string)

    //console.log(Object.values(text))
    //var text_string = String(text.text);
    //var sentence = text.text.split("\n");
    //var sentence = text_string.toString().split("\n");
    //console.log(sentence)

    return (
        <ul className="list-unstyled">
            {text.text.map((sen, index) => {
                return (
                    <p className = 'Text_font_text' key={index}>{sen}</p>
                )
            })}
        </ul>
    )

};

function Main(props) {
    //useEffect(() => { props.fetchText(); }, []);

    const handleSubmit = (text) => {
        props.postText(text.url)
    }
    var text_split = props.text.split('\n')

    console.log(text_split)
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
                        <TextToSpeech text={props.text} />
                    </div>
                    <div>
                        <RenderText text={text_split} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);