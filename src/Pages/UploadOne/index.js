import { useContext, useEffect, useRef, useState } from "react";
import { RootContext } from '../../Utils/Contexts.js';

export default function () {
    const {
        tag,
        setTag,
        hash,
        screenW,
        screenH,
        oneImg,
        setOneImg,
        setIsLoading,
        setLoadingRate,
        setOneResult,
    } = useContext(RootContext);

    const hiddenFileInput = useRef(null);
    const [uploadedFile, setUploadedFile] = useState(null);

    const onAnalyze = async() => {
        setIsLoading(true);
        setLoadingRate(0.5);

        // const reqUrl = `${apiBaseUrl}/analyze/image/`;
        // const body = {
        //     type: isMale ? "male" : "female",
        //     img: oneImg,
        // }
        // const response = await fetch(reqUrl, {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //     },
        //     body: JSON.stringify(body),
        // });
        // const oneResult = await response.json();
        // setOneResult(oneResult); 

        window.location.hash = "oneresult";
    };

    return <div
        style={{
            width: screenW,
            height: screenH,
        }}
        id="uploadone"
        className="fsc"
    >
        <div className="titleTab fcc">
            <img
                className="smallLogo"
                src="Images/logo.png"
            />
            <div className="fc titleRow">
                <img
                    className="backButton button"
                    src="Images/back.png"
                    onClick={() => {
                        window.history.back();
                    }}
                />
                <span className="pageTitle">
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
                    
                    const reader = new FileReader();
                    reader.readAsDataURL(event.target.files[0]);
                    
                    reader.onload = () => {
                        console.log(reader.result.split(',')[1]);
                        setUploadedFile(reader.result);
                        setOneImg(reader.result.split(',')[1]);
                    };
                }}
            ></input>
            <img className="uploadImage" src={uploadedFile || "Images/upload.png"} />
        </div>
        <div 
            className={"Frame-24 fc button " + (uploadedFile ? "active" : "disabled")}
            onClick={() => {
                if(oneImg) {
                    onAnalyze();
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