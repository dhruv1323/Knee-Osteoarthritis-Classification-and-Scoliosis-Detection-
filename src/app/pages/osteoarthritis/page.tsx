import Image from "next/image"
export default function Home(){
    return(
        <div className="relative h-screen">
            <div className="container w-full px-4 md:max-w-2xl md:absolute md:p-16 md:ml-16 z-10">
                <div className="bg-white min-h-20 md:min-w-96 md:min-h-64 md:shadow-lg rounded">
                    <h1 className="font-bold text-2xl mb-0 md:text-4xl pl-3 pt-3">Osteoarthritis Research</h1>
                    <h1 className="font-bold text-2xl md:text-4xl md:mb-5 pl-3">Center</h1>
                    <h1 className="text-xl md:text-2xl p-3 mb-1">Tools, resources, and support for living well with osteoarthritis</h1>
                </div>
            </div>
        <Image
          alt="Doctor with Xray"
          src='/images/Osteoarthritis.webp'
          quality={100}
          height={480}
          width={1600}
          sizes="100vw"
          style={{
            objectFit: 'cover',
            // height: 'calc(100vh - 96px)',
            width: '100vw',
          }}
          className="mb-6 min-h-48"
        />
        <div className="flex flex-col mt-8 md:flex md:flex-row justify-center items-center gap-2 md:gap-8 md:p-8 ">
            <h1 className="text-lg font-medium text-blue-600 hover:bg-sky-200">Overview</h1>
            <h1 className="text-lg font-medium text-blue-600 hover:bg-sky-200">Symptoms</h1>
            <h1 className="text-lg font-medium text-blue-600 hover:bg-sky-200">Causes</h1>
            <h1 className="text-lg font-medium text-blue-600 hover:bg-sky-200">Treatment</h1>
            <h1 className="text-lg font-medium text-blue-600 hover:bg-sky-200">Prevention</h1>
            <h1 className="text-lg font-medium text-blue-600 hover:bg-sky-200">Complications</h1>
        </div>
      </div>
    )
}