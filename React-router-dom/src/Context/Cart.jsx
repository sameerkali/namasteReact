import { createContext, useState } from "react";

export const cartContext = createContext(null);

export const cartProvider = (props) => {
const [items, setItems] = useState([])
    return (
        <>
            <cartContext.Provider value={{items, setItems}}>
                {props.children}
            </cartContext.Provider>
        </>
    )
}
