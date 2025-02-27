"use client"
import { useEffect, useState } from "react";

export default function Post({params}){
    const id = params.id;
    const [post,setPost] = useState(null);
    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL+'/post/'+id)
        .then(res =>  res.json())
        .then(res =>  setPost(res))
    },[])
    


    return(
        <>
            {post && <main classNameName="container mx-auto px-4 py-6">
                <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
                <p className="text-gray-500">{post.date_create}</p>
                <img width={300} height={200} src={post.image} alt="Post Image" className="my-4" />
                <p className="whitespace-pre-wrap"
                       >{post.description}</p>
            </main>
            }
        </>
    )
}