import Image from "next/image"

export default function UploadImagePage(){
    return(
            <div className="flex flex-col justify-center">
                <div>
                    <h1 className="mt-20 mb-12 text-2xl text-center ">Drag and Drop or Upload X-ray Image here</h1>
                </div>
                <div className="flex justify-center items-center">
                    <div className="relative min-w-96 min-h-96 border-dashed border-zinc-600 border-4 rounded-md mb-8">
                        <div className="inset-0">
                            <Image
                                src="/images/picture_7.png"
                                layout="fill"
                                objectFit="cover"
                                alt="Drop Image here"
                                className="z-10 object-contain opacity-30"
                            />
                        </div>
                        <div className="absolute z-20 top-72 inset-x-24">
                            <button className='bg-sky-600 text-white px-8 py-2 rounded-full hover:bg-sky-700 transform duration-300' type='button'>Upload X-Ray</button>
                        </div>
                    </div>    
                </div>
                <div className="flex justify-center gap-8">
                        <div>
                            <button className='bg-stone-50 rounded-md border-dashed border-slate-400 border-2 text-black px-4 py-1 hover:bg-sky-200 transform duration-300' type='button'>Scoliosis</button>
                        </div>
                        <div>
                            <button className='bg-stone-50 rounded-md border-dashed border-slate-400 border-2 text-black px-4 py-1 hover:bg-sky-200 transform duration-300' type='button'>Osteoarthritis</button> 
                        </div>
                        <div>
                            <button className='bg-stone-50 rounded-md border-dashed border-slate-400 border-2 text-black px-4 py-1 hover:bg-sky-200 transform duration-300' type='button'>Open ended</button>
                        </div>
                    </div>
            </div>
    )
}