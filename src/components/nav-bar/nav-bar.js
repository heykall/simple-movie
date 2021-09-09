import React from 'react'
import styles from './styles.scoped.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={styles.topnav}>
      <div className="topnav">
        <Link to="/">
          <div className='explore'>Home</div>  
          </Link>
        <Link to="/movie/list">
          <div className='explore'>Movie-List</div>  
          </Link>
        <Link to="/movie/my-list">
        <div className='explore'>My Movie List</div>  
        </Link>
      </div>
    </div>
  )
}

export default Navbar