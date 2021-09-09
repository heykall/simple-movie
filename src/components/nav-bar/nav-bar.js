import React from 'react'
import styles from './styles.scoped.css';

const Navbar = () => {
  return (
    <div className={styles.topnav}>
      <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  )
}

export default Navbar