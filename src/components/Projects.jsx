import  { Component } from 'react';
import Card from './Card';
import './Project.css';
import imageport from '../pictures/new2.png'
import imageairtel from '../pictures/imageairtel.png'
import imagetravel from '../pictures/new1.png'
import imagehonasa from '../pictures/imagehonasa.png'


export default class News extends Component {
    
  articles=[
    
    {
    imageUrl:imageport,
    linkpro:"Read More",
  },

    {
    imageUrl:imageairtel,
    linkpro:"https://deepakmona.github.io/A-rtel_clone/",
  },

    {
    imageUrl:imagetravel,
    linkpro:"Read More",
  },

    {
    imageUrl:imagehonasa,
    linkpro:"https://deepakmona.github.io/H_clone/",
  }
  
]

    constructor(){
        super();
        console.log("Hello ,this is constructor from news compoent ");

        this.state ={
        articles:this.articles,
		loading:false
        }
 
    } 

  // componenetDidMount jab run hoga jab render method run hoke complete ho jayega so..  this way to fetch data daily means data rom api live....

  render(){
    console.log('This is render method');
    return (
      <div className="container">
        <div className="row">
          <div className="col md-2">
          {this.state.articles.map((article,index)=>{
            return <Card key={index} tittle={article.tittle} description={article.description} imageUrl={article.imageUrl} url={article.linkpro}/>
          })}
          </div>
        </div>
      </div>
    )
  }
}