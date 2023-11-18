"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4278], {
        60167: function (n, t, e) {
            e.d(t, {
                $: function () {
                    return r
                }
            });
            var r = {
                self: "self",
                container: "container"
            }
        },
        35348: function (n, t, e) {
            e.d(t, {
                Z: function () {
                    return _
                }
            });
            var r = e(72253),
                o = e(14932),
                i = e(24043),
                a = e(82729),
                c = e(85893),
                l = e(45697),
                u = e.n(l),
                s = e(14141),
                f = e(46571),
                p = e(32603),
                m = e(45449),
                d = e(40475),
                b = e(80328),
                h = e(60167);

            function _templateObject() {
                var n = (0, a._)(["\n  position: relative;\n\n  ", "\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }

            function _templateObject1() {
                var n = (0, a._)(["\n  position: relative;\n\n  ", "\n"]);
                return _templateObject1 = function () {
                    return n
                }, n
            }
            var v = (0, s.ZP)(p.default).withConfig({
                    componentId: "sc-39b5e040-0"
                })(_templateObject(), function (n) {
                    return n.entireContainerIsInteractable && "\n    &:after {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      content: '';\n      top: 0;\n      left: 0;\n    }\n  "
                }),
                g = s.ZP.button.withConfig({
                    componentId: "sc-39b5e040-1"
                })(_templateObject1(), function (n) {
                    return n.entireContainerIsInteractable && "\n    &:after {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      content: '';\n      top: 0;\n      left: 0;\n    }\n  "
                }),
                FlipLettersButtonOrLink = function (n) {
                    var t = n.className,
                        e = n.label,
                        a = n.font,
                        l = n.slug,
                        u = n.underline,
                        s = n.onClick,
                        p = n.brackets,
                        b = n.flipCharsAmount,
                        _ = n.interactionArea,
                        j = n.as,
                        O = n.href,
                        A = n.external,
                        x = (0, i._)(A ? [f.default, {
                            href: O
                        }] : l ? [v, {
                            slug: l
                        }] : [g, {}], 2),
                        k = x[0],
                        w = x[1],
                        L = _ === h.$.container;
                    return (0, c.jsxs)(k, (0, o._)((0, r._)({
                        as: j,
                        className: t,
                        entireContainerIsInteractable: L
                    }, w), {
                        onClick: function () {
                            return s && s()
                        },
                        children: [p && (0, c.jsx)(m.Z, {
                            symbol: "[",
                            font: a
                        }), (0, c.jsx)(d.Z, {
                            label: e,
                            font: a,
                            underline: u,
                            flipCharsAmount: b
                        }), p && (0, c.jsx)(m.Z, {
                            symbol: "]",
                            font: a
                        })]
                    }))
                };
            FlipLettersButtonOrLink.defaultProps = {
                font: "b3",
                underline: !1,
                onClick: function () {},
                brackets: !1,
                flipCharsAmount: 6,
                label: "",
                interactionArea: u().oneOf(Object.keys(h.$).map(function (n) {
                    return n
                })),
                external: !1
            }, FlipLettersButtonOrLink.propTypes = {
                className: u().string,
                onClick: u().func,
                slug: u().string,
                label: u().string.isRequired,
                underline: u().bool,
                brackets: u().bool,
                font: u().oneOf(Object.keys(b.g).map(function (n) {
                    return n
                })),
                external: u().bool,
                href: u().string
            };
            var _ = FlipLettersButtonOrLink
        },
        11342: function (n, t, e) {
            e.d(t, {
                Z: function () {
                    return h
                }
            });
            var r = e(82729),
                o = e(85893),
                i = e(67294),
                a = e(11163),
                c = e(45697),
                l = e.n(c),
                u = e(14141),
                s = e(56856),
                f = e(41897),
                p = e(46716),
                m = e(55982),
                d = e(35348);

            function _templateObject() {
                var n = (0, r._)(["\n  display: flex;\n  justify-content: center;\n  padding: ", " ", ";\n  width: 100%;\n  margin: 0 auto;\n\n  color: var(--color-white);\n  background-color: var(--color-black);\n  border-radius: ", ";\n\n  ", " {\n    width: max-content;\n    padding: ", " ", ";\n  }\n\n  ", " {\n    padding: ", " ", ";\n  }\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }
            var b = (0, u.ZP)(d.Z).withConfig({
                    componentId: "sc-84bc0c5b-0"
                })(_templateObject(), (0, p.o0)(9), (0, p.EV)(14), p.dG, m.qk.s, (0, p.o0)(9), (0, p.BT)(14), m.qk.m, (0, p.o0)(9), (0, p.hl)(14)),
                LoadMore = function (n) {
                    var t = n.className,
                        e = (0, a.useRouter)(),
                        r = e.push,
                        c = e.asPath,
                        l = (0, f.Z)("journal"),
                        u = (0, i.useRef)(2);
                    return (0, o.jsx)(b, {
                        className: t,
                        label: l("loadMoreArticles"),
                        font: "b3",
                        onClick: function () {
                            return r("".concat((0, s.f)(c), "?page=").concat(u.current++), void 0, {
                                scroll: !1
                            })
                        }
                    })
                };
            LoadMore.propTypes = {
                className: l().string
            };
            var h = LoadMore
        },
        40475: function (n, t, e) {
            e.d(t, {
                Z: function () {
                    return v
                }
            });
            var r = e(24043),
                o = e(82729),
                i = e(248),
                a = e(85893),
                c = e(67294),
                l = e(88459),
                u = e(45697),
                s = e.n(u),
                f = e(14141),
                p = e(16430),
                m = e(82924),
                d = e(80328);

            function _templateObject() {
                var n = (0, o._)(["\n  ", "\n\n  &:after {\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 100%;\n    height: 100%;\n\n    content: '';\n  }\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }
            var b = (0, f.ZP)(m.Z).withConfig({
                    componentId: "sc-d8186b59-0"
                })(_templateObject(), function (n) {
                    return n.underline && "text-decoration: underline; \n    text-decoration-thickness: 1px;\n    text-underline-offset: 1px;"
                }),
                h = "abcdefghijklmnopqrstuvwxyz!@\xa3$%^€|/()?&*+<>".split(""),
                FlipLetters = function (n) {
                    var t = n.label,
                        e = n.font,
                        o = n.underline,
                        u = n.flipCharsAmount,
                        s = (0, c.useRef)(0),
                        f = (0, r._)((0, c.useState)(t.split("")), 2),
                        m = f[0],
                        d = f[1],
                        v = (0, r._)((0, c.useState)(!1), 2),
                        g = v[0],
                        _ = v[1],
                        j = (0, r._)((0, c.useState)(0), 2),
                        O = j[0],
                        A = j[1];
                    return (0, c.useEffect)(function () {
                        g || d(t.split(""))
                    }, [g, t]), (0, l.p)(function (n) {
                        var e = ~~(0, p.UI)([0, 85], [0, 1], n);
                        if ("" !== m && g) {
                            if (O > u) {
                                d(t.split(""));
                                return
                            }
                            if (e % 1 == 0 && s.current !== e) {
                                var _loop = function (n) {
                                    var t = h[Math.floor(Math.random() * h.length)];
                                    d(function (e) {
                                        return (0, i._)(e.slice(0, n)).concat([t], (0, i._)(e.slice(n + 1)))
                                    })
                                };
                                s.current = e;
                                for (var r = 0; r < m.length; r++) _loop(r);
                                A(function (n) {
                                    return n + 1
                                })
                            }
                        }
                    }), (0, a.jsx)(b, {
                        font: e,
                        underline: o,
                        onMouseEnter: function () {
                            _(!0)
                        },
                        onMouseLeave: function () {
                            _(!1), A(0)
                        },
                        tag: "span",
                        children: g ? m.map(function (n, t) {
                            return (0, a.jsx)("span", {
                                children: n
                            }, t)
                        }) : t
                    })
                };
            FlipLetters.defaultProps = {
                font: "b3",
                underline: !1,
                flipCharsAmount: 6,
                label: ""
            }, FlipLetters.propTypes = {
                font: s().oneOf(Object.keys(d.g).map(function (n) {
                    return n
                })),
                underline: s().bool,
                slug: s().string,
                flipCharsAmount: s().number
            };
            var v = FlipLetters
        },
        94278: function (n, t, e) {
            e.d(t, {
                Z: function () {
                    return G
                }
            });
            var r = e(72253),
                o = e(14932),
                i = e(24043),
                a = e(82729),
                c = e(85893),
                l = e(67294),
                u = e(45697),
                s = e.n(u),
                f = e(14141),
                p = e(60428),
                m = e(11342),
                d = e(82924),
                b = e(46716),
                h = e(55982),
                v = e(11163),
                g = e(22138),
                _ = e(61983),
                j = e(32603),
                O = e(78445),
                A = e(54831),
                x = e(10640),
                k = e(77159),
                w = e(14636),
                L = e(31632),
                y = e(12560),
                T = e(65820),
                Z = e(70024),
                C = e(87712);

            function _templateObject() {
                var n = (0, a._)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n\n  pointer-events: none;\n  z-index: -1;\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }

            function _templateObject1() {
                var n = (0, a._)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n"]);
                return _templateObject1 = function () {
                    return n
                }, n
            }
            var J = (0, f.ZP)(y.m.div).withConfig({
                    componentId: "sc-ea5d9759-0"
                })(_templateObject()),
                I = f.ZP.span.withConfig({
                    componentId: "sc-ea5d9759-1"
                })(_templateObject1()),
                JournalThumbnailHoverBackground = function (n) {
                    var t = n.asset,
                        e = n.poster,
                        r = n.isHovered,
                        o = n.slug,
                        i = n.mouseLeaveListOfArticles,
                        a = (0, Z.b9)(C.Oj),
                        u = (0, w.Z)(h.t2.m),
                        s = (0, k.Z)();
                    return (0, l.useEffect)(function () {
                        if (!s || !u || i) {
                            a(C.np.lightGrey);
                            return
                        }
                        a(C.np.journalHoverBackground)
                    }, [i, u, s, a]), (0, c.jsx)(T.M, {
                        mode: "wait",
                        children: r && (0, c.jsxs)(J, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: 1,
                                ease: L.M4
                            },
                            children: [(0, c.jsx)(I, {}), (0, c.jsx)(O.Z, {
                                asset: t,
                                poster: e,
                                shouldFormatImage: !0
                            })]
                        }, o)
                    })
                };

            function ListArticle_templateObject() {
                var n = (0, a._)(["\n  position: relative;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: -2%;\n    width: 104%;\n    height: 100%;\n    display: none;\n    ", "\n  }\n"]);
                return ListArticle_templateObject = function () {
                    return n
                }, n
            }

            function ListArticle_templateObject1() {
                var n = (0, a._)(["\n  display: inline;\n\n  text-decoration: underline;\n  text-decoration-thickness: 1px;\n  text-underline-offset: 1px;\n"]);
                return ListArticle_templateObject1 = function () {
                    return n
                }, n
            }

            function _templateObject2() {
                var n = (0, a._)(["\n              ", " {\n                padding: ", " 0;\n\n                color: var(--color-black);\n                background-color: var(--color-white);\n              }\n            "]);
                return _templateObject2 = function () {
                    return n
                }, n
            }

            function _templateObject3() {
                var n = (0, a._)(["\n              ", " {\n                padding: ", " 0;\n\n                color: var(--color-black);\n                background-color: var(--color-white);\n              }\n            "]);
                return _templateObject3 = function () {
                    return n
                }, n
            }

            function _templateObject4() {
                var n = (0, a._)(["\n  display: flex;\n  grid-gap: 0 ", ";\n  width: max-content;\n  min-height: ", ";\n  height: 100%;\n\n  &.focus-visible:focus {\n    outline: none;\n\n    ", " {\n      &::after {\n        display: block;\n      }\n    }\n\n    ", " {\n      padding: ", " 0;\n\n      color: var(--color-black);\n      background-color: var(--color-white);\n    }\n  }\n\n  ", " {\n    &:hover {\n      ", "\n\n      &:active {\n        ", " {\n          background-color: var(--color-mediumGrey);\n        }\n      }\n    }\n  }\n"]);
                return _templateObject4 = function () {
                    return n
                }, n
            }

            function _templateObject5() {
                var n = (0, a._)(["\n  position: relative;\n  z-index: 1;\n\n  width: ", ";\n  min-width: ", ";\n  max-width: ", ";\n\n  ", " {\n    width: ", ";\n  }\n\n  ", " {\n    width: ", ";\n  }\n"]);
                return _templateObject5 = function () {
                    return n
                }, n
            }

            function _templateObject6() {
                var n = (0, a._)(["\n  position: relative;\n  z-index: 1;\n\n  display: flex;\n  flex-direction: column;\n  grid-gap: ", " 0;\n  justify-content: space-between;\n  max-width: ", ";\n\n  ", " {\n    max-width: ", ";\n  }\n\n  ", " {\n    max-width: ", ";\n  }\n"]);
                return _templateObject6 = function () {
                    return n
                }, n
            }
            JournalThumbnailHoverBackground.propTypes = {
                asset: s().object,
                poster: s().object,
                isHovered: s().bool,
                slug: s().string,
                mouseLeaveListOfArticles: s().bool
            };
            var P = (0, f.ZP)(d.Z).withConfig({
                    componentId: "sc-41ad2cf4-0"
                })(ListArticle_templateObject(), (0, x.sE)({
                    cornerColor: "--color-black"
                })),
                B = (0, f.ZP)(d.Z).withConfig({
                    componentId: "sc-41ad2cf4-1"
                })(ListArticle_templateObject1()),
                M = (0, f.ZP)(j.default).withConfig({
                    componentId: "sc-41ad2cf4-2"
                })(_templateObject4(), (0, b.o0)(10), (0, b.o0)(112), P, B, (0, b.o0)(2.5), h.qk.hover, function (n) {
                    return n.isJournalCategory ? (0, f.iv)(_templateObject2(), B, (0, b.o0)(2.5)) : (0, f.iv)(_templateObject3(), B, (0, b.o0)(2.5))
                }, B),
                q = f.ZP.div.withConfig({
                    componentId: "sc-41ad2cf4-3"
                })(_templateObject5(), (0, b.EV)(10), (0, b.o0)(82), (0, b.o0)(82), h.qk.s, (0, b.BT)(10), h.qk.m, (0, b.hl)(10)),
                S = f.ZP.div.withConfig({
                    componentId: "sc-41ad2cf4-4"
                })(_templateObject6(), (0, b.o0)(28), (0, b.EV)(21.5), h.qk.s, (0, b.BT)(21.5), h.qk.m, (0, b.hl)(21.5)),
                ListArticle = function (n) {
                    var t = n.className,
                        e = n.slug,
                        r = n.responsiveAsset,
                        o = n.hoverOverviewBackground,
                        a = n.title,
                        u = n.date,
                        s = n.mouseLeaveListOfArticles,
                        f = n.setMouseLeaveListOfArticles,
                        p = (0, v.useRouter)().pathname,
                        m = (0, _.Z)(r),
                        b = "/[locale]/journal/[category]" === p,
                        h = (0, i._)((0, l.useState)(!1), 2),
                        j = h[0],
                        x = h[1],
                        k = (0, i._)((0, l.useState)(""), 2),
                        w = k[0],
                        L = k[1];
                    return (0, l.useEffect)(function () {
                        L((0, g.L)(u))
                    }, [u]), (0, c.jsx)(c.Fragment, {
                        children: (0, c.jsxs)(M, {
                            slug: "journal/".concat(e),
                            isJournalCategory: b,
                            className: t,
                            onMouseEnter: function () {
                                x(!0), f(!1)
                            },
                            onMouseLeave: function () {
                                return x(!1)
                            },
                            children: [b && (0, c.jsx)(JournalThumbnailHoverBackground, {
                                asset: (null == o ? void 0 : o.filename) !== "" ? o : m,
                                poster: m,
                                slug: e,
                                isHovered: j,
                                mouseLeaveListOfArticles: s
                            }), (0, c.jsx)(q, {
                                children: (0, c.jsx)(O.Z, {
                                    asset: m,
                                    shouldFormatImage: !0
                                })
                            }), (0, c.jsxs)(S, {
                                children: [(0, c.jsx)(P, {
                                    font: "p1",
                                    tag: "h4",
                                    children: (0, c.jsx)(B, {
                                        tag: "span",
                                        children: a
                                    })
                                }), (0, c.jsx)(d.Z, {
                                    font: "b3",
                                    tag: "span",
                                    children: (0, c.jsx)(A.Z, {
                                        label: w,
                                        font: "b3"
                                    })
                                })]
                            })]
                        })
                    })
                };

            function JournalThumbnailArticles_templateObject() {
                var n = (0, a._)(["\n  display: grid;\n"]);
                return JournalThumbnailArticles_templateObject = function () {
                    return n
                }, n
            }

            function JournalThumbnailArticles_templateObject1() {
                var n = (0, a._)([""]);
                return JournalThumbnailArticles_templateObject1 = function () {
                    return n
                }, n
            }

            function JournalThumbnailArticles_templateObject2() {
                var n = (0, a._)([""]);
                return JournalThumbnailArticles_templateObject2 = function () {
                    return n
                }, n
            }

            function JournalThumbnailArticles_templateObject3() {
                var n = (0, a._)(["\n        ", " {\n          grid-gap: ", " 0;\n        }\n        margin: ", " 0 ", ";\n      "]);
                return JournalThumbnailArticles_templateObject3 = function () {
                    return n
                }, n
            }

            function JournalThumbnailArticles_templateObject4() {
                var n = (0, a._)(["\n        ", " {\n          grid-gap: ", " 0;\n        }\n        padding: ", " ", ";\n        background-color: var(--color-lightGrey);\n      "]);
                return JournalThumbnailArticles_templateObject4 = function () {
                    return n
                }, n
            }

            function JournalThumbnailArticles_templateObject5() {
                var n = (0, a._)(["\n          width: max-content;\n          align-items: center;\n          margin: ", " auto ", ";\n\n          ", " {\n            &:not(:last-of-type) {\n              ", " {\n                position: relative;\n\n                &::after {\n                  content: '';\n                  position: absolute;\n                  bottom: ", ";\n                  width: 100%;\n                  height: ", ";\n                }\n              }\n            }\n          }\n        "]);
                return JournalThumbnailArticles_templateObject5 = function () {
                    return n
                }, n
            }

            function JournalThumbnailArticles_templateObject6() {
                var n = (0, a._)(["\n          display: grid;\n          grid-template-columns: ", " 1fr;\n          align-items: flex-start;\n          margin: 0;\n          padding: ", " ", ";\n          width: auto;\n\n          ", " {\n            grid-template-columns: repeat(3, 1fr);\n          }\n        "]);
                return JournalThumbnailArticles_templateObject6 = function () {
                    return n
                }, n
            }

            function _templateObject7() {
                var n = (0, a._)(["\n  position: relative;\n  z-index: ", ";\n\n  display: flex;\n  flex-direction: column;\n  padding: 0 ", ";\n\n  ", "\n\n  ", " {\n    width: max-content;\n    padding: 0;\n\n    ", "\n  }\n\n  ", " {\n    ", "\n  }\n"]);
                return _templateObject7 = function () {
                    return n
                }, n
            }

            function _templateObject8() {
                var n = (0, a._)(["\n  color: var(--color-phosphor);\n"]);
                return _templateObject8 = function () {
                    return n
                }, n
            }

            function _templateObject9() {
                var n = (0, a._)(["\n  display: flex;\n  grid-gap: ", ";\n  margin-bottom: ", ";\n\n  ", " {\n    margin-bottom: 0;\n  }\n"]);
                return _templateObject9 = function () {
                    return n
                }, n
            }

            function _templateObject10() {
                var n = (0, a._)(["\n  width: 100%;\n  margin-top: ", ";\n"]);
                return _templateObject10 = function () {
                    return n
                }, n
            }
            ListArticle.defaultProps = {
                setMouseLeaveListOfArticles: function () {}
            }, ListArticle.propTypes = {
                className: s().string,
                slug: s().string,
                responsiveAsset: s().arrayOf(s().shape({
                    small: s().object,
                    medium: s().object,
                    large: s().object
                })),
                hoverOverviewBackground: s().object,
                title: s().string,
                date: s().string,
                mouseLeaveListOfArticles: s().bool,
                setMouseLeaveListOfArticles: s().func
            };
            var E = f.ZP.div.withConfig({
                    componentId: "sc-6e480f67-0"
                })(JournalThumbnailArticles_templateObject()),
                F = f.ZP.article.withConfig({
                    componentId: "sc-6e480f67-1"
                })(JournalThumbnailArticles_templateObject1()),
                N = (0, f.ZP)(ListArticle).withConfig({
                    componentId: "sc-6e480f67-2"
                })(JournalThumbnailArticles_templateObject2()),
                H = f.ZP.section.withConfig({
                    componentId: "sc-6e480f67-3"
                })(_templateObject7(), (0, b.KK)("journalThumbnailArticles"), (0, b.EV)(2), function (n) {
                    return "portrait" === n.layout ? (0, f.iv)(JournalThumbnailArticles_templateObject3(), E, (0, b.o0)(32), (0, b.o0)(96), (0, b.o0)(146)) : (0, f.iv)(JournalThumbnailArticles_templateObject4(), E, (0, b.o0)(24), (0, b.o0)(68), (0, b.EV)(2))
                }, h.qk.s, function (n) {
                    return "portrait" === n.layout ? "\n        padding: 0;\n        margin: ".concat((0, b.o0)(65), " auto ").concat((0, b.o0)(146), ";\n      ") : "\n          width: ".concat((0, b.BT)(46), ";\n          padding: ").concat((0, b.o0)(63), " 0 ").concat((0, b.o0)(107), ";\n          margin: 0 auto;\n        ")
                }, h.qk.m, function (n) {
                    return "portrait" === n.layout ? (0, f.iv)(JournalThumbnailArticles_templateObject5(), (0, b.o0)(56), (0, b.o0)(146), F, N, (0, b.o0)(-32), (0, b.o0)(32)) : (0, f.iv)(JournalThumbnailArticles_templateObject6(), (0, b.hl)(43), (0, b.o0)(88), (0, b.hl)(4), E)
                }),
                z = f.ZP.span.withConfig({
                    componentId: "sc-6e480f67-4"
                })(_templateObject8()),
                R = (0, f.ZP)(d.Z).withConfig({
                    componentId: "sc-6e480f67-5"
                })(_templateObject9(), (0, b.o0)(8), (0, b.o0)(36), h.qk.m),
                V = (0, f.ZP)(m.Z).withConfig({
                    componentId: "sc-6e480f67-6"
                })(_templateObject10(), (0, b.o0)(47)),
                JournalThumbnailArticles = function (n) {
                    var t = n.title,
                        e = n.articles,
                        a = n.layout,
                        u = n.totalArticlesAmount,
                        s = n.containerSpread,
                        f = (0, i._)((0, l.useState)(!0), 2),
                        m = f[0],
                        d = f[1],
                        b = t && t.length > 0;
                    return (0, c.jsxs)(H, (0, o._)((0, r._)({
                        layout: a
                    }, s), {
                        onMouseLeave: function () {
                            return d(!0)
                        },
                        children: [b && (0, c.jsxs)(R, {
                            font: "b3",
                            tag: "h3",
                            children: [t, (0, c.jsxs)(z, {
                                children: ["/", e.length]
                            })]
                        }), (0, c.jsxs)(E, {
                            children: [e.map(function (n) {
                                var t = n.name,
                                    e = n.full_slug,
                                    r = n.published_at,
                                    o = n.content,
                                    i = n.uuid,
                                    a = (0, p.vq)(e),
                                    l = o.featuredAsset,
                                    u = o.hover_overview_background;
                                return (0, c.jsx)(F, {
                                    children: (0, c.jsx)(N, {
                                        slug: a,
                                        responsiveAsset: l,
                                        hoverOverviewBackground: u,
                                        title: t,
                                        date: r,
                                        mouseLeaveListOfArticles: m,
                                        setMouseLeaveListOfArticles: d
                                    })
                                }, i)
                            }), "portrait" === a && e.length < u && (0, c.jsx)(V, {})]
                        })]
                    }))
                };
            JournalThumbnailArticles.defaultProps = {
                layout: "landscape",
                articles: []
            }, JournalThumbnailArticles.propTypes = {
                title: s().string,
                articles: s().arrayOf(s().object),
                layout: s().oneOf(["portrait", "landscape"]),
                containerSpread: s().object,
                totalArticlesAmount: s().number
            };
            var G = JournalThumbnailArticles
        },
        60428: function (n, t, e) {
            e.d(t, {
                HP: function () {
                    return placeOverviewAtBeginning
                },
                J7: function () {
                    return useAverageArticleLength
                },
                VY: function () {
                    return readDuration
                },
                qB: function () {
                    return getArticlesAmountByKey
                },
                vq: function () {
                    return getArticleSlug
                }
            });
            var r = e(75766),
                o = e(72253),
                i = e(14932),
                a = e(248),
                getArticleSlug = function (n) {
                    var t = n.split("/"),
                        e = t[3],
                        r = t[t.length - 1];
                    return "".concat(e, "/").concat(r)
                },
                getArticlesAmountByKey = function (n) {
                    return n.reduce(function (n, t, e) {
                        var a, c = t.content.tag || {},
                            l = c.name,
                            u = c.slug,
                            s = 0;
                        return (null === (a = n[u]) || void 0 === a ? void 0 : a.amount) || (n[u] = {
                            name: l,
                            amount: 0
                        }), s = n[u].amount, n[u].amount = s + 1, (0, i._)((0, o._)({}, n), (0, r._)({}, u, n[u]))
                    }, {})
                },
                c = [{
                    name: "richText",
                    getContent: function (n) {
                        var t = (n.richText || {}).content;
                        return (null == t ? void 0 : t.map(function (n) {
                            var t = (n || {}).content;
                            return null == t ? void 0 : t.map(function (n) {
                                return n.text
                            })
                        })).join()
                    }
                }],
                readDuration = function (n) {
                    var t = n.blocks;
                    return null == t ? void 0 : t.map(function (n) {
                        var t = (n || {}).component,
                            e = null == c ? void 0 : c.find(function (n) {
                                return n.name === t
                            });
                        return !!e && (0, (e || {}).getContent)(n)
                    }).filter(Boolean).join(" ")
                },
                useAverageArticleLength = function (n) {
                    var t = n.length;
                    return Math.floor(n.map(function (n) {
                        return readDuration({
                            blocks: ((n || {}).content || {}).blocks
                        }).split(" ").length
                    }).reduce(function (n, t) {
                        return n + t
                    }, 0) / t)
                },
                placeOverviewAtBeginning = function (n) {
                    var t = n.find(function (n) {
                            return "journal" === n.slug
                        }),
                        e = n.filter(function (n) {
                            return "journal" !== n.slug
                        });
                    return [t].concat((0, a._)(e))
                }
        },
        61983: function (n, t, e) {
            var r = e(14636),
                o = e(55982);
            t.Z = function (n) {
                var t = (null == n ? void 0 : n[0]) || n,
                    e = (0, r.Z)(o.t2.m),
                    i = (0, r.Z)(o.t2.s);
                if (!t || (null == t ? void 0 : t.component) !== "responsiveAsset") return null;
                var a = t.small,
                    c = t.medium,
                    l = t.large;
                return e ? l : i ? (null == c ? void 0 : c.filename) ? c : l : a
            }
        },
        88459: function (n, t, e) {
            e.d(t, {
                p: function () {
                    return useAnimationFrame
                }
            });
            var r = e(30404),
                o = e(67294),
                i = e(16014);

            function useAnimationFrame(n) {
                let t = (0, o.useRef)(0),
                    {
                        isStatic: e
                    } = (0, o.useContext)(i._);
                (0, o.useEffect)(() => {
                    if (e) return;
                    let provideTimeSinceStart = ({
                        timestamp: e,
                        delta: r
                    }) => {
                        t.current || (t.current = e), n(e - t.current, r)
                    };
                    return r.Z_.update(provideTimeSinceStart, !0), () => r.qY.update(provideTimeSinceStart)
                }, [n])
            }
        }
    }
]);