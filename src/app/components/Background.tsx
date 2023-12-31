import Image from 'next/image'
 
export default function Background() {
  return (
    <div className="relative h-screen top-20">
    <Image
      alt="Doctor with Xray"
      src='/images/bg_1.jpg'
      quality={100}
      height={1300}
      width={1600}
    //   fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
    </div>
  )
}