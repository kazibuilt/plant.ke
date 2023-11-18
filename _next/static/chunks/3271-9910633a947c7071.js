"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3271], {
        54831: function (n, e, t) {
            var r = t(85893),
                i = t(45697),
                o = t.n(i),
                a = t(80328),
                l = t(45449),
                BracketLabel = function (n) {
                    var e = n.label,
                        t = n.font;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(l.Z, {
                            symbol: "[",
                            font: t
                        }), e, (0, r.jsx)(l.Z, {
                            symbol: "]",
                            font: t
                        })]
                    })
                };
            BracketLabel.propTypes = {
                label: o().string.isRequired,
                font: o().oneOf(Object.keys(a.g).map(function (n) {
                    return n
                }))
            }, e.Z = BracketLabel
        },
        96978: function (n, e, t) {
            t.d(e, {
                Z: function () {
                    return U
                }
            });
            var r = t(72253),
                i = t(14932),
                o = t(24043),
                a = t(82729),
                l = t(85893),
                s = t(73460),
                c = t(12560),
                u = t(45697),
                d = t.n(u),
                p = t(14141),
                h = t(60428),
                f = t(41897),
                b = t(54831),
                m = t(82924),
                g = t(46716),
                _ = t(55982),
                v = t(67294),
                j = t(14257),
                x = t(11163),
                O = t(31632),
                I = t(65820),
                y = t(63003),
                w = t(60032),
                C = t(32603),
                k = t(79277),
                Z = t(98591),
                H = t(10640),
                J = {
                    hidden: {
                        opacity: 0,
                        scaleX: 1,
                        scaleY: .25
                    },
                    visible: {
                        opacity: 1,
                        scaleX: 1,
                        scaleY: 1
                    }
                };

            function _templateObject() {
                var n = (0, a._)(["\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n\n  display: flex;\n  justify-content: center;\n\n  ", " {\n    margin: 0 auto;\n    max-width: calc(100% - ", ");\n  }\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }

            function _templateObject1() {
                var n = (0, a._)(["\n  position: relative;\n\n  line-height: 1;\n\n  ", ";\n  ", ";\n"]);
                return _templateObject1 = function () {
                    return n
                }, n
            }

            function _templateObject2() {
                var n = (0, a._)(["\n      ", "::after {\n        transform: scaleX(1);\n      }\n    "]);
                return _templateObject2 = function () {
                    return n
                }, n
            }

            function _templateObject3() {
                var n = (0, a._)(["\n  padding: ", " ", ";\n\n  ", " {\n    &:hover {\n      ", "::after {\n        transform: scaleX(1);\n      }\n    }\n  }\n\n  ", "\n"]);
                return _templateObject3 = function () {
                    return n
                }, n
            }

            function _templateObject4() {
                var n = (0, a._)(["\n  margin-right: ", ";\n\n  & > * {\n    padding-left: 0;\n  }\n"]);
                return _templateObject4 = function () {
                    return n
                }, n
            }

            function _templateObject5() {
                var n = (0, a._)(["\n  position: relative;\n\n  padding-right: ", ";\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: ", ";\n    right: 0;\n    width: ", ";\n    height: ", ";\n    display: none;\n    background-color: var(--color-black);\n  }\n\n  ", " {\n    &::after {\n      bottom: ", ";\n    }\n  }\n\n  ", " {\n    &::after {\n      bottom: ", ";\n    }\n  }\n"]);
                return _templateObject5 = function () {
                    return n
                }, n
            }

            function _templateObject6() {
                var n = (0, a._)(["\n        text-decoration: underline;\n\n        ", " {\n          &::after {\n            display: block;\n          }\n        }\n\n        ", " {\n          & > * {\n            pointer-events: none;\n            text-decoration-color: var(--color-phosphor);\n          }\n        }\n      "]);
                return _templateObject6 = function () {
                    return n
                }, n
            }

            function _templateObject7() {
                var n = (0, a._)(["\n  display: flex;\n  align-items: center;\n  padding: ", " ", " ", ";\n\n  border-radius: ", ";\n  color: var(--color-black);\n  background-color: var(--color-white);\n  text-decoration: ", ";\n\n  ", "\n"]);
                return _templateObject7 = function () {
                    return n
                }, n
            }

            function _templateObject8() {
                var n = (0, a._)(["\n  position: absolute;\n  top: 0;\n\n  padding: ", " ", " ", ";\n  gap: ", " 0;\n  display: flex;\n  flex-direction: column;\n\n  background-color: var(--color-white);\n  text-align: center;\n  border-radius: ", ";\n  z-index: -1;\n"]);
                return _templateObject8 = function () {
                    return n
                }, n
            }

            function _templateObject9() {
                var n = (0, a._)(["\n  white-space: nowrap;\n  color: ", ";\n  pointer-events: ", ";\n"]);
                return _templateObject9 = function () {
                    return n
                }, n
            }
            var A = (0, p.ZP)(c.m.div).withConfig({
                    componentId: "sc-8e1a96a1-0"
                })(_templateObject(), _.qk.m, (0, g.hl)(8)),
                P = (0, p.ZP)(m.Z).withConfig({
                    componentId: "sc-8e1a96a1-1"
                })(_templateObject1(), H.e2, H.FK),
                V = (0, p.ZP)(C.default).withConfig({
                    componentId: "sc-8e1a96a1-2"
                })(_templateObject3(), (0, g.o0)(7.5), (0, g.o0)(20), _.qk.hover, P, function (n) {
                    return n.isActive && (0, p.iv)(_templateObject2(), P)
                }),
                q = (0, p.ZP)(Z.Z).withConfig({
                    componentId: "sc-8e1a96a1-3"
                })(_templateObject4(), (0, g.o0)(10)),
                E = (0, p.ZP)(m.Z).withConfig({
                    componentId: "sc-8e1a96a1-4"
                })(_templateObject5(), (0, g.o0)(8), (0, g.o0)(3), (0, g.o0)(8), (0, g.o0)(1), _.qk.s, (0, g.o0)(3.5), _.qk.m, (0, g.o0)(3)),
                S = p.ZP.button.withConfig({
                    componentId: "sc-8e1a96a1-5"
                })(_templateObject7(), (0, g.o0)(9), (0, g.o0)(20), (0, g.o0)(7), g.dG, function (n) {
                    return n.isCategoriesOpen ? "underline" : "none"
                }, function (n) {
                    if (n.isCategoriesOpen) return (0, p.iv)(_templateObject6(), E, q)
                }),
                N = (0, p.ZP)(c.m.ul).withConfig({
                    componentId: "sc-8e1a96a1-6"
                })(_templateObject8(), (0, g.o0)(50), (0, g.o0)(20), (0, g.o0)(30), (0, g.o0)(24), g.dG),
                R = (0, p.ZP)(c.m.li).withConfig({
                    componentId: "sc-8e1a96a1-7"
                })(_templateObject9(), function (n) {
                    return n.isActive ? "var(--color-phosphor)" : "var(--color-black)"
                }, function (n) {
                    return n.isActive ? "none" : "auto"
                }),
                L = {
                    font: "b3",
                    tag: "span"
                },
                JournalIndexFilters = function (n) {
                    var e = n.allCategories,
                        t = n.containerHeight,
                        a = n.numberOfArticles,
                        c = (0, o._)((0, s.Z)(), 2),
                        u = c[0],
                        d = c[1].height,
                        p = (0, f.Z)("journal"),
                        b = (0, x.useRouter)().query,
                        m = (0, o._)((0, s.Z)(), 2),
                        g = m[0],
                        _ = m[1].width,
                        C = (0, o._)((0, s.Z)(), 2),
                        Z = C[0],
                        H = C[1].width,
                        M = (0, o._)((0, v.useState)(!1), 2),
                        D = M[0],
                        F = M[1],
                        B = (b || {}).category,
                        T = (0, h.HP)(e),
                        Y = (0, o._)((0, v.useMemo)(function () {
                            var n = e.find(function (n) {
                                return n.slug === B
                            });
                            if (!n) return [p("allEntries"), "journal"];
                            var t = n.slug;
                            return [n.name, t]
                        }, [e, B, p]), 2),
                        X = Y[0],
                        $ = Y[1],
                        z = (0, v.useRef)(),
                        K = (0, v.useCallback)(function (n) {
                            z.current = n, u && u(n)
                        }, [u]);
                    return (0, w.Z)({
                        containerEl: z,
                        containerHeight: t,
                        containerBoundsHeight: d,
                        type: "journal"
                    }), (0, l.jsx)(A, {
                        ref: K,
                        children: (0, l.jsxs)(j.Y, {
                            enabled: D,
                            onClickOutside: function () {
                                return F(!1)
                            },
                            children: [(0, l.jsxs)(S, {
                                onClick: function () {
                                    return F(!D)
                                },
                                ref: Z,
                                isIndex: "journal" === $,
                                isCategoriesOpen: D,
                                children: [(0, l.jsxs)(E, (0, i._)((0, r._)({}, L), {
                                    children: [X, " "]
                                })), (0, l.jsx)(q, {
                                    filtersAmount: a,
                                    canAnimate: !1
                                }), (0, l.jsx)(k.Z, {
                                    type: "arrowDown",
                                    isOpen: D
                                })]
                            }), (0, l.jsx)(I.M, {
                                children: D && (0, l.jsx)(N, {
                                    ref: g,
                                    $offsetLeft: (_ - H) / 2,
                                    style: {
                                        originX: .5,
                                        originY: 0
                                    },
                                    initial: "hidden",
                                    animate: "visible",
                                    exit: (0, i._)((0, r._)({}, J.hidden), {
                                        transition: {
                                            duration: .1,
                                            ease: O.M4
                                        }
                                    }),
                                    variants: J,
                                    transition: {
                                        duration: .4,
                                        ease: O.M4
                                    },
                                    children: T.map(function (n, e) {
                                        var t = n.uuid,
                                            o = n.name,
                                            a = n.slug,
                                            s = "journal" === a;
                                        return (0, l.jsx)(R, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            transition: (0, y.a)({
                                                index: e
                                            }),
                                            isActive: a === $,
                                            children: (0, l.jsx)(V, {
                                                slug: s ? "journal" : "journal/".concat(a),
                                                children: (0, l.jsx)(P, (0, i._)((0, r._)({}, L), {
                                                    children: s ? p("allEntries") : o
                                                }))
                                            })
                                        }, t)
                                    })
                                })
                            })]
                        })
                    })
                };
            JournalIndexFilters.propTypes = {
                containerHeight: d().number,
                allCategories: d().arrayOf(d().object),
                numberOfArticles: d().number
            };
            var M = [{
                    label: "averageArticleLength",
                    value: function (n) {
                        var e = n.averageArticleLength,
                            t = n.getTranslation;
                        return "".concat(e, " ").concat(t("words"))
                    }
                }],
                D = {
                    hidden: {
                        opacity: 0
                    },
                    visible: {
                        opacity: 1
                    }
                },
                F = {
                    duration: 0,
                    ease: "linear"
                },
                DELAY = function (n) {
                    return .055 * n
                };

            function JournalIndexHeader_templateObject() {
                var n = (0, a._)(["\n  position: relative;\n  z-index: ", ";\n\n  padding-top: ", ";\n\n  ", " {\n    padding-top: ", ";\n  }\n\n  ", " {\n    padding-top: ", ";\n  }\n"]);
                return JournalIndexHeader_templateObject = function () {
                    return n
                }, n
            }

            function JournalIndexHeader_templateObject1() {
                var n = (0, a._)(["\n  position: relative;\n\n  padding: 0 0 ", ";\n\n  ", " {\n    padding: 0 0 ", ";\n  }\n\n  ", " {\n    padding: 0 ", " ", ";\n  }\n"]);
                return JournalIndexHeader_templateObject1 = function () {
                    return n
                }, n
            }

            function JournalIndexHeader_templateObject2() {
                var n = (0, a._)(["\n  margin-bottom: ", ";\n\n  text-align: center;\n"]);
                return JournalIndexHeader_templateObject2 = function () {
                    return n
                }, n
            }

            function JournalIndexHeader_templateObject3() {
                var n = (0, a._)(["\n  width: 35ch;\n  margin: 0 auto;\n\n  text-align: center;\n\n  ", " {\n    width: 40ch;\n  }\n\n  ", " {\n    width: 45ch;\n  }\n"]);
                return JournalIndexHeader_templateObject3 = function () {
                    return n
                }, n
            }

            function JournalIndexHeader_templateObject4() {
                var n = (0, a._)(["\n  margin-top: ", ";\n  display: none;\n\n  ", " {\n    position: absolute;\n    top: 0;\n\n    display: flex;\n    align-items: flex-end;\n    height: calc(100vh - ", ");\n    padding-bottom: ", ";\n    margin-top: 0;\n  }\n"]);
                return JournalIndexHeader_templateObject4 = function () {
                    return n
                }, n
            }

            function JournalIndexHeader_templateObject5() {
                var n = (0, a._)(["\n  margin-bottom: ", ";\n"]);
                return JournalIndexHeader_templateObject5 = function () {
                    return n
                }, n
            }

            function JournalIndexHeader_templateObject6() {
                var n = (0, a._)(["\n  display: flex;\n  flex-direction: column;\n"]);
                return JournalIndexHeader_templateObject6 = function () {
                    return n
                }, n
            }

            function JournalIndexHeader_templateObject7() {
                var n = (0, a._)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: ", ";\n"]);
                return JournalIndexHeader_templateObject7 = function () {
                    return n
                }, n
            }
            var B = p.ZP.section.withConfig({
                    componentId: "sc-173b719b-0"
                })(JournalIndexHeader_templateObject(), (0, g.KK)("journalIndexHeader"), (0, g.o0)(121), _.qk.s, (0, g.o0)(138), _.qk.m, (0, g.o0)(128)),
                T = p.ZP.div.withConfig({
                    componentId: "sc-173b719b-1"
                })(JournalIndexHeader_templateObject1(), (0, g.o0)(70), _.qk.s, (0, g.o0)(130), _.qk.m, (0, g.hl)(4), (0, g.o0)(80)),
                Y = (0, p.ZP)(m.Z).withConfig({
                    componentId: "sc-173b719b-2"
                })(JournalIndexHeader_templateObject2(), (0, g.o0)(15)),
                X = (0, p.ZP)(m.Z).withConfig({
                    componentId: "sc-173b719b-3"
                })(JournalIndexHeader_templateObject3(), _.qk.xxs, _.qk.s),
                $ = p.ZP.aside.withConfig({
                    componentId: "sc-173b719b-4"
                })(JournalIndexHeader_templateObject4(), (0, g.o0)(32), _.qk.m, (0, g.o0)(135), (0, g.o0)(32)),
                z = (0, p.ZP)(c.m.li).withConfig({
                    componentId: "sc-173b719b-5"
                })(JournalIndexHeader_templateObject5(), (0, g.o0)(16)),
                K = p.ZP.ul.withConfig({
                    componentId: "sc-173b719b-6"
                })(JournalIndexHeader_templateObject6()),
                G = p.ZP.li.withConfig({
                    componentId: "sc-173b719b-7"
                })(JournalIndexHeader_templateObject7(), (0, g.o0)(16)),
                JournalIndexHeader = function (n) {
                    var e = n.containerSpread,
                        t = n.title,
                        a = n.description,
                        u = n.allCategories,
                        d = n.allArticles,
                        p = n.hideAside,
                        g = (0, o._)((0, s.Z)(), 2),
                        _ = g[0],
                        v = g[1].height,
                        j = (0, h.J7)(d),
                        x = (0, f.Z)("journal"),
                        O = (0, h.qB)(d),
                        I = {
                            variants: D,
                            initial: "hidden",
                            animate: "visible"
                        },
                        y = [{
                            label: "journalEntries",
                            value: d.length,
                            animationDelay: .4
                        }, {
                            label: "categories",
                            value: Object.keys(O).length,
                            animationDelay: .45
                        }];
                    return (0, l.jsx)(B, (0, i._)((0, r._)({}, e), {
                        children: (0, l.jsxs)(T, {
                            ref: _,
                            children: [(0, l.jsx)(Y, {
                                font: "b3",
                                tag: "h1",
                                children: t
                            }), (0, l.jsx)(X, {
                                font: "p1",
                                children: a
                            }), (0, l.jsx)(JournalIndexFilters, {
                                allCategories: u,
                                containerHeight: v,
                                numberOfArticles: d.length
                            }), d.length > 0 && !p && (0, l.jsx)($, {
                                children: (0, l.jsxs)(K, {
                                    children: [y.map(function (n, e) {
                                        var t = n.label,
                                            o = n.value,
                                            a = n.animationDelay;
                                        return (0, l.jsx)(z, (0, i._)((0, r._)({}, I), {
                                            transition: (0, i._)((0, r._)({}, F), {
                                                delay: a
                                            }),
                                            children: (0, l.jsxs)(m.Z, {
                                                font: "b3",
                                                tag: "span",
                                                children: [x(t), " ", (0, l.jsx)(b.Z, {
                                                    label: o,
                                                    font: "b3"
                                                })]
                                            })
                                        }), e)
                                    }), Object.entries(O).map(function (n, e) {
                                        var t = (0, o._)(n, 2),
                                            a = t[0],
                                            s = t[1];
                                        return (0, l.jsx)(c.m.li, (0, i._)((0, r._)({}, I), {
                                            transition: (0, i._)((0, r._)({}, F), {
                                                delay: DELAY(e) + .45
                                            }),
                                            children: (0, l.jsxs)(m.Z, {
                                                font: "b3",
                                                tag: "span",
                                                children: [(0, l.jsx)("span", {
                                                    children: s.name
                                                }), " ", (0, l.jsx)(b.Z, {
                                                    label: s.amount,
                                                    font: "b3"
                                                })]
                                            })
                                        }), a)
                                    }), M.map(function (n, e) {
                                        var t = n.label,
                                            o = n.value;
                                        return (0, l.jsxs)(G, {
                                            children: [(0, l.jsx)(c.m.div, (0, i._)((0, r._)({}, I), {
                                                transition: (0, i._)((0, r._)({}, F), {
                                                    delay: DELAY(e) + .55 + .15 * e
                                                }),
                                                children: (0, l.jsx)(m.Z, {
                                                    font: "b3",
                                                    tag: "span",
                                                    children: x(t)
                                                })
                                            })), (0, l.jsx)(c.m.div, (0, i._)((0, r._)({}, I), {
                                                transition: (0, i._)((0, r._)({}, F), {
                                                    delay: DELAY(e) + .65 + .15 * e
                                                }),
                                                children: (0, l.jsx)(m.Z, {
                                                    font: "b3",
                                                    tag: "span",
                                                    children: (0, l.jsx)(b.Z, {
                                                        label: o({
                                                            averageArticleLength: j,
                                                            getTranslation: x
                                                        }),
                                                        font: "b3"
                                                    })
                                                })
                                            }))]
                                        }, t)
                                    })]
                                })
                            })]
                        })
                    }))
                };
            JournalIndexHeader.defaultProps = {
                allArticles: [],
                hideAside: !1
            }, JournalIndexHeader.propTypes = {
                title: d().string.isRequired,
                description: d().string.isRequired,
                containerSpread: d().object,
                allArticles: d().arrayOf(d().object),
                allCategories: d().arrayOf(d().object),
                hideAside: d().bool
            };
            var U = JournalIndexHeader
        },
        98591: function (n, e, t) {
            var r = t(82729),
                i = t(85893),
                o = t(31632),
                a = t(12560),
                l = t(45697),
                s = t.n(l),
                c = t(14141),
                u = t(82924),
                d = t(46716),
                p = t(55982);

            function _templateObject() {
                var n = (0, r._)(["\n  display: inline-flex;\n\n  overflow: hidden;\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }

            function _templateObject1() {
                var n = (0, r._)(["\n  display: inline-block;\n  padding-left: ", ";\n\n  color: var(--color-phosphor);\n  line-height: 1;\n\n  ", " {\n    line-height: 1.5;\n  }\n"]);
                return _templateObject1 = function () {
                    return n
                }, n
            }
            var h = (0, c.ZP)(a.m.span).withConfig({
                    componentId: "sc-da6bd8c5-0"
                })(_templateObject()),
                f = (0, c.ZP)(u.Z).withConfig({
                    componentId: "sc-da6bd8c5-1"
                })(_templateObject1(), (0, d.o0)(8), p.qk.s),
                FiltersAmount = function (n) {
                    var e = n.className,
                        t = n.filtersAmount,
                        r = n.canAnimate;
                    return (0, i.jsx)(h, {
                        initial: r && {
                            width: 0
                        },
                        animate: r && {
                            width: "auto"
                        },
                        exit: r && {
                            width: 0
                        },
                        transition: {
                            duration: .4,
                            ease: o.M4
                        },
                        className: e,
                        children: t > 0 ? (0, i.jsxs)(f, {
                            font: "b3",
                            tag: "span",
                            children: ["/", t]
                        }) : null
                    })
                };
            FiltersAmount.defaultProps = {
                canAnimate: !0
            }, FiltersAmount.propTypes = {
                className: s().string,
                filtersAmount: s().number
            }, e.Z = FiltersAmount
        },
        60032: function (n, e, t) {
            var r = t(77159),
                i = t(29094),
                o = t(21077),
                a = t(55982),
                l = t(92231),
                s = t(42058);
            e.Z = function (n) {
                var e = n.containerEl,
                    t = n.containerBoundsHeight,
                    c = n.containerHeight,
                    u = n.type,
                    d = (0, r.Z)(),
                    p = (0, s.Z)(),
                    h = (0, i.Z)().width >= a.j$.m,
                    f = "journal" === u ? h ? 32 : 28 : h ? 32 : 16,
                    b = c + t + f,
                    m = c - t - f,
                    g = "journal" === u ? b : m;
                (0, l.Z)(function (n) {
                    d && (n >= g ? (0, o.lV)({
                        containerEl: e,
                        scrollDirection: p,
                        fixFiltersOffset: f
                    }) : (0, o.wo)({
                        containerEl: e
                    }))
                }, [t, f, c, p, d, u])
            }
        },
        16744: function (n, e, t) {
            t.d(e, {
                S: function () {
                    return useContainerSpread
                },
                e: function () {
                    return getSectionsRenderer
                }
            });
            var r = t(72253),
                i = t(14932),
                o = t(47702),
                a = t(85893),
                l = t(97650),
                s = t(11163),
                useContainerSpread = function (n) {
                    var e = (0, s.useRouter)().isPreview;
                    if (!(void 0 !== e && e) || !n || "string" != typeof n) return {};
                    var t = JSON.parse(n.replace(/^<!--#storyblok#/, "").replace(/-->$/, ""));
                    return {
                        "data-blok-c": JSON.stringify(t),
                        "data-blok-uid": t.id + "-" + t.uid
                    }
                },
                InViewTracker = function (n) {
                    var e = n.disabled,
                        t = n.onChange,
                        r = n.children;
                    return e ? r : (0, a.jsx)(l.df, {
                        threshold: "0.9",
                        onChange: t,
                        children: r
                    })
                },
                getSectionsRenderer = function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return function (e) {
                        var t = e.items,
                            l = e.propsPerItem,
                            s = e.onInView,
                            c = (0, o._)(e, ["items", "propsPerItem", "onInView"]);
                        return (void 0 === t ? [] : t).map(function (e) {
                            var t = e.component,
                                u = e._editable,
                                d = e._uid,
                                p = (0, o._)(e, ["component", "_editable", "_uid"]),
                                h = (null == n ? void 0 : n[t]) || null;
                            if (!h) return null;
                            var f = useContainerSpread(u),
                                b = (null == l ? void 0 : l((0, r._)({
                                    component: t,
                                    _uid: d
                                }, p))) || {};
                            return (0, a.jsx)(InViewTracker, {
                                disabled: !s,
                                onChange: function (n) {
                                    return n && (null == s ? void 0 : s(p))
                                },
                                children: (0, a.jsx)(h, (0, i._)((0, r._)({}, p, c, b), {
                                    containerSpread: f
                                }))
                            }, d || p.slug)
                        })
                    }
                }
        },
        97650: function (n, e, t) {
            let r;
            t.d(e, {
                df: function () {
                    return InView
                }
            });
            var i = t(67294);

            function _extends() {
                return (_extends = Object.assign || function (n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }).apply(this, arguments)
            }
            let o = new Map,
                a = new WeakMap,
                l = 0,
                s = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];

            function isPlainChildren(n) {
                return "function" != typeof n.children
            }
            let InView = class InView extends i.Component {
                constructor(n) {
                    super(n), this.node = null, this._unobserveCb = null, this.handleNode = n => {
                        !this.node || (this.unobserve(), n || this.props.triggerOnce || this.props.skip || this.setState({
                            inView: !!this.props.initialInView,
                            entry: void 0
                        })), this.node = n || null, this.observeNode()
                    }, this.handleChange = (n, e) => {
                        n && this.props.triggerOnce && this.unobserve(), isPlainChildren(this.props) || this.setState({
                            inView: n,
                            entry: e
                        }), this.props.onChange && this.props.onChange(n, e)
                    }, this.state = {
                        inView: !!n.initialInView,
                        entry: void 0
                    }
                }
                componentDidUpdate(n) {
                    (n.rootMargin !== this.props.rootMargin || n.root !== this.props.root || n.threshold !== this.props.threshold || n.skip !== this.props.skip || n.trackVisibility !== this.props.trackVisibility || n.delay !== this.props.delay) && (this.unobserve(), this.observeNode())
                }
                componentWillUnmount() {
                    this.unobserve(), this.node = null
                }
                observeNode() {
                    if (!this.node || this.props.skip) return;
                    let {
                        threshold: n,
                        root: e,
                        rootMargin: t,
                        trackVisibility: i,
                        delay: s,
                        fallbackInView: c
                    } = this.props;
                    this._unobserveCb = function (n, e, t = {}, i = r) {
                        if (void 0 === window.IntersectionObserver && void 0 !== i) {
                            let r = n.getBoundingClientRect();
                            return e(i, {
                                isIntersecting: i,
                                target: n,
                                intersectionRatio: "number" == typeof t.threshold ? t.threshold : 0,
                                time: 0,
                                boundingClientRect: r,
                                intersectionRect: r,
                                rootBounds: r
                            }), () => {}
                        }
                        let {
                            id: s,
                            observer: c,
                            elements: u
                        } = function (n) {
                            let e = Object.keys(n).sort().filter(e => void 0 !== n[e]).map(e => {
                                    var t;
                                    return `${e}_${"root"===e?(t=n.root)?(a.has(t)||(l+=1,a.set(t,l.toString())),a.get(t)):"0":n[e]}`
                                }).toString(),
                                t = o.get(e);
                            if (!t) {
                                let r;
                                let i = new Map,
                                    a = new IntersectionObserver(e => {
                                        e.forEach(e => {
                                            var t;
                                            let o = e.isIntersecting && r.some(n => e.intersectionRatio >= n);
                                            n.trackVisibility && void 0 === e.isVisible && (e.isVisible = o), null == (t = i.get(e.target)) || t.forEach(n => {
                                                n(o, e)
                                            })
                                        })
                                    }, n);
                                r = a.thresholds || (Array.isArray(n.threshold) ? n.threshold : [n.threshold || 0]), t = {
                                    id: e,
                                    observer: a,
                                    elements: i
                                }, o.set(e, t)
                            }
                            return t
                        }(t), d = u.get(n) || [];
                        return u.has(n) || u.set(n, d), d.push(e), c.observe(n),
                            function () {
                                d.splice(d.indexOf(e), 1), 0 === d.length && (u.delete(n), c.unobserve(n)), 0 === u.size && (c.disconnect(), o.delete(s))
                            }
                    }(this.node, this.handleChange, {
                        threshold: n,
                        root: e,
                        rootMargin: t,
                        trackVisibility: i,
                        delay: s
                    }, c)
                }
                unobserve() {
                    this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
                }
                render() {
                    if (!isPlainChildren(this.props)) {
                        let {
                            inView: n,
                            entry: e
                        } = this.state;
                        return this.props.children({
                            inView: n,
                            entry: e,
                            ref: this.handleNode
                        })
                    }
                    let n = this.props,
                        {
                            children: e,
                            as: t
                        } = n,
                        r = function (n, e) {
                            if (null == n) return {};
                            var t, r, i = {},
                                o = Object.keys(n);
                            for (r = 0; r < o.length; r++) t = o[r], e.indexOf(t) >= 0 || (i[t] = n[t]);
                            return i
                        }(n, s);
                    return i.createElement(t || "div", _extends({
                        ref: this.handleNode
                    }, r), e)
                }
            }
        }
    }
]);