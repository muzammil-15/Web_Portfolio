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
      <div className="my-20 mx-10">
        <About/>
      </div>
      <hr className=' border-black' />
      <div className="my-20 mx-10">
        <Skills/>
      </div>
      <hr className=' border-black' />
      <div className="my-20 mx-10">
        <Features/>
      </div>
      <hr className=' border-black' />

      <div className="my-20 mx-10">
        <BestWork/>
      </div>
      <hr className=' border-black' />

      <div className="my-20 mx-10">
        <ClientList/>
      </div>
      <hr className=' border-black' />

      <div className="my-20 mx-10">
        <Testimonials/>
      </div>
      <hr className=' border-black' />

      <div className="my-20 mx-10">
        <Form/>
      </div>
      <hr className=' border-black' />

      <div className="my-20 mx-10">
        <Footer/>
      </div>

    </main>
  )
}
