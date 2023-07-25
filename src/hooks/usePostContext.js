import { useContext } from "react"
import { PostsContext } from "../context/PostContext"



export const usePostsContext=()=>{
    const context=useContext(PostsContext)

    if(!context){
        throw Error("Must be used inside");
    }

    return context
}