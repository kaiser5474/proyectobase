import { useState, createContext } from "react";

const LetrasContext = createContext();

const LetrasProvider = () => {


    return (
        <LetrasContext.Provider
            value={{}}        
        >
            {/* {children} */}
        </LetrasContext.Provider>
    )
}

export{
    LetrasProvider
}

export default LetrasContext;