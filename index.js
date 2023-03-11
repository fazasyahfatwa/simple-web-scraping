import fetch from 'node-fetch';
import cheerio from 'cheerio';

const getDetailPage = () => new Promise((resolve, reject) => {
    //https://it.telkomuniversity.ac.id/web-scraping-pengertian-dan-fungsinya-dalam-pengambilan-data/
    //https://www.tokopedia.com/tokobaruofficial/monitor-gaming-24-viewsonic-vx2416-100hz-1ms-ips-free-sync-self-service-fb35c?extParam=ivf%3Dfalse&src=topads
    fetch('https://it.telkomuniversity.ac.id/web-scraping-pengertian-dan-fungsinya-dalam-pengambilan-data/', {
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36'
        }
    })
    .then(res => res.text())
    .then(result => {
        const $ = cheerio.load(result);
   
        const titleName = $('h1.col-md-8 col-sm-8');
        resolve(titleName)
    })
    .catch(err => reject(err))
});

(async () => {
    const detailPage = await getDetailPage();
    console.log(detailPage);
})();