import { useContext, useEffect, useState } from "react";
import { RootContext } from '../../Utils/Contexts.js';
import "./style.css";


export default function () {
    const {
        tag,
        setTag,
        hash,
        screenW,
        screenH,
    } = useContext(RootContext);

    return <div
        style={{
            width: screenW,
            height: screenH,
        }}
        className="fsc"
    >
        <div class="Rectangle-16 fcc">
            <img
                className="logo"
                src="Images/logo.png"
            />
            <div className="fc tab">
                <img 
                    className="back button" 
                    src="Images/back.png" 
                    onClick={() => {
                        setTag("");
                        window.history.back();
                    }}
                />
                <span className="a-">
                    계정 분석 결과
                </span>
            </div>
        </div>
        <div className="resultrect fcc">
            <span class="CUTE-78">
                CUTE 78%
            </span>
            <span class="-CUTE- _">
                당신의 계정은
                <br />
                <span class="_">CUTE(귀여운)</span>
                매력을 보여주고 있네요!
            </span>
            <div class="Frame-11">
                <div class="Rectangle-5 fc">
                    {tag}
                </div>
                <div class="Group-8">
                    <div class="Frame-9">
                        <span class="CUTE _">
                            CUTE
                        </span>
                        <span class="PRETTY _">
                            PRETTY
                        </span>
                        <span class="PURE _">
                            PURE
                        </span>
                    </div>
                    <div class="Frame-8">
                        <div class="Frame-5">
                            <div className="indexs fb">
                                <div className="fcc">
                                    <span className="index0">
                                        0
                                    </span>
                                    <div class="Line-3"></div>
                                </div>
                                <div className="fcc">
                                    <span className="index0">
                                        50
                                    </span>
                                    <div class="Line-3"></div>
                                </div>
                                <div className="fcc">
                                    <span className="index0">
                                        100
                                    </span>
                                    <div class="Line-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <span class="share fc">
            결과 공유하기
        </span>
        <div className="sns fb">
            <img class="image-1 button" src="Images/insta.png"/>
            <img class="image-2 button" src="Images/kakao.png"/>
        </div>
        <div className="addImage fcc">
            <span class="AIanalysys">
                AI가 사진도 분석해드려요!
            </span>
            <div class="Line-2"></div>
            <div className="Frame-27 fb">
                <div 
                    class="oneImage button"
                    onClick={() => {
                        window.location.hash = "uploadone";
                    }}
                >
                    <span class="howmuchcute">
                        다른 사진은
                        <br/>
                        몇 %
                        <span class="muchcute"> 귀여울</span>까?
                    </span>
                    <span class="oneanalysis">
                        한 장 분석
                    </span>
                </div>
                <div 
                    class="multiImage button"
                    onClick={() => {
                        window.location.hash = "uploadmulti";
                    }}
                >
                    <span class="mostcutefind">
                        내 사진 중
                        <br/>
                        가장
                        <span class="mostcute"> 귀여운 </span>
                        사진 찾기
                    </span>
                    <span class="multianalysis">
                        여러 장 분석
                    </span>
                </div>
            </div>
        </div>
    </div>;
};