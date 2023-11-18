"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1554], {
        61971: function (n, t, e) {
            e.d(t, {
                Z: function () {
                    return L
                }
            });
            var o = e(82729),
                r = e(85893),
                i = e(45697),
                a = e.n(i),
                c = e(14141),
                l = e(41897),
                s = e(67294),
                u = e(61117),
                d = e(32603),
                p = e(78445),
                m = e(82924),
                f = e(46716),
                g = e(55982),
                h = e(10640),
                b = e(53311);

            function _templateObject() {
                var n = (0, o._)(["\n  position: relative;\n\n  display: flex;\n  align-items: center;\n\n  pointer-events: none;\n  color: var(--color-black);\n  z-index: 2;\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }

            function _templateObject1() {
                var n = (0, o._)(["\n  position: relative;\n\n  display: flex;\n  align-items: center;\n  width: max-content;\n  padding: ", " ", " ", " ", ";\n\n  background-color: var(--color-white);\n  border-radius: ", ";\n\n  &.focus-visible:focus {\n    outline: none;\n    ", " {\n      ", "\n    }\n  }\n\n  ", " {\n    padding: ", " ", " ", " ", ";\n  }\n"]);
                return _templateObject1 = function () {
                    return n
                }, n
            }

            function _templateObject2() {
                var n = (0, o._)(["\n  position: relative;\n\n  width: ", ";\n  height: ", ";\n  margin-right: ", ";\n\n  ", " {\n    margin-right: ", ";\n  }\n\n  ", " {\n    margin-right: ", ";\n  }\n"]);
                return _templateObject2 = function () {
                    return n
                }, n
            }
            var _ = c.ZP.div.withConfig({
                    componentId: "sc-8e0737e3-0"
                })(_templateObject()),
                j = (0, c.ZP)(d.default).withConfig({
                    componentId: "sc-8e0737e3-1"
                })(_templateObject1(), (0, f.o0)(4), (0, f.o0)(16), (0, f.o0)(4), (0, f.o0)(8), f.dG, _, (0, h.sE)({
                    cornerColor: "--color-black"
                }), g.qk.m, (0, f.o0)(12), (0, f.o0)(24), (0, f.o0)(12), (0, f.o0)(16)),
                v = c.ZP.div.withConfig({
                    componentId: "sc-8e0737e3-2"
                })(_templateObject2(), (0, f.o0)(30), (0, f.o0)(40), (0, f.EV)(1), g.qk.s, (0, f.BT)(1), g.qk.m, (0, f.hl)(1)),
                LabelLink = function (n) {
                    var t = n.image,
                        e = n.label,
                        o = n.font,
                        i = n.slug,
                        a = n.href,
                        c = n.target,
                        l = n.index;
                    return (0, r.jsxs)(j, {
                        slug: i,
                        href: a,
                        target: c,
                        children: [(0, r.jsxs)(_, {
                            children: [t ? (0, r.jsx)(v, {
                                children: (0, r.jsx)(p.Z, {
                                    asset: t,
                                    fit: "contain",
                                    sizes: "30px"
                                })
                            }) : null, (0, r.jsx)(m.Z, {
                                tag: "span",
                                font: void 0 === o ? "p1" : o,
                                children: e
                            })]
                        }), (0, r.jsx)(b.Z, {
                            index: l,
                            decreaseOpacity: !0
                        })]
                    })
                };

            function LabelLinkGroup_templateObject() {
                var n = (0, o._)(["\n  margin: 0 auto;\n  width: max-content;\n  max-width: 100%;\n\n  overflow: hidden;\n  overflow-x: auto;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]);
                return LabelLinkGroup_templateObject = function () {
                    return n
                }, n
            }

            function LabelLinkGroup_templateObject1() {
                var n = (0, o._)(["\n  display: flex;\n  width: max-content;\n  gap: 8px;\n  padding: 0 ", ";\n\n  ", " {\n    padding: 0 ", ";\n  }\n\n  ", " {\n    padding: 0 ", ";\n  }\n"]);
                return LabelLinkGroup_templateObject1 = function () {
                    return n
                }, n
            }

            function LabelLinkGroup_templateObject2() {
                var n = (0, o._)(["\n  transform: ", ";\n  transition: transform 0.8s ", "\n    ", "s;\n\n  ", " {\n    transform: none;\n  }\n"]);
                return LabelLinkGroup_templateObject2 = function () {
                    return n
                }, n
            }
            LabelLink.propTypes = {
                image: a().object,
                label: a().string,
                font: a().string
            };
            var O = c.ZP.div.withConfig({
                    componentId: "sc-eba9ae59-0"
                })(LabelLinkGroup_templateObject()),
                x = c.ZP.ul.withConfig({
                    componentId: "sc-eba9ae59-1"
                })(LabelLinkGroup_templateObject1(), (0, f.EV)(2), g.qk.s, (0, f.BT)(2), g.qk.l, (0, f.hl)(4)),
                C = c.ZP.li.withConfig({
                    componentId: "sc-eba9ae59-2"
                })(LabelLinkGroup_templateObject2(), function (n) {
                    return n.isContainerInView ? "translateX(0%)" : "translateX(30vw)"
                }, f.Lj.easeOutExpo, function (n) {
                    return .025 * n.index
                }, g.qk.m),
                LabelLinkGroup = function (n) {
                    var t = n.items,
                        e = (0, s.useRef)(),
                        o = (0, u.Y)(e, {
                            threshold: 1,
                            once: !0
                        });
                    return (0, r.jsx)(O, {
                        ref: e,
                        children: (0, r.jsx)(x, {
                            children: null == t ? void 0 : t.map(function (n, t) {
                                var e = n.image,
                                    i = n.label,
                                    a = n.href,
                                    c = n.slug,
                                    l = n.target;
                                return (0, r.jsx)(C, {
                                    isContainerInView: o,
                                    index: t,
                                    children: (0, r.jsx)(LabelLink, {
                                        image: e,
                                        label: i,
                                        href: a,
                                        slug: c,
                                        target: l,
                                        index: t
                                    })
                                }, i)
                            })
                        })
                    })
                };

            function CategoryOtherCategories_templateObject() {
                var n = (0, o._)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: auto;\n  max-width: 100vw;\n\n  margin-top: ", ";\n  margin-bottom: ", ";\n\n  ", " {\n    margin: ", " 0;\n  }\n\n  ", " {\n    margin-top: ", ";\n    margin-bottom: ", ";\n  }\n"]);
                return CategoryOtherCategories_templateObject = function () {
                    return n
                }, n
            }

            function CategoryOtherCategories_templateObject1() {
                var n = (0, o._)(["\n  width: max-content;\n  margin-right: auto;\n  margin-left: ", ";\n\n  ", " {\n    margin-right: auto;\n    margin-left: auto;\n  }\n"]);
                return CategoryOtherCategories_templateObject1 = function () {
                    return n
                }, n
            }

            function CategoryOtherCategories_templateObject2() {
                var n = (0, o._)(["\n  margin-top: ", ";\n  max-width: 100%;\n"]);
                return CategoryOtherCategories_templateObject2 = function () {
                    return n
                }, n
            }
            LabelLinkGroup.propTypes = {
                items: a().arrayOf(a().shape({
                    image: a().object,
                    label: a().string,
                    href: a().string,
                    slug: a().string
                })).isRequired
            };
            var k = c.ZP.section.withConfig({
                    componentId: "sc-5dd38606-0"
                })(CategoryOtherCategories_templateObject(), (0, f.o0)(78), (0, f.o0)(83), g.qk.s, (0, f.o0)(80), g.qk.m, (0, f.o0)(93), (0, f.o0)(144)),
                w = (0, c.ZP)(m.Z).withConfig({
                    componentId: "sc-5dd38606-1"
                })(CategoryOtherCategories_templateObject1(), (0, f.EV)(2), g.qk.s),
                y = c.ZP.div.withConfig({
                    componentId: "sc-5dd38606-2"
                })(CategoryOtherCategories_templateObject2(), (0, f.o0)(24)),
                CategoryOtherCategories = function (n) {
                    var t = n.className,
                        e = n.categories,
                        o = n.title,
                        i = (0, l.Z)("global");
                    return (0, r.jsxs)(k, {
                        className: t,
                        children: [(0, r.jsx)(w, {
                            tag: "h2",
                            font: "b3",
                            children: i(o)
                        }), (0, r.jsx)(y, {
                            children: (0, r.jsx)(LabelLinkGroup, {
                                items: null == e ? void 0 : e.map(function (n) {
                                    var t = n.content.categoryImage;
                                    return {
                                        label: n.name,
                                        image: t,
                                        slug: n.full_slug.replace("categories/", "")
                                    }
                                })
                            })
                        })]
                    })
                };
            CategoryOtherCategories.propTypes = {
                categories: a().array.isRequired,
                title: a().string
            };
            var L = CategoryOtherCategories
        },
        39063: function (n, t, e) {
            var o = e(72253),
                r = e(14932),
                i = e(24043),
                a = e(82729),
                c = e(85893),
                l = e(67294),
                s = e(31632),
                u = e(12560),
                d = e(68913),
                p = e(80578),
                m = e(45697),
                f = e.n(m),
                g = e(14141),
                h = e(87712),
                b = e(21730),
                _ = e(16744),
                j = e(35348),
                v = e(78445),
                O = e(62344),
                x = e(62132),
                C = e(80328),
                k = e(46716),
                w = e(55982);

            function _templateObject() {
                var n = (0, a._)(["\n  position: relative;\n\n  max-width: 100vw;\n  padding: ", " 0 ", ";\n\n  color: ", ";\n  transition: 1s color ", ";\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--color-black);\n    opacity: ", ";\n    transition: 1s opacity ", ";\n    z-index: -1;\n  }\n\n  ", " {\n    padding: ", " 0;\n  }\n\n  ", " {\n    padding: ", " 0 ", ";\n  }\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }

            function _templateObject1() {
                var n = (0, a._)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n"]);
                return _templateObject1 = function () {
                    return n
                }, n
            }

            function _templateObject2() {
                var n = (0, a._)(["\n  position: relative;\n  z-index: 1;\n\n  text-align: center;\n\n  h2 {\n    font-size: 40px;\n    span {\n      font-size: 42px;\n    }\n  }\n\n  ", " {\n    h2 {\n      ", ";\n      span {\n        ", ";\n      }\n    }\n  }\n"]);
                return _templateObject2 = function () {
                    return n
                }, n
            }

            function _templateObject3() {
                var n = (0, a._)(["\n  padding: ", " ", " ", ";\n  display: inline-block;\n  margin-top: 20px;\n\n  background-color: var(--color-phosphor);\n  color: var(--color-black);\n  border-radius: ", ";\n"]);
                return _templateObject3 = function () {
                    return n
                }, n
            }

            function _templateObject4() {
                var n = (0, a._)(["\n  position: relative;\n\n  margin: 0 auto;\n  width: max-content;\n  max-width: 100%;\n\n  overflow: hidden;\n  overflow-x: auto;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]);
                return _templateObject4 = function () {
                    return n
                }, n
            }

            function _templateObject5() {
                var n = (0, a._)(["\n  display: flex;\n  grid-gap: 0 ", ";\n  width: max-content;\n  padding: 0 ", ";\n  margin-top: ", ";\n\n  ", " {\n    grid-gap: 0 ", ";\n    margin-top: ", ";\n    padding: 0;\n  }\n\n  ", " {\n    grid-gap: 0 ", ";\n    margin-top: ", ";\n  }\n"]);
                return _templateObject5 = function () {
                    return n
                }, n
            }

            function _templateObject6() {
                var n = (0, a._)(["\n  display: flex;\n  flex-direction: column;\n  min-width: ", ";\n\n  ", " {\n    min-width: unset;\n\n    &:nth-child(2) {\n      align-items: center;\n    }\n\n    &:last-of-type {\n      align-items: flex-end;\n    }\n  }\n"]);
                return _templateObject6 = function () {
                    return n
                }, n
            }

            function _templateObject7() {
                var n = (0, a._)(["\n  width: max-content;\n"]);
                return _templateObject7 = function () {
                    return n
                }, n
            }

            function _templateObject8() {
                var n = (0, a._)(["\n  width: ", ";\n  height: ", ";\n  margin-bottom: ", ";\n"]);
                return _templateObject8 = function () {
                    return n
                }, n
            }
            var y = g.ZP.section.withConfig({
                    componentId: "sc-14a8cd32-0"
                })(_templateObject(), (0, k.o0)(144), (0, k.o0)(190), function (n) {
                    return n.isFirstVideoLoaded ? "var(--color-white)" : "var(--color-black)"
                }, k.Lj.easeOutExpo, function (n) {
                    return n.isFirstVideoLoaded ? .4 : 0
                }, k.Lj.easeOutExpo, w.qk.s, (0, k.o0)(208), w.qk.m, (0, k.o0)(184), (0, k.o0)(208)),
                L = (0, g.ZP)(u.m.div).withConfig({
                    componentId: "sc-14a8cd32-1"
                })(_templateObject1()),
                Z = g.ZP.div.withConfig({
                    componentId: "sc-14a8cd32-2"
                })(_templateObject2(), w.qk.m, C.g.h1, C.g.h5b),
                V = (0, g.ZP)(j.Z).withConfig({
                    componentId: "sc-14a8cd32-3"
                })(_templateObject3(), (0, k.o0)(7), (0, k.o0)(20), (0, k.o0)(9), k.dG),
                I = g.ZP.div.withConfig({
                    componentId: "sc-14a8cd32-4"
                })(_templateObject4()),
                P = g.ZP.ul.withConfig({
                    componentId: "sc-14a8cd32-5"
                })(_templateObject5(), (0, k.o0)(44), (0, k.EV)(4), (0, k.o0)(21), w.qk.s, (0, k.o0)(110), (0, k.o0)(41), w.qk.m, (0, k.o0)(110), (0, k.o0)(30)),
                q = g.ZP.li.withConfig({
                    componentId: "sc-14a8cd32-6"
                })(_templateObject6(), (0, k.EV)(15), w.qk.s),
                E = g.ZP.div.withConfig({
                    componentId: "sc-14a8cd32-7"
                })(_templateObject7()),
                G = (0, g.ZP)(v.Z).withConfig({
                    componentId: "sc-14a8cd32-8"
                })(_templateObject8(), (0, k.o0)(42), (0, k.o0)(42), (0, k.o0)(10)),
                MissionBlock = function (n) {
                    var t = n.mission_block,
                        e = n.changeBackgroundColorOnView,
                        a = (null == t ? void 0 : t[0]) || {},
                        m = a.call_to_action,
                        f = a.title,
                        g = a.usps,
                        j = a.videos_background,
                        v = void 0 === j ? [] : j,
                        C = a._editable,
                        k = (0, b.Z)({
                            changeBackgroundColorOnView: e,
                            backgroundColor: h.np.black,
                            ammountOfContainerView: .7
                        }),
                        w = (0, i._)((0, l.useState)(0), 2),
                        T = w[0],
                        B = w[1],
                        M = (0, i._)((0, l.useState)(!1), 2),
                        z = M[0],
                        R = M[1],
                        N = (0, d.v)({
                            target: k,
                            offset: ["start end", "start start"]
                        }).scrollYProgress,
                        A = (0, p.H)(N, [0, 1], [0, -35]),
                        Y = (0, _.S)(C);
                    return (0, c.jsxs)(y, (0, r._)((0, o._)({
                        ref: k,
                        isFirstVideoLoaded: z
                    }, Y), {
                        children: [v.map(function (n, t) {
                            var e = n._uid,
                                o = n.asset,
                                r = n.poster;
                            return (0, c.jsx)(L, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: T === t ? 1 : 0
                                },
                                transition: {
                                    duration: 1,
                                    ease: s.M4
                                },
                                children: (0, c.jsx)(O.Z, {
                                    asset: o,
                                    poster: r,
                                    index: t,
                                    activePlayingIndex: T,
                                    onLoadComplete: function () {
                                        0 === t && R(!0)
                                    },
                                    onVideoEnded: function () {
                                        if (T === v.length - 1) {
                                            B(0);
                                            return
                                        }
                                        B(function (n) {
                                            return n + 1
                                        })
                                    }
                                })
                            }, e)
                        }), (0, c.jsxs)(Z, {
                            children: [(0, c.jsx)(x.Z, {
                                font: "h1",
                                fontBold: "h5b",
                                tag: "h2",
                                text: f
                            }), (0, c.jsx)(u.m.div, {
                                style: {
                                    y: A
                                },
                                children: m ? (0, c.jsx)(V, {
                                    label: m,
                                    font: "b3",
                                    slug: "mission"
                                }) : null
                            })]
                        }), (0, c.jsx)(I, {
                            children: (0, c.jsx)(P, {
                                children: null == g ? void 0 : g.map(function (n) {
                                    var t = n._uid,
                                        e = n.icon,
                                        o = n.description;
                                    return (0, c.jsx)(q, {
                                        children: (0, c.jsxs)(E, {
                                            children: [(0, c.jsx)(G, {
                                                asset: e,
                                                sizes: "42px",
                                                fit: "contain"
                                            }), (0, c.jsx)(x.Z, {
                                                text: o,
                                                tag: "p",
                                                font: "p6"
                                            })]
                                        })
                                    }, t)
                                })
                            })
                        })]
                    }))
                };
            MissionBlock.defaultProps = {
                mission_block: [],
                changeBackgroundColorOnView: !0
            }, MissionBlock.propTypes = {
                mission_block: f().array.isRequired,
                changeBackgroundColorOnView: f().bool
            }, t.Z = MissionBlock
        },
        21730: function (n, t, e) {
            var o = e(67294),
                r = e(61117),
                i = e(70024),
                a = e(87712);
            t.Z = function (n) {
                var t = n.changeBackgroundColorOnView,
                    e = void 0 === t || t,
                    c = n.backgroundColor,
                    l = n.ammountOfContainerView,
                    s = n.previousTheme,
                    u = (0, i.b9)(a.Oj),
                    d = null != s ? s : a.np.default,
                    p = (0, o.useRef)(!1),
                    m = (0, o.useRef)(),
                    f = (0, r.Y)(m, {
                        amount: void 0 === l ? .3 : l
                    });
                return (0, o.useEffect)(function () {
                    e && c && (f && !p.current && (p.current = !0), p.current && (f ? u(c) : u(d)))
                }, [f, u, c, d, e]), m
            }
        },
        11640: function (n, t, e) {
            e.d(t, {
                _: function () {
                    return _to_array
                }
            });
            var o = e(21769),
                r = e(43439),
                i = e(14276),
                a = e(73270);

            function _to_array(n) {
                return (0, o.o)(n) || (0, r.f)(n) || (0, a.N)(n) || (0, i.i)()
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
            var o = e(40406),
                r = e(58868);

            function useOnChange(n, t) {
                (0, r.L)(() => {
                    if ((0, o.i)(n)) return t(n.get()), n.onChange(t)
                }, [n, t])
            }

            function useMultiOnChange(n, t, e) {
                (0, r.L)(() => {
                    let o = n.map(n => n.onChange(t));
                    return () => {
                        o.forEach(n => n()), e()
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
            var o = e(64606);
            let isCustomValueType = n => "object" == typeof n && n.mix,
                getMixer = n => isCustomValueType(n) ? n.mix : void 0;
            var r = e(4960),
                i = e(75262),
                a = e(30404),
                c = e(96681);

            function useTransform(n, t, e, r) {
                let i = "function" == typeof t ? t : function (...n) {
                    let t = !Array.isArray(n[0]),
                        e = t ? 0 : -1,
                        r = n[0 + e],
                        i = n[1 + e],
                        a = n[2 + e],
                        c = n[3 + e],
                        l = (0, o.s)(i, a, {
                            mixer: getMixer(a[0]),
                            ...c
                        });
                    return t ? l(r) : l
                }(t, e, r);
                return Array.isArray(n) ? useListTransform(n, i) : useListTransform([n], ([n]) => i(n))
            }

            function useListTransform(n, t) {
                let e = (0, c.h)(() => []);
                return function (n, t) {
                    let e = (0, r.c)(t()),
                        updateValue = () => e.set(t());
                    return updateValue(), (0, i.f)(n, () => a.Z_.update(updateValue, !1, !0), () => a.qY.update(updateValue)), e
                }(n, () => {
                    e.length = 0;
                    let o = n.length;
                    for (let t = 0; t < o; t++) e[t] = n[t].get();
                    return t(e)
                })
            }
        }
    }
]);