import { useContext, useEffect, useState } from "react";
import { RootContext } from '../../Utils/Contexts.js';

export default function () {
    const {
        tag,
        setTag,
        hash,
        screenW,
        screenH,
        loadingRate,
    } = useContext(RootContext);

    const progressW = 288;

    return <div
        style={{
            width: screenW,
            height: screenH,
        }}
        id="loading"
        className="fcc"
    >
        <span className="loading">
            분석중...
        </span>
        <div className="progressbar">
            <div className="progresspercent">
                {loadingRate * 100}%
            </div>
            <div 
                className="progresscontainer"
                style={{
                    width: progressW,
                }}
            >
                <div 
                    className="progress"
                    style={{
                        width: progressW * loadingRate,
                    }}
                >
                </div>
            </div>
        </div>
    </div>;
};