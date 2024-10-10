import Container from 'react-bootstrap/Container';
import jsonData from './data_occ.json'
import Statistics from "../components/Statistics";
import { Col, Row } from 'react-bootstrap';

export default function Project1() {

    return (
        <>
            <Container className="py-5">
                <Row className='gx-5 justify-content-center'>
                    <Col className='col-lg-11 col-xl-11 col-xxl-8'>
                        {/* Add title Project 1  */}
                        <Container className='text-center'>
                            <h1 className="display-5 fw-bolder mb-4">
                                <span className="text-gradient d-inline">Project 1</span>
                            </h1>
                        </Container>

                        <div>
                            <h3>Applications and Grants for entry clearance visas, by occupation and industry, 2021 to 2024 Quarter 2</h3>
                        </div>
                        <h4>
                            Project Overview
                        </h4>
                        <p>
                            This data visualization project addresses the needs of prospective international students seeking career opportunities in the United Kingdom, with a particular focus on pathways leading to skilled worker visas.
                        </p>
                        <h4>
                            Key Features
                        </h4>
                        <ul>
                            <li>Comprehensive visual representation of immigration statistics specifically for skilled worker visas</li>
                            <li>Data filtration capabilities by country of origin, occupation, and industry sectors</li>
                            <li>Dual-color bar chart system:</li>
                            <ul>
                                <li>
                                    Blue bars: Number of visa applications
                                </li>
                                <li>
                                    Purple bars: Number of visa grants within the year
                                </li>
                            </ul>
                            <li>Temporal range: 2021 to June 2024</li>
                            <li>Data sourced from official Home Office statistics</li>
                        </ul>
                        <h4>Project Significance
                        </h4>
                        <p>
                            This visualization tool serves as a valuable resource for international students, offering insights into:
                        </p>
                        <ol>
                            <li>Potential career paths in the UK</li>
                            <li>Industries with high demand for skilled workers</li>
                            <li>Success rates of visa applications across different sectors</li>
                        </ol>
                        <p>
                            By providing this data in an accessible, visual format, the project aims to empower students in making informed decisions about their academic and professional futures in the United Kingdom.
                        </p>
                        <h4>Data Integrity
                        </h4>
                        <p>All information presented is based on official data from the UK Home Office. Users are encouraged to refer to the original source for the most up-to-date and comprehensive information.</p>

                        <Statistics jsonData={jsonData}></Statistics>
                    </Col>
                </Row>


            </Container>

        </>
    )


}