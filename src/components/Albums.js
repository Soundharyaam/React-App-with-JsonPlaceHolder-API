import React, { Component } from 'react';
import axios from 'axios';
import Photos from './Photos';
import HorizontalScroll from 'react-scroll-horizontal';


export class Albums extends Component {

    state={
        albums:[]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(res=>
            {this.setState({albums:res.data});
            console.log(this.state.albums);
            /*console.log(this.state.albums[0].id);
            console.log(this.state.albums[0].title);
            console.log(this.state.albums[0].userId);*/
        })
      }

  render() {

    return this.state.albums.map((album)=>(
        <>
        <div key={album.id}>
        <h3 className="text-left">{album.title}</h3>
        <p className="text-left">id :{album.id}, userId: {album.userId}</p>
        <hr/>
        <div className="row">
        
        <Photos albumId={album.id}/>
        
        </div>
        </div>
        </>
    ));
    
  }
}

export default Albums;
