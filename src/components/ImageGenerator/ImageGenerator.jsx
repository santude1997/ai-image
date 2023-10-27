import React, { useRef, useState } from 'react'
// import default_image from "../Assets/"

const ImageGenerator = () => {
  const [image_url,setImage_url] = useState("/")
  let inputRef = useRef(null)

  const imageGenerator = async()=>{
    if(inputRef.current.value ===""){
      return 0
    }
    const response = await fetch(
      "https://api.openai.com/v1/images/generations"
    );
  }

  // sk - j3186slrxeb0nHLmaHLaT3BlbkFJgGQiFOS2K895BZnrxPBK;
  return (
    <div className="ai-image-generator">
      <div className="header">
        AI Image <span>Generateor</span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img
            src={image_url === "/" ? default_image : image_url}
            alt="default image"
          />
        </div>
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            ref={inputRef}
            placeholder="Enter your prompt here..."
          />
          <div className="generate-btn">Generate</div>
        </div>
      </div>
    </div>
  );
}

export default ImageGenerator