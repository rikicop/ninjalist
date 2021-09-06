import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title> Ninja List | Home </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut magni aliquid pariatur praesentium aperiam voluptatibus iste illo dolor, at quibusdam, doloremque iusto consequatur officia repellat modi nostrum provident, assumenda architecto!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod quis voluptatem possimus! Libero, voluptatem. Tenetur esse recusandae dolorum suscipit earum blanditiis? Impedit laudantium repudiandae consequuntur, adipisci numquam quo quidem.</p>  
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
