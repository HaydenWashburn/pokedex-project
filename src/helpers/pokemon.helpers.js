export function filterPokemon(list, pokemon) {
  if (pokemon) return list.filter((name) => name.pokemon === pokemon);
  else return list;
}

export function getListOf(list, prop) {
    return list.reduce((uniqueValue, item) => {
      if (uniqueValue.indexOf(item[prop]) === -1) {
        uniqueValue.push(item[prop]);
      }
      return uniqueValue;
    }, []);
  }