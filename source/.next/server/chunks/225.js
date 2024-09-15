"use strict";
exports.id = 225;
exports.ids = [225];
exports.modules = {

/***/ 225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/helpers/playSound.js
var playSound = __webpack_require__(4795);
;// CONCATENATED MODULE: ./src/assets/sound-on.svg
/* harmony default export */ const sound_on = ({"src":"/_next/static/media/sound-on.e69bf29d.svg","height":16,"width":16});
;// CONCATENATED MODULE: ./src/assets/sound-off.svg
/* harmony default export */ const sound_off = ({"src":"/_next/static/media/sound-off.52e82e1b.svg","height":16,"width":16});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: external "react-icons/go"
var go_ = __webpack_require__(5856);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: ./src/components/PageFooter.jsx









function Footer({ alert =false  }) {
    const [sound, setSound] = (0,external_react_.useState)(false);
    const [showInfo, setShowInfo] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (!localStorage.getItem("sound")) localStorage.setItem("sound", sound);
        else setSound(localStorage.getItem("sound") === "true");
    }, []);
    (0,external_react_.useEffect)(()=>localStorage.setItem("sound", sound), [
        sound
    ]);
    function handleClick(info = false) {
        info ? setShowInfo(!showInfo) : setSound(!sound);
        (0,playSound/* default */.Z)("switch-on");
    }
    function handleSoundON() {
        setSound(true);
        localStorage.setItem("sound", true);
        (0,playSound/* default */.Z)("switch-on");
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "fixed right-4 bottom-3 z-20",
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "flex gap-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        title: sound ? "Mute" : "Play music",
                        className: "align-middle hover:scale-105 p-1.5 bg-white rounded-md",
                        children: sound ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: sound_on,
                            alt: "",
                            width: 25,
                            height: 25,
                            onClick: ()=>setSound(false)
                        }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: sound_off,
                            alt: "",
                            width: 25,
                            height: 25,
                            onClick: handleSoundON
                        })
                    })
                })
            })
        })
    });
}


/***/ })

};
;