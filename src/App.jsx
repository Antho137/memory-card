import { useEffect, useState } from 'react';
import Character from './components/Character.jsx';
import Scoreboard from './components/Scoreboard.jsx';
import './App.css'

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [clickedImages, setClickedImages] = useState([]);

  const shufflecards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const randomCards = () => {
    shufflecards(characters);
    const selected = characters.slice(0, 6);
    setClickedImages(selected);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('https://rickandmortyapi.com/api/character');
        const { results } = await data.json();
        setCharacters(results);
      } catch (error) {
        console.error ('error fetching data:', error);
      }
    };
    fetchData(); 
  }, []);

  useEffect(() => {
    if (characters.length > 0) {
      randomCards();
    }
  }, [characters]); 
  
  const imagesClicked = (id) => {
    if (!clickedImages.includes(id)) {
      alert('Already picked!');
      setScore(0);
      setClickedImages([]);
    } else {
      setClickedImages([...clickedImages, id]);
      setScore((prevScore) => prevScore + 1);
      if (score > highScore) {
        setHighScore(score);
      }
    }
    shufflecards();
  };

  return (
    <div className="App">
      <Scoreboard score={score} highScore={highScore} />
      <div className="character">
        {characters.map((character) => (
          <Character
            key={character.id}
            name={character.name}
            origin={character.origin}
            image={character.image}
            onClick={() => imagesClicked(character.id)}
          />
        ))}               
      </div>
    </div>
  )
}

export default App
