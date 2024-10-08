
import Navigationbar from "../components/Navigationbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Root(){
    return(
        <>
            <Navigationbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}