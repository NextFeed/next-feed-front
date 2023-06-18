import { useContext, useEffect, useState } from "react";
import { RootContext } from '../../Utils/Contexts.js';
import Graph from "../../Components/Graph.js";
import BottomNavigator from "../../Components/BottomNavigator.js";
import WideButton from "../../Components/WideButton.js";
import { features } from "../../Utils/Constants.js";

export default function () {
    const {
        screenW,
        tag,
        oneImg,
        oneResult,
        tagAnalysisResult,
    } = useContext(RootContext);

    const isFit = tagAnalysisResult?.feature1 == oneResult?.feature1;
    const feature1 = oneResult?.feature1;

    return <div
        style={{
            width: screenW,
        }}
        id="oneresult"
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
                    사진 분석 결과
                </span>
            </div>
        </div>
        <div className="taglabel fs">
            @{tag}
        </div>
        {
            oneResult &&
            <div className="fsc">
                <span className="onecute">
                    {oneResult.feature1.toUpperCase()} {oneResult.score1}%
                </span>
                <div className="onekorcute fc">
                    이 사진의 매력: {features[feature1]} 
                </div>
                <img 
                    className="oneimage"
                    src={"data:image/png;base64," + oneImg}
                />
                <Graph graphW={280} graphH={119} analysisResult={oneResult}/>
                <span className="fit">
                    {isFit ? "당신의 계정과 잘 어울리네요!" : "색다른 매력의 사진이네요."}
                    <br/>
                    {isFit ? "피드 대표사진으로 올려봐요.": "한 번 도전해볼래요?"}
                </span>
            </div>
        }
        <span className="share fc">
            결과 공유하기
        </span>
        <div className="sns fb">
            <img className="image-1 button" src="Images/insta.png" />
            <img className="image-2 button" src="Images/kakao.png" />
        </div>
        <BottomNavigator 
            text="다른 사진 분석하기" 
            analysisResult={tagAnalysisResult}
        />
        <WideButton 
            text="Instagram 결과로 돌아가기"
            onClick={() => {
                window.location.hash = "tagresult";
            }}
        />
        <WideButton 
            text="처음으로"
            onClick={() => {
                window.location.hash = "";
            }}
        />
    </div>;
};