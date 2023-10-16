import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
 
    const [categories, setCategories] = useState(['One Punch'])//Para modificar el DOM

    const onAddCategory=(newCategory)=>{
        if(categories.includes(newCategory)) return;
        // const addText=document.querySelector('ol');
        // addText.innerHTML=['Valorant'];
        // console.log(addText)
        // setCategories([...categories, addText])
        setCategories([newCategory,...categories])//hace una copia de todas las categorias existentes y al final agrego valorant
        
    }
  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
        />

        {/* <button onClick={onAddCategory}>Agregar</button> */}

        
        {
            categories.map(category=>(
                    <GifGrid 
                    key={category}
                    category={category} />
                ))
        }

           
           
        
    </>
  )
}
