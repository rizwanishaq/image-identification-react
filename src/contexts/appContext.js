import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
} from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";

const GlobalContext = createContext();

export const AppContext = () => {
  return useContext(GlobalContext);
};

const GlobalContextProvider = ({ children }) => {
  const [isModelLoading, setIsModelLoading] = useState(false);
  const [model, setModel] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [results, setResults] = useState([]);
  const [history, setHistory] = useState([]);

  const imageRef = useRef();
  const textInputRef = useRef();
  const fileInputRef = useRef();

  const loadModel = async () => {
    setIsModelLoading(true);
    try {
      const model = await mobilenet.load();
      setModel(model);
      setIsModelLoading(false);
    } catch (error) {
      console.log(error);
      setIsModelLoading(false);
    }
  };

  useEffect(() => {
    loadModel();
  }, []);
  useEffect(() => {
    if (imageURL) {
      setHistory([imageURL, ...history]);
    }
    // eslint-disable-next-line
  }, [imageURL]);

  return (
    <GlobalContext.Provider
      value={{
        model,
        isModelLoading,
        imageURL,
        setImageURL,
        results,
        setResults,
        history,
        setHistory,
        imageRef,
        textInputRef,
        fileInputRef,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextProvider;
