'use client'
import { useRouter } from 'next/navigation'
// import About from './about/page'
import Link from 'next/link'
import { Roboto } from 'next/font/google'

 const roboto = Roboto({subsets : ['latin'] ,weight : '500'})


const Home = () => {
  // const router = useRouter()

  //  const navigate = (page) =>{
  //   router.push(page)
  //  }


  return (
   <section>
   <h1>Google Fonts</h1>
   <h2 className={roboto.className}>Hello this is roboto font </h2>
    <h1>HOME</h1>

   {/* expanation of different types of Routinhg  */}

    {/* One Way of Routing */}
    {/* <button  className="border px-2 py-2 bg-purple-800" onClick={() => router.push('about')}>Go to About Page </button> */}
     {/* Another way of ROUTING */}
    {/* <button  className="border px-2 py-2 bg-purple-800" onClick={() => navigate('about')}>Go to About Page </button><br/>
     <button  className="border px-2 py-2 bg-purple-800" onClick={() => navigate('login')}>Go to Login Page </button><br/>
     <Link className=" bg-yellow-600 border-neutral-950" href='/projects'>Projects</Link> */}




      

   </section>
  )
}

export default Home
