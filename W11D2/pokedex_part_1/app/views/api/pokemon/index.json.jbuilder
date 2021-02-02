#{
#  1: {
#    id: 1,
#    name: /*...*/,
#    image_url: /*...*/
#  },
#  2: {
#    id: 2,
#    name: /*...*/,
#    image_url: /*...*/
#  },
#  //..
#}


json.array! @pokemons do |pokemon|
  json.set! :id, pokemon.id do 
    json.extract! pokemon, :id, :name
    json.image_url asset_path("pokemon_snaps/#{poke.image_url}")
  end
end