import Navigationbar from "../components/Navigationbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";

import React, {useEffect, useState} from "react";
import jsonData1 from './data_occ_d01.json'; 
import jsonData2 from './data_occ_d02.json';
import jsonData from './data_occ.json'
import Statistics from "../components/Statistics";

export default function Project1(){

    return(
        <>
            <Navigationbar/>
            <Container className="py-5">
            {/* Select box: Year */}
            <div>
                <h3>Applications for entry clearance visas, by occupation and industry, 2021 to 2024 Q1</h3>
            </div>
            <Statistics jsonData={jsonData}></Statistics>
            <div>
                <h3>Grants of entry clearance visas, by occupation and industry, 2021 to 2024 Q1</h3>
            </div>
            {/* <Statistics jsonData={jsonData2}></Statistics> */}

            </Container>
            
        </>
    )


}