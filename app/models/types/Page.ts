export type Page = {
  Title: string,
  Year: string,
  Rated: string,
  Released: string,
  imdbID: string,
  Poster: string
}

export type PageExt = {
  Runtime: string,
  Genre: string,
  Director: string,
  Writer: string,
  Actors: string,
  Plot: string,
  Language: string,
  Country: string,
  Awards: string,
  Ratings: [
    {
      Source: string; 
      Value: string;
    },
  ],
  Metascore: string,
  imdbRating: string,
  imdbVotes: string,
  Type: string,
}