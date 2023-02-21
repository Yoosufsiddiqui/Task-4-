import React from 'react';
import { useState, useEffect } from 'react'
import Movies from './components/Movies';
import SearchBar from './components/SearchBar';
import movieData from './utils/movies';


function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [maxLength, setMaxLength] = useState('');
  const[isAscending, setIsAscending] = useState(true);

  useEffect(() => {
  

    setMovies(movieData.filter((movie) => {
      return (movie.title.toUpperCase().includes(search.toUpperCase()) &&
         ([NaN,0].includes(parseInt(maxLength,10)) || parseInt(maxLength,10) >= movie.length)
      );
     }).sort((a,b) =>  {
      if (isAscending) {
        return a.length - b.length;
      } else {
        return b.length -  a.length;
      }
     })
    );
  

    

  }, [search, maxLength, isAscending]);

  

//   useEffect (() => {

//     setMovies(movieData.filter( movie => {
//       if (isAscending) {
//        return setMovies(movies.sort((a, b) => a.length - b.length));
//       } else {
//         return setMovies(movies.sort((a, b) => b.length - a.length));
//       }
//     }));
// }, [isAscending]);


  return (
    <>
    
      {/* Header Bar for Searching */}
      <SearchBar 
        search={search} 
        setSearch={setSearch} 
        maxLength={maxLength} 
        setMaxLength={setMaxLength}
        isAscending={isAscending}
        setIsAscending={setIsAscending}
      />
      {/* Output the Movies */}
      <Movies movies={movies} />
    </>
  )
}

export default App