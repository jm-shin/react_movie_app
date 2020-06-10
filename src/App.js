import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture,rating}){
  return(
    <div>
    <h1>I like {name}</h1>;
    <img src={picture} alt={name}/>
    </div>
  ); 
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://www.bgw.kr/wp-content/uploads/2019/12/%EC%88%98%EC%9E%85%EA%B9%80%EC%B9%98.png',
    rating: 5,
  },
  {
    id: 2,
    name: 'Bulgogi',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2015/04/18/c2aac4feb7c5fe07b8d118311cc8141a1.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/03/355b5cd5c3beb1a775c82ee425dcd1931.jpg',
    rating: 3.8,
  }
  
];

// function renderFood(dish){
//   return <Food name= {dish.name} image={dish.image}/>;
// }

// const renderFood = dish => <Food name={dish.name} image={dish.image}/>

function App() {
  return(
    <div>
      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} 
      rating={dish.rating}/>
      ))}
    </div>
  ); 
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
