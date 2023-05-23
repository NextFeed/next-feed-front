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
            <div className="progresscontainer">
                <div className="progress">
                </div>
            </div>
        </div>
    </div>;
};