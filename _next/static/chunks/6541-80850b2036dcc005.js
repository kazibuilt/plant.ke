"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6541], {
        70182: function (n, t, e) {
            e.d(t, {
                Z: function () {
                    return Z
                }
            });
            var i = e(72253),
                a = e(14932),
                r = e(24043),
                o = e(82729),
                c = e(85893),
                u = e(67294),
                s = e(73460),
                l = e(14636),
                h = e(12560),
                p = e(45697),
                f = e.n(p),
                d = e(14141),
                m = e(83086),
                g = e(52672),
                b = e(78445),
                v = e(62132),
                j = e(46716),
                _ = e(55982);

            function _templateObject() {
                var n = (0, o._)(["\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  ", "\n  padding: 0 ", ";\n  max-width: ", ";\n  width: 100%;\n  margin: 0 auto;\n\n  ", " {\n    ", "\n\n    max-width: initial;\n    padding: 0 ", ";\n    ", "\n  }\n  ", " {\n    padding: 0 ", ";\n\n    ", "\n  }\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }

            function _templateObject1() {
                var n = (0, o._)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: ", ";\n  ", "\n\n  ", " {\n    ", "\n    ", "\n  }\n\n  ", " {\n    ", "\n    ", "\n  }\n"]);
                return _templateObject1 = function () {
                    return n
                }, n
            }

            function _templateObject2() {
                var n = (0, o._)(["\n  width: 100%;\n  height: 100%;\n\n  background-color: var(--color-lightGrey2);\n"]);
                return _templateObject2 = function () {
                    return n
                }, n
            }

            function _templateObject3() {
                var n = (0, o._)(["\n  ", " {\n    ", "\n  }\n"]);
                return _templateObject3 = function () {
                    return n
                }, n
            }
            var x = d.ZP.section.withConfig({
                    componentId: "sc-2e0fab35-0"
                })(_templateObject(), function (n) {
                    var t = n.itemHasMargin;
                    return "gap: ".concat(t ? 96 : 8, "px;")
                }, (0, j.EV)(1), (0, j.o0)(540), _.qk.s, function (n) {
                    var t = n.amount,
                        e = n.anyAssetHasBiggerWidth,
                        i = n.assetWithBiggerWidth;
                    return e ? "right" === i ? "grid-template-columns:1fr ".concat((0, j.BT)(49.5), ";") : "grid-template-columns: ".concat((0, j.BT)(49.5), " 1fr;") : "grid-template-columns: repeat(".concat(t, ", 1fr);")
                }, (0, j.BT)(2), function (n) {
                    var t = n.itemHasMargin;
                    return "gap: ".concat(t ? 48 : 8, "px;")
                }, _.qk.m, (0, j.hl)(4), function (n) {
                    var t = n.amount,
                        e = n.anyAssetHasBiggerWidth,
                        i = n.assetWithBiggerWidth;
                    return e ? "right" === i ? "grid-template-columns:1fr ".concat((0, j.hl)(93), ";") : "grid-template-columns: ".concat((0, j.hl)(93), " 1fr;") : "grid-template-columns: repeat(".concat(t, ", 1fr);")
                }),
                O = (0, d.ZP)(h.m.div).withConfig({
                    componentId: "sc-2e0fab35-1"
                })(_templateObject1(), (0, j.o0)(14), function (n) {
                    return n.$hasMargin && "padding: 0 ".concat((0, j.EV)(9), ";")
                }, _.qk.s, function (n) {
                    return n.$hasMargin && "padding: 0 ".concat((0, j.BT)(7), ";")
                }, function (n) {
                    return n.$alignWithText && "margin: 0 ".concat((0, j.BT)(12), " 0 ").concat((0, j.BT)(18), ";")
                }, _.qk.m, function (n) {
                    return n.$hasMargin && "padding: 0 ".concat((0, j.hl)(11), ";")
                }, function (n) {
                    return n.$alignWithText && "\n        margin: 0 ".concat((0, j.hl)(36), " 0 ").concat((0, j.hl)(50), ";\n        max-width: ").concat((0, j.o0)(645), ";\n      ")
                }),
                y = d.ZP.div.withConfig({
                    componentId: "sc-2e0fab35-2"
                })(_templateObject2()),
                w = d.ZP.div.withConfig({
                    componentId: "sc-2e0fab35-3"
                })(_templateObject3(), _.qk.medium, function (n) {
                    return !n.$hasMargin && "\n        position: absolute;\n        bottom: ".concat((0, j.o0)(-28), ";\n    ")
                }),
                Visuals = function (n) {
                    var t = n.caption,
                        e = n.containerSpread,
                        r = n.visuals,
                        o = n.bigger_width_image,
                        s = (0, u.useRef)(0),
                        h = (0, l.Z)(_.t2.m) ? 0 : 1,
                        p = r.some(function (n) {
                            return n.hasMargin
                        });
                    return r.forEach(function (n, t) {
                        var e = n.hasMargin;
                        p ? e && (s.current = t) : s.current = h
                    }), (0, c.jsx)(x, (0, a._)((0, i._)({
                        itemHasMargin: p,
                        amount: r.length
                    }, e), {
                        anyAssetHasBiggerWidth: !!o,
                        assetWithBiggerWidth: o,
                        children: r.map(function (n, e) {
                            var i = n.media,
                                a = n.hasMargin;
                            return (null == i ? void 0 : i.filename) ? (0, u.createElement)(Visual, {
                                asset: i,
                                hasMargin: a,
                                i: e,
                                caption: t,
                                captionIndex: s.current,
                                isSingleAsset: 1 === r.length,
                                key: e
                            }) : null
                        })
                    }))
                },
                Visual = function (n) {
                    var t, e, i, a = n.asset,
                        o = n.hasMargin,
                        l = n.i,
                        h = n.caption,
                        p = n.captionIndex,
                        f = n.isSingleAsset,
                        d = (0, g.Co)(a),
                        j = null == d ? void 0 : null === (t = d.dimensions) || void 0 === t ? void 0 : t.ratio,
                        _ = (0, r._)((0, s.Z)(), 2),
                        x = _[0],
                        Z = _[1].width / j,
                        T = null == h ? void 0 : null === (i = h.content) || void 0 === i ? void 0 : null === (e = i[0]) || void 0 === e ? void 0 : e.content,
                        k = (d || {}).dimensions,
                        q = (null == k ? void 0 : k.ratio) < 1 && f,
                        C = (0, u.useRef)(),
                        M = (0, m.Z)({
                            ref: C,
                            weight: o ? 2 : 0,
                            direction: 0 === l ? "up" : "down",
                            range: [-50, 50]
                        });
                    return (0, c.jsxs)(O, {
                        style: {
                            y: M
                        },
                        $hasMargin: o,
                        $alignWithText: q,
                        ref: C,
                        children: [(0, c.jsx)(y, {
                            $hasMargin: o,
                            ref: x,
                            style: o ? {
                                height: Z
                            } : {
                                minHeight: Z
                            },
                            children: (0, c.jsx)(b.Z, {
                                asset: d,
                                layout: "fill",
                                fit: "cover",
                                loop: !0
                            })
                        }), T && p === l ? (0, c.jsx)(w, {
                            $hasMargin: o,
                            children: (0, c.jsx)(v.Z, {
                                text: h,
                                font: "p3",
                                tag: "p",
                                fontLink: "p3"
                            })
                        }) : null]
                    })
                };
            Visuals.propTypes = {
                caption: f().object,
                containerSpread: f().object,
                visuals: f().array,
                bigger_width_image: f().oneOf(["right", "left", ""])
            };
            var Z = Visuals
        },
        16165: function (n, t, e) {
            e.d(t, {
                Z: function () {
                    return A
                }
            });
            var i = e(85893),
                a = e(45697),
                r = e.n(a),
                o = e(61983),
                c = e(72253),
                u = e(14932),
                s = e(82729),
                l = e(14141),
                h = e(80328),
                p = e(82924),
                EmDashLabel = function (n) {
                    var t = n.className,
                        e = n.label,
                        a = n.font;
                    return (0, i.jsxs)(p.Z, {
                        className: t,
                        font: a,
                        children: ["— ", e]
                    })
                };
            EmDashLabel.propTypes = {
                className: r().string,
                label: r().string.isRequired,
                font: r().oneOf(Object.keys(h.g).map(function (n) {
                    return n
                }))
            };
            var f = e(62132),
                d = e(46716),
                m = e(55982);

            function _templateObject() {
                var n = (0, s._)(["\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  gap: ", ";\n\n  margin: 0 ", ";\n\n  ", " {\n    margin: 0 ", " 0 ", ";\n  }\n\n  ", " {\n    margin: 0 ", " 0 ", ";\n  }\n\n  p {\n    max-width: ", ";\n  }\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }
            var g = l.ZP.section.withConfig({
                    componentId: "sc-4440f2ff-0"
                })(_templateObject(), (0, d.o0)(8), (0, d.EV)(2), m.qk.s, (0, d.BT)(13), (0, d.BT)(19), m.qk.m, (0, d.hl)(39), (0, d.hl)(54), (0, d.o0)(645)),
                QuoteDefaultLayout = function (n) {
                    var t = n.quote,
                        e = n.author,
                        a = n.containerSpread;
                    return (0, i.jsxs)(g, (0, u._)((0, c._)({}, a), {
                        children: [(0, i.jsx)(f.Z, {
                            font: "h7",
                            fontItalic: "h7b",
                            text: t
                        }), !!e.length && (0, i.jsx)(EmDashLabel, {
                            font: "b2",
                            label: e
                        })]
                    }))
                };
            QuoteDefaultLayout.propTypes = {
                quote: r().oneOfType([r().object, r().string]),
                author: r().string,
                containerSpread: r().object
            };
            var b = e(67294),
                v = e(12560),
                j = e(61117),
                _ = e(24043),
                x = e(16430),
                O = e(92231),
                useScrollProgress = function (n) {
                    var t = n.element,
                        e = n.disabled,
                        i = void 0 !== e && e,
                        a = (0, _._)((0, b.useState)(0), 2),
                        r = a[0],
                        o = a[1],
                        getAnimationBounds = function () {
                            var n = (0, x.r7)(t.current).top,
                                e = n - window.innerHeight;
                            return e < 0 && (0 === window.scrollY || e + window.scrollY < 0) && (e = 0), [e, n + t.current.offsetHeight]
                        },
                        getAnimationPercent = function (n) {
                            var t = getAnimationBounds();
                            return (0, x.UI)([t[0], t[1]], [0, 1], n)
                        };
                    return (0, O.Z)(function (n) {
                        o(getAnimationPercent(n))
                    }, [t], !i), r
                },
                y = e(78445);

            function QuoteWithAsset_templateObject() {
                var n = (0, s._)(["\n  position: relative;\n\n  height: 150vh;\n\n  ", " {\n    height: 130vh;\n  }\n\n  ", " {\n    height: 200vh;\n  }\n"]);
                return QuoteWithAsset_templateObject = function () {
                    return n
                }, n
            }

            function _templateObject1() {
                var n = (0, s._)(["\n  position: sticky;\n  top: -20vh; //? height - 100vh\n\n  height: 120vh;\n\n  overflow: hidden;\n  background-color: var(--color-lightGrey2);\n\n  ", " {\n    top: -50vh; //? height - 100vh\n\n    height: 150vh;\n  }\n"]);
                return _templateObject1 = function () {
                    return n
                }, n
            }

            function _templateObject2() {
                var n = (0, s._)(["\n  width: 100%;\n  height: 100%;\n"]);
                return _templateObject2 = function () {
                    return n
                }, n
            }

            function _templateObject3() {
                var n = (0, s._)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n\n  width: 100%;\n  height: 100%;\n\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));\n\n  opacity: 0;\n"]);
                return _templateObject3 = function () {
                    return n
                }, n
            }

            function _templateObject4() {
                var n = (0, s._)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n\n  display: grid;\n  place-content: center;\n  height: 100vh;\n  margin: ", " ", ";\n\n  ", " {\n    margin: ", " ", " ", " ", ";\n  }\n\n  ", " {\n    margin: ", " ", " ", " ", ";\n  }\n"]);
                return _templateObject4 = function () {
                    return n
                }, n
            }

            function _templateObject5() {
                var n = (0, s._)(["\n  position: sticky;\n  top: 20vh;\n\n  display: flex;\n  align-items: flex-end;\n  flex-direction: column;\n  gap: ", ";\n\n  color: var(--color-white);\n\n  ", " {\n    gap: ", ";\n  }\n"]);
                return _templateObject5 = function () {
                    return n
                }, n
            }

            function _templateObject6() {
                var n = (0, s._)(["\n  ", " {\n    position: absolute;\n    bottom: 0.5ch;\n    right: 0;\n  }\n"]);
                return _templateObject6 = function () {
                    return n
                }, n
            }
            var w = l.ZP.section.withConfig({
                    componentId: "sc-62270ca-0"
                })(QuoteWithAsset_templateObject(), m.qk.s, m.qk.m),
                Z = l.ZP.div.withConfig({
                    componentId: "sc-62270ca-1"
                })(_templateObject1(), m.qk.m),
                T = l.ZP.div.withConfig({
                    componentId: "sc-62270ca-2"
                })(_templateObject2()),
                k = (0, l.ZP)(v.m.div).withConfig({
                    componentId: "sc-62270ca-3"
                })(_templateObject3()),
                q = l.ZP.div.withConfig({
                    componentId: "sc-62270ca-4"
                })(_templateObject4(), (0, d.o0)(40), (0, d.EV)(2), m.qk.s, (0, d.o0)(40), (0, d.BT)(19), (0, d.o0)(40), (0, d.BT)(21), m.qk.m, (0, d.o0)(40), (0, d.hl)(60), (0, d.o0)(40), (0, d.hl)(54)),
                C = (0, l.ZP)(v.m.div).withConfig({
                    componentId: "sc-62270ca-5"
                })(_templateObject5(), (0, d.o0)(8), m.qk.m, (0, d.o0)(12)),
                M = (0, l.ZP)(EmDashLabel).withConfig({
                    componentId: "sc-62270ca-6"
                })(_templateObject6(), m.qk.s),
                QuoteWithAsset = function (n) {
                    var t = n.asset,
                        e = n.quote,
                        a = n.author,
                        r = n.containerSpread,
                        o = (0, b.useRef)(),
                        s = (0, j.Y)(o),
                        l = useScrollProgress({
                            element: o,
                            disabled: !s
                        }),
                        h = l > .5 && l < .95;
                    return (0, i.jsxs)(w, (0, u._)((0, c._)({
                        ref: o
                    }, r), {
                        children: [(0, i.jsx)(q, {
                            children: (0, i.jsxs)(C, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: h ? 1 : 0
                                },
                                transition: {
                                    duration: .3,
                                    bounce: !1
                                },
                                children: [(0, i.jsx)(f.Z, {
                                    font: "h3",
                                    fontItalic: "h3b",
                                    text: e
                                }), (0, i.jsx)(M, {
                                    font: "b2",
                                    label: a
                                })]
                            })
                        }), (0, i.jsx)(k, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: h ? 1 : 0
                            },
                            transition: {
                                duration: .6
                            }
                        }), (0, i.jsx)(Z, {
                            children: (0, i.jsx)(T, {
                                children: (0, i.jsx)(y.Z, {
                                    asset: t,
                                    shouldFormatImage: !0
                                })
                            })
                        })]
                    }))
                };
            QuoteWithAsset.propTypes = {
                quote: r().object,
                author: r().string,
                asset: r().shape({
                    small: r().object,
                    medium: r().object,
                    large: r().object
                }),
                containerSpread: r().object
            };
            var Quote = function (n) {
                var t = n.media,
                    e = n.quote,
                    a = n.containerSpread,
                    r = n.author,
                    c = (0, o.Z)(t);
                return (null == c ? void 0 : c.filename) ? (0, i.jsx)(QuoteWithAsset, {
                    asset: c,
                    quote: e,
                    author: r,
                    containerSpread: a
                }) : (0, i.jsx)(QuoteDefaultLayout, {
                    quote: e,
                    author: r,
                    containerSpread: a
                })
            };
            Quote.propTypes = {
                quote: r().oneOfType([r().object, r().string]),
                author: r().string,
                asset: r().shape({
                    small: r().object,
                    medium: r().object,
                    large: r().object
                }),
                containerSpread: r().object
            };
            var A = Quote
        },
        83086: function (n, t, e) {
            var i = e(14636),
                a = e(68913),
                r = e(80578),
                o = e(55982);
            t.Z = function (n) {
                var t = n.ref,
                    e = n.direction,
                    c = n.weight,
                    u = void 0 === c ? 1 : c,
                    s = n.range,
                    l = void 0 === s ? [-30, 30] : s,
                    h = n.allowOnMobile,
                    p = (0, i.Z)(o.t2.m),
                    f = "up" === (void 0 === e ? "down" : e) ? -1 : 1,
                    d = (0, a.v)({
                        target: t,
                        offset: ["start end", "end start"]
                    }).scrollYProgress,
                    m = (0, r.H)(d, [0, 1], [l[0] * u * f, l[1] * u * f]);
                return void 0 !== h && h ? m : p ? m : 0
            }
        },
        75262: function (n, t, e) {
            e.d(t, {
                f: function () {
                    return useMultiOnChange
                },
                p: function () {
                    return useOnChange
                }
            });
            var i = e(40406),
                a = e(58868);

            function useOnChange(n, t) {
                (0, a.L)(() => {
                    if ((0, i.i)(n)) return t(n.get()), n.onChange(t)
                }, [n, t])
            }

            function useMultiOnChange(n, t, e) {
                (0, a.L)(() => {
                    let i = n.map(n => n.onChange(t));
                    return () => {
                        i.forEach(n => n()), e()
                    }
                })
            }
        },
        80578: function (n, t, e) {
            e.d(t, {
                H: function () {
                    return useTransform
                }
            });
            var i = e(64606);
            let isCustomValueType = n => "object" == typeof n && n.mix,
                getMixer = n => isCustomValueType(n) ? n.mix : void 0;
            var a = e(4960),
                r = e(75262),
                o = e(30404),
                c = e(96681);

            function useTransform(n, t, e, a) {
                let r = "function" == typeof t ? t : function (...n) {
                    let t = !Array.isArray(n[0]),
                        e = t ? 0 : -1,
                        a = n[0 + e],
                        r = n[1 + e],
                        o = n[2 + e],
                        c = n[3 + e],
                        u = (0, i.s)(r, o, {
                            mixer: getMixer(o[0]),
                            ...c
                        });
                    return t ? u(a) : u
                }(t, e, a);
                return Array.isArray(n) ? useListTransform(n, r) : useListTransform([n], ([n]) => r(n))
            }

            function useListTransform(n, t) {
                let e = (0, c.h)(() => []);
                return function (n, t) {
                    let e = (0, a.c)(t()),
                        updateValue = () => e.set(t());
                    return updateValue(), (0, r.f)(n, () => o.Z_.update(updateValue, !1, !0), () => o.qY.update(updateValue)), e
                }(n, () => {
                    e.length = 0;
                    let i = n.length;
                    for (let t = 0; t < i; t++) e[t] = n[t].get();
                    return t(e)
                })
            }
        }
    }
]);