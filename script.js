/* =====================================================
   HOWSORCS — MAIN JAVASCRIPT
   SORTING HAT + IDC EDITOR
   ===================================================== */


/* =====================================================
   SORTING HAT — QUESTION BANK
   30 QUESTIONS AVAILABLE, ONLY 15 RANDOMLY SELECTED
   ===================================================== */

const questions = [

    {
        question: "Kamu tiba lebih awal di sebuah tempat yang belum pernah kamu kunjungi. Apa yang pertama kali menarik perhatianmu?",
        answers: [
            ["Bagian yang paling menantang untuk dijelajahi.", "aurelion"],
            ["Detail-detail unik yang membuatku penasaran.", "corvane"],
            ["Orang-orang dan suasana di sekitarku.", "fidelis"],
            ["Kesempatan atau kemungkinan yang bisa kutemukan di sana.", "vesperyn"]
        ]
    },

    {
        question: "Dalam sebuah proyek kelompok, hal apa yang menurutmu paling penting?",
        answers: [
            ["Berani mengambil tindakan ketika dibutuhkan.", "aurelion"],
            ["Memiliki rencana dan ide yang matang.", "corvane"],
            ["Memastikan semua anggota merasa dilibatkan.", "fidelis"],
            ["Menentukan strategi agar tujuan tercapai.", "vesperyn"]
        ]
    },

    {
        question: "Jika kamu diberi satu hari tanpa aturan, kamu lebih tertarik untuk...",
        answers: [
            ["Melakukan sesuatu yang belum pernah berani kulakukan.", "aurelion"],
            ["Mencoba mempelajari hal baru sepanjang hari.", "corvane"],
            ["Menghabiskan waktu bersama orang-orang terdekat.", "fidelis"],
            ["Mengejar sesuatu yang selama ini kuinginkan.", "vesperyn"]
        ]
    },

    {
        question: "Saat menghadapi situasi yang tidak pasti, kamu biasanya...",
        answers: [
            ["Mengikuti insting dan bergerak maju.", "aurelion"],
            ["Mengumpulkan informasi terlebih dahulu.", "corvane"],
            ["Mencari orang yang bisa kupercaya.", "fidelis"],
            ["Mencari posisi terbaik sebelum mengambil langkah.", "vesperyn"]
        ]
    },

    {
        question: "Seseorang meminta bantuanmu di saat kamu sedang sibuk. Apa yang paling mungkin kamu lakukan?",
        answers: [
            ["Langsung membantu jika situasinya mendesak.", "aurelion"],
            ["Mencari solusi paling efektif untuk masalahnya.", "corvane"],
            ["Meluangkan waktu karena aku tidak ingin mengecewakannya.", "fidelis"],
            ["Membantu jika aku bisa mengatur semuanya dengan baik.", "vesperyn"]
        ]
    },

    {
        question: "Mana yang lebih membuatmu puas setelah menyelesaikan sesuatu?",
        answers: [
            ["Aku berhasil melewati tantangan yang sulit.", "aurelion"],
            ["Aku akhirnya memahami sesuatu yang rumit.", "corvane"],
            ["Aku tahu hasilnya membawa manfaat bagi orang lain.", "fidelis"],
            ["Aku berhasil mencapai tujuan yang sudah kutetapkan.", "vesperyn"]
        ]
    },

    {
        question: "Jika menemukan pintu misterius yang tidak diketahui siapa pun, kamu akan...",
        answers: [
            ["Membukanya dan melihat apa yang ada di baliknya.", "aurelion"],
            ["Mencari tahu dulu bagaimana pintu itu bekerja.", "corvane"],
            ["Mengajak seseorang agar tidak menjelajah sendirian.", "fidelis"],
            ["Memastikan apa keuntungan atau risiko di baliknya.", "vesperyn"]
        ]
    },

    {
        question: "Saat seseorang meragukan kemampuanmu, reaksimu biasanya...",
        answers: [
            ["Membuktikan bahwa aku bisa.", "aurelion"],
            ["Menunjukkan hasil lewat kemampuan dan pengetahuan.", "corvane"],
            ["Tidak terlalu memikirkannya selama orang terdekatku percaya padaku.", "fidelis"],
            ["Menjadikannya motivasi untuk mencapai sesuatu yang lebih besar.", "vesperyn"]
        ]
    },

    {
        question: "Dalam sebuah cerita petualangan, kamu paling tertarik menjadi...",
        answers: [
            ["Orang yang maju menghadapi bahaya.", "aurelion"],
            ["Pemecah teka-teki dan pencari rahasia.", "corvane"],
            ["Sahabat yang selalu menjaga kelompok tetap bersama.", "fidelis"],
            ["Perencana yang menentukan langkah berikutnya.", "vesperyn"]
        ]
    },

    {
        question: "Kamu mendapat kabar bahwa rencanamu harus berubah mendadak. Apa yang kamu lakukan?",
        answers: [
            ["Menyesuaikan diri dan langsung mengambil tindakan.", "aurelion"],
            ["Mencari tahu penyebab perubahan sebelum menentukan langkah.", "corvane"],
            ["Memastikan perubahan itu tidak menyulitkan orang lain.", "fidelis"],
            ["Membuat rencana baru yang tetap mengarah pada tujuan.", "vesperyn"]
        ]
    },

    {
        question: "Teman-temanmu sedang berdebat dan tidak menemukan jalan keluar. Kamu cenderung...",
        answers: [
            ["Mengatakan dengan jujur apa yang menurutku harus dilakukan.", "aurelion"],
            ["Membantu melihat masalah dari sudut pandang lain.", "corvane"],
            ["Mencoba menenangkan semua orang.", "fidelis"],
            ["Mencari keputusan yang paling menguntungkan bagi kelompok.", "vesperyn"]
        ]
    },

    {
        question: "Apa yang paling mungkin membuatmu tetap berusaha ketika sesuatu terasa sulit?",
        answers: [
            ["Keinginan untuk tidak mundur.", "aurelion"],
            ["Keinginan untuk menemukan jawabannya.", "corvane"],
            ["Orang-orang yang mengandalkanku.", "fidelis"],
            ["Bayangan tentang tujuan yang ingin kucapai.", "vesperyn"]
        ]
    },

    {
        question: "Jika kamu memiliki sebuah kemampuan langka, kamu akan paling ingin...",
        answers: [
            ["Menggunakannya saat seseorang membutuhkan perlindungan.", "aurelion"],
            ["Memahami sepenuhnya bagaimana kemampuan itu bekerja.", "corvane"],
            ["Menggunakannya untuk membantu orang-orang di sekitarku.", "fidelis"],
            ["Mengembangkannya menjadi sesuatu yang bisa membawaku lebih jauh.", "vesperyn"]
        ]
    },

    {
        question: "Kamu diberi tugas yang sangat sulit. Langkah pertamamu adalah...",
        answers: [
            ["Mulai saja dan hadapi tantangannya di sepanjang jalan.", "aurelion"],
            ["Membaca dan memahami semuanya terlebih dahulu.", "corvane"],
            ["Berdiskusi dengan orang yang bisa bekerja sama denganku.", "fidelis"],
            ["Menyusun strategi agar usahaku tidak sia-sia.", "vesperyn"]
        ]
    },

    {
        question: "Apa yang paling kamu perhatikan ketika bertemu orang baru?",
        answers: [
            ["Cara mereka membawa diri.", "aurelion"],
            ["Cara mereka berpikir dan berbicara.", "corvane"],
            ["Bagaimana mereka memperlakukan orang lain.", "fidelis"],
            ["Apa yang ingin mereka capai.", "vesperyn"]
        ]
    },

    {
        question: "Jika harus memilih tempat untuk tinggal, kamu memilih tempat yang...",
        answers: [
            ["Penuh tantangan dan petualangan.", "aurelion"],
            ["Memiliki banyak hal untuk dipelajari.", "corvane"],
            ["Terasa hangat dan nyaman.", "fidelis"],
            ["Memberikan banyak peluang untuk berkembang.", "vesperyn"]
        ]
    },

    {
        question: "Ketika kamu membuat kesalahan, kamu biasanya...",
        answers: [
            ["Mengakuinya dan mencoba memperbaikinya.", "aurelion"],
            ["Mencari tahu kenapa kesalahan itu terjadi.", "corvane"],
            ["Memikirkan dampaknya terhadap orang lain.", "fidelis"],
            ["Belajar darinya agar langkah berikutnya lebih baik.", "vesperyn"]
        ]
    },

    {
        question: "Apa yang paling membuat sebuah perjalanan terasa berharga?",
        answers: [
            ["Tantangan yang berhasil kulewati.", "aurelion"],
            ["Hal-hal baru yang kupelajari.", "corvane"],
            ["Orang-orang yang berbagi perjalanan denganku.", "fidelis"],
            ["Seberapa jauh perjalanan itu membawaku menuju tujuan.", "vesperyn"]
        ]
    },

    {
        question: "Jika kamu menemukan cara yang lebih mudah untuk mencapai tujuan, kamu...",
        answers: [
            ["Tetap memilih cara yang menurutku benar meski lebih sulit.", "aurelion"],
            ["Membandingkan kedua cara sebelum memilih.", "corvane"],
            ["Memilih cara yang paling aman bagi semua orang.", "fidelis"],
            ["Menggunakan cara yang paling efektif.", "vesperyn"]
        ]
    },

    {
        question: "Saat memiliki waktu luang, kamu lebih senang...",
        answers: [
            ["Mencoba aktivitas baru.", "aurelion"],
            ["Membaca, menonton, atau mempelajari sesuatu.", "corvane"],
            ["Mengobrol atau berkumpul bersama orang terdekat.", "fidelis"],
            ["Mengerjakan sesuatu yang bisa mengembangkan diriku.", "vesperyn"]
        ]
    },

    {
        question: "Kamu menemukan sebuah masalah yang belum pernah dialami orang lain. Kamu akan...",
        answers: [
            ["Menjadi orang pertama yang mencoba menyelesaikannya.", "aurelion"],
            ["Mencari pola dan kemungkinan penyebabnya.", "corvane"],
            ["Mencari cara agar tidak ada yang harus menghadapinya sendirian.", "fidelis"],
            ["Melihat masalah itu sebagai kesempatan untuk menemukan solusi baru.", "vesperyn"]
        ]
    },

    {
        question: "Jika harus memilih satu hal untuk diwariskan kepada orang lain, kamu memilih...",
        answers: [
            ["Keberanian untuk mencoba.", "aurelion"],
            ["Pengetahuan yang berguna.", "corvane"],
            ["Kenangan dan hubungan yang berarti.", "fidelis"],
            ["Semangat untuk mengejar impian.", "vesperyn"]
        ]
    },

    {
        question: "Ketika berada di tempat yang asing, kamu merasa paling nyaman jika...",
        answers: [
            ["Aku bisa bebas menjelajah.", "aurelion"],
            ["Aku memahami lingkungan di sekitarku.", "corvane"],
            ["Ada seseorang yang kukenal bersamaku.", "fidelis"],
            ["Aku tahu apa yang bisa kulakukan untuk menyesuaikan diri.", "vesperyn"]
        ]
    },

    {
        question: "Apa arti keberhasilan bagimu?",
        answers: [
            ["Berani melakukan sesuatu yang sebelumnya terasa mustahil.", "aurelion"],
            ["Berhasil berkembang dan memahami lebih banyak hal.", "corvane"],
            ["Mencapai sesuatu tanpa kehilangan orang-orang penting.", "fidelis"],
            ["Mewujudkan tujuan yang benar-benar kuinginkan.", "vesperyn"]
        ]
    },

    {
        question: "Jika kamu diberi kesempatan memimpin sesuatu, kamu akan...",
        answers: [
            ["Menjadi orang yang berani mengambil keputusan.", "aurelion"],
            ["Membawa ide dan arah yang jelas.", "corvane"],
            ["Memastikan semua orang merasa didengar.", "fidelis"],
            ["Mengatur langkah agar hasil terbaik bisa tercapai.", "vesperyn"]
        ]
    },

    {
        question: "Saat melihat kesempatan yang tidak datang dua kali, kamu...",
        answers: [
            ["Mengambilnya meskipun sedikit menakutkan.", "aurelion"],
            ["Memikirkan semua kemungkinan terlebih dahulu.", "corvane"],
            ["Mempertimbangkan apakah keputusan itu berdampak pada orang lain.", "fidelis"],
            ["Menilai bagaimana kesempatan itu bisa membawaku lebih dekat ke tujuan.", "vesperyn"]
        ]
    },

    {
        question: "Dalam sebuah kompetisi, hal yang paling penting bagimu adalah...",
        answers: [
            ["Memberikan usaha terbaik tanpa takut kalah.", "aurelion"],
            ["Memahami permainan dan menemukan cara terbaik untuk bermain.", "corvane"],
            ["Menjaga rasa hormat terhadap semua orang.", "fidelis"],
            ["Mencapai posisi terbaik yang bisa kuraih.", "vesperyn"]
        ]
    },

    {
        question: "Jika temanmu sedang kehilangan kepercayaan diri, kamu kemungkinan akan...",
        answers: [
            ["Menyemangatinya untuk berani mencoba lagi.", "aurelion"],
            ["Membantunya melihat kemampuan yang sebenarnya ia miliki.", "corvane"],
            ["Menemaninya dan mengingatkannya bahwa dia tidak sendirian.", "fidelis"],
            ["Membantunya membuat langkah baru untuk bangkit.", "vesperyn"]
        ]
    },

    {
        question: "Apa yang paling membuatmu tertarik pada sebuah misteri?",
        answers: [
            ["Tantangan untuk menghadapi hal yang tidak diketahui.", "aurelion"],
            ["Keinginan untuk menemukan jawabannya.", "corvane"],
            ["Cerita dan orang-orang yang terlibat di dalamnya.", "fidelis"],
            ["Kemungkinan menemukan sesuatu yang berharga.", "vesperyn"]
        ]
    },

    {
        question: "Ketika membayangkan masa depan, kamu lebih sering memikirkan...",
        answers: [
            ["Petualangan yang ingin kualami.", "aurelion"],
            ["Hal-hal yang ingin kupelajari.", "corvane"],
            ["Orang-orang yang ingin tetap bersamaku.", "fidelis"],
            ["Pencapaian yang ingin kuraih.", "vesperyn"]
        ]
    }

];


/* =====================================================
   QUIZ VARIABLES
   ===================================================== */

const QUESTIONS_TO_SHOW = 15;

let activeQuestions = [];

let currentQuestion = 0;

let scores = {
    aurelion: 0,
    corvane: 0,
    fidelis: 0,
    vesperyn: 0
};

let currentWinningHouse = "aurelion";


/* =====================================================
   HOUSE DATA
   ===================================================== */

const houseData = {

    aurelion: {
        name: "Aurelion",
        code: "AUR",
        motto: "Courage • Bravery • Determination",
        logo: "assets/logos/Aurelion.png",
        colors: ["#4a1010", "#8b2b2b", "#2a0606"],
        description:
            "You belong to Aurelion, the house of courage. You are not afraid to step forward when others hesitate."
    },

    corvane: {
        name: "Corvane",
        code: "COR",
        motto: "Wisdom • Intelligence • Curiosity",
        logo: "assets/logos/Corvane.png",
        colors: ["#0b2945", "#174d73", "#061522"],
        description:
            "You belong to Corvane, the house of wisdom. Your curiosity and sharp mind guide the way you see the world."
    },

    fidelis: {
        name: "Fidelis",
        code: "FID",
        motto: "Loyalty • Kindness • Dedication",
        logo: "assets/logos/Fidelis.png",
        colors: ["#7a5b12", "#b08b2c", "#3e2c05"],
        description:
            "You belong to Fidelis, the house of loyalty. You value trust, friendship, and the people who matter to you."
    },

    vesperyn: {
        name: "Vesperyn",
        code: "VES",
        motto: "Ambition • Cunning • Resourcefulness",
        logo: "assets/logos/Vesperyn.png",
        colors: ["#173f28", "#28633f", "#081c10"],
        description:
            "You belong to Vesperyn, the house of ambition. You know what you want and have the determination to find your own path."
    }

};


/* =====================================================
   SORTING ELEMENTS
   ===================================================== */

const startScreen = document.getElementById("start-screen");
const beginButton = document.getElementById("begin-btn");
const sortingResult = document.getElementById("sorting-result");
const music = document.getElementById("sorting-music");
const musicControl = document.getElementById("music-control");
const idcSection = document.getElementById("idc-editor");


/* =====================================================
   SHUFFLE QUESTIONS
   ===================================================== */

function shuffleArray(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(
            Math.random() * (i + 1)
        );

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];

    }

    return shuffled;

}


/* =====================================================
   START SORTING
   ===================================================== */

function startSorting() {

    currentQuestion = 0;

    scores = {
        aurelion: 0,
        corvane: 0,
        fidelis: 0,
        vesperyn: 0
    };

    activeQuestions =
        shuffleArray(questions)
            .slice(0, QUESTIONS_TO_SHOW);

    if (startScreen) {
        startScreen.style.display = "none";
    }

    if (sortingResult) {
        sortingResult.style.display = "block";
    }

    if (idcSection) {
        idcSection.classList.remove("show");
        idcSection.style.display = "none";
    }

    if (music) {

        music.play().catch(function() {

            console.log(
                "Music autoplay blocked by browser."
            );

        });

    }

    showQuestion();

}


/* =====================================================
   SHOW QUESTION
   ===================================================== */

function showQuestion() {

    if (!sortingResult) {
        return;
    }

    const question =
        activeQuestions[currentQuestion];

    if (!question) {
        showResult();
        return;
    }


    /* Acak urutan jawaban juga */

    const shuffledAnswers =
        shuffleArray(question.answers);


    sortingResult.innerHTML = `

        <div class="quiz-box">

            <p class="question-number">
                QUESTION ${currentQuestion + 1}
                OF ${QUESTIONS_TO_SHOW}
            </p>

            <h3>
                ${question.question}
            </h3>

            <div class="answer-container">

                ${shuffledAnswers.map(function(answer) {

                    return `
                        <button
                            type="button"
                            class="answer-button"
                            data-house="${answer[1]}"
                        >
                            ${answer[0]}
                        </button>
                    `;

                }).join("")}

            </div>

        </div>

    `;


    const answerButtons =
        sortingResult.querySelectorAll(
            ".answer-button"
        );


    answerButtons.forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                const house =
                    button.getAttribute("data-house");

                chooseAnswer(house);

            }
        );

    });

}


/* =====================================================
   CHOOSE ANSWER
   ===================================================== */

function chooseAnswer(house) {

    if (
        !Object.prototype.hasOwnProperty.call(
            scores,
            house
        )
    ) {
        return;
    }


    scores[house]++;

    currentQuestion++;


    if (
        currentQuestion <
        activeQuestions.length
    ) {
        showQuestion();
    } else {
        showResult();
    }

}


/* =====================================================
   GET WINNING HOUSE
   FAIR TIE BREAKER
   ===================================================== */

function getWinningHouse() {

    const highestScore =
        Math.max(...Object.values(scores));


    const tiedHouses =
        Object.keys(scores).filter(
            function(house) {

                return scores[house] === highestScore;

            }
        );


    /* Kalau seri, pilih secara random dari yang skornya seri */

    return tiedHouses[
        Math.floor(
            Math.random() * tiedHouses.length
        )
    ];

}


/* =====================================================
   SHOW RESULT
   ===================================================== */

function showResult() {

    if (!sortingResult) {
        return;
    }


    const winningHouse =
        getWinningHouse();


    currentWinningHouse =
        winningHouse;


    window.currentWinningHouse =
        winningHouse;


    const house =
        houseData[winningHouse];


    /* Buat ID baru untuk hasil sorting ini */

    studentId =
        createStudentId(winningHouse);


    drawIDC();


    sortingResult.innerHTML = `

        <div class="sorting-result-wrapper">

            <div class="sorting-label-box">

                <p class="sorting-label">
                    THE SORTING HAT HAS SPOKEN
                </p>

            </div>


            <img
                src="${house.logo}"
                alt="${house.name}"
                class="sorting-house-logo"
            >


            <h3>${house.name}</h3>


            <p class="house-motto">
                ${house.motto}
            </p>


            <p class="house-description">
                ${house.description}
            </p>


            <p class="destiny-text">
                ✦ YOUR JOURNEY BEGINS ✦
            </p>


            <button
                type="button"
                class="create-idc-button"
                id="create-idc-result"
            >
                CREATE YOUR IDC
            </button>

        </div>

    `;


    const createIdcResult =
        document.getElementById(
            "create-idc-result"
        );


    if (createIdcResult) {

        createIdcResult.addEventListener(
            "click",
            openIDC
        );

    }

}


/* =====================================================
   OPEN IDC
   ===================================================== */

function openIDC() {

    if (!idcSection) {
        return;
    }

    idcSection.classList.add("show");
    idcSection.style.display = "block";


    setTimeout(function() {

        idcSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* =====================================================
   BEGIN BUTTON
   ===================================================== */

if (beginButton) {
    beginButton.addEventListener(
        "click",
        startSorting
    );
}


/* =====================================================
   MUSIC CONTROL
   ===================================================== */

if (musicControl && music) {

    musicControl.addEventListener(
        "click",
        function() {

            if (music.paused) {

                music.play().catch(
                    function() {}
                );

                musicControl.textContent = "♫";

            } else {

                music.pause();

                musicControl.textContent = "🔇";

            }

        }
    );

}


/* =====================================================
   HOUSE TOGGLE
   ===================================================== */

function toggleHouse(house) {

    const allHouses =
        document.querySelectorAll(".house");


    allHouses.forEach(function(item) {

        if (item !== house) {
            item.classList.remove("active");
        }

    });


    house.classList.toggle("active");

}


/* =====================================================
   IDC ELEMENTS
   ===================================================== */

const idcCanvas =
    document.getElementById("idc-canvas");

const studentNameInput =
    document.getElementById("student-name");

const studentGenInput =
    document.getElementById("student-gen");

const studentPhotoInput =
    document.getElementById("student-photo");

const photoScaleInput =
    document.getElementById("photo-scale");

const resetPhotoButton =
    document.getElementById("reset-photo");

const downloadIdcButton =
    document.getElementById("download-idc");

const idcStatus =
    document.getElementById("idc-status");


/* =====================================================
   IDC VARIABLES
   ===================================================== */

let idcCtx = null;

let studentPhoto = null;

let photoLoaded = false;

let photoX = 185;

let photoY = 315;

let photoScale = 1;

let draggingPhoto = false;

let dragStartX = 0;

let dragStartY = 0;


/* Student ID dibuat sekali per hasil sorting */

let studentId =
    createStudentId("aurelion");


/* =====================================================
   CREATE STUDENT ID
   ===================================================== */

function createStudentId(house) {

    const houseCode =
        houseData[house]
            ? houseData[house].code
            : "STU";


    const randomNumber =
        Math.floor(
            1000 +
            Math.random() * 9000
        );


    return `HOWSORCS-${houseCode}-${randomNumber}`;

}


/* =====================================================
   INITIALIZE IDC
   ===================================================== */

function initializeIDC() {

    if (!idcCanvas) {
        return;
    }

    idcCtx =
        idcCanvas.getContext("2d");

    drawIDC();

}


/* =====================================================
   DRAW HOUSE BACKGROUND
   ===================================================== */

function drawCardBackground(selectedHouse) {

    if (!idcCtx || !idcCanvas) {
        return;
    }


    const ctx = idcCtx;
    const width = idcCanvas.width;
    const height = idcCanvas.height;

    const house =
        houseData[selectedHouse] ||
        houseData.aurelion;


    const gradient =
        ctx.createLinearGradient(
            0,
            0,
            width,
            height
        );


    gradient.addColorStop(
        0,
        house.colors[0]
    );

    gradient.addColorStop(
        0.5,
        house.colors[1]
    );

    gradient.addColorStop(
        1,
        house.colors[2]
    );


    ctx.fillStyle = gradient;

    ctx.fillRect(
        0,
        0,
        width,
        height
    );


    /* Borders */

    ctx.strokeStyle = "#d8b45c";
    ctx.lineWidth = 5;

    ctx.strokeRect(
        10,
        10,
        width - 20,
        height - 20
    );


    ctx.strokeStyle =
        "rgba(216,180,92,0.35)";

    ctx.lineWidth = 2;

    ctx.strokeRect(
        22,
        22,
        width - 44,
        height - 44
    );


    /* Decorative stars */

    ctx.fillStyle =
        "rgba(255,255,255,0.45)";


    const stars = [
        [60, 70],
        [860, 75],
        [800, 540],
        [100, 530],
        [700, 90],
        [250, 540],
        [500, 115]
    ];


    stars.forEach(function(star) {

        ctx.beginPath();

        ctx.arc(
            star[0],
            star[1],
            2,
            0,
            Math.PI * 2
        );

        ctx.fill();

    });

}


/* =====================================================
   DRAW IMAGE
   ===================================================== */

function drawImageContain(
    image,
    x,
    y,
    maxWidth,
    maxHeight,
    alpha = 1
) {

    if (!image || !image.complete) {
        return;
    }


    const ratio =
        Math.min(
            maxWidth / image.width,
            maxHeight / image.height
        );


    const width =
        image.width * ratio;

    const height =
        image.height * ratio;


    idcCtx.save();

    idcCtx.globalAlpha = alpha;

    idcCtx.drawImage(
        image,
        x,
        y,
        width,
        height
    );

    idcCtx.restore();

}


/* =====================================================
   LOAD IMAGE
   ===================================================== */

function loadImage(src) {

    return new Promise(function(resolve) {

        const image = new Image();

        image.onload =
            function() {
                resolve(image);
            };

        image.onerror =
            function() {
                resolve(null);
            };

        image.src = src;

    });

}


/* =====================================================
   DRAW IDC
   ===================================================== */

async function drawIDC() {

    if (!idcCtx || !idcCanvas) {
        return;
    }


    const ctx = idcCtx;

    const selectedHouse =
        currentWinningHouse ||
        "aurelion";

    const selectedHouseData =
        houseData[selectedHouse] ||
        houseData.aurelion;


    ctx.clearRect(
        0,
        0,
        idcCanvas.width,
        idcCanvas.height
    );


    drawCardBackground(selectedHouse);


    /* Load logos */

    const howsorcsLogo =
        await loadImage(
            "assets/logos/HOWSORCS%20LOGO.png"
        );

    const houseLogo =
        await loadImage(
            selectedHouseData.logo
        );


    /* Watermark house logo */

    if (houseLogo) {

        const ratio =
            Math.min(
                500 / houseLogo.width,
                500 / houseLogo.height
            );

        const watermarkW =
            houseLogo.width * ratio;

        const watermarkH =
            houseLogo.height * ratio;


        ctx.save();

        ctx.globalAlpha = 0.07;

        ctx.drawImage(
            houseLogo,
            500,
            100,
            watermarkW,
            watermarkH
        );

        ctx.restore();

    }


    /* Top logos */

    if (howsorcsLogo) {

        drawImageContain(
            howsorcsLogo,
            38,
            38,
            70,
            70
        );

    }


    if (houseLogo) {

        drawImageContain(
            houseLogo,
            120,
            38,
            70,
            70
        );

    }


    /* HEADER */

    ctx.fillStyle = "#d8b45c";
    ctx.font = "bold 28px Georgia";
    ctx.textAlign = "left";

    ctx.fillText(
        "HOGWARTS SORCERY SCHOOL",
        220,
        65
    );


    ctx.fillStyle = "#f4e7c1";
    ctx.font = "14px Georgia";

    ctx.fillText(
        "OFFICIAL STUDENT IDENTIFICATION CARD",
        220,
        90
    );


    /* PHOTO BOX */

    const photoBoxX = 55;
    const photoBoxY = 150;
    const photoBoxW = 260;
    const photoBoxH = 330;


    ctx.strokeStyle = "#d8b45c";
    ctx.lineWidth = 3;

    ctx.strokeRect(
        photoBoxX,
        photoBoxY,
        photoBoxW,
        photoBoxH
    );


    /* PHOTO */

    if (studentPhoto && photoLoaded) {

        const baseScale =
            Math.max(
                photoBoxW / studentPhoto.width,
                photoBoxH / studentPhoto.height
            );


        const finalScale =
            baseScale * photoScale;


        const drawW =
            studentPhoto.width * finalScale;

        const drawH =
            studentPhoto.height * finalScale;

        const drawX =
            photoX - drawW / 2;

        const drawY =
            photoY - drawH / 2;


        ctx.save();

        ctx.beginPath();

        ctx.rect(
            photoBoxX,
            photoBoxY,
            photoBoxW,
            photoBoxH
        );

        ctx.clip();

        ctx.drawImage(
            studentPhoto,
            drawX,
            drawY,
            drawW,
            drawH
        );

        ctx.restore();

    } else {

        ctx.fillStyle =
            "rgba(255,255,255,0.08)";

        ctx.fillRect(
            photoBoxX,
            photoBoxY,
            photoBoxW,
            photoBoxH
        );


        ctx.fillStyle = "#d8dce3";
        ctx.font = "16px Georgia";
        ctx.textAlign = "center";

        ctx.fillText(
            "STUDENT PHOTO",
            photoBoxX + photoBoxW / 2,
            photoBoxY + photoBoxH / 2
        );

        ctx.textAlign = "left";

    }


    /* STUDENT NAME */

    const name =
        studentNameInput &&
        studentNameInput.value.trim()
            ? studentNameInput.value.trim()
            : "YOUR NAME";


    ctx.fillStyle = "#d8b45c";
    ctx.font = "12px Georgia";

    ctx.fillText(
        "STUDENT NAME",
        370,
        165
    );


    ctx.fillStyle = "#f4e7c1";
    ctx.font = "bold 28px Georgia";

    ctx.fillText(
        name,
        370,
        205
    );


    /* HOUSE */

    ctx.fillStyle = "#d8b45c";
    ctx.font = "12px Georgia";

    ctx.fillText(
        "HOUSE",
        370,
        250
    );


    ctx.fillStyle = "#f4e7c1";
    ctx.font = "bold 25px Georgia";

    ctx.fillText(
        selectedHouseData.name.toUpperCase(),
        370,
        285
    );


    /* HOUSE MOTTO */

    ctx.fillStyle =
        "rgba(244,231,193,0.8)";

    ctx.font = "italic 13px Georgia";

    ctx.fillText(
        selectedHouseData.motto,
        370,
        310
    );


    /* GEN */

    const studentGen =
        studentGenInput &&
        studentGenInput.value.trim()
            ? studentGenInput.value.trim()
            : "—";


    ctx.fillStyle = "#d8b45c";
    ctx.font = "12px Georgia";

    ctx.fillText(
        "GEN",
        370,
        355
    );


    ctx.fillStyle = "#f4e7c1";
    ctx.font = "18px Georgia";

    ctx.fillText(
        studentGen,
        370,
        382
    );


    /* STUDENT ID */

    ctx.fillStyle = "#d8b45c";
    ctx.font = "12px Georgia";

    ctx.fillText(
        "STUDENT ID",
        580,
        355
    );


    ctx.fillStyle = "#f4e7c1";
    ctx.font = "17px Georgia";

    ctx.fillText(
        studentId,
        580,
        382
    );


    /* STATUS */

    ctx.fillStyle = "#d8b45c";
    ctx.font = "12px Georgia";

    ctx.fillText(
        "STATUS",
        370,
        425
    );


    ctx.fillStyle = "#f4e7c1";
    ctx.font = "bold 18px Georgia";

    ctx.fillText(
        "ACTIVE STUDENT",
        370,
        455
    );


    /* DATE OF ENROLLMENT */

    const today =
        new Date();


    const enrollmentDate =
        today.toLocaleDateString(
            "en-GB",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        ).toUpperCase();


    ctx.fillStyle = "#d8b45c";
    ctx.font = "12px Georgia";

    ctx.fillText(
        "DATE OF ENROLLMENT",
        580,
        425
    );


    ctx.fillStyle = "#f4e7c1";
    ctx.font = "17px Georgia";

    ctx.fillText(
        enrollmentDate,
        580,
        455
    );


    /* Decorative line */

    ctx.strokeStyle =
        "rgba(216,180,92,0.5)";

    ctx.lineWidth = 1;

    ctx.beginPath();

    ctx.moveTo(370, 485);
    ctx.lineTo(850, 485);

    ctx.stroke();


    /* Footer */

    ctx.fillStyle =
        "rgba(244,231,193,0.75)";

    ctx.font = "12px Georgia";

    ctx.fillText(
        "OFFICIALLY ENROLLED • HOWSORCS TEAM CORE",
        370,
        515
    );


    ctx.fillStyle =
        "rgba(216,180,92,0.75)";

    ctx.font = "11px Georgia";

    ctx.fillText(
        "WHERE MAGIC BEGINS.",
        370,
        545
    );

}


/* =====================================================
   PHOTO UPLOAD
   ===================================================== */

if (studentPhotoInput) {

    studentPhotoInput.addEventListener(
        "change",
        function(event) {

            const file =
                event.target.files[0];

            if (!file) {
                return;
            }


            const reader =
                new FileReader();


            reader.onload =
                function(e) {

                    const image =
                        new Image();


                    image.onload =
                        function() {

                            studentPhoto = image;
                            photoLoaded = true;

                            photoX = 185;
                            photoY = 315;
                            photoScale = 1;


                            if (photoScaleInput) {
                                photoScaleInput.value = "1";
                            }


                            drawIDC();

                        };


                    image.src = e.target.result;

                };


            reader.readAsDataURL(file);

        }
    );

}


/* =====================================================
   LIVE INPUT UPDATE
   ===================================================== */

if (studentNameInput) {

    studentNameInput.addEventListener(
        "input",
        drawIDC
    );

}


if (studentGenInput) {

    studentGenInput.addEventListener(
        "input",
        drawIDC
    );

}


if (photoScaleInput) {

    photoScaleInput.addEventListener(
        "input",
        function() {

            photoScale =
                parseFloat(
                    photoScaleInput.value
                ) || 1;

            drawIDC();

        }
    );

}


/* =====================================================
   RESET PHOTO
   ===================================================== */

if (resetPhotoButton) {

    resetPhotoButton.addEventListener(
        "click",
        function() {

            photoX = 185;
            photoY = 315;
            photoScale = 1;


            if (photoScaleInput) {
                photoScaleInput.value = "1";
            }


            drawIDC();


            if (idcStatus) {

                idcStatus.textContent =
                    "Photo berhasil di-reset.";

            }

        }
    );

}


/* =====================================================
   DRAG PHOTO
   ===================================================== */

if (idcCanvas) {

    idcCanvas.addEventListener(
        "pointerdown",
        function(event) {

            if (!studentPhoto || !photoLoaded) {
                return;
            }


            draggingPhoto = true;

            idcCanvas.setPointerCapture(
                event.pointerId
            );


            const rect =
                idcCanvas.getBoundingClientRect();


            const scaleX =
                idcCanvas.width / rect.width;

            const scaleY =
                idcCanvas.height / rect.height;


            dragStartX =
                (event.clientX - rect.left) *
                scaleX;

            dragStartY =
                (event.clientY - rect.top) *
                scaleY;

        }
    );


    idcCanvas.addEventListener(
        "pointermove",
        function(event) {

            if (!draggingPhoto) {
                return;
            }


            const rect =
                idcCanvas.getBoundingClientRect();


            const scaleX =
                idcCanvas.width / rect.width;

            const scaleY =
                idcCanvas.height / rect.height;


            const currentX =
                (event.clientX - rect.left) *
                scaleX;

            const currentY =
                (event.clientY - rect.top) *
                scaleY;


            photoX +=
                currentX - dragStartX;

            photoY +=
                currentY - dragStartY;


            dragStartX = currentX;
            dragStartY = currentY;


            drawIDC();

        }
    );


    idcCanvas.addEventListener(
        "pointerup",
        function() {

            draggingPhoto = false;

        }
    );


    idcCanvas.addEventListener(
        "pointercancel",
        function() {

            draggingPhoto = false;

        }
    );

}


/* =====================================================
   DOWNLOAD IDC
   ===================================================== */

if (downloadIdcButton) {

    downloadIdcButton.addEventListener(
        "click",
        async function() {

            if (!idcCanvas) {
                return;
            }


            await drawIDC();


            const link =
                document.createElement("a");


            link.download =
                "HOWSORCS-IDC.png";


            link.href =
                idcCanvas.toDataURL(
                    "image/png"
                );


            link.click();


            if (idcStatus) {

                idcStatus.textContent =
                    "IDC berhasil diunduh.";

            }

        }
    );

}


/* =====================================================
   INITIAL DRAW
   ===================================================== */

initializeIDC();


console.log(
    "HOWSORCS JavaScript berhasil dimuat."
);

console.log(
    "Question bank:",
    questions.length,
    "questions available."
);

console.log(
    "Questions per sorting:",
    QUESTIONS_TO_SHOW
);