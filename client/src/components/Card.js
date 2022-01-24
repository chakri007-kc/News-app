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
        const res = await axios.post("https://news-app-008.herokuapp.com/articles/add",article ,{
            headers: {
                "auth-token" : localStorage.getItem("token")
            },
        });
        console.log(res.data.status);
    }


    return (
        <div className="card">
            <img className="cardimg" src={headline.urlToImage} alt={headline.source.name}/>
            <div className="logo">
                <img className="logoimg" src={`https://logo.clearbit.com/${s}`} alt=""/>
                { headline._id === undefined && <button className="add" type="button" onClick={onAdd} ><i class="far fa-bookmark"></i></button>}
            </div>


              {/* {s} */}
            <h5 className="publish">published - {headline.publishedAt.substring(0,10)}</h5>
            {headline.author && <h5 className="author" >Author - {headline.author}</h5>}
            <div className="title">
                <h3 className="title-1" >{headline.title}</h3>
                <h5 className="description" >{headline.description}</h5>
                {/* <button className="more" type="button" >  */}
                    <a className="more"  href={headline.url} rel="noreferrer" target="_blank" >View More...</a>
                {/* </button> */}
            </div>
            {/* <hr /><hr /><hr /> */}
        </div>
    )
}

export default Card
