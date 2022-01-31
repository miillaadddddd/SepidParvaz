import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/ui/Button/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="h-screen  flex justify-center items-center">
      <Button title="Confirm"/>
      <Button title="Reject" type="reject"/>

      <footer>
        <div className="fixed bottom-[-50px] left-0 right-0">
          <Image
            src="/wave.svg"
            layout='responsive'
            alt="logo"
            width={4}
            height={1}
          />
        </div>
      </footer>
    </div>
  )
}
