import { useState } from 'react';

function AddCategory( {onNewCategory} ) {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue( target.value )
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1) return;

    //setCategories( categories =>  [inputValue, ...categories])
    setInputValue('');
    onNewCategory( inputValue.trim() );
    
    //setCategories([...categories, 'Valorant']);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>

  )
}

export default AddCategory

