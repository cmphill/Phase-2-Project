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
import About from './MyCollection.jsx';
import Home from './Home.jsx';
import ItemForm from './ItemForm.jsx';
import ItemDetails from './ItemDetails.jsx';
// layout
import Layout from './Layout';
import MyCollection from './MyCollection.jsx';

function App() {
  const [memorabilia, setMemorabilia] = useState([]);
  const [filterMemorabilia, setFilterMemorabilia] = useState('');
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/memorabilia')
      .then((res) => res.json())
      .then((data) => setMemorabilia(data));
  }, []);
  function addMemorabilia(newItem) {
    setMemorabilia([...memorabilia, newItem]);
  }
  function searchMemorabilia(search) {
    setFilterMemorabilia(search);
  }
  function addToCollection(item) {
    setFilteredArray([...filteredArray, item]);
    patchCollection()
  }
  function patchCollection() {
    console.log("I was patched")
  }
  console.log(filteredArray);
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
        <Route
          path="collection"
          element={<MyCollection filteredArray={filteredArray} />}
        />
        <Route
          path="item/:id"
          element={
            <ItemDetails
              memorabilia={memorabilia}
              addToCollection={addToCollection}
            />
          }
        />
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
