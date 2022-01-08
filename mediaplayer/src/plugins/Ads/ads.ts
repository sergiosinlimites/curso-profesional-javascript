import JSONAds from './ads.json';

export interface Ad {
    imageUrl: string,
    title: string,
    body: string,
    url: string
}

const ALL_ADS: Ad[] = JSONAds;

class Ads {
    private static instance: Ads;
    private ads: Ad[];

    private constructor(){
        this.initAds()
    }

    private initAds(){
        this.ads = [...ALL_ADS];
    }

    static getInstance(){
        if(!Ads.instance){
            Ads.instance = new Ads();
        }
        return Ads.instance;
    }

    getAd(){
        if(this.ads.length === 0){
            this.initAds();
        }
        return this.ads.pop();
    }
}

export default Ads;