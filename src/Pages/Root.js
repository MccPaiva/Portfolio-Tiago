import React from "react";
import rawData from "../postData.json"
import { Link } from "react-router-dom";

const Root = () => {


  const postData = rawData;


console.log(postData)

  return (
    <div>
        <section className="title">
          <h1>Tiago Almeida</h1>
          <h2>Copywriter</h2>
        </section>

        <section className="articles">
          {Object.entries(postData).map(([slug, { title, image }]) => (
          <Link to={`/posts/${slug}`} className="article" key={slug}>
            <div>
              <img src={image}></img>
              <h3>{title}</h3>
            </div>
          </Link>
          ))}
        </section>
    </div>
  );
};
  
export default Root;