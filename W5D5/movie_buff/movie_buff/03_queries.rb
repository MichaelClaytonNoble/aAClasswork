def what_was_that_one_with(those_actors)
  # Find the movies starring all `those_actors` (an array of actor names).
  # Show each movie's title and id.

  # SELECT movies.title, movies.id
  # FROM movies
  # JOIN castings ON castings.movie_id = movies.id
  # JOIN actors ON castings.actor_id = actors.id
  # WHERE actors.name IN ('Ben Affleck', 'Matt Damon')
  # GROUP BY movies.id
  # HAVING COUNT(actors.id) >= 2

  Movie
    .select(:title, :id)
    .joins(:actors)
    .where(actors: { name: those_actors })
    .group(:id)
    .having('COUNT(actors.id) >= ?', those_actors.length)

end

def golden_age
  # Find the decade with the highest average movie score.

  # SELECT DISTINCT (movies.yr / 10) * 10 as decade, AVG(movies.score) as decade_score
  # FROM movies
  # GROUP BY decade
  # ORDER BY decade_score DESC
  # LIMIT 1

  Movie
    .select('(movies.yr/10) * 10 as decade, AVG(movies.score) as decade_score')
    .group('decade')
    .order('decade_score DESC')
    .limit(1)
    .first
    .decade

end

def costars(name)
  # List the names of the actors that the named actor has ever
  # appeared with.
  # Hint: use a subquery

  movie_list = Actor
  .select('castings.movie_id')
  .joins(:castings)
  .where(name: name)
  .pluck('castings.movie_id')
  Actor
    .select(:name).distinct
    .joins(:castings)
    .where(castings: {movie_id: movie_list})
    .where.not(name: name)
    .pluck(:name)
    .uniq

  # SELECT actors.name
  # FROM actors
  # JOIN castings ON actors.id = castings.actor_id
  # WHERE castings.movie_id IN (
  #   SELECT castings.movie_id
  #   FROM actors
  #   JOIN castings ON actors.id = castings.actor_id
  #   WHERE actors.name LIKE 'Julie Andrews'
  # ) AND actors.name != 'Julie Andrews'

  # SELECT actors.name
  # FROM actors
  # JOIN castings ON actors.id = castings.actor_id
  # JOIN movies ON movies.id = castings.movie_id
  # WHERE movies.title IN (
  #   SELECT movies.title
  #   FROM actors
  #   JOIN castings ON actors.id = castings.actor_id
  #   JOIN movies ON movies.id = castings.movie_id 
  #   WHERE actors.name LIKE 'Julie Andrews'
  # ) AND actors.name != 'Julie Andrews'



end

def actor_out_of_work
  # Find the number of actors in the database who have not appeared in a movie
  
  # SELECT COUNT(*)
  # FROM castings
  # RIGHT JOIN actors ON actors.id = castings.actor_id
  # WHERE castings.actor_id IS NULL 

  Actor
    .select(:name)
    .joins('LEFT OUTER JOIN castings on castings.actor_id = actors.id')
    .where(castings: { movie_id: nil })
    .count

    
end

def starring(whazzername)
  # Find the movies with an actor who had a name like `whazzername`.
  # A name is like whazzername if the actor's name contains all of the
  # letters in whazzername, ignoring case, in order.

  # ex. "Sylvester Stallone" is like "sylvester" and "lester stone" but
  # not like "stallone sylvester" or "zylvester ztallone"

end

def longest_career
  # Find the 3 actors who had the longest careers
  # (the greatest time between first and last movie).
  # Order by actor names. Show each actor's id, name, and the length of
  # their career.

end
