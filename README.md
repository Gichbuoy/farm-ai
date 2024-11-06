# 🌾 Farm-AI: Crop Disease Detection and Prevention Tool

## Introduction
**Farm-AI** is an AI-powered tool designed to assist farmers in identifying and preventing crop diseases. By using image analysis and question-answering capabilities, Farm-AI enables farmers to upload photos of potentially diseased crops, receive diagnoses, and get information on disease prevention and treatment. The project aims to improve crop health and productivity, ultimately empowering farmers with actionable insights.

## Inspiration
The inspiration for **Farm-AI** came from the struggles of small-scale farmers who often face crop diseases without access to timely expertise. Many of these farmers are unable to identify diseases early on, leading to crop loss and reduced yields. By providing an accessible AI tool, **Farm-AI** empowers local farmers to diagnose crop diseases by simply uploading images of infected crops. This tool offers valuable insights on treatment and prevention, ultimately improving crop health and productivity.

## What it Does
**Farm-AI** enables farmers to:
- **Upload images of infected crops** for disease analysis. The AI processes the image, identifies potential diseases, and provides a diagnosis.
- **Ask additional questions** related to disease prevention and treatment methods through a built-in Q&A feature, making the tool an all-in-one resource for managing crop health.

The tool is built to provide accurate, AI-driven analysis and recommendations, helping farmers make informed decisions on crop management to prevent and mitigate the effects of diseases.

## How We Built It
**Farm-AI** leverages the **Gemini API** to power both image analysis and question-answering functionalities. The main components include:
- **Frontend**: Built with JavaScript, HTML, and CSS, the user interface is designed to be intuitive and accessible for local farmers, even those with minimal tech skills.
- **Backend**: Scripts are used to integrate the Gemini API, which powers the crop image analysis and answers questions from farmers.
- **Machine Learning & Deployment**:
  - **Google AI Studio** was used to train the model on various crop diseases, ensuring accuracy across a wide range of diseases.
  - **Vertex AI** handles deployment, providing a scalable and reliable platform for serving AI predictions.
- **Nix**: A cross-platform package manager, Nix was used for managing dependencies and ensuring consistency across environments.

Check out the [Farm-AI](https://farm-ai-eight.vercel.app/) for more details.

## Getting Started
To run Farm-AI follow this steps:

#### Prerequisites
- Node.js
- Nix (for environment setup)
- API key for the Gemini API

#### Installation
1. Clone the repository:
   ```
   git clone https://github.com/Gichbuoy/farm-ai.git
   cd farm-ai
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up environment variables and add your gemini API key
   ```
   API_KEY=your_gemini_api_key
   ```

## Usage
Start the application by running:
```
npm start
```

### Acknowledgments
1. Google AI Team for developing and providing access to the Gemini API.
2. Open-source community for creating the tools and resources that supported the development of Farm-AI.
3. Special thanks Google cloud Gemini Hackathon for this opportunity to build this amazing project.


## Challenges We Faced
Building **Farm-AI** presented several challenges:
1. **Training AI for Diverse Crops**: Ensuring the model could recognize a wide variety of crop diseases, even with low-quality images, required extensive dataset preparation and tuning.
2. **Optimizing for Low Internet Connectivity**: Many rural areas have limited internet access, so optimizing performance and loading speed was crucial.
3. **User-Friendly Design**: Making the interface easy for farmers with varying levels of tech familiarity was a key focus and a significant design challenge.

## Accomplishments
We’re proud of several achievements with **Farm-AI**:
1. **Integrated Image Analysis with Q&A**: We successfully combined disease detection with question-answering for an all-encompassing tool.
2. **High Detection Accuracy**: The tool’s AI achieves impressive accuracy in identifying crop diseases.
3. **Simple, Intuitive UI**: The interface is easy to use, even for those with minimal tech experience, enabling widespread adoption.

## What We Learned
Developing **Farm-AI** taught us a lot:
- **AI for Image Analysis**: We deepened our knowledge of building robust AI-powered image analyzers with impressive accuracy.
- **Gemini API Integration**: Using the Gemini API to handle image recognition and Q&A functionalities expanded our skills in working with cutting-edge AI APIs.
- **Understanding Farmer Needs**: Researching the challenges faced by farmers provided valuable insights into designing impactful solutions for real-world issues.

## What's Next for Farm-AI
We plan to expand and enhance **Farm-AI** with:
- **Expanded Disease Database**: Adding more crops and diseases to increase the tool's applicability.
- **Animal Health Diagnostics**: Extending the tool’s capabilities to recognize livestock diseases for broader agricultural impact.
- **Offline Functionality**: Exploring ways to offer offline support for regions with limited internet access, making **Farm-AI** even more accessible.

---

By combining advanced AI with a simple user interface, **Farm-AI** aims to transform agricultural disease management, empowering farmers to achieve healthier crops and improved yields.
