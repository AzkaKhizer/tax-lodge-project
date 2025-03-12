(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_e376ff._.js", {

"[project]/src/app/components/Pricing.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const plans = [
    {
        title: "Online Tax Return",
        price: "$99 / month",
        features: [
            "Salary and Wages income",
            "All work deductions included",
            "Eligible tax offsets applied",
            "Private Health Insurance",
            "Electronic signature",
            "Fast, easy and simple",
            "Prepared by Tax Accountant",
            "Additional charges may apply in supplementary section income"
        ],
        bgColor: "bg-white",
        textColor: "text-black",
        tickColor: "text-white",
        borderColor: "border-[#FF8B66]",
        borderBgColor: "bg-[#FF8B66]"
    },
    {
        title: "Complex Online Tax Return",
        price: "$245 / month",
        features: [
            "Salary and Wages income",
            "All work deductions included",
            "One Rental Property",
            "One Capital Gain",
            "10 Dividend income &",
            "$10 Additional dividend income",
            "Eligible tax offsets applied",
            "Private Health Insurance",
            "Electronic signature",
            "Fast, easy and simple",
            "Prepared by Tax Accountant"
        ],
        bgColor: "bg-orange-200",
        textColor: "text-black",
        tickColor: "text-[#FF8B66]",
        borderColor: "border-white",
        borderBgColor: "bg-white"
    },
    {
        title: "Sole Trader Online Tax Return",
        price: "$245 / month",
        features: [
            "Single Business income",
            "Business expenses",
            "EOFY GST Reconciliation",
            "All eligible deductions claimed",
            "Eligible tax offsets applied",
            "Private Health Insurance",
            "Electronic signature",
            "Prepared by Tax Accountant",
            "Additional charges apply where multiple business income"
        ],
        bgColor: "bg-orange-100",
        textColor: "text-black",
        tickColor: "text-[#FF8B66]",
        borderColor: "border-white",
        borderBgColor: "bg-white"
    },
    {
        title: "Rideshare Driver Tax Return",
        price: "$180 / month",
        features: [
            "Rideshare income",
            "Rideshare expenses",
            "EOFY GST Reconciliation",
            "All eligible deductions claimed",
            "Eligible tax offsets applied",
            "Private Health Insurance",
            "Electronic signature",
            "Fast, easy and simple",
            "Prepared by Tax Accountant"
        ],
        bgColor: "bg-white",
        textColor: "text-black",
        tickColor: "text-white",
        borderColor: "border-[#FF8B66]",
        borderBgColor: "bg-[#FF8B66]"
    }
];
const priceplans = [
    {
        heading: "Partnership Tax Return",
        price: "$495 / month",
        features: [
            "Partnership income",
            "Partnership expenses",
            "Partnership income distributed",
            "Eligible tax offsets applied",
            "Electronic signature",
            "Fast, simple and easy",
            "Prepared by Tax Accountant"
        ],
        bgColor: "bg-white",
        textColor: "text-black",
        tickColor: "text-white",
        borderColor: "border-[#FF8B66]",
        borderBgColor: "bg-[#FF8B66]"
    },
    {
        heading: "Company Tax Return",
        price: "$1195 / month",
        features: [
            "Company Income Statement",
            "Company Balance Sheet",
            "EOFY GST Reconciliation",
            "PAYGW Reconciliation",
            "Electronic signature",
            "Fast, easy and simple",
            "Prepared by Tax Accountant"
        ],
        bgColor: "bg-orange-200",
        textColor: "text-black",
        tickColor: "text-[#FF8B66]",
        borderColor: "border-white",
        borderBgColor: "bg-white"
    },
    {
        heading: "Trust Tax Return",
        price: "$1195 / month",
        features: [
            "Trust Income Statement",
            "Trust Balance Sheet",
            "EOFY GST Reconciliation",
            "PAYGW Reconciliation",
            "Electronic signature",
            "Fast, easy and simple",
            "Prepared by Tax Accountant"
        ],
        bgColor: "bg-orange-100",
        textColor: "text-black",
        tickColor: "text-[#FF8B66]",
        borderColor: "border-white",
        borderBgColor: "bg-white"
    },
    {
        heading: "Business Activity Statements",
        price: "$215 / month",
        features: [
            "GST Calculated",
            "PAYGW for up to 2 Employees",
            "PAYG Installment",
            "Electronic signature",
            "Prepared by Tax Accountant"
        ],
        bgColor: "bg-white",
        textColor: "text-black",
        tickColor: "text-white",
        borderColor: "border-[#FF8B66]",
        borderBgColor: "bg-[#FF8B66]"
    }
];
const Pricing = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-10 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold text-center mb-10 mt-10",
                    children: "Individual & Sole Trader Tax Returns"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Pricing.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center gap-6",
                    children: [
                        plans.map((plan, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: `w-[416px] h-[580px] p-6 rounded-lg shadow-lg ${plan.bgColor} ${plan.textColor} flex flex-col`,
                                initial: {
                                    opacity: 0,
                                    y: 50
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                whileHover: {
                                    scale: 1.05,
                                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: index * 0.2
                                },
                                viewport: {
                                    once: true
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-center",
                                        children: plan.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Pricing.tsx",
                                        lineNumber: 181,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg font-semibold mt-2 text-center",
                                        children: plan.price
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Pricing.tsx",
                                        lineNumber: 182,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-4 space-y-2 text-sm flex-grow",
                                        children: plan.features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `rounded-full w-6 h-6 flex items-center justify-center mr-2 border-2 ${plan.borderColor} ${plan.borderBgColor}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: `h-4 w-4 ${plan.tickColor}`,
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            strokeWidth: 3,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                d: "M5 13l4 4L19 7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/Pricing.tsx",
                                                                lineNumber: 196,
                                                                columnNumber: 15
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Pricing.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 13
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Pricing.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 11
                                                    }, this),
                                                    feature
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/app/components/Pricing.tsx",
                                                lineNumber: 185,
                                                columnNumber: 9
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Pricing.tsx",
                                        lineNumber: 183,
                                        columnNumber: 5
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "mt-1 w-full mb-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
                                        children: "GET STARTED"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Pricing.tsx",
                                        lineNumber: 203,
                                        columnNumber: 5
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/components/Pricing.tsx",
                                lineNumber: 172,
                                columnNumber: 3
                            }, this)),
                        "))}"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Pricing.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "flex justify-center items-center md:w-[850px] md:ml-32 mt-10",
                    children: "* Excludes Tax Returns that needs inclusion of supplementary section that can include income or loss from investment property, capital gains, foreign income and business."
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Pricing.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold text-center mt-28 mb-10",
                    children: "Partnership & Business Entity Tax Returns"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Pricing.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center gap-6 mt-6",
                    children: priceplans.map((plan, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: `w-[416px] h-[580px] p-6 rounded-lg shadow-lg ${plan.bgColor} ${plan.textColor} flex flex-col transition-transform duration-300 hover:scale-105`,
                            initial: {
                                opacity: 0,
                                y: 50
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6,
                                delay: index * 0.2
                            },
                            viewport: {
                                once: true
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-center",
                                    children: plan.heading
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Pricing.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold mt-2 text-center",
                                    children: plan.price
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Pricing.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-4 space-y-2 text-sm flex-grow",
                                    children: plan.features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `rounded-full w-6 h-6 flex items-center justify-center mr-2 border-2 ${plan.borderColor} ${plan.borderBgColor}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: `h-4 w-4 ${plan.tickColor}`,
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        strokeWidth: 3,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            d: "M5 13l4 4L19 7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/Pricing.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/Pricing.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/Pricing.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 21
                                                }, this),
                                                feature
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/app/components/Pricing.tsx",
                                            lineNumber: 231,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Pricing.tsx",
                                    lineNumber: 229,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "mt-1 w-full mb-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
                                    children: "GET STARTED"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Pricing.tsx",
                                    lineNumber: 241,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/components/Pricing.tsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Pricing.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Pricing.tsx",
            lineNumber: 165,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Pricing.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
};
_c = Pricing;
const __TURBOPACK__default__export__ = Pricing;
var _c;
__turbopack_refresh__.register(_c, "Pricing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/pricing/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_e376ff._.js.map