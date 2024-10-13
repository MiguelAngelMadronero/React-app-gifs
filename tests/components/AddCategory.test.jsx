import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Pruebas en <AddCategory/>', () => {  

    test('Debe de cambiar el valor de la caja de texto', () => { 

        render(<AddCategory onNewCategory={()=>{}}/>);
        const input= screen.getByRole('textbox');//el textbox es para encontrar el input
        fireEvent.input( input, {target: {value: 'Saitama'}} );//Aqui cambias el valor de la caja de texto

        expect(input.value).toBe('Saitama')
        
    })

    test('Debe de llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue='Saitama';
        const onNewCategory= jest.fn();//Para probar funciones
        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const input=screen.getByRole('textbox');
        const form= screen.getByRole('form');

        fireEvent.input( input, {target: {value: inputValue}} );//Cambiamos el valor de la caja de texto
        fireEvent.submit(form);
        expect(input.value).toBe('');
        
        expect( onNewCategory ).toHaveBeenCalled();//Para saber si fue llamado en la prueba y en el componente
        // expect( onNewCategory ).toHaveBeenCalledTimes(1);//hace la misma funcion que la linea de arriba
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue )//Evalua que haya sido llamado con el valor de la caja de texto que es inputValue (Saitama)



     });

    test('No debe de llamar el onNewCategory si el input está vacio ', () => { 
        
        const onNewCategory=jest.fn();
        
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const form= screen.getByRole('form');
        fireEvent.submit(form);
       
        

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        // expect( onNewCategory ).not.toHaveBeenCalled();//Esta linea de codigo hace lo mismo que la linea de arriba
     })
})

