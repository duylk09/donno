import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BarChart from "./BarChart";
import { useSearchParams, useLocation } from 'react-router-dom';

import React, { useEffect, useState, useId } from "react";




export default function Statistics(props) {
    //const id = useId();
    const parsedData = JSON.parse(props.jsonData);

    const [searchParams, setSearchParams] = useSearchParams();
    // const location = useLocation();

    const paramNationality = searchParams.get('nationality') || '';
    const paramIndustry = searchParams.get('industry') || '';
    const paramOccupation = searchParams.get('occupation') || '';


    const [nationalities, setNationalities] = useState([]);
    const [years, setYears] = useState([]);
    const [industries, setIndustries] = useState([]);
    const [occupations, setOccupations] = useState([]);

    const [year, setYear] = useState("");
    const [nationality, setNationality] = useState(paramNationality);
    const [industry, setIndustry] = useState(paramIndustry);
    const [occupation, setOccupation] = useState(paramOccupation);

    console.log(nationality)

    const [applications, setApplications] = useState([]);
    const [grants, setGrants] = useState([]);

    function updateChartData(selectedNationality, selectedOccupation, selectedIndustry) {
        let sumApplications = [];
        let sumGrants = [];
        for (let year of years) {
            const filteredData = parsedData.filter(item => {
                const matchesYear = item[0] == year;
                const matchesNationality = !selectedNationality || item[2] === selectedNationality;
                const matchesIndustry = !selectedIndustry || item[4] === selectedIndustry;
                const matchesOccupation = !selectedOccupation || item[3].includes(selectedOccupation);

                return matchesYear && matchesNationality && matchesIndustry && matchesOccupation;
            });
            const sumValueApp = filteredData.reduce((acc, item) => acc + item[5], 0);
            sumApplications.push(sumValueApp);
            const sumValueGrants = filteredData.reduce((acc, item) => acc + item[6], 0);
            sumGrants.push(sumValueGrants);

        }

        if (sumApplications != applications) {
            setApplications(sumApplications);
        }
        if (sumGrants != grants) {
            setGrants(sumGrants);
        }

    };


    function handleNationalityChange(event) {
        // setNationality(event.target.value);


        // Update a specific query parameter
        setSearchParams({
            nationality: event.target.value || '',
            industry: paramIndustry || '',
            occupation: paramOccupation || ''
        });

    }

    function handleIndustryChange(event) {
        // setIndustry(event.target.value);

        setSearchParams({
            nationality: paramNationality || '',
            industry: event.target.value || '',
            occupation: paramOccupation || ''

        });
    }

    function handleParameterChange(param, event) {
        // setOccupation(event.target.value);

        let search = new URLSearchParams(searchParams)
        search.set(param, event.target.value)
        setSearchParams(search);
    }

    useEffect(() => {

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
    }, []);

    useEffect(() => {

        updateChartData(paramNationality, paramOccupation, paramIndustry);

    }, [paramNationality, paramOccupation, paramIndustry, nationalities]);


    return (
        <>
            <Container>
                <Row className='py-2'>
                    {/* Select box: Nationality */}
                    <Col xs={2} className='d-flex align-items-center col-5 col-sm-4 col-md-3 col-xl-2'>
                        <label htmlFor="nationality">Select Nationality:</label>
                    </Col>
                    <Col className='col-12 col-sm-8 col-md-9 col-xl-10'>

                        <select className="form-select" id="nationality" value={paramNationality} name="nationality" onChange={(e) => handleParameterChange("nationality", e)}>
                            <option key="default" value="">Select All</option>
                            {nationalities.map((nationality, index) => (
                                <option key={index} value={nationality}>
                                    {nationality}
                                </option>
                            ))}
                        </select>
                    </Col>
                </Row>
                <Row>
                    {/* Select box: Industy */}
                    <Col xs={2} className='d-flex align-items-center col-5 col-sm-4 col-md-3 col-xl-2'>
                        <label htmlFor="industry">Select Industry:</label>
                    </Col>
                    <Col className='col-12 col-sm-8 col-md-9 col-xl-10'>
                        <select className="form-select" id="industry" name="industry" value={paramIndustry} onChange={(e) => handleParameterChange("industry", e)}>
                            <option key="default" value="">Select All</option>
                            {industries.map((industry, index) => (
                                <option key={index} value={industry}>
                                    {industry}
                                </option>
                            ))}
                        </select>
                    </Col>
                </Row>
                <Row className='py-2'>
                    {/* Select box: Occupations */}
                    <Col xs={2} className='d-flex align-items-center col-5 col-sm-4 col-md-3 col-xl-2'>
                        <label htmlFor="occupation">Select Occupations:</label>
                    </Col>
                    <Col className='col-12 col-sm-8 col-md-9 col-xl-10'>
                        <select className="form-select" id="occupation" name="occupation" value={paramOccupation} onChange={(e) =>  handleParameterChange("occupation", e)}>
                            <option key="default" value="">Select All</option>
                            {occupations.map((occupation, index) => (
                                <option key={index} value={occupation}>
                                    {occupation}
                                </option>
                            ))}
                        </select>
                    </Col>
                </Row>

            </Container>

            <BarChart years={years} applications={applications} grants={grants} />


        </>
    )
}