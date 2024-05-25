import Image from "next/image"
export default function Home(){
    return(
        <div className="relative w-full">
            <div className="container w-full px-4 md:max-w-2xl md:absolute md:p-16 md:ml-16 z-10">
                <div className="bg-white min-h-20  md:border-t-4 md:border-r-4 md:min-w-96 md:min-h-64 md:shadow-2xl rounded">
                    <h1 className="font-bold text-2xl mb-0 md:py-1 md:pt-9 md:pl-10 md:text-4xl pl-3 pt-3">Scoliosis</h1>
                    <h1 className="font-bold text-2xl md:text-4xl md:mb-3 md:pl-10 pl-3">Research Center</h1>
                    <h1 className="text-xl md:text-2xl md:pl-10 p-3 mb-1">Tools, resources, and support for living well with Scoliosis</h1>
                </div>
            </div>
            <div className="">
              <Image
                alt="Doctor with Xray"
                src='/images/Osteoarthritis.webp'
                quality={100}
                height={100}
                width={100}
                sizes="100vw"
                style={{
                  objectFit:"cover",
                  objectPosition: '100% 10%', 
                  height: 'auto',
                  width: '100vw',
                }}
                className="border-b-0 border-slate-300 shadow-md mb-6 min-h-52"
              />
            </div>
            <div className="flex flex-col mt-4 md:flex md:flex-row justify-center items-center gap-2 md:gap-8 md:p-8 ">
            <h1 className="text-lg font-medium text-blue-600 hover:underline underline-offset-4 decoration-black-500"><a href="https://www.webmd.com/back-pain/video/video-scoliosis-overview">Overview</a></h1>
            <h1 className="text-lg font-medium text-blue-600 hover:underline underline-offset-4 decoration-black-500"><a href="https://www.webmd.com/back-pain/do-i-have-scioliosis">Symptoms</a></h1>
            <h1 className="text-lg font-medium text-blue-600 hover:underline underline-offset-4 decoration-black-500"><a href="https://www.webmd.com/back-pain/causes-scoliosis">Causes</a></h1>
            <h1 className="text-lg font-medium text-blue-600 hover:underline underline-offset-4 decoration-black-500"><a href="https://www.webmd.com/back-pain/treatment-for-scoliosis">Treatment</a></h1>
            <h1 className="text-lg font-medium text-blue-600 hover:underline underline-offset-4 decoration-black-500"><a href="https://www.webmd.com/back-pain/best-exercises-scoliosis">Prevention</a></h1>
            <h1 className="text-lg font-medium text-blue-600 hover:underline underline-offset-4 decoration-black-500"><a href="https://www.webmd.com/back-pain/types-of-spine-curvature-disorders">Complications</a></h1>
        </div>
      </div>
    )
}