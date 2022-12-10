import React from 'react';
import './TopicList.css';
import Topics from './Topics';

export default function TopicList({ topics, onScroll }) {
  return (
    <div className='topics-container' onScroll={onScroll}>
        {topics.map((topic) => {
            return <Topics key={topic.id} topic={topic} />
        })}
    </div>
  )
}
