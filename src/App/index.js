import { useEffect, useState } from "react";
import { RootContext } from '../Utils/Contexts.js';
import Home from '../Pages/Home/index.js';
import TagResult from '../Pages/TagResult/index.js';
import UploadOne from '../Pages/UploadOne/index.js';
import OneResult from '../Pages/OneResult/index.js';
import UploadMulti from '../Pages/UploadMulti/index.js';
import MultiResult from '../Pages/MultiResult/index.js';
import Loading from "../Pages/Loading/index.js";

const hashToPage = (hash) => {
    if(hash === "#tagresult") {
        return <TagResult/>
    }
    if(hash === "#uploadone") {
        return <UploadOne/>
    }
    if(hash === "#oneresult") {
        return <OneResult/>
    }
    if(hash === "#uploadmulti") {
        return <UploadMulti/>
    }
    if(hash === "#multiresult") {
        return <MultiResult/>
    }
	return <Home/>;
};

export default function() {
	const [screenW, setScreenW] = useState(window.innerWidth);
    const [screenH, setScreenH] = useState(window.innerHeight);
	const [hash, setHash] = useState(window.location.hash);
	const [tag, setTag] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [loadingRate, setLoadingRate] = useState(0);
    const [tagAnalysisResult, setTagAnalysisResult] = useState();

	const onResize = () => {
        setScreenW(window.innerWidth);
        setScreenH(window.innerHeight);
    };

    const onHashchange = () => {
        setHash(window.location.hash);
    };

	useEffect(() => {
        // const storageTag = window.sessionStorage.getItem("tag");
        // if(storageTag) {
        //     setTag(storageTag);
        // }

        window.addEventListener('resize', onResize);
        window.addEventListener("hashchange", onHashchange);
        
        return () => {
            window.removeEventListener('resize', onResize);
            window.removeEventListener("hashchange", onHashchange);
        };
    }, []);

	return <RootContext.Provider value={{
        tag,
        setTag,
        hash,
        screenW,
        screenH,
        isLoading,
        setIsLoading,
        loadingRate,
        setLoadingRate,
        tagAnalysisResult,
        setTagAnalysisResult,
    }}>
		{
            isLoading ? 
            <Loading/> :
            tag ? 
            hashToPage(hash) :
            <Home/>
        }
    </RootContext.Provider >;
};