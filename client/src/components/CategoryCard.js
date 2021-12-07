import React from 'react'
import './card.css'
import axios from 'axios'

const CategoryCard = ({headline}) => {

    if(headline.images === "" || headline.images === null ){
        headline.images = "https://findlogovector.com/wp-content/uploads/2018/07/headline-news-logo-vector.png"
    }



    const onAdd = async(e) => {
        e.preventDefault();

        const article = headline;
        article.card = "2";
        const res = await axios.post("http://localhost:5050/articles/add",article ,{
            headers: {
                "auth-token" : localStorage.getItem("token")
            },
        });
        console.log(res.data.status);
    }
    

    return (
        <div>
            <img className="cardimg" src={headline.images} alt="" />
            <h3>{headline.title}</h3>
            {headline.author && <h5>Author - {headline.author}</h5>}
            <h5>{headline.decription}</h5>
            <h5>published - {headline.time.substring(0,10)}</h5>
            <button type="button" > 
                <a href={headline["read-more"]} rel="noreferrer" target="_blank" >View More...</a>
            </button>

            { headline._id === undefined && <input type="button" value ="ADD" onClick={onAdd} />}
        </div>
    )
}

export default CategoryCard
