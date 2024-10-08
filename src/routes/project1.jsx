import Container from 'react-bootstrap/Container';
import jsonData from './data_occ.json'
import Statistics from "../components/Statistics";

export default function Project1() {

    return (
        <>
            <Container className="py-5">
                <div>
                    <h3>Applications for entry clearance visas, by occupation and industry, 2021 to 2024 Quarter 2</h3>
                </div>
                <Statistics jsonData={jsonData}></Statistics>
            </Container>

        </>
    )


}