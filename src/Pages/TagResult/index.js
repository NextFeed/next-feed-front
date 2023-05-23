import { useContext, useEffect, useState } from "react";
import { RootContext } from '../../Utils/Contexts.js';


export default function () {
    const {
        tag,
        setTag,
        hash,
        screenW,
        screenH,
        accountInfo,
    } = useContext(RootContext);

    console.log(accountInfo);

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
            <span className="CUTE-78">
                CUTE 78%
            </span>
            <span className="-CUTE- _">
                당신의 계정은
                <br />
                <span className="_">CUTE(귀여운)</span>
                매력을 보여주고 있네요!
            </span>
            <div className="Frame-11">
                <div className="Rectangle-5 fc">
                    {tag}
                </div>
                <div className="Group-8">
                    <div className="Frame-9">
                        <span className="CUTE _">
                            CUTE
                        </span>
                        <span className="PRETTY _">
                            PRETTY
                        </span>
                        <span className="PURE _">
                            PURE
                        </span>
                    </div>
                    <div className="Frame-8">
                        <div className="Frame-5">
                            <div className="indexs fb">
                                <div className="fcc">
                                    <span className="index0">
                                        0
                                    </span>
                                    <div className="Line-3"></div>
                                </div>
                                <div className="fcc">
                                    <span className="index0">
                                        50
                                    </span>
                                    <div className="Line-3"></div>
                                </div>
                                <div className="fcc">
                                    <span className="index0">
                                        100
                                    </span>
                                    <div className="Line-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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