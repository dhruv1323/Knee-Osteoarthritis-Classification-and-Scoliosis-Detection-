"use client"
import Gemini from "@/app/components/Gemini";
// import { useRecoilValue, selector } from "recoil";
import { predictedState } from "@/lib/utils";
import {
    useRecoilValue,
  } from 'recoil';
//   import { useStore } from "zustand";

export default function Result(){
   
    const predictedClass = useRecoilValue(predictedState);
    // const bears = useStore((state) => state.predictedClass)
    return(
        <div className="h-4/5">
                <Gemini predictedClass={predictedClass} />
        </div>
    );
}