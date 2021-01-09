// import logo from './logo.svg';
import './App.css';


import React, {Component} from 'react';

import CardList from './component/card-list/card-list.component';
import {SearchBox} from './component/search-box/search-box.component';

class App extends Component{

  constructor(){
    super();
    this.state = {
      artists: [],
      searchField: ''
    }
    
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data => this.setState({ artists: data}));
    
  }

  render(){
      const {artists, searchField} = this.state;
      const filteredArray = artists.filter(artist => 
        artist.name.toLowerCase().includes(searchField)
      );
  
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
         
          <SearchBox placeholder = "search monsters" handleChange = {(event) =>{
            this.setState({searchField: event.target.value})
          }}/>
        
       
        <CardList artists={filteredArray} />
       
       
        
        
         
      </div>
    )
  }

}

export default App;
