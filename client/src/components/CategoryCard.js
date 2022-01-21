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
        <div className="card">
            <img className="cardimg" src={headline.images} alt="" />
            <div className="logo">
                { headline._id === undefined && <button className="add" type="button" onClick={onAdd} ><i class="far fa-bookmark"></i></button>}
            </div>

            <h5 className="publish">published - {headline.time.substring(0,10)}</h5>
            {headline.author && <h5 className="author">Author - {headline.author}</h5>}
            <div className="title">
                <h3 className="title-1">{headline.title}</h3>
                <h5 className="description">{headline.decription}</h5>
                {/* <button type="button" >  */}
                    <a className="more" href={headline["read-more"]} rel="noreferrer" target="_blank" >View More...</a>
                {/* </button> */}
            </div>

        </div>
    )
}

export default CategoryCard
