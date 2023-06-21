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
    <form onSubmit={submitPost} className=" w-full flex gap-3 items-center justify-center mb-10" >
<input className="text-black bg-[#F5EFE7] p-2 rounded-md w-96  border-2 h-10 border-[#884A39] outline-none "
onChange={(e) => setTitle(e.target.value)}
value={title}
type="text"
/>
<button  className=" bg-[#884A39] h-10 p-2 text-white rounded-md border-none" type="submit">Make a new post </button>
    </form>
)
}