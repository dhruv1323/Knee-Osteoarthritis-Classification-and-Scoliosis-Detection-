import Image from 'next/image'
 
export default function Background() {
  return (
      <div className="relative h-screen">
        <Image
          alt="Doctor with Xray"
          src='/images/bg.jpg'
          quality={100}
          height={1300}
          width={1600}
          sizes="100vw"
          style={{
            objectFit: 'cover',
            height: 'calc(100vh - 96px)',
            width: '100vw',
          }}
        />
      </div>
  )
}