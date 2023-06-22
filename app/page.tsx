import FormPost from './Form'

async function getPosts() {
  const baseURL = "https://post-app-nextjs-omega.vercel.app"; 
  const res = await fetch(`${baseURL}/api/getPosts`, {
    method: "GET",
    cache: "no-cache"
  });
  return res.json()
}

export default async function Home() {
  const data : { id: number; title: string} [] = await getPosts()
  console.log(data);
  
  return (
    <main className="flex justify-center pt-12 flex-col items-center ">
      
      <FormPost/>

    {data.map(post => (
      <h1 key={post.id} className='text-lg border-b border-b-3 border-[#884A39] w-1/2 text-left p-3'>{post.title}</h1>
    ))}
    </main>
  )
}
