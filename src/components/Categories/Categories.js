import React from 'react';
import "./categoriesstyles.css"
import CategoryCard from "./CategoryCard/CategoryCard";
import {Grid, Row, Col} from 'react-bootstrap';

export default class Categories extends React.Component {

    render() {

        return (
            <Grid>
                <Row>
                    <Col md={6}><CategoryCard cardTitle={"LIGHTSABERS"} imageName={"lightsaber.jpg"} size={"Large"}/>

                    </Col>
                    <Col md={6}>
                        <CategoryCard cardTitle={"WATCHES"} imageName={"watch.jpg"} size={"Large"}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <CategoryCard cardTitle={"TV Accessories"} imageName={"backlight.jpg"} size={"Large"}/>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col md={6}>
                                <CategoryCard cardTitle={"LIGHTS"} imageName={"lights.jpeg"} size={"Small"}/>
                            </Col>
                            <Col md={6}>
                                <CategoryCard cardTitle={"GPS"} imageName={"hud.jpg"} size={"Small"}/>

                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <CategoryCard cardTitle={"RETRO GAME SYSTEMS"} imageName={"nes.jpg"} size={"Small"}/>
                            </Col>
                            <Col md={6}>
                                <CategoryCard cardTitle={"3D PRINTERS"} imageName={"3dprinter.jpg"} size={"Small"}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Grid>

        )
    }
}