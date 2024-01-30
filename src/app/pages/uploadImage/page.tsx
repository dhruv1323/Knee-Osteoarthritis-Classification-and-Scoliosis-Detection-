"use client"

import { useRef, useState, useEffect} from "react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Image from "next/image";

export default function UploadImagePage(){

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const name = searchParams.get('name')


    useEffect(() => {
        const url = `${pathname}?${searchParams}`
        console.log(url)
      }, [pathname, searchParams])

    const [dragActive, setDragActive] = useState<boolean>(false);
    const inputRef = useRef<any>(null);
    const [files, setFile] = useState<any>([]);


    function handleDragEnter(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }

    function handleDrop(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          setFile(e.dataTransfer.files[0]);
        }
    }

    function handleDragLeave(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    }

    function handleDragOver(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }

    function handleChange(e: any) {
        e.preventDefault();
        console.log("File has been added");
        if (e.target.files && e.target.files[0]) {
          console.log(e.target.files[0]);
          setFile(e.target.files[0]);
        }
    }

    function openFileExplorer() {
        inputRef.current.value = "";
        inputRef.current.click();
    }


    return(
            <div className="flex flex-col justify-center">
                <div>
                    <h1 className="mt-20 mb-12 text-2xl text-center ">Drag and Drop or Upload X-ray Image here</h1>
                </div>
                <div className="flex justify-center items-center">
                    <div
                        onDragEnter={handleDragEnter}
                        onSubmit={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                    >
                        <input
                            placeholder="fileInput"
                            className="hidden"
                            ref={inputRef}
                            type="file"
                            // multiple={true}
                            onChange={handleChange}
                            accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                        />
                        <div className="relative w-[350px] h-[323px] border-dashed border-slate-300 border-2 rounded-md mb-8 overflow-hidden">
                            <div className="inset-0">
                                <Image
                                    src="/images/picture_7.png"
                                    fill
                                    alt="Drop Image here"
                                    className={`absolute w-full h-full z-10 object-cover ${dragActive ? "opacity-40" : "opacity-20"}`}
                                />
                            </div>
                            <div className="z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <button className={`bg-sky-600 text-white px-8 py-2 rounded-md hover:bg-sky-700 transform duration-300 ${dragActive ? "opacity-100" : "opacity-80"}`} onClick={openFileExplorer} type='button'>Upload X-Ray</button>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="flex justify-center gap-8">
                        <div>
                            <button className={`bg-stone-50 rounded-md border-dashed border-slate-400 border-2 text-black px-4 py-1 hover:text-sky-700 hover:border-sky-700 hover:bg-slate-100 transform duration-300 ${(name==="scoliosis")?"text-sky-700 border-sky-700 bg-slate-100":" border-slate-400 border-2 text-black px-4"}`} type='button'>Scoliosis</button>
                        </div>
                        <div>
                            <button className={`bg-stone-50 rounded-md border-dashed border-slate-400 border-2 text-black px-4 py-1 hover:text-sky-700 hover:border-sky-700 hover:bg-slate-100 transform duration-300 ${(name==="osteoarthritis")?"text-sky-700 border-sky-700 bg-slate-100":" border-slate-400 border-2 text-black px-4"}`} type='button'>Osteoarthritis</button>
                        </div>
                        <div>
                            <button className='bg-stone-50 rounded-md border-dashed border-slate-400 border-2 text-black px-4 py-1 hover:text-sky-700 hover:border-sky-700 hover:bg-slate-100 transform duration-300' type='button'>Open ended</button>
                        </div>
                    </div>

            </div>
    )
}