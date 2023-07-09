import React, { useEffect, useState } from 'react';
import { Button,  Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function MoveDetails() {
  const params = useParams();
  const [movie, setMovie] = useState({});
  


  // get movie by id
  const getMovieById = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}?language=ar`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjI1Njg1MTRjMTUzOTdkOTFhMjMwMjVmMTAxODE1MSIsInN1YiI6IjY0YTViMjE0YTBiZTI4MDEyZWVmZDRkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PvG6gxDTuOf5pJKAfy7BddWaJBAqG581Fp0UhYGBQGw',
            accept: 'application/json',
          },
        }
      );
      setMovie(res.data);
    
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getMovieById();
    
  }, [params.id]); // Include params.id as a dependency to re-fetch the movie when the ID changes
  

  return (
    <div>
      <Row>
        <div className="total-content">
          <Col md={6}>
            <div className="image content">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="img"
              />
            </div>
          </Col>
          <Col md={6} sm={12} className="content ">
            <div className="details">
              <p style={{ margin: '10px' }}>اسم الفيلم: {movie.title}</p>
              <p style={{ margin: '10px' }}>تاريخ الفيلم: {movie.release_date}</p>
              <p style={{ margin: '10px' }}>عدد المقيمين: {movie.vote_count}</p>
              <p style={{ margin: '10px' }}>التقييم: {movie.vote_average}</p>
            </div>
          </Col>
        </div>
      </Row>
      <Row>
        <Col md={12} sm={12} className="content">
          <div className="text">
            <h3 className="text-title">القصة:</h3>
            <span className="line-title"></span>
            <p>{movie.overview}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} sm={12}>
          <div className="buttons content">
            <Link to="/">
              <Button variant="success mx-2">عودة للرئيسية</Button>
            </Link>
            <a href={movie.homepage} target="_blank">
              <Button>مشاهدة الفيلم</Button>
            </a>
         
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MoveDetails;
