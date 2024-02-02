import Image from "next/image"
export default function Home(){
    return(
        <div className="relative w-full">
            <div className="container w-full px-4 md:max-w-2xl md:absolute md:p-16 md:ml-16 z-10">
                <div className="bg-white min-h-20 md:min-w-96 md:min-h-64 md:shadow-lg rounded">
                    <h1 className="font-bold text-2xl mb-0 md:text-4xl pl-3 pt-3">Scoliosis Research </h1>
                    <h1 className="font-bold text-2xl md:text-4xl md:mb-5 pl-3">Center</h1>
                    <h1 className="text-xl md:text-2xl p-3 mb-1">Tools, resources, and support for living well with Scoliosis</h1>
                </div>
            </div>
            <div className="">
              <Image
                alt="Doctor with Xray"
                src='/images/Condition_Hero_Grouping_Osteoarthritis.webp'
                quality={100}
                height={100}
                width={100}
                sizes="100vw"
                style={{
                  objectFit:"cover",
                  objectPosition: '100% 10%', 
                  height: 'auto',
                  width: '100vh',
                }}
                className="mb-6 min-h-64"
              />
            </div>
          <div className="flex flex-col mt-8 md:flex md:flex-row justify-center items-center gap-2 md:gap-8 md:p-8 ">
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