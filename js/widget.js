"use strict";

const body = document.body;
const head = document.head;
let data = {
    "news": {
        "title": "Помощник Горбачёва объяснил отсутствие встреч экс-лидера СССР с родными",
        "author": "admin",
        "time": "13:53 01.07.2020",
        "url": "https://news.ru/society/pomoshnik-gorbachyova-obyasnil-otsutstvie-vstrech-eks-lidera-sssr-s-rodnymi/"
    },
    "ria": {
        "title": "Правительство продлило выдачу бесплатных лекарств больным COVID-19",
        "author": "риа новости",
        "time": "15:33 05.12.2020",
        "url": "https://ria.ru/20201205/lekarstva-1587815776.html"
    },
    "gazeta": {
        "title": "«Губернатор болел и будет болеть за «Зенит»",
        "author": "газета",
        "time": "15:44 14.08.2017",
        "url": "https://www.gazeta.ru/sport/2017/08/14/a_10831694.shtml"
    },
    "yandex": {
        "title": "Путин заявил, что Россия будет прирастать Арктикой",
        "author": "Яндекс",
        "time": "15:44 11.08.2017",
        "url": "https://yandex.ru/news/story/Putin_zayavil_chto_Rossiya_budet_prirastat_Arktikoj--1352735e960dfdbbb0f1bde2626b4277?lang=ru&rubric=index&wan=1&stid=xN87R7sQ35cVvoxqO7ye&t=1607173399&tt=true&persistent_id=121354977"
    },
    "bbc": {
        "title": "Joe Biden: Covid vaccination in US will not be mandatory",
        "author": "bbc",
        "time": "03:55 05.12.2020",
        "url": "https://www.bbc.com/news/world-us-canada-55193939"
    }
};


const newsBlock = document.createElement("div");
const style = document.createElement("link");
style.href = "https://github.com/Gevorg-galstyan/news-widget/blob/master/css/style.css";
style.rel = "stylesheet";

const newsListBlock = document.createElement("ul");
newsListBlock.className = "news__list";

const newsBlockInnerIcon = document.createElement("a");
newsBlockInnerIcon.href = '';

const newsBlockInnerIconImg = document.createElement("img");
newsBlockInnerIconImg.src = "img/news.png";


body.append(newsBlock);
head.append(style);
newsBlock.append(newsBlockInnerIcon);
newsBlock.append(newsListBlock);
newsBlockInnerIcon.append(newsBlockInnerIconImg);


newsBlock.className = "news__block";
newsBlockInnerIcon.className = "news__block-inner_icon";
newsBlockInnerIconImg.className = "news__block-inner_icon_img";

let news = [];
for (const [key, value] of Object.entries(data)) {
    news.push(value)
}

let listCount = document.createElement('span');
listCount.className = "list__count";
news.length ? listCount.textContent = news.length : 0;
newsBlockInnerIcon.append(listCount);

let nodes = news.map(news => {
    let li = document.createElement('li');
    li.className = "news__list_item";


    const newsTitle = document.createElement("h3");
    news.title ? newsTitle.textContent = news.title : '';
    newsTitle.className = "news__title";

    const newsAuthorMore = document.createElement("div");
    newsAuthorMore.className = "news__author-more";

    const newsMore = document.createElement("a");
    news.url ? newsMore.href = news.url : '';
    newsMore.target = "_blank";
    newsMore.className = "news__more";
    newsMore.textContent = "подробнее";

    const newsAuthor = document.createElement("span");
    news.author ? newsAuthor.textContent = "Автор: " + news.author : "";
    newsAuthor.className = "news__author";

    newsAuthorMore.append(newsAuthor);
    newsAuthorMore.append(newsMore);

    const newsLeftBlock = document.createElement("div");
    newsLeftBlock.append(newsTitle);
    newsLeftBlock.append(newsAuthorMore);
    newsLeftBlock.className = "news__info";


    let newsDate = document.createElement("div");
    newsDate.className = "news__date-time";
    let timeSplit = news.time.split(' ');
    const newsTime = document.createElement("span");
    newsTime.className = 'news__time';
    const newsDateNum = document.createElement("span");
    const newsReady = document.createElement("span");
    newsReady.className = 'news__ready';
    newsDateNum.className = 'news__date';
    newsDate.append(newsTime);
    newsDate.append(newsDateNum);
    newsDate.append(newsReady);
    newsTime.textContent = timeSplit[0];
    newsDateNum.textContent = timeSplit[1];


    const newsuri = document.createElement("a");
    news.url ? newsuri.href = news.url : '';
    newsuri.target = "_blank";
    newsuri.className = "news__url";
    newsuri.append(newsDate);
    newsuri.append(newsLeftBlock);

    li.append(newsuri);
    return li;

});

newsListBlock.append(...nodes);


document.getElementsByClassName('news__block-inner_icon')[0].addEventListener("click", function (e) {
    e.preventDefault();
    if(this.classList.contains('active')) {
        this.classList.remove('active');
        document.getElementsByClassName('news__block')[0].classList.remove('active')
    }else{
        this.classList.add('active');
        document.getElementsByClassName('news__block')[0].classList.add('active')
    }
});

const els = document.getElementsByClassName("news__url");
Array.prototype.forEach.call(els, elem => {
    elem.addEventListener("click", function () {
        let child = this.children;
        let childReady = child[0].children;
        childReady[2].textContent = "Прочитанно";
        childReady[2].classList.add('active')
    });
});