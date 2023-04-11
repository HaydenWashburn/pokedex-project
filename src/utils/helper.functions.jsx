import { useState, useEffect } from "react";

export function useTypesAndWeaknesses(list) {
  const [values, setValues] = useState({});

  useEffect(() => {
    let result = list.reduce(
      (acc, pokemon) => {
        acc.types = acc.types.concat(pokemon.type);
        acc.weaknesses = acc.weaknesses.concat(pokemon.weaknesses);
        return acc;
      },
      { types: [], weaknesses: [] }
    );
    setValues({ types: ["", ...new Set(result.types)], weaknesses: ["", ...new Set(result.weaknesses)] })
  }, [list]);
  return values;

}

function compareMatch(referenceName, searchName){
let result = 0;
let tempName = referenceName.toLowerCase();
for (let char of searchName){
    if(tempName.toLowerCase().includes(char)){
        result += tempName.indexOf(char)==searchName.indexOf(char)? 1: 0.5;
        tempName=tempName.replace(char, " ")
    }
}return result;
}

// filterPokemon function using compareMatch

// sort method inside this filter function
