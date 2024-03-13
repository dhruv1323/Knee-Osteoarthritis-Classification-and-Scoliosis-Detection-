"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";
import { motion, useAnimate } from "framer-motion";
// import { error } from "console";

const UploadImagePage = () => {
  // const router = useRouter();
  // const pathname = usePathname();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  // useEffect(() => {
  //     const url = `${pathname}?${searchParams}`
  //     console.log(url)
  //   }, [pathname, searchParams])

  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [file, setFile] = useState<any>("");
  const [predictedClass, setPredictedClass] = useState(null);

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
    console.log(file.name);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    console.log(formData.get("file"));

    fetch("http://localhost:5000/predict", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // console.log('Response text:', response.text());
        return response.json();
      })
      .then((data) => {
        const predictedClassId = data.class_id;
        console.log("Predicted class ID:", predictedClassId);

      // Map the class ID to a human-readable class name if needed
      // const predictedClassName = mapClassIdToName(predictedClassId);

      setPredictedClass(predictedClassId);
      })
      .catch((error) => {
        console.error("Error making prediction request: ", error);
      });
  }

  // function handleReport(e: any) {
  //   e.preventDefault();
  //   console.log("File has been added");
  //   if (e.target.files && e.target.files[0]) {
  //     console.log(e.target.files[0]);
  //     setFile(e.target.files[0]);
  //   }
  //   console.log(file.name);

  //   const formData = new FormData();
  //   formData.append("file", e.target.files[0]);

  //   console.log(formData.get("file"));

  //   fetch("http://localhost:5000/report", {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((response) => {
  //       // console.log('Response text:', response.text());
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("Predictions result", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error making prediction request: ", error);
  //     });
  // }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  const [scope, animate] = useAnimate();
  const handlePredict = async () => {
    animate("#target_1", { x: -160 });
    animate("#target_2", { x: 210 });
    animate("#tg_1", { opacity: 100 });
    animate("#tg_2", { opacity: 100 });
  };

  return (
    <>
      {!file ? (
        <div>
          <h1 className="md:mt-20 md:mb-12 md:text-2xl hidden md:block  md:text-center ">
            Drag and Drop or Upload X-ray Image here
          </h1>
          <h1 className="mt-20 mb-12 text-2xl text-center md:hidden ">
            Upload X-ray Image here
          </h1>
        </div>
      ) : (
        <h1 className="md:mt-10 md:mb-12 md:text-2xl hidden md:block md:text-center">
          Predict Result
        </h1>
      )}
      <div
        ref={scope}
        className="grid grid-cols-1 grid-rows-1 place-items-center justify-center"
      >
        {/* First Div */}
        <div
          id="target_1"
          onDragEnter={handleDragEnter}
          onSubmit={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          className="relative grid grid-flow-row row-start-1 col-start-1 w-[350px] h-[323px] border-dashed border-slate-300 border-2 rounded-md mb-8 overflow-hidden"
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
          <div className="absolute inset-0">
            {file ? (
              <Image
                src={URL.createObjectURL(file)}
                fill
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Drop Image here"
                className="absolute w-full h-full z-10 object-cover"
              />
            ) : (
              <Image
                src="/images/picture_7.png"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Drop Image here"
                className="absolute w-full h-full z-10 object-cover opacity-20"
              />
            )}
          </div>
          <div className="z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {file ? (
              ""
            ) : (
              <button
                className={`bg-sky-600 text-white px-8 py-2 rounded-md hover:bg-sky-700 transform duration-300 ${
                  dragActive ? "opacity-100" : "opacity-80"
                }`}
                onClick={openFileExplorer}
                type="button"
              >
                Upload X-Ray
              </button>
            )}
          </div>
        </div>
        {/* Second Div */}
        <div
          id="target_2"
          className="grid grid-flow-row border-2  w-[350px] h-[323px] z-0 mb-8 row-start-1 col-start-1"
        >
          <div id="tg_1" className="border-2 opacity-0 p-8 w-full h-40">
            <h1 className="mt-6 ml-14 ">Predicted class: {predictedClass}</h1>
            <h1 className="ml-16 ">Get well soon !!!</h1>
          </div>
          <div id="tg_2" className="opacity-0 border-2 p-10  h-40">
            <input
              placeholder="fileInput"
              className="hidden"
              ref={inputRef}
              type="file"
              // multiple={true}
              onChange={handleChange}
              accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
            />
            <h1 className="mb-3 ml-14 ">Upload Next X-ray</h1>
            <button
              className={`ml-12 bg-sky-600 text-white px-8 py-2 rounded-md hover:bg-sky-700 transform duration-300 ${
                dragActive ? "opacity-100" : "opacity-80"
              }`}
              onClick={openFileExplorer}
              type="button"
            >
              Upload X-Ray
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-8">
          <div>
            {!file ? (
              <button
                // onClick={handleReport}
                className={`bg-stone-50 rounded-md border-dashed border-slate-400 border-2 text-black px-4 py-1 hover:text-sky-700 hover:border-sky-700 hover:bg-slate-100 transform duration-300 ${
                  name === "scoliosis"
                    ? "text-sky-700 border-sky-700 bg-sky-100"
                    : " border-slate-400 border-2 text-black px-4"
                }`}
                type="button"
              >
                Scoliosis
              </button>
            ) : (
              <button
                onClick={handlePredict}
                className={`bg-stone-50 rounded-md  border-slate-400 border-2 text-black px-4 py-1 hover:text-sky-700 hover:border-sky-700 hover:bg-slate-100 transform duration-300 ${
                  name === "scoliosis"
                    ? "text-sky-700 border-sky-700 bg-sky-100"
                    : " border-slate-400 border-2 text-black px-4"
                }`}
                type="button"
              >
                Predict
              </button>
            )}
          </div>
          <div>
            {!file ? (
              <button
                className={`bg-stone-50 rounded-md border-dashed border-slate-400 border-2 text-black px-4 py-1 hover:text-sky-700 hover:border-sky-700 hover:bg-slate-100 transform duration-300 ${
                  name === "osteoarthritis"
                    ? "text-sky-700 border-sky-700 bg-sky-100"
                    : " border-slate-400 border-2 text-black px-4"
                }`}
                type="button"
              >
                Osteoarthritis
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const SuspendedUploadImagePage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <UploadImagePage />
  </Suspense>
);
export default SuspendedUploadImagePage;
