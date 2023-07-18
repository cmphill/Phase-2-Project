import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

function ItemForm({ onAddMemorabilia }) {
  const [yearError, setYearError] = useState('');
  let timeoutId;
  function handleSubmit(event) {
    event.preventDefault();
    const formElement = event.target;
    const memorabiliaData = {
      id: uuidv4(),
      Name: formElement.name.value,
      img_url: formElement.image.value,
      Circa: parseInt(formElement.year.value, 10),
      'Add to Collection': false,
    };
    fetch('http://localhost:3000/memorabilia', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(memorabiliaData),
    })
      .then((res) => res.json())
      .then((data) => onAddMemorabilia(data))
      .then(formElement.reset());
  }
  function handleYearChange(event) {
    const year = event.target.value;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      if (!/^\d{4}$/.test(year) && !''.test(year)) {
        toast.error('Please provide a valid 4-digit year');
      } else {
        setYearError('');
      }
    }, 1000);
  }

  return (
    <div className="addformcontainer">
      <Toaster toastOptions={{ duration: 1500 }} />
      <form className="addform" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter Name" />
        <input type="text" name="image" placeholder="Paste Image Link" />
        <input
          type="number"
          name="year"
          pattern="^\d{4}$"
          placeholder="Enter Year"
          onChange={handleYearChange}
          maxLength="4"
        />
        <textarea
          id="desc"
          type="text"
          name="description"
          placeholder="Enter Description"
        />
        <input type="submit" value="Add to Collection" />
        {yearError && <p className="error">{yearError}</p>}
      </form>
    </div>
  );
}
export default ItemForm;
