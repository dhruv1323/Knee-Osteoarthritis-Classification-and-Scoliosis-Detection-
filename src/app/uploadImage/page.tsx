import Image from "next/image"

export default function UploadImagePage(){
    return(
            <div className="flex flex-col justify-center">
                <div>
                    <h1 className="mt-20 mb-12 text-2xl text-center ">Drag and Drop or Upload X-ray Image here</h1>
                </div>
                <div className="flex justify-center items-center">
                    <div className="relative min-w-96 min-h-96 border-dashed border-zinc-600 border-4 rounded-md ">
                        <div className="inset-0">
                            <Image
                                src="/images/picture_7.png"
                                layout="fill"
                                objectFit="cover"
                                alt="Drop Image here"
                                className="z-10 object-contain"
                            />
                        </div>
                        <div className="absolute z-20">
                            <button className='bg-sky-600 text-white px-8 py-2 rounded-full hover:bg-sky-700 transform duration-300' type='button'>Upload X-Ray</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}