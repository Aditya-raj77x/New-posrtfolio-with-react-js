import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Zomato Clone",
            description: "Zomato is a online food ordering application, I have made a clone of it using React Js, Zomato Frontend clone using React Js. for FrontEnd And Node js for back End and MongoDB to store The Data.",
            imgUrl: projImg1,
        },
        {
            title: "My Old Portfolio Site",
            description: "It's my personal Portfolio site . its very simple and easy going . i do not want make it very complex . it want to make in a way so that someone could understand all of my skills and go thoroug my projects",
            imgUrl: projImg2,
        },
        {
            title: "Book My Show Clone",
            description: "t is a clone of Book my show website . I have used react to make it and for the DataBase and server I have used MovieDB API .",
            imgUrl: projImg3,
        },
        {
            title: "Task Management Application",
            description: "DIt is a task Management app where You can store your daily task . Its completely JS based. You can Add a new task delete the task edit it and search the task's that you have added .",
            imgUrl: projImg4,
        },
        {
            title: "Libary Book Record Management",
            description: "This is a book record management API Backend for the management of records and books",
            imgUrl: projImg5,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>These are some of mine major projects feel free to go through them.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}

                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="section">
                                                <p>.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p></p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}