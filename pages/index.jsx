import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/ui/Button/Button'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="h-screen bg-cyan-500 flex justify-center items-center">
      <Button title="Confirm"/>
      <Button title="Reject" type="reject"/>
    </div>
  )
}