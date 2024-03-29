import { useContext, useEffect, useRef, useState } from "react";
import { RootContext } from '../../Utils/Contexts.js';
import { apiBaseUrl } from "../../Utils/Constants.js";

export default function () {
    const {
        screenW,
        multiImgs,
        setMultiImgs,
        setIsLoading,
        setLoadingRate,
        setMultiResults,
        isMale,
        setLoadingText,
    } = useContext(RootContext);

    const hiddenFileInput = useRef(null);
    const [uploadedFile, setUploadedFile] = useState(null);
    const handleAddImages = (event) => {
        const imageLists = event.target.files;
        let imageUrlLists = [];

        let maximg = 10;
        let imgLength = imageLists.length > maximg ? maximg : imageLists.length;
        if (imageLists.length > maximg) alert(`한번에 업로드 가능한 사진은 최대 ${maximg}장 까지 입니다.`);
    
        for (let i = 0; i < imgLength; i++) {
            const currentImageUrl = URL.createObjectURL(imageLists[i]);
            imageUrlLists.push(currentImageUrl);
            
            const reader = new FileReader();
            reader.onload = () => {
                imageUrlLists[i] = reader.result.split(',')[1];
                setUploadedFile([...imageUrlLists]); 
                setMultiImgs([...imageUrlLists]);
            };
            reader.readAsDataURL(imageLists[i]);
        }
    };
    
    const handleDeleteImage = (id) => {
        var result = window.confirm('삭제하시겠습니까?');
        if (result) setUploadedFile(uploadedFile.filter((_, index) => index !== id));
    };

    const onAnalyze = async() => {
        setIsLoading(true);
        setLoadingRate(0.5);
        setLoadingText("AI가 사진 분석중");

        try {
            const reqUrl = `${apiBaseUrl}/analyze/images/`;
            const body = {
                type: isMale ? "male" : "female",
                imgs: multiImgs,
            }
            const response = await fetch(reqUrl, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(body),
            });
    
            const multiResults = await response.json();
            setMultiResults(multiResults); 
        } catch(error) {
            console.log(error);
            alert("분석 서버 오류: " + error.message);
            setIsLoading(false);
            return;
        }
        setLoadingRate(1.0);
        setIsLoading(false);

        window.location.hash = "multiresult";
    };

    return <div
        style={{
            width: screenW,
        }}
        id="uploadmulti"
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
                    여러 장 분석
                </span>
            </div>
        </div>
        <div className="fc" style={{width: screenW}}>
            <div className="multiimgcontainer">
                {
                    uploadedFile && uploadedFile.map((image, id) => (
                        <div
                            className="Rectangle-10 fb button" key={id}
                            onClick={() => handleDeleteImage(id)}
                        >
                            <img src={"data:image/png;base64," + image} alt={`${image}-${id}`} style={{width: 200, height: 200}}/>
                        </div>
                    ))
                }
                <div 
                    className="Rectangle-10 fc button"
                    onClick={() => {
                        hiddenFileInput.current.click();
                    }}
                >
                    <input
                        className="fileinput1"
                        type="file"
                        multiple="multiple"
                        accept='image/jpg,image/png,image/jpeg,image/gif'
                        ref={hiddenFileInput}
                        onChange={handleAddImages}
                    ></input>
                    
                    <img className="uploadImage" src={"Images/upload.png"} />
                </div>
            </div>
        </div>
        <div 
            className={"Frame-24 fc button " + (uploadedFile ? "active" : "disabled")}
            onClick={() => {
                if(multiImgs) {
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