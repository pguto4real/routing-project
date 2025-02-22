import React from "react";
const DUMMY_EVENT = [
  {
    id: "e1",
    title: "A dummy event",
    date: "2023-02-22",
    image:
      "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
    description: "Join this amazing event and connect with fellow developers.",
  },
];
const EventsPage = () => {
    console.log(DUMMY_EVENT)
  return (
    <>
      <ul>
        {DUMMY_EVENT.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
