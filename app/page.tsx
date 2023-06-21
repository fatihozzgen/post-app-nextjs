import Image from 'next/image'
import Link from 'next/link'
import FormPost from './Form'
import axios from 'axios'

async function getPosts() {
  const res = await axios.get(`${process.env.BASE_URL}/api/getPosts`)
  
  return res.data
}

export default async function Home() {
  const data : { id: number; title: string} [] = await getPosts()
  console.log(data);
  
  return (
    <main className="flex justify-center pt-12 flex-col items-center ">
      
      <FormPost/>

    {data.map(post => (
      <h1 key={post.id} className='text-lg '>{post.title}</h1>
    ))}
    </main>
  )
}
