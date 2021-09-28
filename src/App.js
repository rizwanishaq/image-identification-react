import DisplayPrediction from "./components/DisplayPrediction";
import FileUpload from "./components/FileUpload";
import Header from "./components/Header";
// import ImageHistory from "./components/ImageHistory";
import { AppContext } from "./contexts/appContext";

function App() {
  const { isModelLoading } = AppContext();

  if (isModelLoading) {
    return <h2>Model Loading...</h2>;
  }

  return (
    <div className="App">
      <Header />
      <FileUpload />
      <DisplayPrediction />
      {/* <ImageHistory /> */}
    </div>
  );
}

export default App;
