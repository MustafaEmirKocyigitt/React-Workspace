import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function About() {
    return (
        <div>
            <h1>About</h1>
            <hr />  
            <Link to="empoloyee">Employee</Link>
            <br />
            <Link to="company">Company</Link>
            <br />
            <Outlet/>
        </div>
    )
}

export default About