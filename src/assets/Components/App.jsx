/* eslint-disable react/jsx-no-bind */
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// pages
import './App.css';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Home from './Home.jsx';
import ItemForm from './ItemForm.jsx';
// layout
import Layout from './Layout';

function App() {
  const [memorabilia, setMemorabilia] = useState([]);
  const [filterMemorabilia, setFilterMemorabilia] = useState('');
  useEffect(() => {
    fetch('http://localhost:3000/memorabilia')
      .then((res) => res.json())
      .then((data) => setMemorabilia(data));
    console.log(memorabilia);
  }, []);
  function addMemorabilia(newItem) {
    setMemorabilia([...memorabilia, newItem]);
  }
  function searchMemorabilia(search) {
    setFilterMemorabilia(search);
  }
  const displayMemorabilia = memorabilia.filter((item) =>
    item.Name.toLowerCase().includes(filterMemorabilia.toLowerCase())
  );
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Layout onSearchMemorabilia={searchMemorabilia} />}
      >
        <Route index element={<Home memorabilia={displayMemorabilia} />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="additem"
          element={<ItemForm onAddMemorabilia={addMemorabilia} />}
        />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
