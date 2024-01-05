"use client";

import { useRef, useState } from "react";

export default function DragAndDrop() {

  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<any>([]);

  return (
   <div className="flex items-center justify-center h-screen">
      <form action=""></form>
   </div>
  );
}

