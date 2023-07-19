import { useState } from 'react';

function MyCollection({ newCollectionItem }) {
  const [collection, setCollection] = useState([]);
  return (
    <div>
      <p>Here is Your Collection </p>
    </div>
  );
}
export default MyCollection;
