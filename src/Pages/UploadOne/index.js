import { useContext, useEffect, useRef, useState } from "react";
import { RootContext } from '../../Utils/Contexts.js';

export default function () {
    const {
        tag,
        setTag,
        hash,
        screenW,
        screenH,
    } = useContext(RootContext);

    const hiddenFileInput = useRef(null);
    const [uploadedFile, setUploadedFile] = useState(null);

    return <div
        style={{
            width: screenW,
            height: screenH,
        }}
        className="fsc"
    >
        <div className="Rectangle-16 fcc">
            <img
                className="logo"
                src="Images/logo.png"
            />
            <div className="fc tab">
                <img
                    className="back button"
                    src="Images/back.png"
                    onClick={() => {
                        window.history.back();
                    }}
                />
                <span className="a-">
                    한 장 분석
                </span>
            </div>
        </div>
        <div 
            className="Rectangle-10 fc button"
            onClick={() => {
                hiddenFileInput.current.click();
            }}
        >
            <input
                className="fileinput1"
                type="file"
                accept='image/jpg,image/png,image/jpeg,image/gif'
                ref={hiddenFileInput}
                onChange={(event) => {
                    setUploadedFile(URL.createObjectURL(event.target.files[0]));
                }}
            ></input>
            <img className="uploadImage" src={uploadedFile || "Images/upload.png"} />
        </div>
        <div 
            className={"Frame-24 fc button " + (uploadedFile ? "active" : "disabled")}
            onClick={() => {
                if(uploadedFile) {
                    window.location.hash = "oneresult";
                }
                else {
                    alert("이미지를 업로드하세요.");
                }
            }}
        >
            <span className="analysis">
                분석하기
            </span>
        </div>
    </div>;
};