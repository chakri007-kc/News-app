import React from 'react'
import { useEffect , useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import gif from './images/content_Loading-Loop-1.gif';
import '../components/card.css'; 
import Navbar from './Navbar';

const Country = () => {
    var k = localStorage.getItem('country')
    const [country, setcountry] = useState([])
    const [loading, setloading] = useState(false)

    const populateHeadlines = async () => {
        const res = await axios.get(`https://newzshots.herokuapp.com/country/${k}`);
        // console.log(res.data.articles);
        setcountry(res.data.articles);
        setloading(true)
        // console.log(country)
    }
    useEffect( () => {
        populateHeadlines();
    }, [])


    return (
        <>
        <Navbar/>
        {
            loading ?
             <div className='container'>
                {country.map( (headline , index) => (
                    <>
                        <Card key={index} headline={headline}/>
                        <hr />
                    </>
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

export default Country
