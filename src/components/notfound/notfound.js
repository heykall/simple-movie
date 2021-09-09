import React from 'react'
import styles from './styles.scoped.css';
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className={styles.center}>
      <div className="center">
          <h1 className='explore'>404(Page Not Found)</h1>  
      </div>
    </div>
  )
}

export default NotFound