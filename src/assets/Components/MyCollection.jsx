import { useState } from 'react';
import ItemList from './ItemList';

function MyCollection({ filteredArray }) {
  return (
    <div className="collectiondiv">
      <ItemList memorabilia={filteredArray} />
    </div>
  );
}
export default MyCollection;
