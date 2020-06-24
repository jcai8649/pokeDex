import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import ErrorBoundry from '../components/ErrorBoundry'
import SearchBox from '../components/SearchBox'
import './App.css';
import 'tachyons';



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
       pokemons: [],
       searchfield: ''
    }
  }
    componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10000')
      .then(response => response.json())
      .then((allpokemon) => 
          this.setState({pokemons: allpokemon.results})
      )
  }


  
  render(){
    return (!this.state.pokemons.length)?
    <h1>Loading...</h1>:
     (
      <div>
        <h1 className='tc'>PokéDex</h1>
        <ErrorBoundry>
          <Cardlist pokemons={this.state.pokemons}/>
        </ErrorBoundry>
      </div>
    )
  }


}

export default App;
