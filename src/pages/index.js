import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar'
import city from '../../public/images/city.jpg'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Página Principal</title>
      <meta name='keywords' content='Roupas, Calçados, Boné'/>
      <meta name='description' content='Encontre a melhor roupa pra você'/>
    </Head>
      <div className={styles.title}>
        <h1>Hello Next.js</h1>
      </div>
      <Image 
        src='/images/city.jpg'
        width='200' 
        height='300' 
        alt='Cidade a noite'/>
    </>
  )
}
