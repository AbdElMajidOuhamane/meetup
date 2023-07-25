import { useContext } from "react"
import { PostsContext } from "../context/PostContext"



export const usePostsContext=()=>{
    const context=useContext(PostsContext)

    return context
}