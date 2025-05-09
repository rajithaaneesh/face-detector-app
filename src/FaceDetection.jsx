import { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";
import cameraIcon from './assets/camera-icon.png';

const FaceDetection = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [cameraOn, setCameraOn] = useState(true); // State to toggle camera

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
      setModelsLoaded(true);
    };
    loadModels();
  }, []);

  const detect = async () => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
        const video = webcamRef.current.video;
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions();

        const canvas = canvasRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        faceapi.matchDimensions(canvas, {
          width: video.videoWidth,
          height: video.videoHeight,
        });

        const resized = faceapi.resizeResults(detections, {
          width: video.videoWidth,
          height: video.videoHeight,
        });

        faceapi.draw.drawDetections(canvas, resized);
        faceapi.draw.drawFaceExpressions(canvas, resized);
      }
  };

  useEffect(() => {
    if (modelsLoaded && cameraOn) {
      const interval = setInterval(detect, 100);
      return () => clearInterval(interval);
    }
  }, [modelsLoaded, cameraOn]);

  return (
    <div className="face-app-container">
      <button className="camera-toggle-btn" onClick={() => setCameraOn(!cameraOn)} style={{ marginBottom: "10px" }}><img src={cameraIcon} />
        {cameraOn ? "Turn off the Camera" : "Turn on the Camera"}
      </button>
      {cameraOn && (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            style={{
              position: "relative",
              width: "100%",
              height: "auto",
            }}
          />
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
          />
        </>
       )}

       {!cameraOn && (
        <>
          <h1 style={{
            color: "green", 
            fontSize: "2rem", 
            textAlign: "center", 
            fontWeight: "bold", 
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            margin: "0 auto"
          }}>
            Please turn on the camera!!
          </h1>
        </>
       )}
    </div>
  );
};

export default FaceDetection;
