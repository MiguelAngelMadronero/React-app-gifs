import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


describe('Pruebas en el hook <useFetchGifs/>', () => { 

  test('Debe de regresar el estado inicial', () => { 

    const {result} = renderHook(()=> useFetchGifs('One Punch'));//el result es el resultado del hook
    const {images, isLoading}= result.current;

    expect(images.length).toBe(0);
    expect( isLoading).toBeTruthy();

   });

  test('Debe de retornar un arreglo de imagenes y el isLoading en false', async() => { 
    const {result} = renderHook(()=> useFetchGifs('One Punch'));//el result es el resultado del hook

    await waitFor(
      () => expect( result.current.images.length).toBeGreaterThan(0)
    );// esta instrucción quiere decir que esperes hasta que el resultado sea mayor a 0

    const {images, isLoading}= result.current;

    expect(images.length).toBeGreaterThan(0);
    expect( isLoading).toBeFalsy();

   })

})