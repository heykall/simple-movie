import React from 'react'
import styles from './styles.scoped.css';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={styles.center}>
      <div className="center">
        <div className="button-container">
          <Link to="/movie/list">
          <h1 className='explore'>Explore Movies</h1>  
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home