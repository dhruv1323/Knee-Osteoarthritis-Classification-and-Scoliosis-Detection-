import Background from './components/Background'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
        <div className='relative '>
          <div className='absolute p-6 md:p-12 z-10'>
              <h1 className='text-4xl mt-4 md:mt-0 mb-20 rounded bg-sky-200 max-w-80 leading-tight font-bold text-wrap'>Early Detection of Scoliosis& Knee OA through ML</h1>
              <div className='mb-20'>
                  <Link href="/pages/osteoarthritis#top">
                      <button className='bg-sky-600 text-white px-8 py-2 rounded-full hover:bg-sky-700 transform duration-300'>
                        Read more
                      </button>
                  </Link>
              </div>
              <div className='flex flex-col md:flex md:flex-row gap-8 bg-orange-50'>
                <div className='bg-white p-6 rounded max-w-80 shadow-md'>
                  <Image 
                    src='/images/icons8-scoliosis-1.png'
                    width={40}
                    height={40}
                    alt='Scoliosis'
                    className='mb-4'
                  />
                  <h3 className='text-2xl mb-4'>Scoliosis</h3>
                  <p className='text-wrap mb-4'>Scoliosis is a sideways curve of the spine, often resembling an &quot;S&quot; or &quot;C&quot; shape. It most commonly affects children and teens, and while the cause is often unknown, early detection and management can help prevent complications. </p>
                  <div>
                    <Link
                      href={{
                        pathname: '/pages/uploadImage',
                        query: { name: 'scoliosis' },
                      }}
                    >
                    <button className='bg-sky-600 rounded-full text-white px-4 py-1 hover:bg-sky-700 transform duration-300' type='button'>Upload image</button>
                    </Link>
                  </div>
                </div>
                <div>
                <div className='bg-white p-6 rounded max-w-80 shadow-md'>
                  <Image 
                    src='/images/icons8-knee-joint-50.png'
                    width={40}
                    height={40}
                    alt='Osteoarthritis'
                    className='mb-4'
                  />
                  <h3 className='text-2xl mb-4'>Osteoarthritis</h3>
                  <p className='text-wrap mb-4'>Knee osteoarthritis is a degenerative joint condition causing pain, stiffness, and swelling in the knee. It results from cartilage breakdown and can be managed through pain medications, lifestyle changes, physical therapy. </p>
                  <div>
                    <Link
                      href={{
                        pathname: '/pages/uploadImage',
                        query: { name: 'osteoarthritis' },
                      }}
                    >
                    <button className='bg-sky-600 rounded-full text-white px-4 py-1 hover:bg-sky-700 transform duration-300' type='button'>Upload image</button>
                    </Link>
                  </div>
                </div>
                </div>
                <div>
                <div className='bg-white p-6 rounded max-w-80 shadow-md'>
                  <Image 
                    src='/images/icons8-read-1.png'
                    width={40}
                    height={40}
                    alt='Read More Book'
                    className='mb-4'
                  />
                  <h3 className='text-2xl mb-4'>Read More</h3>
                  <p className='text-wrap mb-4'> Early Detection is the Key : The project aids doctors in precise early detection, integrating patient data for personalized interventions. Ongoing research focuses on targeted therapies and also  explores innovative treatments.</p>
                  <div>
                    <Link href="/pages/osteoarthritis#top">
                    <button className='bg-sky-600 rounded-full text-white px-4 py-1 hover:bg-sky-700 transform duration-300' type='button'>Read More</button>
                    </Link>                
                  </div>
                </div>
                </div>
              </div>
            </div>
          <Background />
        </div>
    </div>
  )
}
