import React, { Component } from 'react';

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            pokeData: []
        }
    }

    componentDidMount(){
        fetch(this.props.url)
          .then(response => response.json())
          .then((pokeData) => 
              this.setState({pokeData: pokeData})
        )
    }
 


    render(){
        const {pokeData} = this.state;
        const {name, id} = this.state.pokeData;

     return (
        <div className="tc bg-washed-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <div>
                <img src ={`${pokeData.sprites ? pokeData.sprites.front_default : ""}`} alt = {`The pokemon ${name}`}/>
                <p> id: {id}</p>
                <h3>{name}</h3>
                <h5>type 1: {pokeData.types ? pokeData.types[0].type.name : ""}</h5>
                <h5>type 2: {pokeData.types && pokeData.types[1] ? pokeData.types[1].type.name : "N/A"}</h5>
            </div>
        </div>
     )
    }
}


export default Card;