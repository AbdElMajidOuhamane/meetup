import { useContext, useState } from "react"
import { useAuthContext } from "./useAuthContext";
import { AuthContext } from "../context/AuthContext";



export const useChangePic=()=>{
    const[error,setError]=useState(null);
    const [isLoading,setIsLoading]=useState(null);
    const { user } = useContext(AuthContext);
    const {dispatch}=useAuthContext()
    const updatepic = async (file) => {
      setIsLoading(true);
      setError(null);
    
      const formData = new FormData();
      formData.append("file", file);
    
      try {
        const response = await fetch("/api/users/updatepic", {
          method: "PUT",
          headers: { Authorization: `Bearer ${user.accessToken}` },
          body: formData,
        });
    
        if (!response.ok) {
          throw new Error("Failed to update profile picture");
        }
    
        const json = await response.json();
        dispatch({ type: "PICPROFILE", payload: json });
        setIsLoading(false);
      } catch (error) {
        console.error("Error updating profile picture:", error);
        setError("Error updating profile picture");
        setIsLoading(false);
      }
    };
    
    return {updatepic,isLoading,error}
}