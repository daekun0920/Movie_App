import React, { Component } from 'react';
import './App.css';
import Movie from "./movie";

const moviesTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
];
const movieImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaK69WZeDesLn9jY1hf_u30Fha-L4CqYu3Ebvwf0f4bqCQUbThhA",
  "https://i.pinimg.com/originals/56/bd/4f/56bd4f5a31ec7ed89b45feb34bc15ccd.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81mhcR03dIL._SY445_.jpg"
];

const movies = [
  {
    title : "Matrix",
    poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaK69WZeDesLn9jY1hf_u30Fha-L4CqYu3Ebvwf0f4bqCQUbThhA"
  },
  {
    title : "Full Metal Jacket",
    poster : "https://i.pinimg.com/originals/56/bd/4f/56bd4f5a31ec7ed89b45feb34bc15ccd.jpg"
  },
  {
    title : "Oldboy",
    poster : "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title : "Star Wars",
    poster : "https://images-na.ssl-images-amazon.com/images/I/81mhcR03dIL._SY445_.jpg"
  }
]
class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
