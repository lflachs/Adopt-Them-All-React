import React from 'react';
import logo from './logo.svg';
import Card from './components/Card';
import "./css/card.css"
import './App.css';

var animals = [
  { name: "John", species: "dog", img: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg', age: 3 },
  { name: "Caro", species: "rabbit", img: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Oryctolagus_cuniculus_Rcdo.jpg', age: 6 },
  { name: "Paul", species: "poney", img: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Shetland_pony_-_Postbridge.jpg', age: 8 },
  { name: "Harold", species: "cat", img: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png', age: 10 },
  { name: "Jimmy", species: "dog", img: 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg', age: 12 }
]

function App() {
  return (
    <div className="app">
      <h1>Adopt a pet</h1>
      {animals.map((element) => <Card title={element.name} image={element.img} />)}
    </div>
  );
}

export default App;
