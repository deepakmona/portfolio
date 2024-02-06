/* eslint-disable react/prop-types */
import { Component } from 'react';
import './Card.css';

export default class NewsItem extends Component {
  
    render() {
        let {imageUrl,url}=this.props 
      

        return (
      <div>

       <div className="card" style={{width:"18rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..."/>
         <div className="card-body">
           <a href={url} target="_blank" className="projectbtn" rel="noreferrer">Read More</a>

          </div>
    </div>
      </div>
    )
  }
}