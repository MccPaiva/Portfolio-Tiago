import React from "react";
import doge from "../images/doge.jpg"
import { useParams } from "react-router-dom";
import rawData from "../postData.json";
import { Link } from "react-router-dom";

const Post = () => {

  const postData = rawData;

  const { slug } = useParams();
  const post = postData[slug];
  const {title, text, date, image} = post;


  return (
    <div className="post container">
      <section className="post-title">
         <div className="date">
          <h2>{date}</h2>
        </div>

        <div className="info">
           <Link to={'/'}><h1>Tiago Almeida</h1></Link>
           <h2>Copywriter</h2>
        </div>
      </section>

      <img src={`../${image}`} alt="dog in a chair"></img>

      <div className="text">

        <h1>{title}</h1>

        <p>{text}</p>
      </div>
    </div>
  );
};
  
export default Post;