import React from 'react';

function Food({name, image}){
  return(
    <div>
    <h1>I like {name}</h1>;
    <img src={image} alt={name}/>
    </div>
  ); 
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://www.bgw.kr/wp-content/uploads/2019/12/%EC%88%98%EC%9E%85%EA%B9%80%EC%B9%98.png',
  },
  {
    id: 2,
    name: 'Bulgogi',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2015/04/18/c2aac4feb7c5fe07b8d118311cc8141a1.jpg',
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/03/355b5cd5c3beb1a775c82ee425dcd1931.jpg',
  }
  
];

// function renderFood(dish){
//   return <Food name= {dish.name} image={dish.image}/>;
// }

// const renderFood = dish => <Food name={dish.name} image={dish.image}/>

function App() {
  return(
    <div>
      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} image={dish.image}/>
      ))}
    </div>
  ); 
}

export default App;
