import Image from "next/image"

export default function UploadImagePage(){
    return(
            <div className="flex flex-col justify-center">
                <div>
                    <h1 className="mt-20 mb-12 text-2xl text-center ">Drag and Drop or Upload X-ray Image here</h1>
                </div>
                <div className="flex justify-center items-center">
                    <div className="relative w-[350px] h-[323px] border-dashed border-slate-500 border-2 rounded-md mb-8 overflow-hidden">
                        <div className="inset-0">
                            <img
                                src="/images/picture_7.png"
                                alt="Drop Image here"
                                className="absolute w-full h-full z-10 object-cover opacity-20"
                            />
                        </div>
                        <div className="z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <button className='bg-sky-600 text-white px-8 py-2 rounded-md hover:bg-sky-700 transform duration-300' type='button'>Upload X-Ray</button>
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