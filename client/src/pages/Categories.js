import React from 'react'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import gif from './images/content_Loading-Loop-1.gif'

const Categories = () => {

    const navigate = useNavigate();

    const [categories, setcategories] = useState([])
    const [loading, setloading] = useState(false)

    const populateCategories = async() => {
        const res = await axios.get(`https://newzshots.herokuapp.com/categories`);
        console.log(res.data);
        setcategories(res.data)
        setloading(true)
    }

    useEffect( () => {
        populateCategories();
    }, [])

    const handleChange = async(category) => {
        // console.log(category);
        localStorage.setItem('category',category)
        navigate(`/category`);
    }

    return (

          <>
        {
            loading ?
                    <div className='con'>
                        {categories.map((category) => (
                            <div className='location'>
                                <h2 className='cate' onClick={ () =>  handleChange(category)} > {category} </h2>  <br/>
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

export default Categories
