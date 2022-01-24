import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import gif from './images/content_Loading-Loop-1.gif'
import '../components/card.css'
import Navbar from './Navbar';

const Trending = () => {

    const [headlines, setheadlines] = useState([])
    const [loading, setloading] = useState(false)

    const populateHeadlines = async () => {
        const res = await axios.get(`https://newzshots.herokuapp.com/headlines`);
        // const data = await res.json()
        // console.log(res.data.articles);
        setheadlines(res.data.articles);
        setloading(true)
        // console.log(headlines)
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
                {headlines.map( (headline , index) => (
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

export default Trending
