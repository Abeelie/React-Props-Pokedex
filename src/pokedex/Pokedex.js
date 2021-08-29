import React from 'react';
import Pokemon from '../pokemon/pokemon';
import Pokecard from '../pokecard/Pokecard';
import 'bootstrap/dist/css/bootstrap.css';
import './Pokedex.css';


const Pokedex = () => {
    const BASE_URL = `
     https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon
`;

    return (
        <div className="container">
          <h1 className="fw-bold text-center">Pokedex</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {Pokemon.map(pokemon => 
                    <div className="col" key={pokemon.id}>
                        <Pokecard img={`${BASE_URL}/${pokemon.id}.png`}
                                  name={pokemon.name}
                                  type={pokemon.type}
                                  exp={pokemon.base_experience}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}


export default Pokedex