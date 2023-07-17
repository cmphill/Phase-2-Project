import {createBrowserRouter, Route, NavLink, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React, {useEffect, useState} from "react";
//pages
import './App.css'
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Home from "./Home.jsx";
import ItemForm from "./ItemForm.jsx"
import ItemCard from "./ItemCard.jsx"
import ItemList from "./ItemList.jsx";
//layout
import Layout from './Layout';



function App() {
  const [memorabilia, setMemorabilia] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/memorabilia')
    .then(res => res.json())
    .then (data => setMemorabilia(data))
    console.log(memorabilia)
  }, [])
  
  const router = createBrowserRouter (
    createRoutesFromElements (
      <Route path="/" element={<Layout/>}>
            <Route index element={<Home memorabilia={memorabilia} />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="additem" element={<ItemForm />} />
      </Route>
    )
  )
  return (
   <div>
    
   <RouterProvider router ={router} />
   </div>
  )
}

export default App
