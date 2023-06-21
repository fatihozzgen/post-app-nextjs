"use client"

import React, {useState} from "react"
import { useRouter } from "next/navigation"


export default function FormPost() {
    const [title, setTitle] = useState("")
    const router = useRouter()

    
    async function submitPost(e: React.FormEvent) {
        e.preventDefault()
        const data = await fetch(`/api/createPost`, {
            method: 'POST',
            body: JSON.stringify({title}),
        }).finally(() => setTitle(''))
        const res = await data.json()
        router.refresh()
        if (!res.ok) console.log(res.message)
    }

return (
    <form onSubmit={submitPost}>
<input className="text-black  border border-black"
onChange={(e) => setTitle(e.target.value)}
value={title}
type="text"
/>
<button  className=" border border-black" type="submit">Make a new post </button>
    </form>
)
}