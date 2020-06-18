import React from 'react';
import axios from 'axios';

class App extends React.Component{
  state = {
    isLoding: true,
    movies: [],
  };
  getMovies = async () => {
    const movies = await axios.get('https://yts.mx/api/v2/list_movies.json');
  }
  componentDidMount(){
    this.getMovies();
  }

  render(){
    const { isLoding } = this.state;
    return <div>{isLoding? 'Loding...': 'We are ready'}</div>;
  }
}

export default App;