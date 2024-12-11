import React from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/users", element: <Users /> }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
