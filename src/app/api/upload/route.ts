// import { metadata } from './../../layout';
// // import formidable from 'formidable';
// // import { NextApiRequest, NextApiResponse } from 'next';
// import Cors from 'cors';
// import sharp from 'sharp';
// import * as tf from '@tensorflow/tfjs';




// // Initialize the cors middleware
// const cors = Cors({
//   methods: ['POST'],
// });

// export async function POST(req ) {
  
//   console.log("method: ", req.method);

//   const data = await req.formData();
//   const image = data.get('file');

//   console.log(image);

//   // const imageBuffer = Buffer.from(data.get('file'), 'base64');
//   // console.log(imageBuffer)

//     // Resize the image to 224x224 pixels
//     // const resizedImageBuffer = await sharp(imageBuffer)
//     //   .resize(224, 224)
//     //   .toBuffer();
    
//     //   const inputTensor = tf.tensor2d(resizedImageBuffer);
//   try {
    
//     const model = await tf.loadLayersModel('http://localhost:3000/model.json');
//     console.log('model loaded successfully',model)

//     // const predictions = model.predict(inputTensor);

//     return Response.json({ success : true })
//   } catch (error) {
//     console.error('Error making prediction:', error);
//     return Response.json({ error})
//   }
// }

