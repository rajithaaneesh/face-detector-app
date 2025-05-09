# face-detector-app
React Face Detector App 

A React-based application that uses a webcam to detect faces and display facial expressions in real-time using the `face-api.js` library.

## Features

- **Real-Time Face Detection**: Detects faces using the webcam.
- **Facial Expression Recognition**: Identifies facial expressions such as happiness, sadness, etc.
- **Camera Toggle**: Allows users to turn the camera on or off.
- **Responsive Design**: Adapts to different screen sizes.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **face-api.js**: Library for face detection and facial expression recognition.
- **Webcam**: Captures video input from the user's device.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rajithaaneesh/face-detection-app.git
   cd face-detection-app

2. Install dependencies:
   npm install

3. Start the development server:
   npm start

Open the app in your browser at http://localhost:3000.

File Structure:
  src/
  ├── assets/                # Static assets (e.g., icons, images)
  ├── components/
  │   ├── [FaceDetection.jsx](http://_vscodecontentref_/0)  # Main face detection component
  ├── index.css              # Global styles
  ├── App.jsx                # Root component
  ├── main.jsx               # Entry point


How It Works
  **Model Loading**: The app loads pre-trained models for face detection and expression recognition from the /models directory.
  **Webcam Integration**: The Webcam component captures live video input.
  **Face Detection**: The app uses face-api.js to detect faces and draw bounding boxes and expressions on a canvas overlay.
  **Camera Toggle**: Users can turn the camera on or off using a button.

Usage
  1. Start the app and allow access to your webcam.
  2. The app will display a live video feed with detected faces and expressions.
  3. Use the "Turn off the Camera" button to stop the webcam feed.

Styling
  1. The app is styled using CSS for a clean and modern look.
  2. The video feed has a highlighted border and hover effects for better visual appeal.
