let currentIndex = 0;
let sentTimes = 0;
const itemsContainer = document.querySelector(".items");
let itemDivs;
const backwardButton = document.querySelector("button[onclick='backward()']");
const forwardButton = document.querySelector("button[onclick='foward()']");
const current = document.querySelector(".current");

const nowYear = new Date().getFullYear();

const a = () => {
    document.querySelector(".fei").classList.toggle("on");
}

function backward() {
    if (currentIndex > 0) {
        currentIndex--;
        scrollToCurrentIndex();
    }
}

function foward() {
    if (currentIndex < itemDivs.length) {
        currentIndex++;
        scrollToCurrentIndex();
    }
}
const hideButton = () => {
    current.innerText = currentIndex < 12 ? `${currentIndex + 1}/12` : "";
    if (currentIndex === 0) backwardButton.style.opacity = "0";
    else backwardButton.style.opacity = "1";
    if (currentIndex === itemDivs.length - 1) forwardButton.style.opacity = "0";
    else {
        forwardButton.style.opacity = "1";
        forwardButton.disabled = !(document.getElementById("b" + (11 - currentIndex) + "a").classList.contains("selected") || document.getElementById("b" + (11 - currentIndex) + "b").classList.contains("selected"))
    }
}
function scrollToCurrentIndex() {
    const itemWidth = itemDivs[currentIndex].offsetWidth;
    const scrollPosition = itemWidth * currentIndex;
    itemsContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
    });
    hideButton();
}

itemsContainer.addEventListener("scroll", function () {
    currentIndex = Math.round(itemsContainer.scrollLeft / itemDivs[0].offsetWidth);
    hideButton();
});

const questions = {
    "你發現了一片看似是外星生物的棲息地，它們看起來像是橙色的蘑菇，你會...": [
        "當作火鍋料開始煮火鍋。",
        "把它們帶回地球，試圖在市場上賣掉它們。", 0],
    "你喜歡在星球上建立基地時，更傾向於...": [
        "選擇一個已經有些許生命跡象的星球，並試圖與當地生物和諧相處。",
        "挑選一個完全無生命的星球，從零開始建造一個全新的生態系統。", 1],
    "你在一座星球上遇到了一片看起來像巨大水果的植物...": [
        "大膽嘗試吃一小口，看看味道如何。",
        "拿出西瓜和西瓜刀開始切西瓜。", 2],
    "你遇到了一個看似是外星生物的骷髏，你會...": [
        "把吃剩的雞腿骨裝在他身上。",
        "穿上骷髏裝融入他們", 3],
    "你發現了一個看似是外星生物的雕像，它看起來像是一個擁有五個頭的怪物，你會...": [
        "忍不住摸一摸，看看它的材質是什麼。。",
        "猜測你是不是走錯路了，開始用電話懷疑地給自己打電話。", 4],
    "你遇到了一群穿著外星裝束的生物，你會...": [
        "馬上加入他們，並且想辦法讓自己盡興地跳舞。",
        "開始大聲唱起國歌。", 5],
    "當你在星球探索中遇到一個會唱歌的外星生物時，它會唱...": [
        "一首關於宇宙大爆炸的搖滾樂曲。",
        "一首關於宇宙中的蝙蝠和鯨魚的流行歌曲。", 6],
    "你在發現了一個看似是外星生物的食物，它們看起來像是...": [
        "彩虹糖球，每顆都散發著奇妙的閃光。",
        "四維漩渦烤麵包，每片都帶著微妙的時空味道。", 7],
    "當你在遇到一個會說笑話的外星生物時，它告訴你一個關於...": [
        "一隻外星貓咪和一個行星共舞的笑話。",
        "一個穿越時空去參加恐龍派對的笑話。", 8],
    "你看到一個外星生物正在施展某種儀式，你會...": [
        "覺得是假的，想往他臉上打一拳。",
        "覺得自己是不是遇到瘋子，報警處理。", 9],
    "你發現了一群外星生物在制作食物，它們的廚房看起來像是...": [
        "一個巧克力工廠，到處充滿了濃郁的可可香氣。",
        "跟我家廚房差不多。", 10],
    "你在發現了一個看似是外星生物的建築，它看起來像是...": [
        "一座由彩色能量線構成的樹屋，散發著幸福的感覺。",
        "一座水晶迷宮，每一個角落都充滿了迷幻的氛圍。", 11],
    "你發現了一個看似是外星生物的雕像，它看起來像是...": [
        "一個八頭身穿星際泳衣的雕像，手持太空香蕉。",
        "一個五色斑斕的六臂生物，手中握著一束閃爍的銀河星光。", 12],
}

const leftElement = document.getElementById("left");

const start = () => {
    document.getElementById("start").classList.add("too");
    const ahhhh = document.querySelector(".ahhhh");
    const keysArray = Object.keys(questions);
    const selectedKeys = [];
    while (selectedKeys.length < 12) {
        const randomIndex = getRandomIndex(keysArray.length)
        const randomKey = keysArray[randomIndex];
        if (!selectedKeys.includes(randomKey)) selectedKeys.push(randomKey);
    }
    for (let i = 0; i < selectedKeys.length; i++) {
        var divElement = document.createElement("div");
        divElement.innerHTML = `<h4>${selectedKeys[i]}</h4>
        <button id="b${i}a" onclick="select(${i}, 1)" class="q${questions[selectedKeys[i]][2]}">${questions[selectedKeys[i]][0]}</button><button id="b${i}b" onclick="select(${i},0)">${questions[selectedKeys[i]][1]}</button>`
        leftElement.insertAdjacentElement("afterend", divElement);
    }
    itemDivs = document.querySelectorAll(".items div");
    const randomIndex1 = getRandomIndex(itemDivs.length - 1);
    let randomIndex2 = getRandomIndex(itemDivs.length - 1);
    let randomIndex3 = getRandomIndex(itemDivs.length - 1);
    while (randomIndex2 === randomIndex1) {
        randomIndex2 = getRandomIndex(itemDivs.length - 1);
    }
    while (randomIndex3 === randomIndex2) {
        randomIndex3 = getRandomIndex(itemDivs.length - 1);
    }
    itemDivs[randomIndex1].innerHTML = `<h4>在星際探索中，你更傾向於...</h4><button class="what" id="b${11 - randomIndex1}a" onclick="select(${11 - randomIndex1}, 1)" class="q13">加入一群熱情洋溢的外星探險家，與他們一起探索新的星球。</button><button id="b${11 - randomIndex1}b" onclick="select(${11 - randomIndex1},0)">尋找一個神秘的星球角落，靜靜觀察星際生物的行為。</button>`;
    itemDivs[randomIndex2].innerHTML = `<h4>當你需要做出決定時，你更多地依靠...</h4><button class="the" id="b${11 - randomIndex2}a" onclick="select(${11 - randomIndex2}, 1)" class="q14">你內心的星際直覺，相信直覺會是你在未知星球上探索的最佳指南。</button><button id="b${11 - randomIndex2}b" onclick="select(${11 - randomIndex2},0)">你的星際智慧和邏輯推理，冷靜思考會是你做出正確決策的關鍵。</button>`;
    itemDivs[randomIndex3].innerHTML = `<h4>在旅行的過程中，你更傾向於...</h4><button class="type" id="b${11 - randomIndex3}a" onclick="select(${11 - randomIndex3}, 1)" class="q15">通過觀察星球細節，與奇異的外星生物互動，找到解決方案，確保探索的順利進行。</button><button id="b${11 - randomIndex3}b" onclick="select(${11 - randomIndex3},0)">夢想未來的星際探索領域，通過創造性思維和想象力克服挑戰，打開星際探索的新篇章。</button>`;
    const randomDiv2 = itemDivs[randomIndex2];

    scrollToCurrentIndex();
    ahhhh.innerText = "."
    setTimeout(function () {
        ahhhh.innerText = ".."
    }, 1000);
    setTimeout(function () {
        ahhhh.innerText = "..."
    }, 1500);
    setTimeout(function () {
        document.getElementById("start").classList.remove("too");
        document.getElementById("start").classList.add("started");
    }, 2000);
}

const select = (e, b) => {
    document.getElementById(`b${e}a`).classList.toggle("selected", b);
    document.getElementById(`b${e}b`).classList.toggle("selected", !b);
    foward()
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}
let user = "";
const resultPage = document.getElementById("result");
const sendTo = (url) => {
    var delay = 0;
    sentTimes++;
    if (sentTimes === 1) {
        resultPage.innerHTML = `<h4 class="loading">分析中<br>太有意思了</h4>`;
    }
    else if (sentTimes > 2) {
        resultPage.innerHTML = `<h4 class="loading">同時太多人了，5秒後重試第${sentTimes}次</h4>`;
        delay = 5000;
    }
    console.log(delay);
    setTimeout(function () {
        resultPage.innerHTML = `<h4 class="loading">分析中</h4>`;
        var domain = sentTimes > 1 ? "https://script.google.com/macros/s/AKfycbzCkfkvk9Dq4E1-OXq00t3mQmtD4KaXtvSyo8wNSAkYEVZXSzbYoHxP9ZrkFLzceSd8/exec?" : "https://script.google.com/macros/s/AKfycbzCkfkvk9Dq4E1-OXq00t3mQmtD4KaXtvSyo8wNSAkYEVZXSzbYoHxP9ZrkFLzceSd8/exec?";
        fetch(domain + url)
            .then(response => response.json())
            .then(response => {
                var text = response.message;
                resultPage.innerHTML = `<div class="wrap"><img id="image" src="image/${text}.webp" alt="你是${text}">
            <canvas id="canvas"></canvas><div class="container"><a id="download-button"></a><p id="download-text">長按以下載圖片</p><h2>你覺得有多準</h2>
                <input type="range" id="rangeInput" min="0" max="10" step="1" value="10">
                <span id="output">10</span>
                <button onclick="feedback()" id="feedback">提交</button><a class="credit">© ${nowYear} 星際探索</a></div></div>`;
                const image = document.getElementById("image");
                const canvas = document.getElementById("canvas");
                var finished = false;
                image.onload = function () {
                    if (finished) return;
                    finished = true;
                    const ctx = canvas.getContext("2d");
                    canvas.width = 1080;
                    canvas.height = 1920;
                    ctx.drawImage(image, 0, 0, 1080, 1920);
                    ctx.font = `bold 70px system-ui`;
                    ctx.fillStyle = "#fff";
                    ctx.fillText(user, 60, 390);
                    const imageWithText = new Image();
                    imageWithText.src = canvas.toDataURL("image/png");
                    image.src = imageWithText.src;
                    document.querySelector(".container").style.display = "flex";
                    if (!/(iPhone|iPad)/.test(navigator.userAgent)) {
                        const downloadLink = document.getElementById("download-button");
                        downloadLink.href = imageWithText.src;
                        downloadLink.download = user + "的星際探索.png";
                        downloadLink.innerText = "下載圖片";
                        document.getElementById("download-text").innerText = navigator.userAgent.includes("Win") ? "亦可右鍵下載圖片" : "亦可長按下載圖片";
                        document.getElementById("download-text").classList.add("small");
                        const rangeInput = document.getElementById('rangeInput');
                        const output = document.getElementById('output');
                    } else document.getElementById("download-button").style.display = "none";
                    rangeInput.addEventListener('input', function () {
                        output.textContent = rangeInput.value;
                    });
                    rangeInput.addEventListener('touchmove', function () {
                        output.textContent = rangeInput.value;
                    });
                }
            })
            .catch(function (error) {
                sendTo(url);
                console.warn(error)
            });
    }, delay)
}
const end = () => {
    user = document.getElementById("name").value;
    if (user === "") {
        alert("至少取個名字吧?");
        return;
    }
    let allAns = [];
    resultPage.innerHTML = `<h4 class="loading">分析中</h4>`;
    document.getElementById("start").classList.add("end");
    document.getElementById("start").classList.remove("started");
    const what = 0 + document.querySelector(".what").classList.contains("selected");
    const the = 0 + document.querySelector(".the").classList.contains("selected");
    const type = 0 + document.querySelector(".type").classList.contains("selected");
    let a = 0;
    var pass = "okay";
    var desiredClass;
    for (let i = 0; i < 12; i++) {
        var aList = document.getElementById(`b${i}a`).classList;
        for (var ii = 0; ii < aList.length; ii++) {
            if (aList[ii].startsWith('q')) {
                desiredClass = aList[ii].slice(1);
                break;
            }
        }
        if (aList.contains("selected")) {
            a++;
            allAns[desiredClass] = "A";
        }
        else {
            allAns[desiredClass] = "B";
            if (!document.getElementById(`b${i}b`).classList.contains("selected")) pass = i;
        }
    }
    if (pass !== "okay") {
        alert(`請回答完第${12 - pass}題`);
        document.getElementById("start").classList.remove("end");
        document.getElementById("start").classList.add("started");
        return;
    }
    console.log(allAns);
    if (user == "hexx") document.querySelector(".fei").classList.add("on");
    let url = `name=${user}&userAgent=${navigator.userAgent}&what=${what}&the=${the}&type=${type}&a=${a}&allAns=${allAns}`;
    sendTo(url);
}

const feedback = () => {
    var feedback = document.getElementById("feedback");
    feedback.innerText = "提交中";
    feedback.disabled = true;
    const url = `https://script.google.com/macros/s/AKfycbzCkfkvk9Dq4E1-OXq00t3mQmtD4KaXtvSyo8wNSAkYEVZXSzbYoHxP9ZrkFLzceSd8/exec?mode=score&score=${document.getElementById("rangeInput").value}&name=${user}&userAgent=${navigator.userAgent}`;
    fetch(url)
        .then(response => response.json())
        .then(response => {
            feedback.innerText = "提交成功，感謝您的參與";
        })
        .catch(function (error) {
            alert("錯誤，請再試一次: " + error)
            feedback.disabled = false;
            feedback.innerText = "提交";
        });
}

if (Math.random() < 1 / 500) {
    document.querySelector(".fei").classList.add("on");
} else {
    console.log("運氣不是很好喔");
}

document.getElementById("name").addEventListener("input", function () {
    var full = this.value.match(/[^\x00-\x70]/g);
    if (this.value.length + full.length > 12) this.value = this.value.slice(0, this.value.length - 1);
})
