import React, { Component } from 'react';
import axios from 'axios';
import "../App.css";


export class Photos extends Component {

    state={
        photos:[],
        
    }

    componentDidMount(){
       
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${this.props.albumId}`)
        .then(res=>
            {this.setState({photos:res.data});
            //console.log(this.state.photos);
        })
        
      }

  render() {

    return this.state.photos.map((photo)=>(
        <div className="column">
        <div key={photo.id} >
        <img src={photo.url} alt="" style={imgStyle}/>
        <p>{photo.title}</p> 
        <p>id: {photo.id}</p>
        </div>
        </div>
    ));
   
   
  }
}

const imgStyle={
    width:"10%"
};

export default Photos;
