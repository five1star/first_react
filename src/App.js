import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }){
return (
  <div>
    <h2>I Like {name}!</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'ramen',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Shoyu_Ramen.jpg/1200px-Shoyu_Ramen.jpg',
    rating: 5,
  },
  { 
    id: 2,
    name: 'kimbap',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg',
    rating: 4.3,
  },
];


function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}      
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number,
};

export default App;
