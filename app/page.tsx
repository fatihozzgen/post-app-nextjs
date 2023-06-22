import FormPost from './Form'

async function getPosts() {
  const baseURL = "https://post-app-nextjs-pi.vercel.app"; 
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
<h1>deneme</h1>
    
    </main>
  )
}
