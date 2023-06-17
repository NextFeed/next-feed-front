import { useContext, useEffect, useState } from "react";
import { ColorRing } from  'react-loader-spinner';
import { RootContext } from '../../Utils/Contexts.js';

let cnt = 0;

export default function () {
    const {
        screenW,
        screenH,
        loadingText, 
    } = useContext(RootContext);

    const [iteration, setIteration] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIteration(cnt++);
        }, 400);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const dotN = iteration % 3 + 1;

    return <div
        style={{
            width: screenW,
            height: screenH,
        }}
        id="loading"
        className="fcc"
    >
        <span className="loading fc">
            {loadingText}
            {".".repeat(dotN)}<div className="transparent">{".".repeat(3 - dotN)}</div>
        </span>
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={[
                '#f93560',
                '#da21b0',
                '#e96163',
                '#585acb',
                '#873cb9',
            ]}
        />
    </div>;
};