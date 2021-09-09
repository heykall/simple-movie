import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './styles.scoped.css';
import { MovieListContext } from '../../pages/movie-list'

const CardList = () => {
  const movieList = useContext(MovieListContext)
  const history = useHistory()

  const goToDetail = (movie) => {
    history.push(`/movie/detail/${movie.imdbID}`, { detailMovie: movie })
  }

  return (
    <div className={styles.cards}>
      <ul className="cards">
        {movieList?.map((movie, index) =>
        <li key={index} className="cards_item">
          <div className="card">
            <div className="card_image"><img alt="pic" src={movie.Poster}/></div>
            <div className="card_content">
              <h2 className="card_title">{movie.Title}</h2>
              <p className="card_text">{movie.Years}</p>
              <p className="card_text">Type : {movie.Type}</p>
              <button onClick={()=> goToDetail(movie)} className="btn card_btn">Detail</button>
            </div>
          </div>
        </li>)}
      </ul>
    </div>
  )
}

export default CardList