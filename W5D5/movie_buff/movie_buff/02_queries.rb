def eighties_b_movies
  # List all the movies from 1980-1989 with scores falling between
  # 3 and 5 (inclusive).
  # Show the id, title, year, and score.

  # SELECT movies.id, movies.title, movies.yr, movies.score
  # FROM movies
  # WHERE movies.yr BETWEEN 1980 AND 1989 AND movies.score BETWEEN 3 AND 5

  Movie
    .select(:id, :title, :yr, :score)
    .where(yr: 1980..1989, score: 3..5)

end

def bad_years
  # List the years in which a movie with a rating above 8 was not released.

  # SELECT movies.yr
  # FROM movies
  # GROUP BY movies.yr
  # HAVING MAX(movies.score) <= 8

  Movie
    .select(:yr)
    .group(:yr)
    .having('MAX(movies.score) <= 8')
    .pluck(:yr)
end

def cast_list(title)
  # List all the actors for a particular movie, given the title.
  # Sort the results by starring order (ord). Show the actor id and name.

  # SELECT actors.id, actors.name
  # FROM actors
  # JOIN castings ON castings.actor_id = actors.id
  # JOIN movies ON movies.id = castings.movie_id
  # WHERE movies.title = 'Star Wars'
  # ORDER BY castings.ord ASC

  Actor
    .select(:id, :name)
    .joins(:movies)
    .where('movies.title LIKE ?', title)
    .order('castings.ord ASC')
end

def vanity_projects
  # List the title of all movies in which the director also appeared
  # as the starring actor.
  # Show the movie id and title and director's name.

  # Note: Directors appear in the 'actors' table.

  # SELECT movies.id, movies.title, actors.name
  # FROM movies
  # JOIN castings ON movies.id = castings.movie_id
  # JOIN actors ON castings.actor_id = actors.id
  # WHERE actors.id = movies.director_id AND castings.ord = 1

  # SELECT movies.id, movies.title, actors.name
  # FROM actors
  # JOIN castings ON actors.id = castings.actor_id
  # JOIN movies ON castings.movie_id = movies.id
  # WHERE actors.id = movies.director_id AND castings.ord = 1

  Movie
    .select(:id, :title, 'actors.name')
    .joins(:actors)
    .where('castings.ord = 1 AND actors.id = director_id')

end

def most_supportive
  # Find the two actors with the largest number of non-starring roles.
  # Show each actor's id, name and number of supporting roles.

  # SELECT actors.id, actors.name, COUNT(castings.ord) as roles
  # FROM actors
  # JOIN castings ON actors.id = castings.actor_id
  # JOIN movies ON castings.movie_id = movies.id
  # WHERE castings.ord != 1
  # GROUP BY actors.id
  # ORDER BY roles DESC
  # LIMIT 2

#  SELECT actors.id, actors.name, COUNT(actors.id) as roles
#   FROM actors
#   JOIN castings ON actors.id = castings.actor_id
#   WHERE castings.ord != 1
#   GROUP BY actors.id
#   ORDER BY roles DESC
#   LIMIT 2


  Actor
    .select(:id, :name, 'COUNT(castings.actor_id) as roles')
    .joins(:castings)
    .where.not(castings: {ord: 1})
    .group('actors.id')
    .order('roles DESC')
    .limit(2)


end
