/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import dataProjects from "../../assets/ProjectsJ.json";
import { Link } from "react-router-dom";
import imag from "assets/images/Bussmale.png";
import imag2 from "assets/images/Cookstand.png";
import imag3 from "assets/images/emergency-advisor.png";
import imag4 from "assets/images/comingSoon.png";
import imag5 from "assets/images/comingSoon.png";
// index page sections
import Download from "../IndexSections/Download.js";

let projects = dataProjects.projects;
let images = [imag, imag2, imag3, imag4, imag5];

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <h1 className="display-3 text-white">
                      I'm Exiting With Tech{" "}
                    </h1>
                    <p
                      className="lead text-white"
                      style={{ fontWeight: "500" }}
                    >
                      I love tech because it make our life easier and i like
                      anythings related with its spacial artificial intelligence
                      that make a things move and do a lot of things like a
                      human that so amazing for me and make me so exiting and
                      don't forget the games for fun and applications to make
                      you do a lot of things from your Home.
                    </p>
                  </Row>
                </div>
              </Container>
              <br />
              <br />
              <h1
                className="display-3 text-white"
                style={{ textAlign: "center" }}
              >
                My Projects{" "}
              </h1>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    {/* Start Cards  */}
                    {projects.map((elem, index) => {
                      return (
                        <Col lg="4" key={elem.projectName}>
                          <Card className="card-lift--hover shadow border-0">
                            <CardBody className="py-5">
                              <img
                                src={images[index]}
                                alt=""
                                style={{ width: "250px" }}
                              />

                              <h6 className="text-primary text-uppercase">
                                {elem.projectName}
                              </h6>
                              <p className="description mt-3">
                                {elem.projectDes}
                              </p>
                              <div>
                                <Badge color="primary" pill className="mr-1">
                                  design
                                </Badge>
                                <Badge color="primary" pill className="mr-1">
                                  system
                                </Badge>
                                <Badge color="primary" pill className="mr-1">
                                  creative
                                </Badge>
                              </div>
                              {/* <Link to={elem.projectURL}>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Visit Now
                          </Button>
                          </Link> */}
                              <Link to="" target="_blank">
                                <Button
                                  className="mt-4"
                                  color="primary"
                                  href={elem.liveURL}
                                  target="_blank"
                                >
                                  Visit Now
                                </Button>
                              </Link>
                            </CardBody>
                          </Card>
                        </Col>
                      );
                    })}
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <Container
            className="py-lg-md d-flex"
            style={{ backGroundColor: "red" }}
          >
            <div className="col px-0">
              
                <h1 style={{color:'#1c1cfc',textAlign:"center",fontWeight:"bold"}}>My Background </h1>
                <p style={{ fontWeight: "500" }}>
                  Hello, I am Murad Al-Khatib, I am 24 years old, I have a
                  Bachelor's degree in Computer Information Systems. I love
                  technology, sports and design. I'm a web application developer
                  and I like to learn a lot, especially in terms of technology,,
                  so I hope to be a familyer with AI and learn anything about it
                  I'm good with C#, Java, javascript and HTML Css and I know a
                  little bit about flutter I know how to work with database and
                  I have little knowledge of computers network I'm good at math
                  and logic and I think that makes me stand out from the rest of
                  the programmers because a lot of programmers dont like math.
                </p>
             
            </div>
          </Container>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
