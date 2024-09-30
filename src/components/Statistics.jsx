import Navigationbar from "../components/Navigationbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from "react-bootstrap";
import BarChart from "./BarChart";

import React, {useEffect, useState, useId} from "react";

function newLocal (occupation, index) {
    return <option key={index} value={occupation}>
        {occupation}
    </option>
}

export default function Statistics(props) {
    const id = useId();
    const parsedData = JSON.parse(props.jsonData);

    const [nationalities, setNationalities] = useState([]);
    const [years, setYears] = useState([]);
    const [industries, setIndustries] = useState([]);
    const [occupations, setOccupations] = useState([]);
    
    const [year, setYear] = useState("");
    const [nationality, setNationality] = useState("");
    const [industry, setIndustry] = useState("");
    const [occupation, setOccupation] = useState("");

    const [applications, setApplications] = useState([]);

    function getSelectedValue (selectedYear, selectedNationality, selectedOccupation, selectedIndustry) {     

        // const selectedYear = document.getElementById(`year-${id}`).value;
        // const selectedNationality = document.getElementById(`nationality-${id}`).value;
        // const selectedIndustry = document.getElementById(`industry-${id}`).value;
        // const selectedOccupation = document.getElementById(`occupation-${id}`).value;

        
        let result = []
        for (let year of years){
            const filteredData = parsedData.filter(item => {
                const matchesYear = item[0] == year;
                const matchesNationality = !selectedNationality || item[2] === selectedNationality;
                const matchesIndustry = !selectedIndustry || item[4] === selectedIndustry;
                const matchesOccupation = !selectedOccupation || item[3].includes(selectedOccupation);
        
                return matchesYear && matchesNationality && matchesIndustry && matchesOccupation;
            });
            const sumValue = filteredData.reduce((acc, item) => acc + item[5], 0);
            result.push(sumValue)
        }
        
        if(result != applications)
        {
            setApplications(result);
        }

    };

    function handleYearChange(event){
        setYear(event.target.value);
    }

    function handleNationalityChange(event){
        setNationality(event.target.value);
    }

    function handleIndustryChange(event){
        setIndustry(event.target.value);
    }

    function handleOccupationChange(event){
        setOccupation(event.target.value);
        // getSelectedValue();
    }

    useEffect(() => {
        
        if (Array.isArray(parsedData)) {
            //Nationality data for select box
            const uniqueNationalities = [...new Set(parsedData.map(item => item[2]))];
            setNationalities(uniqueNationalities);
            uniqueNationalities.sort();

            //Year data for select box
            const uniqueYears = [...new Set(parsedData.map(item => item[0]))];
            setYears(uniqueYears);
            uniqueYears.sort();

            //Industry data for select box
            const uniqueIndustries = [...new Set(parsedData.map(item => item[4]))];
            setIndustries(uniqueIndustries);
            uniqueIndustries.sort();

            //Occupation data for select box
            const uniqueOccupations = [...new Set(parsedData.map(item => item[3].substring(7)))];
            uniqueOccupations.sort();
            setOccupations(uniqueOccupations);

          } else {
            console.error("jsonData is not an array.");
          }
    }, []);
    
    useEffect(() => {
        getSelectedValue(year, nationality, occupation, industry);
    }, [year, nationality, occupation, industry])
    
    return(
        <>

            {/* Select box: Nationality */}
            <div>
                <label htmlFor="nationality">Select Nationality:</label>
                <select id={`nationality-${id}`} name="nationality" defaultValue="" onChange={(e) =>handleNationalityChange(e)}>
                    <option key="default" value=""></option>
                    {nationalities.map((nationality, index) => (
                    <option key={index} value={nationality}>
                        {nationality}
                    </option>
                    ))}
                </select>
            </div>

            {/* Select box: Industy */}
            <div>
                <label htmlFor="industry">Select Industry:</label>
                <select id={`industry-${id}`} name="industry" defaultValue="" onChange={(e) => handleIndustryChange(e)}>
                    <option key="default" value=""></option>
                    {industries.map((industry, index) => (
                    <option key={index} value={industry}>
                        {industry}
                    </option>
                    ))}
                </select>
            </div>     

            {/* Select box: Occupations */}
            <div>
                <label htmlFor="occupation">Select Occupations:</label>
                <select id={`occupation-${id}`} name="occupation" defaultValue="" onChange={(event) =>handleOccupationChange(event)}>
                    <option key="default" value=""></option>
                    {occupations.map(newLocal)}
                </select>
            </div> 
            {/* <Button variant="primary" onClick={getSelectedValue}>Search</Button> */}
            {/* <div>Result: {applications.toString()}</div> */}
            <BarChart years={years} applications={applications}/>

                    
        </>
    )
}