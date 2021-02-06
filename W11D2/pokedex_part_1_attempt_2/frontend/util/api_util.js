//upon successful completion we will call an action 
export const fetchAllPokemon = ()=>{

  return (
    $.ajax({
      method: "GET",
      url: "/api/pokemon"
    })
  );
}


window.fetchAllPokemon = fetchAllPokemon;