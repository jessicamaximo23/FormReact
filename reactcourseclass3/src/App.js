import React, { useState } from 'react';
import './App.css';
import BookForm from './component/BookForm';
import Recommendations from './component/Recommendation';
import './component/style.css';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  const addRecommendation = (recommendation) => {
    setRecommendations([...recommendations, recommendation]);
  };

  const removeRecommendation =(index) =>{
    const updatedRecommendations = [...recommendations];
    updatedRecommendations.splice(index,1);
    setRecommendations(updatedRecommendations);

  };

  return (
    <div className="App">
      <h1>Book Recommendations</h1>

      <BookForm addRecommendation={addRecommendation} />
      <Recommendations recommendations={recommendations} removeRecommendation={removeRecommendation} />
         
    </div>
  );
}

export default App;

