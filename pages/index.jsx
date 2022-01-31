import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/ui/Button/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="h-screen  flex justify-center items-center bg-gray-100">

      <div className="h-2/3 w-1/2 bg-white rounded-3xl shadow-lg z-10 ">

      <div className="flex justify-center items-end">
        <Button title="Confirm"/>
        <Button title="Reject" type="reject"/>
      </div>

      </div>

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
