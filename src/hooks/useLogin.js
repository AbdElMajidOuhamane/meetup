import { useState } from "react"
import { useAuthContext } from "./useAuthContext";



export const useLogin=()=>{
    const[error,setError]=useState(null);
    const [isLoading,setIsLoading]=useState(null);

    const {dispatch}=useAuthContext()

    const login=async(email,password)=>{
        setIsLoading(true);
        setError(null);

        const res = await fetch("/api/users/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
          });
          
          if (!res.ok) {
            setIsLoading(false);
            const errorText = await res.text();
            setError(errorText);
            return;
          }
          
          try {
            const json = await res.json();
          
            localStorage.setItem("user", JSON.stringify(json));
            dispatch({ type: "LOGIN", payload: json });
            setIsLoading(false);
          } catch (error) {
            console.error("Error parsing JSON:", error);
            setError("Error parsing JSON response");
          }
          

    }
    return {login,isLoading,error}
}