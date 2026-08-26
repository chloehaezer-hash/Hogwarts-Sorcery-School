/* =====================================================
   HOWSORCS — MAIN JAVASCRIPT
   SORTING HAT + IDC EDITOR + MUSIC + HOUSE
   ===================================================== */


/* =====================================================
   SORTING HAT — QUESTIONS
   ===================================================== */

const questions = [

    {
        question: "Ketika menghadapi masalah besar, apa yang paling mungkin kamu lakukan?",
        answers: [
            ["Menghadapinya langsung meskipun berisiko.", "aurelion"],
            ["Mencari tahu semua informasi sebelum bertindak.", "corvane"],
            ["Memastikan orang-orang di sekitarku tetap aman.", "fidelis"],
            ["Mencari cara paling menguntungkan untuk keluar dari masalah.", "vesperyn"]
        ]
    },

    {
        question: "Apa yang paling kamu hargai dari seorang teman?",
        answers: [
            ["Keberaniannya.", "aurelion"],
            ["Kecerdasannya.", "corvane"],
            ["Kesetiaannya.", "fidelis"],
            ["Ambisinya.", "vesperyn"]
        ]
    },

    {
        question: "Jika kamu menemukan rahasia besar di sekolah, kamu akan...",
        answers: [
            ["Mencari tahu kebenarannya sendiri.", "aurelion"],
            ["Mempelajarinya secara mendalam.", "corvane"],
            ["Memastikan rahasia itu tidak membahayakan orang lain.", "fidelis"],
            ["Memanfaatkannya sebagai keuntungan.", "vesperyn"]
        ]
    },

    {
        question: "Mana yang paling menggambarkan dirimu?",
        answers: [
            ["Berani.", "aurelion"],
            ["Penasaran.", "corvane"],
            ["Peduli.", "fidelis"],
            ["Ambisius.", "vesperyn"]
        ]
    },

    {
        question: "Saat melihat seseorang diperlakukan tidak adil, kamu...",
        answers: [
            ["Langsung membelanya.", "aurelion"],
            ["Mencari tahu apa yang sebenarnya terjadi.", "corvane"],
            ["Menemaninya dan memastikan dia baik-baik saja.", "fidelis"],
            ["Mencari cara agar situasinya berubah.", "vesperyn"]
        ]
    },

    {
        question: "Kalau diberi kesempatan mempelajari satu hal, kamu memilih...",
        answers: [
            ["Ilmu pertarungan sihir.", "aurelion"],
            ["Sihir kuno dan sejarahnya.", "corvane"],
            ["Ramuan penyembuhan.", "fidelis"],
            ["Sihir yang dapat mengubah keadaan.", "vesperyn"]
        ]
    },

    {
        question: "Apa yang paling membuatmu bangga?",
        answers: [
            ["Berhasil melakukan sesuatu yang sebelumnya kutakuti.", "aurelion"],
            ["Berhasil memahami sesuatu yang sulit.", "corvane"],
            ["Berhasil membantu seseorang.", "fidelis"],
            ["Berhasil mencapai targetku.", "vesperyn"]
        ]
    },

    {
        question: "Ketika berada dalam kelompok, kamu biasanya...",
        answers: [
            ["Menjadi orang yang maju terlebih dahulu.", "aurelion"],
            ["Memberikan ide dan strategi.", "corvane"],
            ["Menjaga agar semua orang tetap kompak.", "fidelis"],
            ["Mengatur langkah agar tujuan tercapai.", "vesperyn"]
        ]
    },

    {
        question: "Kalau rencanamu gagal, apa yang kamu lakukan?",
        answers: [
            ["Coba lagi dengan lebih berani.", "aurelion"],
            ["Menganalisis kesalahannya.", "corvane"],
            ["Meminta bantuan orang yang dipercaya.", "fidelis"],
            ["Membuat strategi baru.", "vesperyn"]
        ]
    },

    {
        question: "Mana yang paling kamu takutkan?",
        answers: [
            ["Menjadi pengecut.", "aurelion"],
            ["Kehilangan kesempatan untuk belajar.", "corvane"],
            ["Kehilangan orang-orang yang kusayangi.", "fidelis"],
            ["Gagal mencapai sesuatu yang kuinginkan.", "vesperyn"]
        ]
    },

    {
        question: "Jika kamu memiliki kekuatan besar, kamu akan...",
        answers: [
            ["Menggunakannya untuk melindungi orang lain.", "aurelion"],
            ["Mempelajari batas dan cara kerjanya.", "corvane"],
            ["Menggunakannya untuk membantu orang-orang terdekat.", "fidelis"],
            ["Menggunakannya untuk mengubah hidupku.", "vesperyn"]
        ]
    },

    {
        question: "Orang-orang biasanya mengenalmu sebagai seseorang yang...",
        answers: [
            ["Berani dan blak-blakan.", "aurelion"],
            ["Banyak berpikir dan bertanya.", "corvane"],
            ["Bisa diandalkan.", "fidelis"],
            ["Punya tujuan yang jelas.", "vesperyn"]
        ]
    },

    {
        question: "Jika harus memilih satu sifat untuk diperkuat, kamu memilih...",
        answers: [
            ["Keberanian.", "aurelion"],
            ["Kebijaksanaan.", "corvane"],
            ["Kesetiaan.", "fidelis"],
            ["Ambisi.", "vesperyn"]
        ]
    },

    {
        question: "Apa yang paling penting ketika mengejar impian?",
        answers: [
            ["Berani mengambil langkah pertama.", "aurelion"],
            ["Memiliki pengetahuan yang cukup.", "corvane"],
            ["Memiliki orang-orang yang mendukung.", "fidelis"],
            ["Tidak menyerah sampai berhasil.", "vesperyn"]
        ]
    },

    {
        question: "Jika Sorting Hat memberimu pilihan untuk menentukan sendiri, kamu akan...",
        answers: [
            ["Memilih jalan yang paling berani.", "aurelion"],
            ["Memilih jalan yang paling membuatku berkembang.", "corvane"],
            ["Memilih tempat yang terasa seperti rumah.", "fidelis"],
            ["Memilih jalan yang membawaku menuju tujuan terbesar.", "vesperyn"]
        ]
    }

];


/* =====================================================
   SORTING VARIABLES
   ===================================================== */

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
        motto: "Courage • Bravery • Determination",
        logo: "assets/logos/Aurelion.png",
        description:
            "You belong to Aurelion, the house of courage. You are not afraid to step forward when others hesitate."
    },

    corvane: {
        name: "Corvane",
        motto: "Wisdom • Intelligence • Curiosity",
        logo: "assets/logos/Corvane.png",
        description:
            "You belong to Corvane, the house of wisdom. Your curiosity and sharp mind guide the way you see the world."
    },

    fidelis: {
        name: "Fidelis",
        motto: "Loyalty • Kindness • Dedication",
        logo: "assets/logos/Fidelis.png",
        description:
            "You belong to Fidelis, the house of loyalty. You value trust, friendship, and the people who matter to you."
    },

    vesperyn: {
        name: "Vesperyn",
        motto: "Ambition • Cunning • Resourcefulness",
        logo: "assets/logos/Vesperyn.png",
        description:
            "You belong to Vesperyn, the house of ambition. You know what you want and have the determination to find your own path."
    }

};


/* =====================================================
   SORTING ELEMENTS
   ===================================================== */

const startScreen =
    document.getElementById("start-screen");

const beginButton =
    document.getElementById("begin-btn");

const sortingResult =
    document.getElementById("sorting-result");

const music =
    document.getElementById("sorting-music");

const musicControl =
    document.getElementById("music-control");

const idcSection =
    document.getElementById("idc-editor");


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

        music.play().catch(function () {

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

        console.error(
            "sorting-result tidak ditemukan."
        );

        return;

    }

    const question =
        questions[currentQuestion];

    if (!question) {

        showResult();

        return;

    }


    sortingResult.innerHTML = `

        <div class="quiz-box">

            <p class="question-number">

                QUESTION ${currentQuestion + 1}
                OF ${questions.length}

            </p>


            <h3>

                ${question.question}

            </h3>


            <div class="answer-container">

                ${question.answers.map(function(answer) {

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
                    button.getAttribute(
                        "data-house"
                    );

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
        questions.length
    ) {

        showQuestion();

    } else {

        showResult();

    }

}


/* =====================================================
   GET WINNING HOUSE
   ===================================================== */

function getWinningHouse() {

    return Object.keys(scores).reduce(
        function(a, b) {

            return scores[a] >= scores[b]
                ? a
                : b;

        }
    );

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


            <h3>

                ${house.name}

            </h3>


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


    drawIDC();


    const createIdcResult =
        document.getElementById(
            "create-idc-result"
        );


    if (createIdcResult) {

        createIdcResult.addEventListener(
            "click",
            function() {

                openIDC();

            }
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

if (
    musicControl &&
    music
) {

    musicControl.addEventListener(
        "click",
        function() {

            if (music.paused) {

                music.play().catch(
                    function() {}
                );

                musicControl.textContent =
                    "♫";

            } else {

                music.pause();

                musicControl.textContent =
                    "🔇";

            }

        }
    );

}


/* =====================================================
   HOUSE TOGGLE
   ===================================================== */

function toggleHouse(house) {

    const allHouses =
        document.querySelectorAll(
            ".house"
        );


    allHouses.forEach(
        function(item) {

            if (item !== house) {

                item.classList.remove(
                    "active"
                );

            }

        }
    );


    house.classList.toggle(
        "active"
    );

}


/* =====================================================
   IDC ELEMENTS
   ===================================================== */

const idcCanvas =
    document.getElementById(
        "idc-canvas"
    );

const idcWrapper =
    document.getElementById(
        "idc-canvas-wrapper"
    );

const studentNameInput =
    document.getElementById(
        "student-name"
    );

const studentPhotoInput =
    document.getElementById(
        "student-photo"
    );

const photoScaleInput =
    document.getElementById(
        "photo-scale"
    );

const resetPhotoButton =
    document.getElementById(
        "reset-photo"
    );

const generateIdcButton =
    document.getElementById(
        "generate-idc"
    );

const downloadIdcButton =
    document.getElementById(
        "download-idc"
    );

const idcStatus =
    document.getElementById(
        "idc-status"
    );


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


/* =====================================================
   IDC INITIALIZE
   ===================================================== */

function initializeIDC() {

    if (!idcCanvas) {

        console.log(
            "IDC canvas belum ditemukan."
        );

        return;

    }


    idcCtx =
        idcCanvas.getContext(
            "2d"
        );


    drawIDC();

}


/* =====================================================
   DRAW CARD BACKGROUND
   ===================================================== */

function drawCardBackground() {

    if (!idcCtx) {
        return;
    }


    const ctx =
        idcCtx;


    const width =
        idcCanvas.width;

    const height =
        idcCanvas.height;


    const gradient =
        ctx.createLinearGradient(
            0,
            0,
            width,
            height
        );


    gradient.addColorStop(
        0,
        "#0d2343"
    );

    gradient.addColorStop(
        0.5,
        "#07162c"
    );

    gradient.addColorStop(
        1,
        "#102d52"
    );


    ctx.fillStyle =
        gradient;


    ctx.fillRect(
        0,
        0,
        width,
        height
    );


    /* Border */

    ctx.strokeStyle =
        "#d8b45c";

    ctx.lineWidth =
        5;


    ctx.strokeRect(
        10,
        10,
        width - 20,
        height - 20
    );


    /* Inner border */

    ctx.strokeStyle =
        "rgba(216,180,92,0.35)";

    ctx.lineWidth =
        2;


    ctx.strokeRect(
        22,
        22,
        width - 44,
        height - 44
    );


    /* Stars */

    ctx.fillStyle =
        "rgba(255,255,255,0.5)";


    const stars = [

        [60, 70],
        [860, 75],
        [800, 540],
        [100, 530],
        [700, 90],
        [250, 540]

    ];


    stars.forEach(
        function(star) {

            ctx.beginPath();

            ctx.arc(
                star[0],
                star[1],
                2,
                0,
                Math.PI * 2
            );

            ctx.fill();

        }
    );

}


/* =====================================================
   DRAW LOGO
   ===================================================== */

function drawLogo(
    src,
    x,
    y,
    maxWidth,
    maxHeight
) {

    const image =
        new Image();


    image.onload =
        function() {

            if (!idcCtx) {
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


            idcCtx.drawImage(
                image,
                x,
                y,
                width,
                height
            );

        };


    image.src =
        src;

}


/* =====================================================
   DRAW IDC
   ===================================================== */

function drawIDC() {

    if (
        !idcCtx ||
        !idcCanvas
    ) {

        return;

    }


    const ctx =
        idcCtx;


    const width =
        idcCanvas.width;

    const height =
        idcCanvas.height;


    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    drawCardBackground();


    /* =================================================
       LOGOS
       ================================================= */

    drawLogo(
        "assets/logos/HOWSORCS%20LOGO.png",
        38,
        38,
        70,
        70
    );


    const selectedHouse =
        currentWinningHouse ||
        "aurelion";


    const selectedHouseData =
        houseData[selectedHouse];


    if (selectedHouseData) {

        drawLogo(
            selectedHouseData.logo,
            120,
            38,
            70,
            70
        );

    }


    /* =================================================
       HEADER
       ================================================= */

    ctx.fillStyle =
        "#d8b45c";

    ctx.font =
        "bold 28px Georgia";

    ctx.textAlign =
        "left";


    ctx.fillText(
        "HOGWARTS SORCERY SCHOOL",
        220,
        65
    );


    ctx.fillStyle =
        "#f4e7c1";

    ctx.font =
        "14px Georgia";


    ctx.fillText(
        "OFFICIAL STUDENT IDENTIFICATION CARD",
        220,
        90
    );


    /* =================================================
       PHOTO AREA
       ================================================= */

    const photoBoxX =
        55;

    const photoBoxY =
        150;

    const photoBoxW =
        260;

    const photoBoxH =
        330;


    ctx.strokeStyle =
        "#d8b45c";

    ctx.lineWidth =
        3;


    ctx.strokeRect(
        photoBoxX,
        photoBoxY,
        photoBoxW,
        photoBoxH
    );


    /* =================================================
       PHOTO
       ================================================= */

    if (
        studentPhoto &&
        photoLoaded
    ) {

        const maxW =
            photoBoxW;

        const maxH =
            photoBoxH;


        const baseScale =
            Math.max(
                maxW / studentPhoto.width,
                maxH / studentPhoto.height
            );


        const finalScale =
            baseScale *
            photoScale;


        const drawW =
            studentPhoto.width *
            finalScale;


        const drawH =
            studentPhoto.height *
            finalScale;


        const drawX =
            photoX -
            drawW / 2;


        const drawY =
            photoY -
            drawH / 2;


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


        ctx.fillStyle =
            "#d8dce3";


        ctx.font =
            "16px Georgia";


        ctx.textAlign =
            "center";


        ctx.fillText(
            "STUDENT PHOTO",
            photoBoxX +
                photoBoxW / 2,
            photoBoxY +
                photoBoxH / 2
        );


        ctx.textAlign =
            "left";

    }


    /* =================================================
       STUDENT INFORMATION
       ================================================= */

    ctx.fillStyle =
        "#d8b45c";

    ctx.font =
        "12px Georgia";


    ctx.fillText(
        "STUDENT NAME",
        370,
        175
    );


    const name =
        studentNameInput &&
        studentNameInput.value.trim()
            ? studentNameInput.value.trim()
            : "YOUR NAME";


    ctx.fillStyle =
        "#f4e7c1";

    ctx.font =
        "bold 30px Georgia";


    ctx.fillText(
        name,
        370,
        215
    );


    /* HOUSE */

    ctx.fillStyle =
        "#d8b45c";

    ctx.font =
        "12px Georgia";


    ctx.fillText(
        "HOUSE",
        370,
        270
    );


    ctx.fillStyle =
        "#f4e7c1";

    ctx.font =
        "bold 25px Georgia";


    ctx.fillText(
        selectedHouseData
            ? selectedHouseData.name.toUpperCase()
            : "HOUSE",
        370,
        305
    );


    /* ID */

    ctx.fillStyle =
        "#d8b45c";

    ctx.font =
        "12px Georgia";


    ctx.fillText(
        "STUDENT ID",
        370,
        355
    );


    ctx.fillStyle =
        "#f4e7c1";

    ctx.font =
        "18px Georgia";


    ctx.fillText(
        "HSS-2026-001",
        370,
        385
    );


    /* STATUS */

    ctx.fillStyle =
        "#d8b45c";

    ctx.font =
        "12px Georgia";


    ctx.fillText(
        "STATUS",
        370,
        435
    );


    ctx.fillStyle =
        "#f4e7c1";

    ctx.font =
        "bold 18px Georgia";


    ctx.fillText(
        "ACTIVE STUDENT",
        370,
        465
    );


    /* Decorative line */

    ctx.strokeStyle =
        "rgba(216,180,92,0.5)";

    ctx.lineWidth =
        1;


    ctx.beginPath();


    ctx.moveTo(
        370,
        490
    );


    ctx.lineTo(
        850,
        490
    );


    ctx.stroke();


    /* Footer */

    ctx.fillStyle =
        "rgba(216,180,92,0.7)";

    ctx.font =
        "12px Georgia";


    ctx.fillText(
        "WHERE MAGIC BEGINS.",
        370,
        520
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

                            studentPhoto =
                                image;


                            photoLoaded =
                                true;


                            photoX =
                                185;


                            photoY =
                                315;


                            photoScale =
                                1;


                            if (photoScaleInput) {

                                photoScaleInput.value =
                                    "1";

                            }


                            drawIDC();

                        };


                    image.src =
                        e.target.result;

                };


            reader.readAsDataURL(
                file
            );

        }
    );

}


/* =====================================================
   NAME INPUT
   ===================================================== */

if (studentNameInput) {

    studentNameInput.addEventListener(
        "input",
        function() {

            drawIDC();

        }
    );

}


/* =====================================================
   PHOTO SCALE
   ===================================================== */

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

            photoX =
                185;


            photoY =
                315;


            photoScale =
                1;


            if (photoScaleInput) {

                photoScaleInput.value =
                    "1";

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

            if (
                !studentPhoto ||
                !photoLoaded
            ) {

                return;

            }


            draggingPhoto =
                true;


            idcCanvas.setPointerCapture(
                event.pointerId
            );


            const rect =
                idcCanvas.getBoundingClientRect();


            const scaleX =
                idcCanvas.width /
                rect.width;


            const scaleY =
                idcCanvas.height /
                rect.height;


            dragStartX =
                event.clientX *
                scaleX;


            dragStartY =
                event.clientY *
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
                idcCanvas.width /
                rect.width;


            const scaleY =
                idcCanvas.height /
                rect.height;


            const currentX =
                event.clientX *
                scaleX;


            const currentY =
                event.clientY *
                scaleY;


            const deltaX =
                currentX -
                dragStartX;


            const deltaY =
                currentY -
                dragStartY;


            photoX +=
                deltaX;


            photoY +=
                deltaY;


            dragStartX =
                currentX;


            dragStartY =
                currentY;


            drawIDC();

        }
    );


    idcCanvas.addEventListener(
        "pointerup",
        function() {

            draggingPhoto =
                false;

        }
    );


    idcCanvas.addEventListener(
        "pointercancel",
        function() {

            draggingPhoto =
                false;

        }
    );

}


/* =====================================================
   GENERATE IDC
   ===================================================== */

if (generateIdcButton) {

    generateIdcButton.addEventListener(
        "click",
        function() {

            drawIDC();


            if (idcStatus) {

                idcStatus.textContent =
                    "IDC berhasil dibuat. Periksa preview sebelum mengunduh.";

            }

        }
    );

}


/* =====================================================
   DOWNLOAD IDC
   ===================================================== */

if (downloadIdcButton) {

    downloadIdcButton.addEventListener(
        "click",
        function() {

            if (!idcCanvas) {
                return;
            }


            drawIDC();


            setTimeout(
                function() {

                    const link =
                        document.createElement(
                            "a"
                        );


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

                },
                150
            );

        }
    );

}


/* =====================================================
   IDC INITIAL DRAW
   ===================================================== */

initializeIDC();


/* =====================================================
   DEBUG
   ===================================================== */

console.log(
    "HOWSORCS JavaScript berhasil dimuat."
);

console.log(
    "Sorting Hat:",
    questions.length,
    "questions"
);

console.log(
    "IDC:",
    idcCanvas
        ? "Canvas ditemukan"
        : "Canvas tidak ditemukan"
);