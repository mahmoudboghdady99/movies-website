import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MoveDetails from "./components/MoveDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // get all movies
  const getAllMovies = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?language=ar",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjI1Njg1MTRjMTUzOTdkOTFhMjMwMjVmMTAxODE1MSIsInN1YiI6IjY0YTViMjE0YTBiZTI4MDEyZWVmZDRkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PvG6gxDTuOf5pJKAfy7BddWaJBAqG581Fp0UhYGBQGw",
            accept: "application/json",
          },
        }
      );
      setMovies(res.data.results);
   
      setPageCount(res.data.total_pages)
    } catch (error) {
      console.error(error);
    }
  };
  // get current page
  const getPage = async (page) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?language=ar&page=${page}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjI1Njg1MTRjMTUzOTdkOTFhMjMwMjVmMTAxODE1MSIsInN1YiI6IjY0YTViMjE0YTBiZTI4MDEyZWVmZDRkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PvG6gxDTuOf5pJKAfy7BddWaJBAqG581Fp0UhYGBQGw",
            accept: "application/json",
          },
        }
      );
      setMovies(res.data.results);
     
    } catch (error) {
      console.error(error);
    }
  };
  // search Filter [ search in Api ]
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=ff2568514c15397d91a23025f1018151&query=${word}&language=ar`
        );
        setMovies(res.data.results);
        console.log(res.data.total_pages);
        setPageCount(res.data.total_pages)
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="font color-body">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
        <Routes>
          <Route  path="/" element={<MoviesList movies={movies} getPage={getPage}  pageCount={pageCount} />} />
          <Route  path="/movie/:id" element={<MoveDetails />} />
        </Routes>
        </BrowserRouter>
        
      </Container>
    </div>
  );
}

export default App;
