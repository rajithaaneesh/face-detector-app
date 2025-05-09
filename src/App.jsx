import FaceDetection from './FaceDetection';
import faceDetectionIcon from './assets/face-detection-icon-flat-vector.jpg';

function App() {
  return (
    <div className="App">
      <h1 className='app-title'><img src={faceDetectionIcon} /> Face Detector</h1>
      <FaceDetection />
    </div>
  );
}

export default App;
