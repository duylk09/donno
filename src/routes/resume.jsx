import Navigationbar from "../components/Navigationbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const colstyle = { border: '1px solid black' };

function Resume(){

    return(
        <>
            <Navigationbar/>
            <Container>
                <div class="text-center">
                    <h1>Resume</h1>
                </div>
                <div class="text-left">
                    <h2>Experience</h2>
                </div>
            
            
                <Row>
                    <Col sm={4} style={colstyle}>
                    12/2022 - 09/2023<br/>
                    <b>Global Ambassador</b><br/>
                    Leeds Beckett University<br/>
                    <i>Leeds, UK</i>
                    </Col>
                    <Col sm={8} style={{ border: '1px solid black' }}>
                        <ul>
                            <li>
                                PR & Promotion: promoted the University through strategic engagement 
                                campaigns on social media platforms such as Facebook, Instagram, and YouTube channels.
                            </li>   
                            <li>
                                Event Management: facilitated Welcome weeks with campus tours, meet and greet services, 
                                and collaborated with Ambassadors on international student check-ins and IT support. Contributed to planning vibrant events with the Global Village (Global Community).
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} style={colstyle}>
                    04/2020 - 09/2022<br/>
                    <b>Learning Coach</b><br/>
                    Freelance<br/>
                    <i>Ho Chi Minh City, Vietnam</i>
                    </Col>
                    <Col sm={8} style={colstyle}>
                        <ul>
                            <li>
                                Achieved 85% first-month retention through strategic coaching. Secured 90% commitment in the initial 
                                session of a personalised program, fostering language connections and student ownership of learning.
                            </li>   
                            <li>
                            	Enhanced students' technological learning proficiency and flexibility by 
                                introducing digital tools such as Google Classroom and Zoom.
                            </li>
                            <li>
                            	Guided learners in establishing clear objectives through SMART goals, 
                                offering ongoing feedback and reviewing progress during sessions.
                            </li>
                            <li>
                            	Fostered independent learning to enhance knowledge retention, 
                                recognizing and reinforcing students' internal motivation for commitment through ongoing sessions.
                            </li>
                        </ul>
                    </Col>
                </Row>

                <Row>
                    <Col sm={4} style={colstyle}>
                    03/2016 - 04/2020<br/>
                    <b>Head of Coach</b><br/>
                    Wall Street English<br/>
                    <i>Ho Chi Minh City, Vietnam</i>
                    </Col>
                    <Col sm={8} style={colstyle}>
                        <ul>
                            <li>
                            	Student Relationship: Achieved over 80% monthly retention by delivering 
                                effective study support through phone follow-ups, academic advising sessions, 
                                and practical speaking exercises.                            
                            </li>   
                            <li>
                            	Syllabus contribution: Collaborated with a team of coaches to organise 
                                a diversity of classes to encourage students' consistent participation.
                            </li>
                            <li>
                            	Teaching Support: Implemented small-sized beginner classes to 
                                facilitate seamless adaptation to a 100% English-speaking environment.
                            </li>
                            <li>
                            	Event Management: Generated 1,000 prospect leads in a 3-month period through successful event execution.
                            </li>
                            <li>
                            	Cross-functional Collaboration: worked closely with service, marketing, and sales teams to ensure 
                                quality events for both attracting prospects and adding value for current students.
                            </li>
                            <li>
                            	Team Management: Elevated coaches from junior to senior positions through delegation, 
                                coaching, and quarterly performance reviews.
                            </li>
                            <li>
                            	Business Development: Identified and implemented business process improvements, 
                                proposing solutions for current issues.
                            </li>
                            <li>
                            	Demonstrated strong leadership and mentorship skills in identifying high-potential 
                                junior coaches and providing them with targeted guidance and support to facilitate their 
                                professional development, successfully promoting 2 staff members to the Head of Coach position.
                            </li>
                            <li>
                            	Managed a team of 13 coaches in a high-pressure, fast-paced environment, 
                                resulting in being awarded Personal Coach of the Month and Inclusion Award in 2017
                            </li>
                            
                        </ul>
                    </Col>
                </Row>

                
                
            <div class="text-left">
                <h2>Education</h2>
            </div>            
                <Row>
                    <Col sm={4} style={colstyle}>
                    2022 - 2023<br/>
                    <b>Master of Arts in Education</b><br/>
                    Leeds Beckett University<br/>
                    <i>Leeds, UK</i>
                    </Col>
                    <Col sm={8} style={colstyle}>
                        Relevant modules: Research Method, Coaching and Mentoring, Contemporary Issues in Education.
                        Dissertation: Exploring Current Challenges in Language Learning in Vietnam and Proposed Solutions: A Literature Review (Distinction).
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} style={colstyle}>
                    2007 - 2011<br/>
                    <b>Bachelor's degree in Computer Science</b><br/>
                    Saigon Technology University<br/>
                    <i>Ho Chi Minh City, Vietnam</i>
                    </Col>
                    <Col sm={8} style={colstyle}>
                        Outstanding Coursework: Database, Database Administration, Management Information systems.
                    </Col>
                </Row>

            <div class="text-left">
                <h2>Volunteer Activities</h2>
            </div>
                <Row>
                    <Col sm={4} style={colstyle}>
                    03/2022 - 09/2023<br/>
                    <b>Course Representative</b><br/>
                    Leeds Beckett University<br/>
                    <i>Leeds, UK</i>
                    </Col>
                    <Col sm={8} style={colstyle}>
                        <ul>
                            <li>
                            	Course Improvement: Worked with the Director and The Student Union to identify areas for improvement within the course and propose constructive suggestions for enhancement. 
                                Resulted in a letter of action outlining 16 improvements.
                            </li>   
                            <li>
                            	Representation: Represented the views and concerns of the student body in discussions 
                                about curriculum, assessments, and other relevant aspects of the course.
                            </li>
                            <li>
                            	Collaboration: Collaborated with the Student Union to deliver constructive feedback to the university's School of 
                                Education and played a pivotal role in designing courses for future cohorts.
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} style={colstyle}>
                    09/2018<br/>
                    <b>Professional Speaker</b><br/>
                    SPE Vietnam<br/>
                    <i>Ho Chi Minh City, Vietnam</i>
                    </Col>
                    <Col sm={8} style={colstyle}>
                        <ul>
                            <li>
                            	Presented a conference focused on effective English language study strategies    
                            </li>   
                           
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} style={colstyle}>
                    2015 - 2016<br/>
                    <b>English Teacher</b><br/>
                    Volunteer House Vietnam<br/>
                    <i>Ho Chi Minh City, Vietnam</i>
                    </Col>
                    <Col sm={8} style={colstyle}>
                        <ul>
                            <li>
                            	Provided free English classes for underprivileged children, offering them valuable educational opportunities.                            
                            </li>   
                           
                        </ul>
                    </Col>
                </Row>
            <div class="text-left">
                <h2>Core Skills</h2>
            </div>
                <Row>
                    <Col sm={4} style={colstyle}>
                    	IT skills
                    </Col>
                    <Col sm={8} style={colstyle}>
                        Python, React, Microsoft Office (Excel, Word, PowerPoint), Canva, Google Sheets/Site/Classroom, Zoom.
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} style={colstyle}>
                    	Interpersonal skills
                    </Col>
                    <Col sm={8} style={colstyle}>
                        Critical thinking, communication, presentation, cultural awareness, problem solving.
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} style={colstyle}>
                    	Professional skills                   
                    </Col>
                    <Col sm={8} style={colstyle}>
                        Project management, customer service, event management, scheduling, coaching, teaching.
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} style={colstyle}>
                    	Certifications                   
                    </Col>
                    <Col sm={8} style={colstyle}>
                        Safeguarding in Education, Prevent Awareness.
                    </Col>
                </Row>
            

            </Container>
        </>

    );

}

export default Resume;