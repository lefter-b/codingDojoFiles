import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Posts = () => {
    const [draftPosts,setDraftPosts] =useState ([])
    const [publishedPosts,setPublishedPosts] =useState ([])
    const [archivedPosts,setArchivedPosts] =useState ([])
    const [updated,setUpdated] = useState (false)
    useEffect (() => {
        axios.get('http://localhost:8000/api/posts/drafts')
        .then(res => {
            console.log(res.data)
            setDraftPosts(res.data.results)
        })
        axios.get('http://localhost:8000/api/posts/posted')
        .then(res => {
            console.log(res.data)
            setPublishedPosts(res.data.results)
        })
        axios.get('http://localhost:8000/api/posts/archived')
        .then(res => {
            console.log(res.data)
            setArchivedPosts(res.data.results)
        })
        setUpdated(false)

    },[updated])


    const publishPosts = (id) => {
        axios.patch ('http://localhost:8000/api/posts/${id}/posted')
        .then (res =>{
            setUpdated(true)
        })
    
     

    }
    return (
        <div>
            <div>
                <h1>All Posts</h1>
                <Link to={'/post/new'}>Create a new post</Link>
            </div>
            <div>
                <h2>Drafts</h2>
                <ul>
                    {draftPosts.map((post, i) => (
                        <div key={i}>
                        <li >{post.title}</li>
                        <button onClick={()=> publishPosts(post._id)}>Publish this post</button>
                        </div>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Posted</h2>
                <ul>
                    {publishedPosts.map((post, i) => (
                        <div key={i}>
                        <li>{post.title}</li>
                        <button onClick={()=> archivedPosts(post._id)}>Archive this post</button>
                        </div>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Archived</h2>
                <ul>
                    {archivedPosts.map((post, i) => (
                        <li key={i}>{post.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Posts;