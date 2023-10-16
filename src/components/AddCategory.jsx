import { useState } from "react"



export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');
  
  const onInputChange=(event)=>{
    
    setInputValue(event.target.value);
    
    
  }

  const onSubmit=(event)=>{
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    // setCategories((categories)=>[ inputValue, ...categories])//acá hay un callback que tiene un parametro que representa el estado anterior de categories, el estado anterior era categories en el archivo GifExpertApp
    //con el callback de arriba puedes recuperar el estado anterior y asi puedes crear un nuevo estado
    onNewCategory(inputValue.trim());
    setInputValue('');
  }
  

  return (

    <form onSubmit={onSubmit} >
      <input type="text" placeholder="Buscar gif" value={inputValue} onChange={onInputChange}/>
    </form>
    
  )
}
