import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({category}) => {

  const {images, isLoading}= useFetchGifs(category);
  

  
  

  return (
    <>
    
      <h3>{category}</h3>
      {/* {
        isLoading
        ? (<h2>Cargando...</h2>)
        : null
      } esto es equivalente al codigo de abajo*/}
      {
        isLoading && (<h2>Cargando...</h2>)
      }

      <div className='card-grid'>
        {
          images.map(image=>(
            <GifItem 
            key={image.id}
            // title={image.title} //para mandar todas las imagenes como prop al componente
            // url={image.url}
            {...image}//le mando todas las props
            />
            
            
          ))
        }
        
      </div>
    </>
  )
}
