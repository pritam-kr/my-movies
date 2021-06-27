import { useState } from "react";
import "./styles.css";

var moviesListDB = {
  comdey: [
    {
      movieImg:
        "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX140_CR0,0,140,209_AL_.jpg",
      movieName: "Deadpool",
      movieDes:
        "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
      movieRate: "8/10"
    },
    {
      movieImg:
        "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_UY209_CR0,0,140,209_AL_.jpg",
      movieName: "The Intouchables ",
      movieDes:
        "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
      movieRate: "8.5/10"
    },
    {
      movieImg:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX140_CR0,0,140,209_AL_.jpg",
      movieName: " Back to the Future ",
      movieDes:
        "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
      movieRate: "8.5/10"
    },
    {
      movieImg:
        "https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX140_CR0,0,140,209_AL_.jpg",
      movieName: "Amélie ",
      movieDes:
        "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
      movieRate: "8.3/10"
    }
  ],
  action: [
    {
      movieImg:
        "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg",
      movieName: "The Terminator",
      movieDes:
        "A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity's future salvation.",
      movieRate: "8/10"
    },
    {
      movieImg:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX140_CR0,0,140,209_AL_.jpg",
      movieName: "The matrix",
      movieDes:
        "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      movieRate: "8.7/10"
    },
    {
      movieImg:
        "https://m.media-amazon.com/images/M/MV5BMjA5NzgyMjc2Nl5BMl5BanBnXkFtZTcwOTU3MDI3MQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
      movieName: "Hellboy II: The Golden Army",
      movieDes:
        "A prince of the mythical world starts a rebellion against humanity in order to rule the Earth, and Hellboy his team must fight to stop him from locating the all-powerful Golden Army.",
      movieRate: "7/10"
    }
  ],
  horror: [
    {
      movieImg:
        "https://m.media-amazon.com/images/M/MV5BOWM4NTY2NTMtZDZlZS00NTgyLWEzZDMtODE3ZGI1MzI3ZmU5XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_UY209_CR3,0,140,209_AL_.jpg",
      movieName: "Let the Right One In",
      movieDes:
        "Oskar, an overlooked and bullied boy, finds love and revenge through Eli, a beautiful but peculiar girl.",
      movieRate: "7.9/10"
    },
    {
      movieImg:
        "https://m.media-amazon.com/images/M/MV5BMTAxNDA1ODc5MDleQTJeQWpwZ15BbWU4MDg2MDA4OTEx._V1_UX140_CR0,0,140,209_AL_.jpg",
      movieName: "The birds",
      movieDes:
        "A wealthy San Francisco socialite pursues a potential boyfriend to a small Northern California town that slowly takes a turn for the bizarre when birds of all kinds suddenly begin to attack people.",
      movieRate: "7.7/10"
    },
    {
      movieImg:
        "https://m.media-amazon.com/images/M/MV5BNDA2NTg2NjE4Ml5BMl5BanBnXkFtZTYwMjYxMDg5._V1_UY209_CR0,0,140,209_AL_.jpg",
      movieName: "The ring",
      movieDes:
        "A journalist must investigate a mysterious videotape which seems to cause the death of anyone one week to the day after they view it.",
      movieRate: "7.1/10"
    }
  ]
};

var moviesList = Object.keys(moviesListDB);

export default function App() {
  const [myMovies, setMyMoies] = useState("action");

  function showMovieHandler(genre) {
    setMyMoies(genre);
  }

  return (
    <>
      <div className="container">
        <div className="movie-container">
          <h1 className="heading">Movies list</h1>
          <p className="subheading">My favorite, you can also watch... </p>

          <div className="btn-container">
            {moviesList.map((genre) => (
              <button
                className="btn-movie"
                onClick={() => showMovieHandler(genre)}
              >
                {genre}
              </button>
            ))}
          </div>

          <div className="show-movie-container">
            {moviesListDB[myMovies].map((el) => (
              <div className="movie-box">
                <img src={el.movieImg} alt="" />
                <div className="content">
                  <h4 className="movie-name">
                    {el.movieName} <span className="rate">{el.movieRate}</span>
                  </h4>
                  <p className="movie-des">{el.movieDes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
