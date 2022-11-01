import React from 'react'
import './Topics.css'
// import { Link } from "react-router-dom"

export default function Topics({ topic }) {
  return (
    <div className='topic-container'>
        {/* TODO: get topic tags from api */}
        <p>{topic.tag_name}</p>
    </div>
  )
}
