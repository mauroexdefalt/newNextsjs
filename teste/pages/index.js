import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {




  const [pos, setPos] = useState(0)

  const imgs = ['https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051__340.jpg',
    'https://cdn.pixabay.com/photo/2013/12/11/03/13/puzzle-226743__340.jpg',
    "https://ichi.pro/assets/images/max/724/1*Hva7hcsFWulFUPhrEWui1A.jpeg"

  ]
  useEffect(()=>{

    setPos(1)
  

  },[])


  console.log('pos atual',pos)



  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="teste nextjs" />
        <meta property="og:image" content={imgs[pos]} />
      </Head>



      <button onClick={() => {
        setPos(pos + 1)
        console.log(pos  , imgs[pos])

      }} >next</button>

      
<button onClick={() => {
        setPos(pos - 1)
        console.log(pos , imgs[pos])

      }} >back</button>


      <Image src="/assets/fox.jpg" alt="Vercel Logo" width={300} height={300} />




    </div>
  )
}
