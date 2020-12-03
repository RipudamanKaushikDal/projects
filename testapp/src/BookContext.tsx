import React, {createContext} from 'react';


type ContextProps = {
    showForm:boolean ;
    setShowForm: (value:any) => void;
}

const BookContext = createContext({} as ContextProps);

export default BookContext
