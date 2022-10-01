import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AboutMe from '../components/AboutMe'

export default function Home() {
  return (
    <div>
      <AboutMe></AboutMe>
    </div>
  )
}
