import React from 'react';
import '../App.css';
import Navbar from "../components/Navbar2";
import lifestyle1 from "../resources/lifestyle/lifestyle.jpg"
import lifestyle2 from "../resources/portrait/portrait1.jpg"



class LifestylePage extends React.Component {
    render() {
        return (
            <div >
                <Navbar/>
                <img src={lifestyle1} alt="lifestyle1"/>
                <img src={lifestyle2} alt="lifestyle2"/>
            </div>
        );
    }
}

export default LifestylePage