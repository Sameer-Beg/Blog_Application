import { createContext } from "react";
import { blogData } from "../assets/assets";


export const StoreContext = createContext(null)
const  StoreContextProvider = ({children})=>{
    const contextvalue = {blogData}
    return (
        <StoreContext.Provider value={contextvalue}>
            {children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider