import React from 'react'
import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
    const params = useParams();
   
  return (
    <div>EventDetailPage with event id : {params.eventId}</div>
  )
}

export default EventDetailPage