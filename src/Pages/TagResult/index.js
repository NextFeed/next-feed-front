import { useContext, useEffect, useState } from "react";
import { RootContext } from '../../Utils/Contexts.js';
import Graph from "../../Components/Graph.js";


export default function () {
    const {
        tag,
        setTag,
        hash,
        screenW,
        screenH,
        tagAnalysisResult,
        setTagAnalysisResult,
        accountInfo,
    } = useContext(RootContext);

    //temp backend mock
    useEffect(() => {
        setTagAnalysisResult({
            feature1: "cute",
            score1: 70.3,
            feature2: "pretty",
            score2: 21.6,
            feature3: "ugly",
            score3: 8.1,
        });
    }, []);

    return <div
        style={{
            width: screenW,
            height: screenH,
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
        <div className="resultrect fcc">
            {
                tagAnalysisResult &&
                <>
                <span className="CUTE-78">
                    {tagAnalysisResult.feature1.toUpperCase() + " " + tagAnalysisResult.score1 + "%"}
                </span>
                <span className="-CUTE- _">
                    당신의 계정은
                    <br />
                    <span className="_">{tagAnalysisResult.feature1.toUpperCase()}</span>
                    한 매력을 보여주고 있네요!
                </span>
                <div className="Frame-11">
                    <div className="Rectangle-5 fc">
                        {
                            accountInfo ?
                            <img 
                                src={"data:image/png;base64," + accountInfo.profileImg} 
                                className="" 
                                alt={tag}
                            /> :
                            tag
                        }
                    </div>
                    <div className="Group-8">
                        <Graph 
                            graphW={220} 
                            graphH={119} 
                            analysisResult={tagAnalysisResult}
                        />
                    </div>
                </div>
                </>
            }
        </div>
        <span className="share fc">
            결과 공유하기
        </span>
        <div className="sns fb">
            <img className="image-1 button" src="Images/insta.png"/>
            <img className="image-2 button" src="Images/kakao.png"/>
        </div>
        <div className="addImage fcc">
            <span className="AIanalysys">
                AI가 사진도 분석해드려요!
            </span>
            <div className="Line-2"></div>
            <div className="Frame-27 fb">
                <div 
                    className="oneImage button"
                    onClick={() => {
                        window.location.hash = "uploadone";
                    }}
                >
                    <span className="howmuchcute">
                        다른 사진은
                        <br/>
                        몇 %
                        <span className="muchcute"> 귀여울</span>까?
                    </span>
                    <span className="oneanalysis">
                        한 장 분석
                    </span>
                </div>
                <div 
                    className="multiImage button"
                    onClick={() => {
                        window.location.hash = "uploadmulti";
                    }}
                >
                    <span className="mostcutefind">
                        내 사진 중
                        <br/>
                        가장
                        <span className="mostcute"> 귀여운 </span>
                        사진 찾기
                    </span>
                    <span className="multianalysis">
                        여러 장 분석
                    </span>
                </div>
            </div>
        </div>
    </div>;
};