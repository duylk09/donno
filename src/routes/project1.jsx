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
                        {/* <Container className='text-center'>
                            <h1 className="display-5 fw-bolder mb-4">
                                <span className="text-gradient d-inline">UK Skilled Worker Visa Statistics</span>
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
                        <p>All information presented is based on official data from the UK Home Office. Users are encouraged to refer to the original source for the most up-to-date and comprehensive information.</p> */}
                        <div class="container">
                            <h1 className='project-tittle '>UK Dream vs Reality: The Hidden Challenge for Vietnamese Graduates</h1>

                            <p>Despite the surge in Vietnamese students choosing UK universities, a striking new analysis reveals a surprising gap between study visas and career outcomes. The numbers tell a compelling story that every prospective Vietnamese student should know.</p>

                            <div class="highlight-box">
                                <h2>Vietnamese Student Enrollment in UK</h2>
                                <div class="stats-grid">
                                    <div class="stat-card">
                                        <div>2021</div>
                                        <div class="stat-number">1,300</div>
                                        <div>students</div>
                                    </div>
                                    <div class="stat-card">
                                        <div>2022</div>
                                        <div class="stat-number">2,100</div>
                                        <div>students</div>
                                    </div>
                                    <div class="stat-card">
                                        <div>2023</div>
                                        <div class="stat-number">2,300</div>
                                        <div>students</div>
                                    </div>
                                    <div class="stat-card">
                                        <div>2024 (Q2)</div>
                                        <div class="stat-number">220</div>
                                        <div>students</div>
                                    </div>
                                </div>
                            </div>

                            <p>However, here's the reality check: Only <strong>316 Vietnamese graduates</strong> secured skilled worker visas during this period. That's a mere <strong>5% success rate</strong> in transitioning from student to sponsored worker.</p>

                            <p>This eye-opening statistic challenges a common belief among Vietnamese students that the Graduate Route – which offers two years of post-study work – automatically leads to sponsored employment. While the Graduate Route provides valuable UK work experience, converting this into long-term sponsored positions proves more challenging than many anticipate.</p>

                            <p>The competition is particularly fierce when compared to other Asian nations. Countries like India, Philippines, Nepal, Malaysia, and China consistently outperform Vietnam in securing skilled worker visas in the UK job market.</p>

                            <div class="key-points">
                                <h2>What does this mean for prospective students?</h2>
                                <p>If you're considering UK study as a pathway to long-term employment, it's crucial to:</p>
                                <ul>
                                    <li>Plan your career strategy before arrival</li>
                                    <li>Build relevant skills and networks during your studies</li>
                                    <li>Understand that the Graduate Route alone isn't a guarantee of sponsorship</li>
                                    <li>Consider your backup plans carefully</li>
                                </ul>
                            </div>

                            <p>While studying in the UK remains a valuable experience, these statistics serve as a wake-up call for Vietnamese students to approach their international education journey with realistic expectations and thorough preparation.</p>
                        </div>
                        <Container className='text-center'>
                            <h1 className="display-5 fw-bolder py-4">
                                <span className="text-gradient d-inline">UK Skilled Worker Visa Statistics</span>
                            </h1>
                        </Container>
                        <Statistics jsonData={jsonData}></Statistics>
                    </Col>
                </Row>


            </Container>

        </>
    )


}