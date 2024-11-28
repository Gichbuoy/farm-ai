import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import Base64 from 'base64-js';
import MarkdownIt from 'markdown-it';
import { maybeShowApiKeyBanner } from './gemini-api-banner';
import './style.css';

let API_KEY = 'AIzaSyCO55ZOKtPOIGCfhSq4p_ZyLsI9irKLYcc';

let imageForm = document.getElementById('image-form');
let promptForm = document.getElementById('prompt-form');
let promptInput = document.querySelector('input[name="prompt"]');
let imageOutput = document.querySelector('.image-output');
let promptOutput = document.querySelector('.prompt-output');

imageForm.onsubmit = async (ev) => {
  ev.preventDefault();
  imageOutput.textContent = 'Analyzing...';

  try {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    const imageBase64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result.split(',')[1];
        resolve(base64String);
      };
      reader.onerror = reject;
    });

    let contents = [
      {
        role: 'user',
        parts: [
          { inline_data: { mime_type: 'image/jpeg', data: imageBase64, } },
          { text: promptInput.value }
        ]
      }
    ];

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ],
    });

    const result = await model.generateContentStream({ contents });

    let buffer = [];
    let md = new MarkdownIt();
    for await (let response of result.stream) {
      buffer.push(response.text());
      imageOutput.innerHTML = md.render(buffer.join(''));
    }
  } catch (e) {
    imageOutput.innerHTML = 'Error: ' + e;
  }
};

promptForm.onsubmit = async (ev) => {
  ev.preventDefault();
  promptOutput.textContent = 'Generating response...';

  try {
    let contents = [
      {
        role: 'user',
        parts: [
          { text: promptInput.value }
        ]
      }
    ];

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ],
    });

    const result = await model.generateContentStream({ contents });

    let buffer = [];
    let md = new MarkdownIt();
    for await (let response of result.stream) {
      buffer.push(response.text());
      promptOutput.innerHTML = md.render(buffer.join(''));
    }
  } catch (e) {
    promptOutput.innerHTML = 'Error: ' + e;
  }
};


maybeShowApiKeyBanner(API_KEY);
