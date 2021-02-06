#json.key_format! camelize: :lower
json.pokemon do 
  json.set! @poke.id do
    json.extract! @poke, :id, :name, :attack, :defense, :poke_type
    json.image_url "pokemon_snaps/#{@poke.image_url}"
  end
end 

json.moves do 
  @moves.each do |move|
    json.set! move.id do
      json.extract! move, :id, :name
    end
  end
end

json.items do 
  @items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :pokemon_id, :name, :price, :happiness
      json.image_url "assets/#{item.image_url}"
    end
  end
end
