import React, {useContext} from 'react'
import './Topics.css'
import SearchContext from "../contexts/SearchContext";
import { useNavigate } from "react-router";

export default function Topics({ topic }) {
  const naviagte = useNavigate();
  let {setSearchString} = useContext(SearchContext)

  const handleTopicClick = () => {
    setSearchString(topic.tag_name)
    naviagte("/search")
  }

  return (
    <div className='topic-container'>
      <p onClick={() => handleTopicClick()}>{topic.tag_name}</p>
    </div>
  )
}
