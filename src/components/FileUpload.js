import React from "react";
import { AppContext } from "../contexts/appContext";

const FileUpload = () => {
  const { textInputRef, fileInputRef, setImageURL, setResults } = AppContext();

  const uploadImage = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const url = URL.createObjectURL(files[0]);
      setImageURL(url);
    } else {
      setImageURL(null);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current.click();
  };

  const handleOnChange = (e) => {
    setImageURL(e.target.value);
    setResults([]);
  };

  return (
    <div className="inputHolder">
      <input
        type="file"
        accept="image/*"
        capture="camera"
        className="uploadInput"
        onChange={uploadImage}
        ref={fileInputRef}
      />
      <button className="uploadImage" onClick={triggerUpload}>
        Upload Image
      </button>
      <span className="or">OR</span>
      <input
        type="text"
        placeholder="Paster image URL"
        ref={textInputRef}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default FileUpload;
