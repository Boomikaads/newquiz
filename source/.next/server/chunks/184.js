"use strict";
exports.id = 184;
exports.ids = [184];
exports.modules = {

/***/ 1066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/fifty.65926278.svg","height":122,"width":122});

/***/ }),

/***/ 9395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ queryValidator),
/* harmony export */   "wi": () => (/* binding */ defaultQuery),
/* harmony export */   "yK": () => (/* binding */ defaultQuestions)
/* harmony export */ });
/* harmony import */ var _assets_categories_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1573);

const MAX_QUESTIONS = 10;
const MIN_QUESTIONS = 4;
const TIMES = [
    10,
    20,
    30,
    60
];
const DEFAULT_TIME = 20;
const DEFAULT_QUESTIONS = 5;
const INFINITY_MODE = false;
const TIME_MODE = false;
function queryValidator(query) {
    const { questions , time , infinitymode , timemode , categories  } = query;
    const urlQueries = {};
    if (questions && Number(questions)) {
        if (Number(questions) > MAX_QUESTIONS) urlQueries.questions = MAX_QUESTIONS;
        else if (Number(questions) < MIN_QUESTIONS) urlQueries.questions = MIN_QUESTIONS;
        else urlQueries.questions = Number(questions);
    } else urlQueries.questions = DEFAULT_QUESTIONS;
    if (time && Number(time)) {
        if (Number(time) > TIMES[TIMES.length - 1]) urlQueries.time = TIMES[TIMES.length - 1];
        else if (Number(time) < TIMES[0]) urlQueries.time = TIMES[0];
        else urlQueries.time = Number(time);
    } else urlQueries.time = DEFAULT_TIME;
    if (infinitymode) {
        if (infinitymode === "true" || infinitymode === true) urlQueries.infinitymode = true;
        else urlQueries.infinitymode = false;
    } else urlQueries.infinitymode = INFINITY_MODE;
    if (timemode) {
        if (timemode === "true" || timemode === true) urlQueries.timemode = true;
        else urlQueries.timemode = false;
    } else urlQueries.timemode = TIME_MODE;
    if (categories) {
        const categoriesArray = typeof categories === "string" ? categories.split(",") : categories;
        const categoriesArrayFiltered = categoriesArray.filter((category)=>_assets_categories_json__WEBPACK_IMPORTED_MODULE_0__.map((category)=>category.id).includes(category));
        if (categoriesArrayFiltered.length > 0) urlQueries.categories = categoriesArrayFiltered;
        else urlQueries.categories = _assets_categories_json__WEBPACK_IMPORTED_MODULE_0__.map((category)=>category.id);
    } else urlQueries.categories = _assets_categories_json__WEBPACK_IMPORTED_MODULE_0__.map((category)=>category.id);
    return urlQueries;
}
const defaultQuestions = {
    minQuestions: MIN_QUESTIONS,
    maxQuestions: MAX_QUESTIONS
};
const defaultQuery = {
    questions: DEFAULT_QUESTIONS,
    time: DEFAULT_TIME,
    infinitymode: INFINITY_MODE,
    timemode: TIME_MODE,
    categories: _assets_categories_json__WEBPACK_IMPORTED_MODULE_0__.map((category)=>category.id)
};


/***/ }),

/***/ 4795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ playSound)
/* harmony export */ });
function playSound(sound, volume = 0.25) {
    if (localStorage.getItem("sound") === "true") {
        const audio = new Audio(`/sounds/${sound}.mp3`);
        audio.volume = volume;
        audio.play();
    }
}


/***/ }),

/***/ 5101:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ useBoundStore)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var _useWildcards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8811);
/* harmony import */ var _useQueries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3939);
/* harmony import */ var _useQuestions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2504);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useBoundStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((...a)=>({
        ...(0,_useWildcards__WEBPACK_IMPORTED_MODULE_1__/* .useWildcardsStore */ .A)(...a),
        ...(0,_useQueries__WEBPACK_IMPORTED_MODULE_2__/* .useQueriesStore */ .I)(...a),
        ...(0,_useQuestions__WEBPACK_IMPORTED_MODULE_3__/* .useQuestionsStore */ .n)(...a)
    }));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ useQueriesStore)
/* harmony export */ });
/* harmony import */ var _helpers_gameConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9395);

const useQueriesStore = (set)=>({
        queries: _helpers_gameConfig__WEBPACK_IMPORTED_MODULE_0__/* .defaultQuery */ .wi,
        setQueries: (queries)=>set({
                queries
            })
    });


/***/ }),

/***/ 2504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ useQuestionsStore)
});

;// CONCATENATED MODULE: ./src/assets/questions.json
const questions_namespaceObject = JSON.parse('{"Legislative Department":[{"question":"Which article of the Indian Constitution specifies the requirement for members of either House of Parliament to make an oath or affirmation before assuming their seats?","answers":["Article 98","Article 99","Article 100","Article 101"],"correctAnswer":"Article 99"},{"question":"Article 99 of the Indian Constitution requires members of Parliament to subscribe to an oath or affirmation in accordance with which schedule?","answers":["First Schedule","Second Schedule","Third Schedule","Fourth Schedule"],"correctAnswer":"Third Schedule"},{"question":"What is the purpose of the oath or affirmation mentioned in Article 99 of the Indian Constitution?","answers":["To declare allegiance to the President","To pledge loyalty to the State","To uphold the Constitution and perform duties faithfully","To swear in the Prime Minister"],"correctAnswer":"To uphold the Constitution and perform duties faithfully"},{"question":"Under Article 151, who is responsible for laying the reports of the Comptroller and Auditor-General of India relating to the Union\'s accounts before each House of Parliament?","answers":["The President","The Finance Minister","The Comptroller and Auditor-General of India","The Speaker of the Lok Sabha"],"correctAnswer":"The President"},{"question":"According to Article 151, the reports of the Comptroller and Auditor-General of India concerning the accounts of a State are submitted to whom?","answers":["The State Legislature","The Prime Minister","The Governor of the State","The Chief Minister"],"correctAnswer":"The Governor of the State"},{"question":"Who causes the reports of the Comptroller and Auditor-General of India relating to the accounts of a State to be laid before the State Legislature, according to Article 151?","answers":["The State Legislature","The Chief Minister","The Governor of the State","The Comptroller and Auditor-General of India"],"correctAnswer":"The Governor of the State"},{"question":"What is the process for the submission of audit reports related to the Union accounts as per Article 151?","answers":["The reports are directly sent to the Parliament by the Comptroller and Auditor-General of India.","The reports are submitted to the President and then laid before each House of Parliament by the President.","The reports are discussed in the Cabinet before being laid before Parliament.","The reports are sent to the Finance Minister for review before submission to the President."],"correctAnswer":"The reports are submitted to the President and then laid before each House of Parliament by the President."},{"question":"How are the audit reports of the Comptroller and Auditor-General of India concerning State accounts processed according to Article 151?","answers":["They are reviewed by the State Finance Minister before being laid before the State Legislature.","They are submitted to the Governor, who then lays them before the State Legislature.","They are directly sent to the Chief Minister for laying before the State Legislature.","They are sent to the Parliament for approval before being presented to the State Legislature."],"correctAnswer":"They are submitted to the Governor, who then lays them before the State Legislature."},{"question":"Which article of the Indian Constitution establishes the office of the President of India?","answers":["Article 50","Article 51","Article 52","Article 53"],"correctAnswer":"Article 52"},{"question":"According to Article 52 of the Indian Constitution, what is the position of the President of India?","answers":["Head of the Government","Head of the State","Head of the Judiciary","Head of the Legislature"],"correctAnswer":"Head of the State"},{"question":"Article 52 of the Indian Constitution provides for the creation of which office?","answers":["Prime Minister of India","Chief Justice of India","President of India","Speaker of the Lok Sabha"],"correctAnswer":"President of India"},{"question":"In which Article of the Indian Constitution is the President of India mentioned as the official head of the State?","answers":["Article 50","Article 51","Article 52","Article 53"],"correctAnswer":"Article 52"},{"question":"What does Article 52 of the Indian Constitution establish about the President?","answers":["The role and functions of the President","The method of election of the President","The office of the President","The term length of the President"],"correctAnswer":"The office of the President"},{"question":"According to Article 99 of the Indian Constitution, before taking their seat, every member of either House of Parliament must make and subscribe to an oath or affirmation before which authority?","answers":["The Prime Minister","The Speaker of the Lok Sabha","The President","The Chief Justice of India"],"correctAnswer":"The President"},{"question":"Which article of the Indian Constitution specifies the requirement for members of either House of Parliament to make an oath or affirmation before assuming their seats?","answers":["Article 98","Article 99","Article 100","Article 101"],"correctAnswer":"Article 99"},{"question":"Article 99 of the Indian Constitution requires members of Parliament to subscribe to an oath or affirmation in accordance with which schedule?","answers":["First Schedule","Second Schedule","Third Schedule","Fourth Schedule"],"correctAnswer":"Third Schedule"},{"question":"What is the purpose of the oath or affirmation mentioned in Article 99 of the Indian Constitution?","answers":["To declare allegiance to the President","To pledge loyalty to the State","To uphold the Constitution and perform duties faithfully","To swear in the Prime Minister"],"correctAnswer":"To uphold the Constitution and perform duties faithfully"},{"question":"In which article of the Indian Constitution is the procedure for making and subscribing to an oath or affirmation by members of Parliament detailed?","answers":["Article 98","Article 99","Article 100","Article 101"],"correctAnswer":"Article 99"},{"question":"According to Article 100 of the Indian Constitution, how are questions determined at any sitting of either House of Parliament?","answers":["By a majority of votes of all members","By a majority of votes of the members present and voting","By a unanimous decision","By the decision of the Speaker or Chairman"],"correctAnswer":"By a majority of votes of the members present and voting"},{"question":"In the case of an equality of votes, who has the casting vote according to Article 100?","answers":["The Prime Minister","The President","The Chairman or Speaker","The Chief Justice of India"],"correctAnswer":"The Chairman or Speaker"},{"question":"As per Article 100, what is the minimum quorum required to constitute a meeting of either House of Parliament until Parliament provides otherwise by law?","answers":["One-third of the total members","One-fourth of the total members","One-fifth of the total members","One-tenth of the total members"],"correctAnswer":"One-tenth of the total members"},{"question":"According to Article 100, if there is no quorum during a meeting of a House, what must the Chairman or Speaker do?","answers":["Continue the meeting until a quorum is reached","Adjourn the House or suspend the meeting until there is a quorum","Cancel the meeting","Submit a report to the President"],"correctAnswer":"Adjourn the House or suspend the meeting until there is a quorum"},{"question":"Article 100 of the Indian Constitution states that either House of Parliament can act notwithstanding any vacancy in its membership. What does this imply about the validity of proceedings if vacancies exist?","answers":["Proceedings become invalid","Proceedings are considered invalid only if a quorum is not met","Proceedings remain valid even if it is later discovered that an ineligible person participated","Proceedings require confirmation by the President"],"correctAnswer":"Proceedings remain valid even if it is later discovered that an ineligible person participated"},{"question":"According to Article 101, how is a member of either House of Parliament disqualified from continuing as a member?","answers":["By being convicted of a criminal offense","By resigning from the position","By failing to attend three consecutive meetings","By being appointed to a government position"],"correctAnswer":"By being convicted of a criminal offense"},{"question":"What happens if a member of Parliament is found guilty of corrupt practices according to Article 101?","answers":["They are suspended from the House","They are disqualified from being a member of Parliament","They are fined","Their election is annulled"],"correctAnswer":"They are disqualified from being a member of Parliament"},{"question":"Under Article 101, what is one reason for disqualification from being a member of Parliament?","answers":["Not participating in parliamentary debates","Engaging in a profession outside Parliament","Being convicted of a criminal offense","Failure to submit annual income reports"],"correctAnswer":"Being convicted of a criminal offense"},{"question":"In addition to general procedural rules, what specific rule does the Supreme Court have regarding the delivery of judgments?","answers":["All judgments must be written and signed by the Chief Justice.","All judgments must be delivered in open Court.","All judgments must be kept confidential until a final decision is reached.","All judgments must be reviewed by Parliament before delivery."],"correctAnswer":"All judgments must be delivered in open Court."},{"question":"Under what conditions may the Supreme Court make rules for the enforcement of rights conferred by Part III of the Constitution?","answers":["With the consent of the President and Parliament.","Subject to the provisions of any law made by Parliament.","After consulting with High Courts.","By public referendum."],"correctAnswer":"Subject to the provisions of any law made by Parliament."},{"question":"Who is responsible for appointing officers and servants of the Supreme Court?","answers":["The President of India","The Chief Justice of India or another designated Judge or officer","The Union Public Service Commission","The Parliament of India"],"correctAnswer":"The Chief Justice of India or another designated Judge or officer"},{"question":"What is required before appointing someone to a position connected with the Supreme Court if specified by the President\'s rules?","answers":["The appointment must be approved by the Chief Justice.","The candidate must be already attached to the Court.","Consultation with the Union Public Service Commission is required.","The candidate must pass a public examination."],"correctAnswer":"Consultation with the Union Public Service Commission is required."},{"question":"Who prescribes the conditions of service for officers and servants of the Supreme Court?","answers":["The Union Government","The President of India","The Chief Justice of India or a designated Judge or officer","The Parliament"],"correctAnswer":"The Chief Justice of India or a designated Judge or officer"},{"question":"Which aspect of the rules related to officers and servants of the Supreme Court requires the approval of the President?","answers":["Recruitment procedures","Conditions of service","Salaries, allowances, leave, or pensions","Daily administrative functions"],"correctAnswer":"Salaries, allowances, leave, or pensions"},{"question":"Where are the administrative expenses of the Supreme Court, including salaries and pensions, charged?","answers":["The Supreme Court\'s own fund","The Consolidated Fund of India","The President\'s Fund","The State Governments\' funds"],"correctAnswer":"The Consolidated Fund of India"},{"question":"What happens to the fees or other moneys taken by the Supreme Court?","answers":["They are kept in a separate Supreme Court fund.","They are donated to charity.","They form part of the Consolidated Fund of India.","They are used to pay court costs."],"correctAnswer":"They form part of the Consolidated Fund of India."},{"question":"Which rule-making authority has the power to decide on salaries, allowances, leave, or pensions of Supreme Court officers and servants?","answers":["The Chief Justice of India, with Presidential approval","The Union Government","The Parliament","The Union Public Service Commission"],"correctAnswer":"The Chief Justice of India, with Presidential approval"},{"question":"In what scenario is the Union Public Service Commission\'s consultation required regarding Supreme Court appointments?","answers":["For all appointments made by the Chief Justice","For appointments specified by rules made by the President","For appointments to judicial positions only","For appointments of officers in the administrative staff"],"correctAnswer":"For appointments specified by rules made by the President"},{"question":"What is the role of the Chief Justice of India concerning the conditions of service for Supreme Court staff?","answers":["To make the rules for conditions of service","To approve rules made by the Parliament","To review salaries set by the Union Government","To consult with the Union Public Service Commission"],"correctAnswer":"To make the rules for conditions of service"},{"question":"Which of the following is TRUE about the administrative expenses of the Supreme Court?","answers":["They are covered by the Supreme Court\'s budget.","They are funded by state governments.","They are charged upon the Consolidated Fund of India.","They are managed by the Chief Justice\'s personal funds."],"correctAnswer":"They are charged upon the Consolidated Fund of India."},{"question":"In the context of interpretation of the Constitution, what is included in the term \'substantial question of law\'?","answers":["Only questions regarding the Constitution","Questions about the Government of India Act, 1935, and related enactments","Only questions about the Indian Independence Act, 1947","Questions about the rules and regulations of Parliament"],"correctAnswer":"Questions about the Government of India Act, 1935, and related enactments"},{"question":"Which of the following Acts is referenced when interpreting substantial questions of law in relation to the Constitution?","answers":["The Indian Evidence Act, 1872","The Government of India Act, 1935","The Companies Act, 2013","The Foreign Exchange Management Act, 1999"],"correctAnswer":"The Government of India Act, 1935"},{"question":"What additional documents are included in the interpretation of substantial questions of law according to the given provisions?","answers":["Any international treaties","Orders in Council or orders made under them","State legislation","Local administrative rules"],"correctAnswer":"Orders in Council or orders made under them"},{"question":"Which Act, besides the Constitution, is referenced for interpretation in Chapter V of Part VI?","answers":["The Indian Penal Code, 1860","The Government of India Act, 1935","The Indian Contract Act, 1872","The Copyright Act, 1957"],"correctAnswer":"The Government of India Act, 1935"},{"question":"Which of the following Acts or orders is considered for substantial questions of law related to the interpretation of the Constitution?","answers":["The Indian Trade Union Act, 1926","The Indian Independence Act, 1947","The Delhi Special Police Establishment Act, 1946","The Arbitration and Conciliation Act, 1996"],"correctAnswer":"The Indian Independence Act, 1947"},{"question":"How should references to substantial questions of law as to the interpretation of the Constitution be construed according to the provisions?","answers":["They should include interpretations of various national and colonial enactments and orders.","They should only focus on amendments made post-independence.","They should be limited to the Indian Penal Code.","They should exclude historical Acts and orders."],"correctAnswer":"They should include interpretations of various national and colonial enactments and orders."},{"question":"In addition to the Constitution, which other orders are relevant for interpreting substantial questions of law?","answers":["Orders of the Supreme Court","Orders made under the Government of India Act, 1935","Orders of the State Legislatures","Orders issued by local administrative bodies"],"correctAnswer":"Orders made under the Government of India Act, 1935"},{"question":"Which of the following is NOT included in the substantial questions of law according to the given provisions?","answers":["The Government of India Act, 1935","The Indian Independence Act, 1947","Orders in Council or orders made under them","The Environmental Protection Act, 1986"],"correctAnswer":"The Environmental Protection Act, 1986"},{"question":"Under which Article of the Indian Constitution is the Comptroller and Auditor-General of India appointed?","answers":["Article 146","Article 148","Article 150","Article 152"],"correctAnswer":"Article 148"},{"question":"Who appoints the Comptroller and Auditor-General of India?","answers":["The Prime Minister","The Chief Justice of India","The President of India","The Finance Minister"],"correctAnswer":"The President of India"},{"question":"According to Article 148, what is required of the Comptroller and Auditor-General of India in terms of conditions of service?","answers":["Conditions of service must be determined by the President","Conditions of service must be determined by Parliament","Conditions of service must be determined by the Chief Justice","Conditions of service must be determined by the Union Cabinet"],"correctAnswer":"Conditions of service must be determined by the President"},{"question":"Which of the following powers does NOT fall under the authority of the Comptroller and Auditor-General of India?","answers":["Audit of all receipts and expenditure of the Government","Certification of the annual accounts of the Government","Supervision of local government budgets","Audit of all public enterprises"],"correctAnswer":"Supervision of local government budgets"}]}');
;// CONCATENATED MODULE: ./src/helpers/getQuestions.js

const randomArray = (arr)=>arr.toSorted(()=>0.5 - Math.random());
async function getQuestions(topics, qNumber) {
    const randomTopics = randomArray(topics);
    const messyTopics = [];
    for(let i = 0; i < qNumber; i++)messyTopics.push(randomTopics[i % topics.length]);
    function getOfflineQuestions() {
        const questionsPerTopic = {};
        messyTopics.forEach((topic)=>{
            questionsPerTopic[topic] = (questionsPerTopic[topic] || 0) + 1;
        });
        const questions = [];
        Object.keys(questionsPerTopic).forEach((topic)=>{
            randomArray(questions_namespaceObject[topic]).slice(0, questionsPerTopic[topic]).forEach((question)=>{
                questions.push({
                    ...question,
                    topic,
                    answers: randomArray(question.answers),
                    userAnswer: undefined,
                    ia: false
                });
            });
        });
        return questions;
    }
    if (false) {}
    const iaQuestions = fetch("/api/questions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            topics: messyTopics.slice(0, 3)
        })
    }).then((res)=>res.json()).then((data)=>{
        if (data.statusCode >= 400) {
            const error = new Error(data.message);
            error.statusCode = data.status;
            throw error;
        } else return data;
    }).catch((err)=>{
        console.log(err);
        throw err;
    });
    return iaQuestions.then((iaQuestions)=>randomArray([
            ...iaQuestions,
            ...getOfflineQuestions().slice(iaQuestions.length)
        ])).catch(()=>randomArray(getOfflineQuestions()));
}

;// CONCATENATED MODULE: ./src/store/useQuestions.js

const useQuestionsStore = (set, get)=>({
        questions: [],
        loading: false,
        loadingInfinity: false,
        error: [
            false,
            ""
        ],
        currentQuestion: 1,
        score: 1,
        win: undefined,
        getQuestions: (topics, number, infinity)=>{
            infinity ? set({
                loadingInfinity: true
            }) : set({
                loading: true
            });
            getQuestions(topics, number).then((data)=>set({
                    questions: data
                })).catch((err)=>set({
                    error: [
                        true,
                        err
                    ]
                })).finally(()=>infinity ? set({
                    loadingInfinity: false
                }) : set({
                    loading: false
                }));
        },
        setCurrentQuestion: (number)=>set({
                currentQuestion: number
            }),
        setUserAnswer: (question, answer)=>{
            if (get().queries.infinitymode) return;
            set((state)=>{
                const questions = [
                    ...state.questions
                ];
                questions[question].userAnswer = answer;
                return {
                    questions
                };
            });
        },
        cleanQuestions: ()=>set({
                questions: [],
                score: 1,
                currentQuestion: 1,
                win: undefined
            }),
        setScore: (score)=>set({
                score
            }),
        setWin: (win)=>set({
                win
            })
    });


/***/ }),

/***/ 8811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ useWildcardsStore)
/* harmony export */ });
const defaultWildCards = {
    skip: 1,
    half: 1,
    lives: 3
};
const useWildcardsStore = (set, get)=>({
        wildCards: defaultWildCards,
        useSkipCard: ()=>{
            document.querySelectorAll(`.answers-${get().currentQuestion} button`).forEach((answer)=>{
                if (answer.textContent === get().questions[get().currentQuestion - 1].correctAnswer) {
                    answer.click();
                }
            });
            get().setUserAnswer(get().currentQuestion - 1, 2);
            set((state)=>({
                    wildCards: {
                        ...state.wildCards,
                        skip: state.wildCards.skip - 1
                    }
                }));
        },
        useHalfCard: ()=>{
            set((state)=>({
                    wildCards: {
                        ...state.wildCards,
                        half: state.wildCards.half - 1
                    }
                }));
            const answers = document.querySelectorAll(`.answers-${get().currentQuestion} button`);
            const correct = get().questions[get().currentQuestion - 1].correctAnswer;
            const wrongs = [
                ...answers
            ].filter((answer)=>answer.textContent !== correct);
            wrongs.sort(()=>Math.random() - 0.5).slice(0, 2).forEach((wrong)=>{
                wrong.classList.add("wrongAnswer");
                wrong.parentNode.classList.add("vibrate");
                wrong.disabled = true;
            });
        },
        useLivesCard: ()=>set((state)=>({
                    wildCards: {
                        ...state.wildCards,
                        lives: state.wildCards.lives - 1
                    }
                })),
        cleanWildCards: ()=>set({
                wildCards: defaultWildCards
            })
    });


/***/ }),

/***/ 1573:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":"aa","name":"Legislative Department","color":"#e6c642"}]');

/***/ })

};
;