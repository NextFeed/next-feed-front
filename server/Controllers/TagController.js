import puppeteer from "puppeteer";
import { delay } from "../Utils/Functions.js";

const isDev = false;

const delayMs = 7000;
const loginUrl = "https://www.instagram.com/accounts/login/";



const login = async(browser) => {
    const page = await browser.newPage();
    await page.setUserAgent("Chrome/84.0.4147.125");
    await page.evaluate("navigator.userAgent");
    await page.setViewport({
        width: 400,
        height: 1000,
    });

    const response = await page.goto(loginUrl, {
        waitUntil: 'networkidle0',
        //waitUntil: 'networkidle2',
        //waitUntil: 'load',
        //waitUntil: 'domcontentloaded',
    });
    if(response.status() !== 200) {
        console.log("login url not working");
    }

    const formInputs = await page.$$("input._aa4b._add6._ac4d");
    await formInputs[0].type(process.env.INSTAGRAM_ID);
    await formInputs[1].type(process.env.INSTAGRAM_PW);
    const loginButton = await page.$$("button._acan._acap._acas._aj1- > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1n2onr6.x1plvlek.xryxfnj.x1c4vz4f.x2lah0s.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1");
    await loginButton[0].click();
};

const getImgSrcs = async(browser, tag) => {
    const url = `https://www.instagram.com/${tag}/`;
    console.log(url);

    const page = await browser.newPage();

    await page.setUserAgent("Chrome/84.0.4147.125");
    await page.evaluate("navigator.userAgent");
    await page.setViewport({
        width: 400,
        height: 600,
    });

    const response = await page.goto(url, {
        waitUntil: 'networkidle0',
        //waitUntil: 'networkidle2',
        //waitUntil: 'load',
        //waitUntil: 'domcontentloaded',
    });
    
    if(response.status() === 404) {
        browser.close();
        console.log("This account doesn't exist");
        return;
    } 
    else if(response.status() === 429) {
        browser.close();
        console.log('Too many requests');
        return;
    } 

    //crawl data
    let profileElem = await page.$("canvas._aarh");
    if(!profileElem) {
        profileElem = await page.$("div._aadm img");
        console.log(tag);
    }
    if(!profileElem) {
        return {
            ok: false,
            message: "존재하지 않는 계정입니다.",
        }
    }
    
    const profileImg = await profileElem.screenshot({
        encoding: "base64",
    });
    
    const feedElems = await page.$$("div._aagv img");
    let feedImgPromises = [];
    for(let i=0; i<9 && i<feedElems.length; i++) {
        const elem = feedElems[i];
        const imgPromise = elem.screenshot({
            encoding: "base64",
        });
        feedImgPromises.push(imgPromise);
    }
    const feedImgs = await Promise.all(feedImgPromises);


    // const profileImgSrc = await (await profileImg.getProperty("src")).jsonValue();
    // let imgSrcs = [];
    // for(let i=0; i<9 && i<imgs.length; i++) {
    //     const img = imgs[i];
    //     const src = await (await img.getProperty("src")).jsonValue();
    //     imgSrcs.push(src);
    // }



    const result = {
        ok: true,
        profileImg: profileImg,
        feedImgs: feedImgs,
    };
    // console.log(result);
    
    return result;
}

const get = async(request, response) => {
    const { tag } = request.query;

    try {
        //run browser
        const browser = await puppeteer.launch({
            headless: isDev ? false : "new",
        });
    
        await login(browser);
        await delay(delayMs);
        const result = await getImgSrcs(browser, tag);

        browser.close();
        response.send(result);
    } catch(error) {
        console.log(error);
    }
};


export default {
    get,
};