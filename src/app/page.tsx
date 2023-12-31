import Background from './components/Background'
import Navbar from './components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
   <main>
    <div className='relative '>
        <div className='absolute top-0 z-10'>
          <Navbar></Navbar>
        </div>
        <div>
          <Background></Background>
          <div className='container mx-auto px-8'>
            <div className='flex flex-wrap -ml-3 -mr-3'>
              <div className='text-4xl '>
              <h1>Early Detection of Scoliosis& Knee OA through ML</h1>
              </div>
            </div>
          </div>
        </div>
    </div>
   </main>
  )
}
