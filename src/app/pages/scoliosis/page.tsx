import Image from "next/image"
export default function Home(){
    return(
        <div className="relative h-screen">
            <div className="container w-36 md:max-w-2xl absolute md:p-16 md:ml-16 z-10">
                <div className="bg-white p-6 min-h-36 md:min-w-96 md:min-h-64 shadow-lg rounded">
                    <h1 className="font-bold text-4xl pl-3 pt-3">Scoliosis</h1>
                    <h1 className="font-bold text-4xl mb-5 pl-3">Research Center</h1>
                    <h1 className="text-2xl p-3">Tools, resources, and support for living well with Scoliosis</h1>
                </div>
            </div>
        <Image
          alt="Doctor with Xray"
          src='/images/Condition_Hero_Grouping_Osteoarthritis.webp'
          quality={100}
          height={480}
          width={1600}
          sizes="100vw"
          style={{
            objectFit: 'cover',
            height: 'auto',
            width: '100vw',
          }}
          className="mb-6"
        />
        <div className="flex justify-center items-center gap-8 p-8 ">
            <h1 className="text-lg text-sky-500 hover:bg-sky-200">Overview</h1>
            <h1 className="text-lg text-sky-500 hover:bg-sky-200">Symptoms</h1>
            <h1 className="text-lg text-sky-500 hover:bg-sky-200">Causes</h1>
            <h1 className="text-lg text-sky-500 hover:bg-sky-200">Treatment</h1>
            <h1 className="text-lg text-sky-500 hover:bg-sky-200">Prevention</h1>
            <h1 className="text-lg text-sky-500 hover:bg-sky-200">Complications</h1>
        </div>
      </div>
    )
}