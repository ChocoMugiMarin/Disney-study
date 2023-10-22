import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/Header'
import Navibar from '@/components/Navibar'
import Main01 from '@/components/main/Main01'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <div>
      <Header></Header>
      <Navibar></Navibar>
      <Main01></Main01>
      <Footer></Footer>
    </div>
  )
}
