import '../App.css';
import React, { Component } from 'react';
// import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
// import classnames from 'classnames'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Label, Button, Row, Col, Input, Form, FormGroup, FormFeedback } from 'reactstrap'
// import { Tab, Tabs } from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
class TabComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: '1',
            validnovel: true,
            validlms: true,
            validasian: true
        }

        this.toggle = this.toggle.bind(this)
        this.onNovelChange = this.onNovelChange.bind(this)
        this.onlmsChange = this.onlmsChange.bind(this)
        this.onasianChange = this.onasianChange.bind(this)
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({ activeTab: tab });
        }
    }

    onNovelChange(e) {
        if (e.target.value.match("^https://novelonomicon.com/novels/[a-zA-Z-0-9]*/[a-zA-Z-0-9]*$") != null) {
            this.setState({ validnovel: true });
        } else {
            this.setState({ validnovel: false });
        }
    }

    onlmsChange(e) {
        if (e.target.value.match("^https://lmsnovel.wordpress.com/[0-9]*/[0-9]*/[0-9]*/[a-zA-Z-0-9]*$") != null) {
            this.setState({ validlms: true });
        } else {
            this.setState({ validlms: false });
        }
    }

    onasianChange(e) {
        if (e.target.value.match("^https://www.asianhobbyist.com/[a-zA-Z-0-9]*$") != null) {
            this.setState({ validasian: true });
        } else {
            this.setState({ validasian: false });
        }
    }

    render() {
        return (
            <Tabs activeKey={this.state.activeTab} onSelect={(num) => this.toggle(num)}>
                <Tab eventKey='1' title='Novelonomicon'>
                    <p />
                    <Form onSubmit={(text) => this.props.handleSubmit(text)}>
                        <Row className="form-group">
                            <Label htmlFor="text" className="column"> Novelonomicon </Label>
                            <Col>
                                {/* <Control.text model=".url" id="url" name="url" placeholder="Enter Text" className="form-control" /> */}
                                <Input invalid={!this.state.validnovel} type="text" name="url" defaultValue="https://novelonomicon.com/novels/tensei-reijou-ha-shomin-no-aji-ni-ueteiru/sna-chapter-440-1" placeholder="https://novelonomicon.com/novels/tensei-reijou-ha-shomin-no-aji-ni-ueteiru/sna-chapter-440-1" size="100" onChange={this.onNovelChange} />
                                <FormFeedback>The URL format is wrong: https://novelonomicon.com/novels/novel-name/chapter-number</FormFeedback>
                            </Col>
                        </Row>

                        <Row className="form-group button" >
                            <Col>
                                <Button className="butt" type="submit" color="primary" > Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Tab>
                <Tab eventKey='2' title='LMSnovel'>
                    <p />
                    <Form onSubmit={(text) => this.props.handleSubmit(text)}>
                        <Row className="form-group">
                            <Label htmlFor="text" className="column"> LMSnovel </Label>
                            <Col>
                                {/* <Control.text model=".url" id="url" name="url" placeholder="Enter Text" className="form-control" /> */}
                                <Input invalid={!this.state.validlms} type="text" name="url" defaultValue="https://lmsnovel.wordpress.com/2021/03/17/v57c6p1" placeholder="https://lmsnovel.wordpress.com/2021/03/17/v57c6p1-blue-dragon-latuas/" size="100" onChange={this.onlmsChange} />
                                <FormFeedback>The URL format is wrong: https://lmsnovel.wordpress.com/year/month/day/volumenamechapternumber</FormFeedback>
                            </Col>
                        </Row>
                        <Row className="form-group button" >
                            <Col>
                                <Button className="butt" type="submit" color="primary" style={{ alignSelf: 'center' }}> Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Tab>
                <Tab eventKey='3' title='AsianHobbyist'>
                    <p />
                    <Form onSubmit={(text) => this.props.handleSubmit(text)}>
                        <Row className="form-group">
                            <Label htmlFor="text" className="column"> AsianHobbyist </Label>
                            <Col>
                                {/* <Control.text model=".url" id="url" name="url" placeholder="Enter Text" className="form-control" /> */}
                                <Input invalid={!this.state.validasian} type="text" name="url" defaultValue="https://www.asianhobbyist.com/rem-371" placeholder="https://www.asianhobbyist.com/rem-371/" size="100" onChange={this.onasianChange} />
                                <FormFeedback>The URL format is wrong: https://www.asianhobbyist.com/novelname-chapternumber</FormFeedback>
                            </Col>
                        </Row>
                        <Row className="form-group button" >
                            <Col>
                                <Button className="butt" type="submit" color="primary" style={{ alignSelf: 'center' }}> Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Tab>
            </Tabs>
        )
    }
}

export default TabComponent;