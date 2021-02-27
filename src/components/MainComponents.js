//import logo from '../logo.svg';
import '../App.css';
import Speech from 'react-speech'
import { postText } from '../redux/ActionCreators'
//import { useEffect } from 'react';
import { connect } from 'react-redux'
import { Label, Button, Row, Col } from 'reactstrap'
import { Control, LocalForm } from 'react-redux-form'

const mapStateToProps = state => {
    return {
        text: state.text
    }
}

const mapDispatchToProps = (dispatch) => ({
    postText: (text) => { dispatch(postText(text)) }
})

const style = {
    play: {
        hover: {
            backgroundColor: 'GhostWhite',
            color: 'white'
        },
        button: {
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            pointerEvents: 'none',
            fontFamily: 'Helvetica',
            fontSize: '1.0em',
            outline: 'none',
            backgroundColor: 'gray',
            border: 'solid 1px rgba(255,255,255,1)',
            borderRadius: 6
        },
    },
    pause: {
        hover: {
            backgroundColor: 'GhostWhite',
        },
        button: {
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            pointerEvents: 'none',
            fontFamily: 'Helvetica',
            fontSize: '1.0em',
            outline: 'none',
            backgroundColor: 'gray',
            border: 'solid 1px rgba(255,255,255,1)',
            borderRadius: 6,
            title: "pause"
        },
    },
    stop: {
        hover: {
            backgroundColor: 'GhostWhite',
        },
        button: {
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            pointerEvents: 'none',
            fontFamily: 'Helvetica',
            fontSize: '1.0em',
            outline: 'none',
            backgroundColor: 'gray',
            border: 'solid 1px rgba(255,255,255,1)',
            borderRadius: 6
        },
    },
    resume: {
        hover: {
            backgroundColor: 'GhostWhite',
        },
        button: {
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            pointerEvents: 'none',
            fontFamily: 'Helvetica',
            fontSize: '1.0em',
            outline: 'none',
            backgroundColor: 'gray',
            border: 'solid 1px rgba(255,255,255,1)',
            borderRadius: 6
        },
    },
}



// e => e.preventDefault(), (text) => props.fetchText(text.value)
//var text = "Temple After sending Lyra off, we went to the Adventurer’s Guild to pick up the materials from the Bloody Wolf that I had asked them to dismantle. Then we went to a fur store and I asked them to make a rug for me.“Can we stop by the temple before we return?” “”Sure~””I guess it’s a custom now when we arrive in a new city? I decided to visit a temple to see Syl.(Syl~ you here~?) (Yes, yes! Here! I’m here!)When I entered the temple and called out to Syl in front of the statue, Syl’s voice came back to me vigorously.. For some reason, the image of Syl raising his hand came to my mind.(… Hey, Syl, could you please raise your right hand for a little?) (Eh? My right hand? It’s already up, though?) (… I see.)For some reason, I asked him to raise his right hand, but it was apparently already in the air. … I didn’t think he was really doing it.(Takumi-san, what do I do… after raising my right hand?) (… Now stick your hand in front of you.) (Okay.) (……)Syl seemed to be acting according to what I said. They were really meaningless instructions, but I felt a bit guilty anyway. I called for the screen to come out, displayed the magic circle and took out vanilla ice cream from the Infinite Storage, and sent it.(Wow~ isn’t this ice cream! For real!?)I recalled that he liked milk ice cream, so I sent it to dispel the feelings of guilt I had.(… Ah, yes, of course.) (Is this milk ice cream?) (Erm… it’s an improved version of the milk ice cream called vanilla ice cream.) (Vanilla ice cream!)However, Syl was more delighted than I thought he would, so I quite couldn’t dispel them.(That makes me so happy. Thank you so much.) (… It’s nothing.) (Ah, yes. The crepes and the mochi were all delicious.) (I see. I’m glad you liked it.) (Truly! I’m glad you realized my intentions, Takumi-san!)N? Syl’s intentions?… Uh, he means that? Making what they wanted to eat out of the ingredients that were sent to me.(You sent me so much Red Wheat, so I thought you wanted to eat it, so I sent the things back… was I right?) (Yes!)Syl responded refreshingly. As I thought, it was an indirect request. Kaoka beans when he wants to eat chocolate, Red Wheat when he wants to eat mochi… it’s good that his intentions are easy to understand, but what is he planning to send me when he feels like eating crepes? Eggs? Milk? Wheat flour? I won’t understand even if he sends me everything!(I’m glad you are sending me ingredients because some of them I don’t have much at hand, but you could have sent me a letter saying, “I want to eat mochi.” instead.)Even if not a letter, a single word on a small card would be more than enough.(I can’t really request that from you in such a straightforward way…)… Nono, I already feel that you are making a request from me by sending the ingredients, you know? Well, I’m indebted to Syl, so I really don’t mind, though.(Then, I will accept your request once a month.) (R, really!?) (Really. Although I say that, sending it over immediately after receiving the request wouldn’t be possible. I will send it to you as soon as I have time to make it.) (That’s not a problem at all! Wow! Wow! Now I can escape the “Still not yet?” gazes everyone looks at me with!!)It was a light suggestion on my part, but Syl seemed to be overjoyed.(I, I didn’t think you would be this overjoyed.) (I mean, everyone is so heartless! We can’t really ask you directly for things, but everyone keeps telling me “I want to eat this, I want to eat that.” and I can’t really take it!)Oh, Syl is exposing his real feelings.(Wah!)Ah, did he notice?(Ta, Takumi-san! Please pretend you didn’t hear anything I said just now~~~) (Hahaha~)He said in a tearful voice. Syl really is busy in various ways~ But, when I felt that Syl has not changed since the time I met him, it made me feel relieved~(Uu~~~ you are terrible for laughing. I really beg you~) (Alright, alright.)I think it’s better for me to let the circumstances of the gods go, so I’ll just acknowledge him for now.(Still, how bad this “I want to eat this, I want to eat that.” situation really becomes?) (Geez! Even though I asked you not to speak about this anymore!) (Well, I’m a bit curious. It’s fine! I won’t disclose anything. And so, how is it?) (My goodness! When you make something new, they always want to eat it right away!) (Huh?)Nonono! Wait a moment! I heard that Syl and others occasionally observe us, but each time I make something new… are they that good at catching the right timing?(Hey, how much do you guys actually observe us?) (N? Erm, we get the gist of things.) (Eh? Gist? You are watching us… all the time?) (Ehh!? That’s absolutely impossible. I also have work to do, you know?)I’m glad. I thought what would I do if they watched us all the time. But, even so, how do they grasp the gist of what we do then?(Erm… it’s that, you know! We watch the recording on fast forward!) (……)… That’s no different from watching us all day all night! Moreover, he read my mind so naturally again!(Ah! Ta, Takumi-san, that’s! Even though I say we watch, we only check the important parts, we definitely don’t watch everything thoroughly! I won’t peek at your private life!) (……)He put a big emphasis on “I” so there’s a possibility that other gods are going to peek? Yep, it’s like that. I did not have the intentions to see, but I meant no harm~(Hey, Takumi-san!? Are you listening? Heyyy, Takumi-san!?) (Ah, yes, I hear you. I hear you, but I was just thinking that this make you guys seem like stalkers~ or something.) (S, stalkers!?) (Yeah, I wonder where I should sue you in this case.) (Sue!? W, who!? M, me!?)Syl seemed to be panicking from my words.(… I was joking.) (Joking!)Rather than joking, there’s no way I could win a lawsuit against the supreme authority of this world! I guess to the gods, we humans are originally objects of observation. So, I guess our observation is a part of that, just with a little more weight behind it. I’m sure.(Well, anyhow. You seem to be still very much yourself, and it doesn’t seem like you changed at all. Well then, I will stop by again when I have time.) (Eh, wait, Takumi-sa——)I finished the conversation a little forcibly and headed to where the children were waiting for me.“Thank you for waiting! Shall we return?” “”Yeah!”” “You have to tell Rebecca-san what you were doing today when we return!” “”Ohh~”” “Will!” “Tell!”After finishing what we had to do, we decided to return to the Ruven residence.By the way, we tried the Sheira nuts for dessert at dinner that night. When we carefully cracked open the skin or shell-like substance, we found that the inside was filled with light blue glass ball-like berries that looked like… gummies. The children ate them with relish, and Rebecca-san and the others were delighted too, while I was feeling weirded out that something like gummy could come out of nature."

function Main(props) {
    //useEffect(() => { props.fetchText(); }, []);

    const handleSubmit = (text) => {
        props.postText(text.url)
        //console.log(text.url)
        //event.preventDefault();
    }

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
                    <p></p>
                    <div>
                        <Speech
                            styles={style}
                            text={props.text}
                            //textAsButton={true}
                            //displayText={"Press play"}
                            pause={true}
                            resume={true}
                            stop={true} />
                    </div>
                    <div>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);