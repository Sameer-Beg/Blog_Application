import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { blogData } from "../assets/assets";


export const StoreContext = createContext(null)



const  StoreContextProvider = ({children})=>{
    const [user , setuser] = useState(null)
    const [blogData , setblogData] = useState([])


    useEffect(()=>{
        const storeduser = localStorage.getItem("user")
        if(storeduser){
            setuser(JSON.parse(storeduser))
        }
    },[])

    useEffect(()=>{
        const allblogs = async()=>{
            try{
                const res = await axios.get("https://blog-backend-448e.onrender.com/blogs/all")
                if(res.data.success){
                    setblogData(res.data.blogs)
                }
            }catch(error){
                console.log("error in all blogs api" , error)

            }
        }
        allblogs();
    },[])

    const loginuser = (user , token)=>{
        setuser(user)
        localStorage.setItem("user" , JSON.stringify(user))
        localStorage.setItem("token" , token)
    }

    const Logoutuser = ()=>{
        setuser(null)
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }

    const contextvalue = {blogData , user , loginuser , Logoutuser}
    return (
        <StoreContext.Provider value={contextvalue}>
            {children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider