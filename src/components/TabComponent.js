import '../App.css';
import React, { Component } from 'react';
// import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
// import classnames from 'classnames'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Label, Button, Row, Col, Input, Form, FormGroup } from 'reactstrap'
// import { Tab, Tabs } from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
class TabComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: '1'
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({ activeTab: tab });
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
                                <Input type="text" name="url" placeholder="https://novelonomicon.com/novels/tensei-reijou-ha-shomin-no-aji-ni-ueteiru/sna-chapter-440-1/" size="100" />
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
                                <Input type="text" name="url" placeholder="https://lmsnovel.wordpress.com/2021/03/17/v57c6p1-blue-dragon-latuas/" size="100" />
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
                                <Input type="text" name="url" placeholder="https://www.asianhobbyist.com/rem-371/" size="100" />
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