import React, { Component } from 'react';
import { Row, Col, Button, utils } from 'react-bootstrap'
import './rows.css'
import API from '../../Utils/API'

class MiddleThird extends Component {
    colStyleLeft = {
        color: 'black',
        backgroundColor: 'red',
        height: '700px',
    }
    colStyleCenter = {
        color: 'black',
        backgroundColor: 'white',
        height: '700px',
    }
    colStyleRight = {
        color: 'black',
        backgroundColor: 'yellow',
        height: '700px',
    }
    getWUAPI = () =>{
        API.getWU();
    }
    render() {
        return (
            <Row className="middleThird">
                <Col xs={3} style={this.colStyleLeft}>
                    <h1 className="text-center"> MIDDLE LEFT </h1>
                    <Button 
                    onClick={this.getWUAPI}
                    bsSize="large" 
                    bsStyle="info"> Get WU </Button>
                </Col>
                <Col xs={6} style={this.colStyleCenter}>
                    <h1 className="text-center"> MIDDLE CENTER </h1>
                    <p> Health goth twee trust fund, narwhal kitsch disrupt glossier four dollar toast. Vape cliche pok pok, air plant poutine biodiesel adaptogen shabby chic. Lyft twee brunch whatever vexillologist cray live-edge vaporware keffiyeh tote bag aesthetic cloud bread gentrify four dollar toast. Banjo meggings 8-bit etsy food truck chartreuse. Ugh ramps kinfolk keytar, coloring book chicharrones normcore iPhone umami PBR&B narwhal health goth meggings fixie. Freegan everyday carry slow-carb green juice bushwick. Single-origin coffee post-ironic raclette 90's shaman vinyl. </p>
                    <p>Tumblr organic truffaut gentrify echo park next level meh put a bird on it. Blue bottle affogato truffaut occupy, etsy whatever activated charcoal offal kickstarter direct trade ramps PBR&B chambray echo park squid. Ethical keffiyeh typewriter, marfa beard quinoa locavore cray direct trade. Retro woke skateboard squid, chia normcore quinoa scenester artisan vice farm-to-table four dollar toast kale chips. Kitsch enamel pin seitan whatever. Listicle etsy jean shorts la croix, tacos taiyaki dreamcatcher disrupt meh raclette slow-carb yuccie. Stumptown occupy tbh gentrify cred leggings bushwick.</p>
                    <p> Irony poke chillwave bespoke 8-bit keytar lo-fi butcher craft beer deep v XOXO flannel. Biodiesel kickstarter craft beer enamel pin put a bird on it. Narwhal hammock snackwave +1 letterpress paleo jianbing bespoke franzen kombucha pickled hot chicken health goth. Beard neutra shaman, seitan authentic paleo fashion axe jean shorts before they sold out photo booth activated charcoal. Brunch butcher etsy, 8-bit snackwave four loko echo park copper mug XOXO. Waistcoat activated charcoal scenester microdosing prism selvage, 8-bit hashtag you probably haven't heard of them lyft raclette gluten-free 90's iPhone banjo. </p>
                    <p>Tumblr organic truffaut gentrify echo park next level meh put a bird on it. Blue bottle affogato truffaut occupy, etsy whatever activated charcoal offal kickstarter direct trade ramps PBR&B chambray echo park squid. Ethical keffiyeh typewriter, marfa beard quinoa locavore cray direct trade. Retro woke skateboard squid, chia normcore quinoa scenester artisan vice farm-to-table four dollar toast kale chips. Kitsch enamel pin seitan whatever. Listicle etsy jean shorts la croix, tacos taiyaki dreamcatcher disrupt meh raclette slow-carb yuccie. Stumptown occupy tbh gentrify cred leggings bushwick.</p>
                </Col>
                <Col xs={3} style={this.colStyleRight}>
                    <h1 className="text-center"> MIDDLE RIGHT </h1>
                    <p>Tumblr organic truffaut gentrify echo park next level meh put a bird on it. Blue bottle affogato truffaut occupy, etsy whatever activated charcoal offal kickstarter direct trade ramps PBR&B chambray echo park squid. Ethical keffiyeh typewriter, marfa beard quinoa locavore cray direct trade. Retro woke skateboard squid, chia normcore quinoa scenester artisan vice farm-to-table four dollar toast kale chips. Kitsch enamel pin seitan whatever. Listicle etsy jean shorts la croix, tacos taiyaki dreamcatcher disrupt meh raclette slow-carb yuccie. Stumptown occupy tbh gentrify cred leggings bushwick.</p>
                    <p> Irony poke chillwave bespoke 8-bit keytar lo-fi butcher craft beer deep v XOXO flannel. Biodiesel kickstarter craft beer enamel pin put a bird on it. Narwhal hammock snackwave +1 letterpress paleo jianbing bespoke franzen kombucha pickled hot chicken health goth. Beard neutra shaman, seitan authentic paleo fashion axe jean shorts before they sold out photo booth activated charcoal. Brunch butcher etsy, 8-bit snackwave four loko echo park copper mug XOXO. Waistcoat activated charcoal scenester microdosing prism selvage, 8-bit hashtag you probably haven't heard of them lyft raclette gluten-free 90's iPhone banjo. </p>
                </Col>
            </Row>
        );
    }
}

export default MiddleThird;
