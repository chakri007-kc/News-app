import React from 'react'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import gif from './images/content_Loading-Loop-1.gif'
import '../components/card.css'

const Location = () => {
    const navigate = useNavigate();

    const [countries, setcountries] = useState([])
    const [loading, setloading] = useState(false)

    const populateCountries = async() => {
        const res = await axios.get(`https://newzshots.herokuapp.com/countries`);
        // console.log(res.data);
        setcountries(res.data)
        setloading(true)
    }

    useEffect( () => {
        populateCountries();
    }, [])

    const handleChange = async(country) => {
        // console.log(country);
        localStorage.setItem('country',country)
        navigate(`/country`);
    }

    return (

        <>
        {
            loading ?
                    <div className='con'>
                        {countries.map((country) => (
                            <div className='location'>
                                <img src={`https://flagcdn.com/w160/${country}.png`} onClick={ () =>  handleChange(country)}  alt=""/>  <br/>
                                {/* <hr/> */}
                            </div>
                        ))}
                    </div>
             : 
             <div className="loading" >
                   <img src={gif} alt="Loading..." />
            </div>
        }
       </>



    )
}

export default Location
