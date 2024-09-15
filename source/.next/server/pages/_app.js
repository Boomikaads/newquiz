(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2499:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Rubik_d95b2e', '__Rubik_Fallback_d95b2e'","fontStyle":"normal"},
	"className": "__className_d95b2e"
};


/***/ }),

/***/ 5814:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ JsxForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_gameConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9395);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_fifty_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1066);
/* harmony import */ var _assets_categories_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1573);
/* harmony import */ var _store_useBoundStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_useBoundStore__WEBPACK_IMPORTED_MODULE_8__]);
_store_useBoundStore__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function JsxForm({ handleInputs , nowQueries  }) {
    const { queries  } = (0,_store_useBoundStore__WEBPACK_IMPORTED_MODULE_8__/* .useBoundStore */ .w)((state)=>state);
    const WILCARDS = [
        {
            name: "Skip question",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsSkipEndFill, {
                color: "white",
                className: "text-2xl"
            }),
            amount: 1
        },
        {
            name: "Delete two wrong questions",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: _assets_fifty_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"].src */ .Z.src,
                alt: "fifty fifty",
                width: 23,
                height: 23
            }),
            amount: 1
        },
        {
            name: "Lives",
            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaHeart, {
                color: "white",
                className: "text-2xl"
            }),
            amount: 1
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-2 sm:gap-5 flex-col",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                        className: "p-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("legend", {
                                className: "text-lg font-semibold mb-2",
                                children: "Wildcards"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "flex gap-3 justify-between font-medium",
                                children: WILCARDS.map(({ name , icon , amount  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "flex gap-2 justify-center items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-[10px] aspect-square rounded text-white bg-blue-500 transition-transform text",
                                                title: name,
                                                children: icon
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-xl",
                                                children: [
                                                    "x",
                                                    amount
                                                ]
                                            })
                                        ]
                                    }, name))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                        className: "p-1 relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("legend", {
                                className: "text-lg font-semibold mb-2",
                                children: "Questions"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "cntr shadow-sm",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        id: "cbx",
                                        onClick: handleInputs,
                                        defaultChecked: !nowQueries.infinitymode,
                                        type: "checkbox",
                                        name: "infinitymode",
                                        className: "w-5 h-5 absolute top-[2px] left-[2px]"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "cbx",
                                        className: "cbx",
                                        title: nowQueries.infinitymode ? "Classic mode" : "Infinity mode"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "range",
                                        name: "questions",
                                        min: _helpers_gameConfig__WEBPACK_IMPORTED_MODULE_2__/* .defaultQuestions.minQuestions */ .yK.minQuestions,
                                        max: _helpers_gameConfig__WEBPACK_IMPORTED_MODULE_2__/* .defaultQuestions.maxQuestions */ .yK.maxQuestions,
                                        defaultValue: nowQueries.questions,
                                        onChange: handleInputs,
                                        className: `w-full cursor-pointer ${nowQueries.infinitymode ? "grayscale cursor-not-allowed" : ""}`,
                                        disabled: nowQueries.infinitymode
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `ml-4 flex justify-center font-semibold h-5 ${nowQueries.infinitymode && "text-[24px]"}`,
                                        children: nowQueries.infinitymode ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__.IoMdInfinite, {}) : nowQueries.questions
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                        className: "p-1 relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("legend", {
                                className: "text-lg font-semibold mb-2",
                                children: "Time"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "cntr shadow-sm !left-14",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        id: "cbx2",
                                        onClick: handleInputs,
                                        defaultChecked: nowQueries.timemode,
                                        type: "checkbox",
                                        name: "timemode",
                                        className: "w-5 h-5 absolute top-[2px] left-[2px]"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        htmlFor: "cbx2",
                                        className: "cbx2",
                                        title: nowQueries.timemode ? "Disable time mode" : "Enable time mode"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex gap-3",
                                children: [
                                    10,
                                    20,
                                    30,
                                    60
                                ].map((time)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        className: "w-full",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "peer absolute hidden",
                                                type: "radio",
                                                name: "time",
                                                id: `${time}s`,
                                                value: time,
                                                defaultChecked: time === Number(nowQueries.time),
                                                onChange: handleInputs,
                                                disabled: !nowQueries.timemode
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: `peer-checked:bg-blue-500 transition-colors  peer-checked:text-white px-2 sm:px-4 py-2 rounded mr-3 cursor-pointer bg-gray-200 text-center w-full inline-block ${!nowQueries.timemode ? "grayscale cursor-not-allowed" : "active:scale-95"}`,
                                                translate: "no",
                                                children: [
                                                    time,
                                                    "s"
                                                ]
                                            })
                                        ]
                                    }, time))
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("legend", {
                        className: "text-lg font-semibold mb-2 mx-1",
                        children: "Categories"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-1 gap-2 h-full",
                        children: _assets_categories_json__WEBPACK_IMPORTED_MODULE_7__.filter((category)=>category.name === "Legislative Department").map((category)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                className: "relative cursor-pointer flex flex-col items-center",
                                title: category.name,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        defaultChecked: queries.categories.includes(category.id),
                                        className: "peer relative h-16 opacity-0 w-full md:h-full block cursor-pointer",
                                        type: "checkbox",
                                        name: "categories",
                                        id: category.name,
                                        value: category.id,
                                        onClick: handleInputs,
                                        disabled: queries.categories.length === 1 && queries.categories.includes(category.id)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        className: `absolute transition-all w-full h-full peer-checked:scale-90 p-2 rounded peer-checked:bg-[${category.color}] invert peer-checked:invert-0 peer-checked:bg-[var(--bgColor)] top-0 pointer-events-none peer-checked:outline-2 peer-checked:outline-offset-2 peer-checked:outline outline-[var(--bgColor)]`,
                                        src: `/categories-icons/${category.name.toLowerCase()}.svg`,
                                        alt: category.name,
                                        width: 40,
                                        height: 40,
                                        style: {
                                            "--bgColor": category.color
                                        }
                                    })
                                ]
                            }, category.id))
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2166:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NewGameForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _JsxForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5814);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_playSound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4795);
/* harmony import */ var _helpers_gameConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9395);
/* harmony import */ var _assets_categories_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1573);
/* harmony import */ var _store_useBoundStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5101);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_JsxForm__WEBPACK_IMPORTED_MODULE_3__, _store_useBoundStore__WEBPACK_IMPORTED_MODULE_7__]);
([_JsxForm__WEBPACK_IMPORTED_MODULE_3__, _store_useBoundStore__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function NewGameForm() {
    const { getQuestions , cleanQuestions , queries , setQueries , cleanWildCards  } = (0,_store_useBoundStore__WEBPACK_IMPORTED_MODULE_7__/* .useBoundStore */ .w)((state)=>state);
    const [nowQueries, setNowQueries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(queries);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const dialog = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setNowQueries(queries), [
        queries
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (router.isReady && router.pathname === "/play") {
            setQueries((0,_helpers_gameConfig__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(router.query));
        }
    }, [
        router.isReady
    ]);
    function handleInputs(e) {
        if (e.target.name === "infinitymode" || e.target.name === "timemode") {
            e.target.checked ? (0,_helpers_playSound__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)("pop-up-on") : (0,_helpers_playSound__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)("pop-up-off");
            return setNowQueries({
                ...nowQueries,
                [e.target.name]: e.target.name === "infinitymode" ? !e.target.checked : e.target.checked
            });
        }
        if (e.target.name === "categories") {
            e.target.checked ? (0,_helpers_playSound__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)("pop-up-on") : (0,_helpers_playSound__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)("pop-up-off");
            return setNowQueries({
                ...nowQueries,
                [e.target.name]: e.target.checked ? [
                    ...nowQueries.categories,
                    e.target.value
                ] : nowQueries.categories.filter((cat)=>cat !== e.target.value)
            });
        }
        (0,_helpers_playSound__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)("pop");
        setNowQueries({
            ...nowQueries,
            [e.target.name]: e.target.value
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        cleanQuestions();
        cleanWildCards();
        const query = Object.keys(nowQueries).map((key)=>`${key}=${nowQueries[key]}`).join("&");
        setQueries((0,_helpers_gameConfig__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(nowQueries));
        router.push({
            pathname: "/play",
            query
        });
        const cate = nowQueries.categories.map((cat)=>_assets_categories_json__WEBPACK_IMPORTED_MODULE_6__.find((c)=>c.id === cat).name);
        if (router.pathname === "/play") getQuestions(cate, nowQueries.infinitymode ? 5 : nowQueries.questions);
        closeDialog();
    }
    function clickOutsideDialog(e) {
        const rect = dialog.current.getBoundingClientRect();
        if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
            closeDialog();
        }
    }
    function closeDialog() {
        (0,_helpers_playSound__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)("pop-down");
        dialog.current.classList.add("hide");
        function handleAnimationEnd() {
            dialog.current.classList.remove("hide");
            dialog.current.close();
            dialog.current.removeEventListener("animationend", handleAnimationEnd);
        }
        dialog.current.addEventListener("animationend", handleAnimationEnd);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dialog", {
        ref: dialog,
        onClick: (e)=>clickOutsideDialog(e),
        id: "newGameDialog",
        className: "fixed top-1/2 w-5/6 sm:w-fit left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-slate-900 m-0 backdrop-blur-lg rounded-md py-9 px-8 md:px-11",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "absolute top-2 right-2 text-3xl hover:scale-110 transition-all",
                onClick: closeDialog,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoCloseSharp, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: (e)=>e.preventDefault(),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col sm:flex-row gap-4 sm:gap-8 mb-4 md:mb-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_JsxForm__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            handleInputs: handleInputs,
                            nowQueries: nowQueries
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "btn-primary uppercase py-3 px-6 w-full tracking-widest",
                        onClick: (e)=>handleSubmit(e),
                        children: "New game"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2730:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_font_google_target_css_path_src_pages_app_js_import_Rubik_arguments_subsets_latin_variableName_rubik___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2499);
/* harmony import */ var _next_font_google_target_css_path_src_pages_app_js_import_Rubik_arguments_subsets_latin_variableName_rubik___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_src_pages_app_js_import_Rubik_arguments_subsets_latin_variableName_rubik___WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Form_NewGameForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2166);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Form_NewGameForm__WEBPACK_IMPORTED_MODULE_4__]);
_components_Form_NewGameForm__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "8b0c8dc90be1d35a",
                            [
                                (_next_font_google_target_css_path_src_pages_app_js_import_Rubik_arguments_subsets_latin_variableName_rubik___WEBPACK_IMPORTED_MODULE_5___default().style.fontFamily)
                            ]
                        ]
                    ])
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps,
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "8b0c8dc90be1d35a",
                        [
                            (_next_font_google_target_css_path_src_pages_app_js_import_Rubik_arguments_subsets_latin_variableName_rubik___WEBPACK_IMPORTED_MODULE_5___default().style.fontFamily)
                        ]
                    ]
                ]) + " " + (pageProps && pageProps.className != null && pageProps.className || "")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Form_NewGameForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "8b0c8dc90be1d35a",
                dynamic: [
                    (_next_font_google_target_css_path_src_pages_app_js_import_Rubik_arguments_subsets_latin_variableName_rubik___WEBPACK_IMPORTED_MODULE_5___default().style.fontFamily)
                ],
                children: `html{font-family:${(_next_font_google_target_css_path_src_pages_app_js_import_Rubik_arguments_subsets_latin_variableName_rubik___WEBPACK_IMPORTED_MODULE_5___default().style.fontFamily)}}`
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 567:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 4751:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io");

/***/ }),

/***/ 9989:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io5");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,675,184], () => (__webpack_exec__(2730)));
module.exports = __webpack_exports__;

})();