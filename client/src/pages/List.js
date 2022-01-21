import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import gif from './images/content_Loading-Loop-1.gif'
import CategoryCard from '../components/CategoryCard';
import '../components/card.css'

const List = () => {

    
    const [headlines, setheadlines] = useState([])
    const [loading, setloading] = useState(false)
    
    useEffect( () => {
        const k=localStorage.getItem('token');
        if(k!==null){
            populateHeadlines();
        }
        else{
            setheadlines([])
            setloading(true)
        }
    }, [])

    const populateHeadlines = async () => {
        const res = await axios.get(`http://localhost:5050/articles`,{
            headers: {
                "auth-token" : localStorage.getItem("token")
            },
        });
        // const data = await res.json()
        // console.log(res.data.articles);
        // console.log(res.data)
        setheadlines(res.data);
        setloading(true)
        // console.log(headlines)
    }

    const onDelete = async(id) => {
        const res = await axios.delete(`http://localhost:5050/articles/delete/${id}`,{
              headers: {
                "auth-token" : localStorage.getItem("token")
            },
        })
        if(res.data.status === 'ok'){
                populateHeadlines();
        }
        else{
            alert(res.data.status);
        }
    } 



    return (
         <>
        {
            loading ?
             <div className='container'>
                {headlines.map( (headline , index) => (
                    <div>
                   {headline.card === "1" ?  <Card key={index} headline={headline}/> : <CategoryCard key={index} headline={headline}/> }
                   <button className="delete" type="button" onClick={() => onDelete(headline._id)}><i class="far fa-trash-alt"></i></button>
                   {/* <input type="button" value="delete" onClick={() => onDelete(headline._id)}/> */}
                   <hr />
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

export default List
