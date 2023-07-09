import React from 'react';
import CardMovie from './CardMovie';
import {  Row } from 'react-bootstrap';
import PaginationComponent from './PaginationComponent';

function MoviesList({ movies, getPage, pageCount}) {
  return (
    <Row className='mt-3'>
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return (

              
                <CardMovie key={movie.id} movie={movie} />
                
              
          );
        })
      ) : <h2 className='text-center'>لا يوجد افلام للعرض الوقت الحالى ....</h2>}
      { movies.length >=1 ? (
          <PaginationComponent getPage={getPage} pageCount={pageCount} />
      ) 
       :  null
    }
    
    </Row>
  );
}

export default MoviesList;
