import React from 'react'
import { useEffect , useState } from 'react'
import axios from 'axios'
import CategoryCard from '../components/CategoryCard'
import gif from './images/content_Loading-Loop-1.gif';
import '../components/card.css'
import Navbar from './Navbar';
const Category = () => {

    var k = localStorage.getItem('category')
    const [category, setcategory] = useState([])
    const [loading, setloading] = useState(false)

    const populateHeadlines = async () => {
        // console.log(k,'hii')

        const res = await axios.get(`https://newzshots.herokuapp.com/category/${k}`);
        console.log(res.data.data);
        setcategory(res.data.data);
        setloading(true)
        // console.log(category)
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
                {category.map( (headline , index) => (
                    // <h2>{headline.author}</h2>
                    <>
                    <CategoryCard key={index} headline={headline} />
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

export default Category
