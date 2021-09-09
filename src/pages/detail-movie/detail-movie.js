import React from 'react'
import { useLocation } from 'react-router-dom'

const DetailMovie = () => {
  const { detailMovie } = useLocation().state
  console.log(detailMovie)
  return (
    <div>
      <h1>{detailMovie?.Title || "Movie Not Found"}</h1>
    </div>
  )
}

export default DetailMovie