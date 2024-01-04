"use client"
import Image from 'next/image'
import Header from '@/components/header'
import About from '@/components/about'
import Skills from '@/components/skill'
import Features from '@/components/features'
import BestWork from '@/components/bestWork'
import ClientList from '@/components/clientList'
import Testimonials from '@/components/testimonials'
import Form from '@/components/form'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main >
      <Header/>
      <div className="my-20 mx-auto max-w-screen-2xl">
        <About/>
      </div>
      <hr className=' border-black' />
      <div className="my-20 mx-auto max-w-screen-2xl">
        <Skills/>
      </div>
      <hr className=' border-black' />
      <div className="my-20 mx-auto max-w-screen-2xl">
        <Features/>
      </div>
      <hr className=' border-black' />

      <div className="my-20 mx-auto max-w-screen-2xl">
        <BestWork/>
      </div>
      <hr className=' border-black' />

      <div className="my-20 mx-auto max-w-screen-2xl">
        <ClientList/>
      </div>
      <hr className=' border-black' />

      <div className="my-20 mx-auto max-w-screen-2xl">
        <Testimonials/>
      </div>
      <hr className=' border-black' />

      <div className="my-20 mx-auto max-w-screen-2xl">
        <Form/>
      </div>
      <hr className=' border-black' />

      <div className="my-5 mx-auto max-w-screen-2xl">
        <Footer/>
      </div>

    </main>
  )
}
