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
	// const [tag, setTag] = useState("aa");
    const [isLoading, setIsLoading] = useState(false);
    const [loadingRate, setLoadingRate] = useState(0);
    const [isMale, setIsMale] = useState(false);
    const [accountInfo, setAccountInfo] = useState();
    const [tagAnalysisResult, setTagAnalysisResult] = useState();
    const [oneImg, setOneImg] = useState();
    const [multiImgs, setMultiImgs] = useState();
    const [oneResult, setOneResult] = useState();
    const [multiResults, setMultiResults] = useState();

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
        isMale,
        setIsMale,
        accountInfo, 
        setAccountInfo,
        tagAnalysisResult,
        setTagAnalysisResult,
        oneImg,
        setOneImg,
        multiImgs,
        setMultiImgs,
        oneResult,
        setOneResult,
        multiResults,
        setMultiResults,
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