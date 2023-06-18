import { useContext, useEffect, useState } from "react";
import { RootContext } from '../../Utils/Contexts.js';
import Graph from "../../Components/Graph.js";
import BottomNavigator from "../../Components/BottomNavigator.js";
import { features } from "../../Utils/Constants.js";

export default function () {
    const {
        tag,
        setTag,
        screenW,
        tagAnalysisResult,
        accountInfo,
    } = useContext(RootContext);
    const feature1 = tagAnalysisResult?.feature1;

    return <div
        style={{
            width: screenW,
        }}
        id="tagresult"
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
                        setTag("");
                        window.history.back();
                    }}
                />
                <span className="pageTitle">
                    계정 분석 결과
                </span>
            </div>
        </div>
        <div className="taglabel fs">
            @{tag}
        </div>
        {
            tagAnalysisResult &&
            <div className="resultrect">
                <span className="-CUTE-">
                    {tagAnalysisResult.feature1.toUpperCase()} {tagAnalysisResult.score1}%
                </span>
                <div className="onekorcute fs">
                    당신의 매력: {features[feature1]} 
                </div>
                <div className="Frame-11">
                    {
                        accountInfo ?
                        <img 
                            src={"data:image/png;base64," + accountInfo.profileImg} 
                            className="profileimage"
                            alt={tag}
                        /> :
                        tag
                    }
                    <div className="Group-8">
                        <Graph 
                            graphW={220} 
                            graphH={119} 
                            analysisResult={tagAnalysisResult}
                        />
                    </div>
                </div>
            </div>
        }
        <span className="share fc">
            결과 공유하기
        </span>
        <div className="sns fb">
            <img className="image-1 button" src="Images/insta.png"/>
            <img className="image-2 button" src="Images/kakao.png"/>
        </div>
        <BottomNavigator 
            text="AI가 사진도 분석해드려요!" 
            analysisResult={tagAnalysisResult}
        />
    </div>;
};