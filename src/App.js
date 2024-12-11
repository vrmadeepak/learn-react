import React from "react";
import { createBrowserRouter, RouterProvider, Link, useParams } from "react-router-dom";
import { CHAPTERS } from "./data";



const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/:chapterSlug", element: <Chapter /> },
  { path: "/users", element: <Users /> }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Home() {

  return (
    <div>
      <h2 className="text-2xl">Home</h2>
      <span>
        {CHAPTERS.map((chapter, index) => (
          <div key={chapter.id}>
            
            <p>
              <Link to={chapter.slug}>
                Chapter {chapter.id}: {chapter.title}
              </Link>
              &nbsp; <span className="text-xs">{chapter.title.toLowerCase().replaceAll(' ', '-')}</span>
            </p> 
            
            <ul className="list-disc">
              {chapter.topics && chapter.topics.map((topic, idx) => (
                <li key={idx} className="ml-8">{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </span>
    </div>
  );
}

function Chapter() {
  const { chapterSlug } = useParams()
  const chapter = CHAPTERS.find((ch) => ch.slug === chapterSlug);

  if (!chapter) {
    return <h2>Chapter not found!</h2>;
  }
  return (
    <div>
      <h2 className="text-2xl">{chapter.title}</h2>
    </div>
  )
}

function Users() {
  return <h2>Users</h2>;
}
