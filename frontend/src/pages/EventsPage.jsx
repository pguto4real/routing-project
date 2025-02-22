import React from "react";
import { Link } from "react-router-dom";
const DUMMY_EVENT = [
  {
    id: "e1",
    title: "A dummy event",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
  {
    id: "e2",
    title: "Another dummy event",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
];
const EventsPage = () => {
  console.log(DUMMY_EVENT);
  return (
    <>
    <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENT.map((event) => (
          <li key={event.id}>
            {" "}
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
