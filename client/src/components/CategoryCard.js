import React from 'react'
import './card.css'


const CategoryCard = ({headline}) => {

    if(headline.images === "" || headline.images === null ){
        headline.images = "https://findlogovector.com/wp-content/uploads/2018/07/headline-news-logo-vector.png"
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
        </div>
    )
}

export default CategoryCard
