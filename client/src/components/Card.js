import React from 'react'
import './card.css'
import axios from 'axios'
const Card = ({headline}) => {
    
    var s=headline.url;
    var p=s;
    s=s.substring(s.indexOf(".")+1)
    s=s.substring(0,s.indexOf("/"))
    if(s==="com" || s==="in" || s==="net"){
        s=p.substring(p.indexOf("/")+2);
        s=s.substring(0,s.indexOf("/"));
    }


    if(headline.urlToImage === "" || headline.urlToImage === null ){
        headline.urlToImage = "https://findlogovector.com/wp-content/uploads/2018/07/headline-news-logo-vector.png"
    }


    const onAdd = async(e) => {
        e.preventDefault();

        const article = headline;
        article.card = "1";
        const res = await axios.post("http://localhost:5050/articles/add",article ,{
            headers: {
                "auth-token" : localStorage.getItem("token")
            },
        });
        console.log(res.data.status);
    }


    return (
        <div>
            <img className="cardimg" src={headline.urlToImage} alt={headline.source.name}/>
            <img className="" src={`https://logo.clearbit.com/${s}`} alt=""/>
            {/* {s} */}
            <h3>{headline.title}</h3>
            {headline.author && <h5>Author - {headline.author}</h5>}
            <h5>{headline.description}</h5>
            <h5>published - {headline.publishedAt.substring(0,10)}</h5>
            <button type="button" > 
                <a href={headline.url} rel="noreferrer" target="_blank" >View More...</a>
            </button>
            { headline._id === undefined && <input type="button" value ="ADD" onClick={onAdd} />}
        </div>
    )
}

export default Card
