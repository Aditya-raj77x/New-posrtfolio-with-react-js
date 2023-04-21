import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/s3.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        <img src={logo} className="logo-my" alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/aditya-raj-80b993231"><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://www.facebook.com/profile.php?id=100013267275681&mibextid=ZbWKwL"><img src={navIcon2} alt="Icon" /></a>
                            <a href="https://www.instagram.com/aditya77x/"><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved To Aditya</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}