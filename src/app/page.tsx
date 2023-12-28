import Image from 'next/image'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar></Navbar>
      <div className='container mx-auto'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='w-100 flex-col justify-center items-centre '>
            <Image
              src="/static/images/doctor-2027768_640.webp"
              alt="Doctor logo"
              className="dark:invert"
              width={400}
              height={296}
              priority
            />
            </div>
        </div>
      </div>
    </main>
  )
}
