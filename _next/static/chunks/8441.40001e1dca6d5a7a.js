"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8441], {
        8441: function (e, t, n) {
            n.r(t);
            var s = n(82729),
                a = n(85893),
                r = n(45697),
                c = n.n(r),
                o = n(14141),
                i = n(46716);

            function _templateObject() {
                var e = (0, s._)(["\n  path {\n    fill: none;\n    stroke: var(--color-black);\n    transition: stroke-dashoffset 0.6s ", ";\n    stroke-dasharray: ", ";\n    stroke-dashoffset: ", ";\n  }\n"]);
                return _templateObject = function () {
                    return e
                }, e
            }
            var k = o.ZP.svg.withConfig({
                    componentId: "sc-97b25f2-0"
                })(_templateObject(), i.Lj.easeOutExpo, 17.677669525146484, function (e) {
                    return e.isCheck ? 0 : 17.677669525146484
                }),
                CheckMark = function (e) {
                    var t = e.className,
                        n = e.isCheck;
                    return (0, a.jsx)(k, {
                        isCheck: n,
                        className: t,
                        viewBox: "0 0 13.21 9.06",
                        preserveAspectRatio: "none",
                        children: (0, a.jsx)("path", {
                            d: "m.35 3.85 4.5 4.5 8-8"
                        })
                    })
                };
            t.default = CheckMark, CheckMark.propTypes = {
                className: c().string,
                isCheck: c().bool
            }
        }
    }
]);