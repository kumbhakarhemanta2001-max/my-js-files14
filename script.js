var qData = [
  { q: "ভারত–দক্ষিণ কোরিয়া উচ্চ পর্যায়ের বৈঠক কোথায় অনুষ্ঠিত হয়?", a: "নিউ দিল্লি", opts: ["সিউল", "টোকিও", "নিউ দিল্লি", "মুম্বাই"] },
  { q: "ভারত–দক্ষিণ কোরিয়া বৈঠকে কতটি গুরুত্বপূর্ণ ফলাফল ঘোষণা হয়?", a: "25", opts: ["10", "15", "20", "25"] },
  { q: "Bulgaria-র 2026 নির্বাচনে কী ফলাফল দেখা যায়?", a: "স্পষ্ট সংখ্যাগরিষ্ঠতা", opts: ["ঝুলন্ত সংসদ", "সামরিক শাসন", "স্পষ্ট সংখ্যাগরিষ্ঠতা", "নির্বাচন বাতিল"] },
  { q: "Bulgaria-র নির্বাচনের প্রধান গুরুত্ব কী?", a: "রাজনৈতিক স্থিতিশীলতা", opts: ["অর্থনৈতিক উন্নতি", "রাজনৈতিক স্থিতিশীলতা", "যুদ্ধ", "প্রযুক্তি উন্নয়ন"] },
  { q: "Samriddh Gram Initiative কোন পুরস্কারের জন্য মনোনীত হয়েছে?", a: "WSIS Prizes 2026", opts: ["Nobel Prize", "WSIS Prizes 2026", "Ramon Magsaysay", "Bharat Ratna"] },
  { q: "Samriddh Gram Initiative-এর উদ্দেশ্য কী?", a: "ডিজিটাল গ্রামীণ উন্নয়ন", opts: ["কৃষি উন্নয়ন", "ডিজিটাল গ্রামীণ উন্নয়ন", "শিল্প উন্নয়ন", "প্রতিরক্ষা উন্নয়ন"] },
  { q: "National Civil Services Day কবে পালিত হয়?", a: "21 এপ্রিল", opts: ["20 এপ্রিল", "21 এপ্রিল", "22 এপ্রিল", "23 এপ্রিল"] },
  { q: "এই দিনটি কাকে সম্মান জানাতে পালিত হয়?", a: "সিভিল সার্ভেন্ট", opts: ["বিজ্ঞানী", "শিক্ষক", "সিভিল সার্ভেন্ট", "কৃষক"] },
  { q: "World Creativity and Innovation Day কে ঘোষণা করেছে?", a: "United Nations", opts: ["WHO", "UNESCO", "United Nations", "IMF"] },
  { q: "WCID-এর মূল উদ্দেশ্য কী?", a: "সৃজনশীলতা উৎসাহিত করা", opts: ["যুদ্ধ প্রতিরোধ", "সৃজনশীলতা উৎসাহিত করা", "শিক্ষা বৃদ্ধি", "পরিবেশ রক্ষা"] },

  { q: "BSE Housing Finance Index কে চালু করেছে?", a: "BSE", opts: ["RBI", "NSE", "BSE", "SEBI"] },
  { q: "এই সূচক কোন সেক্টরের সাথে সম্পর্কিত?", a: "Housing Finance", opts: ["IT", "Banking", "Housing Finance", "Agriculture"] },
  { q: "Jamun ফলের বৈজ্ঞানিক নাম কী?", a: "Syzygium cumini", opts: ["Mangifera indica", "Syzygium cumini", "Musa acuminata", "Citrus limon"] },
  { q: "Jamun-এর উৎপত্তি কোথায় বলে নতুন গবেষণায় জানা গেছে?", a: "India", opts: ["Australia", "Africa", "India", "Europe"] },
  { q: "AI-based ‘Prajna’ সিস্টেম কাকে দেওয়া হয়েছে?", a: "Home Ministry", opts: ["Defence Ministry", "Home Ministry", "Finance Ministry", "Education Ministry"] },

  { q: "Prajna সিস্টেমের মূল উদ্দেশ্য কী?", a: "অভ্যন্তরীণ নিরাপত্তা বৃদ্ধি", opts: ["শিক্ষা উন্নয়ন", "অভ্যন্তরীণ নিরাপত্তা বৃদ্ধি", "কৃষি উন্নয়ন", "স্বাস্থ্য উন্নয়ন"] },
  { q: "Goldman Environmental Prize 2026-এর বিশেষ বৈশিষ্ট্য কী?", a: "শুধুমাত্র নারী বিজয়ী", opts: ["প্রথম পুরুষ বিজয়ী", "শুধুমাত্র নারী বিজয়ী", "শুধুমাত্র এশিয়া", "শুধুমাত্র বিজ্ঞানী"] },
  { q: "এই পুরস্কার কোন ক্ষেত্রে দেওয়া হয়?", a: "পরিবেশ", opts: ["সাহিত্য", "বিজ্ঞান", "পরিবেশ", "ক্রীড়া"] },
  { q: "ISSF Junior World Cup 2026 কোথায় অনুষ্ঠিত হচ্ছে?", a: "Cairo", opts: ["Delhi", "Paris", "Cairo", "London"] },
  { q: "ISSF-এর পূর্ণরূপ কী?", a: "International Shooting Sport Federation", opts: ["International Sports Shooting Federation", "International Shooting Sport Federation", "Indian Shooting Sport Federation", "International Sports Federation"] },

  { q: "Laureus World Sports Awards 2026 কোথায় অনুষ্ঠিত হয়?", a: "Madrid", opts: ["Paris", "Madrid", "Rome", "Berlin"] },
  { q: "Laureus Awards-এর উদ্দেশ্য কী?", a: "ক্রীড়াবিদদের সম্মান", opts: ["বিজ্ঞানীদের সম্মান", "শিক্ষকদের সম্মান", "ক্রীড়াবিদদের সম্মান", "শিল্পীদের সম্মান"] },
  { q: "OmegaBall উদ্ভাবন করেছে কোন প্রতিষ্ঠান?", a: "IIT Madras", opts: ["IIT Delhi", "IIT Bombay", "IIT Madras", "IIT Kanpur"] },
  { q: "OmegaBall-এর বিশেষ বৈশিষ্ট্য কী?", a: "৩ দলের খেলা", opts: ["২ দলের খেলা", "৩ দলের খেলা", "৫ দলের খেলা", "একক খেলা"] },
  { q: "OmegaBall কোন ক্ষেত্রে উদ্ভাবন?", a: "ক্রীড়া", opts: ["বিজ্ঞান", "ক্রীড়া", "কৃষি", "স্বাস্থ্য"] },

  { q: "India–South Korea বৈঠক কোন ধরনের ছিল?", a: "উচ্চ পর্যায়ের", opts: ["সামরিক", "বাণিজ্য", "উচ্চ পর্যায়ের", "সাংস্কৃতিক"] },
  { q: "Bulgaria কোন মহাদেশে অবস্থিত?", a: "Europe", opts: ["Asia", "Europe", "Africa", "America"] },
  { q: "WSIS-এর সাথে কোন বিষয়টি সম্পর্কিত?", a: "Digital Development", opts: ["Sports", "Digital Development", "Defence", "Agriculture"] },
  { q: "Jamun গবেষণার গুরুত্ব কী?", a: "জীববৈচিত্র্য", opts: ["যুদ্ধ", "জীববৈচিত্র্য", "রাজনীতি", "অর্থনীতি"] },
  { q: "Prajna সিস্টেমে কোন প্রযুক্তি ব্যবহার করা হয়েছে?", a: "AI", opts: ["Blockchain", "AI", "IoT", "Robotics"] }
];
var curQ = 0, userScore = 0, qTimer, secLeft = 15;

function beginQuizNow() {
    document.getElementById("start-area").style.display = "none";
    document.getElementById("quiz-main-container").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    if (curQ >= qData.length) { showResult(); return; }
    secLeft = 15;
    document.getElementById("timer-box").innerHTML = secLeft;
    document.getElementById("quiz-progress").innerHTML = "প্রশ্ন: " + (curQ + 1) + "/" + qData.length;
    document.getElementById("main-q-text").innerHTML = qData[curQ].q;
    
    var optsHtml = "";
    qData[curQ].opts.forEach(opt => {
        optsHtml += `<button class="opt-btn" onclick="checkAnswer(this, '${opt}')">${opt}</button>`;
    });
    document.getElementById("main-opt-container").innerHTML = optsHtml;
    startTimer();
}

function startTimer() {
    clearInterval(qTimer);
    qTimer = setInterval(() => {
        secLeft--;
        document.getElementById("timer-box").innerHTML = secLeft;
        if (secLeft <= 0) { 
            clearInterval(qTimer);
            checkAnswer(null, ""); 
        }
    }, 1000);
}

function checkAnswer(btn, selected) {
    clearInterval(qTimer);
    var correct = qData[curQ].a.trim();
    var btns = document.getElementsByClassName("opt-btn");
    
    // সঠিক উত্তর হাইলাইট করা
    for (let b of btns) {
        b.disabled = true;
        if (b.innerText.trim() === correct) {
            b.classList.add("correct-ans");
        }
    }

    
    if (selected.trim() === correct) {
        userScore++;
        document.getElementById("score-val").innerText = userScore;
    } else if (btn) {
        btn.classList.add("wrong-ans");
    }

    curQ++;
    setTimeout(loadQuestion, 1500);
}

function showResult() {
    document.getElementById("question-area").style.display = "none";
    document.getElementById("result-area").style.display = "block";
    
    var finalScore = userScore;
    var totalQ = qData.length;
    var feedback = "";
    var color = "";

    
    if (finalScore === totalQ) {
        feedback = "Outstanding! 🌟";
        color = "#388e3c";
    } else if (finalScore >= totalQ * 0.8) {
        feedback = "Very Good! 👏";
        color = "#0d47a1";
    } else if (finalScore >= totalQ * 0.5) {
        feedback = "Good! 👍";
        color = "#f57c00";
    } else {
        feedback = "Need More Practice! 📚";
        color = "#d32f2f";
    }

    document.getElementById("res-score").innerHTML = `
        <div style="color: ${color}; font-weight: bold; margin-bottom: 10px;">${feedback}</div>
        <div style="font-size: 2.5rem;">${finalScore} / ${totalQ}</div>
    `;
}