
json.pokemon do
  json.set! pokemon.id do 
    json.extract! pokemon, :id, :name, :attack, :defense, :poke_type
    json.image_url asset_path("pokemon_snaps/#{poke.image_url}")
  end
end



#
#{
#  "pokemon": {
#            "1": {
#              "id": 1,
#              "name": "Bulbasaur",
#              "attack": 49,
#              "defense": 49,
#              "poke_type": "grass",
#              "image_url": "/pokemon_snaps/1.svg"
#            }
#          },
# "moves": {
#            "1": {
#              "id": 1,
#              "name": "tackle"
#              },
#            /*...*/
#            },
#
#  "items": {
#          "1": {
#            "id": 1,
#            "pokemon_id": 2419,
#            "name": "Sleek Marble Bench",
#            "price": 38,
#            "happiness": 43,
#            "image_url": "/assets/pokemon_potion.svg"
#          },
#          /*...*/
#
#    }
#}