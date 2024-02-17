import React from 'react';
import './App.css';
import Card from './card'




function App() {

  return (
    <div className='App'>
      <Card 
      title='Card Title'
      imagUrl='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/094b67b3c431bc09ef7dc5cc0bd30500d90630bea97f1534b4822fb8a47ea082._RI_V_TTW_.jpg'
      body='La série de films Harry Potter  est une série américano-britannique fantastique de huit films, produite par Warner Bros. Pictures et adaptée des sept romans éponymes de la romancière J. K. Rowling. Commencée en 2001, elle s’achève en 2011 avec la sortie du dernier opus, scindé en deux parties.'
      />

    </div>
  )
}
export default App