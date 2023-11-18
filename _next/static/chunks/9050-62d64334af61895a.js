"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9050], {
        94718: function (n, t, e) {
            var i = e(82729),
                o = e(85893),
                r = e(45697),
                c = e.n(r),
                a = e(14141),
                l = e(82924),
                s = e(46716),
                u = e(55982);

            function _templateObject() {
                var n = (0, i._)(["\n  background-color: ", ";\n  text-transform: uppercase;\n  display: flex;\n  line-height: 1;\n  padding: ", " ", " ", ";\n  width: max-content;\n  height: max-content;\n\n  ", " {\n    padding: ", " ", " ", ";\n  }\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }
            var d = (0, a.ZP)(l.Z).withConfig({
                    componentId: "sc-cf468a36-0"
                })(_templateObject(), function (n) {
                    return "light" === n.theme ? "var(--color-white)" : "var(--color-lightGrey)"
                }, (0, s.o0)(2), (0, s.o0)(1), (0, s.o0)(0), u.qk.m, (0, s.o0)(2), (0, s.o0)(1), (0, s.o0)(1)),
                ProductLabel = function (n) {
                    var t = n.className,
                        e = n.label,
                        i = n.theme;
                    return (0, o.jsx)(d, {
                        className: t,
                        tag: "span",
                        font: "p7",
                        theme: i,
                        children: e
                    })
                };
            ProductLabel.defaultProps = {
                theme: "light"
            }, ProductLabel.propTypes = {
                className: c().string,
                label: c().string,
                theme: c().oneOf(["light", "dark"])
            }, t.Z = ProductLabel
        },
        29276: function (n, t, e) {
            var i = e(82729),
                o = e(85893),
                r = e(45697),
                c = e.n(r),
                a = e(14141),
                l = e(82924),
                s = e(46716),
                u = e(55982);

            function _templateObject() {
                var n = (0, i._)(["\n  border: 1px dashed var(--color-mediumGrey);\n  border-radius: ", ";\n  padding: ", ";\n  text-transform: uppercase;\n\n  ", " {\n    padding: ", " ", ";\n  }\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }

            function _templateObject1() {
                var n = (0, i._)(["\n  display: block;\n"]);
                return _templateObject1 = function () {
                    return n
                }, n
            }
            var d = (0, a.ZP)(l.Z).withConfig({
                    componentId: "sc-5144d195-0"
                })(_templateObject(), s.dG, (0, s.o0)(8), u.qk.m, (0, s.o0)(8), (0, s.o0)(13)),
                p = a.ZP.span.withConfig({
                    componentId: "sc-5144d195-1"
                })(_templateObject1()),
                ProductOrderMessage = function (n) {
                    var t = n.className,
                        e = n.message,
                        i = n.showLabel,
                        r = n.label;
                    return (0, o.jsxs)(d, {
                        className: t,
                        tag: "p",
                        font: "p7",
                        children: [i && (0, o.jsxs)(p, {
                            children: [r, ":"]
                        }), e]
                    })
                };
            ProductOrderMessage.propTypes = {
                className: c().string,
                message: c().string.isRequired,
                showLabel: c().bool,
                label: c().string
            }, t.Z = ProductOrderMessage
        },
        35006: function (n, t, e) {
            e.d(t, {
                Z: function () {
                    return V
                }
            });
            var i = e(24043),
                o = e(82729),
                r = e(85893),
                c = e(67294),
                a = e(14636),
                l = e(45697),
                s = e.n(l),
                u = e(14141),
                replaceValuesInString = function (n, t) {
                    var e = RegExp(Object.keys(t).join("|"), "gi");
                    return n.replace(e, function (n) {
                        return t[n.toLowerCase()]
                    })
                },
                d = e(82924),
                p = e(46716),
                f = e(55982),
                m = e(87360),
                b = e.n(m),
                h = e(79277),
                g = e(75179),
                v = e(31632),
                _ = e(12560),
                j = e(44533),
                x = e(80328),
                O = {
                    up: 38,
                    down: 40,
                    tab: 9,
                    shift: 16,
                    enter: 13,
                    escape: 27
                },
                w = e(72253),
                getIndeces = function (n) {
                    var t = n.index;
                    return {
                        isLastItem: t + 2 > n.listLength,
                        isFirstItem: t <= 0,
                        nextIndex: t + 1,
                        prevIndex: t - 1
                    }
                },
                getActiveIndex = function (n) {
                    var t = n.list,
                        e = t.find(function (n) {
                            return n.current === document.activeElement
                        });
                    return t.indexOf(e)
                },
                getNextAndPrev = function (n) {
                    var t = O.up,
                        e = O.down,
                        i = O.tab,
                        o = O.shift;
                    return {
                        isNext: n === e || n === i,
                        isPrev: n === t || n === i && n === o
                    }
                },
                setFocusedElement = function (n) {
                    var t = n.focusableEls,
                        e = n.setSuggestion,
                        i = n.results,
                        o = n.inputRef,
                        r = n.isVisible,
                        c = n.e;
                    if (!r) return o.current.focus();
                    var a = t.current;
                    if (!(a.length < 0)) {
                        var l = getNextAndPrev(c.keyCode),
                            s = l.isNext,
                            u = l.isPrev,
                            d = getIndeces({
                                index: getActiveIndex({
                                    list: a
                                }),
                                listLength: a.length
                            }),
                            p = d.isLastItem,
                            f = d.isFirstItem,
                            m = d.nextIndex,
                            b = d.prevIndex,
                            h = {
                                list: a,
                                setSuggestion: e,
                                results: i
                            };
                        if (s) return setFocus(p ? (0, w._)({
                            i: 0
                        }, h) : (0, w._)({
                            i: m
                        }, h)), c.preventDefault();
                        if (u) return setFocus(f ? (0, w._)({
                            i: a.length - 1
                        }, h) : (0, w._)({
                            i: b
                        }, h)), c.preventDefault();
                        o.current.focus()
                    }
                },
                setFocus = function (n) {
                    var t, e = n.list,
                        i = n.i,
                        o = n.setSuggestion,
                        r = n.results;
                    if (!(null === (t = e[0]) || void 0 === t ? void 0 : t.current) || !r || i < 0) return null;
                    e[i].current.focus(), o(r[i])
                },
                highlightSuggestion = function (n) {
                    var t = n.query,
                        e = n.suggestion,
                        i = n.color;
                    return b().highlight(b().single(t, e), "<span style='color: ".concat(void 0 === i ? "black" : i, "'>"), "</span>")
                },
                setAndSubmitFocusedElement = function (n) {
                    var t = n.e,
                        e = n.results,
                        i = n.inputRef,
                        o = n.focusableEls,
                        r = n.setSuggestion,
                        c = n.isVisible,
                        a = n.query,
                        l = n.setQuery,
                        s = n.setIsVisible,
                        u = n.suggestion;
                    if (0 === e.length) return null;
                    if (setFocusedElement({
                            e: t,
                            results: e,
                            inputRef: i,
                            focusableEls: o,
                            setSuggestion: r,
                            isVisible: c
                        }), t.keyCode === O.enter) {
                        if (!getEveryCharsMatch(a, e)) return;
                        l("queryInput" === t.target.id ? e[0].target : u.target), s(!1);
                        return
                    }
                },
                getEveryCharsMatch = function (n, t) {
                    var e = n.split("") || [],
                        i = [];
                    return e.forEach(function (n, e) {
                        var o, r;
                        t.length > 0 && i.push(n.toLowerCase() === (null == t ? void 0 : null === (r = t[0]) || void 0 === r ? void 0 : null === (o = r.target[e]) || void 0 === o ? void 0 : o.toLowerCase()))
                    }), t.length > 0 && i.every(function (n) {
                        return n
                    })
                },
                getFocusedElIndexFromEvent = function (n) {
                    var t = n.e,
                        e = n.list,
                        i = e.find(function (n) {
                            return n.current.value === t.currentTarget.id || n.current.value === t.currentTarget.dataset.value
                        });
                    return e.indexOf(i)
                };

            function _templateObject() {
                var n = (0, o._)(["\n  position: absolute;\n\n  ", "\n\n  width: 100%;\n\n  background-color: var(--color-white);\n  border-radius: ", ";\n\n  overflow: hidden;\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }

            function _templateObject1() {
                var n = (0, o._)(["\n  ", ";\n\n  width: 100%;\n  padding: ", ";\n\n  border: none;\n\n  &,\n  &::selection {\n    ", "\n  }\n"]);
                return _templateObject1 = function () {
                    return n
                }, n
            }

            function _templateObject2() {
                var n = (0, o._)(["\n  padding: ", ";\n  max-height: ", ";\n\n  overflow-y: scroll;\n"]);
                return _templateObject2 = function () {
                    return n
                }, n
            }

            function _templateObject3() {
                var n = (0, o._)(["\n  ", ";\n  color: var(--color-mediumGrey);\n"]);
                return _templateObject3 = function () {
                    return n
                }, n
            }

            function _templateObject4() {
                var n = (0, o._)(["\n  display: block;\n  width: 100%;\n  padding: ", " 0;\n\n  text-align: left;\n\n  &.focus-visible:focus {\n    outline: none;\n  }\n\n  &:focus {\n    background-color: var(--color-lightGrey);\n    outline: none;\n    border: none;\n  }\n\n  ", " {\n    &:hover {\n      background-color: var(--color-lightGrey);\n      outline: none;\n      border: none;\n    }\n  }\n"]);
                return _templateObject4 = function () {
                    return n
                }, n
            }

            function _templateObject5() {
                var n = (0, o._)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: ", ";\n  pointer-events: none;\n"]);
                return _templateObject5 = function () {
                    return n
                }, n
            }

            function _templateObject6() {
                var n = (0, o._)(["\n  color: var(--color-mediumGrey);\n"]);
                return _templateObject6 = function () {
                    return n
                }, n
            }
            var y = (0, u.ZP)(_.m.div).withConfig({
                    componentId: "sc-ff0d54c6-0"
                })(_templateObject(), function (n) {
                    var t = n.position;
                    return "top: ".concat("bottom" === t ? 0 : "initial", "; \n    bottom: ").concat("bottom" === t ? "initial" : 0, ";")
                }, p.dG),
                P = u.ZP.input.withConfig({
                    componentId: "sc-ff0d54c6-1"
                })(_templateObject1(), x.g.p6, (0, p.o0)(11), function (n) {
                    if (n.allCharsMatch) return "color: transparent;\n    background: transparent;\n    caret-color: ".concat(j.D.grey, ";")
                }),
                k = u.ZP.div.withConfig({
                    componentId: "sc-ff0d54c6-2"
                })(_templateObject2(), (0, p.o0)(11), (0, p.o0)(217)),
                C = u.ZP.span.withConfig({
                    componentId: "sc-ff0d54c6-3"
                })(_templateObject3(), x.g.p6),
                Z = u.ZP.button.withConfig({
                    componentId: "sc-ff0d54c6-4"
                })(_templateObject4(), (0, p.o0)(5), f.qk.hover),
                D = u.ZP.label.withConfig({
                    componentId: "sc-ff0d54c6-5"
                })(_templateObject5(), (0, p.o0)(10.3)),
                I = (0, u.ZP)(d.Z).withConfig({
                    componentId: "sc-ff0d54c6-6"
                })(_templateObject6()),
                S = {
                    hidden: {
                        height: 0
                    },
                    visible: {
                        height: "auto"
                    }
                },
                AutoCompleteDropdownSelect = function (n) {
                    var t = n.query,
                        e = n.setQuery,
                        i = n.suggestion,
                        o = n.setSuggestion,
                        a = n.results,
                        l = n.focusableEls,
                        s = n.optionListRef,
                        u = n.inputRef,
                        d = n.isVisible,
                        p = n.setIsVisible,
                        f = n.notFoundMessage,
                        m = n.placeholder,
                        b = n.position;
                    l.current = a.map(function (n, t) {
                        var e;
                        return null !== (e = l.current[t]) && void 0 !== e ? e : (0, c.createRef)()
                    }), (0, c.useEffect)(function () {
                        d && u.current.focus()
                    }, [u, d]);
                    var h = getEveryCharsMatch(t, a);
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)(y, {
                            onKeyDown: function (n) {
                                setAndSubmitFocusedElement({
                                    e: n,
                                    results: a,
                                    inputRef: u,
                                    focusableEls: l,
                                    setSuggestion: o,
                                    isVisible: d,
                                    query: t,
                                    setQuery: e,
                                    setIsVisible: p,
                                    suggestion: i
                                }), n.keyCode === O.escape && p(!1)
                            },
                            variants: S,
                            transition: {
                                duration: .15,
                                ease: v.M4
                            },
                            initial: "hidden",
                            animate: d ? "visible" : "hidden",
                            position: b,
                            children: [(0, r.jsx)(Label, {
                                query: t,
                                allCharsMatch: h,
                                suggestion: a[0]
                            }), (0, r.jsx)(Input, {
                                allCharsMatch: h,
                                query: t,
                                isVisible: d,
                                inputRef: u,
                                setQuery: e,
                                placeholder: m
                            }), (0, r.jsx)(List, {
                                query: t,
                                optionListRef: s,
                                focusableEls: l,
                                results: a,
                                notFoundMessage: f,
                                setSuggestion: o,
                                setQuery: e,
                                suggestion: i,
                                isVisible: d,
                                setIsVisible: p,
                                children: a.map(function (n, i) {
                                    var c = n.target;
                                    return (0, r.jsx)(E, {
                                        query: t,
                                        isFocusable: d,
                                        ref: l.current[i],
                                        isSelected: c === t ? "checked" : "unchecked",
                                        handleClick: function (n) {
                                            e(a[getFocusedElIndexFromEvent({
                                                e: n,
                                                list: l.current
                                            })].target), p(!1)
                                        },
                                        value: c,
                                        setSuggestion: o,
                                        results: a,
                                        focusableEls: l
                                    }, c)
                                })
                            })]
                        })
                    })
                },
                Label = function (n) {
                    var t = n.query,
                        e = n.suggestion;
                    if (n.allCharsMatch) return (0, r.jsx)(D, {
                        htmlFor: "queryInput",
                        children: (0, r.jsx)(C, {
                            dangerouslySetInnerHTML: {
                                __html: highlightSuggestion({
                                    query: t,
                                    suggestion: e
                                })
                            }
                        })
                    })
                },
                Input = function (n) {
                    var t = n.query,
                        e = n.setQuery,
                        i = n.isVisible,
                        o = n.inputRef,
                        c = n.allCharsMatch,
                        a = n.placeholder;
                    return (0, r.jsx)(P, {
                        onChange: function (n) {
                            e(n.target.value)
                        },
                        maxLength: 30,
                        disabled: !i,
                        value: t,
                        autocomplete: "do-not-autofill",
                        ref: o,
                        id: "queryInput",
                        tabIndex: i ? "0" : "-1",
                        placeholder: a,
                        allCharsMatch: c
                    })
                },
                NotFoundMessage = function (n) {
                    var t = n.label;
                    return (0, r.jsx)(I, {
                        font: "p6",
                        children: t
                    })
                },
                List = function (n) {
                    var t = n.results,
                        e = n.optionListRef,
                        i = n.isVisible,
                        o = n.notFoundMessage,
                        c = n.children,
                        a = n.query && 0 === t.length;
                    return (0, r.jsx)(k, {
                        "aria-expanded": i,
                        role: "listbox",
                        ref: e,
                        children: a ? (0, r.jsx)(NotFoundMessage, {
                            label: o
                        }) : (0, r.jsx)("div", {
                            children: c
                        })
                    })
                },
                E = (0, c.forwardRef)(function (n, t) {
                    var e = n.value,
                        i = n.query,
                        o = n.isFocusable,
                        c = (n.focusableEls, n.isSelected),
                        a = n.handleClick;
                    return n.setSuggestion, n.results, (0, r.jsx)(Z, {
                        id: e,
                        value: e,
                        "aria-selected": c,
                        tabIndex: o ? "0" : "-1",
                        role: "option",
                        ref: t,
                        onClick: a,
                        children: (0, r.jsx)(d.Z, {
                            font: "p6",
                            "data-value": e,
                            children: (0, r.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: i ? highlightSuggestion({
                                        query: i,
                                        suggestion: e,
                                        color: "".concat(j.D.orange)
                                    }) : e
                                }
                            })
                        })
                    }, e)
                });

            function AutoCompleteDropdownTrigger_templateObject() {
                var n = (0, o._)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  width: 100%;\n  height: ", ";\n  padding: 0 ", ";\n\n  text-align: left;\n\n  background-color: ", ";\n  border-radius: ", ";\n  transition: background-color 0.33s ", ";\n\n  ", " {\n    &:hover {\n      background: var(--color-lightGrey2);\n    }\n  }\n"]);
                return AutoCompleteDropdownTrigger_templateObject = function () {
                    return n
                }, n
            }

            function AutoCompleteDropdownTrigger_templateObject1() {
                var n = (0, o._)(["\n  text-transform: 'uppercase';\n  position: 'relative';\n  top: 3;\n"]);
                return AutoCompleteDropdownTrigger_templateObject1 = function () {
                    return n
                }, n
            }

            function AutoCompleteDropdownTrigger_templateObject2() {
                var n = (0, o._)(["\n  position: relative;\n  top: -1;\n"]);
                return AutoCompleteDropdownTrigger_templateObject2 = function () {
                    return n
                }, n
            }
            E.displayName = "SelectItem", AutoCompleteDropdownSelect.propTypes = {
                query: s().string,
                setQuery: s().func,
                suggestion: s().object,
                setSuggestion: s().func,
                results: s().arrayOf(s().object),
                isVisible: s().bool,
                setIsVisible: s().func,
                notFoundMessage: s().string,
                placeholder: s().string,
                position: s().string
            };
            var A = u.ZP.button.withConfig({
                    componentId: "sc-598115f6-0"
                })(AutoCompleteDropdownTrigger_templateObject(), (0, p.o0)(40), (0, p.o0)(11), function (n) {
                    return n.dropdownDarkMode ? "var(--color-lightGrey2)" : "var(--color-lightGrey)"
                }, p.dG, p.Lj.easeExpOut, f.qk.hover),
                L = (0, u.ZP)(d.Z).withConfig({
                    componentId: "sc-598115f6-1"
                })(AutoCompleteDropdownTrigger_templateObject1()),
                M = (0, u.ZP)(d.Z).withConfig({
                    componentId: "sc-598115f6-2"
                })(AutoCompleteDropdownTrigger_templateObject2()),
                AutoCompleteDropdownTrigger = function (n) {
                    var t = n.query,
                        e = n.isVisible,
                        i = n.setIsVisible,
                        o = n.placeholder,
                        c = n.dropdownDarkMode;
                    return (0, r.jsx)(A, {
                        type: "button",
                        onClick: function () {
                            return i(!e)
                        },
                        dropdownDarkMode: c,
                        children: t ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(L, {
                                font: "p7",
                                children: "Country"
                            }), (0, r.jsx)(M, {
                                font: "p6",
                                children: t
                            })]
                        }) : (0, r.jsx)(d.Z, {
                            font: "b3",
                            children: o
                        })
                    })
                };

            function AutoCompleteDropdown_templateObject() {
                var n = (0, o._)(["\n  position: relative;\n  z-index: ", ";\n"]);
                return AutoCompleteDropdown_templateObject = function () {
                    return n
                }, n
            }

            function AutoCompleteDropdown_templateObject1() {
                var n = (0, o._)(["\n  position: absolute;\n  top: ", ";\n  right: ", ";\n\n  pointer-events: none;\n  z-index: 1;\n"]);
                return AutoCompleteDropdown_templateObject1 = function () {
                    return n
                }, n
            }
            AutoCompleteDropdownTrigger.defaultProps = {
                setIsVisible: function () {},
                dropdownDarkMode: !1
            }, AutoCompleteDropdownTrigger.propTypes = {
                query: s().string,
                isVisible: s().bool,
                setIsVisible: s().func,
                placeholder: s().string,
                dropdownDarkMode: s().bool
            };
            var T = u.ZP.div.withConfig({
                    componentId: "sc-604a2b2f-0"
                })(AutoCompleteDropdown_templateObject(), 1e5),
                q = u.ZP.div.withConfig({
                    componentId: "sc-604a2b2f-1"
                })(AutoCompleteDropdown_templateObject1(), (0, p.o0)(7), (0, p.o0)(11)),
                AutoCompleteDropdown = function (n) {
                    var t = n.dataset,
                        e = n.handleValue,
                        o = n.position,
                        a = n.placeholder,
                        l = n.notFoundMessage,
                        s = n.dropdownDarkMode,
                        u = (0, i._)((0, c.useState)(""), 2),
                        d = u[0],
                        p = u[1],
                        f = b().go(d, t, {
                            all: !0
                        }),
                        m = (0, i._)((0, c.useState)(f[0]), 2),
                        v = m[0],
                        _ = m[1],
                        j = (0, i._)((0, c.useState)(!1), 2),
                        x = j[0],
                        O = j[1],
                        w = (0, c.useRef)(),
                        y = (0, c.useRef)([]),
                        P = (0, c.useRef)();
                    return (0, c.useEffect)(function () {
                        e && !x && (null == e || e(d))
                    }, [e, x, d]), (0, c.useEffect)(function () {
                        x && p("")
                    }, [x]), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(g.Z, {
                            zIndex: 99999,
                            isVisible: x,
                            onClick: function () {
                                return O(!1)
                            }
                        }), (0, r.jsxs)(T, {
                            children: [(0, r.jsx)(q, {
                                children: (0, r.jsx)(h.Z, {
                                    type: "arrowDown",
                                    isOpen: x
                                })
                            }), (0, r.jsx)(AutoCompleteDropdownTrigger, {
                                query: d,
                                isVisible: x,
                                setIsVisible: O,
                                placeholder: a,
                                dropdownDarkMode: s
                            }), (0, r.jsx)(AutoCompleteDropdownSelect, {
                                query: d,
                                setQuery: p,
                                suggestion: v,
                                setSuggestion: _,
                                results: f,
                                focusableEls: y,
                                optionListRef: w,
                                inputRef: P,
                                isVisible: x,
                                setIsVisible: O,
                                notFoundMessage: l,
                                placeholder: a,
                                position: o
                            })]
                        })]
                    })
                };

            function ShippingRateSelector_templateObject() {
                var n = (0, o._)(["\n  display: grid;\n  gap: ", ";\n"]);
                return ShippingRateSelector_templateObject = function () {
                    return n
                }, n
            }

            function ShippingRateSelector_templateObject1() {
                var n = (0, o._)(["\n  width: ", ";\n  max-width: 100%;\n"]);
                return ShippingRateSelector_templateObject1 = function () {
                    return n
                }, n
            }
            AutoCompleteDropdown.defaultProps = {
                position: "bottom",
                dropdownDarkMode: !1
            }, AutoCompleteDropdown.propTypes = {
                dataset: s().arrayOf(s().string),
                handleValue: s().func,
                position: s().string,
                placeholder: s().string,
                notFoundMessage: s().string,
                dropdownDarkMode: s().bool
            };
            var R = u.ZP.div.withConfig({
                    componentId: "sc-7cb9b32a-0"
                })(ShippingRateSelector_templateObject(), (0, p.o0)(16)),
                B = u.ZP.div.withConfig({
                    componentId: "sc-7cb9b32a-1"
                })(ShippingRateSelector_templateObject1(), (0, p.o0)(230)),
                ShippingRateSelector = function (n) {
                    var t, e = n.label,
                        o = n.rates,
                        l = n.placeholder,
                        s = n.notFoundMessage,
                        u = n.dropdownDarkMode,
                        p = (0, i._)((0, c.useState)(""), 2),
                        m = p[0],
                        b = p[1],
                        h = (0, a.Z)(f.t2.m),
                        g = replaceValuesInString(e, {
                            "{{country}}": m,
                            "{{rate}}": (null === (t = o.find(function (n) {
                                return n.key === m
                            })) || void 0 === t ? void 0 : t.value) || ""
                        }),
                        v = o.map(function (n) {
                            return n.key
                        }),
                        _ = v.find(function (n) {
                            return n.toLowerCase() === m.toLowerCase()
                        });
                    return (0, r.jsxs)(R, {
                        children: [(0, r.jsx)(B, {
                            children: (0, r.jsx)(AutoCompleteDropdown, {
                                position: h ? "bottom" : "top",
                                dataset: v,
                                handleValue: function (n) {
                                    return b(n)
                                },
                                placeholder: l,
                                notFoundMessage: s,
                                dropdownDarkMode: u
                            })
                        }), _ ? (0, r.jsx)(d.Z, {
                            font: "p3",
                            children: g
                        }) : null]
                    })
                };
            ShippingRateSelector.defaultProps = {
                dropdownDarkMode: !1
            }, ShippingRateSelector.propTypes = {
                dropdownDarkMode: s().bool,
                label: s().string,
                rates: s().arrayOf(s().shape({
                    key: s().string,
                    value: s().string
                })),
                placeholder: s().string,
                notFoundMessage: s().string
            };
            var V = ShippingRateSelector
        },
        32607: function (n, t, e) {
            var i = e(72253),
                o = e(14932),
                r = e(82729),
                c = e(85893),
                a = e(45697),
                l = e.n(a),
                s = e(14141),
                u = e(16744),
                d = e(39224),
                p = e(78445),
                f = e(82924),
                m = e(46716);

            function _templateObject() {
                var n = (0, r._)(["\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: ", ";\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }

            function _templateObject1() {
                var n = (0, r._)(["\n  flex: 0 0 15%;\n  margin-right: ", ";\n  min-width: 57px;\n\n  aspect-ratio: 1/1.3;\n"]);
                return _templateObject1 = function () {
                    return n
                }, n
            }

            function _templateObject2() {
                var n = (0, r._)(["\n  margin-bottom: ", ";\n"]);
                return _templateObject2 = function () {
                    return n
                }, n
            }

            function _templateObject3() {
                var n = (0, r._)(["\n  display: flex;\n  flex-direction: column;\n"]);
                return _templateObject3 = function () {
                    return n
                }, n
            }
            var b = s.ZP.div.withConfig({
                    componentId: "sc-9d2956f1-0"
                })(_templateObject(), (0, m.o0)(30)),
                h = s.ZP.div.withConfig({
                    componentId: "sc-9d2956f1-1"
                })(_templateObject1(), (0, m.o0)(10)),
                g = (0, s.ZP)(d.Z).withConfig({
                    componentId: "sc-9d2956f1-2"
                })(_templateObject2(), (0, m.o0)(10)),
                v = s.ZP.div.withConfig({
                    componentId: "sc-9d2956f1-3"
                })(_templateObject3()),
                Supplier = function (n) {
                    var t = n.thumbnail,
                        e = n.title,
                        r = n.link,
                        a = n.country,
                        l = n.supplierEditable,
                        s = (0, u.S)(l);
                    return (0, c.jsxs)(b, (0, o._)((0, i._)({}, s), {
                        children: [(0, c.jsx)(h, {
                            children: (0, c.jsx)(p.Z, {
                                asset: t,
                                fit: "cover",
                                sizes: {
                                    default: "67px",
                                    s: "59px",
                                    m: "57px"
                                }
                            })
                        }), (0, c.jsxs)(v, {
                            children: [(0, c.jsx)(g, {
                                isExternal: !0,
                                underline: !0,
                                href: null == r ? void 0 : r.url,
                                label: e
                            }), (0, c.jsx)(f.Z, {
                                font: "b3",
                                tag: "span",
                                children: a
                            })]
                        })]
                    }))
                };
            Supplier.defaultProps = {
                supplierEditable: ""
            }, Supplier.propTypes = {
                thumbnail: l().object,
                title: l().string,
                link: l().object,
                country: l().string,
                supplierEditable: l().string
            }, t.Z = Supplier
        },
        66718: function (n, t, e) {
            var i = e(82729),
                o = e(85893),
                r = e(45697),
                c = e.n(r),
                a = e(14141),
                l = e(32603),
                s = e(82924),
                u = e(46716),
                d = e(55982),
                p = e(10640),
                f = e(79277);

            function _templateObject() {
                var n = (0, i._)(["\n  position: relative;\n  width: 100%;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: ", " 0;\n  ", "\n\n  ", " {\n    &:hover {\n      ", ";\n    }\n  }\n\n  ", " {\n    ", "\n\n    ", ";\n  }\n\n  ", "\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: -25%;\n    left: 0;\n    width: 100%;\n    height: 150%;\n  }\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }

            function _templateObject1() {
                var n = (0, i._)(["\n  line-height: 1;\n"]);
                return _templateObject1 = function () {
                    return n
                }, n
            }

            function _templateObject2() {
                var n = (0, i._)(["\n  line-height: 1;\n  text-align: right;\n"]);
                return _templateObject2 = function () {
                    return n
                }, n
            }

            function _templateObject3() {
                var n = (0, i._)(["\n  fill: var(--color-mediumGrey);\n"]);
                return _templateObject3 = function () {
                    return n
                }, n
            }
            var m = (0, a.ZP)(l.default).withConfig({
                    componentId: "sc-2a5696c2-0"
                })(_templateObject(), (0, u.o0)(4), function (n) {
                    var t = n.isSticky,
                        e = n.hasInnerAccordions;
                    return t && e && "display: none;"
                }, d.qk.hover, function (n) {
                    return n.isClickable && "background: var(--color-lightGrey)"
                }, d.qk.m, function (n) {
                    return n.hasInnerAccordions && "display: none;"
                }, function (n) {
                    return n.isClickable && "\n        &:active {\n          background-color: var(--color-mediumGrey);\n        }\n    "
                }, (0, p.OG)({
                    cornerColor: "--color-black"
                })),
                b = (0, a.ZP)(s.Z).withConfig({
                    componentId: "sc-2a5696c2-1"
                })(_templateObject1()),
                h = (0, a.ZP)(s.Z).withConfig({
                    componentId: "sc-2a5696c2-2"
                })(_templateObject2()),
                g = (0, a.ZP)(f.Z).withConfig({
                    componentId: "sc-2a5696c2-3"
                })(_templateObject3()),
                AccordionTitle = function (n) {
                    var t = n.className,
                        e = n.title,
                        i = n.percentage,
                        r = n.onClick,
                        c = n.isClickable,
                        a = n.hasInnerAccordions,
                        l = n.isOpen,
                        s = n.isSticky,
                        u = n.children;
                    return (0, o.jsxs)(m, {
                        onClick: c ? r : "",
                        isClickable: c,
                        hasInnerAccordions: a,
                        isOpen: l,
                        isSticky: s,
                        className: t,
                        children: [(0, o.jsxs)(b, {
                            font: i ? "p3" : "b3",
                            tag: "h2",
                            children: [i && "".concat(i, "% "), e]
                        }), u, c && !s && (0, o.jsx)(h, {
                            font: "p6",
                            tag: "span",
                            children: i ? (0, o.jsx)(g, {
                                type: "arrowDown",
                                isOpen: l
                            }) : "[".concat(l ? "-" : "+", "]")
                        })]
                    })
                };
            AccordionTitle.defaultProps = {
                isSticky: !1,
                onClick: function () {}
            }, AccordionTitle.propTypes = {
                title: c().string,
                percentage: c().string,
                onClick: c().func,
                isClickable: c().bool,
                hasInnerAccordions: c().bool,
                isOpen: c().bool,
                isSticky: c().bool
            }, t.Z = AccordionTitle
        },
        40996: function (n, t, e) {
            e.d(t, {
                Z: function () {
                    return ng
                }
            });
            var i = e(72253),
                o = e(14932),
                r = e(24043),
                c = e(82729),
                a = e(85893),
                l = e(67294),
                s = e(14636),
                u = e(31632),
                d = e(12560),
                p = e(65820),
                f = e(45697),
                m = e.n(f),
                b = e(14141),
                h = e(60711),
                g = e(49636),
                v = e(16744),
                _ = e(66718),
                j = e(62132),
                x = e(93770),
                O = e(46716),
                w = e(55982),
                y = e(32607),
                P = e(79277),
                k = e(82924);

            function _templateObject() {
                var n = (0, c._)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: ", ";\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }

            function _templateObject1() {
                var n = (0, c._)(["\n  margin-right: ", ";\n"]);
                return _templateObject1 = function () {
                    return n
                }, n
            }

            function _templateObject2() {
                var n = (0, c._)(["\n  width: 18px;\n  height: 18px;\n"]);
                return _templateObject2 = function () {
                    return n
                }, n
            }
            var C = b.ZP.div.withConfig({
                    componentId: "sc-e254354-0"
                })(_templateObject(), (0, O.o0)(16)),
                Z = b.ZP.span.withConfig({
                    componentId: "sc-e254354-1"
                })(_templateObject1(), (0, O.o0)(10)),
                D = (0, b.ZP)(P.Z).withConfig({
                    componentId: "sc-e254354-2"
                })(_templateObject2()),
                CareInstruction = function (n) {
                    var t = n.icon,
                        e = n.description,
                        r = n.careEditable,
                        c = (0, v.S)(r);
                    return (0, a.jsxs)(C, (0, o._)((0, i._)({}, c), {
                        children: [(0, a.jsx)(Z, {
                            children: (0, a.jsx)(D, {
                                type: t
                            })
                        }), (0, a.jsx)(k.Z, {
                            tag: "p",
                            font: "p1",
                            children: e
                        })]
                    }))
                };
            CareInstruction.propTypes = {
                icon: m().string,
                description: m().string,
                careEditable: m().string
            };
            var I = e(11010),
                S = e(70655),
                E = e(73460),
                A = e(87560),
                L = e(32603),
                M = e(10640),
                T = e(50708),
                q = e(80704),
                R = e(41897),
                B = e(78445);

            function PdpExtraDescriptionDetailLayer_templateObject() {
                var n = (0, c._)(["\n  position: fixed;\n  bottom: ", ";\n  left: ", ";\n\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: flex-end;\n\n  z-index: 1;\n\n  &::before {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: ", ";\n    z-index: -1;\n    background: var(--color-white);\n    background: linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 1) 30%\n    );\n  }\n\n  ", " {\n    left: ", ";\n\n    &::before {\n      width: calc(100% - ", ");\n    }\n  }\n\n  ", " {\n    position: absolute;\n    top: 0;\n    bottom: auto;\n    left: calc(100% + ", "px);\n\n    max-width: ", ";\n    display: block;\n    align-items: unset;\n\n    transform: translateX(", "px);\n    z-index: -1;\n    pointer-events: none;\n\n    &::before {\n      display: none;\n    }\n  }\n"]);
                return PdpExtraDescriptionDetailLayer_templateObject = function () {
                    return n
                }, n
            }

            function PdpExtraDescriptionDetailLayer_templateObject1() {
                var n = (0, c._)(["\n  display: grid;\n  grid-template-columns: auto auto;\n  height: max-content;\n\n  ", " {\n    display: grid;\n    grid-template-rows: ", " auto;\n    grid-template-columns: unset;\n    max-width: ", ";\n  }\n\n  ", " {\n    max-width: ", ";\n  }\n"]);
                return PdpExtraDescriptionDetailLayer_templateObject1 = function () {
                    return n
                }, n
            }

            function PdpExtraDescriptionDetailLayer_templateObject2() {
                var n = (0, c._)(["\n  width: ", ";\n  height: ", ";\n\n  ", " {\n    width: ", ";\n  }\n  ", " {\n    width: ", ";\n    height: 100%;\n  }\n"]);
                return PdpExtraDescriptionDetailLayer_templateObject2 = function () {
                    return n
                }, n
            }

            function _templateObject3() {
                var n = (0, c._)(["\n  position: relative;\n\n  display: grid;\n  grid-template-rows: 1fr auto;\n  padding-left: ", ";\n  align-items: flex-end;\n  width: ", ";\n\n  ", " {\n    width: ", ";\n    padding-left: ", ";\n  }\n\n  ", " {\n    display: block;\n    grid-template-rows: unset;\n    padding: 0;\n    width: 90%;\n    align-items: unset;\n  }\n"]);
                return _templateObject3 = function () {
                    return n
                }, n
            }

            function _templateObject4() {
                var n = (0, c._)(["\n  ", " {\n    margin: ", " 0 ", ";\n  }\n"]);
                return _templateObject4 = function () {
                    return n
                }, n
            }

            function _templateObject5() {
                var n = (0, c._)(["\n  display: block;\n\n  text-decoration: underline;\n\n  ", " {\n    text-decoration-thickness: 1px;\n    text-underline-offset: 1px;\n  }\n\n  ", " {\n    display: none;\n  }\n"]);
                return _templateObject5 = function () {
                    return n
                }, n
            }

            function _templateObject6() {
                var n = (0, c._)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n\n  display: flex;\n\n  ", " {\n    display: none;\n  }\n"]);
                return _templateObject6 = function () {
                    return n
                }, n
            }

            function _templateObject7() {
                var n = (0, c._)(["\n  line-height: 1;\n"]);
                return _templateObject7 = function () {
                    return n
                }, n
            }
            var V = (0, b.ZP)(d.m.aside).withConfig({
                    componentId: "sc-7ac7388-0"
                })(PdpExtraDescriptionDetailLayer_templateObject(), (0, O.o0)(81), (0, O.EV)(2), (0, O.o0)(215), w.qk.s, (0, O.BT)(2), (0, O.BT)(2), w.qk.m, function (n) {
                    return n.$offsetLeft
                }, (0, O.o0)(160), function (n) {
                    return -n.$layerWidth
                }),
                N = b.ZP.div.withConfig({
                    componentId: "sc-7ac7388-1"
                })(PdpExtraDescriptionDetailLayer_templateObject1(), w.qk.m, (0, O.o0)(150), (0, O.o0)(110), w.qk.l, (0, O.o0)(130)),
                F = b.ZP.div.withConfig({
                    componentId: "sc-7ac7388-2"
                })(PdpExtraDescriptionDetailLayer_templateObject2(), (0, O.EV)(17), (0, O.o0)(93), w.qk.s, (0, O.BT)(17), w.qk.m, (0, O.o0)(115)),
                G = b.ZP.div.withConfig({
                    componentId: "sc-7ac7388-3"
                })(_templateObject3(), (0, O.EV)(1.5), (0, O.EV)(27), w.qk.s, (0, O.BT)(25), (0, O.BT)(1.5), w.qk.m),
                z = (0, b.ZP)(k.Z).withConfig({
                    componentId: "sc-7ac7388-4"
                })(_templateObject4(), w.qk.m, (0, O.o0)(20), (0, O.o0)(8)),
                $ = (0, b.ZP)(L.default).withConfig({
                    componentId: "sc-7ac7388-5"
                })(_templateObject5(), w.qk.s, w.qk.m),
                H = b.ZP.button.withConfig({
                    componentId: "sc-7ac7388-6"
                })(_templateObject6(), w.qk.m),
                W = (0, b.ZP)(k.Z).withConfig({
                    componentId: "sc-7ac7388-7"
                })(_templateObject7()),
                PdpExtraDescriptionDetailLayer = function (n) {
                    var t = n.thumbnail,
                        e = n.smallDescription,
                        c = n.contentBounds,
                        d = n.extraDescriptionBounds,
                        p = (0, r._)((0, E.Z)(), 2),
                        f = p[0],
                        m = p[1],
                        b = (0, s.Z)(w.t2.m),
                        h = (0, R.Z)("pdp"),
                        v = (0, r._)((0, g.Z)(), 2),
                        _ = v[0],
                        j = v[1],
                        x = _.descriptionExtraLayerLinkHovered,
                        O = m.width,
                        y = d.left,
                        P = c.left,
                        k = (0, q.o)(e),
                        C = (0, T.S)(k, 30, " ", !1),
                        Z = (0, l.useMemo)(function () {
                            return b ? {
                                initial: {
                                    x: "-120%"
                                },
                                animate: {
                                    x: 0
                                },
                                exit: {
                                    x: "-120%",
                                    transition: {
                                        delay: 0
                                    }
                                },
                                transition: {
                                    default: {
                                        duration: .6,
                                        delay: .05,
                                        ease: u.M4
                                    }
                                },
                                onAnimationComplete: function () {
                                    x || j((0, o._)((0, i._)({}, _), {
                                        descriptionExtraLayerLinkHoveredIndex: -1
                                    }))
                                }
                            } : {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: 20
                                },
                                transition: {
                                    duration: .6,
                                    ease: u.M4
                                }
                            }
                        }, [b, x, j]);
                    return (0, a.jsx)(V, (0, o._)((0, i._)({
                        ref: f
                    }, Z), {
                        $offsetLeft: y - P,
                        $layerWidth: O,
                        children: (0, a.jsxs)(N, {
                            children: [(0, a.jsx)(F, {
                                children: (0, a.jsx)(B.Z, {
                                    asset: t
                                })
                            }), (0, a.jsxs)(G, {
                                children: [(0, a.jsxs)(z, {
                                    font: "p3",
                                    tag: "p",
                                    children: [C, "...", (0, a.jsx)($, {
                                        slug: "materials",
                                        children: h("goToIndex")
                                    })]
                                }), (0, a.jsx)(H, {
                                    onClick: function () {
                                        j((0, o._)((0, i._)({}, _), {
                                            descriptionExtraLayerLinkHovered: !1
                                        }))
                                    },
                                    children: (0, a.jsx)(W, {
                                        font: "b3",
                                        tag: "span",
                                        children: "[-]"
                                    })
                                })]
                            })]
                        })
                    }))
                };

            function PdpExtraDescription_templateObject() {
                var n = (0, c._)(["\n  position: relative;\n"]);
                return PdpExtraDescription_templateObject = function () {
                    return n
                }, n
            }

            function PdpExtraDescription_templateObject1() {
                var n = (0, c._)(["\n  padding-top: ", ";\n"]);
                return PdpExtraDescription_templateObject1 = function () {
                    return n
                }, n
            }

            function PdpExtraDescription_templateObject2() {
                var n = (0, c._)(["\n  /* padding-left: ", "; */\n\n  &:not(:last-of-type) {\n    margin-bottom: ", ";\n  }\n\n  ", " {\n    &:not(:last-of-type) {\n      margin-bottom: ", ";\n    }\n  }\n"]);
                return PdpExtraDescription_templateObject2 = function () {
                    return n
                }, n
            }

            function PdpExtraDescription_templateObject3() {
                var n = (0, c._)(["\n  position: relative;\n\n  display: inline-flex;\n  pointer-events: none;\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: ", ";\n    left: 0;\n    width: 100%;\n    height: 1px;\n    background-color: var(--color-black);\n  }\n"]);
                return PdpExtraDescription_templateObject3 = function () {
                    return n
                }, n
            }

            function PdpExtraDescription_templateObject4() {
                var n = (0, c._)(["\n  ", " {\n    ", ";\n  }\n"]);
                return PdpExtraDescription_templateObject4 = function () {
                    return n
                }, n
            }

            function PdpExtraDescription_templateObject5() {
                var n = (0, c._)([""]);
                return PdpExtraDescription_templateObject5 = function () {
                    return n
                }, n
            }
            PdpExtraDescriptionDetailLayer.defaultProps = {
                setHoveredDetailIndex: function () {},
                contentBounds: {}
            }, PdpExtraDescriptionDetailLayer.propTypes = {
                thumbnail: m().object,
                id: m().string,
                smallDescription: m().string,
                setHoveredDetailIndex: m().func,
                contentBounds: m().object,
                extraDescriptionBounds: m().object
            };
            var Q = (0, b.ZP)(d.m.div).withConfig({
                    componentId: "sc-b17d0125-0"
                })(PdpExtraDescription_templateObject()),
                U = b.ZP.ul.withConfig({
                    componentId: "sc-b17d0125-1"
                })(PdpExtraDescription_templateObject1(), (0, O.o0)(12)),
                K = b.ZP.li.withConfig({
                    componentId: "sc-b17d0125-2"
                })(PdpExtraDescription_templateObject2(), (0, O.o0)(7), (0, O.o0)(10), w.qk.m, (0, O.o0)(5)),
                Y = (0, b.ZP)(k.Z).withConfig({
                    componentId: "sc-b17d0125-3"
                })(PdpExtraDescription_templateObject3(), (0, O.o0)(3)),
                J = (0, b.ZP)(L.default).withConfig({
                    componentId: "sc-b17d0125-4"
                })(PdpExtraDescription_templateObject4(), w.qk.m, (0, M.V$)({
                    cornerColor: "--color-black",
                    hoverColor: "--color-lightGrey"
                })),
                X = b.ZP.button.withConfig({
                    componentId: "sc-b17d0125-5"
                })(PdpExtraDescription_templateObject5()),
                PdpExtraDescription = function (n) {
                    var t, e, c, d = n.extraDescription,
                        f = n.contentBounds,
                        m = (0, r._)((0, E.Z)(), 2),
                        b = m[0],
                        h = m[1],
                        v = (0, r._)((0, g.Z)(), 2),
                        _ = v[0],
                        j = v[1],
                        x = (0, s.Z)(w.t2.m),
                        O = _ || {},
                        y = O.type,
                        P = O.descriptionExtraLayerLinkHovered,
                        k = O.descriptionExtraLayerLinkHoveredIndex,
                        C = (0, r._)((0, l.useState)(!1), 2),
                        Z = C[0],
                        D = C[1],
                        L = "readMore" === y;
                    (0, l.useEffect)(function () {
                        if (!y) return function () {
                            D(!1)
                        }
                    }, [y]);
                    var M = (0, l.useMemo)(function () {
                        return x ? {
                            initial: {
                                height: 0
                            },
                            animate: {
                                height: "auto"
                            },
                            transition: {
                                duration: .6,
                                ease: u.M4
                            },
                            onAnimationComplete: (0, I._)(function () {
                                return (0, S.Jh)(this, function (n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, (0, A.g)(100)];
                                        case 1:
                                            return n.sent(), D(!0), [2]
                                    }
                                })
                            })
                        } : {}
                    }, [x]);
                    return (0, a.jsxs)(Q, (0, o._)((0, i._)({
                        ref: b,
                        $isHovered: k > -1
                    }, M), {
                        children: [(0, a.jsx)(U, {
                            children: null == d ? void 0 : d.map(function (n, t) {
                                var e;
                                return (0, l.createElement)(Item, (0, o._)((0, i._)({}, n), {
                                    material: (null == n ? void 0 : n.material) || {},
                                    index: t,
                                    isReadMoreEnabled: L,
                                    isDesktop: x,
                                    canHoverLinks: Z,
                                    setProductDescriptionState: j,
                                    productDescriptionState: _,
                                    key: null !== (e = null == n ? void 0 : n.label) && void 0 !== e ? e : t
                                }))
                            })
                        }), (0, a.jsx)(p.M, {
                            children: P && (0, a.jsx)(PdpExtraDescriptionDetailLayer, (0, o._)((0, i._)({}, null == d ? void 0 : null === (c = d[k]) || void 0 === c ? void 0 : null === (e = c.material) || void 0 === e ? void 0 : null === (t = e.material) || void 0 === t ? void 0 : t.content), {
                                contentBounds: f,
                                extraDescriptionBounds: h,
                                setCanHoverLinks: D
                            }))
                        })]
                    }))
                },
                Item = function (n) {
                    var t, e, c = n.material,
                        s = n._editable,
                        u = n.index,
                        d = n.isReadMoreEnabled,
                        p = n.isDesktop,
                        f = n.canHoverLinks,
                        m = n.setProductDescriptionState,
                        b = n.productDescriptionState,
                        h = (0, v.S)(s),
                        g = (c || {}).slug,
                        _ = (0, l.useCallback)(function (n) {
                            m((0, o._)((0, i._)({}, b), {
                                descriptionExtraLayerLinkHovered: !0,
                                descriptionExtraLayerLinkHoveredIndex: n
                            }))
                        }, [m, b]),
                        j = (0, l.useCallback)(function () {
                            m((0, o._)((0, i._)({}, b), {
                                descriptionExtraLayerLinkHovered: !1
                            }))
                        }, [m, b]),
                        x = (0, r._)((0, l.useMemo)(function () {
                            return p ? [J, {
                                slug: "materials?material=".concat(g),
                                onMouseEnter: function () {
                                    return _(u)
                                },
                                onFocus: function () {
                                    d && f && _(u)
                                },
                                onMouseLeave: function () {
                                    j()
                                },
                                onBlur: function () {
                                    d && f && j()
                                },
                                tabIndex: d ? 0 : -1
                            }] : [X, {
                                onClick: function () {
                                    return _(u)
                                }
                            }]
                        }, [p, g, f, d, _, j, u]), 2),
                        O = x[0],
                        w = x[1],
                        y = c.sentence.split(/\{\{([^}]+)\}\}/g),
                        P = null === (e = c.sentence) || void 0 === e ? void 0 : null === (t = e.match(/{{([^}]+)}}/g)) || void 0 === t ? void 0 : t.map(function (n) {
                            return null == n ? void 0 : n.replace(/{{|}}/g, "")
                        })[0];
                    return (0, a.jsxs)(K, (0, o._)((0, i._)({}, h), {
                        children: ["\xb7", " ", (0, a.jsx)(k.Z, {
                            font: "p3",
                            tag: "span",
                            children: y.map(function (n, t) {
                                return P === n ? (0, l.createElement)(O, (0, o._)((0, i._)({}, w), {
                                    key: t
                                }), (0, a.jsx)(Y, {
                                    tag: "span",
                                    children: P
                                })) : (0, a.jsx)(l.Fragment, {
                                    children: n
                                }, t)
                            })
                        })]
                    }))
                };
            PdpExtraDescription.defaultProps = {
                contentBounds: {}
            }, PdpExtraDescription.propTypes = {
                extraDescription: m().array,
                contentBounds: m().object
            };
            var nn = e(82915);

            function PDPAccordionMaterial_templateObject() {
                var n = (0, c._)(["\n  padding-bottom: ", ";\n"]);
                return PDPAccordionMaterial_templateObject = function () {
                    return n
                }, n
            }

            function PDPAccordionMaterial_templateObject1() {
                var n = (0, c._)(["\n  padding-bottom: 0;\n"]);
                return PDPAccordionMaterial_templateObject1 = function () {
                    return n
                }, n
            }

            function PDPAccordionMaterial_templateObject2() {
                var n = (0, c._)(["\n  overflow: hidden;\n"]);
                return PDPAccordionMaterial_templateObject2 = function () {
                    return n
                }, n
            }

            function PDPAccordionMaterial_templateObject3() {
                var n = (0, c._)(["\n  display: flex;\n  width: 50%;\n  align-items: flex-start;\n"]);
                return PDPAccordionMaterial_templateObject3 = function () {
                    return n
                }, n
            }

            function PDPAccordionMaterial_templateObject4() {
                var n = (0, c._)(["\n  flex: 0 0 75%;\n  margin-left: ", ";\n"]);
                return PDPAccordionMaterial_templateObject4 = function () {
                    return n
                }, n
            }

            function PDPAccordionMaterial_templateObject5() {
                var n = (0, c._)(["\n  text-transform: uppercase;\n  white-space: break-spaces;\n  color: var(--color-mediumGrey);\n"]);
                return PDPAccordionMaterial_templateObject5 = function () {
                    return n
                }, n
            }

            function PDPAccordionMaterial_templateObject6() {
                var n = (0, c._)(["\n  width: 100%;\n  height: 100%;\n  flex: 0 0 25%;\n\n  aspect-ratio: 1/1.3;\n"]);
                return PDPAccordionMaterial_templateObject6 = function () {
                    return n
                }, n
            }
            var nt = b.ZP.div.withConfig({
                    componentId: "sc-9efe5404-0"
                })(PDPAccordionMaterial_templateObject(), (0, O.o0)(20)),
                ne = b.ZP.div.withConfig({
                    componentId: "sc-9efe5404-1"
                })(PDPAccordionMaterial_templateObject1()),
                ni = (0, b.ZP)(d.m.section).withConfig({
                    componentId: "sc-9efe5404-2"
                })(PDPAccordionMaterial_templateObject2()),
                no = b.ZP.div.withConfig({
                    componentId: "sc-9efe5404-3"
                })(PDPAccordionMaterial_templateObject3()),
                nr = b.ZP.div.withConfig({
                    componentId: "sc-9efe5404-4"
                })(PDPAccordionMaterial_templateObject4(), (0, O.o0)(10)),
                nc = (0, b.ZP)(k.Z).withConfig({
                    componentId: "sc-9efe5404-5"
                })(PDPAccordionMaterial_templateObject5()),
                na = b.ZP.div.withConfig({
                    componentId: "sc-9efe5404-6"
                })(PDPAccordionMaterial_templateObject6()),
                PDPAccordionMaterial = function (n) {
                    var t = n.title,
                        e = n.percentage,
                        c = n.id,
                        s = n.information,
                        d = n.thumbnail,
                        f = n.parentExpanded,
                        m = n.materialEditable,
                        b = (0, v.S)(m),
                        h = (0, r._)((0, l.useState)(0), 2),
                        g = h[0],
                        j = h[1],
                        x = c === g;
                    return (0, a.jsxs)(nt, (0, o._)((0, i._)({}, b), {
                        children: [(0, a.jsxs)(ne, {
                            children: [(0, a.jsx)(_.Z, {
                                title: t,
                                percentage: e,
                                onClick: function () {
                                    return j(!x && c)
                                },
                                isOpen: x,
                                isClickable: !0
                            }), (0, a.jsx)(nn.Z, {
                                percentage: e,
                                isOpen: f
                            })]
                        }), (0, a.jsx)(p.M, {
                            initial: !1,
                            children: x && (0, a.jsx)(ni, {
                                initial: "collapsed",
                                animate: "open",
                                exit: "collapsed",
                                variants: {
                                    open: {
                                        opacity: 1,
                                        height: "auto"
                                    },
                                    collapsed: {
                                        opacity: 0,
                                        height: 0
                                    }
                                },
                                transition: {
                                    duration: .4,
                                    ease: u.M4
                                },
                                children: (0, a.jsxs)(no, {
                                    children: [(0, a.jsx)(na, {
                                        children: (0, a.jsx)(B.Z, {
                                            asset: d,
                                            fit: "contain",
                                            sizes: {
                                                default: "57px",
                                                m: "45px"
                                            }
                                        })
                                    }), (0, a.jsx)(nr, {
                                        children: (0, a.jsx)(nc, {
                                            font: "p7",
                                            children: s
                                        })
                                    })]
                                })
                            }, "content")
                        })]
                    }))
                };

            function PDPAccordionsNested_templateObject() {
                var n = (0, c._)(["\n  padding-bottom: ", ";\n"]);
                return PDPAccordionsNested_templateObject = function () {
                    return n
                }, n
            }

            function PDPAccordionsNested_templateObject1() {
                var n = (0, c._)(["\n  overflow: ", ";\n"]);
                return PDPAccordionsNested_templateObject1 = function () {
                    return n
                }, n
            }

            function PDPAccordionsNested_templateObject2() {
                var n = (0, c._)(["\n  margin-top: ", ";\n  margin-bottom: ", ";\n"]);
                return PDPAccordionsNested_templateObject2 = function () {
                    return n
                }, n
            }

            function PDPAccordionsNested_templateObject3() {
                var n = (0, c._)(["\n  margin-top: ", ";\n  margin-bottom: ", ";\n"]);
                return PDPAccordionsNested_templateObject3 = function () {
                    return n
                }, n
            }
            PDPAccordionMaterial.propTypes = {
                id: m().string,
                title: m().string,
                percentage: m().string,
                information: m().string,
                thumbnail: m().object,
                parentExpanded: m().bool,
                materialEditable: m().string
            };
            var nl = b.ZP.div.withConfig({
                    componentId: "sc-831474d-0"
                })(PDPAccordionsNested_templateObject(), (0, O.o0)(16)),
                ns = (0, b.ZP)(d.m.div).withConfig({
                    componentId: "sc-831474d-1"
                })(PDPAccordionsNested_templateObject1(), function (n) {
                    return n.$canOverflow ? "visible" : "hidden"
                }),
                nu = (0, b.ZP)(k.Z).withConfig({
                    componentId: "sc-831474d-2"
                })(PDPAccordionsNested_templateObject2(), (0, O.o0)(8), (0, O.o0)(30)),
                nd = (0, b.ZP)(k.Z).withConfig({
                    componentId: "sc-831474d-3"
                })(PDPAccordionsNested_templateObject3(), (0, O.o0)(26), (0, O.o0)(30)),
                np = {
                    material_accordion: PDPAccordionMaterial,
                    care_accordion: CareInstruction,
                    production_accordion: y.Z
                },
                PDPAccordionsNested = function (n) {
                    var t, e = n.id,
                        r = n.title,
                        c = n.content,
                        l = n.description,
                        s = n.expanded,
                        u = n.setExpanded,
                        d = n.type,
                        p = n.parentExpanded,
                        f = n.isMaterialAccordion,
                        m = n.contentBounds,
                        b = n.productAccordion,
                        h = n._editable,
                        g = (0, v.S)(h),
                        j = e === s;
                    return (0, a.jsxs)(nl, (0, o._)((0, i._)({}, g), {
                        children: [(0, a.jsx)(_.Z, {
                            title: r,
                            isClickable: !1,
                            isOpen: j,
                            onClick: function () {
                                return u(!j && e)
                            }
                        }), (0, a.jsx)(ns, {
                            $canOverflow: p && j,
                            children: f ? (0, a.jsx)(PdpExtraDescription, {
                                extraDescription: c,
                                contentBounds: m
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(nu, {
                                    font: "p1",
                                    children: l
                                }), null == c ? void 0 : c.map(function (n, t) {
                                    var e = n.material,
                                        i = n.care,
                                        o = n.production,
                                        r = np[d],
                                        c = e.title,
                                        l = e.thumbnail,
                                        s = e.percentage,
                                        u = e.information,
                                        f = e._editable,
                                        m = i.icon,
                                        b = i.description,
                                        h = i._editable,
                                        g = o.title,
                                        v = o.thumbnail,
                                        _ = o.link,
                                        x = o.country,
                                        O = o._editable,
                                        w = v.id ? v : l;
                                    return r && (0, a.jsx)(r, {
                                        id: c,
                                        care: i,
                                        title: c || g,
                                        information: u,
                                        percentage: s,
                                        thumbnail: w,
                                        parentExpanded: p && j,
                                        link: _,
                                        icon: m,
                                        description: b,
                                        country: x,
                                        materialEditable: f,
                                        careEditable: h,
                                        supplierEditable: O
                                    }, "".concat(d, "-").concat(t))
                                })]
                            })
                        }), (0, a.jsx)(nd, {
                            font: "p3",
                            children: null == b ? void 0 : b.description
                        }), (0, a.jsx)(y.Z, (0, i._)({}, null == b ? void 0 : null === (t = b.content[0]) || void 0 === t ? void 0 : t.production))]
                    }))
                };

            function PDPAccordion_templateObject() {
                var n = (0, c._)(["\n  margin-bottom: ", ";\n\n  &:last-of-type {\n    margin: 0;\n  }\n"]);
                return PDPAccordion_templateObject = function () {
                    return n
                }, n
            }

            function PDPAccordion_templateObject1() {
                var n = (0, c._)(["\n  ", "\n\n  ", " {\n    ", "\n  }\n"]);
                return PDPAccordion_templateObject1 = function () {
                    return n
                }, n
            }

            function PDPAccordion_templateObject2() {
                var n = (0, c._)(["\n  overflow: ", ";\n"]);
                return PDPAccordion_templateObject2 = function () {
                    return n
                }, n
            }

            function PDPAccordion_templateObject3() {
                var n = (0, c._)(["\n  position: relative;\n\n  padding-top: ", ";\n\n  ol {\n    li {\n      &:not(:last-of-type) {\n        .paragraph {\n          margin-bottom: ", ";\n        }\n      }\n    }\n  }\n"]);
                return PDPAccordion_templateObject3 = function () {
                    return n
                }, n
            }
            PDPAccordionsNested.defaultProps = {
                setExpanded: function () {}
            }, PDPAccordionsNested.propTypes = {
                id: m().string,
                title: m().string,
                content: m().array,
                description: m().string,
                expanded: m().string,
                setExpanded: m().func,
                type: m().string,
                parentExpanded: m().bool,
                isMaterialAccordion: m().bool,
                contentBounds: m().object,
                _editable: m().string
            };
            var nf = b.ZP.div.withConfig({
                    componentId: "sc-a5753eea-0"
                })(PDPAccordion_templateObject(), (0, O.o0)(10)),
                nm = b.ZP.div.withConfig({
                    componentId: "sc-a5753eea-1"
                })(PDPAccordion_templateObject1(), function (n) {
                    return !n.isSticky && "\n    display: none;\n  "
                }, w.qk.m, function (n) {
                    return !n.isSticky && "\n    display: block;\n  "
                }),
                nb = (0, b.ZP)(d.m.div).withConfig({
                    componentId: "sc-a5753eea-2"
                })(PDPAccordion_templateObject2(), function (n) {
                    return n.$canOverflow ? "visible" : "hidden"
                }),
                nh = b.ZP.div.withConfig({
                    componentId: "sc-a5753eea-3"
                })(PDPAccordion_templateObject3(), (0, O.o0)(12), (0, O.o0)(8)),
                PDPAccordion = function (n) {
                    var t, e = n.title,
                        c = n.id,
                        d = n.isSizeGuideAccordion,
                        f = n.content,
                        m = n.onClick,
                        b = n._editable,
                        O = n.isSticky,
                        y = n.accordions,
                        P = n.contentBounds,
                        k = n.sizeGuide,
                        C = (0, s.Z)(w.t2.m),
                        Z = (0, r._)((0, g.Z)(), 2),
                        D = Z[0],
                        I = Z[1],
                        S = (0, v.S)(b),
                        E = (0, r._)((0, h.Q)(), 2),
                        A = E[0],
                        L = E[1],
                        M = (0, r._)((0, l.useState)(!1), 2),
                        T = M[0],
                        q = M[1],
                        R = !(null == D ? void 0 : D.accordion) && !!C || !C && null != D && !!D.accordion || c === (null == D ? void 0 : D.accordion),
                        B = null == D || !D.accordion || R,
                        V = (0, r._)((0, l.useState)("nested-0"), 2),
                        N = V[0],
                        F = V[1];
                    return (0, l.useEffect)(function () {
                        L(B)
                    }, [B, L]), B && (0, a.jsxs)(nf, (0, o._)((0, i._)({}, S), {
                        children: [(0, a.jsx)(_.Z, {
                            isClickable: (null == D ? void 0 : D.type) !== "accordion" && C || !C && (null == D ? void 0 : D.type) !== null,
                            hasInnerAccordions: c === (null == D ? void 0 : D.accordion) && !!(null == y ? void 0 : y.length),
                            title: e,
                            onClick: m,
                            isSticky: O
                        }), (0, a.jsx)(nm, {
                            isSticky: O,
                            children: (0, a.jsx)(p.M, {
                                initial: !1,
                                children: (0, a.jsxs)(nb, {
                                    ref: A,
                                    initial: {
                                        height: 0
                                    },
                                    animate: {
                                        height: (null == D ? void 0 : D.type) === "accordion" ? "auto" : 0
                                    },
                                    transition: {
                                        duration: .6,
                                        ease: u.M4
                                    },
                                    onAnimationStart: function () {
                                        return q(!1)
                                    },
                                    onAnimationComplete: function () {
                                        return q((null == D ? void 0 : D.type) === "accordion")
                                    },
                                    $canOverflow: T,
                                    children: [!(null == y ? void 0 : y.length) && (0, a.jsx)(nh, {
                                        children: (0, a.jsx)(j.Z, {
                                            text: f,
                                            font: "p3",
                                            fontLink: "p3",
                                            paragraphClassName: "paragraph",
                                            onClickSizeGuide: function () {
                                                return I((0, o._)((0, i._)({}, D), {
                                                    type: "sizeGuide"
                                                }))
                                            }
                                        })
                                    }), d && !!k && (0, a.jsx)(x.Z, {
                                        sizeGuide: k
                                    }), null == y ? void 0 : null === (t = y.slice(0, 1)) || void 0 === t ? void 0 : t.map(function (n, t) {
                                        var e = "material_accordion" === n.type;
                                        return (0, a.jsx)(PDPAccordionsNested, (0, i._)({
                                            id: "nested-".concat(t),
                                            expanded: N,
                                            setExpanded: F,
                                            parentExpanded: R,
                                            isMaterialAccordion: e,
                                            contentBounds: P,
                                            productAccordion: null == y ? void 0 : y[1]
                                        }, n), n.title)
                                    })]
                                })
                            })
                        })]
                    }))
                };
            PDPAccordion.defaultProps = {
                onClick: function () {},
                isSticky: !1
            }, PDPAccordion.propTypes = {
                title: m().string,
                id: m().string,
                content: m().object,
                accordions: m().array,
                onClick: m().func,
                isSticky: m().bool,
                contentBounds: m().object,
                sizeGuide: m().object,
                isSizeGuideAccordion: m().bool,
                _editable: m().string
            };
            var ng = PDPAccordion
        },
        82915: function (n, t, e) {
            var i = e(82729),
                o = e(85893),
                r = e(31632),
                c = e(12560),
                a = e(45697),
                l = e.n(a);

            function _templateObject() {
                var n = (0, i._)(["\n  fill: none;\n\n  .percentage {\n    stroke: var(--color-phosphor);\n  }\n\n  .placeholder {\n    stroke: var(--color-lightGrey);\n  }\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }
            var s = e(14141).ZP.svg.withConfig({
                    componentId: "sc-b9e6fc1f-0"
                })(_templateObject()),
                Percentage = function (n) {
                    var t = n.className,
                        e = n.percentage,
                        i = n.isOpen;
                    return (0, o.jsxs)(s, {
                        viewBox: "0 0 300 15",
                        preserveAspectRatio: "none",
                        className: t,
                        children: [(0, o.jsx)("mask", {
                            id: "mask-".concat(e),
                            children: (0, o.jsx)(c.m.rect, {
                                width: "300",
                                height: "15",
                                x: "0",
                                y: "0",
                                fill: "white",
                                animate: {
                                    scaleX: i ? e / 100 : 0,
                                    originX: 0,
                                    originY: 0
                                },
                                transition: {
                                    duration: .5,
                                    ease: r.M4,
                                    delay: .1
                                }
                            })
                        }), (0, o.jsx)("path", {
                            className: "placeholder",
                            d: "M300 14H194.27C192.145 14 190.076 13.3234 188.362 12.0684L175.884 2.93163C174.17 1.67657 172.1 1 169.976 1H0",
                            pathLength: "1"
                        }), (0, o.jsx)("path", {
                            className: "percentage",
                            d: "M300 14H194.27C192.145 14 190.076 13.3234 188.362 12.0684L175.884 2.93163C174.17 1.67657 172.1 1 169.976 1H0",
                            pathLength: "1",
                            mask: "url(#mask-".concat(e, ")")
                        })]
                    })
                };
            t.Z = Percentage, Percentage.propTypes = {
                className: l().string,
                percentage: l().string.isRequired,
                isOpen: l().bool.isRequired
            }
        },
        54831: function (n, t, e) {
            var i = e(85893),
                o = e(45697),
                r = e.n(o),
                c = e(80328),
                a = e(45449),
                BracketLabel = function (n) {
                    var t = n.label,
                        e = n.font;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(a.Z, {
                            symbol: "[",
                            font: e
                        }), t, (0, i.jsx)(a.Z, {
                            symbol: "]",
                            font: e
                        })]
                    })
                };
            BracketLabel.propTypes = {
                label: r().string.isRequired,
                font: r().oneOf(Object.keys(c.g).map(function (n) {
                    return n
                }))
            }, t.Z = BracketLabel
        },
        9050: function (n, t, e) {
            var i = e(85893),
                o = e(67294),
                r = e(45697),
                c = e.n(r),
                a = e(82924),
                l = e(91952),
                s = e(80328),
                LineBreakText = function (n) {
                    var t = n.className,
                        e = n.text,
                        r = n.font,
                        c = n.tag,
                        s = n.align,
                        u = n.lineComponent,
                        d = n.supportItalics;
                    if (!e) return "";
                    var p = null != u ? u : o.Fragment;
                    return (0, i.jsx)(a.Z, {
                        font: r,
                        tag: c,
                        align: s,
                        className: t,
                        children: e.split("\n").map(function (n, t) {
                            return [t > 0 && (0, i.jsx)("br", {}, "".concat(n, "-").concat(t, "-br")), (0, i.jsx)(p, {
                                children: d ? (0, i.jsx)(l.N, {
                                    text: n
                                }) : n
                            }, "".concat(n, "-").concat(t, "-text"))]
                        })
                    })
                };
            LineBreakText.defaultProps = {
                lineComponent: o.Fragment,
                supportItalics: !1
            }, LineBreakText.propTypes = {
                className: c().string,
                text: c().string,
                font: c().oneOf(Object.keys(s.g).map(function (n) {
                    return n
                })).isRequired,
                tag: c().string.isRequired,
                align: c().string,
                lineComponent: c().elementType,
                supportItalics: c().bool
            }, t.Z = LineBreakText
        },
        62132: function (n, t, e) {
            e.d(t, {
                Z: function () {
                    return text_RichText
                }
            });
            var i = e(75766),
                o = e(72253),
                r = e(14932),
                c = e(24043),
                a = e(82729),
                l = e(85893),
                s = e(90455),
                u = e(14141),
                d = e(19803),
                p = e(35006),
                f = e(67294),
                m = e(14636),
                b = e(45697),
                h = e.n(b),
                g = e(82924),
                v = e(46716),
                _ = e(55982),
                j = e(10640),
                x = e(73460),
                O = e(12560),
                w = e(85109),
                hooks_useRefs = function () {
                    for (var n = arguments.length, t = Array(n), e = 0; e < n; e++) t[e] = arguments[e];
                    return (0, f.useCallback)(function (n) {
                        t.forEach(function (t) {
                            "function" == typeof t ? t(n) : "object" == typeof t && null !== t && (t.current = n)
                        })
                    }, t)
                },
                y = e(41897),
                P = e(30086),
                k = e(78445),
                C = e(54831),
                Z = e(24771),
                D = e(44533);

            function _templateObject() {
                var n = (0, a._)(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n\n  width: 100vw;\n  height: ", ";\n  padding-left: ", ";\n\n  ", "\n\n  ", " {\n    height: ", ";\n    padding: initial;\n  }\n\n  ", " {\n    position: absolute;\n    left: 0;\n    bottom: initial;\n\n    display: flex;\n    align-items: flex-end;\n    width: initial;\n\n    background: none;\n  }\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }

            function _templateObject1() {
                var n = (0, a._)(["\n  width: ", ";\n"]);
                return _templateObject1 = function () {
                    return n
                }, n
            }

            function _templateObject2() {
                var n = (0, a._)(["\n  width: 100%;\n  height: ", ";\n"]);
                return _templateObject2 = function () {
                    return n
                }, n
            }

            function _templateObject3() {
                var n = (0, a._)(["\n  position: relative;\n\n  width: ", ";\n  height: ", ";\n\n  animation: ", " 0.2s linear;\n  animation-play-state: paused;\n\n  ", "\n\n  ", " {\n    ", "\n  }\n"]);
                return _templateObject3 = function () {
                    return n
                }, n
            }

            function _templateObject4() {
                var n = (0, a._)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 1;\n\n  ", " {\n    flex-direction: row;\n  }\n"]);
                return _templateObject4 = function () {
                    return n
                }, n
            }

            function _templateObject5() {
                var n = (0, a._)(["\n  position: absolute;\n  bottom: ", ";\n  left: 0;\n  right: 0;\n\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  max-width: ", ";\n  gap: ", ";\n\n  ", " {\n    max-width: 60ch;\n  }\n\n  ", " {\n    position: relative;\n\n    max-width: initial;\n    width: ", ";\n\n    flex-direction: column;\n  }\n"]);
                return _templateObject5 = function () {
                    return n
                }, n
            }

            function _templateObject6() {
                var n = (0, a._)(["\n  align-self: self-start;\n"]);
                return _templateObject6 = function () {
                    return n
                }, n
            }

            function _templateObject7() {
                var n = (0, a._)(["\n  color: var(--color-orange);\n"]);
                return _templateObject7 = function () {
                    return n
                }, n
            }

            function _templateObject8() {
                var n = (0, a._)(["\n  color: var(--color-grey2);\n"]);
                return _templateObject8 = function () {
                    return n
                }, n
            }

            function _templateObject9() {
                var n = (0, a._)(["\n  top: 50%;\n  right: -", "px;\n\n  width: ", "px;\n\n  transform: translateY(-50%);\n"]);
                return _templateObject9 = function () {
                    return n
                }, n
            }
            var I = u.ZP.div.withConfig({
                    componentId: "sc-1e41d2a8-0"
                })(_templateObject(), (0, v.KK)("attachmentLink"), (0, v.o0)(260), (0, v.o0)(20), function (n) {
                    var t = n.colorTheme;
                    return "\n      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ".concat(null == t ? void 0 : t.background, " 33%);\n      color: ").concat(t.color, "\n    ")
                }, _.qk.s, (0, v.o0)(336), _.qk.l),
                S = (0, u.iv)(_templateObject1(), (0, v.o0)(230)),
                E = (0, u.iv)(_templateObject2(), (0, v.o0)(311)),
                A = u.ZP.div.withConfig({
                    componentId: "sc-1e41d2a8-1"
                })(_templateObject3(), (0, v.o0)(104), (0, v.o0)(133), j.ze, function (n) {
                    return n && "animation-play-state: running;"
                }, _.qk.l, function (n) {
                    return "landscape" === n.imageOrientation ? S : E
                }),
                L = (0, u.ZP)(O.m.div).withConfig({
                    componentId: "sc-1e41d2a8-2"
                })(_templateObject4(), _.qk.l),
                M = u.ZP.div.withConfig({
                    componentId: "sc-1e41d2a8-3"
                })(_templateObject5(), (0, v.o0)(30), (0, v.o0)(340), (0, v.o0)(15), _.qk.m, _.qk.l, (0, v.o0)(229)),
                T = u.ZP.button.withConfig({
                    componentId: "sc-1e41d2a8-4"
                })(_templateObject6()),
                q = (0, u.ZP)(g.Z).withConfig({
                    componentId: "sc-1e41d2a8-5"
                })(_templateObject7()),
                R = (0, u.ZP)(g.Z).withConfig({
                    componentId: "sc-1e41d2a8-6"
                })(_templateObject8()),
                B = (0, u.ZP)(Z.Z).withConfig({
                    componentId: "sc-1e41d2a8-7"
                })(_templateObject9(), 99, 99),
                SidenoteContent = function (n) {
                    var t = n.label,
                        e = n.image,
                        i = n.description,
                        o = n.isVisible,
                        r = n.setIsVisible,
                        a = n.triggerDistanceFromTop,
                        s = n.imageOrientation,
                        u = n.backgroundColor,
                        d = (0, m.Z)(_.t2.l),
                        p = (0, f.useRef)(),
                        b = (0, y.Z)("mission"),
                        h = (0, w.Z)(p),
                        v = (0, c._)((0, x.Z)(), 2),
                        j = v[0],
                        O = v[1],
                        Z = O.width,
                        S = O.height,
                        E = hooks_useRefs(p, j);
                    if ((0, f.useEffect)(function () {
                            h && r(!1)
                        }, [h, r]), !o) return null;
                    var V = -(S / 3.5) + a.current,
                        N = D.M[u];
                    return (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsxs)(I, {
                            ref: E,
                            colorTheme: N,
                            style: d ? {
                                left: -Z - 99 - 15,
                                top: V
                            } : {},
                            children: [(0, l.jsxs)(M, {
                                children: [(0, l.jsx)(A, {
                                    imageOrientation: s,
                                    children: (0, l.jsx)(k.Z, {
                                        asset: e
                                    })
                                }), (0, l.jsxs)(L, {
                                    animate: {
                                        opacity: 1
                                    },
                                    initial: {
                                        opacity: 0
                                    },
                                    transition: {
                                        delay: .2,
                                        duration: .2
                                    },
                                    children: [(0, l.jsx)(q, {
                                        tag: "span",
                                        font: d ? "b2" : "p7",
                                        children: t
                                    }), (0, l.jsx)(R, {
                                        tag: "span",
                                        font: "p3",
                                        children: i
                                    })]
                                }), d ? null : (0, l.jsx)(T, {
                                    onClick: function () {
                                        return r(!1)
                                    },
                                    children: (0, l.jsxs)(g.Z, {
                                        font: "b3",
                                        children: [(0, l.jsx)(C.Z, {
                                            label: "-"
                                        }), (0, l.jsx)(P.Z, {
                                            children: b("closeOverlay")
                                        })]
                                    })
                                })]
                            }), d ? (0, l.jsx)(B, {
                                path: "M99 1H51.844a10 10 0 0 0-9.738 7.725l-25.132 107.55A10 10 0 0 1 7.237 124H0",
                                viewBox: "0 0 99 125",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientTransform: "rotate(139.034 49.313 18.99) scale(169.348 148.309)",
                                id: "connectorMission"
                            }) : null]
                        })
                    })
                };

            function Sidenote_templateObject() {
                var n = (0, a._)(["\n  position: relative;\n  z-index: ", ";\n\n  ", " {\n    position: initial;\n  }\n"]);
                return Sidenote_templateObject = function () {
                    return n
                }, n
            }

            function Sidenote_templateObject1() {
                var n = (0, a._)(["\n  position: relative;\n\n  text-transform: uppercase;\n  color: var(--color-phosphor);\n  z-index: 1;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: none;\n    background-color: var(--color-white);\n    pointer-events: none;\n    z-index: -1;\n  }\n\n  ", " {\n    &:hover {\n      &::after {\n        display: block;\n      }\n    }\n  }\n\n  &.focus-visible:focus {\n    outline: none;\n    color: var(--color-phosphor);\n    &::after {\n      display: block;\n    }\n    ", "\n  }\n\n  &:active {\n    &::after {\n      display: block;\n      background-color: var(--color-lightGrey2);\n    }\n  }\n\n  .markedText {\n    color: var(--color-phosphor);\n  }\n"]);
                return Sidenote_templateObject1 = function () {
                    return n
                }, n
            }
            SidenoteContent.defaultProps = {
                imageOrientation: "portrait",
                triggerDistanceFromTop: 0,
                isVisible: !1,
                backgroundColor: "black"
            }, SidenoteContent.propTypes = {
                label: h().string,
                description: h().string,
                image: h().object,
                imageOrientation: h().oneOf(["landscape", "portrait"]),
                isVisible: h().bool,
                setIsVisible: h().func,
                triggerDistanceFromTop: h().object
            };
            var V = u.ZP.span.withConfig({
                    componentId: "sc-8e74058c-0"
                })(Sidenote_templateObject(), (0, v.KK)("stickyBuyButton"), _.qk.l),
                N = u.ZP.button.withConfig({
                    componentId: "sc-8e74058c-1"
                })(Sidenote_templateObject1(), _.qk.hover, j.KO),
                Sidenote = function (n) {
                    var t = n.label,
                        e = n.description,
                        i = n.image,
                        o = n.imageOrientation,
                        r = n.backgroundColor,
                        a = (0, m.Z)(_.t2.l),
                        s = (0, c._)((0, f.useState)(!1), 2),
                        u = s[0],
                        d = s[1],
                        p = (0, f.useRef)(0),
                        b = (0, f.useRef)();
                    return (0, f.useEffect)(function () {
                        p.current = b.current.offsetTop
                    }, []), (0, l.jsxs)(V, {
                        ref: b,
                        children: [(0, l.jsx)(N, {
                            onClick: function () {
                                return d(!0)
                            },
                            style: {
                                pointerEvents: u ? "none" : "initial"
                            },
                            children: (0, l.jsx)(g.Z, {
                                tag: "span",
                                font: a ? "p4" : "p6",
                                children: t
                            })
                        }), (0, l.jsx)(SidenoteContent, {
                            label: t,
                            description: e,
                            image: i,
                            isVisible: u,
                            setIsVisible: d,
                            triggerDistanceFromTop: p,
                            imageOrientation: o,
                            backgroundColor: r
                        })]
                    })
                };
            Sidenote.propTypes = {
                label: h().string,
                description: h().string,
                image: h().object,
                imageOrientation: h().string
            };
            var F = e(39224),
                G = e(16744),
                z = e(9050);

            function LegalSubBlock_templateObject() {
                var n = (0, a._)(["\n  &:nth-child(1) {\n    margin-top: ", ";\n  }\n\n  &:not(:last-child) {\n    margin-bottom: ", ";\n  }\n\n  &:last-child {\n    margin-bottom: ", ";\n  }\n"]);
                return LegalSubBlock_templateObject = function () {
                    return n
                }, n
            }

            function LegalSubBlock_templateObject1() {
                var n = (0, a._)(["\n  margin-top: ", ";\n"]);
                return LegalSubBlock_templateObject1 = function () {
                    return n
                }, n
            }
            var $ = u.ZP.div.withConfig({
                    componentId: "sc-e1ef94b5-0"
                })(LegalSubBlock_templateObject(), (0, v.o0)(24), (0, v.o0)(24), (0, v.o0)(105)),
                H = u.ZP.div.withConfig({
                    componentId: "sc-e1ef94b5-1"
                })(LegalSubBlock_templateObject1(), (0, v.o0)(8)),
                LegalSubBlock = function (n) {
                    var t = n._editable,
                        e = n.content,
                        i = n.title,
                        c = (0, G.S)(t);
                    return (0, l.jsxs)($, (0, r._)((0, o._)({}, c), {
                        children: [(0, l.jsx)(z.Z, {
                            text: i,
                            tag: "span",
                            font: "b2"
                        }), (0, l.jsx)(H, {
                            children: (0, l.jsx)(text_RichText, {
                                text: e,
                                font: "p3"
                            })
                        })]
                    }))
                };
            LegalSubBlock.defaultProps = {
                _editable: ""
            }, LegalSubBlock.propTypes = {
                content: h().object.isRequired,
                title: h().string.isRequired,
                _editable: h().string.isRequired
            };
            var W = e(46571),
                Q = e(32603),
                U = e(17500);

            function RichText_templateObject() {
                var n = (0, a._)(["\n  li {\n    position: relative;\n\n    padding-left: ", ";\n\n    &:before {\n      position: absolute;\n      top: ", ";\n      left: 0;\n\n      width: 2px;\n      height: 2px;\n\n      background-color: var(--color-black);\n      border-radius: 9999px;\n\n      content: '';\n    }\n  }\n"]);
                return RichText_templateObject = function () {
                    return n
                }, n
            }

            function RichText_templateObject1() {
                var n = (0, a._)(["\n  position: relative;\n\n  width: 100%;\n  height: 100%;\n\n  ", "\n"]);
                return RichText_templateObject1 = function () {
                    return n
                }, n
            }

            function RichText_templateObject2() {
                var n = (0, a._)(["\n  text-decoration-line: underline;\n  text-underline-offset: 2px;\n"]);
                return RichText_templateObject2 = function () {
                    return n
                }, n
            }

            function RichText_templateObject3() {
                var n = (0, a._)(["\n  ", ";\n  text-decoration-thickness: 1px;\n"]);
                return RichText_templateObject3 = function () {
                    return n
                }, n
            }

            function RichText_templateObject4() {
                var n = (0, a._)(["\n  ", ";\n\n  text-decoration-thickness: ", ";\n\n  ", "\n"]);
                return RichText_templateObject4 = function () {
                    return n
                }, n
            }
            var K = u.ZP.ol.withConfig({
                    componentId: "sc-3e9a66c6-0"
                })(RichText_templateObject(), (0, v.o0)(10), (0, v.o0)(5)),
                Y = (0, u.ZP)(U.Z).withConfig({
                    componentId: "sc-3e9a66c6-1"
                })(RichText_templateObject1(), function (n) {
                    return "aspect-ratio: ".concat(n.width, "/").concat(n.height)
                }),
                J = (0, u.iv)(RichText_templateObject2()),
                X = (0, u.ZP)(Q.default).withConfig({
                    componentId: "sc-3e9a66c6-2"
                })(RichText_templateObject3(), J),
                nn = (0, u.ZP)(W.default).withConfig({
                    componentId: "sc-3e9a66c6-3"
                })(RichText_templateObject4(), J, function (n) {
                    return n.increaseUnderlineThickness ? "2px" : "1px"
                }, (0, j.V$)({
                    cornerColor: "--color-black",
                    hoverColor: "--color-white"
                })),
                text_RichText = function (n) {
                    var t, e, a = n.tag,
                        u = n.text,
                        f = n.font,
                        m = n.fontItalic,
                        b = n.fontBold,
                        h = n.fontParagraph,
                        v = n.paragraphClassName,
                        _ = n.italicClassName,
                        j = n.boldClassName,
                        x = n.increaseUnderlineThickness,
                        O = n.onClickSizeGuide,
                        w = n.fontLink,
                        y = n.disableLinkOrButtonWithStatesHover,
                        P = n.isFontCustomizable,
                        k = void 0 !== P && P;
                    return (0, s.sY)(u, {
                        markResolvers: (t = {}, (0, i._)(t, s.Qp, function (n) {
                            return (0, l.jsx)(g.Z, {
                                font: b,
                                tag: "span",
                                className: j,
                                children: n
                            })
                        }), (0, i._)(t, s.mZ, function (n) {
                            return (0, l.jsx)(g.Z, {
                                font: m,
                                tag: "span",
                                className: _,
                                children: n
                            })
                        }), (0, i._)(t, s.et, function (n, t) {
                            var e, i = t || {},
                                o = i.linktype,
                                r = i.target,
                                c = i.href,
                                a = i.anchor,
                                s = c.split("/").filter(Boolean),
                                u = s.shift();
                            ("pages" === u || "account" === u || "categories" === u) && (s.includes("home") && (e = "/"), s.includes("customer-care") && (e = ["customer-care", s[s.length - 1]].join("/")), s.includes("legal") && (e = ["legal", s[s.length - 1]].join("/")), s.includes("collections") && (e = ["collections", s[s.length - 1]].join("/")), s.includes("journal") && (e = ["journal", s[2], s[s.length - 1]].join("/"))), "products" === u && (e = [s[0], "products", s[1], s[s.length - 1]].join("/"));
                            var d = a ? "".concat(e, "#").concat(a) : e;
                            switch (o) {
                                case "story":
                                    return y ? (0, l.jsx)(X, {
                                        slug: d,
                                        children: n
                                    }) : (0, l.jsx)(F.Z, {
                                        label: n,
                                        underline: !0,
                                        onClick: O,
                                        font: w,
                                        slug: d
                                    });
                                case "email":
                                    return (0, l.jsx)(nn, {
                                        href: "mailto:".concat(c),
                                        target: r,
                                        increaseUnderlineThickness: x,
                                        children: n
                                    });
                                default:
                                    return (0, l.jsx)(nn, {
                                        href: c,
                                        target: r,
                                        increaseUnderlineThickness: x,
                                        children: n
                                    })
                            }
                        }), t),
                        nodeResolvers: (e = {}, (0, i._)(e, s.e3, function (n) {
                            return n ? (0, l.jsx)(g.Z, {
                                font: null != h ? h : f,
                                tag: a || "p",
                                className: v,
                                children: n
                            }) : (0, l.jsx)(g.Z, {
                                children: (0, l.jsx)("br", {})
                            })
                        }), (0, i._)(e, s.tw, function (n, t) {
                            var e = t.level;
                            return n && (0, l.jsx)(g.Z, {
                                font: k ? ({
                                    2: "h3",
                                    3: "h7"
                                })[e] : f,
                                tag: "h".concat(e),
                                children: n
                            })
                        }), (0, i._)(e, s.mD, function (n) {
                            return (0, l.jsx)(K, {
                                children: n
                            })
                        }), (0, i._)(e, s.iZ, function (n) {
                            return (0, l.jsx)("ol", {
                                font: f,
                                children: n
                            })
                        }), (0, i._)(e, s.wZ, function (n) {
                            return (0, l.jsx)("li", {
                                children: n
                            })
                        }), (0, i._)(e, s.MM, function (n, t) {
                            var e = t.alt,
                                i = t.src;
                            return (0, l.jsx)("img", {
                                src: i,
                                alt: e
                            })
                        }), e),
                        blokResolvers: {
                            ShippingRateSelector: function (n) {
                                return (0, l.jsx)(p.Z, (0, r._)((0, o._)({}, n), {
                                    dropdownDarkMode: !0
                                }))
                            },
                            legalSubBlock: function (n) {
                                return (0, l.jsx)(LegalSubBlock, (0, o._)({}, n))
                            },
                            sidenote: function (n) {
                                return (0, l.jsx)(Sidenote, (0, o._)({}, n))
                            },
                            media: function (n) {
                                var t = n.asset,
                                    e = (0, c._)((0, d.p)(null == t ? void 0 : t.filename), 2),
                                    i = e[0],
                                    o = e[1];
                                return (0, l.jsx)(Y, {
                                    asset: t,
                                    layout: "fill",
                                    fit: "contain",
                                    width: i,
                                    height: o,
                                    sizes: {
                                        default: "".concat(i, "px")
                                    }
                                })
                            }
                        }
                    })
                }
        },
        24771: function (n, t, e) {
            e.d(t, {
                Z: function () {
                    return v
                }
            });
            var i = e(72253),
                o = e(47702),
                r = e(82729),
                c = e(85893),
                a = e(12560),
                l = e(45697),
                s = e.n(l),
                u = e(14141),
                d = e(14932),
                p = e(24608),
                f = e(44533);

            function _templateObject() {
                var n = (0, r._)(["\n  0% { \n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100%{\n    opacity: 0;\n  }\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }

            function _templateObject1() {
                var n = (0, r._)(["\n  animation: ", " 3s linear infinite;\n"]);
                return _templateObject1 = function () {
                    return n
                }, n
            }
            var m = (0, u.F4)(_templateObject()),
                b = u.ZP.path.withConfig({
                    componentId: "sc-74dd87a4-0"
                })(_templateObject1(), m),
                PulsePath = function (n) {
                    var t = n.path,
                        e = n.cx,
                        o = n.cy,
                        r = n.r,
                        l = n.gradientTransform,
                        s = n.id,
                        u = (0, p.Z)() ? f.D.darkGrey : f.D.white,
                        m = {
                            stroke: "url(#gradient-".concat(s, ")"),
                            strokeWidth: 2
                        };
                    return (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)(a.m.path, (0, d._)((0, i._)({
                            d: t
                        }, m), {
                            initial: {
                                pathLength: .1
                            },
                            animate: {
                                pathLength: 1
                            },
                            transition: {
                                duration: 5,
                                repeat: 1 / 0,
                                repeatType: "loop",
                                ease: "linear",
                                repeatDelay: 0
                            }
                        })), (0, c.jsx)(b, (0, i._)({
                            d: t
                        }, m)), (0, c.jsxs)("radialGradient", {
                            id: "gradient-".concat(s),
                            cx: e,
                            cy: o,
                            r: r,
                            gradientTransform: l,
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, c.jsx)("stop", {
                                stopColor: u
                            }), (0, c.jsx)("stop", {
                                offset: "1",
                                stopColor: u,
                                stopOpacity: "0"
                            })]
                        })]
                    })
                };
            PulsePath.propTypes = {
                path: s().string,
                gradientTransform: s().string,
                cx: s().string,
                cy: s().string,
                r: s().string,
                id: s().string
            };
            var h = e(55982);

            function LineConnector_templateObject() {
                var n = (0, r._)(["\n  position: absolute;\n  fill: none;\n  pointer-events: none;\n\n  ", " {\n    width: ", ";\n  }\n"]);
                return LineConnector_templateObject = function () {
                    return n
                }, n
            }
            var g = (0, u.ZP)(a.m.svg).withConfig({
                    componentId: "sc-23c1e7aa-0"
                })(LineConnector_templateObject(), h.qk.m, function (n) {
                    var t = n.$connectorWidth;
                    return "".concat(t, "vw")
                }),
                LineConnector = function (n) {
                    var t = n.className,
                        e = n.viewBox,
                        r = n.path,
                        a = n.connectorWidth,
                        l = (0, o._)(n, ["className", "viewBox", "path", "connectorWidth"]);
                    return (0, c.jsx)(g, {
                        className: t,
                        $connectorWidth: a,
                        viewBox: e,
                        animate: {
                            opacity: 1
                        },
                        initial: {
                            opacity: 0
                        },
                        transition: {
                            delay: .2,
                            duration: .2
                        },
                        children: (0, c.jsx)(PulsePath, (0, i._)({
                            path: r
                        }, l))
                    })
                };
            LineConnector.propTypes = {
                className: s().string,
                viewBox: s().string,
                path: s().string,
                connectorWidth: s().number
            };
            var v = LineConnector
        },
        91952: function (n, t, e) {
            e.d(t, {
                N: function () {
                    return ItalicSupportedDescription
                },
                Z: function () {
                    return nf
                }
            });
            var i = e(72253),
                o = e(14932),
                r = e(47702),
                c = e(24043),
                a = e(82729),
                l = e(85893),
                s = e(67294),
                u = e(14257),
                d = e(73460),
                p = e(14636),
                f = e(12560),
                m = e(45697),
                b = e.n(m),
                h = e(14141),
                g = e(59229),
                v = e(13493),
                _ = e(50708),
                j = e(80704),
                x = e(61039),
                O = e(35666),
                w = e(7100),
                y = e(33539),
                P = e(49636),
                k = e(73380),
                C = e(44726),
                Z = e(41897),
                D = e(40996),
                I = e(94718),
                S = e(29276),
                E = e(77159),
                A = e(78445),
                L = e(79277),
                M = e(46716),
                T = e(55982),
                q = e(10640);

            function _templateObject() {
                var n = (0, a._)(["\n  position: relative;\n\n  width: max-content;\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }

            function _templateObject1() {
                var n = (0, a._)(["\n  ", " {\n    display: flex;\n  }\n"]);
                return _templateObject1 = function () {
                    return n
                }, n
            }

            function _templateObject2() {
                var n = (0, a._)(["\n      opacity: 0.4;\n      filter: grayscale(1);\n    "]);
                return _templateObject2 = function () {
                    return n
                }, n
            }

            function _templateObject3() {
                var n = (0, a._)(["\n  width: 100%;\n  height: 100%;\n\n  padding: ", ";\n\n  ", "\n\n  ", ";\n\n  &:focus-visible:focus {\n    opacity: 1;\n  }\n"]);
                return _templateObject3 = function () {
                    return n
                }, n
            }

            function _templateObject4() {
                var n = (0, a._)(["\n  width: ", ";\n  height: ", ";\n\n  transition: 0.8s opacity ", ";\n\n  &:focus-within {\n    opacity: 1;\n  }\n\n  ", " {\n    width: ", ";\n    height: ", ";\n\n    background-color: var(--color-lightGrey);\n\n    ", " {\n      &:hover {\n        ", " {\n          opacity: 1;\n        }\n      }\n    }\n  }\n"]);
                return _templateObject4 = function () {
                    return n
                }, n
            }

            function _templateObject5() {
                var n = (0, a._)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n\n  transform: translate(0, ", "px);\n  transition: 0.8s transform ", ";\n  z-index: 1;\n\n  ", " {\n    width: auto;\n    height: 100%;\n\n    transform: translate(", "px, 0);\n  }\n"]);
                return _templateObject5 = function () {
                    return n
                }, n
            }
            var R = h.ZP.div.withConfig({
                    componentId: "sc-a693a880-0"
                })(_templateObject()),
                B = h.ZP.ul.withConfig({
                    componentId: "sc-a693a880-1"
                })(_templateObject1(), T.qk.m),
                V = h.ZP.button.withConfig({
                    componentId: "sc-a693a880-2"
                })(_templateObject3(), function (n) {
                    return "contain" === n.fit ? (0, M.o0)(10) : 0
                }, (0, q.OG)({
                    cornerColor: "--color-black"
                }), function (n) {
                    return n.disable && (0, h.iv)(_templateObject2())
                }),
                N = h.ZP.li.withConfig({
                    componentId: "sc-a693a880-3"
                })(_templateObject4(), (0, M.o0)(40), (0, M.o0)(40), M.Lj.easeOutExpo, T.qk.m, (0, M.o0)(48), (0, M.o0)(48), T.qk.hover, V),
                F = (0, h.ZP)(L.Z).withConfig({
                    componentId: "sc-a693a880-4"
                })(_templateObject5(), function (n) {
                    return 40 * n.activeIndex
                }, M.Lj.easeOutExpo, T.qk.m, function (n) {
                    return 48 * n.activeIndex
                }),
                Switcher = function (n) {
                    var t = n.className,
                        e = n.onClick,
                        i = n.onClickEnvironment,
                        o = n.list,
                        r = n.fit,
                        a = n.activeEnvironmentIndex,
                        u = n.isEnvironment,
                        d = n.activeModel,
                        p = (0, E.Z)(),
                        f = (0, c._)((0, s.useState)(0), 2),
                        m = f[0],
                        b = f[1];
                    return (0, s.useEffect)(function () {
                        if (p) {
                            if (!u) {
                                var n = o.findIndex(function (n) {
                                    return n.label === d
                                });
                                if (-1 === n) return;
                                b(n);
                                return
                            }
                            b(a)
                        }
                    }, [a, u, d, o, p]), (0, l.jsx)(R, {
                        className: t,
                        children: o.length > 0 ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(F, {
                                type: "modelSwitchFrame",
                                activeIndex: m
                            }), (0, l.jsx)(B, {
                                children: o.map(function (n, t) {
                                    var o = n.label,
                                        c = n.asset,
                                        a = (c || {}).id;
                                    return (0, l.jsx)(N, {
                                        children: (0, l.jsx)(V, {
                                            disable: t !== m,
                                            onClick: function () {
                                                b(t), e && e(o), i && i(t)
                                            },
                                            fit: r,
                                            children: (0, l.jsx)(A.Z, {
                                                asset: c,
                                                fit: r
                                            })
                                        })
                                    }, a || t)
                                })
                            })]
                        }) : null
                    })
                };
            Switcher.defaultProps = {
                onClick: function () {},
                onClickEnvironment: function () {},
                list: [],
                fit: "cover",
                isEnvironment: !1
            }, Switcher.propTypes = {
                className: b().string,
                onClick: b().func,
                onClickEnvironment: b().func,
                list: b().array.isRequired,
                fit: b().string,
                activeEnvironmentIndex: b().number,
                activeModel: b().oneOf(["male", "female"]),
                isEnvironment: b().bool
            };
            var G = e(32609),
                z = e(11333),
                $ = e(9050),
                H = e(82924),
                W = e(24771),
                Q = e(31632),
                U = {
                    closed: {
                        opacity: 0
                    },
                    open: {
                        opacity: 1
                    }
                },
                K = {
                    type: "tween",
                    ease: Q.M4,
                    duration: .8
                };

            function ProductDescription_templateObject() {
                var n = (0, a._)(["\n  position: relative;\n\n  margin-left: 0;\n  margin-top: ", ";\n\n  svg {\n    display: none;\n  }\n\n  .content {\n    padding: 0 ", ";\n\n    background-color: transparent;\n  }\n\n  ", " {\n    width: ", ";\n    margin: ", " auto 0;\n\n    .content {\n      padding: 0;\n    }\n  }\n\n  ", " {\n    margin: 0 ", " ", " 0;\n    width: auto;\n\n    svg {\n      display: block;\n    }\n\n    .content {\n      position: relative;\n      padding: ", " ", ";\n\n      background-color: var(--color-white);\n\n      &::after {\n        content: '';\n        position: absolute;\n        top: ", ";\n        left: calc(100% - 12px);\n        width: 0;\n        height: ", ";\n        border-radius: 0 ", " ", " 0;\n        background-color: var(--color-white);\n        z-index: -2;\n        transition: 0.6s width ", ";\n      }\n    }\n  }\n"]);
                return ProductDescription_templateObject = function () {
                    return n
                }, n
            }

            function ProductDescription_templateObject1() {
                var n = (0, a._)(["\n      z-index: 2;\n    "]);
                return ProductDescription_templateObject1 = function () {
                    return n
                }, n
            }

            function ProductDescription_templateObject2() {
                var n = (0, a._)(["\n        z-index: 1;\n      "]);
                return ProductDescription_templateObject2 = function () {
                    return n
                }, n
            }

            function ProductDescription_templateObject3() {
                var n = (0, a._)(["\n        ", " {\n          .content {\n            &::after {\n              width: ", ";\n            }\n          }\n        }\n      "]);
                return ProductDescription_templateObject3 = function () {
                    return n
                }, n
            }

            function ProductDescription_templateObject4() {
                var n = (0, a._)(["\n  position: relative;\n\n  height: max-content;\n  display: flex;\n  flex-direction: column-reverse;\n  margin-top: ", ";\n\n  z-index: 3;\n\n  ", "\n\n  ", " {\n    margin-top: 0;\n    z-index: 1;\n\n    ", "\n  }\n\n  ", " {\n    position: sticky;\n    top: 0;\n\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    grid-area: description;\n    width: 100%;\n    height: 100vh;\n    max-width: ", ";\n\n    ", "\n  }\n"]);
                return ProductDescription_templateObject4 = function () {
                    return n
                }, n
            }

            function ProductDescription_templateObject5() {
                var n = (0, a._)(["\n  display: none;\n  flex-wrap: wrap;\n\n  ", " {\n    display: flex;\n    align-items: flex-end;\n    margin-bottom: ", ";\n  }\n"]);
                return ProductDescription_templateObject5 = function () {
                    return n
                }, n
            }

            function _templateObject6() {
                var n = (0, a._)(["\n  max-width: 50%;\n"]);
                return _templateObject6 = function () {
                    return n
                }, n
            }

            function _templateObject7() {
                var n = (0, a._)(["\n  position: relative;\n  width: 100%;\n"]);
                return _templateObject7 = function () {
                    return n
                }, n
            }

            function _templateObject8() {
                var n = (0, a._)(["\n  position: absolute;\n  right: 0;\n  bottom: ", ";\n"]);
                return _templateObject8 = function () {
                    return n
                }, n
            }

            function _templateObject9() {
                var n = (0, a._)(["\n  margin-bottom: ", ";\n\n  ", " {\n    display: none;\n  }\n"]);
                return _templateObject9 = function () {
                    return n
                }, n
            }

            function _templateObject10() {
                var n = (0, a._)(["\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-bottom: ", ";\n"]);
                return _templateObject10 = function () {
                    return n
                }, n
            }

            function _templateObject11() {
                var n = (0, a._)(["\n      pointer-events: none;\n    "]);
                return _templateObject11 = function () {
                    return n
                }, n
            }

            function _templateObject12() {
                var n = (0, a._)(["\n  max-width: 80%;\n  text-align: left;\n\n  ", "\n\n  ", " {\n    max-width: 90%;\n  }\n"]);
                return _templateObject12 = function () {
                    return n
                }, n
            }

            function _templateObject13() {
                var n = (0, a._)(["\n  display: flex;\n  grid-gap: 0 ", ";\n  margin-left: ", ";\n\n  ", " {\n    margin-left: ", ";\n  }\n\n  ", " {\n    margin-left: ", ";\n  }\n"]);
                return _templateObject13 = function () {
                    return n
                }, n
            }

            function _templateObject14() {
                var n = (0, a._)(["\n        background-color: var(--color-lightGrey);\n        color: var(--color-black);\n      "]);
                return _templateObject14 = function () {
                    return n
                }, n
            }

            function _templateObject15() {
                var n = (0, a._)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: ", ";\n  width: 100%;\n\n  ", " {\n    ", ";\n\n    ", "\n  }\n"]);
                return _templateObject15 = function () {
                    return n
                }, n
            }

            function _templateObject16() {
                var n = (0, a._)(["\n  display: block;\n  margin-top: ", ";\n"]);
                return _templateObject16 = function () {
                    return n
                }, n
            }

            function _templateObject17() {
                var n = (0, a._)(["\n  margin: ", " auto 0;\n  display: block;\n"]);
                return _templateObject17 = function () {
                    return n
                }, n
            }

            function _templateObject18() {
                var n = (0, a._)(["\n  right: -", "vw;\n  z-index: -2;\n\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"]);
                return _templateObject18 = function () {
                    return n
                }, n
            }

            function _templateObject19() {
                var n = (0, a._)(["\n  top: 20%;\n  ", ";\n"]);
                return _templateObject19 = function () {
                    return n
                }, n
            }

            function _templateObject20() {
                var n = (0, a._)(["\n  top: 10%;\n  ", ";\n"]);
                return _templateObject20 = function () {
                    return n
                }, n
            }
            var Y = [{
                    list: function (n) {
                        return n.accordions
                    },
                    id: "accordion"
                }, {
                    list: function (n) {
                        return n.globalAccordions
                    },
                    id: "accordion-global"
                }],
                J = (0, h.ZP)(z.default).withConfig({
                    componentId: "sc-4e733292-0"
                })(ProductDescription_templateObject(), (0, M.o0)(95), (0, M.EV)(2), T.qk.s, (0, M.BT)(42), (0, M.o0)(16), T.qk.m, (0, M.o0)(10), (0, M.o0)(24), (0, M.o0)(20), (0, M.hl)(3), function (n) {
                    var t = n.topShapeBounds;
                    return "calc(".concat(-t.height, "px + 1px)")
                }, function (n) {
                    var t = n.topShapeBounds,
                        e = n.bottomShapeBounds;
                    return "calc(".concat(t.height, "px + ").concat(e.height, "px + 100% - 2px)")
                }, M.dG, M.dG, M.Lj.easeOutExpo),
                X = (0, h.ZP)(f.m.div).withConfig({
                    componentId: "sc-4e733292-1"
                })(ProductDescription_templateObject4(), (0, M.o0)(-95), function (n) {
                    return n.$isSurfaceOpen && (0, h.iv)(ProductDescription_templateObject1())
                }, T.qk.s, function (n) {
                    return n.$isSurfaceOpen && (0, h.iv)(ProductDescription_templateObject2())
                }, T.qk.m, (0, M.hl)(48), function (n) {
                    return n.$descriptionExtraLayerLinkHovered && (0, h.iv)(ProductDescription_templateObject3(), J, (0, M.o0)(160))
                }),
                nn = h.ZP.div.withConfig({
                    componentId: "sc-4e733292-2"
                })(ProductDescription_templateObject5(), T.qk.m, (0, M.o0)(40)),
                nt = (0, h.ZP)(H.Z).withConfig({
                    componentId: "sc-4e733292-3"
                })(_templateObject6()),
                ne = h.ZP.div.withConfig({
                    componentId: "sc-4e733292-4"
                })(_templateObject7()),
                ni = (0, h.ZP)(I.Z).withConfig({
                    componentId: "sc-4e733292-5"
                })(_templateObject8(), (0, M.o0)(3)),
                no = (0, h.ZP)(S.Z).withConfig({
                    componentId: "sc-4e733292-6"
                })(_templateObject9(), (0, M.o0)(36), T.qk.m),
                nr = h.ZP.div.withConfig({
                    componentId: "sc-4e733292-7"
                })(_templateObject10(), (0, M.o0)(20)),
                nc = (0, h.ZP)(H.Z).withConfig({
                    componentId: "sc-4e733292-8"
                })(_templateObject12(), function (n) {
                    return n.$isDisabled && (0, h.iv)(_templateObject11())
                }, T.qk.s),
                na = h.ZP.div.withConfig({
                    componentId: "sc-4e733292-9"
                })(_templateObject13(), (0, M.hl)(5), (0, M.EV)(2), T.qk.s, (0, M.BT)(2), T.qk.m, (0, M.o0)(10)),
                nl = (0, h.ZP)(H.Z).withConfig({
                    componentId: "sc-4e733292-10"
                })(_templateObject15(), (0, M.o0)(8), T.qk.m, (0, q.V$)({
                    cornerColor: "--color-black",
                    hoverColor: "--color-lightGrey"
                }), function (n) {
                    return n.isDescriptionHovered && (0, h.iv)(_templateObject14())
                }),
                ns = h.ZP.span.withConfig({
                    componentId: "sc-4e733292-11"
                })(_templateObject16(), (0, M.o0)(20)),
                nu = (0, h.ZP)(G.Z).withConfig({
                    componentId: "sc-4e733292-12"
                })(_templateObject17(), (0, M.o0)(30)),
                nd = (0, h.iv)(_templateObject18(), function (n) {
                    return n.connectorWidth
                }, T.qk.m),
                np = [{
                    comp: (0, h.ZP)(W.Z).withConfig({
                        componentId: "sc-4e733292-13"
                    })(_templateObject19(), nd),
                    connectorWidth: 18,
                    path: "M0 1h143.23a10 10 0 0 1 6.47 2.37l71.05 60.26a10 10 0 0 0 6.47 2.37h103.44",
                    viewBox: "0 0 330.66 67",
                    cx: "-97.92",
                    cy: "540.76",
                    r: "1",
                    gradientTransform: "matrix(341 58.67 17.35 -100.81 24009.88 60259.98)",
                    id: "connectorSurfaceOpen",
                    isVisible: function (n) {
                        return n.isSurfaceOpen
                    }
                }, {
                    comp: (0, h.ZP)(W.Z).withConfig({
                        componentId: "sc-4e733292-14"
                    })(_templateObject20(), nd),
                    connectorWidth: 15,
                    path: "M0 1h123.416a10 10 0 0 1 8.59 4.88l61.537 103.24a10.001 10.001 0 0 0 8.59 4.88H232",
                    viewBox: "0 0 232 115",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientTransform: "rotate(18.798 -3.02 .5) scale(316.55 170.817)",
                    id: "connectorDescription",
                    isVisible: function (n) {
                        return !n.isSurfaceOpen
                    }
                }],
                ItalicSupportedDescription = function (n) {
                    return n.text.split(/(_[^_]+_)/).map(function (n, t) {
                        if (n.startsWith("_") && n.endsWith("_")) {
                            var e = n.slice(1, -1);
                            return (0, l.jsx)(H.Z, {
                                font: "p1b",
                                tag: "span",
                                children: e
                            }, t)
                        }
                        return n
                    })
                },
                ProductDescription = function (n) {
                    var t = n.product,
                        e = n.sizeGuide,
                        a = n.gallery,
                        m = n.getActiveModel,
                        b = n.activeModel,
                        h = n.preview,
                        I = n.productID,
                        S = n.preOrderMessage,
                        E = n.isMadeToOrder,
                        A = n.isPreOrder,
                        L = t || {},
                        M = L.name,
                        q = L.mainDescription,
                        R = L.mainDescriptionCredits,
                        B = L.accordions,
                        V = L.environment,
                        N = a.modelSwitch,
                        F = N.every(function (n) {
                            return 0 !== Object.keys(n.asset).length
                        }),
                        G = null == V ? void 0 : V.map(function (n) {
                            return {
                                asset: n.icon
                            }
                        }),
                        z = (0, c._)((0, s.useContext)(g.gh), 2),
                        W = z[0],
                        Q = z[1],
                        nd = (0, c._)((0, d.Z)(), 2),
                        nf = nd[0],
                        nm = nd[1],
                        nb = (0, c._)((0, d.Z)(), 2),
                        nh = nb[0],
                        ng = nb[1],
                        nv = (0, c._)((0, d.Z)(), 2),
                        n_ = nv[0],
                        nj = nv[1],
                        nx = (0, c._)((0, P.Z)(), 2),
                        nO = nx[0],
                        nw = nx[1],
                        ny = nO.type,
                        nP = nO.descriptionExtraLayerLinkHovered,
                        nk = (0, Z.Z)("pdp"),
                        nC = (0, w.Z)(),
                        nZ = (0, c._)((0, C.Z)(), 1)[0],
                        nD = (0, y.Z)(I, {
                            commerce: !0,
                            shouldFetch: !0
                        }).commerce,
                        nI = (0, k.Z)({
                            commerceId: I,
                            selectedOptions: nZ
                        }),
                        nS = nI.variant,
                        nE = nI.isLoading,
                        nA = (null == nD ? void 0 : nD.isSoldOut) || !1,
                        nL = nC(null == nS ? void 0 : nS.price, null == nD ? void 0 : nD.currencyCode),
                        nM = (0, O.Z)("global/blocks").pdp_packaging_shipping_returns_accordions,
                        nT = (0, p.Z)(T.t2.m),
                        nq = (0, x.Z)().state.isVisible,
                        nR = (0, c._)((0, s.useContext)(g.V_), 2)[1],
                        nB = (0, c._)((0, s.useState)(!1), 2),
                        nV = nB[0],
                        nN = nB[1],
                        nF = (0, c._)((0, s.useState)(!1), 2),
                        nG = nF[0],
                        nz = nF[1],
                        n$ = null == nM ? void 0 : nM.map(function (n) {
                            return {
                                title: n.title,
                                content: n.description,
                                _editable: n._editable
                            }
                        }),
                        nH = (0, c._)((0, s.useContext)(g.gh), 1)[0],
                        nW = nH.activeIndex,
                        nQ = nH.isVisible,
                        nU = "" !== ny,
                        nK = (0, j.o)(q),
                        nY = (0, _.S)(nK, 175, " ", !1),
                        nJ = (0, _.S)(nK, 175, " ", !0),
                        nX = nJ.length < 50,
                        n0 = (0, s.useCallback)(function () {
                            nN(!1), nw((0, o._)((0, i._)({}, nO), {
                                type: "",
                                accordion: "",
                                descriptionExtraLayerLinkHovered: !1,
                                descriptionExtraLayerLinkHoveredIndex: -1
                            }))
                        }, [nO, nw]),
                        n1 = (0, s.useCallback)(function (n) {
                            Q((0, o._)((0, i._)({}, W), {
                                activeIndex: n
                            }))
                        }, [W, Q]),
                        n2 = (0, s.useCallback)(function () {
                            nN(!nV), nw((0, o._)((0, i._)({}, nO), {
                                type: "readMore"
                            }))
                        }, [nV, nO, nw]),
                        n3 = null !== ny && !nT,
                        n4 = "" === ny && nT,
                        n5 = !nX && q.length > 230 && (n4 || n3),
                        n7 = (0, s.useMemo)(function () {
                            return nq
                        }, [nT, nq]);
                    return (0, s.useEffect)(function () {
                        var n = B.find(function (n) {
                                return n.isSizeGuideAccordion
                            }),
                            t = B.findIndex(function (n) {
                                return n.isSizeGuideAccordion
                            });
                        n && nR({
                            id: "accordion-".concat(t)
                        })
                    }, [B, nR]), (0, l.jsxs)(X, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: n7 ? 0 : 1
                        },
                        transition: {
                            duration: 0
                        },
                        $isSurfaceOpen: nU,
                        $descriptionExtraLayerLinkHovered: nP,
                        children: [(0, l.jsx)(u.Y, {
                            enabled: nU && nT && !h,
                            onClickOutside: n0,
                            onEscapeKey: n0,
                            children: (0, l.jsxs)(J, {
                                left: "0",
                                bottom: "1",
                                contentClassName: "content",
                                ref: n_,
                                borderRadius: "0",
                                topShapeRef: nf,
                                bottomShapeRef: nh,
                                topShapeBounds: nm,
                                bottomShapeBounds: ng,
                                children: [np.map(function (n) {
                                    var t = n.comp,
                                        e = n.isVisible,
                                        o = (0, r._)(n, ["comp", "isVisible"]);
                                    return e({
                                        isSurfaceOpen: nU
                                    }) && (0, l.jsx)(t, (0, i._)({}, o), o.id)
                                }), "" === ny && (0, l.jsx)(nn, {
                                    children: (0, l.jsxs)(ne, {
                                        children: [(0, l.jsx)(nt, {
                                            font: "b3",
                                            tag: "h1",
                                            children: M
                                        }), (0, l.jsx)(H.Z, {
                                            font: "b3",
                                            tag: "h1",
                                            children: nE ? (0, l.jsx)("span", {
                                                dangerouslySetInnerHTML: {
                                                    __html: "&nbsp;"
                                                }
                                            }) : nL
                                        }), !!(null == t ? void 0 : t.label) && (0, l.jsx)(ni, {
                                            label: null == t ? void 0 : t.label,
                                            theme: "dark"
                                        }), nA && (0, l.jsx)(ni, {
                                            label: nk(v.Zu),
                                            theme: "dark"
                                        })]
                                    })
                                }), A && S && (0, l.jsx)(no, {
                                    message: S
                                }), E && (0, l.jsx)(no, {
                                    message: nk("madeToOrderMessage")
                                }), ("accordion" !== ny && nT || !nT && null !== ny) && (0, l.jsxs)(nr, {
                                    children: [(0, l.jsxs)(nl, {
                                        font: "b3",
                                        tag: q.length > 230 ? "button" : "h2",
                                        isDescriptionHovered: nG,
                                        onClick: function () {
                                            return nV && nT ? n0() : n2()
                                        },
                                        children: [nk("description"), (0, l.jsxs)("span", {
                                            children: ["[", nV && nT ? "-" : "+", "]"]
                                        })]
                                    }), (0, l.jsxs)(nc, {
                                        font: "p3",
                                        tag: "button",
                                        onMouseEnter: function () {
                                            return nz(!0)
                                        },
                                        onMouseLeave: function () {
                                            return nz(!1)
                                        },
                                        onClick: function () {
                                            return n2()
                                        },
                                        tabIndex: -1,
                                        $isDisabled: !n5 || nV,
                                        children: [nX ? (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)(ItalicSupportedDescription, {
                                                text: q
                                            }), nV && nT && (0, l.jsx)(ns, {
                                                children: R
                                            })]
                                        }) : q.length > 230 && !nV ? (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)(ItalicSupportedDescription, {
                                                text: nY.trimEnd()
                                            }), "..."]
                                        }) : (0, l.jsx)(l.Fragment, {
                                            children: (0, l.jsx)(ItalicSupportedDescription, {
                                                text: nY
                                            })
                                        }), nV && !nX && nT && (0, l.jsxs)(f.m.span, {
                                            variants: U,
                                            initial: "closed",
                                            animate: nV ? "open" : "closed",
                                            transition: K,
                                            children: [(0, l.jsx)($.Z, {
                                                text: nJ,
                                                font: "p3",
                                                tag: "span",
                                                supportItalics: !0
                                            }), (0, l.jsx)(ns, {
                                                children: R
                                            })]
                                        })]
                                    })]
                                }), ("readMore" !== ny && nT || n3) && (0, l.jsx)(l.Fragment, {
                                    children: Y.map(function (n) {
                                        var t, r = n.list,
                                            c = n.id;
                                        return null == r ? void 0 : null === (t = r({
                                            accordions: B,
                                            globalAccordions: n$
                                        })) || void 0 === t ? void 0 : t.map(function (n, t) {
                                            return (0, l.jsx)(D.Z, (0, o._)((0, i._)({
                                                id: "".concat(c, "-").concat(t),
                                                onClick: function () {
                                                    nN(!nV), nw((0, o._)((0, i._)({}, nO), {
                                                        type: "accordion",
                                                        accordion: "".concat(c, "-").concat(t)
                                                    }))
                                                }
                                            }, n), {
                                                contentBounds: nj,
                                                sizeGuide: e
                                            }), "".concat(c, "-").concat(t))
                                        })
                                    })
                                }), "" !== ny && nT && (0, l.jsx)(nu, {
                                    label: nk("close"),
                                    onClick: function () {
                                        n0()
                                    },
                                    brackets: !0,
                                    centered: !0,
                                    hoverTheme: "light"
                                })]
                            })
                        }), (0, l.jsxs)(na, {
                            children: [(n4 || n3) && F && (0, l.jsx)(Switcher, {
                                list: N,
                                onClick: m,
                                activeModel: b
                            }), nQ && (0, l.jsx)(Switcher, {
                                list: G,
                                onClickEnvironment: n1,
                                fit: "contain",
                                isEnvironment: !0,
                                activeEnvironmentIndex: nW
                            })]
                        })]
                    })
                };
            ProductDescription.defaultProps = {
                getActiveModel: function () {},
                preview: !1
            }, ProductDescription.propTypes = {
                product: b().object.isRequired,
                sizeGuide: b().object,
                gallery: b().object.isRequired,
                getActiveModel: b().func.isRequired,
                activeModel: b().oneOf(["male", "female"]),
                preview: b().bool,
                productID: b().string.isRequired
            };
            var nf = ProductDescription
        },
        93770: function (n, t, e) {
            var i = e(24043),
                o = e(82729),
                r = e(85893),
                c = e(67294),
                a = e(73460),
                l = e(31632),
                s = e(12560),
                u = e(4960),
                d = e(12064),
                p = e(14141),
                f = e(41897),
                m = e(79277),
                b = e(82924),
                h = e(46716),
                g = e(55982),
                v = e(10640);

            function _templateObject() {
                var n = (0, o._)(["\n  position: relative;\n\n  height: max-content;\n  width: calc(100% + ", ");\n  margin-top: ", ";\n  margin-left: ", ";\n  overflow: hidden;\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: ", ";\n    pointer-events: none;\n    background: linear-gradient(\n      360deg,\n      rgba(255, 255, 255, 1) 0%,\n      rgba(255, 255, 255, 0) 100%\n    );\n  }\n\n  @media ((min-height: 670px)) {\n    &::after {\n      display: none;\n    }\n  }\n\n  ", " {\n    width: calc(100% + ", ");\n    margin-left: ", ";\n\n    &::after {\n      display: none;\n    }\n  }\n\n  ", " {\n    width: calc(100% + ", ");\n    margin-left: ", ";\n\n    &::after {\n      display: block;\n    }\n\n    @media ((min-height: 629px) and (min-width: 1080px)) {\n      &::after {\n        display: none;\n      }\n    }\n  }\n"]);
                return _templateObject = function () {
                    return n
                }, n
            }

            function _templateObject1() {
                var n = (0, o._)(["\n      padding-right: 0;\n      width: calc(100% - ", ");\n    "]);
                return _templateObject1 = function () {
                    return n
                }, n
            }

            function _templateObject2() {
                var n = (0, o._)(["\n        padding-right: 0;\n        width: calc(100% - ", ");\n      "]);
                return _templateObject2 = function () {
                    return n
                }, n
            }

            function _templateObject3() {
                var n = (0, o._)(["\n        padding-right: 0;\n        width: calc(100% - ", ");\n      "]);
                return _templateObject3 = function () {
                    return n
                }, n
            }

            function _templateObject4() {
                var n = (0, o._)(["\n  display: inline-block;\n  margin-top: ", ";\n  padding: 0 ", " ", ";\n  transform: translateZ(0);\n\n  max-height: 20dvh;\n  overflow-y: auto;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  @media (min-height: 670px) {\n    padding-bottom: 0;\n  }\n\n  ", "\n\n  ", " {\n    padding: 0 ", " ", ";\n\n    ", "\n  }\n\n  ", " {\n    max-height: 16vh;\n    padding: 0 ", " ", ";\n    margin-top: ", ";\n\n    @media ((min-height: 629px) and (min-width: 1080px)) {\n      max-height: unset;\n      padding-bottom: 0;\n    }\n\n    ", "\n  }\n"]);
                return _templateObject4 = function () {
                    return n
                }, n
            }

            function _templateObject5() {
                var n = (0, o._)(["\n  position: relative;\n  display: grid;\n  grid-template-columns: ", " auto;\n\n  &::after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    top: 0;\n    left: 0;\n    background-color: var(--color-lightGrey);\n  }\n\n  &:first-of-type {\n    position: sticky;\n    top: 0;\n    background: var(--color-white);\n    z-index: 1;\n  }\n\n  &:last-of-type {\n    border-bottom: 1px solid var(--color-lightGrey);\n  }\n\n  ", " {\n    grid-template-columns: ", " auto;\n  }\n\n  ", " {\n    grid-template-columns: ", " auto;\n  }\n"]);
                return _templateObject5 = function () {
                    return n
                }, n
            }

            function _templateObject6() {
                var n = (0, o._)(["\n  display: flex;\n  align-items: center;\n  padding-top: ", ";\n"]);
                return _templateObject6 = function () {
                    return n
                }, n
            }

            function _templateObject7() {
                var n = (0, o._)(["\n  position: relative;\n  padding: ", " 0 ", ";\n  max-height: ", ";\n\n  &:nth-child(odd) {\n    background-color: rgba(212, 207, 196, 0.3);\n  }\n"]);
                return _templateObject7 = function () {
                    return n
                }, n
            }

            function _templateObject8() {
                var n = (0, o._)(["\n  display: grid;\n  grid-template-columns: repeat(\n    ", ",\n    ", "\n  );\n  text-align: center;\n\n  ", " {\n    grid-template-columns: repeat(\n      ", ",\n      ", "\n    );\n  }\n\n  ", " {\n    grid-template-columns: repeat(\n      ", ",\n      ", "\n    );\n  }\n"]);
                return _templateObject8 = function () {
                    return n
                }, n
            }

            function _templateObject9() {
                var n = (0, o._)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0 ", ";\n\n  ", " {\n    padding: 0 ", ";\n  }\n\n  ", " {\n    padding: 0 ", ";\n  }\n"]);
                return _templateObject9 = function () {
                    return n
                }, n
            }

            function _templateObject10() {
                var n = (0, o._)(["\n  width: max-content;\n"]);
                return _templateObject10 = function () {
                    return n
                }, n
            }

            function _templateObject11() {
                var n = (0, o._)([""]);
                return _templateObject11 = function () {
                    return n
                }, n
            }

            function _templateObject12() {
                var n = (0, o._)(["\n      ", " {\n        text-decoration: underline;\n      }\n    "]);
                return _templateObject12 = function () {
                    return n
                }, n
            }

            function _templateObject13() {
                var n = (0, o._)(["\n  ", "\n\n  ", "\n"]);
                return _templateObject13 = function () {
                    return n
                }, n
            }

            function _templateObject14() {
                var n = (0, o._)(["\n  display: flex;\n  gap: 0 ", ";\n  width: max-content;\n"]);
                return _templateObject14 = function () {
                    return n
                }, n
            }

            function _templateObject15() {
                var n = (0, o._)(["\n  position: relative;\n\n  &::after {\n    content: '';\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    top: ", ";\n    left: ", ";\n  }\n"]);
                return _templateObject15 = function () {
                    return n
                }, n
            }

            function _templateObject16() {
                var n = (0, o._)(["\n  width: ", ";\n  max-width: ", ";\n  cursor: not-allowed;\n\n  ", "\n"]);
                return _templateObject16 = function () {
                    return n
                }, n
            }

            function _templateObject17() {
                var n = (0, o._)(["\n  margin: 0 1ch;\n"]);
                return _templateObject17 = function () {
                    return n
                }, n
            }
            var _ = ["cm", "inches"],
                j = p.ZP.div.withConfig({
                    componentId: "sc-c159bb55-0"
                })(_templateObject(), (0, h.EV)(4), (0, h.o0)(32), (0, h.EV)(-2), (0, h.o0)(20), g.qk.s, (0, h.BT)(4), (0, h.BT)(-2), g.qk.m, (0, h.hl)(6), (0, h.hl)(-3)),
                x = (0, p.ZP)(s.m.div).withConfig({
                    componentId: "sc-c159bb55-1"
                })(_templateObject4(), (0, h.o0)(13), (0, h.EV)(2), (0, h.o0)(25), function (n) {
                    return !n.$isOverflowing && (0, p.iv)(_templateObject1(), (0, h.EV)(2))
                }, g.qk.s, (0, h.BT)(2), (0, h.o0)(25), function (n) {
                    return !n.$isOverflowing && (0, p.iv)(_templateObject2(), (0, h.BT)(2))
                }, g.qk.m, (0, h.hl)(3), (0, h.o0)(5), (0, h.o0)(16), function (n) {
                    return !n.$isOverflowing && (0, p.iv)(_templateObject3(), (0, h.hl)(2))
                }),
                O = p.ZP.div.withConfig({
                    componentId: "sc-c159bb55-2"
                })(_templateObject5(), (0, h.EV)(15), g.qk.s, (0, h.BT)(17), g.qk.m, (0, h.hl)(17)),
                w = (0, p.ZP)(b.Z).withConfig({
                    componentId: "sc-c159bb55-3"
                })(_templateObject6(), (0, h.o0)(6)),
                y = (0, p.ZP)(b.Z).withConfig({
                    componentId: "sc-c159bb55-4"
                })(_templateObject7(), (0, h.o0)(10), (0, h.o0)(4), (0, h.o0)(34)),
                P = p.ZP.ul.withConfig({
                    componentId: "sc-c159bb55-5"
                })(_templateObject8(), function (n) {
                    return n.$sizeLabelsLength
                }, function (n) {
                    return n.$isOverflowing ? "".concat((0, h.EV)(7)) : "1fr"
                }, g.qk.s, function (n) {
                    return n.$sizeLabelsLength
                }, function (n) {
                    return n.$isOverflowing ? "".concat((0, h.BT)(7)) : "1fr"
                }, g.qk.m, function (n) {
                    return n.$sizeLabelsLength
                }, function (n) {
                    return n.$isOverflowing ? "".concat((0, h.hl)(7)) : "1fr"
                }),
                k = p.ZP.div.withConfig({
                    componentId: "sc-c159bb55-6"
                })(_templateObject9(), (0, h.EV)(2), g.qk.s, (0, h.BT)(3), g.qk.m, (0, h.hl)(3)),
                C = p.ZP.div.withConfig({
                    componentId: "sc-c159bb55-7"
                })(_templateObject10()),
                Z = (0, p.ZP)(b.Z).withConfig({
                    componentId: "sc-c159bb55-8"
                })(_templateObject11()),
                D = p.ZP.button.withConfig({
                    componentId: "sc-c159bb55-9"
                })(_templateObject13(), (0, v.V$)({
                    cornerColor: "--color-black",
                    hoverColor: "--color-lightGrey"
                }), function (n) {
                    return n.$isActive && (0, p.iv)(_templateObject12(), Z)
                }),
                I = p.ZP.div.withConfig({
                    componentId: "sc-c159bb55-10"
                })(_templateObject14(), (0, h.o0)(45)),
                S = p.ZP.button.withConfig({
                    componentId: "sc-c159bb55-11"
                })(_templateObject15(), (0, h.o0)(32), (0, h.o0)(32), (0, h.o0)(-8), (0, h.o0)(-8)),
                E = (0, p.ZP)(m.Z).withConfig({
                    componentId: "sc-c159bb55-12"
                })(_templateObject16(), (0, h.o0)(5), (0, h.o0)(5), function (n) {
                    return n.$isActive && "fill: var(--color-lightGrey)"
                }),
                A = (0, p.ZP)(b.Z).withConfig({
                    componentId: "sc-c159bb55-13"
                })(_templateObject17()),
                RowRender = function (n) {
                    var t = n.label,
                        e = n.values,
                        i = n.sizeLabelsLength,
                        o = n.isOverflowing;
                    return (0, r.jsxs)(O, {
                        children: [(0, r.jsx)(w, {
                            tag: "span",
                            font: "p3",
                            children: t
                        }), (0, r.jsx)(P, {
                            $sizeLabelsLength: i,
                            $isOverflowing: o,
                            children: e.map(function (n) {
                                var t = n._uid,
                                    e = n.value;
                                return (0, r.jsx)(y, {
                                    tag: "li",
                                    font: "p3",
                                    children: e
                                }, t)
                            })
                        })]
                    })
                };
            t.Z = function (n) {
                var t = n.sizeGuide,
                    e = (0, f.Z)("pdp"),
                    o = (0, i._)((0, a.Z)(), 2),
                    s = o[0],
                    p = o[1],
                    m = (0, i._)((0, a.Z)(), 2),
                    b = m[0],
                    h = m[1],
                    g = (0, u.c)(0),
                    v = (0, i._)((0, c.useState)("cm"), 2),
                    O = v[0],
                    w = v[1],
                    y = (0, i._)((0, c.useState)(!1), 2),
                    P = y[0],
                    L = y[1],
                    M = t || {},
                    T = M.rowsCentimeters,
                    q = M.rowsInches,
                    R = "cm" === O ? T : q,
                    B = h.width - p.width,
                    V = [{
                        type: "arrowLeft",
                        ariaLabel: e("scrollLeft"),
                        isActive: !P,
                        onClick: function () {
                            return L(!1)
                        }
                    }, {
                        type: "arrowRight",
                        ariaLabel: e("scrollRight"),
                        isActive: P,
                        onClick: function () {
                            return L(!0)
                        }
                    }],
                    N = (0, c.useMemo)(function () {
                        return ((0, i._)(T || [], 1)[0] || {}).values.map(function (n, t) {
                            return {
                                _uid: t,
                                value: n.size
                            }
                        })
                    }, [T]);
                (0, c.useEffect)(function () {
                    (0, d.j)(g, P ? -B : 0, {
                        duration: .6,
                        ease: l.M4
                    })
                }, [P, B, g]);
                var F = (null == N ? void 0 : N.length) > 3;
                return (0, r.jsxs)(j, {
                    ref: s,
                    children: [(0, r.jsxs)(k, {
                        children: [(0, r.jsx)(C, {
                            children: _.map(function (n, t) {
                                var e = n === O;
                                return (0, r.jsxs)(c.Fragment, {
                                    children: [(0, r.jsx)(D, {
                                        $isActive: e,
                                        onClick: function () {
                                            return w(n)
                                        },
                                        children: (0, r.jsx)(Z, {
                                            font: "b3",
                                            tag: "span",
                                            children: n
                                        })
                                    }), t !== _.length - 1 && (0, r.jsx)(A, {
                                        tag: "span",
                                        font: "b3",
                                        children: "/"
                                    })]
                                }, n)
                            })
                        }), F && (0, r.jsx)(I, {
                            children: V.map(function (n) {
                                var t = n.type,
                                    e = n.ariaLabel,
                                    i = n.isActive,
                                    o = n.onClick;
                                return (0, r.jsx)(S, {
                                    "aria-label": e,
                                    onClick: o,
                                    disabled: i,
                                    children: (0, r.jsx)(E, {
                                        type: t,
                                        $isActive: i
                                    })
                                }, t)
                            })
                        })]
                    }), (0, r.jsxs)(x, {
                        ref: b,
                        style: {
                            x: g
                        },
                        $isOverflowing: F,
                        children: [(0, r.jsx)(RowRender, {
                            label: "ARK/8 size",
                            values: N,
                            sizeLabelsLength: N.length,
                            isOverflowing: F
                        }), null == R ? void 0 : R.map(function (n) {
                            var t = n.label,
                                e = n.values,
                                i = n._uid;
                            return (0, r.jsx)(RowRender, {
                                label: t,
                                values: e,
                                sizeLabelsLength: N.length,
                                isOverflowing: F
                            }, i)
                        })]
                    })]
                })
            }
        },
        13493: function (n, t, e) {
            e.d(t, {
                Zu: function () {
                    return r
                },
                qk: function () {
                    return i
                },
                w: function () {
                    return o
                }
            });
            var i = "pre-order",
                o = "made-to-order",
                r = "archived"
        },
        50708: function (n, t, e) {
            e.d(t, {
                S: function () {
                    return shortenString
                }
            });
            var shortenString = function (n, t) {
                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : " ",
                    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return i ? n.slice(n.lastIndexOf(e, t), n.length) : n.length <= t ? n : n.slice(0, n.lastIndexOf(e, t))
            }
        },
        80704: function (n, t, e) {
            e.d(t, {
                o: function () {
                    return stripParagraphHtml
                }
            });
            var stripParagraphHtml = function (n) {
                return "string" != typeof n || "" === n ? "" : n.replace(/(<([/p]+)>)/gi, "")
            }
        },
        61039: function (n, t, e) {
            var i = e(67294),
                o = e(59229);
            t.Z = function () {
                var n = (0, i.useContext)(o.vU);
                if (!n) throw Error("useAddToCartAndWishlistNotification must be used within AddToCartAndWishlistNotificationProvider");
                return {
                    state: n.state,
                    show: n.show,
                    hide: n.hide
                }
            }
        },
        60711: function (n, t, e) {
            e.d(t, {
                Q: function () {
                    return useChildrenTabIndex
                }
            });
            var i = e(24043),
                o = e(67294),
                useChildrenTabIndex = function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = (0, o.useRef)(null),
                        e = (0, i._)((0, o.useState)(n), 2),
                        r = e[0],
                        c = e[1];
                    (0, o.useEffect)(function () {
                        var n = t.current;
                        n && n.querySelectorAll("a,button").forEach(function (n) {
                            r ? n.removeAttribute("tabindex") : n.setAttribute("tabindex", "-1")
                        })
                    }, [r]);
                    var a = [t, c];
                    return a.ref = t, a.setIsTabbable = c, a
                }
        },
        85109: function (n, t, e) {
            var i = e(24043),
                o = e(67294);
            t.Z = function (n) {
                var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    e = (0, i._)((0, o.useState)(!1), 2),
                    r = e[0],
                    c = e[1];
                return (0, o.useEffect)(function () {
                    if (t) {
                        var handleClickOutside = function (t) {
                            n.current && !n.current.contains(t.target) ? c(!0) : c(!1)
                        };
                        return document.addEventListener("mousedown", handleClickOutside),
                            function () {
                                document.removeEventListener("mousedown", handleClickOutside)
                            }
                    }
                }, [n, t]), r
            }
        },
        49636: function (n, t, e) {
            var i = e(67294),
                o = e(59229);
            t.Z = function () {
                return (0, i.useContext)(o.bU)
            }
        },
        73380: function (n, t, e) {
            var i = e(72253),
                o = e(14932),
                r = e(67294),
                c = e(98458),
                a = e(80248),
                l = e(33539);
            t.Z = function () {
                var n, t, e, s, u, d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    p = d.commerceId,
                    f = d.selectedOptions,
                    m = void 0 === f ? [] : f,
                    b = d.shouldFetch;
                p || c.yG;
                var h = (0, l.Z)(p, {
                        commerce: !0,
                        shouldFetch: (void 0 === b || b) && !!p,
                        variant: l.c.full
                    }),
                    g = h.commerce,
                    v = h.isLoading,
                    _ = null == g ? void 0 : null === (n = g.variants) || void 0 === n ? void 0 : n[0],
                    j = null == _ ? void 0 : null === (t = _.selectedOptions) || void 0 === t ? void 0 : t.map(function (n) {
                        var t, e = n.name,
                            i = n.value;
                        return {
                            name: e.toLowerCase(),
                            value: null == i ? void 0 : null === (t = i.toUpperCase) || void 0 === t ? void 0 : t.call(i)
                        }
                    }),
                    x = Object.fromEntries((null == j ? void 0 : j.map(function (n) {
                        var t, e, i, o = n.name,
                            r = n.value,
                            c = o.charAt(0).toUpperCase() + o.slice(1);
                        return [c, (null === (i = m.find(function (n) {
                            return n.name === c
                        })) || void 0 === i ? void 0 : null === (e = i.value) || void 0 === e ? void 0 : null === (t = e.toUpperCase) || void 0 === t ? void 0 : t.call(e)) || r]
                    })) || []),
                    O = (null == g ? void 0 : null === (e = g.variants) || void 0 === e ? void 0 : e.find(function (n) {
                        return n.selectedOptions.every(function (n) {
                            return x[n.name] === n.value
                        })
                    })) || _,
                    w = (0, a.Z)().cart,
                    y = null == w ? void 0 : null === (s = w.lines) || void 0 === s ? void 0 : s.find(function (n) {
                        var t;
                        return (null === (t = n.merchandise) || void 0 === t ? void 0 : t.id) === (null == O ? void 0 : O.id)
                    }),
                    P = (null == y ? void 0 : y.quantity) >= (null == O ? void 0 : O.quantityAvailable),
                    k = (null == O ? void 0 : O.price) || 0,
                    C = null !== (u = m.length > 0 ? k : null == g ? void 0 : g.price) && void 0 !== u ? u : null == g ? void 0 : g.price;
                return {
                    variant: (0, r.useMemo)(function () {
                        return O ? (0, o._)((0, i._)({}, O), {
                            price: C,
                            isSoldOut: (null == O ? void 0 : O.isSoldOut) || P
                        }) : void 0
                    }, [O, P, C]),
                    isLoading: v
                }
            }
        },
        16744: function (n, t, e) {
            e.d(t, {
                S: function () {
                    return useContainerSpread
                },
                e: function () {
                    return getSectionsRenderer
                }
            });
            var i = e(72253),
                o = e(14932),
                r = e(47702),
                c = e(85893),
                a = e(97650),
                l = e(11163),
                useContainerSpread = function (n) {
                    var t = (0, l.useRouter)().isPreview;
                    if (!(void 0 !== t && t) || !n || "string" != typeof n) return {};
                    var e = JSON.parse(n.replace(/^<!--#storyblok#/, "").replace(/-->$/, ""));
                    return {
                        "data-blok-c": JSON.stringify(e),
                        "data-blok-uid": e.id + "-" + e.uid
                    }
                },
                InViewTracker = function (n) {
                    var t = n.disabled,
                        e = n.onChange,
                        i = n.children;
                    return t ? i : (0, c.jsx)(a.df, {
                        threshold: "0.9",
                        onChange: e,
                        children: i
                    })
                },
                getSectionsRenderer = function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return function (t) {
                        var e = t.items,
                            a = t.propsPerItem,
                            l = t.onInView,
                            s = (0, r._)(t, ["items", "propsPerItem", "onInView"]);
                        return (void 0 === e ? [] : e).map(function (t) {
                            var e = t.component,
                                u = t._editable,
                                d = t._uid,
                                p = (0, r._)(t, ["component", "_editable", "_uid"]),
                                f = (null == n ? void 0 : n[e]) || null;
                            if (!f) return null;
                            var m = useContainerSpread(u),
                                b = (null == a ? void 0 : a((0, i._)({
                                    component: e,
                                    _uid: d
                                }, p))) || {};
                            return (0, c.jsx)(InViewTracker, {
                                disabled: !l,
                                onChange: function (n) {
                                    return n && (null == l ? void 0 : l(p))
                                },
                                children: (0, c.jsx)(f, (0, o._)((0, i._)({}, p, s, b), {
                                    containerSpread: m
                                }))
                            }, d || p.slug)
                        })
                    }
                }
        }
    }
]);