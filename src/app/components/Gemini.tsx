"use client"
import React, { useState, useEffect } from "react";
import { marked } from "marked";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";


// let disease = "KneeOA";
const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyCAu7zkum0hhG8dAq2Y25UHJHzSJJ1XMG4";

const Gemini = ({ predictedClass } ) => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  console.log(predictedClass);

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  // interface ParsedData {
  //     severity: string;
  //     explanation: string;
  //     tips: string[];
  // }

  const [aiResponse, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  /**
   * Generative AI Call to fetch text insights
   */
  async function aiRun() {
    setLoading(true);
    setResponse("");
    const generationConfig = {
      temperature: 0,
      topK: 32,
      topP: 1,
      maxOutputTokens: 2048,
      stopSequences: ['".", "!", "?"'],
    };

    const model = genAI.getGenerativeModel({
      model: MODEL_NAME,
      generationConfig,
    });
    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [
            {
              text: "Input: Describe the X-ray findings based on predicted class            \nOutput: disease name                        \nSeverity: Severity based on  predicted class                         \nExplanation: Explanation of the disease in user-friendly language                           \nTips (optional):                           \n[Tip 1] (Bullet point for maintaining healthy joints)                           \n[Tip 2] (Bullet point for maintaining healthy joints) \n\nExample 1 (Normal):        \nInput: Your X-ray shows no signs of osteoarthritis.        \nOutput: Knee Osteoarthritis         \nSeverity: Normal          \nExplanation: Knee osteoarthritis (OA) is a common condition, but your X-ray shows no significant signs of it. This means your knees are generally healthy.          \nTips (optional):  Maintain a healthy weight to avoid extra stress on your knees.         \nExercise regularly with low-impact activities like walking or swimming to strengthen muscles and improve flexibility\n\nExample 2 (Moderate):        \nInput: Your X-ray shows moderate signs of osteoarthritis.        \nOutput: Knee Osteoarthritis          \nSeverity: Moderate          \nExplanation:  Your X-ray suggests moderate osteoarthritis (OA) in your knee. This means there's some wear and tear on the cartilage cushioning your joints.          \nTips (optional):         \nConsult a doctor for a personalized evaluation and treatment plan.         \nConsider low-impact exercises like walking or swimming to maintain joint health.",
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: "Example 3 (Severe):        \nInput: Your X-ray shows severe signs of osteoarthritis.        \nOutput: Knee Osteoarthritis          \nSeverity: Severe          \nExplanation: Your X-ray indicates severe osteoarthritis (OA) in your knee. This means there's significant wear and tear on the cartilage, leading to bone-on-bone contact.          \nTips (optional):         \nSeek medical attention for proper diagnosis and treatment options.         \nConsider assistive devices like a cane or walker to support mobility.",
            },
          ],
        },
      ],
    });

    const result = await chat.sendMessage(predictedClass);
    const response = result.response;

    const text = response.text();

    // function markdownToNormal(text) {
    //     let normalText = text.replace(/\*\*(.*?)\*\*/g, '$1');

    //     normalText = normalText.replace(/\*(.*?)\*/g, '$1');

    //     normalText = normalText.replace(/\n/g, ' ');

    //     normalText = normalText.trim();

    //     return normalText;
    // }
    // const ans = markdownToNormal(text)

    const parsedText = await marked(text);
    console.log(parsedText);
    //   const severityRegex = /### Severity: (.*)/;
    //   const explanationRegex = /### Explanation: (.*)^/s; // Add `^` for line beginning
    //   const tipsRegex = /### Tips \(optional\):\n(.*)/s; // Matches tips section with optional line breaks

    //   const severityMatch = severityRegex.exec(parsedText);
    //   const explanationMatch = explanationRegex.exec(parsedText);
    //   const tipsMatch = tipsRegex.exec(parsedText);

    //   const parsedData = {
    //     severity: severityMatch ? severityMatch[1].trim() : null,
    //     explanation: explanationMatch ? explanationMatch[1].trim() : null,
    //     tips: tipsMatch ? tipsMatch[1].split('\n').filter(tip => tip.trim()) : [],
    //   };

    setResponse(parsedText);
    setLoading(false);
  }
  useEffect(() => {
    aiRun(); // Run aiRun function when component mounts or when predictedClass changes
  }, [predictedClass]);

  // async function getGeminiInsights(predictedClass) {
  //     const basePrompt = "Based on an X-ray analysis, ";
  //     let prompt;
  //     // const response = await fetchGeminiAPI(prompt); // Replace with actual API call
  //     // ... process Gemini's response and display insights to the user
  //   }

  return (
    <div className="h-full">
      {loading && <p>Loading ...</p>}
      {aiResponse && (
        <>
          <div className="m-14 flex h-5/6 flex-row">
            <div className="border h-full w-1/2 p-5 rounded-l-lg bg-gray-200"></div>
            <div
              className="flex flex-col justify-center h-full w-1/2 rounded-r-lg p-5 bg-gray-200"
              dangerouslySetInnerHTML={{ __html: aiResponse }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Gemini;
