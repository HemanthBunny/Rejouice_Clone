!function(e) {
    "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    "use strict";
    if (window.__is_server__) {
        const M = {
            mask: "overflow:hidden;",
            center: "display:flex;align-items:center;justify-content:center;",
            circle: "border-radius: 100%;",
            sticky: "position:sticky",
            wrap: "flex-wrap:wrap;",
            relative: "position: relative;",
            rel: "position: relative;",
            fit: "height:100%; width: 100%;",
            grid: "display: grid; grid-template-columns:repeat(var(--grid-cols), minmax(0, 1fr));",
            border: "border: solid 1px currentColor;",
            shadow: "--shadowX:0;--shadowY:0;--shadowBlur:10px;--shadowColor:rgba(0,0,0,0.5); box-shadow: var(--shadowX) var(--shadowY) var(--shadowBlur) var(--shadowColor);",
            transform: `
            --skewX:0; --skewY:0;
            --translateX:0;--translateY:0; 
            --rotateX:0; 
            --rotateY:0; 
            --rotate:0; 
            --scaleX:1; --scaleY:1; 
            will-change:transform; 
            transform: translate(var(--translateX), var(--translateY)) rotateX(var(--rotateX)) rotateY(var(--rotateY)) rotate(var(--rotate)) scale(var(--scaleX), var(--scaleY)) skew(var(--skewX), var(--skewY)) translateZ(0);
        `,
            flex: "display: flex;",
            iflex: "display: inline-flex;",
            block: "display: block;",
            iblock: "display: inline-block;",
            abs: "position:absolute;",
            absolute: "position:absolute;",
            fix: "position:fixed;",
            fixed: "position:fixed;",
            none: "display: none;",
            hidden: "visibility: hidden;",
            fill: "fill:currentColor",
            stroke: "stroke:currentColor",
            bg: "background-color:currentColor",
            c: "color:currentColor",
            before: {
                selector: "::before",
                prop: "content: '';display:inline-block;"
            },
            after: {
                selector: "::after",
                prop: "content: '';display:inline-block;"
            },
            pusht: "top: 100%",
            pushr: "right: 100%",
            pushb: "bottom: 100%",
            pushl: "left: 100%",
            nowrap: "white-space:nowrap",
            italic: "font-style:italic",
            normal: "font-style:normal",
            aa: "-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;",
            "auto-aa": "-webkit-font-smoothing: auto;-moz-osx-font-smoothing: auto;",
            uppercase: "text-transform: uppercase",
            normalcase: "text-transform: none",
            underline: "text-decoration:underline"
        }
          , _s = {
            "underline-offset": "text-underline-offset",
            indent: "text-indent",
            "text-indent": "text-indent",
            "col-gap": "column-gap",
            "col-count": "column-count",
            perspective: "perspective",
            "white-space": "white-space",
            all: "all",
            content: "content",
            dashoffset: "stroke-dashoffset",
            dasharray: "stroke-dasharray",
            blend: "mix-blend-mode",
            backdrop: "backdrop-filter",
            filter: "filter",
            float: "float",
            clear: "clear",
            fs: "font-size",
            fw: "font-weight",
            ff: "font-family",
            lh: "line-height",
            spacing: "letter-spacing",
            letter: "letter-spacing",
            t: "top",
            tl: "top,left",
            tr: "top,right",
            l: "left",
            b: "bottom",
            bl: "bottom,left",
            br: "bottom,right",
            r: "right",
            p: "padding",
            "p-t": "padding-top",
            "p-tl": "padding-top, padding-left",
            "p-lt": "padding-left, padding-top",
            "p-l": "padding-left",
            "p-b": "padding-bottom",
            "p-bl": "padding-bottom, padding-left",
            "p-lb": "padding-left, padding-bottom",
            "p-r": "padding-right",
            "p-tr": "padding-top, padding-right",
            "p-rt": "padding-right, padding-top",
            "p-x": "padding-right, padding-left",
            "p-y": "padding-top, padding-bottom",
            m: "margin",
            "m-t": "margin-top",
            "m-l": "margin-left",
            "m-b": "margin-bottom",
            "m-r": "margin-right",
            "m-x": "margin-left, margin-right",
            "m-y": "margin-top, margin-bottom",
            w: "width",
            h: "height",
            c: "color",
            bg: "background",
            "bg-clip": "background-clip, -webkit-background-clip",
            "bg-size": "background-size",
            "bg-pos": "background-position",
            "bg-img": "background-image",
            "bg-repeat": "background-repeat",
            "bg-color": "background-color",
            fill: "fill",
            stroke: "stroke",
            "min-w": "min-width",
            "min-h": "min-height",
            "max-w": "max-width",
            "max-h": "max-height",
            dir: "flex-direction",
            direction: "flex-direction",
            justify: "justify-content",
            just: "justify-content",
            align: "text-align",
            "align-x": "text-align",
            "align-y": "vertical-align",
            items: "align-items",
            grow: "flex-grow",
            wrap: "flex-wrap",
            shrink: "flex-shrink",
            "space-x": {
                selector: " > *:not(:last-child)",
                prop: "margin-right"
            },
            "space-y": {
                selector: " > *:not(:last-child)",
                prop: "margin-bottom"
            },
            "div-x": {
                selector: " > *:not(:last-child)",
                prop: "border-right: solid 1px; border-right-color"
            },
            "div-y": {
                selector: " > *:not(:last-child)",
                prop: "border-bottom: solid 1px; border-bottom-color"
            },
            origin: "transform-origin",
            "skew-x": "--skewX",
            "skew-y": "--skewY",
            shift: "--translateX, --translateY",
            "shift-x": "--translateX",
            "shift-y": "--translateY",
            "shift-z": "--translateZ",
            translate: "--translateX, --translateY",
            "translate-x": "--translateX",
            "translate-y": "--translateY",
            "translate-z": "--translateZ",
            rotate: "--rotate",
            "rotate-x": "--rotateX",
            "rotate-y": "--rotateY",
            scale: "--scaleX, --scaleY",
            "scale-x": "--scaleX",
            "scale-y": "--scaleY",
            cols: "--grid-cols",
            gap: "gap",
            "gap-x": "column-gap",
            "gap-y": "row-gap",
            "auto-rows": "grid-auto-rows",
            "auto-flow": "grid-auto-flow",
            "auto-cols": "grid-auto-columns",
            "text-shadow": "text-shadow",
            "box-shadow": "box-shadow",
            "--sh-x": "--shadowX",
            "--sh-y": "--shadowY",
            "--sh-b": "--shadowBlur",
            "--sh-c": "--shadowColor",
            border: "border",
            "b-t": "border-top",
            "b-r": "border-right",
            "b-b": "border-bottom",
            "b-l": "border-left",
            "b-tr": "border-top-right",
            "b-br": "border-bottom-right",
            "b-bl": "border-bottom-left",
            "b-tl": "border-top-left",
            bc: "border-color",
            "bc-t": "border-top-color",
            "bc-r": "border-right-color",
            "bc-b": "border-bottom-color",
            "bc-l": "border-left-color",
            "bc-tr": "border-top-right-color",
            "bc-br": "border-bottom-right-color",
            "bc-bl": "border-bottom-left-color",
            "bc-tl": "border-top-left-color",
            bw: "border-width",
            "bw-t": "border-top-width",
            "bw-r": "border-right-width",
            "bw-b": "border-bottom-width",
            "bw-l": "border-left-width",
            "bw-tr": "border-top-right-width",
            "bw-br": "border-bottom-right-width",
            "bw-bl": "border-bottom-left-width",
            "bw-tl": "border-top-left-width",
            bs: "border-style",
            "bs-t": "border-top-style",
            "bs-r": "border-right-style",
            "bs-b": "border-bottom-style",
            "bs-l": "border-left-style",
            "bs-tr": "border-top-right-style",
            "bs-br": "border-bottom-right-style",
            "bs-bl": "border-bottom-left-style",
            "bs-tl": "border-top-left-style",
            radius: "border-radius",
            "radius-t": "border-top-radius",
            "radius-r": "border-right-radius",
            "radius-b": "border-bottom-radius",
            "radius-l": "border-left-radius",
            "radius-tr": "border-top-right-radius",
            "radius-br": "border-bottom-right-radius",
            "radius-bl": "border-bottom-left-radius",
            "radius-tl": "border-top-left-radius",
            bo: "border-opacity",
            "bo-t": "border-top-opacity",
            "bo-r": "border-right-opacity",
            "bo-b": "border-bottom-opacity",
            "bo-l": "border-left-opacity",
            "bo-tr": "border-top-right-opacity",
            "bo-br": "border-bottom-right-opacity",
            "bo-bl": "border-bottom-left-opacity",
            "bo-tl": "border-top-left-opacity",
            display: "display",
            d: "display",
            object: "object-fit",
            "object-pos": "object-position",
            scroll: "overscroll-behavior",
            list: "list-style",
            decoration: "text-decoration",
            case: "text-transform",
            pos: "position",
            pointer: "pointer-events",
            cursor: "cursor",
            appearance: "appearance",
            z: "z-index",
            index: "z-index",
            o: "opacity",
            opacity: "opacity",
            alpha: "opacity",
            overflow: "overflow",
            "overflow-x": "overflow-x",
            "overflow-y": "overflow-y",
            deco: "text-decoration",
            transition: "transition",
            animation: "animation",
            anim: "animation",
            tween: "transition",
            "tween-delay": "transition-delay",
            delay: "transition-delay",
            "tween-property": "transition-property",
            property: "transition-property",
            prop: "transition-property",
            "tween-length": "transition-duration",
            "tween-duration": "transition-duration",
            "tween-ease": "transition-timing-function",
            "anim-delay": "animation-delay",
            "anim-duration": "animation-duration",
            "anim-ease": "animation-timing-function"
        }
          , $s = {
            even: {
                pre: "",
                post: ":nth-child(even)"
            },
            odd: {
                pre: "",
                post: ":nth-child(odd)"
            },
            "child-1": {
                pre: "",
                post: ":nth-child(1)"
            },
            "child-2": {
                pre: "",
                post: ":nth-child(2)"
            },
            "child-3": {
                pre: "",
                post: ":nth-child(3)"
            },
            "child-4": {
                pre: "",
                post: ":nth-child(4)"
            },
            "child-5": {
                pre: "",
                post: ":nth-child(5)"
            },
            "child-6": {
                pre: "",
                post: ":nth-child(6)"
            },
            "child-7": {
                pre: "",
                post: ":nth-child(7)"
            },
            "child-8": {
                pre: "",
                post: ":nth-child(8)"
            },
            "child-9": {
                pre: "",
                post: ":nth-child(9)"
            },
            "child-10": {
                pre: "",
                post: ":nth-child(10)"
            },
            "last-child": {
                pre: "",
                post: ":last-child"
            },
            disabled: {
                pre: "",
                post: ":disabled"
            },
            hover: {
                pre: "",
                post: ":hover"
            },
            "parent-hover": {
                pre: ":hover > ",
                post: ""
            },
            "parents-hover": {
                pre: ":hover ",
                post: ""
            },
            "sibling-hover": {
                pre: ":hover ~ ",
                post: ""
            },
            "previous-hover": {
                pre: ":hover + ",
                post: ""
            },
            "group-hover": {
                pre: ".group:hover ",
                post: ""
            },
            checked: {
                pre: "",
                post: ":checked"
            },
            "parent-checked": {
                pre: ":checked > ",
                post: ""
            },
            "parents-checked": {
                pre: ":checked ",
                post: ""
            },
            "sibling-checked": {
                pre: ":checked ~ ",
                post: ""
            },
            "previous-checked": {
                pre: ":checked + ",
                post: ""
            },
            "group-checked": {
                pre: ".group:checked ",
                post: ""
            },
            focus: {
                pre: "",
                post: ":focus"
            },
            "parent-focus": {
                pre: ":focus > ",
                post: ""
            },
            "parents-focus": {
                pre: ":focus ",
                post: ""
            },
            "sibling-focus": {
                pre: ":focus ~ ",
                post: ""
            },
            "previous-focus": {
                pre: ":focus + ",
                post: ""
            },
            "group-focus": {
                pre: ".group:focus ",
                post: ""
            },
            active: {
                pre: "",
                post: ":active"
            },
            "parent-active": {
                pre: ":active > ",
                post: ""
            },
            "parents-active": {
                pre: ":active ",
                post: ""
            },
            "sibling-active": {
                pre: ":active ~ ",
                post: ""
            },
            "previous-active": {
                pre: ":active + ",
                post: ""
            },
            "group-active": {
                pre: ".group:active ",
                post: ""
            },
            "in-view": {
                pre: ".in-view ",
                post: ""
            },
            "parents-is-active": {
                pre: ".is-ready .is-active ",
                post: ""
            },
            "parent-is-active": {
                pre: ".is-ready .is-active > ",
                post: ""
            },
            "group-is-active": {
                pre: ".is-ready .group.is-active ",
                post: ""
            },
            "anim-in": {
                pre: ".is-ready .is-active ",
                post: ""
            },
            ready: {
                pre: ".is-ready ",
                post: ""
            },
            placeholder: {
                pre: "",
                post: "::placeholder "
            },
            "has-placeholder": {
                pre: "",
                post: ":placeholder-shown "
            },
            "sibling-has-placeholder": {
                pre: ":placeholder-shown ~ ",
                post: ""
            },
            "previous-has-placeholder": {
                pre: ":active + ",
                post: ""
            },
            scrollbar: {
                pre: "",
                post: "::-webkit-scrollbar"
            },
            "scroll-track": {
                pre: "",
                post: "::-webkit-scrollbar-track"
            },
            "scroll-thumb": {
                pre: "",
                post: "::-webkit-scrollbar-thumb"
            },
            "scroll-button": {
                pre: "",
                post: "::-webkit-scrollbar-button"
            },
            after: {
                post: "::after",
                pre: ""
            },
            before: {
                post: "::before",
                pre: ""
            }
        }
          , Es = {
            between: "space-between",
            around: "space-around",
            evenly: "space-evenly",
            start: "flex-start",
            end: "flex-end",
            fit: "100%",
            current: "currentColor",
            abs: "absolute",
            col: "column",
            trans: "transparent"
        }
          , As = {};
        let e = ""
          , t = ""
          , f = ""
          , s = "";
        for (var z in M)
            f += `.${z},`,
            s += z + "|";
        for (var R in _s)
            f += `[class*='${R}:'],`,
            e += R + "|";
        for (var B in $s)
            f += `[class*='${B}:'],`,
            t += B.replace(/\-/, "\\-") + "|";
        e = e.replace(/\|$/, ""),
        s = s.replace(/\|$/, ""),
        f = f.replace(/\,$/, ""),
        t = t.replace(/\|$/, "");
        let m = new RegExp("^" + s + "$")
          , g = new RegExp("^(" + e + ")\\:[^\\s]+")
          , v = new RegExp("^(" + t + ")\\:(.+)");
        var N, I = {};
        for (N in Es)
            I["--alias-" + N] = Es[N] + " ;";
        var b = {}
          , H = {}
          , D = {};
        function q() {
            function e(e=document.styleSheets) {
                for (var t = [], s = 0; s < e.length; s++)
                    try {
                        for (var i = 0; i < e[s].cssRules.length; i++)
                            try {
                                for (var r = 0; r < e[s].cssRules[i].style.length; r++) {
                                    var n = e[s].cssRules[i].style[r];
                                    n.startsWith("--") && -1 == t.indexOf(n) && t.push(n)
                                }
                            } catch (e) {}
                    } catch (e) {
                        console.warn("utilityCSS:" + e)
                    }
                return t
            }
            let o = document.createElement("style")
              , t = (o.type = "text/css",
            o.setAttribute("id", "utilitycss-helpers"),
            document.getElementsByTagName("head")[0].appendChild(o),
            document.createElement("style"));
            for (var s in t.type = "text/css",
            t.setAttribute("id", "utilitycss-alias"),
            t.innerHTML += ":root {",
            Es)
                t.innerHTML += `--alias-${s}: ${Es[s]};`;
            t.innerHTML += "}",
            document.getElementsByTagName("head")[0].appendChild(t);
            var l = document.createElement("style")
              , c = (l.type = "text/css",
            l.setAttribute("id", "utilitycss-all"),
            document.getElementsByTagName("head")[0].appendChild(l),
            document.createElement("style"))
              , p = (c.type = "text/css",
            c.setAttribute("id", "utilitycss-responsive"),
            document.getElementsByTagName("head")[0].appendChild(c),
            {});
            let i = []
              , u = {}
              , r = getComputedStyle(document.documentElement);
            if (window.__is_server__) {
                let s = "";
                for (let t = 0; t < document.styleSheets.length; t++)
                    for (let e = 0; e < document.styleSheets[t].cssRules.length; e++)
                        s += document.styleSheets[t].cssRules[e].cssText;
                s.replace(/(\-\-[^\:]+)\:([^;]+)\;/g, (e,t,s,i)=>{
                    u[t.trim()] = s
                }
                )
            } else
                e().forEach(e=>{
                    u[e] = r.getPropertyValue(e)
                }
                );
            function n(t) {
                let s = !1;
                i.forEach(e=>{
                    t == e && (s = !0)
                }
                ),
                s || i.push(t)
            }
            function a(e) {
                e.matches && e.matches(f) && n(e),
                e.querySelectorAll && e.querySelectorAll(f).forEach(e=>{
                    n(e)
                }
                )
            }
            window.updateComputedStyle = function() {
                r = getComputedStyle(document.documentElement)
            }
            ,
            window.getComputedCache = function() {
                return u
            }
            ,
            requestAnimationFrame(function e() {
                requestAnimationFrame(e),
                0 < i.length && i.forEach(i=>{
                    {
                        var r, f = u;
                        let d = ""
                          , h = {}
                          , t = ""
                          , e = i.getAttribute("class").replace(/\n/g, " ")
                          , s = ((e = /\([^)]+\)\:/.test(i.getAttribute("class")) ? e.replace(/\([^)]+\)/g, (e,t,s)=>e.replace(/\s/g, ";")) : e).split(" ").forEach(r=>{
                            let a = "", o = "", l = "", e;
                            if (/\([^)]+\)\:?/.test(r)) {
                                r = r.replace(/\;/g, " ");
                                let i;
                                r = r.replace(/\([^)]+\)\:?/, (e,t,s)=>(i = e,
                                ""));
                                var c = i.replace(/(\(|\))/g, "").replace(/\//g, " ").replace(/\:$/, "").split("&");
                                a = (c[0] || "") + " ",
                                o = (c[1] || "") + " ",
                                e = !0,
                                l = i.replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\&/g, "\\&").replace(/\+/g, "\\+").replace(/\~/g, "\\~").replace(/\//g, "\\/").replace(/\:/g, "\\:").replace(/\*/g, "\\*").replace(/\./g, "\\.").replace(/\s/g, ".")
                            } else if (v.test(r))
                                try {
                                    l = r.replace(v, (e,t)=>t).replace(/(\r\n|\n|\r)/gm, ""),
                                    r = r.replace(l + ":", ""),
                                    a = $s[l].pre,
                                    o = $s[l].post,
                                    e = !0,
                                    l += "\\:"
                                } catch (e) {}
                            if (g.test(r) && !As[l + r.replace(/([\W_])/g, e=>"\\" + e)]) {
                                c = r.split(":")[0];
                                let n = r.split(":")[1];
                                if (null != _s[c])
                                    if (void 0 === n)
                                        console.warn('missing value or wrong property syntax: "' + r + '"');
                                    else {
                                        var i = ("string" == typeof _s[c] ? _s[c] : _s[c].prop).split(",")
                                          , c = _s[c].selector || "";
                                        let t = ""
                                          , s = /\!/g.test(n) ? "!important" : ""
                                          , e = (n = n.replace("!", ""),
                                        "");
                                        if (/\@/.test(n)) {
                                            let i;
                                            n = n.replace(/\@(.*)/, (e,t,s)=>(i = t,
                                            "")),
                                            f["--media-" + i] && (e = "" + f["--media-" + i])
                                        }
                                        i.forEach(i=>{
                                            var e = n.split(",");
                                            let r = "";
                                            e.forEach(e=>{
                                                var t, s;
                                                /^[0-9.-]+[^0-9.-]+$/.test(e) ? (t = e.replace(/^[0-9.-]+([^0-9.-]+)$/, (e,t)=>t),
                                                s = e.replace(t, ""),
                                                f["--unit-" + t] ? r += `calc( ${s} * var(--unit-${t}) )` : r += "" + e) : (s = "--alias-" + e,
                                                r += f[s] ? `var(--alias-${e})` : e),
                                                r += "transition-property" === i ? "," : " "
                                            }
                                            ),
                                            t += `${i}: ${r.replace(/\,$/, "")} ${s};`
                                        }
                                        ),
                                        r = r.replace(/([\W_])/g, e=>"\\" + e),
                                        "" != e ? (h[e] = h[e] || "",
                                        h[e] += `${a}.${l}${r}${c}${o}{ ${t} }`,
                                        b[e.trim()] = b[e.trim()] || {},
                                        b[e.trim()][a + "." + l + r + c + o] = t) : (d += `${a}.${l}${r}${c}${o}{ ${t} }`,
                                        D[(a + "." + l + r + c + o).trim()] = t),
                                        As[l + r] = t
                                    }
                            }
                            if (m.test(r.replace(/([\W_])/g, e=>"\\" + e)) && (i = r.replace(/\@.*/, ""),
                            null != M[i]) && !As[l + r.replace(/([\W_])/g, e=>"\\" + e)]) {
                                c = "string" == typeof M[i] ? M[i] : M[i].prop,
                                i = M[i].selector || "";
                                let e = "";
                                if (/\@/g.test(r)) {
                                    let i;
                                    r.replace(/\@(.*)/, (e,t,s)=>(i = t,
                                    "")),
                                    f["--media-" + i] && (e = "" + f["--media-" + i])
                                }
                                "" != e ? (h[e] = h[e] || "",
                                h[e] += ` .${l}${r}${i} { ${c} }`,
                                b[e.trim()] = b[e.trim()] || {},
                                b[e.trim()][(" ." + l + r + i).trim()] = c) : (t += ` .${l}${r}${i} { ${c} }`,
                                H[("." + l + r + i).trim()] = c),
                                As[l + r.replace(/([\W_])/g, e=>"\\" + e)] = `.${l}${r}${i} { ${c} }`
                            }
                        }
                        ),
                        !1);
                        for (r in h)
                            p[r] = p[r] || "",
                            p[r] += "" + h[r],
                            s = !0;
                        if (s) {
                            let t = "";
                            var n, a = [];
                            for (n in p)
                                a.push(n);
                            a.sort((e,t)=>Number(e.replace(/^([^px]+).*/, (e,t)=>t)) < Number(t.replace(/^([^px]+).*/, (e,t)=>t)) ? -1 : 1),
                            a.forEach(e=>{
                                t += `@media ${e} { ${p[e]} }`
                            }
                            ),
                            c.innerHTML = t
                        }
                        "" != t && (o.innerHTML += t),
                        "" != d && (l.innerHTML += d)
                    }
                }
                ),
                i = []
            });
            let d;
            function h() {
                clearTimeout(d),
                d = setTimeout(()=>{
                    document.documentElement.style.setProperty("--vhfix", window.innerHeight + "px"),
                    document.documentElement.style.setProperty("--vhfixonce", window.innerHeight + "px"),
                    a(document.documentElement)
                }
                , 10)
            }
            window.addEventListener("resize", h),
            document.addEventListener("DOMContentLoaded", e=>{
                h()
            }
            ),
            window.addEventListener("load", e=>{
                h()
            }
            ),
            new ResizeObserver(function() {
                h()
            }
            ).observe(document.body),
            h(),
            new MutationObserver(function(e) {
                e.forEach(e=>{
                    "childList" == e.type && "STYLE" != e.target.tagName && e.addedNodes.forEach(e=>{
                        a(e)
                    }
                    ),
                    "attributes" == e.type && e.target.___oldClassName__ !== e.target.className && (e.target.___oldClassName__ = e.target.className,
                    a(e.target))
                }
                )
            }
            ).observe(document.documentElement || document.body, {
                attributes: !0,
                attributeFilter: ["class"],
                subtree: !0,
                childList: !0,
                characterData: !0
            }),
            a(document.documentElement || document.body),
            window.UtilityCSS = ()=>o.innerHTML + "\n" + t.innerHTML + "\n" + l.innerHTML + "\n" + c.innerHTML,
            window.getAllCSSVariableNames = e,
            window.UtilityCSS.getCache = ()=>({
                responsiveStylesOutput: b,
                herlpersStylesOutput: H,
                normalStylesOutput: D,
                aliasStylesOuput: I
            })
        }
        "complete" === document.readyState ? q() : window.addEventListener("DOMContentLoaded", q)
    }
    function V(e, t) {
        var s = t || document
          , t = e.clientWidth
          , i = e.clientHeight;
        let r = e.offsetTop
          , n = e.offsetLeft;
        for (; e && e.offsetParent && e.offsetParent != document && e !== s && s !== e.offsetParent; )
            r += e.offsetParent.offsetTop,
            n += e.offsetParent.offsetLeft,
            e = e.offsetParent;
        return {
            top: r,
            left: n,
            width: t,
            height: i
        }
    }
    var n = {
        listeners: [],
        normalize: function(e) {
            return e.replace(":", "")
        },
        on: function(e, t, s) {
            void 0 === t ? utils.warn("cannot find callback for " + e + " in context:" + s) : (e = this.normalize(e),
            this.listeners.push({
                name: e,
                closure: t,
                target: s
            }))
        },
        off: function(e, t, s) {
            for (var i, r = 0, n = this.listeners.length, e = this.normalize(e); r < n; r++)
                (i = this.listeners[r]).name !== e || i.closure !== t || s && i.target !== s || (this.listeners.splice(r, 1),
                r--,
                n--)
        },
        fire: function(e, t) {
            for (var s, i = 0, r = this.listeners.length, e = this.normalize(e); i < r; i++)
                (s = this.listeners[i]) && s.name === e && (void 0 !== t ? s.closure.apply(s.target, t) : s.closure.call(s.target))
        }
    };
    let W, Z = new WeakMap;
    const X = e=>null === e || !("object" == typeof e || "function" == typeof e);
    var U, Y = {}, Q = {
        touch: "undefined" != typeof window && function() {
            return "ontouchstart"in window || 0 < navigator.msMaxTouchPoints
        }
        ,
        msPointer: "undefined" != typeof window && function() {
            return !!window.navigator.msPointerEnabled
        }
        ,
        pointer: "undefined" != typeof window && function() {
            return !!window.navigator.pointerEnabled
        }
        ,
        pointerdown: function() {
            return this.touch() ? "touchstart" : this.pointer() ? "pointerdown" : this.msPointer() ? "MSPointerDown" : "mousedown"
        },
        pointerup: function() {
            return this.touch() ? "touchend" : this.pointer() ? "pointerup" : this.msPointer() ? "MSPointerUp" : "mouseup"
        },
        pointermove: function() {
            return this.touch() ? "touchmove" : this.pointer() ? "pointermove" : this.msPointer() ? "MSPointerMove" : "mousemove"
        },
        pointerenter: function() {
            return this.touch() ? "touchstart" : this.pointer() ? "pointerenter" : this.msPointer() ? "MSPointerEnter" : "mouseenter"
        },
        pointerleave: function() {
            return this.touch() ? "touchend" : this.pointer() ? "pointerleave" : this.msPointer() ? "MSPointerLeave" : "mouseleave"
        },
        pointerover: function() {
            return this.touch() ? "touchstart" : this.pointer() ? "pointerover" : this.msPointer() ? "MSPointerOver" : "mouseover"
        },
        pointerout: function() {
            return this.touch() ? "touchend" : this.pointer() ? "pointerout" : this.msPointer() ? "MSPointerOut" : "mouseout"
        }
    };
    for (U in Q)
        Q.hasOwnProperty(U) && (Y[U] = Q[U]());
    const G = /\$\$([0-9]+)\$\$/g;
    class J {
        constructor(e) {
            if (this.oldValue = null,
            this.node = e.node,
            this.lvls = e.lvls,
            this.optional = e.optional,
            this.nameIndex = e.nameIndex,
            this.valueIndex = e.valueIndex,
            this.name = e.name,
            this.value = e.value,
            this.type = e.type,
            this.index = e.index,
            /\?/g.test(this.name) && (this.optional = !0,
            this.node.removeAttribute(this.name),
            this.name = this.name.replace(/\?/g, "")),
            /(on\-|\@)/.test(this.name) && (this.type = "event",
            e = this.name.replace(/^(on\-|\@)/, ""),
            this.eventName = Y[e] || e,
            this.eventHandler = this.eventHandler.bind(this),
            this.node.removeEventListener(this.eventName, this.eventHandler),
            this.node.addEventListener(this.eventName, this.eventHandler)),
            "text" == this.type) {
                this.parts = [];
                let i = 0
                  , r = this.node.nodeValue;
                r.replace(G, (e,t,s)=>(this.parts.push({
                    type: "static",
                    str: r.substr(i, s - i)
                }),
                this.parts.push({
                    type: "value",
                    index: t >> 0
                }),
                i = s + e.length,
                e)),
                this.parts.push({
                    type: "static",
                    str: r.substr(i, r.length)
                }),
                this.node.nodeValue = ""
            }
        }
        eventHandler(e) {
            this.callback && this.callback(e)
        }
        destroy() {
            this.eventName && this.node && this.node.removeEventListener(this.eventName, this.eventHandler),
            this.node = null
        }
        _update(t) {
            if ("event" == this.type && (s = -1 != this.valueIndex ? t[this.valueIndex] : this.value,
            this.callback?.toString() !== s?.toString()) && (this.callback = s),
            "text" == this.type) {
                let i = this.node.parentNode;
                this.parts.forEach(s=>{
                    if (null != t[s.index])
                        if ("value" == s.type)
                            if (Array.isArray(t[s.index])) {
                                s.entries = s.entries || [],
                                t[s.index].forEach((e,t)=>{
                                    e.htmlTemplate && (null == s.entries[t] && (s.entries[t] = new ee(e.htmlTemplate,i)),
                                    s.entries[t].render(e.values))
                                }
                                );
                                for (let e = t[s.index].length; e < s.entries.length; e++)
                                    s.entries[e] && s.entries[e].destroy();
                                s.entries.splice(t[s.index].length, s.entries.length)
                            } else
                                t[s.index].htmlTemplate ? ((!s.htmlTemplate || s.htmlTemplate && t[s.index].htmlTemplate !== s.htmlTemplate) && (s.template && s.template.destroy(),
                                s.htmlTemplate = t[s.index].htmlTemplate,
                                s.template = new ee(t[s.index].htmlTemplate,i)),
                                s.template.render(t[s.index].values)) : (s.node || (s.node = document.createElement("span"),
                                i && i.insertBefore(s.node, this.node)),
                                null != s.node.oldText && s.node.oldText == t[s.index] || (s.node.innerHTML = t[s.index],
                                s.node.oldText = t[s.index]));
                        else
                            s.node || (s.node = document.createTextNode(s.str),
                            i.insertBefore(s.node, this.node)),
                            !X(value) && value === this.value || s.node.nodeValue === t[s.index] || (s.node.nodeValue = t[s.index])
                }
                )
            }
            if ("attribute" == this.type) {
                var e = -1 != this.valueIndex ? t[this.valueIndex] : this.value
                  , s = -1 != this.nameIndex ? t[this.nameIndex] : this.name;
                if ("class" == s) {
                    let s = e && "" != e && "function" == typeof e.trim ? e.trim().replace(/\s+/g, " ").replace(/(?:\r\n|\r|\n)/g, " ").split(" ") : [];
                    if (this.oldValue && "function" == typeof this.oldValue.replace) {
                        let t = this.oldValue.replace(/\s+/g, " ").replace(/(?:\r\n|\r|\n)/g, " ").trim().split(" ");
                        var i = t.filter(e=>!s.includes(e) && "" != e.trim());
                        0 < i.length && this.node.classList.remove.apply(this.node.classList, i),
                        s = s.filter(e=>!t.includes(e))
                    }
                    0 < (s = s.filter(e=>"" !== e.trim())).length && this.node.classList.add.apply(this.node.classList, s)
                } else if ("style" == s && "object" == typeof e) {
                    if (this.oldValue && "object" == typeof this.oldValue)
                        for (var r in this.oldValue)
                            void 0 !== e[r] && null !== e[r] || this.node.style.removeProperty(r.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase());
                    for (var n in e)
                        void 0 !== e[n] && null !== e[n] && (this.node.style[n] = e[n])
                } else
                    this.node.props && this.node.set && this.name in this.node.props ? this.node.set({
                        [this.name]: e
                    }) : -1 != this.nameIndex || this.optional && !e ? this.node.hasAttribute(s) && this.node.removeAttribute(s) : null != this.oldValue && "object" != typeof this.oldValue && this.oldValue === e || this.node.setAttribute(s, "object" == typeof e ? JSON.stringify(e) : e);
                this.oldValue = e
            }
        }
    }
    let K = new Map;
    class ee {
        constructor(e, t) {
            this.parentNode = t,
            this.bindings = [],
            this.templateTag = e.templateTag;
            var t = e.templateTag.content.cloneNode(!0)
              , s = document.createElement("div");
            s.appendChild(t);
            let i = s;
            i.querySelectorAll("video").forEach(e=>{
                var t;
                e._isClone || e._clone || (t = e.cloneNode(),
                (e._clone = t)._isClone = !0,
                t.setAttribute("is-clone", ""),
                e.parentNode.insertBefore(t, e),
                e.parentNode.removeChild(e))
            }
            ),
            this.rootNodes = [];
            for (let e = 0; e < i.childNodes.length; e++)
                this.rootNodes.push(i.childNodes[e]);
            e.bindingOptions.forEach(e=>{
                let t = i;
                e.lvls.forEach(e=>{
                    t = t.childNodes[e]
                }
                ),
                e.node = t,
                this.bindings.push(new J(e))
            }
            ),
            this.rootNodes.forEach(e=>{
                this.parentNode.appendChild(e)
            }
            )
        }
        render(t) {
            this.bindings.forEach(e=>{
                e._update(t)
            }
            )
        }
        destroy() {
            this.bindings.forEach(e=>{
                e.destroy()
            }
            ),
            this.rootNodes.forEach(e=>{
                e && e.parentNode && e.parentNode.removeChild(e)
            }
            ),
            this.rootNodes = []
        }
    }
    class te {
        constructor(s, e) {
            this.bindingOptions = [];
            let i = "";
            for (let t = 0; t < s.length; t++) {
                let e = "";
                t < s.length - 1 && (e = "$$" + t + "$$"),
                i += s[t] + e
            }
            this.templateTag = document.createElement("template"),
            this.templateTag.innerHTML = i,
            function t(a, o, l) {
                if (a.nodeType == Node.TEXT_NODE)
                    G.test(a.nodeValue) && o.push({
                        lvls: l,
                        type: "text"
                    });
                else if (a.attributes)
                    for (let e = 0; e < a.attributes.length; e++) {
                        let n = a.attributes[e];
                        if (G.test(n.name) || G.test(n.value)) {
                            let s = n.name
                              , i = -1
                              , r = -1;
                            n.name.replace(G, (e,t)=>{
                                i = t >> 0,
                                a.removeAttribute(s),
                                o.push({
                                    lvls: l,
                                    nameIndex: i,
                                    valueIndex: r,
                                    name: s,
                                    value: n.value,
                                    type: "attribute"
                                })
                            }
                            ),
                            n.value.replace(G, (e,t)=>{
                                r = t >> 0,
                                o.push({
                                    lvls: l,
                                    nameIndex: i,
                                    valueIndex: r,
                                    name: s,
                                    value: n.value,
                                    type: "attribute"
                                })
                            }
                            )
                        }
                    }
                if (a.childNodes)
                    for (let e = 0; e < a.childNodes.length; e++) {
                        var s = JSON.parse(JSON.stringify(l));
                        s.push(e),
                        t(a.childNodes[e], o, s)
                    }
            }(this.templateTag.content, this.bindingOptions, []),
            this.values = e
        }
    }
    function o(e, ...t) {
        let s = K.get(e);
        return s || (s = new te(e,t),
        K.set(e, s)),
        {
            htmlTemplate: s,
            values: t
        }
    }
    function se(e, t) {
        Z.get(e) || Z.set(e, {});
        e = Z.get(e);
        return e[t] = e[t] || [],
        e[t]
    }
    function ie(e, t) {
        se(e, t).forEach(e=>{
            e = e,
            ae[e.uuid] = e
        }
        )
    }
    function re(e) {
        if (!e || "object" != typeof e || e.__isProxy)
            return e;
        for (var t in e)
            "object" == typeof e[t] && (e[t] = re(e[t]));
        return new Proxy(e,{
            get(e, t) {
                var s, i;
                return "__isProxy" == t || ("_proxy_target" == t ? e : (s = e,
                i = t,
                W && "function" != typeof s[i] && !(s = se(s, i)).includes(W) && s.push(W),
                e[t]))
            },
            set(e, t, s) {
                return s = re(s),
                !X(s) && s === e[t] || (ie(e, t),
                e[t] = s),
                !0
            }
        })
    }
    let ne = 0;
    class e extends HTMLElement {
        get defaultData() {
            return {}
        }
        constructor() {
            var e;
            super(),
            this.uuid = ne++,
            this._data = this.defaultData,
            this.data = re(this._data),
            this.created && this.created(),
            this.shadowDom ? (this.attachShadow(this.shadowDom),
            this.styles && ((e = document.createElement("style")).textContent = this.styles,
            this.shadowRoot.appendChild(e))) : this.styles && !document.getElementById(this.tagName + "-style") && (this.$componentStyle = document.createElement("style"),
            this.$componentStyle.id = this.tagName + "-style",
            this.$componentStyle.setAttribute("id", this.tagName + "-style"),
            this.$componentStyle.type = "text/css",
            this.$componentStyle.innerHTML = this.styles,
            document.getElementsByTagName("head")[0].appendChild(this.$componentStyle))
        }
        query(e) {
            this.querySelector(e)
        }
        queryAll(e) {
            this.querySelectorAll(e)
        }
        shadowQuery(e) {
            this.shadowRoot?.querySelector(e)
        }
        shadowQueryAll(e) {
            this.shadowRoot?.querySelectorAll(e)
        }
        fire(e, t) {
            this.dispatchEvent(new CustomEvent(e,{
                detail: t || null
            }))
        }
        connectedCallback() {
            if (this.props)
                for (var e in this.props)
                    this.hydrateFromAttribute(e);
            this.attached && this.attached(),
            this._isConnected = !0,
            this._update(),
            requestAnimationFrame(()=>{
                this.ready && this.ready(),
                (this.update || this.resize) && oe.push(this)
            }
            )
        }
        hydrateFromAttribute(t) {
            if (this.props[t]) {
                let e = this.props[t];
                this.props[t].type && (e = this.props[t].type);
                var s = this.props[t] && this.props[t].default
                  , i = t.replace(/([A-Z])/g, e=>"-" + e[0].toLowerCase())
                  , i = this.hasAttribute("data-" + i) ? "data-" + i : this.hasAttribute(i) ? i : null;
                if (i) {
                    var r = this.getAttribute(i);
                    if (!/\$\$[^\$]+\$\$/.test(r))
                        if (e === Object) {
                            try {
                                this.data[t] = JSON.parse(r)
                            } catch (e) {
                                console.warn(`<${this.tagName.toLowerCase() + ">  " + this.getAttribute("name")} -  JSON parse error on attribute ${i}=` + r, e)
                            }
                            this.setAttribute(i, "$$" + t + "$$")
                        } else
                            e === Boolean ? this.data[t] = "false" !== r && ("true" === r || !!r) : this.data[t] = e(r)
                } else
                    null != s && (this.data[t] = s)
            }
        }
        attributeChangedCallback(e, t, s) {
            this.props && this.hydrateFromAttribute(e),
            this.attributeChanged && this.attributeChanged(e, t, s),
            this._update()
        }
        disconnectedCallback() {
            if (this.detached && this.detached(),
            this.innerHTML = "",
            this._isConnected = !1,
            this.update || this.resize)
                for (let e = 0; e < oe.length; e++)
                    if (oe[e] == this) {
                        oe.splice(e, 1);
                        break
                    }
            this.template && (this.template.destroy(),
            this.template = null),
            this.$componentStyle && this.$componentStyle.parentNode && this.$componentStyle.parentNode.removeChild(this.$componentStyle)
        }
        set(e) {
            for (var t in e)
                this.data[t] = e[t]
        }
        _update() {
            var e, t;
            this.render && (e = this.shadowRoot || this,
            t = (W = this).render(this.data),
            W = null,
            !this.hasAttribute("has-rendered") || this.hasRendered || this.forceRender || (e.innerHTML = ""),
            this.template ? this.template.templateTag != t.htmlTemplate.templateTag && (this.template.destroy(),
            this.template = new ee(t.htmlTemplate,e)) : this.template = new ee(t.htmlTemplate,e),
            this.template.render(t.values),
            this.hasRendered = !0,
            this.setAttribute("has-rendered", ""),
            this.afterRender && this.afterRender(),
            this.oldValues = t.values)
        }
    }
    let ae = {};
    var oe = [];
    function le() {
        oe.forEach(e=>{
            e.resize && e.resize()
        }
        ),
        window.forceResize = !1
    }
    function ce(e=()=>{}
    ) {
        let {actions: t, mutations: r, state: s, getters: i} = e;
        var n, a = {
            state: re(s),
            async commit(e, t) {
                if (r[e]) {
                    var s = r[e](this.state, t);
                    if (s)
                        for (var i in s)
                            this.state[i] = s[i]
                }
            }
        };
        for (n in t)
            a[n] = t[n];
        return new Proxy(a,{
            get(e, t) {
                return i[t] ? i[t](e.state) : e[t]
            }
        })
    }
    window.addEventListener("resize", le, !1),
    window.addEventListener("orientationchange", le, !1),
    le(),
    function e(t) {
        requestAnimationFrame(e),
        oe.forEach(e=>{
            e._isConnected && e.update && e.update()
        }
        );
        var s, i = {
            ...ae
        };
        for (s in ae = {},
        i)
            i[s]._update()
    }();
    customElements.define("scroll-object", class extends e {
        get defaultData() {
            return {
                parallax: !1,
                noScale: !1,
                ratio: .1,
                offset: 0,
                winH: 0,
                top: 0,
                left: 0,
                width: 0,
                height: 0
            }
        }
        get props() {
            return {
                ratio: Number
            }
        }
        created() {
            this.intersectionObserver = new IntersectionObserver(e=>{
                e.forEach(e=>{
                    e.isIntersecting ? e.target.classList.add("in-view") : e.target.classList.remove("in-view")
                }
                )
            }
            ),
            this.onScroll = this.onScroll.bind(this),
            this.resize = this.resize.bind(this),
            this.__scrollTop = 0
        }
        attached() {
            var e = this.hasAttribute("no-scale")
              , t = this.hasAttribute("parallax")
              , s = Number(this.getAttribute("offset"))
              , i = Number(this.getAttribute("ratio")) || .1;
            this.data.noScale = e,
            this.data.parallax = t,
            this.data.offset = s,
            this.data.ratio = i,
            this.isAttached = !0,
            window.acf ? this.intersectionObserver.observe(this) : n.on("loader:end", ()=>{
                this.intersectionObserver.observe(this)
            }
            ),
            this.data.parallax && (document.addEventListener("scroll", this.onScroll),
            window.addEventListener("resize", this.resize),
            this.resizeObserver = new ResizeObserver(e=>{
                this.resize()
            }
            ),
            this.resizeObserver.observe(this),
            this.resizeObserver.observe(document.body))
        }
        detached() {
            this.isAttached = !1,
            this.intersectionObserver.unobserve(this),
            this.data.parallax && (document.removeEventListener("scroll", this.onScroll),
            window.removeEventListener("resize", this.resize),
            this.resizeObserver.unobserve(this),
            this.resizeObserver.unobserve(document.body))
        }
        onScroll(e) {
            this.__scrollTop = window.pageYOffset
        }
        resize() {
            var e, t, s, i;
            this.data.parallax && ({top: e, left: t, width: s, height: i} = V(this),
            this.data.top = e,
            this.data.left = t,
            this.data.width = s,
            this.data.height = i,
            this.data.winH = window.innerHeight)
        }
        update() {
            var e, t, s, i, r, n;
            this.data.parallax && ({top: n, height: e, noScale: t, ratio: s, offset: i, winH: r} = this.data,
            n - this.__scrollTop < r) && (n = (n - this.__scrollTop + e + i * r) / (r + e),
            n = Math.min(1, Math.max(0, n)),
            this.style.transform = `translateY(${2 * (n - .5) * e * s}px) scale(${t ? "1" : "1.2"}) translateZ(0)`)
        }
    }
    );
    var de = function(e, t, s, i, r, n) {
        return he(e, t, s, i)(r, n)
    };
    function he(e, t, s, i) {
        function r(e, t) {
            return e = function(e, t) {
                for (var s, i, r, n, a = e, o = 0; o < 8; o++) {
                    if (r = h(a) - e,
                    Math.abs(r) < t)
                        return a;
                    if (n = f(a),
                    Math.abs(n) < 1e-6)
                        break;
                    a -= r / n
                }
                if ((a = e) < (s = 0))
                    return s;
                if ((i = 1) < a)
                    return i;
                for (; s < i; ) {
                    if (r = h(a),
                    Math.abs(r - e) < t)
                        return a;
                    r < e ? s = a : i = a,
                    a = .5 * (i - s) + s
                }
                return a
            }(e, t),
            ((d * e + c) * e + l) * e
        }
        var n = 3 * e
          , a = 3 * (s - e) - n
          , o = 1 - n - a
          , l = 3 * t
          , c = 3 * (i - t) - l
          , d = 1 - l - c
          , h = function(e) {
            return ((o * e + a) * e + n) * e
        }
          , f = function(e) {
            return (3 * o * e + 2 * a) * e + n
        };
        return function(e, t) {
            return r(e, 1 / (200 * (+t || 400)))
        }
    }
    var fe = !1
      , pe = [];
    function ue() {
        requestAnimationFrame(ue),
        pe.forEach(e=>{
            e && e.update()
        }
        )
    }
    class me {
        constructor(e) {
            this.step = e.step || function() {}
            ,
            this.end = e.end || function() {}
            ,
            this.direction = e.direction || 1,
            this.duration = e.duration || 1e3,
            this.easing = e.easing || [.55, .085, .68, .53],
            this.delay = e.delay || 0,
            this._progress = 0,
            this._easedProgress = 0
        }
        destroy() {
            var t = this;
            for (let e = 0; e < pe.length; e++)
                if (pe[e] == t) {
                    pe.splice(e, 1);
                    break
                }
        }
        play() {
            this.delayProgress = 0,
            this._progress = 1 == this.direction ? 0 : 1,
            this._easedProgress = 1 == this.direction ? 0 : 1,
            this.isPlaying = !0;
            {
                var s = this;
                let t = !1;
                pe.forEach(e=>{
                    e == s && (t = !0)
                }
                ),
                t || pe.push(s)
            }
            fe || (fe = !0,
            ue())
        }
        pause() {
            clearTimeout(this._delayTimer),
            this.isPlaying = !1
        }
        reset() {
            this._progress = 0
        }
        update() {
            this.isPlaying && (this.delayProgress < this.delay ? this.delayProgress += 1e3 / 60 : (this._progress += 1 / (this.duration / (1e3 / 60)) * this.direction,
            this._easedProgress = de(this.easing[0], this.easing[1], this.easing[2], this.easing[3], Math.max(0, Math.min(1, this._progress)), 1),
            1 == this.direction && this._easedProgress < 1 || -1 == this.direction && 0 < this._easedProgress ? this.step(this._easedProgress, this._progress) : (this.isPlaying = !1,
            this._progress = 1 == this.direction ? 1 : 0,
            this._easedProgress = 1 == this.direction ? 1 : 0,
            this.step(this._easedProgress, this._progress),
            this.end())))
        }
    }
    function ge(s, i) {
        i = i || {};
        let r = {};
        for (var e in i.to)
            r[e] = s[e];
        var t = new me({
            step: e=>{
                for (var t in i.to)
                    s[t] = r[t] + (i.to[t] - r[t]) * e;
                i.step && i.step(e)
            }
            ,
            end: i.end,
            delay: 1e3 * i.delay,
            duration: 1e3 * i.duration,
            easing: i.easing
        });
        return t.play(),
        t
    }
    var ve = function(e, t, s, i, r, n) {
        return be(e, t, s, i)(r, n)
    };
    function be(e, t, s, i) {
        function r(e, t) {
            return e = function(e, t) {
                for (var s, i, r, n, a = e, o = 0; o < 8; o++) {
                    if (r = h(a) - e,
                    Math.abs(r) < t)
                        return a;
                    if (n = f(a),
                    Math.abs(n) < 1e-6)
                        break;
                    a -= r / n
                }
                if ((a = e) < (s = 0))
                    return s;
                if ((i = 1) < a)
                    return i;
                for (; s < i; ) {
                    if (r = h(a),
                    Math.abs(r - e) < t)
                        return a;
                    r < e ? s = a : i = a,
                    a = .5 * (i - s) + s
                }
                return a
            }(e, t),
            ((d * e + c) * e + l) * e
        }
        var n = 3 * e
          , a = 3 * (s - e) - n
          , o = 1 - n - a
          , l = 3 * t
          , c = 3 * (i - t) - l
          , d = 1 - l - c
          , h = function(e) {
            return ((o * e + a) * e + n) * e
        }
          , f = function(e) {
            return (3 * o * e + 2 * a) * e + n
        };
        return function(e, t) {
            return r(e, 1 / (200 * (+t || 400)))
        }
    }
    function we(e) {
        return e?.trim()?.replace("{br}", "")?.replace(/\{a\_start([^\}]*)\}/g, (e,t,s)=>{
            return `<a href="${t.replace("|href=", "")?.replace(/\"/g, "")}">`
        }
        )?.replace(/{(sub|small|strong|b|u|i|sup|em)\_start}/, "<$1>")?.replace(/{(sub|small|strong|b|u|i|sup|em|a)\_end}/, "</$1>")
    }
    class xe extends HTMLElement {
        constructor() {
            super(),
            this.data = {
                content: "Lorem Ipsum",
                progress: 0,
                delay: 0,
                lines: [],
                duration: 1.6,
                lineDelay: .07,
                css: "",
                indent: !1
            },
            (this.el = this).attachShadow({
                mode: "open"
            }),
            this.onSlotchange = this.onSlotchange.bind(this),
            this.resize = this.resize.bind(this),
            this.intersectionObserver = new IntersectionObserver(e=>{
                e.forEach(e=>{
                    e.isIntersecting ? this.show() : this.hide()
                }
                )
            }
            )
        }
        onSlotchange(e) {
            e = e.target.assignedNodes({
                flatten: !0
            });
            0 != (this.slotNodes = e).length && requestAnimationFrame(()=>{
                this.resize()
            }
            )
        }
        static observedAttributes = ["dark", "css"];
        attributeChangedCallback(e, t, s) {
            "dark" == e && "true" == s && this.$ref && (this.$ref.classList.add("is-dark-theme"),
            this.$linewWrapper.classList.add("is-dark-theme"))
        }
        connectedCallback() {
            this.data.delay = Number(this.getAttribute("data-delay")),
            this.data.css = this.getAttribute("css") || "",
            this.data.indent = !(!this.getAttribute("indent") || "true" != this.getAttribute("indent")),
            this.hasAttribute("dark") && this.getAttribute("dark"),
            this.style.display = "block",
            this.style.position = "relative",
            this.style.width = "100%",
            this.shadowRoot.innerHTML = `
    
            <style>${this.data.css + `
            a {
                text-decoration: none;
                color: inherit;
            }`}</style>
    
            <div original-text style="opacity: 0;">
                <slot></slot>
            </div>

            <div placeholder-text x-ref  style="ointer-events: none; opacity: 0; position: absolute; top:0; left: 0; white-space: nowrap;">
            </div>
            <div multiline-text  x-lines  aria-hidden="true" style="pointer-events: none; position: absolute; top:0; left: 0; width: 100%;">
            </div>
            `,
            this.$slot = this.shadowRoot.querySelector("slot"),
            this.$slot.addEventListener("slotchange", this.onSlotchange),
            this.$ref = this.shadowRoot.querySelector("[x-ref]"),
            this.$linewWrapper = this.shadowRoot.querySelector("[x-lines]"),
            window.addEventListener("resize", this.resize),
            window.addEventListener("load", this.resize),
            requestAnimationFrame(()=>{
                this.resize()
            }
            ),
            window.acf ? this.intersectionObserver.observe(this) : n.on("loader:end", ()=>{
                this.intersectionObserver.observe(this)
            }
            )
        }
        disconnectedCallback() {
            window.removeEventListener("resize", this.resize),
            window.removeEventListener("load", this.resize)
        }
        resize() {
            this.$ref = this.$ref || this.shadowRoot.querySelector("[x-ref]"),
            this.$ref && this.slotNodes && (clearTimeout(this.timer),
            this.timer = setTimeout(()=>{
                var i = (this.el.innerHTML?.trim()?.replace(/\-/, "- ")?.replace(/\<(a)([^>]*)\>/g, (e,t,s,i)=>{
                    s = s.split(" ");
                    let r = "";
                    return s.forEach(e=>{
                        e = e.split("=");
                        "href" == e[0].trim() && (r += "|href=" + e[1].trim())
                    }
                    ),
                    " {a_start" + r + "} "
                }
                )?.replace(/\<(sup)[^>]*\>/g, "{$1_start}")?.replace(/\<\/(sup)\>/g, "{$1_end}")?.replace(/\<(sub|strong|i|em|a|u|small)[^>]*\>/g, " {$1_start} ")?.replace(/\<\/(sub|strong|i|em|a|u|small)\>/g, " {$1_end} ")?.replace(/\<\/?br\>/g, " {br} ")?.replace(/<[^>]*>?/gm, "")?.replace(/\s+/g, " "))?.split(" ")
                  , e = [];
                let r = 0
                  , n = this.$ref.innerHTML = ""
                  , a = [];
                for (let s = 0; s < i.length; s++)
                    if (/\{a\_start/g.test(i[s]?.trim()) && i[s]?.trim()?.replace(/\{a\_start([^\}]*)\}/g, (e,t,s)=>{
                        t = t.replace("|href=", "")?.replace(/\"/g, "");
                        a.push({
                            tag: "a",
                            href: t
                        })
                    }
                    ),
                    /\{sub\_start\}/.test(i[s]) && a.push({
                        tag: "sub"
                    }),
                    /\{sub\_end\}/.test(i[s]) && a.splice(a.length - 1, 1),
                    /\{a\_end\}/.test(i[s]) && a.splice(a.length - 1, 1),
                    /\{small\_start\}/.test(i[s]) && a.push({
                        tag: "small"
                    }),
                    /\{small\_end\}/.test(i[s]) && a.splice(a.length - 1, 1),
                    /\{strong\_start\}/.test(i[s]) && a.push({
                        tag: "strong"
                    }),
                    /\{strong\_end\}/.test(i[s]) && a.splice(a.length - 1, 1),
                    /\{b\_start\}/.test(i[s]) && a.push({
                        tag: "b"
                    }),
                    /\{b\_end\}/.test(i[s]) && a.splice(a.length - 1, 1),
                    /\{i\_start\}/.test(i[s]) && a.push({
                        tag: "i"
                    }),
                    /\{i\_end\}/.test(i[s]) && a.splice(a.length - 1, 1),
                    /\{u\_start\}/.test(i[s]) && a.push({
                        tag: "u"
                    }),
                    /\{u\_end\}/.test(i[s]) && a.splice(a.length - 1, 1),
                    /\{sup\_start\}/.test(i[s]) && a.push({
                        tag: "sup"
                    }),
                    /\{sup\_end\}/.test(i[s]) && a.splice(a.length - 1, 1),
                    /\{em\_start\}/.test(i[s]) && a.push({
                        tag: "em"
                    }),
                    /\{em\_end\}/.test(i[s]) && a.splice(a.length - 1, 1),
                    this.$ref.innerHTML += we(i[s]) + (/\-$/.test(i[s].trim()) ? "" : " "),
                    this.$ref.clientWidth > this.clientWidth || "{br}" === i[s]) {
                        let t = this.$ref.innerHTML = "";
                        "" != n && (t += n),
                        n = "";
                        for (let e = r; e < s; e++)
                            t += we(i[e]) + (/\-$/.test(i[e].trim()) ? "" : " ");
                        if (0 < a.length) {
                            for (let e = a.length - 1; 0 <= e; e--)
                                t += `</${a[e].tag}>`;
                            for (let e = 0; e < a.length; e++)
                                n += `<${a[e].tag} ${a[e].href ? 'href="' + a[e].href + '"' : ""}>`
                        }
                        e.push(t),
                        r = s,
                        this.$ref.innerHTML = "{br}" === i[s] ? "" : we(i[s])
                    }
                if (0 < Math.abs(i.length - r)) {
                    this.$ref.innerHTML = "";
                    let t = n;
                    for (let e = r; e < i.length; e++)
                        t += we(i[e]) + (/\-$/.test(i[e].trim()) ? "" : " ");
                    if (0 < a.length)
                        for (let e = a.length - 1; 0 <= e; e--)
                            t += `</${a[e].tag}>`;
                    e.push(t)
                }
                this.$ref.innerHTML = "",
                this.$linewWrapper = this.$linewWrapper || this.shadowRoot.querySelector("[x-lines]");
                var t = e.map((e,t)=>`
                    <span data-line-wrap style="position:relative; vertical-align: top; display: inline-block; white-space: nowrap;">
                        <span style="display: block; opacity: 0;">
                            ${e}
                        </span>
                        <span style="display:block; top: 50%; position:absolute; transform: translate3d(0, -50%, 0); overflow:hidden; ">
                            <span data-line style="display: block; transform: translate3d(0, 100%, 0); padding: 0.3em 0;">
                                ${e}
                            </span>
                        </span>
                    </span><br/>`).join("");
                this.$linewWrapper.innerHTML = t,
                this.$lines = this.shadowRoot.querySelectorAll("[data-line]"),
                this.$linesWrap = this.shadowRoot.querySelectorAll("[data-line-wrap]"),
                this.$clonedLinks = this.$linewWrapper.querySelectorAll("a"),
                this.$links = [],
                this.slotNodes.forEach(e=>{
                    e.querySelectorAll && e.querySelectorAll("a").forEach(e=>this.$links.push(e))
                }
                ),
                this.$links.forEach(s=>{
                    s.addEventListener("mouseenter", e=>{
                        const t = s.getAttribute("href");
                        this.$clonedLinks.forEach(e=>{
                            e.getAttribute("href") == t && e.classList.add("hover")
                        }
                        )
                    }
                    ),
                    s.addEventListener("mouseleave", e=>{
                        const t = s.getAttribute("href");
                        this.$clonedLinks.forEach(e=>{
                            e.getAttribute("href") == t && e.classList.remove("hover")
                        }
                        )
                    }
                    )
                }
                ),
                this.isShown && this.show()
            }
            , 300))
        }
        show() {
            this.tween && this.tween.destroy(),
            this.$lines?.forEach((e,t)=>{
                e.style.opacity = 0,
                e.style.transform = "translate3d(0,100%,0)"
            }
            ),
            this.$linesWrap?.forEach((e,t)=>{
                e.style.opacity = 0
            }
            ),
            this.tween = ge({
                e: 0
            }, {
                to: {
                    e: 1
                },
                delay: this.data.delay,
                easing: [0, 0, 1, 1],
                duration: this.data.lines.length * this.data.lineDelay + this.data.duration,
                step: r=>{
                    this.$linesWrap?.forEach((e,t)=>{
                        e.style.opacity = 1
                    }
                    ),
                    this.$lines?.forEach((e,t)=>{
                        var s = this.data.duration
                          , i = this.$lines.length * this.data.lineDelay + s
                          , i = Math.min(1, Math.max(0, (r * i - this.data.lineDelay * t) / s))
                          , t = ve(.43, .195, .02, 1, i);
                        e.style.opacity = 1,
                        e.style.transform = `translate3d(0,${100 - 100 * t}%,0)`
                    }
                    )
                }
            }),
            setTimeout(()=>{
                this.isShown = !0
            }
            , this.data.lines.length * this.data.lineDelay + this.data.duration)
        }
        hide() {
            this.tween && this.tween.destroy(),
            this.tween = ge({
                e: 1
            }, {
                to: {
                    e: 0
                },
                delay: 0,
                easing: [0, 0, 1, 1],
                duration: this.data.lines.length * this.data.lineDelay * 1e3 + 1e3 * this.data.duration
            })
        }
    }
    window.__is_server__ || customElements.define("split-text", xe);
    customElements.define("core-cursor-wrapper", class extends e {
        get props() {
            return {
                scrollTop: {
                    type: Number,
                    default: 0
                }
            }
        }
        created() {
            this.data = {
                scrollTop: 0,
                pointer: [window.innerWidth / 2, window.innerHeight / 2],
                currPointer: [0, 0],
                isHover: !1,
                $cursors: []
            },
            this.onMouseMove = this.onMouseMove.bind(this)
        }
        attached() {
            document.addEventListener("mousemove", this.onMouseMove, !1),
            document.addEventListener("mousewheel", this.onMouseMove, !1),
            this.resizeObserver = new ResizeObserver(e=>{
                this.resize()
            }
            ),
            this.resizeObserver.observe(this),
            this.resizeObserver.observe(document.body)
        }
        detached() {
            document.removeEventListener("mousemove", this.onMouseMove, !1),
            document.removeEventListener("mousewheel", this.onMouseMove, !1),
            this.resizeObserver.unobserve(this),
            this.resizeObserver.unobserve(document.body)
        }
        onMouseMove(e) {
            this.data.pointer[0] = e.pageX,
            this.data.pointer[1] = e.pageY
        }
        resize() {
            this.data.top = this.offsetTop,
            this.data.left = this.offsetLeft;
            let e = this;
            for (; e && e.offsetParent && e.offsetParent != document && e !== document && document !== e.offsetParent; )
                this.data.top += e.offsetParent.offsetTop,
                this.data.left += e.offsetParent.offsetLeft,
                e = e.offsetParent;
            this.data.$cursors.forEach(e=>e?.resize())
        }
        addCursor(e) {
            this.data.$cursors.push(e),
            setTimeout(()=>{
                this.resize(),
                setTimeout(()=>{
                    this.resize()
                }
                , 1e3)
            }
            , 1e3)
        }
        removeCursor(e) {
            this.data.$cursors.push(e)
        }
        update() {
            var e = this.data.pointer[0] - (this.data.left || 0)
              , t = this.data.pointer[1] - (this.data.top || 0) - this.data.scrollTop;
            this.data.currPointer[0] += .1 * (e - this.data.currPointer[0]),
            this.data.currPointer[1] += .1 * (t - this.data.currPointer[1]),
            this.data.$cursors.forEach(e=>{
                e.set({
                    x: this.data.currPointer[0],
                    y: this.data.currPointer[1]
                })
            }
            )
        }
    }
    );
    customElements.define("core-cursor", class extends e {
        get props() {
            return {}
        }
        created() {
            this.data = {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            }
        }
        detached() {
            this.$cursorWrapper && this.$cursorWrapper.removeCursor(this)
        }
        attached() {
            let e = this;
            for (; e != document.documentElement && e.parentNode; ) {
                if (e.parentNode.addCursor) {
                    e.parentNode.addCursor(this),
                    this.$cursorWrapper = e.parentNode;
                    break
                }
                e = e.parentNode
            }
            this.resize(),
            setTimeout(()=>{
                this.resize()
            }
            )
        }
        afterRender() {
            this.$media = this.$media && 0 < this.$media.length ? this.$media : this.querySelectorAll("[data-media]")
        }
        resize() {
            this.data.w = this.clientWidth,
            this.data.h = this.clientHeight
        }
        update() {
            var {x: e, y: t, w: s, h: i} = this.data;
            this.style.transform = `translate(${e - s / 2}px, ${t - i / 2}px) translateZ(0)`
        }
    }
    );
    function ye(e, t) {
        var s = t || document
          , t = e.clientWidth
          , i = e.clientHeight;
        let r = e.offsetTop
          , n = e.offsetLeft;
        for (; e && e.offsetParent && e.offsetParent != document && e !== s && s !== e.offsetParent; )
            r += e.offsetParent.offsetTop,
            n += e.offsetParent.offsetLeft,
            e = e.offsetParent;
        return {
            top: r,
            left: n,
            width: t,
            height: i
        }
    }
    customElements.define("roll-number", class extends e {
        get props() {
            return {
                number: Number,
                numberClass: String,
                from: Number
            }
        }
        get styles() {
            return `
            roll-number {
                display: inline-block;
                position: relative;
                font-size: 0;
            }`
        }
        created() {
            this.data = {
                from: 10,
                currAngle: 0,
                currAngle2: 0,
                step: 2 * Math.PI / 10,
                angle: 0,
                parts: [0],
                roll: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            this.intersectionObserver = new IntersectionObserver(e=>{
                e.forEach(e=>{
                    e.isIntersecting ? (this.animate = !0,
                    this.data.currAngle = 0,
                    this.data.currAngle2 = 0,
                    this.data.currAngle2 = (6 - this.data.number - 1) / 10 * (2 * Math.PI) * 1 + this.data.number / 10 * (2 * Math.PI),
                    this.tween = ge({
                        e: 0
                    }, {
                        duration: 3,
                        to: {
                            e: 1
                        },
                        easing: [.43, .195, .02, 1],
                        step: e=>{
                            this.data.currAngle2 = (6 - this.data.number - 1) / 10 * (2 * Math.PI) * (1 - e) + this.data.number / 10 * (2 * Math.PI),
                            this._update()
                        }
                        ,
                        end: ()=>{}
                    })) : (this.animate = !1,
                    this.tween?.destroy())
                }
                )
            }
            )
        }
        attached() {
            window.acf ? this.intersectionObserver.observe(this) : n.on("loader:end", ()=>{
                this.intersectionObserver.observe(this)
            }
            )
        }
        render() {
            let {currAngle2: i, step: r, numberClass: n} = this.data;
            return o`
            <div style="font-size:0;">
                ${this.data.parts.map((e,t)=>{
                lets = i;
                return o`
                        <span class="rel mask iblock">

                            <span class="iblock o:0 ${n}">0</span>

                            ${this.data.roll.map(e=>{
                    var t = s + e * r;
                    return o`
                                    <span 
                                        class="iblock abs tl:0 l:50% align:center ${n}"
                                        style="${{
                        letterSpacing: "normal",
                        transform: `translate(-50%, ${200 * Math.sin(t)}%) translateZ(0)`,
                        opacity: t % (2 * Math.PI) > Math.PI / 2 && t % (2 * Math.PI) < Math.PI / 2 * 3 ? 0 : 1
                    }}">
                                        ${0 == e ? 0 : 10 - e}
                                    </span>`
                }
                )}
                        </span>`
            }
            )}
            </div>`
        }
    }
    );
    customElements.define("core-drag", class extends e {
        created() {
            (this.el = this).data = {
                debug: !1,
                offset: 0,
                active: !0,
                autoplayPosition: 0,
                content: null,
                currentIndex: 0,
                scroll: 0,
                position: [0, 0],
                cursor: [0, 0],
                prevent: !1,
                direction: "x",
                handlerPosition: [0, 0],
                showBar: !1,
                swipe: !1,
                desktopOnly: !1,
                loop: !0,
                autoplay: "false" != this.el.getAttribute("autoplay") && !!this.el.hasAttribute("autoplay")
            },
            this.lastDate = this.lastDate || performance.now(),
            this.speed = 0,
            this.speedX = 0,
            this._steps = [],
            this.next = this.next.bind(this),
            this.prev = this.prev.bind(this),
            this._onPointerDown = this._onPointerDown.bind(this),
            this._onPointerMove = this._onPointerMove.bind(this),
            this._onPointerUp = this._onPointerUp.bind(this),
            this.offset = 0,
            this.isPointerDown = !1,
            this._pointerDown = [0, 0],
            this._pointer = [0, 0],
            this._handlerPosition = [0, 0],
            this._positionDown = [0, 0],
            this._position = [0, 0],
            this._dragPosition = [0, 0],
            this._cursor = [0, 0],
            this._accX = 0,
            this._accY = 0,
            this._direction = 1
        }
        attached() {
            this.el.style.display = "block",
            this.$layers = this.el.querySelectorAll("[drag-layer]"),
            0 < this.$layers.length && !this.hasResizedOnce && (this.hasResizedOnce = !0,
            this.resize()),
            this.el.addEventListener("mousedown", this._onPointerDown, {
                passive: !1
            }),
            this.el.addEventListener("touchstart", this._onPointerDown, {
                passive: !1
            }),
            document.addEventListener("mousemove", this._onPointerMove, {
                passive: !1
            }),
            document.addEventListener("touchmove", this._onPointerMove, {
                passive: !1
            }),
            document.addEventListener("mouseup", this._onPointerUp, {
                passive: !1
            }),
            document.addEventListener("touchend", this._onPointerUp, {
                passive: !1
            }),
            this.$content = this.el.querySelector("[drag-content], [data-drag-content]"),
            new ResizeObserver(e=>{
                this.resize()
            }
            ).observe(this.$content),
            this.$layers = this.el.querySelectorAll("[drag-layer]"),
            this._steps = [],
            this.el.querySelectorAll("[drag-step], [data-drag-step]").forEach(e=>{
                this._steps.push({
                    el: e
                })
            }
            ),
            this.$content.style.overflowX = "visible",
            this.$content.style.userSelect = "none",
            this.data.active && (this.$content.style.cursor = "grab"),
            this.$nextBtn = this.el.querySelectorAll("[data-drag-next], [drag-next]"),
            this.$nextBtn.forEach(e=>{
                e.removeEventListener("click", this.next),
                e.addEventListener("click", this.next)
            }
            ),
            this.$prevBtn = this.el.querySelectorAll("[data-drag-prev], [drag-prev]"),
            this.$prevBtn.forEach(e=>{
                e.removeEventListener("click", this.prev),
                e.addEventListener("click", this.prev)
            }
            ),
            this.$scrollbarHandle = this.el.querySelector("[data-drag-scrollbar-handle]"),
            this.resize(),
            setTimeout(()=>{
                this._steps = [],
                this.el.querySelectorAll("[drag-step], [data-drag-step]").forEach(e=>{
                    this._steps.push({
                        el: e
                    })
                }
                ),
                this.resize()
            }
            , 1e3)
        }
        prev() {
            this._scrollTween = ge(this._position, {
                to: {
                    0: this._position[0] + this._steps[0].width
                },
                duration: .6,
                easing: [.49, .01, .27, 1]
            })
        }
        next() {
            this._scrollTween = ge(this._position, {
                to: {
                    0: this._position[0] - this._steps[0].width
                },
                duration: .6,
                easing: [.49, .01, .27, 1]
            })
        }
        onCurrentIndexChange() {}
        _onPointerDown(e) {
            this.speedX = 0,
            this.lastDate = performance.now(),
            this.isPointerDown = !0,
            this.preventClick = !1;
            var e = e.touches || e.changedTouches ? e.touches[0] || e.changedTouches[0] : e
              , t = e.pageX
              , e = e.pageY;
            t -= window.pageXOffset || document.documentElement.scrollLeft,
            e -= window.pageYOffset || document.documentElement.scrollTop,
            this.lastTouchEventPageX = t,
            this._accX = 0,
            this._accY = 0,
            this._pointerDown[0] = t,
            this._pointerDown[1] = e,
            this._positionDown[0] = this._position[0],
            this._positionDown[1] = this._position[1],
            this._lastMoveX = this._pointerDown[0],
            this._lastMoveY = this._pointerDown[1],
            this.isPointerDown = !0,
            this.data.active && (this.$content.style.cursor = "grabbing"),
            this.isDeccelerating = !1,
            this.lastDate = performance.now()
        }
        _onHandlerDown() {
            this.isHanlderDown = !0
        }
        _onPointerMove(e) {
            var t, s = e.touches || e.changedTouches ? e.touches[0] || e.changedTouches[0] : e, i = s.pageX, s = s.pageY;
            i -= window.pageXOffset || document.documentElement.scrollLeft,
            s -= window.pageYOffset || document.documentElement.scrollTop,
            this.isPointerDown && (this.lastTouchEventPageX = this.lastTouchEventPageX || i,
            t = i - this.lastTouchEventPageX,
            this.lastTouchEventPageX = i,
            this.isHanlderDown || (this._accX += Math.abs(this._lastMoveX - i),
            this._accY += Math.abs(this._lastMoveY - s),
            this._lastMoveX = i,
            this._lastMoveY = s,
            "y" == this.data.direction && (e.preventDefault(),
            e.stopPropagation()),
            (5 < Math.abs(this._accX) && Math.abs(this._accX) > Math.abs(this._accY) && "x" == this.data.direction || 5 < Math.abs(this._accY) && Math.abs(this._accY) > Math.abs(this._accX) && "y" == this.data.direction || this.preventClick) && (this.preventClick = !0,
            this.lastDate = this.lastDate || performance.now(),
            i = performance.now() - this.lastDate,
            this.speedX = t / (.001 + i),
            this.speedX = Math.min(10, Math.max(-10, this.speedX)),
            this.lastDate = performance.now(),
            this.layers) && this.layers.forEach((e,t)=>{
                e.el.querySelectorAll("a").forEach(e=>e.style.pointerEvents = "none")
            }
            )),
            e.touches || e.changedTouches || (this.data.autoplay = !1))
        }
        _onPointerUp(e) {
            if (this.isHanlderDown = !1,
            !this.isPointerDown)
                return !0;
            this.preventClick ? (e.preventDefault(),
            e.stopPropagation(),
            setTimeout(()=>{
                this.data.prevent = !1,
                this.isPointerDown = !1,
                this.preventClick = !1,
                this.layers && this.layers.forEach((e,t)=>{
                    e.el.querySelectorAll("a").forEach(e=>e.style.pointerEvents = "auto")
                }
                )
            }
            , 200)) : this.preventClick = !1,
            this.data.active && (this.$content.style.cursor = "grab"),
            this.isDeccelerating = !0,
            this.isPointerDown = !1,
            this.isPointerDown = !1
        }
        resize() {
            if (this.$content) {
                this.layers && 0 != this.layers.length ? this.layers.forEach((e,t)=>{
                    e.width = e.el.clientWidth,
                    e.left = e.el.offsetLeft,
                    e.offset = 0
                }
                ) : (this.layers = [],
                this.$layers = this.el.querySelectorAll("[drag-layer]"),
                this.$layers.forEach((e,t)=>{
                    var s;
                    this.layers.push({
                        el: e,
                        x: 0,
                        offset: 0,
                        ratio: 0,
                        width: e.clientWidth,
                        left: e.offsetLeft
                    }),
                    e.hasAttribute("data-src") ? ((s = new Image).onload = ()=>{
                        this.layers[t].loaded = !0,
                        this.layers[t].width = e.clientWidth,
                        setTimeout(()=>{
                            this.resize()
                        }
                        , 300)
                    }
                    ,
                    s.onerror = ()=>{
                        this.layers[t].error = !0
                    }
                    ,
                    s.src = e.getAttribute("data-src")) : this.layers[t].loaded = !0
                }
                )),
                this.data.position[0] = 0,
                this._position[0] = 0,
                this._width = this.el.clientWidth,
                this._height = this.el.clientHeight,
                this._contentWidth = this.$content.scrollWidth * (this.el.hasAttribute("data-trim") ? Number(this.el.getAttribute("data-trim")) : 1),
                this._contentHeight = this.$content.scrollHeight;
                var e, t = ye(this.el);
                this._left = t.left,
                this._top = t.top,
                this.$content && (t = ye(this.$content),
                this._contentLeft = t.left);
                for (let e = 0; e < this._steps.length; e++)
                    this._steps[e].width = this._steps[e].el.clientWidth,
                    this._steps[e].left = ye(this._steps[e].el).left;
                1 < this._steps.length && (t = this._steps.length - 2,
                e = this._steps.length - 1,
                t = this._steps[e].left - (this._steps[t].left + this._steps[t].width),
                this._scrollWidth = this._steps[e].left + this._steps[e].width + t)
            }
        }
        update() {
            if (this.data.active) {
                if (this.data.active && (this.$content.style.cursor = "grab"),
                this._steps && 0 < this._steps.length && 0 < this._steps.length) {
                    let t = -10 < this._position[0]
                      , s = (this.$prevBtn?.forEach(e=>{
                        t && !e.classList.contains("is-disabled") && e.classList.add("is-disabled"),
                        !t && e.classList.contains("is-disabled") && e.classList.remove("is-disabled")
                    }
                    ),
                    this._steps[this._steps.length - 1].left + this._steps[this._steps.length - 1].width + this._position[0] <= this._left + this._width);
                    this.$nextBtn?.forEach(e=>e.classList[s ? "add" : "remove"]("is-disabled"))
                }
                this._position[0] += 17 * this.speedX,
                this.speedX *= .96,
                this.speedX < .01 && (this.isDeccelerating = !1),
                !this.data.autoplay || this.isPointerDown || this.isDeccelerating || (this._position[0] -= .4,
                this.data.loop) || (this._position[0] = Math.min(0, Math.max(-this._contentWidth + this._width, this._position[0]))),
                this.data.position[0] += this.data.offset * this._contentWidth + this._position[0] - this.data.position[0],
                this.data.loop || (this._position[0] = Math.min(0, Math.max(-this._contentWidth + this._width, this._position[0])),
                this._position[1] = Math.min(0, Math.max(-this._contentHeight + this._height, this._position[1]))),
                this.data.cursor[0] += .5 * (this._cursor[0] - this.data.cursor[0]),
                this.data.cursor[1] += .5 * (this._cursor[1] - this.data.cursor[1]),
                this.layers && this.layers.forEach((e,t)=>{
                    this.data.loop && (this.data.position[0] + e.left + e.offset < -e.width && (e.offset += this._scrollWidth),
                    this.data.position[0] + e.left + e.offset > this._width) && (e.offset -= this._scrollWidth);
                    var s = this.data.position[0] + e.offset;
                    e.el.style.transform = "translate(" + s + "px, " + this.data.position[1] + "px) translateZ(0)"
                }
                ),
                this.$scrollbarHandle && (this.$scrollbarHandle.style.transform = `translateX(${this.data.position[0] / (-this._contentWidth + this._width) % 1 * 100}%) translateZ(0)`)
            }
        }
    }
    );
    customElements.define("core-slideshow", class extends e {
        created() {
            this.$slides = [],
            this.$bullets = [],
            this.onSwipe = this.onSwipe.bind(this),
            this.prev = this.prev.bind(this),
            this.next = this.next.bind(this),
            this._onBulletDown = this._onBulletDown.bind(this),
            this.onPointerEnter = this.onPointerEnter.bind(this),
            this.onPointerLeave = this.onPointerLeave.bind(this),
            this.data = {
                loop: "false" != this.getAttribute("data-loop"),
                onIndexChange: ()=>{}
                ,
                currentIndex: 0,
                slides: [],
                controlPos: "u-pos-bl",
                theme: "dark",
                swipe: !1,
                autoplay: !1,
                active: !0,
                desktopOnly: !1,
                bulletNavClass: "slideshow__bullets",
                arrowClass: "slideshow__arrow",
                arrowWrapperClass: "slideshow__arrows",
                bulletWrapperSelector: this.getAttribute("data-bullets-wrapper") || "*",
                activeClass: "is-slide-active",
                queries: null,
                useBullets: "false" != this.getAttribute("data-use-bullets") && "true" == this.getAttribute("data-use-bullets"),
                useArrows: "false" != this.getAttribute("data-use-arrows") && (this.getAttribute("data-use-bullets"),
                !0),
                perSlideArrows: !1,
                useModale: !1
            }
        }
        ready() {
            if (this.data.currentIndex = Number(this.getAttribute("data-start-index")) || 0,
            this.data.autoplay && this.autoPlay(),
            this.queries = this.getAttribute("data-queries"),
            null !== this.queries && (this.queries = JSON.parse(this.queries),
            this.cols = null,
            this.realNumberOfSlide = null),
            this.resize(),
            this.data.useArrows && !this.data.perSlideArrows && (this.queries && this.cols < this.$slides.length || !this.queries)) {
                let t = document.createElement("div");
                this.data.arrowWrapperClass.split(" ").forEach(e=>{
                    "" != e && t.classList.add(e)
                }
                ),
                this.appendChild(t),
                this.$arrows = [];
                for (let e = 0; e < 2; e++) {
                    var s = document.createElement("div");
                    s.setAttribute("role", "button"),
                    s.classList.add(this.data.arrowClass),
                    s.addEventListener("click", this[0 == e ? "prev" : "next"], !1),
                    t.appendChild(s),
                    this.$arrows.push(s)
                }
            }
            var e;
            this.$nextBtns = this.querySelectorAll("[data-next]"),
            this.$nextBtns.forEach((e,t)=>{
                e.addEventListener("click", this.next, !1)
            }
            ),
            this.$prevBtns = this.querySelectorAll("[data-prev]"),
            this.$prevBtns.forEach((e,t)=>{
                e.addEventListener("click", this.prev, !1)
            }
            ),
            this.data.useBullets ? ((e = document.createElement("div")).setAttribute("class", this.data.bulletNavClass),
            ("*" == this.data.bulletWrapperSelector ? this : this.querySelector(this.data.bulletWrapperSelector)).appendChild(e),
            this.$bulletNav = e) : (this.$bullets = this.querySelectorAll("[data-bullet]"),
            this.$bullets.forEach(e=>{
                e.addEventListener("click", this._onBulletDown)
            }
            )),
            this.onCurrentIndexChange()
        }
        detached() {
            this._indicator && this._indicator.turnOff(),
            this._swipeIndicator && this._swipeIndicator.disable(),
            this.$slides = [],
            this.data.slides = [],
            this.$bulletNav && (this.$bullets.forEach(e=>{
                e.removeEventListener("click", this._onBulletDown)
            }
            ),
            this.$arrowPrevBtn && this.$arrowPrevBtn.removeEventListener("click", this.prev, !1),
            this.$arrowNextBtn && this.$arrowNextBtn.removeEventListener("click", this.next, !1),
            this.$bulletNav.innerHTML = "",
            this.$bullets = [])
        }
        removeSlide(t) {
            for (let e = 0; e < this.$slides.length; e++)
                if (this.$slides[e] == t) {
                    this.$slides.splice(e, 0),
                    this.data.slides.splice(e, 0);
                    break
                }
        }
        addSlide(e) {
            var t = this.data.slides.length;
            if (e.setAttribute("data-index", t),
            this.data.slides.push(!0),
            this.$slides.push(e),
            this.$bulletNav) {
                this.$bullets.forEach(e=>{
                    e.removeEventListener("click", this._onBulletDown)
                }
                ),
                this.$arrowPrevBtn && this.$arrowPrevBtn.removeEventListener("click", this.prev, !1),
                this.$arrowNextBtn && this.$arrowNextBtn.removeEventListener("click", this.next, !1),
                this.$bulletNav.innerHTML = "",
                this.$bullets = [],
                this.$arrowPrevBtn = document.createElement("div"),
                this.$arrowPrevBtn.setAttribute("role", "button"),
                this.$arrowPrevBtn.setAttribute("data-prev", ""),
                this.$arrowPrevBtn.classList.add("slideshow__arrow", "is-prev", "pointer-auto"),
                this.$arrowPrevBtn.addEventListener("click", this.prev, !1),
                this.$bulletNav.appendChild(this.$arrowPrevBtn);
                for (let e = 0; e < this.$slides.length; e++) {
                    var s = document.createElement("div");
                    s.setAttribute("data-index", e),
                    s.setAttribute("role", "button"),
                    s.classList.add("slideshow__bullet", "pointer-auto"),
                    s.addEventListener("click", this._onBulletDown),
                    this.$bulletNav.appendChild(s),
                    this.$bullets.push(s)
                }
                t = document.createElement("div");
                t.setAttribute("role", "button"),
                t.setAttribute("data-next", ""),
                t.classList.add("slideshow__arrow", "is-next", "pointer-auto"),
                t.addEventListener("click", this.next, !1),
                this.$bulletNav.appendChild(t)
            }
            this.onCurrentIndexChange()
        }
        resize() {
            this.queries && this.queries.forEach(e=>{
                e.max && window.innerWidth <= e.max && (this.cols = e.cols),
                e.min && window.innerWidth >= e.min && (this.cols = e.cols)
            }
            )
        }
        _onBulletDown(e) {
            this.data.currentIndex = e.currentTarget.getAttribute("data-index") >> 0,
            this.onCurrentIndexChange()
        }
        focusSlide(e) {
            e != this.data.currentIndex && (this.data.currentIndex = e,
            this.onCurrentIndexChange())
        }
        prev() {
            let e = this.$slides.length;
            this.queries && (e = Math.ceil(this.$slides.length / this.cols)),
            clearTimeout(this.timer),
            this.data.currentIndex--,
            this.data.currentIndex < 0 && (this.data.currentIndex = this.data.loop ? e - 1 : 0),
            this.onCurrentIndexChange(),
            this.data.autoplay && this.autoPlay()
        }
        next() {
            let e = this.$slides.length;
            this.queries && (e = Math.ceil(this.$slides.length / this.cols)),
            clearTimeout(this.timer),
            this.data.currentIndex++,
            this.data.currentIndex > e - 1 && (this.data.currentIndex = this.data.loop ? 0 : e - 1),
            this.onCurrentIndexChange(),
            this.data.autoplay && !this._isHover && this.autoPlay()
        }
        onCurrentIndexChange() {
            this.data.loop || (0 == this.data.currentIndex ? (this.classList.remove("is-end"),
            this.classList.add("is-start")) : this.data.currentIndex >= this.$slides.length - 1 ? (this.classList.remove("is-start"),
            this.classList.add("is-end")) : (this.classList.remove("is-start"),
            this.classList.remove("is-end"))),
            this.classList.remove("is-dark", "is-light"),
            this.$bullets && this.$bullets.forEach((e,t)=>{
                e.classList[t == this.data.currentIndex ? "add" : "remove"]("is-active")
            }
            );
            for (let e = 0; e < this.$slides.length; e++) {
                let s = this.$slides[e];
                if (this.queries) {
                    let t = Math.floor(e / this.cols);
                    s.classList.remove(this.data.activeClass),
                    setTimeout(()=>{
                        var e;
                        t != this.data.currentIndex ? "HIDDEN" != s.parentNode.tagName && (e = document.createElement("hidden"),
                        s.parentNode.insertBefore(e, s),
                        s.parentNode.removeChild(s),
                        e.appendChild(s)) : ("HIDDEN" == s.parentNode.tagName && ((e = s.parentNode).removeChild(s),
                        e.parentNode.insertBefore(s, e),
                        e.parentNode.removeChild(e)),
                        setTimeout(()=>{
                            s.classList.add(this.data.activeClass)
                        }
                        , 100))
                    }
                    , 600)
                } else
                    s.classList.remove(this.data.activeClass, "is-prev", "is-next"),
                    e < this.data.currentIndex ? s.classList.add("is-prev") : e == this.data.currentIndex ? (s.classList.add(this.data.activeClass),
                    this.classList.add("is-" + (s.getAttribute("data-theme") || ""))) : s.classList.add("is-next")
            }
            var e = new CustomEvent("change",{
                detail: {
                    index: this.data.currentIndex
                }
            });
            this.dispatchEvent(e)
        }
        onBulltetDown(e) {
            e = e.currentTarget.getAttribute("data-index") >> 0;
            this.data.currentIndex = e,
            this.onCurrentIndexChange()
        }
        onPointerEnter() {
            this._isHover = !0
        }
        onPointerLeave() {
            this._isHover = !1,
            this.data.autoplay && this.autoPlay()
        }
        autoPlay() {
            clearTimeout(this.timer),
            this.timer = setTimeout(()=>{
                this.next()
            }
            , 4e3)
        }
        onSwipe(e) {
            var t = this.data.currentIndex;
            t += "down" == e.direction || "right" == e.direction ? 1 : -1,
            this.data.direction = "down" == e.direction || "right" == e.direction ? 1 : -1,
            t = Math.min(this.$slides.length - 1, Math.max(0, t)),
            this.data.currentIndex = t,
            this.onCurrentIndexChange()
        }
    }
    );
    function ke(e, t) {
        for (var s, i = 0; i < t.length; i++) {
            var r = t[i];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, "symbol" == typeof (s = function(e) {
                if ("object" != typeof e || null === e)
                    return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 === t)
                    return String(e);
                t = t.call(e, "string");
                if ("object" != typeof t)
                    return t;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }(r.key)) ? s : String(s), r)
        }
    }
    function _e(e, t, s) {
        t && ke(e.prototype, t),
        s && ke(e, s),
        Object.defineProperty(e, "prototype", {
            writable: !1
        })
    }
    function $e() {
        return ($e = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var s, i = arguments[t];
                for (s in i)
                    Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function Ee(e, t, s) {
        return Math.max(e, Math.min(t, s))
    }
    customElements.define("core-slide", class extends e {
        detached() {
            this.parentSlideshow && this.parentSlideshow.removeSlide(this)
        }
        ready() {
            let e = this;
            for (; e != document.documentElement && e.parentNode; ) {
                if (e.parentNode.addSlide) {
                    e.parentNode.addSlide(this),
                    this.parentSlideshow = e.parentNode;
                    break
                }
                e = e.parentNode
            }
        }
    }
    );
    var Ae = function() {
        function e() {}
        var t = e.prototype;
        return t.advance = function(e) {
            var t, s, i, r;
            this.isRunning && (s = !1,
            this.lerp ? (this.value = (i = this.value,
            t = this.to,
            (1 - (r = 1 - Math.exp(-60 * this.lerp * e))) * i + r * t),
            Math.round(this.value) === this.to && (this.value = this.to,
            s = !0)) : (this.currentTime += e,
            r = (s = 1 <= (i = Ee(0, this.currentTime / this.duration, 1))) ? 1 : this.easing(i),
            this.value = this.from + (this.to - this.from) * r),
            null != (t = this.onUpdate) && t.call(this, this.value, {
                completed: s
            }),
            s) && this.stop()
        }
        ,
        t.stop = function() {
            this.isRunning = !1
        }
        ,
        t.fromTo = function(e, t, s) {
            var i = s.lerp
              , i = void 0 === i ? .1 : i
              , r = s.duration
              , r = void 0 === r ? 1 : r
              , n = s.easing
              , n = void 0 === n ? function(e) {
                return e
            }
            : n
              , s = s.onUpdate;
            this.from = this.value = e,
            this.to = t,
            this.lerp = i,
            this.duration = r,
            this.easing = n,
            this.currentTime = 0,
            this.isRunning = !0,
            this.onUpdate = s
        }
        ,
        e
    }()
      , Ce = function() {
        function e(e) {
            var s, i, t = this, e = void 0 === e ? {} : e, r = e.wrapper, n = e.content, e = e.autoResize, e = void 0 === e || e;
            this.resize = function() {
                t.onWrapperResize(),
                t.onContentResize()
            }
            ,
            this.onWrapperResize = function() {
                t.wrapper === window ? (t.width = window.innerWidth,
                t.height = window.innerHeight) : (t.width = t.wrapper.clientWidth,
                t.height = t.wrapper.clientHeight)
            }
            ,
            this.onContentResize = function() {
                t.scrollHeight = t.content.scrollHeight,
                t.scrollWidth = t.content.scrollWidth
            }
            ,
            this.wrapper = r,
            this.content = n,
            e && (s = this.resize,
            r = function() {
                var e = arguments
                  , t = this;
                clearTimeout(i),
                i = setTimeout(function() {
                    s.apply(t, e)
                }, 250)
            }
            ,
            this.wrapper !== window && (this.wrapperResizeObserver = new ResizeObserver(r),
            this.wrapperResizeObserver.observe(this.wrapper)),
            this.contentResizeObserver = new ResizeObserver(r),
            this.contentResizeObserver.observe(this.content)),
            this.resize()
        }
        return e.prototype.destroy = function() {
            var e;
            null != (e = this.wrapperResizeObserver) && e.disconnect(),
            null != (e = this.contentResizeObserver) && e.disconnect()
        }
        ,
        _e(e, [{
            key: "limit",
            get: function() {
                return {
                    x: this.scrollWidth - this.width,
                    y: this.scrollHeight - this.height
                }
            }
        }]),
        e
    }()
      , Fe = function() {
        function e() {
            this.events = {}
        }
        var t = e.prototype;
        return t.emit = function(e) {
            for (var t = this.events[e] || [], s = 0, i = t.length; s < i; s++)
                t[s].apply(t, [].slice.call(arguments, 1))
        }
        ,
        t.on = function(t, s) {
            var e, i = this;
            return null != (e = this.events[t]) && e.push(s) || (this.events[t] = [s]),
            function() {
                var e;
                i.events[t] = null == (e = i.events[t]) ? void 0 : e.filter(function(e) {
                    return s !== e
                })
            }
        }
        ,
        t.destroy = function() {
            this.events = {}
        }
        ,
        e
    }()
      , Se = function() {
        function e(e, t) {
            var n = this
              , s = t.wheelMultiplier
              , s = void 0 === s ? 1 : s
              , i = t.touchMultiplier
              , i = void 0 === i ? 2 : i
              , t = t.normalizeWheel
              , t = void 0 !== t && t;
            this.onTouchStart = function(e) {
                var e = e.targetTouches ? e.targetTouches[0] : e
                  , t = e.clientY;
                n.touchStart.x = e.clientX,
                n.touchStart.y = t,
                n.lastDelta = {
                    x: 0,
                    y: 0
                }
            }
            ,
            this.onTouchMove = function(e) {
                var t = e.targetTouches ? e.targetTouches[0] : e
                  , s = t.clientX
                  , t = t.clientY
                  , i = -(s - n.touchStart.x) * n.touchMultiplier
                  , r = -(t - n.touchStart.y) * n.touchMultiplier;
                n.touchStart.x = s,
                n.touchStart.y = t,
                n.lastDelta = {
                    x: i,
                    y: r
                },
                n.emitter.emit("scroll", {
                    type: "touch",
                    deltaX: i,
                    deltaY: r,
                    event: e
                })
            }
            ,
            this.onTouchEnd = function(e) {
                n.emitter.emit("scroll", {
                    type: "touch",
                    inertia: !0,
                    deltaX: n.lastDelta.x,
                    deltaY: n.lastDelta.y,
                    event: e
                })
            }
            ,
            this.onWheel = function(e) {
                var t = e.deltaX
                  , s = e.deltaY;
                n.normalizeWheel && (t = Ee(-100, t, 100),
                s = Ee(-100, s, 100)),
                n.emitter.emit("scroll", {
                    type: "wheel",
                    deltaX: t *= n.wheelMultiplier,
                    deltaY: s *= n.wheelMultiplier,
                    event: e
                })
            }
            ,
            this.element = e,
            this.wheelMultiplier = s,
            this.touchMultiplier = i,
            this.normalizeWheel = t,
            this.touchStart = {
                x: null,
                y: null
            },
            this.emitter = new Fe,
            this.element.addEventListener("wheel", this.onWheel, {
                passive: !1
            }),
            this.element.addEventListener("touchstart", this.onTouchStart, {
                passive: !1
            }),
            this.element.addEventListener("touchmove", this.onTouchMove, {
                passive: !1
            }),
            this.element.addEventListener("touchend", this.onTouchEnd, {
                passive: !1
            })
        }
        var t = e.prototype;
        return t.on = function(e, t) {
            return this.emitter.on(e, t)
        }
        ,
        t.destroy = function() {
            this.emitter.destroy(),
            this.element.removeEventListener("wheel", this.onWheel, {
                passive: !1
            }),
            this.element.removeEventListener("touchstart", this.onTouchStart, {
                passive: !1
            }),
            this.element.removeEventListener("touchmove", this.onTouchMove, {
                passive: !1
            }),
            this.element.removeEventListener("touchend", this.onTouchEnd, {
                passive: !1
            })
        }
        ,
        e
    }();
    const s = new (function() {
        function e(e) {
            var o = this
              , e = void 0 === e ? {} : e
              , t = e.wrapper
              , t = void 0 === t ? window : t
              , s = e.content
              , s = void 0 === s ? document.documentElement : s
              , i = e.wheelEventsTarget
              , i = void 0 === i ? t : i
              , r = e.smoothWheel
              , r = void 0 === r || r
              , n = e.smoothTouch
              , n = void 0 !== n && n
              , a = e.syncTouch
              , a = void 0 !== a && a
              , l = e.syncTouchLerp
              , l = void 0 === l ? .1 : l
              , c = e.__iosNoInertiaSyncTouchLerp
              , c = void 0 === c ? .4 : c
              , d = e.touchInertiaMultiplier
              , d = void 0 === d ? 35 : d
              , h = e.duration
              , f = e.easing
              , f = void 0 === f ? function(e) {
                return Math.min(1, 1.001 - Math.pow(2, -10 * e))
            }
            : f
              , p = e.lerp
              , p = void 0 === p ? h && .1 : p
              , u = e.infinite
              , u = void 0 !== u && u
              , m = e.orientation
              , m = void 0 === m ? "vertical" : m
              , g = e.gestureOrientation
              , g = void 0 === g ? "vertical" : g
              , v = e.touchMultiplier
              , v = void 0 === v ? 1 : v
              , b = e.wheelMultiplier
              , b = void 0 === b ? 1 : b
              , w = e.normalizeWheel
              , w = void 0 !== w && w
              , e = e.autoResize
              , e = void 0 === e || e;
            this.onVirtualScroll = function(e) {
                var t, s, i = e.type, r = e.inertia, n = e.deltaX, a = e.deltaY, e = e.event;
                e.ctrlKey || (t = "touch" === i,
                s = "wheel" === i,
                "vertical" === o.options.gestureOrientation && 0 === a) || "horizontal" === o.options.gestureOrientation && 0 === n || t && "vertical" === o.options.gestureOrientation && 0 === o.scroll && !o.options.infinite && a <= 0 || e.composedPath().find(function(e) {
                    return (null == e || null == e.hasAttribute ? void 0 : e.hasAttribute("data-lenis-prevent")) || t && (null == e || null == e.hasAttribute ? void 0 : e.hasAttribute("data-lenis-prevent-touch")) || s && (null == e || null == e.hasAttribute ? void 0 : e.hasAttribute("data-lenis-prevent-wheel"))
                }) || (o.isStopped || o.isLocked ? e.preventDefault() : (o.isSmooth = (o.options.smoothTouch || o.options.syncTouch) && t || o.options.smoothWheel && s,
                o.isSmooth ? (e.preventDefault(),
                i = a,
                "both" === o.options.gestureOrientation ? i = Math.abs(a) > Math.abs(n) ? a : n : "horizontal" === o.options.gestureOrientation && (i = n),
                e = t && o.options.syncTouch,
                (a = t && r && 1 < Math.abs(i)) && (i = o.velocity * o.options.touchInertiaMultiplier),
                o.scrollTo(o.targetScroll + i, $e({
                    programmatic: !1
                }, e && {
                    lerp: a ? o.syncTouchLerp : o.options.__iosNoInertiaSyncTouchLerp
                }))) : (o.isScrolling = !1,
                o.animate.stop())))
            }
            ,
            this.onScroll = function() {
                var e;
                o.isScrolling || (e = o.animatedScroll,
                o.animatedScroll = o.targetScroll = o.actualScroll,
                o.velocity = 0,
                o.direction = Math.sign(o.animatedScroll - e),
                o.emit())
            }
            ,
            window.lenisVersion = "1.0.19",
            t !== document.documentElement && t !== document.body || (t = window),
            this.options = {
                wrapper: t,
                content: s,
                wheelEventsTarget: i,
                smoothWheel: r,
                smoothTouch: n,
                syncTouch: a,
                syncTouchLerp: l,
                __iosNoInertiaSyncTouchLerp: c,
                touchInertiaMultiplier: d,
                duration: h,
                easing: f,
                lerp: p,
                infinite: u,
                gestureOrientation: g,
                orientation: m,
                touchMultiplier: v,
                wheelMultiplier: b,
                normalizeWheel: w,
                autoResize: e
            },
            this.dimensions = new Ce({
                wrapper: t,
                content: s,
                autoResize: e
            }),
            this.rootElement.classList.add("lenis"),
            this.velocity = 0,
            this.isStopped = !1,
            this.isSmooth = r || n,
            this.isScrolling = !1,
            this.targetScroll = this.animatedScroll = this.actualScroll,
            this.animate = new Ae,
            this.emitter = new Fe,
            this.options.wrapper.addEventListener("scroll", this.onScroll, {
                passive: !1
            }),
            this.virtualScroll = new Se(i,{
                touchMultiplier: v,
                wheelMultiplier: b,
                normalizeWheel: w
            }),
            this.virtualScroll.on("scroll", this.onVirtualScroll)
        }
        var t = e.prototype;
        return t.destroy = function() {
            this.emitter.destroy(),
            this.options.wrapper.removeEventListener("scroll", this.onScroll, {
                passive: !1
            }),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.rootElement.classList.remove("lenis"),
            this.rootElement.classList.remove("lenis-smooth"),
            this.rootElement.classList.remove("lenis-scrolling"),
            this.rootElement.classList.remove("lenis-stopped")
        }
        ,
        t.on = function(e, t) {
            return this.emitter.on(e, t)
        }
        ,
        t.off = function(e, t) {
            this.emitter.events[e] = null == (e = this.emitter.events[e]) ? void 0 : e.filter(function(e) {
                return t !== e
            })
        }
        ,
        t.setScroll = function(e) {
            this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
        }
        ,
        t.resize = function() {
            this.dimensions.resize()
        }
        ,
        t.emit = function() {
            this.emitter.emit("scroll", this)
        }
        ,
        t.reset = function() {
            this.isLocked = !1,
            this.isScrolling = !1,
            this.velocity = 0,
            this.animate.stop()
        }
        ,
        t.start = function() {
            this.isStopped = !1,
            this.reset()
        }
        ,
        t.stop = function() {
            this.isStopped = !0,
            this.animate.stop(),
            this.reset()
        }
        ,
        t.raf = function(e) {
            var t = e - (this.time || e);
            this.time = e,
            this.animate.advance(.001 * t)
        }
        ,
        t.scrollTo = function(e, t) {
            var s, i = this, t = void 0 === t ? {} : t, r = t.offset, r = void 0 === r ? 0 : r, n = t.immediate, n = void 0 !== n && n, a = t.lock, o = void 0 !== a && a, a = t.duration, a = void 0 === a ? this.options.duration : a, l = t.easing, l = void 0 === l ? this.options.easing : l, c = t.lerp, c = void 0 === c ? !a && this.options.lerp : c, d = t.onComplete, h = void 0 === d ? null : d, d = t.force, t = t.programmatic, f = void 0 === t || t;
            if ((!this.isStopped || void 0 !== d && d) && (["top", "left", "start"].includes(e) ? e = 0 : ["bottom", "right", "end"].includes(e) ? e = this.limit : ("string" == typeof e ? s = document.querySelector(e) : null != e && e.nodeType && (s = e),
            s && (this.options.wrapper !== window && (t = this.options.wrapper.getBoundingClientRect(),
            r -= this.isHorizontal ? t.left : t.top),
            d = s.getBoundingClientRect(),
            e = (this.isHorizontal ? d.left : d.top) + this.animatedScroll)),
            "number" == typeof e))
                if (e += r,
                e = Math.round(e),
                this.options.infinite ? f && (this.targetScroll = this.animatedScroll = this.scroll) : e = Ee(0, e, this.limit),
                n)
                    this.animatedScroll = this.targetScroll = e,
                    this.setScroll(this.scroll),
                    this.reset(),
                    this.emit(),
                    null != h && h();
                else {
                    if (!f) {
                        if (e === this.targetScroll)
                            return;
                        this.targetScroll = e
                    }
                    this.animate.fromTo(this.animatedScroll, e, {
                        duration: a,
                        easing: l,
                        lerp: c,
                        onUpdate: function(e, t) {
                            t = t.completed;
                            o && (i.isLocked = !0),
                            i.isScrolling = !0,
                            i.velocity = e - i.animatedScroll,
                            i.direction = Math.sign(i.velocity),
                            i.animatedScroll = e,
                            i.setScroll(i.scroll),
                            f && (i.targetScroll = e),
                            t && (o && (i.isLocked = !1),
                            requestAnimationFrame(function() {
                                i.isScrolling = !1
                            }),
                            i.velocity = 0,
                            null != h) && h(),
                            i.emit()
                        }
                    })
                }
        }
        ,
        _e(e, [{
            key: "rootElement",
            get: function() {
                return this.options.wrapper === window ? this.options.content : this.options.wrapper
            }
        }, {
            key: "limit",
            get: function() {
                return this.dimensions.limit[this.isHorizontal ? "x" : "y"]
            }
        }, {
            key: "isHorizontal",
            get: function() {
                return "horizontal" === this.options.orientation
            }
        }, {
            key: "actualScroll",
            get: function() {
                return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
            }
        }, {
            key: "scroll",
            get: function() {
                return this.options.infinite ? (this.animatedScroll % (e = this.limit) + e) % e : this.animatedScroll;
                var e
            }
        }, {
            key: "progress",
            get: function() {
                return 0 === this.limit ? 1 : this.scroll / this.limit
            }
        }, {
            key: "isSmooth",
            get: function() {
                return this.__isSmooth
            },
            set: function(e) {
                this.__isSmooth !== e && (this.rootElement.classList.toggle("lenis-smooth", e),
                this.__isSmooth = e)
            }
        }, {
            key: "isScrolling",
            get: function() {
                return this.__isScrolling
            },
            set: function(e) {
                this.__isScrolling !== e && (this.rootElement.classList.toggle("lenis-scrolling", e),
                this.__isScrolling = e)
            }
        }, {
            key: "isStopped",
            get: function() {
                return this.__isStopped
            },
            set: function(e) {
                this.__isStopped !== e && (this.rootElement.classList.toggle("lenis-stopped", e),
                this.__isStopped = e)
            }
        }]),
        e
    }())({
        wrapper: document.body
    });
    new ResizeObserver(e=>{
        s.reset(),
        s.resize()
    }
    ).observe(document.body),
    requestAnimationFrame(function e(t) {
        s.raf(t),
        requestAnimationFrame(e)
    });
    const c = {
        heading1: "heading1",
        heading2: "heading2",
        heading3: "heading3",
        heading4: "heading4",
        heading5: "heading5",
        heading6: "heading6",
        paragraph: "paragraph",
        preformatted: "preformatted",
        strong: "strong",
        em: "em",
        listItem: "list-item",
        oListItem: "o-list-item",
        list: "group-list-item",
        oList: "group-o-list-item",
        image: "image",
        embed: "embed",
        hyperlink: "hyperlink",
        label: "label",
        span: "span"
    }
      , a = {
        Any: "Any",
        Document: "Document",
        Media: "Media",
        Web: "Web"
    }
      , Le = (e,t)=>{
        if (!e)
            return null;
        var s, i = "link_type"in e ? e : (e = e,
        {
            link_type: a.Document,
            id: e.id,
            uid: e.uid ?? void 0,
            type: e.type,
            tags: e.tags,
            lang: e.lang,
            url: e.url ?? void 0,
            slug: null == (s = e.slugs) ? void 0 : s[0],
            ...e.data && 0 < Object.keys(e.data).length ? {
                data: e.data
            } : {}
        });
        switch (i.link_type) {
        case a.Media:
        case a.Web:
            return "url"in i ? i.url : null;
        case a.Document:
            if ("id"in i && t) {
                var r = t(i);
                if (null != r)
                    return r
            }
            return "url"in i && i.url ? i.url : null;
        default:
            a.Any;
            return null
        }
    }
      , Oe = ()=>(++Oe.i).toString()
      , je = (Oe.i = 0,
    e=>{
        var t = (e=>{
            const t = e.slice(0);
            for (let e = 0; e < t.length; e++) {
                const s = t[e];
                if (s.type === c.listItem || s.type === c.oListItem) {
                    const i = [s];
                    while (t[e + 1] && t[e + 1].type === s.type) {
                        i.push(t[e + 1]);
                        t.splice(e, 1)
                    }
                    if (s.type === c.listItem)
                        t[e] = {
                            type: c.list,
                            items: i
                        };
                    else
                        t[e] = {
                            type: c.oList,
                            items: i
                        }
                }
            }
            return t
        }
        )(e)
          , s = [];
        for (let e = 0; e < t.length; e++)
            s.push(Me(t[e]));
        return {
            key: Oe(),
            children: s
        }
    }
    )
      , Te = (e,t=[])=>({
        key: Oe(),
        type: e.type,
        text: "text"in e ? e.text : void 0,
        node: e,
        children: t
    })
      , Pe = e=>Te({
        type: c.span,
        text: e,
        spans: []
    })
      , Me = t=>{
        if ("text"in t)
            return Te(t, ze(t.spans, t));
        if ("items"in t) {
            var s = [];
            for (let e = 0; e < t.items.length; e++)
                s.push(Me(t.items[e]));
            return Te(t, s)
        }
        return Te(t)
    }
      , ze = (e,s,i)=>{
        if (!e.length)
            return [Pe(s.text)];
        var r = e.slice(0)
          , n = (r.sort((e,t)=>e.start - t.start || t.end - e.end),
        []);
        for (let t = 0; t < r.length; t++) {
            var a = r[t]
              , o = i && i.start || 0
              , l = a.start - o
              , c = a.end - o
              , d = s.text.slice(l, c)
              , h = [];
            for (let e = t; e < r.length; e++) {
                var f = r[e];
                f !== a && (f.start >= a.start && f.end <= a.end ? (h.push(f),
                r.splice(e, 1),
                e--) : f.start < a.end && f.end > a.start && (h.push({
                    ...f,
                    end: a.end
                }),
                r[e] = {
                    ...f,
                    start: a.end
                }))
            }
            0 === t && 0 < l && n.push(Pe(s.text.slice(0, l)));
            l = {
                ...a,
                text: d
            };
            n.push(Te(l, ze(h, {
                ...s,
                text: d
            }, a))),
            c < s.text.length && n.push(Pe(s.text.slice(c, r[t + 1] ? r[t + 1].start - o : void 0)))
        }
        return n
    }
      , Re = (e,t)=>Be(je(e).children, t)
      , Be = (t,s)=>{
        var i = [];
        for (let e = 0; e < t.length; e++) {
            var r = t[e]
              , r = s(r.type, r.node, r.text, Be(r.children, s), r.key);
            null != r && i.push(r)
        }
        return i
    }
      , Ne = {
        [c.listItem]: "listItem",
        [c.oListItem]: "oListItem",
        [c.list]: "list",
        [c.oList]: "oList"
    }
      , Ie = (...i)=>(...t)=>{
        for (let e = 0; e < i.length; e++) {
            var s = i[e];
            if (s) {
                s = s(...t);
                if (null != s)
                    return s
            }
        }
    }
      , He = /["'&<>]/
      , De = e=>{
        var t = "" + e
          , e = He.exec(t);
        if (!e)
            return t;
        let s, i = "", r = 0, n = 0;
        for (r = e.index; r < t.length; r++) {
            switch (t.charCodeAt(r)) {
            case 34:
                s = "&quot;";
                break;
            case 38:
                s = "&amp;";
                break;
            case 39:
                s = "&#39;";
                break;
            case 60:
                s = "&lt;";
                break;
            case 62:
                s = "&gt;";
                break;
            default:
                continue
            }
            n !== r && (i += t.substring(n, r)),
            n = r + 1,
            i += s
        }
        return n !== r ? i + t.substring(n, r) : i
    }
      , qe = e=>"data"in e && "label"in e.data ? ` class="${e.data.label}"` : ""
      , d = (e,t,s)=>`<${e}${qe(t)}>${s.join("")}</${e}>`
      , Ve = (e,t,s)=>{
        switch (t.data.link_type) {
        case a.Web:
            return `<a href="${De(t.data.url)}" ${t.data.target ? `target="${t.data.target}" ` : ""}rel="noopener noreferrer"${qe(t)}>${s.join("")}</a>`;
        case a.Document:
            return `<a href="${Le(t.data, e)}"${qe(t)}>${s.join("")}</a>`;
        case a.Media:
            return `<a href="${t.data.url}"${qe(t)}>${s.join("")}</a>`
        }
    }
      , We = l=>(e,t,s,i,r)=>{
        switch (t.type) {
        case c.heading1:
            return d("h1", t, i);
        case c.heading2:
            return d("h2", t, i);
        case c.heading3:
            return d("h3", t, i);
        case c.heading4:
            return d("h4", t, i);
        case c.heading5:
            return d("h5", t, i);
        case c.heading6:
            return d("h6", t, i);
        case c.paragraph:
            return d("p", t, i);
        case c.preformatted:
            return o = t,
            `<pre${qe(o)}>${De(o.text)}</pre>`;
        case c.strong:
            return d("strong", t, i);
        case c.em:
            return d("em", t, i);
        case c.listItem:
        case c.oListItem:
            return d("li", t, i);
        case c.list:
            return d("ul", t, i);
        case c.oList:
            return d("ol", t, i);
        case c.image:
            {
                o = l;
                var n = t;
                let e = `<img src="${n.url}" alt="${De(n.alt)}"${n.copyright ? ` copyright="${De(n.copyright)}"` : ""} />`;
                return `<p class="block-img">${e = n.linkTo ? Ve(o, {
                    type: c.hyperlink,
                    data: n.linkTo,
                    start: 0,
                    end: 0
                }, [e]) : e}</p>`;
                return
            }
        case c.embed:
            return `<div data-oembed="${(n = t).oembed.embed_url}" data-oembed-type="${n.oembed.type}" data-oembed-provider="${n.oembed.provider_name}"${qe(n)}>${n.oembed.html}</div>`;
        case c.hyperlink:
            return Ve(l, t, i);
        case c.label:
            return d("span", t, i);
        default:
            c.span;
            return (a = s) ? De(a).replace(/\n/g, "<br />") : ""
        }
        var a, o
    }
      , Ze = e=>{
        var a, t = {};
        for (const s in e) {
            const i = e[s];
            i && (t[s] = e=>i({
                ...e,
                children: e.children.join("")
            }))
        }
        return a = t,
        (e,t,s,i,r)=>{
            var n = a[Ne[e] || e];
            if (n)
                return n({
                    type: e,
                    node: t,
                    text: s,
                    children: i,
                    key: r
                })
        }
    }
      , Xe = (e,t)=>{
        var s = new URL(e);
        for (const n in t) {
            var i = n.replace(/[A-Z]/g, e=>"-" + e.toLowerCase())
              , r = t[n];
            void 0 === r ? s.searchParams.delete(i) : Array.isArray(r) ? s.searchParams.set(i, r.join(",")) : s.searchParams.set(i, "" + r)
        }
        e = s.searchParams.get("s");
        return e && (s.searchParams.delete("s"),
        s.searchParams.append("s", e)),
        s.toString()
    }
      , Ue = (t,{widths: e, ...s})=>e.map(e=>Xe(t, {
        ...s,
        w: void 0,
        width: e
    }) + ` ${e}w`).join(", ")
      , Ye = e=>null != e && !!e.url
      , Qe = [640, 828, 1200, 2048, 3840];
    class i extends Error {
        constructor(e="An invalid API response was returned", t, s) {
            super(e),
            this.url = t,
            this.response = s
        }
    }
    const Ge = e=>{
        if (/^[a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]$/.test(e))
            return `https://${e}.cdn.prismic.io/api/v2`;
        throw new i("An invalid Prismic repository name was given: " + e,void 0,void 0)
    }
      , h = e=>Array.isArray(e) ? e : [e]
      , Je = {
        accessToken: "access_token"
    }
      , Ke = (e,t)=>{
        const {predicates: s, ...i} = t;
        var r = new URL("documents/search",e + "/");
        if (s)
            for (const o of h(s))
                r.searchParams.append("q", `[${o}]`);
        for (const l in i) {
            var n, a = null != (a = Je[l]) ? a : l;
            let e = i[l];
            "orderings" === a ? null != (n = i[a]) && (n = h(n).map(e=>{
                return "string" == typeof (e = e) ? e : [e.field, "desc" === e.direction ? e.direction : void 0].filter(Boolean).join(" ")
            }
            ).join(","),
            e = `[${n}]`) : "routes" === a && "object" == typeof i[a] && (e = JSON.stringify(h(i[a]))),
            null != e && r.searchParams.set(a, h(e).join(","))
        }
        return r.toString()
    }
      , r = (e={},t)=>({
        ...e,
        predicates: [...e.predicates || [], ...h(t)]
    })
      , et = (e,t)=>{
        e = e.find(e=>t(e));
        if (e)
            return e;
        throw new i("Ref could not be found.",void 0,void 0)
    }
      , tt = e=>et(e, e=>e.isMasterRef)
      , st = (e,t)=>et(e, e=>e.id === t)
      , it = (e,t)=>et(e, e=>e.label === t)
      , rt = e=>e.replace(/%3B/g, ";")
      , nt = e=>{
        var t = {};
        for (const r of e.split("; ")) {
            var s = r.split("=")
              , i = s.slice(1).join("=");
            t[rt(s[0]).replace(/%3D/g, "=")] = rt(i)
        }
        return t
    }
      , at = (e,t)=>{
        return t = t,
        nt(t)[e]
    }
      , ot = "io.prismic.preview";
    class lt extends i {
    }
    class ct extends i {
    }
    class dt extends i {
    }
    const ht = e=>Array.isArray(e) ? `[${e.map(ht).join(", ")}]` : "string" == typeof e ? `"${e}"` : e instanceof Date ? "" + e.getTime() : "" + e
      , l = i=>{
        return (e,...t)=>{
            var s = t.map(ht).join(", ")
              , t = e && t.length ? ", " : "";
            return `[${i}(${e}${t}${s})]`
        }
    }
    ;
    var t = e=>{
        const t = l(e);
        return e=>t(e)
    }
    ;
    const f = {
        at: l("at"),
        not: l("not"),
        any: l("any"),
        in: l("in"),
        fulltext: l("fulltext"),
        has: t("has"),
        missing: t("missing"),
        similar: (e=>{
            const t = l(e);
            return (...e)=>t("", ...e)
        }
        )("similar"),
        geopointNear: l("geopoint.near"),
        numberLessThan: l("number.lt"),
        numberGreaterThan: l("number.gt"),
        numberInRange: l("number.inRange"),
        dateAfter: l("date.after"),
        dateBefore: l("date.before"),
        dateBetween: l("date.between"),
        dateDayOfMonth: l("date.day-of-month"),
        dateDayOfMonthAfter: l("date.day-of-month-after"),
        dateDayOfMonthBefore: l("date.day-of-month-before"),
        dateDayOfWeek: l("date.day-of-week"),
        dateDayOfWeekAfter: l("date.day-of-week-after"),
        dateDayOfWeekBefore: l("date.day-of-week-before"),
        dateMonth: l("date.month"),
        dateMonthAfter: l("date.month-after"),
        dateMonthBefore: l("date.month-before"),
        dateYear: l("date.year"),
        dateHour: l("date.hour"),
        dateHourAfter: l("date.hour-after"),
        dateHourBefore: l("date.hour-before")
    }
      , ft = e=>f.at("document.type", e)
      , pt = e=>f.at("document.tags", h(e))
      , ut = e=>f.any("document.tags", h(e));
    t = (...e)=>new mt(...e);
    class mt {
        constructor(e, t={}) {
            if (this.refState = {
                mode: "Master",
                autoPreviewsEnabled: !0
            },
            this.cachedRepositoryExpiration = 0,
            this.graphqlFetch = this.graphQLFetch.bind(this),
            (e=>{
                try {
                    return new URL(e),
                    !0
                } catch (e) {
                    return !1
                }
            }
            )(e)) {
                if ("development" === process.env.NODE_ENV && /\.prismic\.io\/(?!api\/v2\/?)/.test(e))
                    throw new i("@prismicio/client only supports Prismic Rest API V2. Please provide only the repository name to the first createClient() parameter or use the getRepositoryEndpoint() helper to generate a valid Rest API V2 endpoint URL.",void 0,void 0);
                this.endpoint = e
            } else
                this.endpoint = Ge(e);
            if (this.accessToken = t.accessToken,
            this.routes = t.routes,
            this.defaultParams = t.defaultParams,
            t.ref && this.queryContentFromRef(t.ref),
            "function" == typeof t.fetch)
                this.fetchFn = t.fetch;
            else {
                if ("function" != typeof globalThis.fetch)
                    throw new i("A valid fetch implementation was not provided. In environments where fetch is not available (including Node.js), a fetch implementation must be provided via a polyfill or the `fetch` option.",void 0,void 0);
                this.fetchFn = globalThis.fetch
            }
            this.fetchFn === globalThis.fetch && (this.fetchFn = this.fetchFn.bind(globalThis)),
            this.graphQLFetch = this.graphQLFetch.bind(this)
        }
        enableAutoPreviews() {
            this.refState.autoPreviewsEnabled = !0
        }
        enableAutoPreviewsFromReq(e) {
            this.refState.httpRequest = e,
            this.refState.autoPreviewsEnabled = !0
        }
        disableAutoPreviews() {
            this.refState.autoPreviewsEnabled = !1
        }
        async query(e, t) {
            e = await this.buildQueryURL({
                ...t,
                predicates: e
            });
            return this.fetch(e, t)
        }
        async get(e) {
            var t = await this.buildQueryURL(e);
            return this.fetch(t, e)
        }
        async getFirst(e) {
            var t = await this.buildQueryURL(e)
              , e = (await this.fetch(t, e)).results[0];
            if (e)
                return e;
            throw new i("No documents were returned",t,void 0)
        }
        async dangerouslyGetAll(e={}) {
            const {limit: t=1 / 0, ...s} = e;
            var i = {
                ...s,
                pageSize: Math.min(t, s.pageSize || (null == (e = this.defaultParams) ? void 0 : e.pageSize) || 100)
            }
              , r = [];
            let n;
            for (; (!n || n.next_page) && r.length < t; ) {
                var a = n ? n.page + 1 : void 0;
                n = await this.get({
                    ...i,
                    page: a
                }),
                r.push(...n.results),
                n.next_page && await new Promise(e=>setTimeout(e, 500))
            }
            return r.slice(0, t)
        }
        async getByID(e, t) {
            return this.getFirst(r(t, f.at("document.id", e)))
        }
        async getByIDs(e, t) {
            return this.get(r(t, f.in("document.id", e)))
        }
        async getAllByIDs(e, t) {
            return this.dangerouslyGetAll(r(t, f.in("document.id", e)))
        }
        async getByUID(e, t, s) {
            return this.getFirst(r(s, [ft(e), f.at(`my.${e}.uid`, t)]))
        }
        async getByUIDs(e, t, s) {
            return this.get(r(s, [ft(e), f.in(`my.${e}.uid`, t)]))
        }
        async getAllByUIDs(e, t, s) {
            return this.dangerouslyGetAll(r(s, [ft(e), f.in(`my.${e}.uid`, t)]))
        }
        async getSingle(e, t) {
            return this.getFirst(r(t, ft(e)))
        }
        async getByType(e, t) {
            return this.get(r(t, ft(e)))
        }
        async getAllByType(e, t) {
            return this.dangerouslyGetAll(r(t, ft(e)))
        }
        async getByTag(e, t) {
            return this.get(r(t, ut(e)))
        }
        async getAllByTag(e, t) {
            return this.dangerouslyGetAll(r(t, ut(e)))
        }
        async getByEveryTag(e, t) {
            return this.get(r(t, pt(e)))
        }
        async getAllByEveryTag(e, t) {
            return this.dangerouslyGetAll(r(t, pt(e)))
        }
        async getBySomeTags(e, t) {
            return this.get(r(t, ut(e)))
        }
        async getAllBySomeTags(e, t) {
            return this.dangerouslyGetAll(r(t, ut(e)))
        }
        async getRepository(e) {
            var t = new URL(this.endpoint);
            return this.accessToken && t.searchParams.set("access_token", this.accessToken),
            this.fetch(t.toString(), e)
        }
        async getRefs(e) {
            return (await this.getRepository(e)).refs
        }
        async getRefByID(e, t) {
            t = await this.getRefs(t);
            return st(t, e)
        }
        async getRefByLabel(e, t) {
            t = await this.getRefs(t);
            return it(t, e)
        }
        async getMasterRef(e) {
            e = await this.getRefs(e);
            return tt(e)
        }
        async getReleases(e) {
            return (await this.getRefs(e)).filter(e=>!e.isMasterRef)
        }
        async getReleaseByID(e, t) {
            t = await this.getReleases(t);
            return st(t, e)
        }
        async getReleaseByLabel(e, t) {
            t = await this.getReleases(t);
            return it(t, e)
        }
        async getTags(t) {
            try {
                var e = await this.getCachedRepositoryForm("tags", t);
                return await this.fetch(e.action)
            } catch (e) {
                return (await this.getRepository(t)).tags
            }
        }
        async buildQueryURL({signal: e, ...t}={}) {
            var s = t.ref || await this.getResolvedRefString()
              , e = t.integrationFieldsRef || (await this.getCachedRepository({
                signal: e
            })).integrationFieldsRef || void 0;
            return Ke(this.endpoint, {
                ...this.defaultParams,
                ...t,
                ref: s,
                integrationFieldsRef: e,
                routes: t.routes || this.routes,
                accessToken: t.accessToken || this.accessToken
            })
        }
        async resolvePreviewURL(e) {
            let t = e.documentID
              , s = e.previewToken;
            if (void 0 !== globalThis.location ? (i = new URLSearchParams(globalThis.location.search),
            t = t || i.get("documentId") || void 0,
            s = s || i.get("token") || void 0) : null != (i = this.refState.httpRequest) && i.query && (t = t || this.refState.httpRequest.query.documentId,
            s = s || this.refState.httpRequest.query.token),
            null != t && null != s) {
                var i = await this.getByID(t, {
                    signal: e.signal,
                    ref: s,
                    lang: "*"
                })
                  , i = Le(i, e.linkResolver);
                if ("string" == typeof i)
                    return i
            }
            return e.defaultURL
        }
        queryLatestContent() {
            this.refState.mode = "Master"
        }
        queryContentFromReleaseByID(e) {
            this.refState = {
                ...this.refState,
                mode: "ReleaseID",
                releaseID: e
            }
        }
        queryContentFromReleaseByLabel(e) {
            this.refState = {
                ...this.refState,
                mode: "ReleaseLabel",
                releaseLabel: e
            }
        }
        queryContentFromRef(e) {
            this.refState = {
                ...this.refState,
                mode: "Manual",
                ref: e
            }
        }
        async graphQLFetch(e, t) {
            var s = await this.getCachedRepository()
              , i = await this.getResolvedRefString()
              , r = {
                "Prismic-ref": i,
                "Prismic-integration-field-ref": s.integrationFieldsRef || "",
                Authorization: this.accessToken ? "Token " + this.accessToken : "",
                ...t ? t.headers : {}
            }
              , n = {};
            for (const a in r)
                r[a] && (n[a.toLowerCase()] = r[a]);
            s = new URL(e),
            s.searchParams.set("ref", i),
            e = s.searchParams.get("query");
            return e && s.searchParams.set("query", e.replace(/(\n| )*( |{|})(\n| )*/gm, (e,t,s)=>s)),
            this.fetchFn(s.toString(), {
                ...t,
                headers: n
            })
        }
        async getCachedRepository(e) {
            return (!this.cachedRepository || Date.now() >= this.cachedRepositoryExpiration) && (this.cachedRepositoryExpiration = Date.now() + 5e3,
            this.cachedRepository = await this.getRepository(e)),
            this.cachedRepository
        }
        async getCachedRepositoryForm(e, t) {
            t = (await this.getCachedRepository(t)).forms[e];
            if (t)
                return t;
            throw new i(`Form with name "${e}" could not be found`,void 0,void 0)
        }
        async getResolvedRefString(e) {
            if (this.refState.autoPreviewsEnabled) {
                let e = void 0;
                if (null != (s = globalThis.document) && s.cookie ? e = at(ot, globalThis.document.cookie) : null != (s = null == (s = this.refState.httpRequest) ? void 0 : s.headers) && s.cookie && (e = at(ot, this.refState.httpRequest.headers.cookie)),
                e)
                    return e
            }
            var t, s = await this.getCachedRepository(e), e = this.refState.mode;
            if ("ReleaseID" === e)
                return st(s.refs, this.refState.releaseID).ref;
            if ("ReleaseLabel" === e)
                return it(s.refs, this.refState.releaseLabel).ref;
            if ("Manual" === e) {
                e = await ("function" == typeof (t = this.refState.ref) ? t : ()=>t)();
                if ("string" == typeof e)
                    return e
            }
            return tt(s.refs).ref
        }
        async fetch(t, s={}) {
            s = await this.fetchFn(t, {
                signal: s.signal
            });
            let e;
            try {
                e = await s.json()
            } catch (e) {
                throw 404 === s.status ? new ct(`Prismic repository not found. Check that "${this.endpoint}" is pointing to the correct repository.`,t,void 0) : new i(void 0,t,void 0)
            }
            switch (s.status) {
            case 200:
                return e;
            case 400:
                throw new dt(e.message,t,e);
            case 401:
            case 403:
                throw new lt("error"in e ? e.error : e.message,t,e)
            }
            throw new i(void 0,t,e)
        }
    }
    var p = Ge
      , gt = (window.process = window.process || {},
    window.process.env = window.process.env || {},
    window.process.env.NODE_ENV = window.process.env.NODE_ENV || "prod",
    p("rejouice"));
    const vt = t(gt, {
        accessToken: "MC5aTHFIOFJJQUFDTUEyUmxh.77-977-977-977-977-977-9Tu-_vTAKGu-_ve-_ve-_vS8R77-977-9CCs377-9Je-_vWENMyNFVe-_vUc"
    });
    var u = ce({
        state: {
            cases: []
        },
        getters: {
            cases() {
                return this.state.cases
            }
        },
        actions: {
            async fetchCases(t) {
                try {
                    var e = (await (await vt.graphQLFetch(`https://rejouice.prismic.io/graphql?query={
    allCases {
        edges {
            node {
                ... on Case {
                    _meta {
                        date: lastPublicationDate
                        uid
                    }
                    title: name
                    image
                    logo
                    type
                    description: catchphrase
                    year
                }
            }
        }
    }
}`)).json()).data.allCases.edges;
                    e.sort((e,t)=>new Date(t.node._meta.date) - new Date(e.node._meta.date)),
                    this.commit("setCases", e),
                    t && t(e)
                } catch (e) {
                    t && t()
                }
            }
        },
        mutations: {
            setCases: (e,t)=>(e.cases = t,
            e)
        }
    })
      , gt = (window.process = window.process || {},
    window.process.env = window.process.env || {},
    window.process.env.NODE_ENV = window.process.env.NODE_ENV || "prod",
    p("rejouice"));
    const bt = t(gt, {
        accessToken: "MC5aTHFIOFJJQUFDTUEyUmxh.77-977-977-977-977-977-9Tu-_vTAKGu-_ve-_ve-_vS8R77-977-9CCs377-9Je-_vWENMyNFVe-_vUc"
    });
    let wt = !0
      , xt = null;
    var m = ce({
        state: {
            page: null,
            loading: !0,
            uri: null
        },
        getters: {
            loading() {
                return this.state.loading
            },
            page() {
                return this.state.page
            }
        },
        actions: {
            async fetchPage(s) {
                "" == (s = s.replace("/", "")?.replace(/\/$/, "")) && (s = "home");
                let r = !1;
                /work\//.test(s) && (s = s?.replace(/work\//, ""),
                r = !0),
                this.commit("setURI", s),
                wt || this.commit("setLoading", !1),
                requestAnimationFrame(()=>{
                    this.commit("setLoading", !0),
                    clearTimeout(xt),
                    xt = setTimeout(async()=>{
                        this.commit("setPage", {
                            blocks: []
                        });
                        try {
                            var e = "https://rejouice.prismic.io/graphql?query=" + encodeURIComponent(r ? `{
      allCases( uid : "${s}" ) {
        edges {
          node {
            typename: __typename
            meta: _meta {
              id
              uid
              lang
            }
            title: name
            image
            video_loop { ... on _FileLink { url } }
            logo
            type
            description: catchphrase
            year
            website_link {
                ... on _ExternalLink {
                  url
                }
              }
            website_link_label
            vimeo_id
            awards {
                line_1
                line_2
            }
            mobile_align_right
            blocks: body {
                  ... on CaseBodyText__title_and_link {
                    type
                    fields: primary {
                      title
                      text
                      link {
                        ... on _ExternalLink {
                          url
                        }
                      }
                      link_label
                    }
                  }
                  ... on CaseBodyQuote {
                    type
                    label
                    fields: primary {
                      author_job
                      author_name
                      author_image
                      text
                    }
                  }
                  ... on CaseBodyPhones_screens {
                    type
                    label
                    fields: primary {
                      background_color
                      background_image
                      logo_becomes_white
                      has_margin_top
                      has_margin_bottom
                    }
                    slides: fields {
                      screen
                    }
                  }
                  ... on CaseBodySmall_images {
                    type
                    fields: primary {
                      background_color
                      small_spacing_top
                      small_spacing_bottom
                      logo_becomes_white
                    }
                    slides: fields {
                      image1
                    }
                  }
                  ... on CaseBodySlider {
                    type
                    fields: primary {
                      logo_becomes_white
                    }
                    slides: fields {
                      image1
                    }
                  }
                  ... on CaseBodyImage {
                    type
                    fields: primary {
                      image1
                      logo_becomes_white
                    }
                  }
                  ... on CaseBodyVideo {
                    type
                    fields: primary {
                      temp_image
                      vimeo_id1
                      background_color
                      no_margin_top
                      no_margin_bottom
                      is_full_width
                      logo_becomes_white
                    }
                  }
                  ... on CaseBodyScreen_with_background_image {
                    type
                    fields: primary {
                      screen
                      background_image
                    }
                  }
            }
          }
        }
      }
    }` : `{
    
    allPages( where: { slug : "${s}" } ) {
      edges {
        node {
          type: __typename
          meta: _meta {
            id
            uid
            lang
          }
          title
          slug
          og_title
          og_description

          blocks: body {
            ... on PageBodyBlock_cover {
              type
              fields: primary {
                title
                subtitle
                image
                video { ... on _FileLink { url } }
                vimeo
                use_gradient
                gradient_color
              }
            }
            ... on PageBodyBlock_home {
              type
              fields: primary {
                title_home 
                image
                video { ... on _FileLink { url } }
                mobile_video { ... on _FileLink { url } }
              }
            }
            ... on PageBodyBlock_article {
              type
              fields: primary {
                title
                title_size
                layout
                theme
              }
              slides: fields {
                title
                text
              }
            }
            ... on PageBodyBlock_cards {
              type
              slides: fields {
                title: title1
                wysiwyg
                color
                headline
                model
                image
                theme
              }
            }
            ... on PageBodyBlock_faq {
              type
              fields: primary {
                title: title1
              }
              slides: fields {
                title: title1
                text
              }
            }

            ... on PageBodyBlock_legals {
              type
              fields: primary {
                title: title1
              }
              slides: fields {
                title: title1
                text
              }
            }
            ... on PageBodyBlock_media {
              type
              fields: primary {
                image
                video { ... on _FileLink { url } }
              }
            }
            ... on PageBodyBlock_title {
              type
              fields: primary {
                title: title1
                theme
              }
            }
            ... on PageBodyBlock_intro {
              type
              fields: primary {
                titleIntro: title1
                subtitle
                text
                theme
                show_sphere
                section_id
                text_indent
              }
            }
     

            
            ... on PageBodyBlock_drag {
              type
              fields: primary {
                titleDrag: title1
              }
              slides: fields {
                image
              }
            }

            ... on PageBodyBlock_mosaic {
              type
              slides: fields {
                image
              }
            }

            ... on PageBodyBlock_stacked_images {
              type
              fields: primary {
                title: title1
                image_1
                image_2
              }
              slides: fields {
                image
              }
            }


            ... on PageBodyBlock_services {
              type
            }
            ... on PageBodyBlock_reel {
              type
              fields: primary {
                image
                video_loop { ... on _FileLink { url } }
              }
            }
            ... on PageBodyBlock_metric {
              type
              fields: primary {
                title: title1
                headline
                color
              }
              slides: fields {
                logo
                subtitle
                label1
                value1
                color1
                label2
                value2
                color2
                label3
                value3
                color3
              }
            }
            ... on PageBodyBlock_push {
              type
              fields: primary {
                title: title1
                theme
                subtitlePush: subtitle
                small_mobile_font
                spacing
                image
                video { ... on _FileLink { url } }
              }
            }

            ... on PageBodyBlock_works {
              type
              slides: fields {
                image
                video_ratio
                theme
                case {
                  ... on Case {
                    _meta {
                        date: lastPublicationDate
                        uid
                    }
                    title: name
                    image
                    video_loop { ... on _FileLink { url } }
                    logo
                    type
                    description: catchphrase
                    year
                  }
                }
              }
            }


            ... on PageBodyBlock_testimonials {
              type
              slides: fields {
                name: title1
                company
                role
                image
                text
              }
            }


            ... on PageBodyBlock_awards {
              type
              fields: primary {
                title: title1
                subtitleAwards: subtitle
                text
              }
              slides: fields {
                number: title1
                type: text
              }
            }


            ... on PageBodyBlock_team {
              type
              fields: primary {
                title
              }
              slides: fields {
                image
                name: title1
                role
              }
            }

            ... on PageBodyBlock_contact {
              type
              fields: primary {
                titleContact: title1
                text
              }
              slides: fields {
                image
                city: title1
                address: text
              }
            }


            ... on PageBodyBlock_apply {
              type
              fields: primary {
                title: title1
                subtitleApply: subtitle
                available_seats
              }
            }

            ... on PageBodyBlock_works_preview {
              type
              fields: primary {
                title: title1
              }
              slides: fields {
                image
                video_loop { ... on _FileLink { url } }
                link {
                  ... on Case {
                    _meta {
                      uid
                    }
                    name
                    image
                    logo
                    type
                    video_loop { ... on _FileLink { url } }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`);
                            let i = (await (await bt.graphQLFetch(e)).json())?.data?.[r ? "allCases" : "allPages"]?.edges[0]?.node;
                            if (i) {
                                if (r) {
                                    let t = !1;
                                    for (let e = 0; e < i.blocks.length; e++)
                                        "text__title_and_link" == i.blocks[e].type ? (i.blocks[e].type = t ? "" : "block_" + i.blocks[e].type,
                                        t = !0) : i.blocks[e].type = "block_" + i.blocks[e].type;
                                    i.blocks.splice(0, 0, {
                                        type: "block_case_header",
                                        fields: {
                                            awards: i.awards,
                                            description: i.description,
                                            mobile_align_right: i.mobile_align_right,
                                            image: i.image,
                                            logo: i.logo,
                                            meta: i.meta,
                                            title: i.title,
                                            type: i.type,
                                            typename: i.typename,
                                            vimeo_id: i.vimeo_id,
                                            website_link: i.website_link,
                                            website_link_label: i.website_link_label,
                                            year: i.year
                                        }
                                    }),
                                    i.blocks.push({
                                        type: "block_case_motion",
                                        fields: {
                                            image: i.image,
                                            vimeo_id: i.vimeo_id
                                        }
                                    }),
                                    i.blocks.push({
                                        type: "block_case_awards",
                                        fields: {
                                            awards: i.awards
                                        }
                                    });
                                    let s = -1;
                                    for (let e = 0; e < u.state.cases.length; e++)
                                        if (u.state.cases[e].node._meta.uid == i.meta.uid) {
                                            s = e + 1;
                                            break
                                        }
                                    s %= u?.state?.cases.length,
                                    i.blocks.push({
                                        type: "block_next_case",
                                        fields: {
                                            _meta: u?.state?.cases[s].node._meta,
                                            title: u?.state?.cases[s].node.title,
                                            image: u?.state?.cases[s].node.image
                                        }
                                    })
                                }
                            } else
                                i = {
                                    blocks: [{
                                        type: "block-404"
                                    }],
                                    description: "Page not found",
                                    meta: {
                                        uid: "404",
                                        lang: "en-us"
                                    },
                                    title: "404",
                                    type: "Page"
                                };
                            if (this.commit("setPage", i),
                            i?.metaTitle || i?.title) {
                                let e = i?.metaTitle || i?.title || "";
                                r && (e = i?.title?.[0]?.text || ""),
                                document.title = e?.replace(" new", "") + " | REJOUICE®"
                            }
                            if (i.description) {
                                const t = document.querySelector('meta[name="description"]');
                                t || (t = document.createElement("meta"),
                                document.getElementsByTagName("head")[0].appendChild(t)),
                                document.querySelector('meta[name="description"]').setAttribute("content", i.description || "The Venture Agency")
                            }
                            setTimeout(async()=>{
                                n.fire("page:loaded"),
                                this.commit("setLoading", !1)
                            }
                            , 300)
                        } catch (e) {
                            console.log("ERROR while parsing page:", e)
                        }
                    }
                    , window.__is_server__ || wt ? 0 : 400)
                }
                ),
                wt = !1
            },
            setLoading(e, t) {
                this.commit("setLoading", e)
            }
        },
        mutations: {
            setLoading(e, t) {
                return e.loading = t,
                e
            },
            setPage(e, t) {
                return e.page = t,
                e
            },
            setURI(e, t) {
                return e.uri = t,
                e
            }
        }
    });
    customElements.define("app-header", class extends e {
        get defaultData() {
            return {
                showLogo: !0,
                hasPlayedIntro: !1,
                navLinks: [{
                    label: "Home",
                    uri: "home",
                    url: ""
                }, {
                    label: "Work",
                    uri: "work",
                    url: "work"
                }, {
                    label: 'Services <span class="d:none@m">& Models</span></span>',
                    uri: "services",
                    url: "services"
                }, {
                    label: "About",
                    uri: "about",
                    url: "about"
                }, {
                    label: "Contact",
                    uri: "contact",
                    url: "contact"
                }]
            }
        }
        toggle(e) {
            this.data.opened = !this.data.opened,
            this.classList[this.data.opened ? "add" : "remove"]("is-menu-opened")
        }
        closeMenu() {
            this.data.opened = !1,
            this.classList.remove("is-menu-opened")
        }
        created() {
            this._scroll = 0,
            this._lastDirection = -1,
            this._startScroll = 0,
            this._lastScroll = 0,
            this._refScroll = 0
        }
        update() {
            this.$headercontent && (this.$headercontent.style.transform = `translateY(${-1 * this._scroll}px) translateZ(0)`)
        }
        resize() {
            this.$headercontent && (this._headerH = this.$headercontent.clientHeight)
        }
        ready() {
            this.$headercontent = this.querySelector("[content]"),
            this.style.display = "block",
            this.resize(),
            s.on("scroll", e=>{
                this.$headercontent = this.$headercontent || this.querySelector("[content]");
                var t = e.animatedScroll > this._lastScroll ? -1 : 1;
                this._lastScroll = e.animatedScroll,
                t !== this._lastDirection && (this._lastDirection = t,
                this._refScroll = e.animatedScroll,
                this._startScroll = this._scroll),
                this._scroll = Math.min(this._headerH + 1, Math.max(0, this._startScroll + (e.animatedScroll - this._refScroll))),
                e.animatedScroll > this._headerH + 1 ? this.$headercontent.classList.add("is-fixed") : this.$headercontent.classList.remove("is-fixed"),
                this.data.opened && this.closeMenu()
            }
            ),
            n.on("router:goto", ()=>{
                this.$headercontent.classList.remove("is-fixed"),
                this._lastDirection = -1,
                this._scroll = 0,
                this._startScroll = 0,
                this._lastScroll = 0,
                this._refScroll = 0,
                console.log("ROUTER PAGE CHNAGE")
            }
            ),
            n.on("loader:end", ()=>{
                this.classList.add("is-loader-ended"),
                this.data.hasPlayedIntro = !0,
                setTimeout(()=>{
                    this.querySelector("video")?.play()
                }
                , 2200)
            }
            ),
            n.on("logo:hide", ()=>{
                this.data.showLogo = !1
            }
            ),
            n.on("logo:show", ()=>{
                this.data.showLogo = !0
            }
            ),
            n.on("intro:reset", ()=>{
                this.classList.remove("is-loader-ended"),
                this.data.hasPlayedIntro = !1
            }
            )
        }
        render() {
            var {hasPlayedIntro: e, showLogo: t, navLinks: s, opened: i} = this.data;
            return o`


            <div class="z:99 fixed tr:0 h:100vhfix  fit flex items:start dir:col just:between c:#0E0E0E pointer:none    (.is-menu-opened):pointer:auto  ">
                    
                <div class="shrink:0 w:fit mask bg:#FF5F38 grow:1 transform shift-y:-100% (.is-menu-opened):shift-y:0 tween:all,1.1s,easeOut ">

                    <div class="h:fit p-x:40fx p-x:10fx@m flex items:start dir:col just:between w:fit  transform shift-y:100% (.is-menu-opened):shift-y:0 tween:all,1.1s,easeOut">

                        <header class="w:fit flex items:center just:between p-t:40fx p-t:10fx@m">

                            <!-- <lottie-player 
                                class="w:86fx h:28fx block" 
                                src="assets/json/RJ-HEADER-LOGO-ANIMATION-DARK.json">
                            </lottie-player>  -->

                            <svg class="w:86fx h:28fx block"   width="86" height="18" viewBox="0 0 86 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M41.184 10.736C41.184 14.912 38.304 17.336 34.992 17.336C31.68 17.336 28.8 14.936 28.8 10.736C28.8 6.56 31.68 4.184 34.992 4.184C38.304 4.184 41.184 6.536 41.184 10.736ZM0.96 17V9.968C0.96 6.008 3.72 4.376 6.288 4.376H7.536V6.44H6.24C4.296 6.44 3.072 7.736 3.072 10.136V17H0.96ZM8.016 10.736C8.016 6.632 10.632 4.136 14.112 4.184C18.12 4.232 19.968 7.304 19.968 10.376C19.968 10.736 19.944 11.072 19.896 11.432H10.224C10.416 14.192 12.168 15.392 14.232 15.392C16.176 15.392 17.328 14.504 17.736 13.04H19.896C19.464 15.56 17.352 17.336 14.184 17.336C10.848 17.336 8.016 15.152 8.016 10.736ZM10.272 9.608H17.736C17.472 7.112 15.888 6.128 14.064 6.128C12.096 6.128 10.584 7.136 10.272 9.608ZM20.472 17.144V15.08H21.768C23.712 15.08 24.936 13.784 24.936 11.384V4.52H27.048V11.552C27.048 15.512 24.288 17.144 21.72 17.144H20.472ZM24.552 1.52C24.552 0.727999 25.224 0.079999 25.992 0.079999C26.736 0.079999 27.408 0.727999 27.408 1.52C27.408 2.336 26.736 2.984 25.992 2.984C25.224 2.984 24.552 2.336 24.552 1.52ZM30.984 10.76C30.984 13.856 32.832 15.392 34.992 15.392C37.152 15.392 39 13.856 39 10.76C39 7.544 37.152 6.128 34.992 6.128C32.832 6.128 30.984 7.544 30.984 10.76ZM42.936 12.032V4.52H45.048V11.6C45.048 14.384 46.416 15.416 48.36 15.416C50.304 15.416 51.672 14.384 51.672 11.6V4.52H53.784V12.032C53.784 15.872 50.856 17.336 48.36 17.336C45.864 17.336 42.936 15.872 42.936 12.032ZM55.704 1.52C55.704 0.727999 56.376 0.079999 57.144 0.079999C57.888 0.079999 58.56 0.727999 58.56 1.52C58.56 2.336 57.888 2.984 57.144 2.984C56.376 2.984 55.704 2.336 55.704 1.52ZM56.088 17V4.52H58.2V17H56.088ZM59.952 10.736C59.952 6.56 62.808 4.184 66.12 4.184C69.216 4.184 71.736 5.792 71.976 9.2H69.84C69.552 6.896 67.968 6.128 66.072 6.128C63.936 6.128 62.136 7.544 62.136 10.76C62.136 13.856 63.912 15.392 66.096 15.392C68.016 15.392 69.528 14.264 69.84 11.96H71.976C71.736 15.416 69.264 17.336 66.144 17.336C62.784 17.336 59.952 14.936 59.952 10.736ZM73.056 10.736C73.056 6.632 75.672 4.136 79.152 4.184C83.16 4.232 85.008 7.304 85.008 10.376C85.008 10.736 84.984 11.072 84.936 11.432H75.264C75.456 14.192 77.208 15.392 79.272 15.392C81.216 15.392 82.368 14.504 82.776 13.04H84.936C84.504 15.56 82.392 17.336 79.224 17.336C75.888 17.336 73.056 15.152 73.056 10.736ZM75.312 9.608H82.776C82.512 7.112 80.928 6.128 79.104 6.128C77.136 6.128 75.624 7.136 75.312 9.608Z" fill="#2D2B2B"/>
                            </svg>
                            
                            <button aria-label="Close Menu"  @click="${e=>this.toggle()}" class="p:0@m p:8fx,0fx@m border:solid,1px,transparent@m radius:45fx@m fs:17fx@m  bg:none border:none fs:20fx underlined-link">
                                <span class="iblock align-y:middle d:none@m" >
                                    Close
                                </span>
                                <span class="d:none d:inline-block@m rel radius:100%  align-y:middle w:48fx h:48fx border:solid,1px,currentColor@m">
                                    <span class="h:1px w:10px bg:currentColor abs tl:50% iblock transform shift-x:-50% shift-y:-50% rotate:-45deg"></span>
                                    <span class="h:1px w:10px bg:currentColor abs tl:50% iblock transform shift-x:-50% shift-y:-50% rotate:45deg"></span>
                                </span>
                            </button> 
                        </header>
                            
                        <div class="w:fit">
                            
                            <div class="flex items:start just:between w:fit">
                                
                                <div class=" d:none@m">
                                    <div class="group bg:none border:none space-y:10fx">
                                        <!-- <div class="transform shift-y:-50fx o:0 (.is-menu-opened):shift-y:0vh (.is-menu-opened):o:1  tween:all,1.3s,easeOut (.is-menu-opened):tween:all,1.6s,0.2s,easeOut">
                                            <h2 class="fs:16fx">The Venture Agency</h2>
                                        </div> -->
                                        <div class="mask transform shift-y:-50fx scale:0 (.is-menu-opened):shift-y:0vh (.is-menu-opened):scale:1  radius:4fx tween:all,1.3s,easeOut (.is-menu-opened):tween:all,1.6s,0.1s,easeOut">
                                            <img 
                                                src="assets/images/reel-poster-new.webp" 
                                                alt="Reel poster" 
                                                width="650"
                                                height="425"
                                                class="transform w:325fx h:212fx bg:#FFFCF1 radius:3fx scale:2 (.is-menu-opened):shift-y:0vh (.is-menu-opened):scale:1  tween:all,1.3s,easeOut (.is-menu-opened):tween:all,1.6s,0.1s,easeOut" 
                                            />
                                            <video playsinline loop muted autoplay class="abs tl:0 fit object:cover" ?src="${i ? "https://prismic-io.s3.amazonaws.com/rejouice/3c8eec5e-c857-4fd3-9add-a9e6035a160c_RJ-2.0-Video+background+5_1+%281%29.mp4" : ""}"></video>
                                        </div>
                                        <nav @click="${e=>n.fire("reel:show")}" class="flex just:between items:center fs:16fx m-b:7fx transform shift-y:-50fx o:0 (.is-menu-opened):shift-y:0vh (.is-menu-opened):o:1  tween:all,1.3s,easeOut (.is-menu-opened):tween:all,1.6s,easeOut">
                                            <button class="border:none bg:none space-x:9fx flex items:center just:start ">
                                                <span class="bg:#0E0E0E h:20fx w:20fx flex items:center just:center radius:100px">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" class="fill:#fff">
                                                        <path d="M3.47669 2.67493C3.73935 2.87702 3.7363 3.27408 3.47058 3.47212L0.864538 5.4143C0.537145 5.6583 0.0711485 5.42822 0.0657971 5.01995L0.013533 1.03249C0.00805605 0.614631 0.487176 0.374829 0.818385 0.629658L3.47669 2.67493Z"/>
                                                    </svg>
                                                </span>
                                                <span class="iblock align-y:middle underlined-link">Play reel</span>
                                            </button>
                                            <p>
                                                —01:18
                                            </p>
                                        </nav>
                                    </div>
                                </div>

                                
                                <div class="w:550fx space-y:80fx p-l:0fx@m w:fit@m">
                                    <ul class=" fs:50fx lh:1.04 letter:-1px">
                                        ${s.map((e,t)=>o`
                                            <li class="__perspective:1000px lh:0">
                                                <a 
                                                    href="${e.url}"   
                                                    __style="transform-style: preserve-3d;"  
                                                    class="nav-link lh:1 mask ${m?.state?.uri == e.uri ? "is-active" : ""} group rel hover:c:#0E0E0E iblock w:auto transform shift-y:100fx o:0 (.is-menu-opened):shift-y:0vh (.is-menu-opened):o:1  tween:all,1.3s,easeOut ${`(.is-menu-opened):tween:all,1.1s,${.1 * t}s,easeOut`}"
                                                    >
                                                    <span class="iblock transform" style="transform-style: preserve-3d;">
                                                        <span class="iblock origin:50%,100% transform (.group:hover):_rotate-x:90deg  (.group:hover):shift-y:-1em  (.group:hover):o:0  tween:all,0.5s,easeOutCubic">
                                                            ${e.label}
                                                        </span>
                                                        <span class="iblock origin:50%,0% abs o:0 tl:0 w:fit transform _rotate-x:-90deg (.group:hover):_rotate-x:0deg shift-y:1em o:0  (.group:hover):shift-y:0 (.group:hover):o:1   tween:all,0.5s,easeOutCubic">
                                                            ${e.label}
                                                        </span>
                                                    </span>      
                                                </a>
                                            </li>
                                        `)}
                                    </ul>
                        
                                </div>
                            </div>
                        </div>
                            
                        <div class="d:none@m p-y:20fx transform shift-y:50fx o:0 (.is-menu-opened):shift-y:0vh (.is-menu-opened):o:1  tween:all,1.3s,easeOut (.is-menu-opened):tween:all,1.6s,0.5s,easeOut">
                            <a href="contact" class="rel mask group m-l:806fx fs:16fx lh:1.2 radius:4fx p:14fx,25fx border:solid,1px,currentColor iblock ">
                                <span class="rel o:0">Take a seat</span>
                                <span class="abs tl:0 fit flex items:center just:center  c:currentColor transform shift-y:0% (.group:hover):shift-y:-100% (.group:hover):o:0 tween:all,0.6s,easeOut">Take a seat</span>
                                <span class="c:currentColor abs tl:0 fit flex items:center just:center o:0 transform shift-y:100% (.group:hover):o:1 (.group:hover):shift-y:0 tween:all,0.6s,easeOut">Take a seat</span>
                                <span style="width: calc(100% + 2px); left: -1px;" class="abs tl:0 fit bg:#0E0E0E  transform shift-x:-100% (.group:hover):shift-x:0 tween:all,0.6s,easeOut mask">
                                    <span aria-hidden="true" class="bg:#0E0E0E abs tl:0 fit flex items:center just:center c:#FF5F38   transform tween:all,0.6s,easeOut shift-x:100% (.group:hover):shift-x:0 ">
                                        <span class="abs tl:0 fit flex items:center just:center  transform shift-y:0% c:#FF5F38 (.group:hover):shift-y:-100% (.group:hover):o:0 tween:all,0.6s,easeOut">Take a seat</span>
                                        <span class="abs tl:0 fit flex items:center just:center o:0 transform shift-y:100% c:#FF5F38 (.group:hover):o:1 (.group:hover):shift-y:0 tween:all,0.6s,easeOut">Take a seat</span>
                                    </span>
                                </span>
                            </a>
                        </div>
                        
                        <div class="flex items:center just:between w:fit p-y:13fx rel  d:block@m p-l:0fx@m">

                            <div class="d:none@m abs tl:0 w:fit h:1px bg:currentColor scale-y:0.5 scale-x:0 origin:0,0 (.is-menu-opened):scale-x:1 transform (.is-menu-opened):tween:transform,1.3s,0.4s,easeOut"></div>
                            
                            <div class="d:none@m fs:16fx iblock w:auto shift-x:100px (.is-menu-opened):shift-x:0 transform (.is-menu-opened):tween:transform,1.3s,0.4s,easeOut">
                                ${"Tomorrow's Brands, Today.™".split(" ")?.map((e,t)=>o`
                                    <span class="o:0 (.is-menu-opened):o:1 ${`(.is-menu-opened):tween:opacity,${.5 + .15 * t}s,${.15 * t + .4}s,easeOut`}">
                                        ${e}&nbsp;
                                    </span>
                                `)}
                            </div>
                            <ul class="flex items:center just:end space-x:10px d:block@m fs:16fx m-b:10fx@m space-y:7fx@m">
                                <li class=" shift-x:100px (.is-menu-opened):shift-x:0 transform (.is-menu-opened):tween:transform,1.6s,0.3s,easeOut">
                                    <a href="work" class="space-x:-1px group">
                                        <span class="underlined-link align-y:middle">X</span>
                                        <svg class="iblock tween:transform,0.6s,easeOutCubic transform group-hover:rotate:45deg align-y:middle" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.82813 13.1411L13.1413 6.82841M13.1413 6.82841L7.48446 6.82841M13.1413 6.82841L13.1413 12.4853" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </li>
                                <li class=" shift-x:100px (.is-menu-opened):shift-x:0 transform (.is-menu-opened):tween:transform,1.6s,0.4s,easeOut">
                                    <a href="services" class="space-x:-1px group">
                                        <span class="underlined-link align-y:middle">Instagram</span> 
                                        <svg class="iblock tween:transform,0.6s,easeOutCubic transform group-hover:rotate:45deg align-y:middle" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.82813 13.1411L13.1413 6.82841M13.1413 6.82841L7.48446 6.82841M13.1413 6.82841L13.1413 12.4853" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </li>
                                <li class=" shift-x:100px (.is-menu-opened):shift-x:0 transform (.is-menu-opened):tween:transform,1.6s,0.5s,easeOut">
                                    <a href="contact" class="space-x:-1px group">
                                        <span class="underlined-link align-y:middle">LinkedIn</span> 
                                        <svg class="iblock tween:transform,0.6s,easeOutCubic transform group-hover:rotate:45deg align-y:middle" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.82813 13.1411L13.1413 6.82841M13.1413 6.82841L7.48446 6.82841M13.1413 6.82841L13.1413 12.4853" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>

                </div>
                <div class=" w:fit  p-y:40fy o:0! d:none@m">
                    <svg class=" w:fit" viewBox="0 0 1362 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 0,212.431 H 35.0769 V 98.6631 c 0,-39.7789 20.3287,-61.2596 52.6154,-61.2596 H 109.217 V 3.1936 H 88.4895 C 45.8391,3.1936 0,30.2433 0,95.8786 Z" fill="#fffcf1" id="path132" />
                    </svg>
                </div>
            </div>

            <header content class="
                | c:#000 (.is-dark-theme):c:#fff  w:fit t:0 transform w:fit p:40fx p-x:10fx@m p-y:16fx@m 
                | z:11 fixed tl:0 w:fit block (.is-footer):o:0 (.is-footer):pointer:none
                | (&.is-fixed):bg:#FAF8F3@m
                | (&.is-fixed):box-shadow:0,10px,20px,#0000000d@m
                | (.is-dark-theme/&.is-fixed):bg:#0E0E0E@m">
                

                <div class="flex items:center just:between">

                    <a href="" aria-label="back to home">

                        <div class="iblock rel">
                            <div class="${t || !e ? "o:0 (.is-loader-ended):tween:opacity,0.6s,easeOut" : "o:1 (.is-loader-ended):tween:opacity,0.6s,0.3s,easeOut"} nowrap abs t:50% l:0 transform shift-y:-50% ">
                                <div class="fs:20fx fs:17fx@m iblock w:auto shift-x:100px (.is-loader-ended):shift-x:0 transform (.is-loader-ended):tween:transform,1.3s,1.8s,easeOut">
                                    ${"The Venture Agency.".split(" ")?.map((e,t)=>o`
                                        <span class="o:0 (.is-loader-ended):o:1 ${`(.is-loader-ended):tween:opacity,${.5 + .15 * t}s,${.15 * t + 1.8}s,easeOut`}">
                                            ${e}&nbsp;
                                        </span>
                                    `)}
                                </div>
                            </div>
                            <div class="rel ${t && e ? "o:1" : "o:0 tween:opacity,0.6s,easeOut!"}  tween:opacity,0.6s,0.3s,easeOut">
                                    
                                <svg class="o:0 (.is-dark-theme):o:1 w:86fx h:28fx block "  width="86" height="18" viewBox="0 0 86 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M41.184 10.736C41.184 14.912 38.304 17.336 34.992 17.336C31.68 17.336 28.8 14.936 28.8 10.736C28.8 6.56 31.68 4.184 34.992 4.184C38.304 4.184 41.184 6.536 41.184 10.736ZM0.96 17V9.968C0.96 6.008 3.72 4.376 6.288 4.376H7.536V6.44H6.24C4.296 6.44 3.072 7.736 3.072 10.136V17H0.96ZM8.016 10.736C8.016 6.632 10.632 4.136 14.112 4.184C18.12 4.232 19.968 7.304 19.968 10.376C19.968 10.736 19.944 11.072 19.896 11.432H10.224C10.416 14.192 12.168 15.392 14.232 15.392C16.176 15.392 17.328 14.504 17.736 13.04H19.896C19.464 15.56 17.352 17.336 14.184 17.336C10.848 17.336 8.016 15.152 8.016 10.736ZM10.272 9.608H17.736C17.472 7.112 15.888 6.128 14.064 6.128C12.096 6.128 10.584 7.136 10.272 9.608ZM20.472 17.144V15.08H21.768C23.712 15.08 24.936 13.784 24.936 11.384V4.52H27.048V11.552C27.048 15.512 24.288 17.144 21.72 17.144H20.472ZM24.552 1.52C24.552 0.727999 25.224 0.079999 25.992 0.079999C26.736 0.079999 27.408 0.727999 27.408 1.52C27.408 2.336 26.736 2.984 25.992 2.984C25.224 2.984 24.552 2.336 24.552 1.52ZM30.984 10.76C30.984 13.856 32.832 15.392 34.992 15.392C37.152 15.392 39 13.856 39 10.76C39 7.544 37.152 6.128 34.992 6.128C32.832 6.128 30.984 7.544 30.984 10.76ZM42.936 12.032V4.52H45.048V11.6C45.048 14.384 46.416 15.416 48.36 15.416C50.304 15.416 51.672 14.384 51.672 11.6V4.52H53.784V12.032C53.784 15.872 50.856 17.336 48.36 17.336C45.864 17.336 42.936 15.872 42.936 12.032ZM55.704 1.52C55.704 0.727999 56.376 0.079999 57.144 0.079999C57.888 0.079999 58.56 0.727999 58.56 1.52C58.56 2.336 57.888 2.984 57.144 2.984C56.376 2.984 55.704 2.336 55.704 1.52ZM56.088 17V4.52H58.2V17H56.088ZM59.952 10.736C59.952 6.56 62.808 4.184 66.12 4.184C69.216 4.184 71.736 5.792 71.976 9.2H69.84C69.552 6.896 67.968 6.128 66.072 6.128C63.936 6.128 62.136 7.544 62.136 10.76C62.136 13.856 63.912 15.392 66.096 15.392C68.016 15.392 69.528 14.264 69.84 11.96H71.976C71.736 15.416 69.264 17.336 66.144 17.336C62.784 17.336 59.952 14.936 59.952 10.736ZM73.056 10.736C73.056 6.632 75.672 4.136 79.152 4.184C83.16 4.232 85.008 7.304 85.008 10.376C85.008 10.736 84.984 11.072 84.936 11.432H75.264C75.456 14.192 77.208 15.392 79.272 15.392C81.216 15.392 82.368 14.504 82.776 13.04H84.936C84.504 15.56 82.392 17.336 79.224 17.336C75.888 17.336 73.056 15.152 73.056 10.736ZM75.312 9.608H82.776C82.512 7.112 80.928 6.128 79.104 6.128C77.136 6.128 75.624 7.136 75.312 9.608Z" fill="#FFFCF1"/>
                                </svg>

                                <svg class="o:1 (.is-dark-theme):o:0 abs tl:0 w:86fx h:28fx block "  width="86" height="18" viewBox="0 0 86 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M41.184 10.736C41.184 14.912 38.304 17.336 34.992 17.336C31.68 17.336 28.8 14.936 28.8 10.736C28.8 6.56 31.68 4.184 34.992 4.184C38.304 4.184 41.184 6.536 41.184 10.736ZM0.96 17V9.968C0.96 6.008 3.72 4.376 6.288 4.376H7.536V6.44H6.24C4.296 6.44 3.072 7.736 3.072 10.136V17H0.96ZM8.016 10.736C8.016 6.632 10.632 4.136 14.112 4.184C18.12 4.232 19.968 7.304 19.968 10.376C19.968 10.736 19.944 11.072 19.896 11.432H10.224C10.416 14.192 12.168 15.392 14.232 15.392C16.176 15.392 17.328 14.504 17.736 13.04H19.896C19.464 15.56 17.352 17.336 14.184 17.336C10.848 17.336 8.016 15.152 8.016 10.736ZM10.272 9.608H17.736C17.472 7.112 15.888 6.128 14.064 6.128C12.096 6.128 10.584 7.136 10.272 9.608ZM20.472 17.144V15.08H21.768C23.712 15.08 24.936 13.784 24.936 11.384V4.52H27.048V11.552C27.048 15.512 24.288 17.144 21.72 17.144H20.472ZM24.552 1.52C24.552 0.727999 25.224 0.079999 25.992 0.079999C26.736 0.079999 27.408 0.727999 27.408 1.52C27.408 2.336 26.736 2.984 25.992 2.984C25.224 2.984 24.552 2.336 24.552 1.52ZM30.984 10.76C30.984 13.856 32.832 15.392 34.992 15.392C37.152 15.392 39 13.856 39 10.76C39 7.544 37.152 6.128 34.992 6.128C32.832 6.128 30.984 7.544 30.984 10.76ZM42.936 12.032V4.52H45.048V11.6C45.048 14.384 46.416 15.416 48.36 15.416C50.304 15.416 51.672 14.384 51.672 11.6V4.52H53.784V12.032C53.784 15.872 50.856 17.336 48.36 17.336C45.864 17.336 42.936 15.872 42.936 12.032ZM55.704 1.52C55.704 0.727999 56.376 0.079999 57.144 0.079999C57.888 0.079999 58.56 0.727999 58.56 1.52C58.56 2.336 57.888 2.984 57.144 2.984C56.376 2.984 55.704 2.336 55.704 1.52ZM56.088 17V4.52H58.2V17H56.088ZM59.952 10.736C59.952 6.56 62.808 4.184 66.12 4.184C69.216 4.184 71.736 5.792 71.976 9.2H69.84C69.552 6.896 67.968 6.128 66.072 6.128C63.936 6.128 62.136 7.544 62.136 10.76C62.136 13.856 63.912 15.392 66.096 15.392C68.016 15.392 69.528 14.264 69.84 11.96H71.976C71.736 15.416 69.264 17.336 66.144 17.336C62.784 17.336 59.952 14.936 59.952 10.736ZM73.056 10.736C73.056 6.632 75.672 4.136 79.152 4.184C83.16 4.232 85.008 7.304 85.008 10.376C85.008 10.736 84.984 11.072 84.936 11.432H75.264C75.456 14.192 77.208 15.392 79.272 15.392C81.216 15.392 82.368 14.504 82.776 13.04H84.936C84.504 15.56 82.392 17.336 79.224 17.336C75.888 17.336 73.056 15.152 73.056 10.736ZM75.312 9.608H82.776C82.512 7.112 80.928 6.128 79.104 6.128C77.136 6.128 75.624 7.136 75.312 9.608Z" fill="#2D2B2B"/>
                                </svg>
                                    
                                <!-- 
                                <lottie-player 
                                    class="o:0 (.is-dark-theme):o:1 w:86fx h:28fx block " 
                                    src="assets/json/RJ-HEADER-LOGO-ANIMATION.json">
                                </lottie-player> 
                                <lottie-player 
                                    class="o:1 (.is-dark-theme):o:0 abs tl:0 w:86fx h:28fx block " 
                                    src="assets/json/RJ-HEADER-LOGO-ANIMATION-DARK.json">
                                </lottie-player>  
                                -->

                            </div>
                        </div>

                    </a>
                    
                    <button 
                        @click="${e=>this.toggle()}" class="p:8fx,20fx@m border:solid,1px,currentColor@m radius:45fx@m fs:17fx@m fs:20fx iblock bg:none border:none o:0 (.is-loader-ended):o:1 (.is-loader-ended):tween:opacity,0.7s,1.8s,easeOut underlined-link">
                        Menu
                    </button> 

                </div>

            </header>`
        }
    }
    ),
    window.process = window.process || {},
    window.process.env = window.process.env || {},
    window.process.env.NODE_ENV = window.process.env.NODE_ENV || "prod";
    const yt = t(p("rejouice"), {
        accessToken: "MC5aTHFIOFJJQUFDTUEyUmxh.77-977-977-977-977-977-9Tu-_vTAKGu-_ve-_ve-_vS8R77-977-9CCs377-9Je-_vWENMyNFVe-_vUc"
    });
    ce({
        state: {
            settings: null
        },
        getters: {
            settings() {
                return this.state.settings
            }
        },
        actions: {
            async fetch(e) {
                try {
                    var t = "https://rejouice.prismic.io/graphql?query=" + encodeURIComponent(`{
        allGeneral_settingss {
          edges {
            node {
              type: __typename
              meta: _meta {
                id
                uid
                lang
              }
              header_links: links {
                label
              }
              footer_title
              footer_text
              privacy_policies {
                ... on _FileLink {
                  url
                }
              }
              footer_links: body1 {
                ... on General_settingsBody1Link_list {
                  fields: primary {
                    title
                    size
                    hide_mobile
                  }
                  slides: fields {
                    legend
                    label
                    link: url {
                      ... on _ExternalLink {
                        url
                      }
                    }
                    page: url {
                      ... on Page {
                        title
                        meta: _meta {
                          uid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      `)
                      , s = (await (await yt.graphQLFetch(t)).json())?.data?.allGeneral_settingss?.edges[0]?.node;
                    this.commit("setSettings", s)
                } catch (e) {}
            }
        },
        mutations: {
            setSettings(e, t) {
                return e.settings = t,
                e
            }
        }
    });
    customElements.define("app-footer", class extends e {
        created() {
            this.data = {
                winH: 0,
                top: 0,
                left: 0,
                width: 0,
                height: 0
            },
            this.onScroll = this.onScroll.bind(this),
            this.update = this.update.bind(this),
            this.__scrollTop = 0
        }
        attached() {
            this.style.display = "block",
            this.$topParts = this.querySelectorAll("[top-part]"),
            this.isAttached = !0,
            document.addEventListener("scroll", this.onScroll),
            this.resizeObserver = new ResizeObserver(e=>{
                this.resize()
            }
            ),
            this.resizeObserver.observe(this),
            this.resizeObserver.observe(document.body),
            this.update()
        }
        detached() {
            this.isAttached = !1,
            document.removeEventListener("scroll", this.onScroll),
            this.resizeObserver.unobserve(this),
            this.resizeObserver.unobserve(document.body)
        }
        onScroll(e) {
            this.__scrollTop = window.pageYOffset
        }
        resize() {
            this.$topParts = this.querySelectorAll("[top-part]");
            var {top: e, height: t} = V(this);
            this.data.top = e,
            this.data.height = t,
            this.data.winH = window.innerHeight
        }
        update() {
            if (this.isAttached)
                if (window.innerWidth < 600)
                    this.$topParts.forEach(e=>{
                        e.style.opacity = 1,
                        this.style.transform = "translateY(0px) translateZ(0)"
                    }
                    );
                else {
                    var {top: e, height: t, winH: s} = this.data;
                    const i = 1 - Math.max(0, s - (e - this.__scrollTop)) / t;
                    this.style.transform = `translateY(${i * t * -.2}px) translateZ(0)`,
                    this.$topParts.forEach(e=>{
                        e.style.opacity = 1 - i
                    }
                    )
                }
        }
        render(e) {
            return this.data,
            o`
            <footer class="rel bg:#0E0E0E c:#fff w:fit mask p-x:40fx p-y:51fx p-t:28fx@m  p-x:10fx@m c:#FFFCF1 p-b:10fx@m min-h:100vhfix min-h:0@m dir:col flex just:between">

                <div top-part class="flex items:start just:between w:fit m-b:200fx d:block@m m-b:37fx@m">
                    <div class="space-y:25fx m-b:47fx@m">
                        <h3 class="fs:24fx fs:28fx@m">Relax. We got you.</h3>
                        <a href="contact" class="iblock tween:all,0.4s,easeOutCubic bg:none border:solid,1px,#FFFCF1 hover:bg:#FFFCF1 hover:c:#0E0E0E fs:16fx p:16fx,22fx radius:8fx fs:14fx@m radius:45fx@m p:10fx,18fx@m ">Take a seat</a>
                    </div>
                    <div class="(&//ul//li):m-b:10fx@m  space-x:44fx fs:16fx lh:1.2 flex items:start just:end just:between@m">
                        <ul class="w:174fx">
                            <li><a class="underlined-link" href="">Home</a></li>
                            <li><a class="underlined-link" href="work">Work</a></li>
                            <li><a class="underlined-link" href="about">About</a></li>
                            <li><a class="underlined-link" href="services">Services & Models</a></li>
                            <li><a class="underlined-link" href="contact">Contact</a></li>
                        </ul>
                        <ul>
                            <li><a class="underlined-link" target="_blank" href="https://twitter.com/rejouice_">X<span class=" transform rotate:-45deg iblock">→</span></a></li>
                            <li><a class="underlined-link" target="_blank" href="https://www.instagram.com/rejouice_/">Instagram<span class=" transform rotate:-45deg iblock">→</span></a></li>
                            <li><a class="underlined-link" target="_blank" href="https://www.linkedin.com/company/rejouice">LinkedIn<span class=" transform rotate:-45deg iblock">→</span></a></li>
                        </ul>
                    </div>
                </div>


                <div>
                    <!-- <h4 class="d:none d:block@m m-b:36fx@m">Offices</h4> -->
                    <div top-part class="flex items:end just:between w:fit m-b:69fx m-b:30fx@m items:start@m">
                        <div class="fs:16fx w:218fx@m space-y:20fx@m">
                            <!-- <h4 class=" m-b:1em">Offices</h4> -->
                            <ul class="">
                                <li><span>San Diego—California<span></li>
                                <li><span>Paris—France  </span></li>
                            </ul>
                            <p class="d:none d:block@m">
                                <span>©2023</span> 
                                <a href="legal" class="underlined-link">legal</a>
                            </p>
                        </div>
                        <div class="space-x:44fx fs:16fx flex items:end just:end space-x:0@m">
                            <ul class="w:174fx w:auto@m">
                                <li>
                                    <span class="d:none d:block@m">Project inquiries:</span>
                                    <a class="underlined-link" href="mailto:biz@rejouice.com">biz@rejouice.com</a>
                                </li>
                            </ul>
                            <p class="d:none@m">
                                ©2023 <a href="legal" class="underlined-link">legal</a>
                            </p>
                        </div>
                    </div>
                    <scroll-object class="block rel mask" aria-hidden="true">
                        <a href="/" class="block rel" aria-label="Back to Home">
                            <svg aria-hidden="true" class="transform shift-y:-100% (.in-view):shift-y:0% (.in-view):tween:all,1.6s,easeOutSlow w:fit" viewBox="0 0 1362 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 0,212.431 H 35.0769 V 98.6631 c 0,-39.7789 20.3287,-61.2596 52.6154,-61.2596 H 109.217 V 3.1936 H 88.4895 C 45.8391,3.1936 0,30.2433 0,95.8786 Z" fill="#fffcf1" id="path132" />
                            </svg>
                            <svg aria-hidden="true" class="transform shift-y:-100% (.in-view):shift-y:0% ${"(.in-view):tween:all,1.6s,0.05s,easeOutSlow"} w:fit abs tl:0" viewBox="0 0 1362 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m 116.161,108.608 c 0,73.193 47.035,109.392 102.441,109.392 52.615,0 87.692,-29.436 94.867,-71.204 h -35.874 c -6.776,24.265 -25.909,38.983 -58.196,38.983 -34.28,0 -63.377,-19.889 -66.566,-65.635 h 160.636 c 0.797,-5.967 1.196,-11.536 1.196,-17.503 C 314.665,51.7239 283.973,0.806864 217.406,0.011271 159.609,-0.784298 116.161,40.5858 116.161,108.608 Z M 153.63,89.9117 c 5.182,-40.9723 30.294,-57.6794 62.979,-57.6794 30.294,0 56.601,16.3093 60.986,57.6794 z" fill="#fffcf1" id="path132" />
                            </svg>
                            <svg aria-hidden="true" class="transform shift-y:-100% (.in-view):shift-y:0% ${"(.in-view):tween:all,1.6s,0.1s,easeOutSlow"} w:fit abs tl:0" viewBox="0 0 1362 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m 313.469,120.144 c 0.797,-5.967 1.196,-11.536 1.196,-17.503 -5.74609,1.08665 -7.04383,17.53827 -1.196,17.503 z m 8.539,94.674 h 20.727 c 42.651,0 88.49,-27.05 88.49,-92.685 V 5.58032 H 396.148 V 119.348 c 0,39.779 -20.329,61.26 -52.615,61.26 h -21.525 z" fill="#fffcf1" id="path132" />
                            </svg>
                            <svg aria-hidden="true" class="transform shift-y:-100% (.in-view):shift-y:0% ${`(.in-view):tween:all,1.6s,${.05 * 3}s,easeOutSlow`} w:fit abs tl:0" viewBox="0 0 1362 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m 660.864,108.608 c 0,-69.6133 -47.832,-108.596729 -102.839,-108.596729 -55.007,0 -102.839,39.381129 -102.839,108.596729 0,69.613 47.832,109.392 102.839,109.392 55.007,0 102.839,-40.177 102.839,-109.392 z m -169.405,0.398 c 0,-53.3042 30.692,-76.7737 66.566,-76.7737 35.874,0 66.567,23.4695 66.567,76.7737 0,51.314 -30.693,76.773 -66.567,76.773 -35.874,0 -66.566,-25.459 -66.566,-76.773 z" fill="#fffcf1" id="path132" />
                            </svg>
                            <svg aria-hidden="true" class="transform shift-y:-100% (.in-view):shift-y:0% ${"(.in-view):tween:all,1.6s,0.2s,easeOutSlow"} w:fit abs tl:0" viewBox="0 0 1362 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m 683.798,130.088 c 0,63.647 48.63,87.912 90.084,87.912 41.455,0 90.084,-24.265 90.084,-87.912 V 5.58032 H 828.889 V 122.928 c 0,46.144 -22.72,63.249 -55.007,63.249 -32.286,0 -55.007,-17.105 -55.007,-63.249 V 5.58032 h -35.077 z" fill="#fffcf1" id="path132" />
                            </svg>
                            <svg aria-hidden="true" class="transform shift-y:-100% (.in-view):shift-y:0% ${"(.in-view):tween:all,1.6s,0.25s,easeOutSlow"} w:fit abs tl:0" viewBox="0 0 1362 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path      d="m 891.959,212.431 h 35.077 V 5.58032 h -35.077 z" fill="#fffcf1" id="path132" />
                            </svg>
                            <svg aria-hidden="true" class="transform shift-y:-100% (.in-view):shift-y:0% ${`(.in-view):tween:all,1.6s,${.05 * 6}s,easeOutSlow`} w:fit abs tl:0" viewBox="0 0 1362 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m 946.888,108.608 c 0,69.613 47.034,109.392 102.842,109.392 51.81,0 92.87,-31.823 96.86,-89.105 h -35.48 c -5.18,38.188 -30.29,56.884 -62.18,56.884 -36.27,0 -65.77,-25.459 -65.77,-76.773 0,-53.3042 29.9,-76.7737 65.37,-76.7737 31.49,0 57.8,12.7292 62.58,50.917 h 35.48 C 1142.6,26.6632 1100.75,0.011271 1049.33,0.011271 994.321,0.011271 946.888,39.3924 946.888,108.608 Z" fill="#fffcf1" id="path132" />
                            </svg>
                            <svg aria-hidden="true" class="transform shift-y:-100% (.in-view):shift-y:0% ${`(.in-view):tween:all,1.6s,${.05 * 7}s,easeOutSlow`} w:fit abs tl:0" viewBox="0 0 1362 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m 1163.5,108.608 c 0,73.193 47.03,109.392 102.44,109.392 52.61,0 87.69,-29.436 94.86,-71.204 h -35.87 c -6.78,24.265 -25.91,38.983 -58.2,38.983 -34.28,0 -63.37,-19.889 -66.56,-65.635 h 160.63 c 0.8,-5.967 1.2,-11.536 1.2,-17.503 C 1362,51.7239 1331.31,0.806864 1264.74,0.011271 1206.94,-0.784298 1163.5,40.5858 1163.5,108.608 Z m 37.46,-18.6963 c 5.19,-40.9723 30.3,-57.6794 62.98,-57.6794 30.3,0 56.61,16.3093 60.99,57.6794 z" fill="#fffcf1" id="path132" />
                            </svg>
                        </a>
                    </scroll-object>

                </div>

            </footer>`
        }
    }
    );
    customElements.define("app-router", class extends e {
        get props() {
            return {
                routes: Array,
                base: String,
                path: String,
                mode: String
            }
        }
        get defaultData() {
            return {
                state: {},
                path: "",
                routes: [{
                    name: "",
                    component: "",
                    path: "/"
                }, {
                    name: "",
                    component: "",
                    path: ":id"
                }, {
                    name: "",
                    component: "",
                    path: ":type/:id"
                }],
                mode: "history",
                base: "/"
            }
        }
        created() {
            this.onPopState = this.onPopState.bind(this)
        }
        attached() {
            window.addEventListener("popstate", this.onPopState),
            n.off("router:goto", this.goTo, this),
            n.on("router:goto", this.goTo, this)
        }
        detached() {
            n.off("router:goto", this.goTo, this),
            window.removeEventListener("popstate", this.onPopState)
        }
        onPopState(e) {
            m.fetchPage(window.location.pathname?.replace("/_NEW/", "/"))
        }
        goTo(e) {
            var t = {};
            history.pushState(t, "", e),
            this.onPopState(t)
        }
    }
    );
    customElements.define("app-loader", class extends e {
        afterRender() {
            m.state.loading ? (this.isLoading = !0,
            this.hasRenderedOnce = !0) : this.isLoading && (this.isLoading = !1,
            n.fire("loader:end"))
        }
        render() {
            return o`
            <div class="w:fit h:100vhfix bg:#0E0E0E fixed tl:0 z:10000000 ${m.state.loading ? "o:1" : "o:0 pointer:none"} ${this.hasRenderedOnce ? "tween:opacity,0.4s,easeOut" : ""}">
            </div>`
        }
    }
    );
    customElements.define("app-block", class extends e {
        get props() {
            return {
                content: Object,
                name: String,
                scroll: Number
            }
        }
        static get observedAttributes() {
            return ["content", "name", "scroll"]
        }
        render() {
            var {content: e, name: t} = this.data;
            return "string" != typeof t || /^\$\$[0-9]+\$\$$/.test(t.trim()) || t == this.data.lastName || (this.innerHTML = "",
            this.$component = document.createElement(t),
            this.appendChild(this.$component),
            this.data.lastName = t),
            this.$component && (this.$component.set ? (this.$component.data.content = e,
            this.$component._update()) : e && this.$component.setAttribute("content", "object" == typeof e ? JSON.stringify(e) : e)),
            o``
        }
    }
    );
    const kt = e=>e < 10 ? "0" + e : e
      , _t = e=>{
        e = Math.floor(e);
        var t = Math.floor(e / 60)
          , e = e - 60 * t;
        return kt(t) + "." + kt(e)
    }
    ;
    customElements.define("app-video-player", class extends e {
        get props() {
            return {
                src: String,
                autoplay: Boolean,
                alt: String,
                poster: String
            }
        }
        get defaultData() {
            return {
                src: null,
                isPlaying: !1,
                isMuted: !1,
                progress: 0,
                duration: 0,
                currentTime: 0,
                poster: null
            }
        }
        togglePlay() {
            this.querySelector("video") && (this.querySelector("video")[this.data.isPlaying ? "pause" : "play"](),
            this.data.isPlaying = !this.data.isPlaying)
        }
        play() {
            this.querySelector("video") && (this.querySelector("video").play(),
            this.data.isPlaying = !0)
        }
        pause() {
            this.querySelector("video") && (this.querySelector("video").pause(),
            this.data.isPlaying = !1)
        }
        toggleSound() {
            this.querySelector("video") && (this.data.isMuted = !this.data.isMuted,
            this.querySelector("video").muted = this.data.isMuted)
        }
        onTimelineDown(e) {
            this.timelinePos = ye(e.currentTarget),
            this.$timeline = e.currentTarget,
            this.isTimelineDown = !0;
            e = (e.pageX - (this.timelinePos.left || 0)) / this.$timeline.clientWidth;
            this.data.currentTime = e * this.querySelector("video").duration,
            this.querySelector("video").currentTime = this.data.currentTime
        }
        created() {
            this.onMouseMove = this.onMouseMove.bind(this),
            this.onMouseUp = this.onMouseUp.bind(this),
            document.addEventListener("mousemove", this.onMouseMove),
            document.addEventListener("mouseup", this.onMouseUp)
        }
        detached() {
            document.removeEventListener("mousemove", this.onMouseMove),
            document.removeEventListener("mouseup", this.onMouseUp)
        }
        onMouseUp() {
            this.isTimelineDown = !1
        }
        onMouseMove(e) {
            this.isTimelineDown && (e = (e.pageX - (this.timelinePos.left || 0)) / this.$timeline.clientWidth,
            this.data.currentTime = e * this.querySelector("video").duration,
            this.querySelector("video").currentTime = this.data.currentTime)
        }
        render() {
            var {src: e, isMuted: t, isPlaying: s, alt: i, duration: r, currentTime: n, poster: a} = this.data;
            return o`
            <div class="abs tl:0 fit mask c:#fff">

                <video 
                    ?src="${e}" 
                    aria-label="${i}" 
                    _autoplay 
                    _muted 
                    loop
                    playsinline
                    class="object:contain fit abs tl:0" 
                    @play="${e=>this.data.isPlaying = !0}"
                    @canplay="${e=>this.data.duration = e.currentTarget.duration}"
                    @timeupdate="${e=>this.data.currentTime = e.currentTarget.currentTime}"
                    @click="${e=>this.togglePlay()}"
                    ?poster=${a}>
                </video>
                

                <button class="z:3 abs tl:50% shift-x:-50% shift-x:-50% transform w:50px h:50px h:35px@m w:35px@m bg:#fff radius:100% flex items:center just:center  ${s ? "d:none" : ""}" @click="${e=>this.togglePlay(e)}" aria-label="play video">
                    <svg class="m-l:4px w:10px" aria-hidden="true" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 10.3923L2.47854e-07 20.7846L0 2.32535e-07L19.5 10.3923Z" fill="black"/>
                    </svg>
                </button>
                
                <div class="abs bl:0 w:fit bl:0 z:2 w:fit p:25px,20px fs:10px fw:500 ff:alt p:12px,15px@m">
                    <div class="flex items:center just:between m-b:0px">
                        <span class="shrink:0 uppercase">${_t(n) + " / " + _t(r)}</span>
                        <button @click="${e=>this.toggleSound()}" aria-label="mute/unmute" class="shrink:0 uppercase">${"Sound: " + (t ? "Off" : "On")}</button>
                    </div>
                    <div class="h:10px p-t:5px w:fit cursor:pointer" @pointerdown="${e=>this.onTimelineDown(e)}">
                        <div class="rel bg:#ffffff60 h:2px mask transform">
                            <div class="bg:#fff fit transform" style="${{
                transform: `translate3d(${n / r * 100 - 100}%,0,0)`
            }}"></div>
                        </div>
                    </div>
                </div>


            </div>`
        }
    }
    );
    customElements.define("app-video-hover", class extends e {
        created() {
            this.onMouseEnter = this.onMouseEnter.bind(this),
            this.onMouseLeave = this.onMouseLeave.bind(this)
        }
        attached() {
            this.$video = this.querySelector("video"),
            this.addEventListener("mouseenter", this.onMouseEnter),
            this.addEventListener("mouseleave", this.onMouseLeave)
        }
        onMouseEnter(e) {
            this.$video && (this.$video.currentTime = 0,
            this.$video?.play())
        }
        onMouseLeave(e) {
            this.$video && this.$video?.pause()
        }
        detached() {
            this.$video.pause(),
            this.removeEventListener("mouseenter", this.onMouseEnter),
            this.removeEventListener("mouseleave", this.onMouseLeave)
        }
    }
    );
    const $t = e=>{
        e = ("; " + document.cookie).split(`; ${e}=`);
        if (2 === e.length)
            return e.pop().split(";").shift()
    }
      , Et = (e,t)=>{
        var s = e.getDate();
        return e.setMonth(e.getMonth() + +t),
        e.getDate() != s && e.setDate(0),
        e
    }
    ;
    class At extends HTMLElement {
        connectedCallback() {
            this.$accept = this.querySelector("[btn-accept]"),
            this.$decline = this.querySelector("[btn-decline]"),
            this._active = !$t("rejouice_cookie_consent"),
            n.on("loader:end", ()=>{
                this.classList.add("is-loader-ended")
            }
            ),
            this._active ? document.documentElement.classList.add("has-cookie-bar") : (this.style.display = "none",
            1 == Number($t("rejouice_cookie_consent")) && setTimeout(()=>{
                this.injectScripts()
            }
            , 5e3),
            document.documentElement.classList.remove("has-cookie-bar")),
            this.$accept.addEventListener("click", ()=>{
                this.style.display = "none",
                this.injectScripts(),
                document.cookie = `rejouice_cookie_consent=1; expires=${Et(new Date, 12).toString()}; path=/`,
                document.documentElement.classList.remove("has-cookie-bar")
            }
            ),
            this.$decline.addEventListener("click", ()=>{
                this.style.display = "none",
                document.cookie = `rejouice_cookie_consent=0; expires=${Et(new Date, 12).toString()}; path=/`,
                document.documentElement.classList.remove("has-cookie-bar")
            }
            )
        }
        injectScripts() {
            var e = document.createElement("script")
              , e = (e.id = "gad-script",
            e.type = "text/javascript",
            e.src = "https://www.googletagmanager.com/gtag/js?id=G-L9SC3PBRXC",
            document.body.appendChild(e),
            document.createElement("script"));
            e.id = "gad-script",
            e.type = "text/javascript",
            e.innerHTML = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-L9SC3PBRXC');`,
            document.body.appendChild(e)
        }
    }
    customElements.define("app-cookie-banner", At);
    const g = new WeakMap;
    function Ct(e, t) {
        return e && (g.get(e) || g.set(e, ((s,i={})=>{
            if (s && Ye(s)) {
                let {widths: e=Qe, ...t} = i;
                const {url: r, dimensions: n, alt: a, copyright: o, ...l} = s;
                i = Object.values(l);
                return "thumbnails" === e && i.length < 1 && (e = Qe),
                {
                    src: Xe(r, t),
                    srcset: "thumbnails" === e ? [Ue(r, {
                        ...t,
                        widths: [n.width]
                    }), ...i.map(e=>Ue(e.url, {
                        ...t,
                        widths: [e.dimensions.width]
                    }))].join(", ") : Ue(s.url, {
                        ...t,
                        widths: e
                    })
                }
            }
            return null
        }
        )(e, t)),
        g.get(e))
    }
    function v(e, t) {
        var s;
        return e && (g.get(e) || g.set(e, ([t,s={}] = [e, t],
        t && Ye(t) ? Xe(t.url, s) : null)),
        g.get(e))
    }
    function w(e, t) {
        return e && (g.get(e) || g.set(e, ((t,s,n)=>{
            if (t) {
                let e;
                return e = n ? Ie("object" == typeof n ? Ze(n) : (e,t,s,i,r)=>n(e, t, s, i.join(""), r), We(s)) : We(s),
                Re(t, e).join("")
            }
            return null
        }
        )(e, t)),
        g.get(e))
    }
    function x(e) {
        return "page" === e.type ? "/" + e.slug : "/"
    }
    customElements.define("block-cover", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        afterRender() {}
        resize() {
            var e, t, s, i, r;
            this.$iframe && (e = 1920,
            t = 1080,
            s = this.clientWidth,
            i = this.clientHeight,
            s = [s / e, i / t],
            r ? Math.min(s[0], s[1]) : Math.max(s[0], s[1]))
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <section class="rel z:2 h:100vhfix c:#FFFCF1 w:fit mask h:50vhfix@m" >

                <scroll-object class="block abs tl:0 fit" parallax ratio="-0.1">
                    <img  
                        loading="lazy"
                        decode="async"
                        alt="${e?.image?.alt}" 
                        width="${e?.image?.dimensions?.width}"
                        height="${e?.image?.dimensions?.height}"
                        ?src="${e?.image?.url && v(e?.image, {
                fm: "webp"
            })}"
                        class="abs tl:0 fit object:cover transform scale:1.4 (.in-view):scale:1 (.in-view):tween:all,1.8s,easeOutSlow" 
                    />
                </scroll-object>

                <video autoplay loop muted  playsinline
                    ?src="${e?.video?.url}"  
                    class="abs tl:0 w:fit h:fit object:cover">
                </video>

                <div class="abs bl:0 w:fit h:75% ${e?.use_gradient ? "" : "d:none"}"
                    style="${{
                background: `linear-gradient(0deg, ${e?.gradient_color}, transparent)`
            }}">
                </div>

                <div class="abs tl:0 fit flex items:end just:between p:44fx,40fx">
                    <div class="w:fit blend:difference">
                        <div class="(&//*):fs:190fx lh:0.68 m-b:80fx  ff:alt">
                            <split-text data-delay="0.3">
                                ${e?.title && w(e?.title, x)}
                            </split-text>
                        </div>
                        <p class="fs:16fx">
                            <split-text simple delay="0.6">
                                ${e?.subtitle}
                            </split-text>
                        </p>
                    </div>

                    <div class="space-y:55fx align-x:right d:none ${e?.vimeo_reel_link ? "d:block@m" : "d:none@m"}">
                        <div class="bg:none border:none">
                            <nav class="flex just:between items:center fs:16fx m-b:7fx">
                                <button class="border:none bg:none space-x:9fx flex items:center just:start ">
                                    <span class="bg:#FF5F38 h:20fx w:20fx flex items:center just:center radius:100px">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none">
                                        <path d="M3.47669 2.67493C3.73935 2.87702 3.7363 3.27408 3.47058 3.47212L0.864538 5.4143C0.537145 5.6583 0.0711485 5.42822 0.0657971 5.01995L0.013533 1.03249C0.00805605 0.614631 0.487176 0.374829 0.818385 0.629658L3.47669 2.67493Z" fill="#FFFCF1"/>
                                        </svg>
                                    </span>
                                    <span class="iblock align-y:middle">Play reel</span>
                                </button>
                                <p>
                                    —01:18
                                </p>
                            </nav>
                            <img 
                                loading="lazy"
                                decode="async" 
                                src="assets/images/reel-poster.webp" 
                                width="420"
                                height="240"
                                class="w:210fx h:120fx bg:#FFFCF1 radius:4fx" 
                                alt="Rell poster"
                            />
                        </div>
                        <button aria-label="go to next section" class="bg:none border:none">
                            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.04624 16.352L5.97861 19.8895C5.8957 19.9724 5.84043 20 5.70224 20H4.26515C4.12697 20 4.0717 19.9724 3.98879 19.8895L0.921153 16.352C0.838244 16.2691 0.838244 16.1585 0.838244 16.0204L0.838244 14.1964C0.838244 14.0582 1.00406 14.0029 1.08697 14.1135L3.96115 17.568C4.04406 17.6785 4.15461 17.6233 4.15461 17.5127L4.15461 0.68218C4.15461 0.599272 4.20988 0.543998 4.29279 0.543998L5.70224 0.543998C5.78515 0.543998 5.84043 0.599272 5.84043 0.68218L5.84043 17.5127C5.84043 17.6233 5.95097 17.6785 6.03388 17.568L8.88043 14.1135C8.96334 14.0029 9.12915 14.0582 9.12915 14.1964V16.0204C9.12915 16.1585 9.12915 16.2415 9.04624 16.352Z" fill="#FFFCF1"/>
                            </svg>
                        </button>
                    </div>
                </div>

            </section>` : o``
        }
    }
    );
    customElements.define("block-intro", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"];
            return e ? (e.theme,
            e.theme,
            o`

            <div id="${e.section_id}" 
                class="
                | block rel z:3 p-x:40fx  
                | ${"light" == e.theme ? "_bg:#FAF8F3 c:#0E0E0E" : "bg:#0E0E0E c:#FAF8F3"}
                | ${e?.show_sphere ? "p-t:278fx p-t:150fx@m mask p-b:85fx p-b:40fx@m" : " p-y:85fx p-y:40fx@m"}
                p-x:10fx@m 
                ">

                <video autoplay loop muted  playsinline
                    ?src="${!!e?.show_sphere && "assets/videos/RJ-BALL-BLUE-ORANGE.webm"}"  
                    class="abs t:-90%  t:0%@m l:50% w:150% w:300%@m max-w:100000% transform shift-y:0% shift-y:-40%@m shift-x:-50%  ${e?.show_sphere ? "" : "d:none"}"
                    style="filter:blur(50px);">
                </video>

                <div class="flex items:end just:between">
                    <h2 class="(&/*):fs:24fx (&/*)fs:14fx@m lh:1.14 m-b:0.7em ${e?.titleIntro ? "" : "d:none"}">
                        <split-text>
                            ${e?.titleIntro?.replace(/\n/g, "<br/>")}
                        </split-text>
                    </h2>
                    <h2 class="align-x:right@m w:120fx@m  (&/*):fs:24fx (&/*)fs:14fx@m lh:1.14 m-b:0.7em ${e?.titleIntro ? "" : "d:none"}">
                        <split-text>
                            ${e?.subtitle?.replace(/\n/g, "<br/>")}
                        </split-text>
                    </h2>
                </div>

                <scroll-object class="block rel w:fit ${e?.titleIntro ? "" : "d:none"}" >
                    <hr class="m-b:10fx block h:0.5px bg:#00000080 transform origin:0,0 scale-x:0 (.in-view):scale-x:1 (.in-view):tween:all,1.6s,easeOut "/>
                </scroll-object>

                <div class="wysiwyg_links fs:62fx fs:28fx@m lh:1.07 _indent:4em letter:-1px (&/em):fs:0.5em (&/a):deco:underline  (&/a):deco-thickness:3px (&/a):underline-offset:0.5em ${e?.show_sphere ? "_blend:difference _c:#fff" : ""}">
                    <split-text 
                        indent="${e?.text_indent}" 
                        css="
                            sup { 
                                font-size: 0.5em; 
                            }
                            a { 
                                color: inherit;
                                text-decoration: none;
                                position: relative;
                                text-shadow: -2px -2px 1px #FAF8F3,
                                             2px -2px 1px #FAF8F3,
                                             2px 2px 1px #FAF8F3,
                                             -2px 2px 1px #FAF8F3;
                            }
                            a:before,
                            a:after  {
                                content: '';
                                display: block;
                                height: 0.05em; width: 100%;
                                background: currentColor;
                                position: absolute;
                                top: 100%; left: 0;
                                margin-top: -0.1em;
                                will-change: transform;
                                transform-origin: 100% 0;
                                z-index: -1;
                            }
                            a:before {
                                transform: scaleX(0) translateZ(0);
                                transition: transform 0.5s cubic-bezier(0.430, 0.195, 0.020, 1.000);
                            }
                            a:after {
                                transform-origin: 0% 0;
                                transform: scaleX(1) translateZ(0);
                                transition: transform 0.5s 0.1s cubic-bezier(0.430, 0.195, 0.020, 1.000);
                            }
                            a:hover:before,
                            a.hover:before {
                                transform: scaleX(1) translateZ(0);
                                transform-origin: 0% 0;
                                transition: transform 0.5s 0.1s cubic-bezier(0.430, 0.195, 0.020, 1.000);
                            }
                            a:hover:after,
                            a.hover:after {
                                transform: scaleX(0) translateZ(0);
                                transform-origin: 100% 0;
                                transition: transform 0.5s cubic-bezier(0.430, 0.195, 0.020, 1.000);
                            }
                            sup a:before,
                            sup a:after  {
                                display: none;
                            }
                        }">
                        ${e?.text ? (e?.text_indent ? "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" : "") + w(e?.text, x)?.replace(/\<p\>/g, "")?.replace(/\<\/p\>/g, "<br/><br/>")?.replace(/\<em\>/g, "<sup>")?.replace(/\<\/em\>/g, "</sup>")?.replace(/https\:\/\/\//g, "/") : o``}
                    </split-text>
                </div>

            </div>`) : o``
        }
    }
    );
    customElements.define("block-push", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"]
              , t = "large" == e?.spacing ? 400 : "medium" == e?.spacing ? 235 : 130
              , s = "large" == e?.spacing ? 200 : "medium" == e?.spacing ? 115 : 60;
            return e ? o`

            <section 
                ?dark-theme=${"dark" == e.theme}
                class="z:2 rel   p-x:40fx p-x:20fx@m _before _before:p-t:60% mask ${`p-y:${t}fx`} ${`p-y:${s}fx@m`} ${"light" == e.theme ? "bg:#FAF8F3 c:#0E0E0E" : "bg:#0E0E0E c:#FAF8F3"}" >

                <scroll-object class="block abs tl:0 fit" parallax ratio="-0.1">
                    <img  
                        loading="lazy"
                        decode="async"
                        alt="${e?.image?.alt}" 
                        ?src="${e?.image?.url && v(e?.image, {
                fm: "webp"
            })}"
                        width="${e?.image?.dimensions?.width}"
                        height="${e?.image?.dimensions?.height}"
                        class="abs tl:0 fit object:cover transform scale:1.4 (.in-view):scale:1 (.in-view):tween:all,1.8s,easeOutSlow" 
                    />
                    <video autoplay loop muted  playsinline
                        ?src="${e?.video?.url}"  
                        class="abs tl:0 fit object:cover ${e?.video?.url ? "" : "d:none"}">
                    </video>
                </scroll-object>

                <!-- <div class="abs tl:0 fit flex items:center just:center">
                    <gl-sphere class="block w:50% before before:p-t:100%"></gl-sphere>
                </div> -->

                <div class="_abs _tl:0 w:fit flex items:center just:center">
                    <div class="rel align-x:center __blend:difference ___c:#fff">
                        <div class="(&/*):fs:16fx (&/*):fs:14fx@m lh:1.24 m-b:0.75em space-x:10fx ${e?.subtitlePush ? "" : "d:none"}">
                            <span class="iblock align-y:middle">
                                ${e?.subtitlePush && w(e?.subtitlePush, x)?.replace("<em>", '<span class="rel b:0.2em iblock fs:0.625em! lh:2 bg:#0E0E0E c:#FAF8F3 p:0fx,0.7em radius:100px">')?.replace("</em>", "</span>")}
                            </span>
                            <span class="iblock align-y:middle transform rotate:-90deg">↵</span>
                        </div>
                        <div class="(&//*):fs:62fx ${e?.small_mobile_font ? "(&//*):fs:28fx@m" : "(&//*):fs:50fx@m"} lh:1.07 letter:-0.93px deco:underline deco-thickness:3px underline-offset:0.5em">
                            <split-text 
                                dark="${"dark" == e.theme}"
                                css="
                                sup { 
                                    font-size: 0.5em; 
                                }
                                a { 
                                    color: inherit;
                                    text-decoration: none;
                                    position: relative;
                                    text-shadow: -2px -2px 1px #FAF8F3,
                                                2px -2px 1px #FAF8F3,
                                                2px 2px 1px #FAF8F3,
                                                -2px 2px 1px #FAF8F3;
                                }
                                .is-dark-theme a {
                                    text-shadow: -2px -2px 1px transparent,
                                                2px -2px 1px transparent,
                                                2px 2px 1px transparent,
                                                -2px 2px 1px transparent;
                                }
                                a:before,
                                a:after  {
                                    content: '';
                                    display: block;
                                    height: 0.05em; width: 100%;
                                    background: currentColor;
                                    position: absolute;
                                    top: 100%; left: 0;
                                    margin-top: -0.1em;
                                    will-change: transform;
                                    transform-origin: 100% 0;
                                    z-index: -1;
                                }

                                @media screen and (max-width:600px) {
                                    a:before,
                                    a:after  {
                                        height: 0.035em;
                                    }
                                }

                                a:before {
                                    transform: scaleX(0) translateZ(0);
                                    transition: transform 0.5s cubic-bezier(0.430, 0.195, 0.020, 1.000);
                                }
                                a:after {
                                    transform-origin: 0% 0;
                                    transform: scaleX(1) translateZ(0);
                                    transition: transform 0.5s 0.1s cubic-bezier(0.430, 0.195, 0.020, 1.000);
                                }
                                a:hover:before,
                                a.hover:before {
                                    transform: scaleX(1) translateZ(0);
                                    transform-origin: 0% 0;
                                    transition: transform 0.5s 0.1s cubic-bezier(0.430, 0.195, 0.020, 1.000);
                                }
                                a:hover:after,
                                a.hover:after {
                                    transform: scaleX(0) translateZ(0);
                                    transform-origin: 100% 0;
                                    transition: transform 0.5s cubic-bezier(0.430, 0.195, 0.020, 1.000);
                                }
                                sup a:before,
                                sup a:after  {
                                    display: none;
                                }
                                ">
                                ${e?.title && w(e?.title, x)?.replace(/\<br\s\/\>and/g, "<br>& ")}
                            </split-text>
                        </div>
                    </div>
                </div>

            </section>` : o``
        }
    }
    );
    customElements.define("block-works-preview", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <section class="rel z:2 bg:#FAF8F3 c:212121 p-x:40fx p-y:85fx p-x:10fx@m" >

                <div class="(&//*):fs:24fx (&//*):fs:14fx@m letter:-0.72px lh:1.24 flex items:center just:between w:fit m-b:13fx">
                    <span class="">
                        ${e?.title && w(e?.title, x)}
                    </span>
                    <a href="work" class=" ">
                        <span class="transform scale-x:-1 iblock m-r:0.5em m-r:0.25em">↵</span>
                        <span class="underlined-link">See the work</span>
                    </a>
                </div>



                <div class="flex items:start just:between w:fit _wrap:wrap overflow-x:auto@m space-x:10fx@m no-scrollbar" >
                    ${e?.slides?.map(e=>o`
                        <a href="${"work/" + e?.link?._meta?.uid}" class="group rel mask _radius:4fx before before:p-t:128% w:440fx  before:p-t:140%@m w:250fx@m shrink:0@m">
                            <img  
                                loading="lazy"
                                decode="async"
                                alt="${(e?.image || e?.link.image)?.alt}" 
                                ?src="${(e?.image || e?.link.image)?.url}"
                                width="${(e?.image || e?.link.image)?.dimensions?.width}"
                                height="${(e?.image || e?.link.image)?.dimensions?.height}"
                                class="abs tl:0 fit object:cover" 
                            />

                            <app-video-hover class="abs tl:0 fit block">
                                <video loop muted  playsinline
                                    ?src="${e?.video_loop?.url}"  
                                    class="tween:opacity,0.6s,easeOutCubic o:0 (.group:hover):o:1 abs tl:0 fit object:cover ${e?.video_loop?.url ? "" : "d:none"}">
                                </video>
                            </app-video-hover>
                            
                            <span class="pointer:none abs tl:0 fit flex items:end just:center p-b:69fx w:fit align-x:center p-b:20fx@m">
                                <img  
                                    loading="lazy" 
                                    alt=""
                                    decode="async" 
                                    src="${e?.link.logo?.url}" 
                                    width="${e?.link.logo?.dimensions?.width}"
                                    height="${e?.link.logo?.dimensions?.height}"
                                    class="h:30fx w:auto __w:130fx object:contain h:15fx@m w:fit@m"
                                />
                            </span>
                        </a>
                    `)}
                </div>
                

            </section>` : o``
        }
    }
    );
    customElements.define("block-article", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            let s = this.data["content"];
            const i = "1 column" == s?.layout || "blocks" == s?.layout;
            var e = "blocks" == s?.layout ? "(&//*):fs:62fx" : "(&//*):fs:24fx"
              , t = "1 column" == s?.layout ? "d:block w:900fx w:fit@m" : "blocks" == s?.layout ? "d:block w:fit p-r:204fx p-r:0@m" : "w:fit flex items:start just:between";
            const r = "1 column" == s?.layout;
            return s ? o`

            <section 
                ?dark-theme="${"dark" == s.theme}"
                class="
                rel z:2 p-x:40fx p-y:85fx ${"blocks" != s.layout ? "flex items:start just:between" : ""} ${"light" == s.theme ? "bg:#FAF8F3 c:#0E0E0E" : "bg:#0E0E0E c:#FAF8F3"}
                 p-x:10fx@m p-y:40fx@m
                 mask
                ${"1 column" == s?.layout ? "d:block@m" : ""}
                " >

                <h2 class=" ${"1 column" == s?.layout ? "w:460fx" : "w:900fx w:fit@m"} m-b:98fx m-b:27fx@m ${e} p-t:20fx ${i ? "" : "d:none"}  (&//*):fs:28fx@m ">
                    <split-text>
                        ${s?.title && w(s?.title, x)}
                    </split-text>
                </h2>

                <scroll-object class="space-y:60fx ${t}">
                    ${s?.slides?.map((e,t)=>o`
                        <article class="p-t:20fx p-t:10fx@m  ${i ? "w:fit flex just:between items:start w:fit" : "w:410fx w:fit@m"} ${r ? "b-t:solid,0.5px,#00000080" : ""} o:0 (.in-view):o:1 ${`(.in-view):tween:all,1s,${.2 + .1 * t}s,easeOut`}">
                            <span class="${i ? "d:none" : "d:block m-b:40fx fs:16fx! "} ">
                                ${`(0${t + 1})`}
                            </span>
                            <span class="(&//*):fs:24fx (&//*):fs:14fx@m block shrink:0 ${i ? "w:230fx w:120fx@m" : "deco:underline m-b:1.5em"} m-b:1em@m">
                                ${e.title && w(e.title, x)}
                            </span>
                            <span class="(&//*):fs:24fx (&//*):fs:14fx@m block ${"blocks" == s?.layout ? "w:448fx" : "w:fit"} shrink:1 w:fit@m">
                                ${e.text && w(e.text, x)}
                            </span>
                        </article>
                    `)}
                </scroll-object>

            </section>` : o``
        }
    }
    );
    customElements.define("block-media", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        created() {
            this.intersectionObserver = new IntersectionObserver(e=>{
                e.forEach(e=>{
                    e.isIntersecting ? (e = this.querySelector("video")) && e?.play() : (e = this.querySelector("video")) && e?.pause()
                }
                )
            }
            )
        }
        attached() {
            this.intersectionObserver.observe(this)
        }
        detached() {
            this.intersectionObserver.unobserve(this)
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <section class="rel before before:p-t:48% mask before:p-t:88%@m" >
                <scroll-object class="block abs tl:0 fit">
                    <img  
                        loading="lazy"
                        decode="async"
                        alt="${e?.image?.alt}" 
                        ?src="${e?.image?.url && v(e?.image, {
                fm: "webp"
            })}"
                        class="abs tl:0 fit object:cover" 
                        width="${e?.image?.dimensions?.width}"
                        height="${e?.image?.dimensions?.height}"
                    />
                    <video  
                        ?src="${e?.video?.url}"
                        class="abs tl:0 fit object:cover ${e?.video?.url ? "" : "d:none"}" 
                        muted playsinline loop preload
                    ></video>
                </scroll-object>
            </section>` : o``
        }
    }
    );
    customElements.define("block-title", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"];
            return e ? o`
            <section class="rel z:2 p-x:40fx m-t:150fx p-b:150fx flex items:start just:center ${"light" == e.theme ? "bg:#FAF8F3 c:#0E0E0E" : "bg:#0E0E0E c:#FAF8F3"} p-b:40fx@m" >
                <h2 class="(&//*):fs:130fx (&//*):fs:60fx@m align-x:center ff:alt lh:1 fw:400 letter:-1.31px">
                    <split-text simple>
                    ${e?.title && w(e?.title, x)}
                    </split-text>
                </h2>
            </section>` : o``
        }
    }
    );
    customElements.define("block-reel", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        playReel() {
            n.fire("reel:show")
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <section  @click="${e=>this.playReel()}" class="group rel c:#fff">

                <!-- <button class="m-l:40fx m-b:10fx border:none bg:none space-x:9fx flex items:center just:start c:#0E0E0E">
                    <span class="bg:#FF5F38 h:20fx w:20fx flex items:center just:center radius:100px">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none">
                        <path d="M3.47669 2.67493C3.73935 2.87702 3.7363 3.27408 3.47058 3.47212L0.864538 5.4143C0.537145 5.6583 0.0711485 5.42822 0.0657971 5.01995L0.013533 1.03249C0.00805605 0.614631 0.487176 0.374829 0.818385 0.629658L3.47669 2.67493Z" fill="#FFFCF1"/>
                        </svg>
                    </span>
                    <span class="iblock align-y:middle">Play</span>
                </button> -->

                <div class="before before:p-t:48% rel mask before:p-t:60%@m">
                    <img  
                        loading="lazy"
                        decode="async"
                        alt="${e?.image?.alt}" 
                        ?src="${e?.image?.url && v(e?.image, {
                fm: "webp"
            })}"
                        class="abs tl:0 fit object:cover" 
                        width="${e?.image?.dimensions?.width}"
                        height="${e?.image?.dimensions?.height}"
                    />
                    <!-- <h3 class="abs b:40fx l:0 w:fit p-x:40fx flex items:end just:between fs:130fx">
                        <span>watch</span>
                        <span>showreel</span>
                    </h3> -->

                    <video autoplay loop muted playsinline 
                        ?src="${e?.video_loop?.url}"  
                        class="abs tl:0 fit object:cover ${e?.video_loop?.url ? "" : "d:none"}">
                    </video>

                </div>


                <core-cursor-wrapper class="transform block abs tl:0 fit">
                    <core-cursor aria-hidden="true" class="transform d:block tl:0fx w:122fx h:122fx max-w:122px max-h:122px pointer:none z:2 border:none abs tl:0 fs:0 | d:none@m ">
                        <div class="
                                abs tl:0 fit bg:#FF5F38 c:#FFFCF1 flex items:center just:center radius:200px  mask
                                transform scale:0 (.group:hover):scale:1  tween:transform,1s,easeOut 
                            ">
                            <span class="fs:15fx transform c:#0E0E0E">Play Reel</span>
                        </div>
                    </core-cursor>
                </core-cursor-wrapper>


                <div aria-hidden="true" class="d:none d:block@m transform abs tl:50% w:85fx h:85fx z:2 border:none shift-x:-50% shift-y:-50%">
                    <div class="
                            abs tl:0 fit bg:#FF5F38 c:#FFFCF1 flex items:center just:center radius:200px mask
                        ">
                        <span class="fs:15fx fs:13px@m  rel t:0.1em transform c:#0E0E0E">Play Reel</span>
                    </div>
                </div>
                

            </section>` : o``
        }
    }
    );
    customElements.define("block-faq", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <section class="rel z:2 p-x:40fx p-t:210fx p-b:85fx flex items:start just:between bg:#FAF8F3 c:#0E0E0E d:block@m p-x:10fx@m p-t:110fx@m" >

                <div class="max-w:560fx (&//*):fs:62fx p-t:20fx  (&//*):fs:28fx@m m-b:30fx@m">
                    ${e?.title && w(e?.title, x)}
                </div>

                <div class=" space-y:60fx w:670fx w:fit@m">
                    ${e?.slides?.map((e,t)=>o`
                        <div class="w:fit flex items:start just:start p-t:20fx  b-t:solid,0.5px,#00000080 p-r:80fx p-r:60fx@m">
                            <span class="shrink:0 block w:120fx fs:16fx d:none@m">${`(0${t})`}</span>
                            <div class=" space-y:34fx w:fit">
                                <span class="block (&/*):fs:24fx (&/*):fs:17fx@m">${(e.title && w(e.title, x))?.replace("<h3>", "<h3>(Q). ")?.replace("®", "<sup>®</sup>")}</span>
                                <span class="block (&/*):fs:24fx (&/*):fs:17fx@m">${(e.text && w(e.text, x))?.replace("<p>", "<p>(A). ")}</span>
                            </div>
                        </div>
                    `)}
                </div>

            </section>` : o``
        }
    }
    );
    customElements.define("block-legals", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <section dark-theme class="rel z:2 p-x:40fx p-t:298fx p-b:85fx bg:#0E0E0E c:#FAF8F3 p-x:10fx@m" >

                <div class="(&//*):fs:190fx m-b:192fx w:fit align-x:center (&//*):fs:60fx@m m-b:192fx m-b:80fx@m">
                    ${e?.title && w(e?.title, x)}
                </div>

                <div class="">
                    ${e?.slides?.map((e,t)=>o`
                        <div class="flex items:start just:start p-t:94fx w:fit b-t:solid,0.5px,#FFFCF150 m-b:85fx d:block@m">
                            <div class="max-w:560fx fs:62fx! (&//*):fs:62fx m-b:192fx w:fit align-x:left fs:28fx! (&//*):fs:28fx m-b:60fx@m">
                                <span class="block ">${e.title && w(e.title, x)}</span>
                            </div>
                            <div class="w:670fx w:fit@m fs:20fx lh:1.4 shrink:0 fs:18fx@m">
                                ${e.text && w(e.text, x)}
                            </div>
                        `)}
                    </div>
                </div>
                            
            </section>` : o``
        }
    }
    );
    customElements.define("block-metric", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <section class="rel z:2 p-l:40fx m-b:150fx bg:#FAF8F3 c:#0E0E0E ${e?.headline ? "p-t:210fx" : ""} p-x:10fx@m" >

                <h2 class="(&/*):fs:24fx (&/*):fs:14fx@m lh:1.14 p-b:1em p-b:0.4em@m m-b:104fx m-b:44fx@m b-b:solid,0.5px,#00000080 ${e?.headline ? "" : "d:none"}">
                    ${e?.headline && w(e?.headline, x)}
                </h2>
                
                <h2 class="m-b:44fx@m flex items:end just:start space-x:13fx m-b:100fx items:center@m">
                    <span class=" (&//*):fs:55fx  (&//*):fs:28fx@m ">
                        ${e?.title && w(e?.title, x)}
                    </span>
                    <span class="m-b:0.75em iblock fs:16fx fs:14fx@m lh:1.2 bg:#0E0E0E c:#FAF8F3 p:2fx,12fx radius:100px m-b:0@m">Model</span>
                </h2>

                <div class="p-l:113fx flex items:start just:start wrap:wrap space-y:100fx space-x:20fx m-b:-100fx  m-b:-60fx@m  space-y:60fx@m p-l:0@m space-x:28fx@m">
                    ${e?.slides?.map((e,t)=>o`
                        <div class="w:400fx w:148fx@m">

                            <img  
                                loading="lazy"
                                decode="async"
                                alt="${e?.logo?.alt}" 
                                ?src="${e?.logo?.url}"
                                width="${e?.logo?.dimensions?.width}"
                                height="${e?.logo?.dimensions?.height}"
                                class="w:auto h:35fx m-b:20fx h:28fx@m m-b:10fx@m" 
                            />

                            <hr class="w:fit h:1px bg:#00000080 m-b:40fx m-b:30fx@m"/>

                            <div class="m-b:40fx fs:28fx  fs:24fx@m">${e.subtitle}</div>

                            <div class="space-y:55fx space-y:40fx@m">

                                <div class="block">
                                    <div class="fs:20fx o:0.6 m-b:0.2em m-b:0.8em@m fs:14fx@m">
                                        ${e.label1}
                                    </div>
                                    <div class="fs:28fx (&//br):d:none (&//br):d:block@m ${"c:" + e.color1} fs:24fx@m">
                                        ${e.value1?.replace(/\n/g, '<br class="d:none d:block@m">')}
                                    </div>
                                </div>
    
                                <div class="block">
                                    <div class="fs:20fx o:0.6 m-b:0.2em m-b:0.8em@m fs:14fx@m">
                                        ${e.label2}
                                    </div>
                                    <div class="fs:28fx (&//br):d:none (&//br):d:block@m ${"c:" + e.color2} fs:24fx@m">
                                        ${e.value2?.replace(/\n/g, '<br class="d:none d:block@m">')}
                                    </div>
                                </div>
    
                                <div class="block ${e.label3 ? "" : "d:none"}">
                                    <div class="fs:20fx o:0.6 m-b:0.2em m-b:0.8em@m fs:14fx@m">
                                        ${e.label3}
                                    </div>
                                    <div class="fs:28fx (&//br):d:none (&//br):d:block@m ${"c:" + e.color3} fs:24fx@m">
                                        ${e.value3?.replace(/\n/g, '<br class="d:none d:block@m">')}
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                    `)}
                </div>

            </section>` : o``
        }
    }
    );
    customElements.define("block-works", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        get defaultData() {
            return {
                mode: 600 < window.innerWidth ? "dispatched" : "fullsize"
            }
        }
        render() {
            let {content: e, mode: a} = this.data;
            return e ? o`

            <section class="rel  bg:#FAF8F3 c:212121 p-t:85fx  p-t:0@m" >

                <nav class="pointer:none z:12 pos:sticky t:0fx p-t:30fx  align-x:center  fs:16px blend:difference p-x:40fx m-b:60fx d:none@m ">
                    <button @click="${e=>this.data.mode = "fullsize"}"   class="pointer:auto  border:solid,1px,currentColor bg:none c:#fff (&.is-active):c:#000 (&.is-active):bg:#fff (&.is-active):border:solid,1px,#fff radius:26px p:5px,15px lh:1.24 ${"fullsize" == a ? "is-active" : ""}">Full Size Grid</button>
                    <button @click="${e=>this.data.mode = "dispatched"}" class="pointer:auto  border:solid,1px,currentColor bg:none c:#fff (&.is-active):c:#000 (&.is-active):bg:#fff (&.is-active):border:solid,1px,#fff radius:26px p:5px,15px lh:1.24 ${"dispatched" == a ? "is-active" : ""}">Dispatched Grid</button>
                </nav>

                <div class="rel z:2 ${"fullsize" == a ? "" : "space-y:49fx p-x:40fx"}  ${"fullsize" == a ? "" : "p-b:237fx"} 
                            mask clear:both bg:#FAF8F3
                        ">
                    ${e?.slides?.map((e,t)=>{
                lets;
                s = "fullsize" == a ? "before:p-t:57%" : e.video_ratio ? `before:p-t:${100 * Number(e.video_ratio)}%` : t % 5 == 0 || t % 5 == 3 ? "before:p-t:100%" : "before:p-t:54%";
                var i = "fullsize" == a ? "w:100%" : t % 5 == 2 || t % 5 == 4 ? "w:900fx" : "w:670fx"
                  , r = "fullsize" != a && (t % 5 == 2 || t % 5 == 4) ? "m-x:auto" : ""
                  , n = "fullsize" == a ? "" : t % 5 == 0 ? "float:left" : t % 5 == 1 || t % 5 == 3 ? "float:right" : "clear:both";
                return o`
                            <a 
                                ?dark-theme="${"dark" == e?.theme}"
                                ?href="${"work/" + e?.case?._meta?.uid}" class="group block rel ${i} ${n} ${r}">

                                <app-video-hover class="block mask transform w:fit rel mask before ${"" + s} ${"fullsize" == a ? "" : "m-b:10fx"} before:p-t:100%@m" >
                                    <scroll-object __parallax ratio="-0.1" class="abs tl:0 fit">
                                        <img  
                                            loading="lazy"
                                            alt="${e?.image?.alt}" 
                                            ?src="${e?.image?.url}"
                                            class="fit object:cover" 
                                            width="${e?.image?.dimensions?.width}"
                                            height="${e?.image?.dimensions?.height}"
                                        />
                                        <video loop muted  playsinline
                                            ?src="${e?.case?.video_loop?.url}"  
                                            width="${e?.case?.video_loop?.dimensions?.width}"
                                            height="${e?.case?.video_loop?.dimensions?.height}"
                                            class="o:0 (.group:hover):o:1 abs tl:0 fit object:cover ${"fullsize" != a && e?.case?.video_loop?.url ? "" : "d:none"}">
                                        </video>
                                    </scroll-object>
                                </app-video-hover>
                                

                                <span class="w:fit flex items:center just:between ${"fullsize" == a ? "abs bl:0 c:#fff p-x:40fx p-b:24fx p-x:10fx@m p-b:10fx@m" : ""}">
                                    <h2 class="iblock rel (&/*):fs:16fx (&/*):fs:14fx@m underlined-link">
                                        <span>${e?.case?.title && w(e?.case?.title, x)}</span>
                                    </h2>
                                    <span class="align-x:right rel iblock mask">
                                        <span class=" transform tween:all,0.6s,easeOutCubic o:1 shift-y:0 (.group:hover):o:0 (.group:hover):shift-y:-100% iblock min-w:10em fs:16fx fs:14fx@m">${`(${t + 1 < 10 ? "0" + (t + 1) : t + 1})`}</span>                                    
                                        <span class="transform tween:all,0.6s,easeOutCubic o:0 shift-y:100% (.group:hover):o:1 (.group:hover):shift-y:0 iblock abs tr:0 fs:16fx fs:14fx@m o:0 (group:hover):o:1" >
                                            <span class="transform scale-x:-1 iblock m-r:0.5em">↵</span><span>See more</span>
                                        </span>
                                    </span>
                                </span>

                            </a>`
            }
            )}
                </div>
                

            </section>` : o``
        }
    }
    );
    var y = !1
      , k = !1
      , _ = !1
      , $ = [];
    let Ft = function(t) {
        k && t(y),
        _ && $.push(t),
        _ = !0;
        var s = document.createElement("video")
          , e = (s.autoplay = !1,
        s.loop = !1,
        s.style.display = "none",
        s.addEventListener("loadeddata", function() {
            var e = document.createElement("canvas");
            $ = (e.getContext && e.getContext("2d") ? ((e = e.getContext("2d")).drawImage(s, 0, 0),
            0 === e.getImageData(0, 0, 1, 1).data[3] ? (t(y = k = !(_ = !1)),
            $.forEach(e=>e(!0))) : (t(y = !(k = !(_ = !1))),
            $.forEach(e=>e(!1)))) : (t(y = !(k = !(_ = !1))),
            $.forEach(e=>e(!1))),
            [])
        }, !1),
        s.addEventListener("error", function() {
            t(y = !(k = !(_ = !1))),
            $.forEach(e=>e(!1)),
            $ = []
        }),
        s.addEventListener("stalled", function() {
            t(y = !(k = !(_ = !1))),
            $.forEach(e=>e(!1)),
            $ = []
        }),
        s.addEventListener("abort", function() {
            t(y = !(k = !(_ = !1))),
            $.forEach(e=>e(!1)),
            $ = []
        }),
        document.createElement("source"));
        e.src = "data:video/webm;base64,GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4ECQoWBAhhTgGcBAAAAAAACBRFNm3RALE27i1OrhBVJqWZTrIHlTbuMU6uEFlSua1OsggEjTbuMU6uEHFO7a1OsggHo7AEAAAAAAACqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAADIq17GDD0JATYCNTGF2ZjU3LjU3LjEwMFdBjUxhdmY1Ny41Ny4xMDBEiYhARAAAAAAAABZUrmsBAAAAAAAARq4BAAAAAAAAPdeBAXPFgQGcgQAitZyDdW5khoVWX1ZQOYOBASPjg4QCYloA4AEAAAAAAAARsIFAuoFAmoECU8CBAVSygQQfQ7Z1AQAAAAAAAGfngQCgAQAAAAAAAFuhooEAAACCSYNCAAPwA/YAOCQcGFQAADBgAABnP///NXgndmB1oQEAAAAAAAAtpgEAAAAAAAAk7oEBpZ+CSYNCAAPwA/YAOCQcGFQAADBgAABnP///Vttk7swAHFO7awEAAAAAAAARu4+zgQC3iveBAfGCAXXwgQM=",
        e.addEventListener("error", function() {
            t(y = !(k = !(_ = !1))),
            $.forEach(e=>e(!1)),
            $ = []
        }),
        s.appendChild(e)
    };
    var St = !0;
    Ft(e=>{
        St = e
    }
    );
    customElements.define("block-apply", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <section @click="${e=>n.fire("apply:show")}" class="  rel z:1 bg:#FAF8F3 c:#0E0E0E p-x:40fx p-y:85fx m-b:85fx p-x:0@m  m-y:-25fx@m  p-y:110fx@m overflow:hidden@m" >
            
                <scroll-object class="rel w:560fx w:335fx@m before before:p-t:100% block m-x:auto c:#FFFCF1">

                    <video 
                        autoplay loop muted playsinline 
                        poster="assets/images/apply-poster.png" 
                        src="${"assets/videos/RJ-BALL-BLUE-ORANGE-scaled." + (St ? "webm" : "mov")}"  
                        class="abs tl:50% w:fit w:180% max-w:100000% transform shift-x:-50% shift-y:-50% w:160%@m">
                    </video>
                    
                    <svg class="abs tl:0 fit transform rotate:-90deg" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="49" stroke="#fff" stroke-width="0.25" fill="none" class="o:0.3 dasharray:302 dashoffset:604 (.in-view):dashoffset:400 (.in-view):tween:all,2.8s,easeOutSlow " />
                        <circle cx="50" cy="50" r="49" stroke="#fff" stroke-width="0.25" fill="none" class="dasharray:302 dashoffset:302 (.in-view):dashoffset:100 (.in-view):tween:all,2.8s,easeOutSlow " />
                    </svg>

                    <svg class="abs tl:0 fit transform rotate:0 (.in-view):rotate:237deg (.in-view):tween:all,2.8s,easeOutSlow " viewBox="0 0 100 100">
                        <circle cx="50" cy="1" r="1" fill="#fff"  />
                    </svg>

                    <div class="abs tl:0 fit flex items:center just:center">
                        <div class="rel align-x:center">
                            <div class="(&//*):fs:62fx (&//*):fs:28fx@m (&//*):lh:1.07 (&//*):letter:-1px flex items:center just:center">
                                <roll-number number="${e.available_seats}" from="5" number-class="fs:62fx fs:28fx@m"></roll-number> 
                                &nbsp;
                                <span>${"seat" + (1 < e?.available_seats ? "s" : "")}</span>
                            </div>
                            <div class="m-b:10fx@m fs:16fx lh:1.24 o:0 (.in-view):o:1 (.in-view):tween:all,1.3s,0.6s,easeOutSlow">
                                available for 2023
                            </div>
                            <button class="bg:none d:none d:inline-block@m border:solid,1px,currentColor p:9fx,20fx radius:45fx@m">Apply</button>
                        </div>
                    </div>
                </scroll-object>

                <core-cursor-wrapper class="group block abs tl:0 fit __blend:difference d:none@m">
                    <core-cursor aria-hidden="true" class="abs tl:0fx w:98fx h:98fx pointer:none z:2 border:none abs tl:0 fs:0 | d:none@m">
                        <div class="
                                abs tl:0 fit bg:#0E0E0E c:#FFFCF1 flex items:center just:center radius:120px 
                                transform rotate:-45deg scale:0 o:0 (.group:hover):o:1 (.group:hover):rotate:0deg  (.group:hover):scale:1 tween:all,0.6s,easeOut 
                            ">
                            <span class="fs:16fx transform c:#FFFCF1">${`Take ${1 < e?.available_seats ? "one" : "it"}!`}</span>
                        </div>
                    </core-cursor>
                </core-cursor-wrapper>

            </section>` : o``
        }
    }
    );
    customElements.define("block-awards", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <section class="rel p-l:155fx p-r:134fx __p-b:266fx bg:#FAF8F3 c:#0E0E0E m-t:-60fx z:2 p-x:10fx@m p-b:30fx@m " >

                <div class="(&//*):fs:228fx lh:1 (&//*):fs:103fx@m">
                    ${e?.title && w(e?.title, x)}
                </div>

                <div class="rel p-l:575fx z:2 m-b:107fx p-t:400fx p-l:0@m m-b:44fx@m">
                    
                    <scroll-object class="w:367fx abs t:-100fx l:63fx w:206fx@m l:40fx@m t:0fx@m" parallax no-scale ratio="0.2">
                        <img loading="lazy"
                            decode="async"
                            alt="awwwards trophy"
                            src="assets/images/Awwwards_Trophy_white_1.webp" 
                            class="w:fit h:auto" 
                            width="790"
                            height="1207"
                        />
                    </scroll-object>

                    <div class="w:500fx (&//*):fs:62fx (&//*):fs:28fx@m lh:1.07 w:fit@m">
                        <span class="abs tl:0 o:0">${e?.title && w(e?.title, x)}</span>
                        <span class="">${e?.subtitleAwards && w(e?.subtitleAwards, x)}</span>
                    </div>

                </div>

                <div class="m-b:87fx">
                    <div class="space-x:20fx w:fit flex items:start just:between m-b:30fx space-x:4fx@m wrap:wrap after after:w:114fx@m after:d:block space-y:47fx@m">
                        ${e?.slides?.map((e,t)=>o`
                            <article class="w:209fx w:114fx@m">
                                <div class="(&//*):fs:100fx (&//*):fs:54fx@m lh:0.6 p-b:20fx m-b:37fx m-b:20fx@m p-b:10fx@m b-b:solid,1px,currentColor">
                                    ${e.number}
                                </div>
                                <div class="(&//*):fs:24fx (&//*):fs:17fx@m">
                                    ${e.type}
                                </div>
                            </article>
                        `)}
                    </div>
                    <a href="" class="fs:16fx fs:17fx@m">+Many more</a>
                </div>


                <div class="p-r:90fx@m  p-l:575fx (&//*):fs:24fx (&//*):fs:17fx@m (&//strong):fs:62fx! (&//strong):fs:28fx@m! (&//strong):fw:normal (&//strong):m-b:0.4em (&//strong):m-b:1em@m (&//strong):d:block (&//strong):lh:1.07 p-l:0@m">
                    ${e.text && w(e.text, x)}
                </div>

            </section>` : o``
        }
    }
    );
    customElements.define("block-team", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"];
            return e ? o`
            <section class="rel p-x:40fx   bg:#FAF8F3 c:#0E0E0E p-x:10fx@m d:none" >
            </section>` : o``
        }
    }
    );
    customElements.define("block-contact", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <section class="mask z:2 rel p-t:200fx _p-t:350fx p-x:40fx  bg:#FAF8F3 c:#0E0E0E p-b:96fx p-x:10fx@m p-t:160fx@m" >


                <video autoplay loop muted  playsinline
                    src="assets/videos/RJ-BALL-BLUE-ORANGE.webm"  
                    class="abs t:-60vh l:50% w:150% max-w:100000% transform shift-x:-50% t:0@m w:300%@m  shift-y:-50%@m"
                    style="filter:blur(50px);">
                </video>


                <div class="rel  flex items:start just:between m-b:125fx d:block@m m-b:85fx@m">
                    <div class="letter:-0.93px! (&//*):fs:62fx (&//*):fs:28fx@m  lh:1.07 w:758fx w:fit@m m-b:40fx@m">
                        <split-text>
                            ${e?.titleContact && w(e?.titleContact, x)}
                        </split-text>
                    </div>
                    <div class="w:338fx m-r:40fx space-x:97fx flex items:start just:between w:fit@m m-r:0@m space-x:0@m">
                        <div class="(&//*):fs:24fx (&//*):fs:17fx@m (&//p):m-b:1em wysiwyg_links">
                            ${e?.text && w(e?.text, x)}
                        </div>
                    </div>
                </div>

                <div class="w:fit flex items:start just:between m-b:30fx">
                    ${e?.slides?.map((e,t)=>o`
                        <scroll-object class="block w:670fx w:175fx@m">
                            <div class="before before:p-t:133% rel mask m-b:30fx    o:0 (.in-view):o:1 (.in-view):tween:all,1.6s,easeOutSlow">
                                <img  
                                    loading="lazy"
                                    decode="async"
                                    alt="${e?.image?.alt}" 
                                    width="${e?.image?.dimensions?.width}"
                                    height="${e?.image?.dimensions?.height}"
                                    ?src="${e?.image?.url && v(e?.image, {
                fm: "webp"
            })}"
                                    class="abs tl:0 fit object:cover" 
                                />
                            </div>
                            <div class="(&//*):fs:62fx (&//*):fs:28fx@m lh:1 m-b:0.7em letter:-1px">
                                ${e.city}
                            </div>
                            <div class="(&//*):fs:24fx (&//*):fs:14fx@m ">
                                ${e.address && w(e.address, x)}
                            </div>
                        </scroll-object>
                    `)}
                </div>

            </section>` : o``
        }
    }
    );
    customElements.define("block-drag", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"];
            return e ? o`
            <section class="rel z:2 bg:#FAF8F3 c:#0E0E0E  ${e?.titleDrag ? "" : "p-b:85fx"}" >

                <div class="p-x:40fx p-x:10fx@m ${e?.titleDrag ? "" : "d:none"}">
                    <div class="m-b:-55fx p-b:15fx w:fit  b-b:solid,0.5px,#00000080 flex items:end just:between">
                        <h2 class="(&//*):fs:131fx (&//*):ff:alt (&//*):fs:60fx@m (&//*):lh:1 p-t:20fx letter:-1%">
                            ${e?.titleDrag && w(e?.titleDrag, x)}
                        </h2>
                        <a href="contact" class="fs:24fx fs:14fx@m nowrap"><span class="transform scale-x:-1 iblock m-r:0.5em">↵</span><span class="underlined-link">Contact</span></a>
                    </div>
                </div>

                <core-drag class="w:fit block mask" loop autoplay>
                    <div drag-wrapper class="w:fit">
                        <div drag-content class="flex items:end just:start space-x:20fx">
                            ${[...e?.slides, ...e?.slides].map((e,t)=>{
                var s = e?.image?.url ? Ct(e?.image, {
                    fm: "webp"
                }) : null;
                return o`
                                    <div drag-layer drag-step class="iblock shrink:0">
                                        <div class="fs:0 w:327fx rel w:146fx@m">
                                            <img  
                                                loading="lazy"
                                                decode="async"
                                                style="user-select:none;-webkit-user-select:none;user-drag:none;-webkit-user-drag:none;"
                                                alt="${e?.image?.alt}" 
                                                ?src="${s && s.src}"
                                                ?srcset="${s && s.srcset}"
                                                class="w:fit  h:auto"
                                                width="${e?.image?.dimensions?.width}"
                                                height="${e?.image?.dimensions?.height}"
                                            />
                                        </div>
                                    </div>`
            }
            )}
                        </div>
                    </div>
                </core-drag>
            </section>` : o``
        }
    }
    );
    customElements.define("block-cards", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        get defaultData() {
            return {
                sectionIndex: 0
            }
        }
        created() {
            this.onScroll = this.onScroll.bind(this),
            this.resize = this.resize.bind(this),
            this.__scrollTop = window.pageYOffset
        }
        attached() {
            document.addEventListener("scroll", this.onScroll),
            window.addEventListener("resize", this.resize),
            this.resizeObserver = new ResizeObserver(e=>{
                this.resize()
            }
            ),
            this.resizeObserver.observe(this),
            this.resizeObserver.observe(document.body)
        }
        detached() {
            document.removeEventListener("scroll", this.onScroll),
            this.resizeObserver.unobserve(this),
            this.resizeObserver.unobserve(document.body)
        }
        onScroll(e) {
            this.__scrollTop = window.pageYOffset
        }
        resize() {
            var e;
            0 < this.$cards.length && (e = V(this)["top"],
            this.cardsTop = e,
            this.cardsHeight = this.$cards[0].clientHeight),
            0 < this.$sections.length && (this.sections = [],
            this.$sections.forEach(e=>{
                var {top: t, height: s} = V(e);
                this.sections.push({
                    el: e,
                    top: t,
                    height: s
                })
            }
            ))
        }
        update() {
            if (this.$cards) {
                this.cardsTop - this.__scrollTop < 0 ? this.$cards.forEach(e=>{
                    e.classList.add("is-pinned")
                }
                ) : this.$cards.forEach(e=>{
                    e.classList.remove("is-pinned")
                }
                );
                let r = 0;
                this.sections.forEach((e,t)=>{
                    e = e.top;
                    e - this.__scrollTop < 0 && (r = t)
                }
                ),
                r !== this.data.sectionIndex && (this.data.sectionIndex = r),
                this.$cards.forEach((e,t)=>{
                    var s, i;
                    0 == t && e._$progress && ({top: s, height: i} = this.sections[0],
                    0 == r ? e._$progress.style.transform = `scaleX(${Math.min(1, Math.max(0, Math.abs(s - this.__scrollTop) / i))}) translateZ(0)` : e._$progress.style.transform = "scaleX(1) translateZ(0)"),
                    1 == t && e._$progress && ({top: s, height: i} = this.sections[1],
                    1 == r ? e._$progress.style.transform = `scaleX(${Math.min(1, Math.max(0, Math.abs(s - this.__scrollTop) / i))}) translateZ(0)` : e._$progress.style.transform = "scaleX(0) translateZ(0)"),
                    e.classList[t == r ? "add" : "remove"]("is-active")
                }
                )
            }
        }
        afterRender() {
            var e = this.querySelectorAll("[data-card]")
              , t = this.querySelectorAll("[data-section]");
            0 < e.length && !this.observer && (this.$cards = e,
            this.$sections = t,
            this.observer = new IntersectionObserver(e=>{
                e.forEach(e=>{}
                )
            }
            ,{
                threshold: [1]
            }),
            this.$cards.forEach(e=>{
                e._$progress = e.querySelector("[data-progress]"),
                this.observer.observe(e)
            }
            ),
            this.resize())
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <div class="rel z:100   c:#0E0E0E" >

                <div class="z:100  pos:sticky t:0 p-t:100fx  p-x:40fx flex items:start just:between  p-x:10fx@m  pointer:none  p-t:0@m">
                    ${e?.slides?.map((e,t)=>o`
                        <div data-card class="${0 == t ? "origin:0,0" : "origin:100%,0"} w:680fx rel rel before before:p-t:64% before:p-t:140%@m   mask  transform tween:all,1s,easeOut (&.is-pinned):shift-y:-100fx (&.is-pinned):shift-y:0@m shift-y:0% (&.is-pinned):scale-x:1 scale-x:0.985 ">
                            <div class="abs tl:0 fit  ">

                                <!-- Card Background -->
                                <div class="abs tl:0 fit bg:#0E0E0E  pointer:none  (.is-pinned):shadow:0,0,10px,red  tween:all,1s,easeOut transform shift-y:0 (.is-pinned):shift-y:-344fx (.is-pinned):box-shadow:0px,4px,8px,#0000000f ${"(.is-pinned):bg:#FAF8F3  (.is-pinned.is-active):bg:#2D2B2B"} (.is-pinned):shift-y:-186fx@m "></div>

                                <!-- Card Progress bar -->
                                <div class="z:2 abs tl:0 w:fit h:3fx scale-y:0  transform ${"(.is-pinned.is-active):bg:#FAF8F3 (.is-pinned):bg:#0E0E0E"} scale-y:1 origin:0,0 ">
                                    <div data-progress class="${"(.is-active):bg:#0E0E0E bg:#FAF8F3"}  w:fit h:fit scale-x:0 origin:0,0 transform"></div>
                                </div>

                                <!-- Card texts -->
                                <div class="c:#FAF8F3 fit abs tl:0 flex dir:column p:50fx just:between items:start transform tween:all,1s,easeOut (.is-pinned):shift-y:0 shift-y:0% p:10fx@m ">
                                    <h3 class="rel w:fit   fs:40fx fs:18fx@m  ${"(.is-pinned):c:#2D2B2B (.is-pinned.is-active):c:#FFFCF1 (.is-pinned):o:0.44 (.is-pinned.is-active):o:1"} tween:opacity,1s,easeOut ">
                                        <a href="${"/services#" + e?.model?.replace(" Model", "").toLowerCase() + "-model"}" class="iblock pointer:auto cursor:pointer transform tween:all,1s,easeOut (.is-pinned):shift-y:-15fx (.is-pinned):shift-x:-15fx shift-x:0 shift-y:0 (.is-pinned):scale:0.5 origin:0,0 (.is-pinned):scale:1@m (.is-pinned):shift-y:0fx@m (.is-pinned):shift-x:0fx@m w:fit">
                                            <span class="d:block d:none@m">
                                                ${e?.model}
                                            </span>
                                            <div class="d:none d:block@m">
                                                <span class="w:fit flex items:start just:between fs:27fx@m __w:50%@m (.is-pinned):o:0 tween:opacity,0.6s,easeOut">
                                                    <span>
                                                        ${e?.model?.replace(" Model", "<br/>Model")}
                                                    </span>
                                                    <span class="m-t:10fx m-t:7fx@m flex items:center just:center w:19fx h:19fx radius:100% border:solid,1px,currentColor fs:11fx fs:12px@m">↓</span>
                                                </span>
                                                <span class="abs tl:0 w:fit nowrap o:0 (.is-pinned):o:1 tween:opacity,0.6s,easeOut flex items:center just:between t:17fx@m">
                                                    <span>
                                                        ${e?.model}
                                                    </span>
                                                    <span class="items:center just:center w:10fx h:10fx radius:100% fs:11fx fs:12px@m">↓</span>
                                                </span>
                                            </div>
                                        </a>
                                    </h3>
                                </div>
                                <div class="c:#FAF8F3 fit abs tl:0 flex dir:column p:50fx just:between items:start transform tween:all,1s,easeOut (.is-pinned):shift-y:0 shift-y:0%  p:10fx@m o:0.3@m">
                                    <span></span>
                                    <p class="  fs:24fx fs:15fx@m transform tween:all,1s,easeOut (.is-pinned):o:0 (.is-pinned):shift-y:0 shift-y:0% ${1 == t ? " (.is-pinned):c:#2d2b2b85" : ""}">${e?.headline}</p>
                                </div>
                            </div>
                        </div>
                    `)}
                </div>

                <div>
                    ${e?.slides?.map((e,t)=>o`
                        <section data-section class="  ${"dark" == e.theme ? "bg:#0E0E0E c:#FAF8F3" : "bg:#FAF8F3 c:#0E0E0E"}">

                            <div id="${e?.model?.replace(" Model", "").toLowerCase() + "-model"}"  class="p-x:40fx _p-t:200fx p-b:200fx p-b:120fx@m p-x:10fx@m">

                                <div class="p-y:200fx flex items:start just:center p-t:80fx@m p-b:110fx@m">
                                    <h2 class="(&//*):fs:130fx (&//*):ff:alt (&//*):fs:60fx@m  align-x:center ff:alt lh:1 fw:400 letter:-1.31px">
                                        <split-text simple>
                                        ${e?.title && w(e?.title, x)}
                                        </split-text>
                                    </h2>
                                </div>

                                <div class="flex items:end just:between w:fit m-b:0.7em">
                                    <h2 class="(&/*):fs:24fx lh:1.14 (&/*):fs:14fx@m ">
                                        <span class="">
                                            <span class="iblock align-y:middle (&/*):fs:28fx@m">
                                                ${e?.model?.replace("Model", "")}
                                            </span>
                                            <span class="em iblock align-y:middle  rel b:0.2em iblock fs:12fx _fs:0.5em! fs:11px@m!  lh:1.2 ${"dark" == e.theme ? "bg:#FAF8F3 c:#0E0E0E" : "bg:#0E0E0E c:#FAF8F3"} p:3fx,12fx radius:100px p:0.25em,1em@m lh:1 b:0@m ">
                                                Model
                                            </span>
                                        </span>
                                        &nbsp; 
                                        <span class="o:0.2 d:block@m m-t:0.2em@m">
                                            ${e?.headline}
                                        </span>
                                    </h2>
                                    <a class="fs:24fx lh:1.14 fs:14fx@m" href="contact">
                                        <span class="transform scale-x:-1 iblock">↵</span> <span class="underlined-link">Contact</span>
                                    </a>
                                </div>
                                
                                <hr  class="h:1px scale-y:0.5 transform bg:currentColor o:0.5 m-b:10fx border:none" />
        
                                <div class="cards_wysiwyg">
                                    ${e?.wysiwyg && w(e?.wysiwyg, x)?.replace(/\<p\>/g, '<p style="text-indent:2em;">')}
                                </div>

                            </div>

                            <div class="before before:p-t:50% rel  ${e.image ? "" : "d:none"}">
                                <img 
                                    loading="lazy"
                                    decode="async"
                                    width="${e?.image?.dimensions?.width}"
                                    height="${e?.image?.dimensions?.height}"
                                    alt="${e?.image?.alt}" 
                                    ?src="${e?.image?.url && v(e?.image, {
                fm: "webp"
            })}"
                                    class="abs tl:0 fit object:cover" 
                                />
                            </div>

                        </section>
                    `)}
                </div>
                
               
            </div>` : o``
        }
    }
    );
    customElements.define("block-home", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        attached() {
            n.on("loader:end", ()=>{
                this.classList.add("is-loader-ended"),
                setTimeout(()=>{
                    this.querySelector("video")?.play()
                }
                , 2200)
            }
            ),
            s.on("scroll", e=>{
                35 < e.animatedScroll ? n.fire("logo:show") : n.fire("logo:hide")
            }
            ),
            n.fire("logo:hide"),
            n.fire("intro:reset")
        }
        playReel() {
            n.fire("reel:show")
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <section dark-theme @click="${e=>this.playReel()}"  class="rel z:2 h:100vhfix c:#FFFCF1 w:fit mask" >

                <scroll-object class="block abs tl:0 fit" parallax ratio="-0.1">

                    <img  
                        loading="lazy"
                        decode="async"
                        width="${e?.image?.dimensions?.width}"
                        height="${e?.image?.dimensions?.height}"
                        alt="${e?.image?.alt}" 
                        ?src="${e?.image?.url && v(e?.image, {
                fm: "webp"
            })}"
                        class="abs tl:0 fit object:cover transform scale:1.4 (.is-loader-ended):scale:1 (.is-loader-ended):tween:all,1.8s,2s,easeOutSlow" 
                    />

                    <video loop muted playsinline preload
                        ?src="${(window.innerWidth < 600 && e?.mobile_video ? e?.mobile_video : e?.video)?.url}"  
                        class="abs tl:0 fit object:cover transform scale:1.4 (.is-loader-ended):scale:1 (.is-loader-ended):tween:all,1.8s,2s,easeOutSlow">
                    </video>
 
                    <div class="fs:20fx fs:17fx@m abs tl:0 w:fit h:fit bg:#0E0E0E c:#FAF8F3 flex items:center just:center  o:1 (.is-loader-ended):o:0 (.is-loader-ended):tween:all,2s,2.2s,easeOutSlow">
                        <div class="iblock w:auto shift-x:100px (.is-loader-ended):shift-x:0 transform (.is-loader-ended):tween:transform,1.3s,easeOutSlow">
                            <div class="iblock w:auto shift-x:0px (.is-loader-ended):shift-x:-100px transform (.is-loader-ended):tween:transform,1.2s,1.5s,easeIn">
                                ${e?.title_home?.split(" ")?.map((e,t)=>o`
                                    <span class="o:0 (.is-loader-ended):o:1 ${`(.is-loader-ended):tween:opacity,${.5 + .15 * t}s,${.15 * t}s,easeOut`}">
                                        <span class="o:1 (.is-loader-ended):o:0 ${`(.is-loader-ended):tween:opacity,${.4 - .15 * t}s,${.15 * t + 1.5}s,easeOut`}">${e}&nbsp;</span>
                                    </span>
                                `)}
                            </div>
                        </div>
                    </div>

                    <core-cursor-wrapper class="transform block abs tl:0 fit">
                        <core-cursor aria-hidden="true" class="transform d:block tl:0fx w:92fx h:92fx _max-w:92px _max-h:92px pointer:none z:2 border:none abs tl:0 fs:0 | d:none@m ">
                            <div class="
                                    abs tl:0 fit bg:#FF5F38 c:#FFFCF1 flex items:center just:center radius:200px  mask
                                    transform scale:0 (.is-loader-ended):scale:1 (.is-loader-ended):tween:transform,1s,2.2s,easeOut 
                                ">
                                <span class="fs:13fx transform c:#0E0E0E">Play Reel</span>
                            </div>
                        </core-cursor>
                    </core-cursor-wrapper>
                    
                </scroll-object>

                <div class="abs tl:0 fit flex items:end just:between p:44fx,40fx p:20fx,10fx@m">
                    <div class="align-x:right d:none d:block@m transform shift-y:0fx tween:transform,0.6s,easeOut (.has-cookie-bar):shift-y:-105fx@m">
                        <div class="bg:none border:none">
                            <div class="iblock transform shift-y:50fx scale:0 (.is-loader-ended):shift-y:0vh (.is-loader-ended):scale:1  radius:4fx (.is-loader-ended):tween:all,1.6s,1.8s,easeOut">
                                <img 
                                    loading="lazy"
                                    decode="async"
                                    src="assets/images/reel-poster.webp" 
                                    width="420"
                                    height="240"
                                    class="w:210fx h:120fx bg:#FFFCF1 radius:4fx" 
                                    alt="Rell poster"
                                />
                            </div>
                            <nav class="flex just:between items:center fs:16fx m-b:7fx m-b:0@m ">
                                <button class="border:none bg:none space-x:9fx flex items:center just:start ">
                                    <span class="bg:#FF5F38 h:20fx w:20fx flex items:center just:center radius:100px transform shift-y:50fx o:0 (.is-loader-ended):shift-y:0vh (.is-loader-ended):o:1 (.is-loader-ended):tween:all,1.6s,2s,easeOut">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6" fill="none">
                                        <path d="M3.47669 2.67493C3.73935 2.87702 3.7363 3.27408 3.47058 3.47212L0.864538 5.4143C0.537145 5.6583 0.0711485 5.42822 0.0657971 5.01995L0.013533 1.03249C0.00805605 0.614631 0.487176 0.374829 0.818385 0.629658L3.47669 2.67493Z" fill="#FFFCF1"/>
                                        </svg>
                                    </span>
                                    <span class="iblock align-y:middle transform shift-y:50fx o:0 (.is-loader-ended):shift-y:0vh (.is-loader-ended):o:1 (.is-loader-ended):tween:all,1.6s,2.1s,easeOut">Play reel</span>
                                </button>
                                <p class="transform shift-y:50fx o:0 (.is-loader-ended):shift-y:0vh (.is-loader-ended):o:1 (.is-loader-ended):tween:all,1.6s,2.2s,easeOut">
                                    —01:18
                                </p>
                            </nav>
                        </div>
                    </div>
                </div>


                <div class="abs bl:0 w:fit p-x:40fx d:none@m">
                    <div class="block rel mask transform shift-y:0fx tween:transform,0.6s,easeOut (.has-cookie-bar):shift-y:-65fx">
                        <div class=" w:fit  p-y:40fy transform shift-y:100% (.is-loader-ended):shift-y:0% ${"(.is-loader-ended):tween:all,1.4s,1.7s,easeOutSlow"}">
                            <svg class=" w:fit" viewBox="0 0 1362 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 0,212.431 H 35.0769 V 98.6631 c 0,-39.7789 20.3287,-61.2596 52.6154,-61.2596 H 109.217 V 3.1936 H 88.4895 C 45.8391,3.1936 0,30.2433 0,95.8786 Z" fill="#fffcf1" id="path132" />
                            </svg>
                        </div>
                        <div class="abs tl:0 w:fit h:fit p-y:40fy transform shift-y:100% (.is-loader-ended):shift-y:0% ${`(.is-loader-ended):tween:all,1.4s,${1.7 + .035}s,easeOutSlow`}">
                            <svg class="w:fit " viewBox="0 0 1362 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m 116.161,108.608 c 0,73.193 47.035,109.392 102.441,109.392 52.615,0 87.692,-29.436 94.867,-71.204 h -35.874 c -6.776,24.265 -25.909,38.983 -58.196,38.983 -34.28,0 -63.377,-19.889 -66.566,-65.635 h 160.636 c 0.797,-5.967 1.196,-11.536 1.196,-17.503 C 314.665,51.7239 283.973,0.806864 217.406,0.011271 159.609,-0.784298 116.161,40.5858 116.161,108.608 Z M 153.63,89.9117 c 5.182,-40.9723 30.294,-57.6794 62.979,-57.6794 30.294,0 56.601,16.3093 60.986,57.6794 z" fill="#fffcf1" id="path132" />
                            </svg>
                        </div>
                        <div class="abs tl:0 w:fit h:fit p-y:40fy transform shift-y:100% (.is-loader-ended):shift-y:0% ${"(.is-loader-ended):tween:all,1.4s,1.77s,easeOutSlow"}">
                            <svg class="w:fit " viewBox="0 0 1362 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m 313.469,120.144 c 0.797,-5.967 1.196,-11.536 1.196,-17.503 -5.74609,1.08665 -7.04383,17.53827 -1.196,17.503 z m 8.539,94.674 h 20.727 c 42.651,0 88.49,-27.05 88.49,-92.685 V 5.58032 H 396.148 V 119.348 c 0,39.779 -20.329,61.26 -52.615,61.26 h -21.525 z" fill="#fffcf1" id="path132" />
                            </svg>
                        </div>
                        <div class="abs tl:0 w:fit h:fit p-y:40fy transform shift-y:100% (.is-loader-ended):shift-y:0% ${"(.is-loader-ended):tween:all,1.4s,1.805s,easeOutSlow"}">
                            <svg class="w:fit " viewBox="0 0 1362 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m 660.864,108.608 c 0,-69.6133 -47.832,-108.596729 -102.839,-108.596729 -55.007,0 -102.839,39.381129 -102.839,108.596729 0,69.613 47.832,109.392 102.839,109.392 55.007,0 102.839,-40.177 102.839,-109.392 z m -169.405,0.398 c 0,-53.3042 30.692,-76.7737 66.566,-76.7737 35.874,0 66.567,23.4695 66.567,76.7737 0,51.314 -30.693,76.773 -66.567,76.773 -35.874,0 -66.566,-25.459 -66.566,-76.773 z" fill="#fffcf1" id="path132" />
                            </svg>
                        </div>
                        <div class="abs tl:0 w:fit h:fit p-y:40fy transform shift-y:100% (.is-loader-ended):shift-y:0% ${`(.is-loader-ended):tween:all,1.4s,${1.7 + .14}s,easeOutSlow`}">
                            <svg class="w:fit " viewBox="0 0 1362 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m 683.798,130.088 c 0,63.647 48.63,87.912 90.084,87.912 41.455,0 90.084,-24.265 90.084,-87.912 V 5.58032 H 828.889 V 122.928 c 0,46.144 -22.72,63.249 -55.007,63.249 -32.286,0 -55.007,-17.105 -55.007,-63.249 V 5.58032 h -35.077 z" fill="#fffcf1" id="path132" />
                            </svg>
                        </div>
                        <div class="abs tl:0 w:fit h:fit p-y:40fy transform shift-y:100% (.is-loader-ended):shift-y:0% ${"(.is-loader-ended):tween:all,1.4s,1.875s,easeOutSlow"}">
                            <svg class="w:fit " viewBox="0 0 1362 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path      d="m 891.959,212.431 h 35.077 V 5.58032 h -35.077 z" fill="#fffcf1" id="path132" />
                            </svg>
                        </div>
                        <div class="abs tl:0 w:fit h:fit p-y:40fy transform shift-y:100% (.is-loader-ended):shift-y:0% ${"(.is-loader-ended):tween:all,1.4s,1.91s,easeOutSlow"}">
                            <svg class="w:fit " viewBox="0 0 1362 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m 946.888,108.608 c 0,69.613 47.034,109.392 102.842,109.392 51.81,0 92.87,-31.823 96.86,-89.105 h -35.48 c -5.18,38.188 -30.29,56.884 -62.18,56.884 -36.27,0 -65.77,-25.459 -65.77,-76.773 0,-53.3042 29.9,-76.7737 65.37,-76.7737 31.49,0 57.8,12.7292 62.58,50.917 h 35.48 C 1142.6,26.6632 1100.75,0.011271 1049.33,0.011271 994.321,0.011271 946.888,39.3924 946.888,108.608 Z" fill="#fffcf1" id="path132" />
                            </svg>
                        </div>
                        <div class="abs tl:0 w:fit h:fit p-y:40fy transform shift-y:100% (.is-loader-ended):shift-y:0% ${"(.is-loader-ended):tween:all,1.4s,1.945s,easeOutSlow"}">
                            <svg class="w:fit " viewBox="0 0 1362 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m 1163.5,108.608 c 0,73.193 47.03,109.392 102.44,109.392 52.61,0 87.69,-29.436 94.86,-71.204 h -35.87 c -6.78,24.265 -25.91,38.983 -58.2,38.983 -34.28,0 -63.37,-19.889 -66.56,-65.635 h 160.63 c 0.8,-5.967 1.2,-11.536 1.2,-17.503 C 1362,51.7239 1331.31,0.806864 1264.74,0.011271 1206.94,-0.784298 1163.5,40.5858 1163.5,108.608 Z m 37.46,-18.6963 c 5.19,-40.9723 30.3,-57.6794 62.98,-57.6794 30.3,0 56.61,16.3093 60.99,57.6794 z" fill="#fffcf1" id="path132" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="abs b:20fx@m r:10fx@m d:none d:block@m transform shift-y:0fx tween:transform,0.6s,easeOut (.has-cookie-bar):shift-y:-105fx@m">
               
                    <button aria-label="Scroll" class="fs:0 bg:none border:none space-x:10fx  transform shift-y:50fx o:0 (.is-loader-ended):shift-y:0vh (.is-loader-ended):o:1 (.is-loader-ended):tween:all,1.6s,2.3s,easeOut">
                        <svg class="iblock align-y:middle" width="8" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.04624 16.352L5.97861 19.8895C5.8957 19.9724 5.84043 20 5.70224 20H4.26515C4.12697 20 4.0717 19.9724 3.98879 19.8895L0.921153 16.352C0.838244 16.2691 0.838244 16.1585 0.838244 16.0204L0.838244 14.1964C0.838244 14.0582 1.00406 14.0029 1.08697 14.1135L3.96115 17.568C4.04406 17.6785 4.15461 17.6233 4.15461 17.5127L4.15461 0.68218C4.15461 0.599272 4.20988 0.543998 4.29279 0.543998L5.70224 0.543998C5.78515 0.543998 5.84043 0.599272 5.84043 0.68218L5.84043 17.5127C5.84043 17.6233 5.95097 17.6785 6.03388 17.568L8.88043 14.1135C8.96334 14.0029 9.12915 14.0582 9.12915 14.1964V16.0204C9.12915 16.1585 9.12915 16.2415 9.04624 16.352Z" fill="#FFFCF1"/>
                        </svg>
                        <span class="fs:17fx align-y:middle">Scroll</span>
                    </button>
                </div>

            </section>` : o``
        }
    }
    );
    customElements.define("block-404", class extends e {
        attached() {
            requestAnimationFrame(()=>{
                m.setLoading(!1, "404")
            }
            )
        }
        render() {
            return o`

            <section  
                dark-theme
                class="align-x:center z:2 rel w:fit h:100vh bg:#0E0E0E c:#FFFCF1 flex dir:col just:between  p-x:40fx p-x:10fx@m p-b:20fxx"
                >

                <div class="rel space-y:30fx grow:1 flex items:center just:center h:fit p-t:70fx">
                    <div class="c:#FFFCF1 rel m-x:auto fs:24fx lh:1 letter:-0.02em w:fit@m fs:18fx@m lh:24fx@m ">
                        <p class="fs:24fx lh:1.14 fs:14fx@m">
                            The page you are looking for can’t be found.
                        </p>
                        <a class="fs:24fx lh:1.14 fs:14fx@m" href="/">
                            <span class="transform scale-x:-1 iblock">↵</span> <span class="underlined-link">back to homepage</span>
                        </a>
                    </div>
                </div>

                <svg class="w:fit h:auto shrink:0 " width="1394" height="591" viewBox="0 0 1394 591" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M449.908 441.047H344.997V579H268.999V441.047H0.527028V362.57L265.695 12.3177H344.997V373.309H449.908V441.047ZM77.3513 373.309H268.999V119.706L77.3513 373.309ZM915.164 316.311C915.164 476.568 833.384 590.565 692.952 590.565C552.521 590.565 470.74 476.568 470.74 316.311V275.007C470.74 114.75 552.521 0.752707 692.952 0.752707C833.384 0.752707 915.164 114.75 915.164 275.007V316.311ZM548.39 310.528C548.39 447.655 603.737 521.175 692.952 521.175C782.168 521.175 837.514 447.655 837.514 310.528V280.79C837.514 143.662 782.168 70.1424 692.952 70.1424C603.737 70.1424 548.39 143.662 548.39 280.79V310.528ZM1393.37 441.047H1288.46V579H1212.46V441.047H943.986V362.57L1209.15 12.3177H1288.46V373.309H1393.37V441.047ZM1020.81 373.309H1212.46V119.706L1020.81 373.309Z" fill="#FFFCF1"/>
                </svg>

            </section>`
        }
    }
    );
    customElements.define("block-mosaic", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"];
            return e ? o`
            <section class="rel bg:#FAF8F3 c:#0E0E0E  w:fit p-x:40fx p-x:10fx@m p-b:90fx p-b:40fx@m m-t:70fx@m mask" >

                <scroll-object class="flex items:start just:between wrap:wrap space-y:20fx space-y:5fx@m transform scale:1.2 (&.in-view):scale:1 (&.in-view):tween:all,1.8s,easeOutSlow ">
                    ${e?.slides?.map((e,t)=>{
                var s = e?.image?.url ? Ct(e?.image, {
                    fm: "webp"
                }) : null;
                return o`
                        <div class="
                            iblock shrink:0 fs:0 w:325fx rel w:115fx@m before before:p-t:60% ${t % 4 == 0 || t % 4 == 2 ? "m-t:-100fx m-t:-25fx@m" : ""}
                            transform (.in-view):tween:all,1.8s,easeOutSlow o:0 
                            (.in-view):shift-y:0  (.in-view):o:1 
                            ${t % 4 == 0 || t % 4 == 2 ? "shift-y:-20vh" : "shift-y:20vh"}
                            ${t % 4 == 0 ? "d:none@m" : ""}
                        ">
                            <img  
                                loading="lazy"
                                decode="async"
                                alt="${e?.image?.alt}" 
                                ?src="${s && s.src}"
                                ?srcset="${s && s.srcset}"
                                class="abs tl:0 fit object:cover" 
                                width="${e?.image?.dimensions?.width}"
                                height="${e?.image?.dimensions?.height}"
                            />
                        </div>`
            }
            )}
                </scroll-object>

            </section>` : o``
        }
    }
    );
    customElements.define("block-stacked-images", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            let i = this.data["content"];
            return i ? o`
            <section dark-theme
                class="rel bg:#0E0E0E c:#FFFCF1  w:fit  p-t:120fx" >

                <scroll-object class="p-l:155fx  flex items:start just:start wrap:wrap space-y:20fx space-y:5fx@m  m-b:220fx p-l:10fx@m d:none@m">
                    ${i?.slides?.map((e,t)=>{
                var s = e?.image?.url ? Ct(e?.image, {
                    fm: "webp"
                }) : null;
                return o`
                        <div 
                            style="${`top: calc(20vh + ${60 * t} * var(--unit-fx)) ; margin-bottom: calc( ${60 * (i?.slides?.length - 1 - t)} * var(--unit-fx))`}"
                            class="
                                pos:sticky  iblock shrink:0 fs:0 w:325fx w:84fx@m before before:p-t:100%   m-r:-210fx
                                transform (.in-view):tween:all,1.8s,easeOutSlow o:0 
                                (.in-view):shift-y:0  (.in-view):o:1 
                                ${`m-t:${487.5 * t}fx`} 
                            "
                        >
                            <img  
                                loading="lazy"
                                decode="async"
                                alt="${e?.image?.alt}" 
                                ?src="${s && s.src}"
                                ?srcset="${s && s.srcset}"
                                width="${e?.image?.dimensions?.width}"
                                height="${e?.image?.dimensions?.height}"
                                class="abs tl:0 fit object:cover" 
                            />
                        </div>`
            }
            )}
                </scroll-object>


                <scroll-object class="p-l:10fx items:start just:start wrap:wrap space-y:10fx space-y:5fx@m  m-b:120fx@m  d:none d:flex@m">
                    ${i?.slides?.map((e,t)=>{
                var s = e?.image?.url ? Ct(e?.image, {
                    fm: "webp"
                }) : null;
                return o`
                            <div 
                                class="
                                    iblock shrink:0 fs:0  w:187fx@m before before:p-t:100%  before:p-t:160%@m 
                                    transform (.in-view):tween:all,1.8s,easeOutSlow o:0 
                                    (.in-view):shift-y:0  (.in-view):o:1 
                                    ${`m-t:${10 * t}fx`} m-r:-60fx m-r:-103fx@m

                                    ${`m-t:${30 * t}fx@m`}

                                    ${2 < t ? "d:none@m" : ""} 
                                    ${1 == t ? "z:2@m" : ""} 
                                "
                            >
                                <img  
                                    loading="lazy"
                                    decode="async"
                                    alt="${e?.image?.alt}" 
                                    ?src="${s && s.src}"
                                    ?srcset="${s && s.srcset}"
                                    class="abs tl:0 fit object:cover" 
                                    width="${e?.image?.dimensions?.width}"
                                    height="${e?.image?.dimensions?.height}"
                                />
                            </div>`
            }
            )}
                </scroll-object>


                <div class="rel">
                    <div class="(&/*):fs:62fx lh:1.07 p-x:40fx p-x:10fx@m w:600fx m-b:84fx (&/*):fs:28fx@m w:60%@m m-b:44fx@m">
                        <split-text>
                            ${i?.title && w(i?.title, x)}
                        </split-text>
                    </div>
                    <div class="rel flex w:fit items:center just:between p-x:40fx p-x:10fx@m p-b:120fx space-x:10fx@m p-b:40fx@m space-y:10fx@m d:block@m">
                        <div class="abs bl:0 bg:#FAF8F3 w:fit h:50% h:25%@m m-b:0@m!"></div>
                        <div class="mask rel before before:p-t:60% w:670fx w:fit@m">
                            <img  
                                loading="lazy"
                                decode="async"
                                alt="${i?.image_1?.alt}" 
                                ?src="${i?.image_1?.url && v(i?.image_1, {
                fm: "webp"
            })}"
                                width="${i?.image_1?.dimensions?.width}"
                                height="${i?.image_1?.dimensions?.height}"
                                class="abs tl:0 fit object:cover" 
                            />
                        </div>
                        <div class="mask rel before before:p-t:60% w:670fx w:fit@m">
                            <img  
                                loading="lazy"
                                decode="async"
                                alt="${i?.image_2?.alt}" 
                                ?src="${i?.image_2?.url && v(i?.image_2, {
                fm: "webp"
            })}"
                                width="${i?.image_2?.dimensions?.width}"
                                height="${i?.image_2?.dimensions?.height}"
                                class="abs tl:0 fit object:cover" 
                            />
                        </div>
                    </div>
                </div>
                
            </section>
            
          ` : o``
        }
    }
    );
    customElements.define("block-text--title-and-link", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <section class="rel z:2 p-x:40fx p-t:210fx p-b:85fx flex items:start just:between bg:#FAF8F3 c:#0E0E0E d:block@m space-y:30fx@m p-x:10fx@m p-t:116fx@m" >

                <div class="w:230fx w:fit@m (&/*):fs:14fx@m">
                    ${e?.title && w(e?.title, x)}
                </div>

                <div class="w:555fx m-r:112fx fs:24fx lh:1.16 w:fit@m">
                    <div class="wysiwyg (&/*):fs:17fx@m">
                        ${e?.text && w(e?.text, x)}
                    </div>
                    <a class="space-x:6fx flex items:center just:start w:fit m-y:5em m-t:40fx@m m-b:0@m ${e?.link?.url ? "" : "d:none"}" 
                        href="${e?.link?.url}"
                        target="_blank">
                        <span>→ </span>
                        <span class="(&/*):fs:24fx underlined-link (&/*):fs:17fx@m">
                            ${e?.link_label && w(e?.link_label, x)}
                        </span>
                    </a>
                </div>
                        
            </section>` : o``
        }
    }
    );
    function Lt(t, e) {
        var s, i = Object.keys(t);
        return Object.getOwnPropertySymbols && (s = Object.getOwnPropertySymbols(t),
        e && (s = s.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })),
        i.push.apply(i, s)),
        i
    }
    function Ot(t) {
        for (var e = 1; e < arguments.length; e++) {
            var s = null != arguments[e] ? arguments[e] : {};
            e % 2 ? Lt(Object(s), !0).forEach(function(e) {
                zt(t, e, s[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : Lt(Object(s)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e))
            })
        }
        return t
    }
    function E() {
        E = function() {
            return a
        }
        ;
        var a = {}
          , e = Object.prototype
          , l = e.hasOwnProperty
          , c = Object.defineProperty || function(e, t, s) {
            e[t] = s.value
        }
          , t = "function" == typeof Symbol ? Symbol : {}
          , i = t.iterator || "@@iterator"
          , s = t.asyncIterator || "@@asyncIterator"
          , r = t.toStringTag || "@@toStringTag";
        function n(e, t, s) {
            return Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            e[t]
        }
        try {
            n({}, "")
        } catch (e) {
            n = function(e, t, s) {
                return e[t] = s
            }
        }
        function o(e, t, s, i) {
            var r, n, a, o, t = t && t.prototype instanceof f ? t : f, t = Object.create(t.prototype), i = new y(i || []);
            return c(t, "_invoke", {
                value: (r = e,
                n = s,
                a = i,
                o = "suspendedStart",
                function(e, t) {
                    if ("executing" === o)
                        throw new Error("Generator is already running");
                    if ("completed" === o) {
                        if ("throw" === e)
                            throw t;
                        return _()
                    }
                    for (a.method = e,
                    a.arg = t; ; ) {
                        var s = a.delegate;
                        if (s) {
                            s = function e(t, s) {
                                var i = s.method
                                  , r = t.iterator[i];
                                if (void 0 === r)
                                    return s.delegate = null,
                                    "throw" === i && t.iterator.return && (s.method = "return",
                                    s.arg = void 0,
                                    e(t, s),
                                    "throw" === s.method) || "return" !== i && (s.method = "throw",
                                    s.arg = new TypeError("The iterator does not provide a '" + i + "' method")),
                                    h;
                                i = d(r, t.iterator, s.arg);
                                if ("throw" === i.type)
                                    return s.method = "throw",
                                    s.arg = i.arg,
                                    s.delegate = null,
                                    h;
                                r = i.arg;
                                return r ? r.done ? (s[t.resultName] = r.value,
                                s.next = t.nextLoc,
                                "return" !== s.method && (s.method = "next",
                                s.arg = void 0),
                                s.delegate = null,
                                h) : r : (s.method = "throw",
                                s.arg = new TypeError("iterator result is not an object"),
                                s.delegate = null,
                                h)
                            }(s, a);
                            if (s) {
                                if (s === h)
                                    continue;
                                return s
                            }
                        }
                        if ("next" === a.method)
                            a.sent = a._sent = a.arg;
                        else if ("throw" === a.method) {
                            if ("suspendedStart" === o)
                                throw o = "completed",
                                a.arg;
                            a.dispatchException(a.arg)
                        } else
                            "return" === a.method && a.abrupt("return", a.arg);
                        o = "executing";
                        s = d(r, n, a);
                        if ("normal" === s.type) {
                            if (o = a.done ? "completed" : "suspendedYield",
                            s.arg === h)
                                continue;
                            return {
                                value: s.arg,
                                done: a.done
                            }
                        }
                        "throw" === s.type && (o = "completed",
                        a.method = "throw",
                        a.arg = s.arg)
                    }
                }
                )
            }),
            t
        }
        function d(e, t, s) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, s)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        a.wrap = o;
        var h = {};
        function f() {}
        function p() {}
        function u() {}
        var t = {}
          , m = (n(t, i, function() {
            return this
        }),
        Object.getPrototypeOf)
          , m = m && m(m(k([])))
          , g = (m && m !== e && l.call(m, i) && (t = m),
        u.prototype = f.prototype = Object.create(t));
        function v(e) {
            ["next", "throw", "return"].forEach(function(t) {
                n(e, t, function(e) {
                    return this._invoke(t, e)
                })
            })
        }
        function b(a, o) {
            var t;
            c(this, "_invoke", {
                value: function(s, i) {
                    function e() {
                        return new o(function(e, t) {
                            !function t(e, s, i, r) {
                                var n, e = d(a[e], a, s);
                                if ("throw" !== e.type)
                                    return (s = (n = e.arg).value) && "object" == typeof s && l.call(s, "__await") ? o.resolve(s.__await).then(function(e) {
                                        t("next", e, i, r)
                                    }, function(e) {
                                        t("throw", e, i, r)
                                    }) : o.resolve(s).then(function(e) {
                                        n.value = e,
                                        i(n)
                                    }, function(e) {
                                        return t("throw", e, i, r)
                                    });
                                r(e.arg)
                            }(s, i, e, t)
                        }
                        )
                    }
                    return t = t ? t.then(e, e) : e()
                }
            })
        }
        function w(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]),
            2 in e && (t.finallyLoc = e[2],
            t.afterLoc = e[3]),
            this.tryEntries.push(t)
        }
        function x(e) {
            var t = e.completion || {};
            t.type = "normal",
            delete t.arg,
            e.completion = t
        }
        function y(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            e.forEach(w, this),
            this.reset(!0)
        }
        function k(t) {
            if (t) {
                var s, e = t[i];
                if (e)
                    return e.call(t);
                if ("function" == typeof t.next)
                    return t;
                if (!isNaN(t.length))
                    return s = -1,
                    (e = function e() {
                        for (; ++s < t.length; )
                            if (l.call(t, s))
                                return e.value = t[s],
                                e.done = !1,
                                e;
                        return e.value = void 0,
                        e.done = !0,
                        e
                    }
                    ).next = e
            }
            return {
                next: _
            }
        }
        function _() {
            return {
                value: void 0,
                done: !0
            }
        }
        return c(g, "constructor", {
            value: p.prototype = u,
            configurable: !0
        }),
        c(u, "constructor", {
            value: p,
            configurable: !0
        }),
        p.displayName = n(u, r, "GeneratorFunction"),
        a.isGeneratorFunction = function(e) {
            e = "function" == typeof e && e.constructor;
            return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
        }
        ,
        a.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u,
            n(e, r, "GeneratorFunction")),
            e.prototype = Object.create(g),
            e
        }
        ,
        a.awrap = function(e) {
            return {
                __await: e
            }
        }
        ,
        v(b.prototype),
        n(b.prototype, s, function() {
            return this
        }),
        a.AsyncIterator = b,
        a.async = function(e, t, s, i, r) {
            void 0 === r && (r = Promise);
            var n = new b(o(e, t, s, i),r);
            return a.isGeneratorFunction(t) ? n : n.next().then(function(e) {
                return e.done ? e.value : n.next()
            })
        }
        ,
        v(g),
        n(g, r, "Generator"),
        n(g, i, function() {
            return this
        }),
        n(g, "toString", function() {
            return "[object Generator]"
        }),
        a.keys = function(e) {
            var t, s = Object(e), i = [];
            for (t in s)
                i.push(t);
            return i.reverse(),
            function e() {
                for (; i.length; ) {
                    var t = i.pop();
                    if (t in s)
                        return e.value = t,
                        e.done = !1,
                        e
                }
                return e.done = !0,
                e
            }
        }
        ,
        a.values = k,
        y.prototype = {
            constructor: y,
            reset: function(e) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(x),
                !e)
                    for (var t in this)
                        "t" === t.charAt(0) && l.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type)
                    throw e.arg;
                return this.rval
            },
            dispatchException: function(s) {
                if (this.done)
                    throw s;
                var i = this;
                function e(e, t) {
                    return n.type = "throw",
                    n.arg = s,
                    i.next = e,
                    t && (i.method = "next",
                    i.arg = void 0),
                    !!t
                }
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                    var r = this.tryEntries[t]
                      , n = r.completion;
                    if ("root" === r.tryLoc)
                        return e("end");
                    if (r.tryLoc <= this.prev) {
                        var a = l.call(r, "catchLoc")
                          , o = l.call(r, "finallyLoc");
                        if (a && o) {
                            if (this.prev < r.catchLoc)
                                return e(r.catchLoc, !0);
                            if (this.prev < r.finallyLoc)
                                return e(r.finallyLoc)
                        } else if (a) {
                            if (this.prev < r.catchLoc)
                                return e(r.catchLoc, !0)
                        } else {
                            if (!o)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < r.finallyLoc)
                                return e(r.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var s = this.tryEntries.length - 1; 0 <= s; --s) {
                    var i = this.tryEntries[s];
                    if (i.tryLoc <= this.prev && l.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                        var r = i;
                        break
                    }
                }
                var n = (r = r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc ? null : r) ? r.completion : {};
                return n.type = e,
                n.arg = t,
                r ? (this.method = "next",
                this.next = r.finallyLoc,
                h) : this.complete(n)
            },
            complete: function(e, t) {
                if ("throw" === e.type)
                    throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                this.method = "return",
                this.next = "end") : "normal" === e.type && t && (this.next = t),
                h
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                    var s = this.tryEntries[t];
                    if (s.finallyLoc === e)
                        return this.complete(s.completion, s.afterLoc),
                        x(s),
                        h
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                    var s, i, r = this.tryEntries[t];
                    if (r.tryLoc === e)
                        return "throw" === (s = r.completion).type && (i = s.arg,
                        x(r)),
                        i
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, t, s) {
                return this.delegate = {
                    iterator: k(e),
                    resultName: t,
                    nextLoc: s
                },
                "next" === this.method && (this.arg = void 0),
                h
            }
        },
        a
    }
    function jt(e, t, s, i, r, n, a) {
        try {
            var o = e[n](a)
              , l = o.value
        } catch (e) {
            return void s(e)
        }
        o.done ? t(l) : Promise.resolve(l).then(i, r)
    }
    function A(o) {
        return function() {
            var e = this
              , a = arguments;
            return new Promise(function(t, s) {
                var i = o.apply(e, a);
                function r(e) {
                    jt(i, t, s, r, n, "next", e)
                }
                function n(e) {
                    jt(i, t, s, r, n, "throw", e)
                }
                r(void 0)
            }
            )
        }
    }
    function Tt(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function Pt(e, t) {
        for (var s = 0; s < t.length; s++) {
            var i = t[s];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, Vt(i.key), i)
        }
    }
    function Mt(e, t, s) {
        t && Pt(e.prototype, t),
        s && Pt(e, s),
        Object.defineProperty(e, "prototype", {
            writable: !1
        })
    }
    function zt(e, t, s) {
        (t = Vt(t))in e ? Object.defineProperty(e, t, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = s
    }
    function Rt(e) {
        return (Rt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function Bt(e, t) {
        return (Bt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function Nt() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function It(e, t, s) {
        return (It = Nt() ? Reflect.construct.bind() : function(e, t, s) {
            var i = [null];
            i.push.apply(i, t);
            t = new (Function.bind.apply(e, i));
            return s && Bt(t, s.prototype),
            t
        }
        ).apply(null, arguments)
    }
    function Ht(e) {
        var s = "function" == typeof Map ? new Map : void 0;
        return function(e) {
            if (null === e || -1 === Function.toString.call(e).indexOf("[native code]"))
                return e;
            if ("function" != typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== s) {
                if (s.has(e))
                    return s.get(e);
                s.set(e, t)
            }
            function t() {
                return It(e, arguments, Rt(this).constructor)
            }
            return t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            Bt(t, e)
        }(e)
    }
    function Dt(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function qt(s) {
        var i = Nt();
        return function() {
            var e, t = Rt(s), t = (e = i ? (e = Rt(this).constructor,
            Reflect.construct(t, arguments, e)) : t.apply(this, arguments),
            this);
            if (e && ("object" == typeof e || "function" == typeof e))
                return e;
            if (void 0 !== e)
                throw new TypeError("Derived constructors may only return object or undefined");
            return Dt(t)
        }
    }
    function Vt(e) {
        e = function(e, t) {
            if ("object" != typeof e || null === e)
                return e;
            var s = e[Symbol.toPrimitive];
            if (void 0 === s)
                return ("string" === t ? String : Number)(e);
            if ("object" != typeof (s = s.call(e, t || "default")))
                return s;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }(e, "string");
        return "symbol" == typeof e ? e : String(e)
    }
    customElements.define("block-small-images", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <section class="rel z:2 m-b:20fx space-y:20fx  p-t:210fx p-b:85fx bg:#FAF8F3 c:#0E0E0E p-y:120fx ${"bg:" + e?.background_color} p-x:250fx p-x:10px@m p-y:10fx@m  m-b:10px@m" >

                ${e?.slides?.map((e,t)=>o`
                        <img  
                            loading="lazy"
                            decode="async"
                            alt="${e?.image1?.alt}" 
                            ?src="${e?.image1?.url && v(e?.image1, {
                fm: "webp"
            })}"
                            width="${e?.image?.dimensions?.width}"
                            height="${e?.image?.dimensions?.height}"
                            class="w:fit" 
                        />`)}

                  

                        
            </section>` : o``
        }
    }
    );
    gt = "undefined" != typeof global && "[object global]" === {}.toString.call(global);
    function Wt(e, t) {
        return 0 === e.indexOf(t.toLowerCase()) ? e : "".concat(t.toLowerCase()).concat(e.substr(0, 1).toUpperCase()).concat(e.substr(1))
    }
    function C(e) {
        return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)
    }
    function Zt(e) {
        return /^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e)
    }
    function Xt(e) {
        var t, e = 0 < arguments.length && void 0 !== e ? e : {}, s = e.id, e = e.url, e = s || e;
        if (!e)
            throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
        if (t = e,
        !isNaN(parseFloat(t)) && isFinite(t) && Math.floor(t) == t)
            return "https://vimeo.com/".concat(e);
        if (C(e))
            return e.replace("http:", "https:");
        if (s)
            throw new TypeError("“".concat(s, "” is not a valid video id."));
        throw new TypeError("“".concat(e, "” is not a vimeo.com url."))
    }
    function Ut(t, e, s) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "addEventListener"
          , r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "removeEventListener"
          , n = "string" == typeof e ? [e] : e;
        return n.forEach(function(e) {
            t[i](e, s)
        }),
        {
            cancel: function() {
                return n.forEach(function(e) {
                    return t[r](e, s)
                })
            }
        }
    }
    t = void 0 !== Array.prototype.indexOf,
    p = "undefined" != typeof window && void 0 !== window.postMessage;
    if (!(gt || t && p))
        throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
    var Yt, Qt, F, Gt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function Jt() {
        if (void 0 === this)
            throw new TypeError("Constructor WeakMap requires 'new'");
        if (F(this, "_id", "_WeakMap_" + es() + "." + es()),
        0 < arguments.length)
            throw new TypeError("WeakMap iterable is not supported")
    }
    function Kt(e, t) {
        if (!ts(e) || !Yt.call(e, "_id"))
            throw new TypeError(t + " method called on incompatible receiver " + typeof e)
    }
    function es() {
        return Math.random().toString().substring(2)
    }
    function ts(e) {
        return Object(e) === e
    }
    (t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : Gt).WeakMap || (Yt = Object.prototype.hasOwnProperty,
    Qt = Object.defineProperty && function() {
        try {
            return 1 === Object.defineProperty({}, "x", {
                value: 1
            }).x
        } catch (e) {}
    }(),
    t.WeakMap = ((F = function(e, t, s) {
        Qt ? Object.defineProperty(e, t, {
            configurable: !0,
            writable: !0,
            value: s
        }) : e[t] = s
    }
    )(Jt.prototype, "delete", function(e) {
        var t;
        return Kt(this, "delete"),
        !!ts(e) && !(!(t = e[this._id]) || t[0] !== e || (delete e[this._id],
        0))
    }),
    F(Jt.prototype, "get", function(e) {
        var t;
        return Kt(this, "get"),
        ts(e) && (t = e[this._id]) && t[0] === e ? t[1] : void 0
    }),
    F(Jt.prototype, "has", function(e) {
        var t;
        return Kt(this, "has"),
        !!ts(e) && !(!(t = e[this._id]) || t[0] !== e)
    }),
    F(Jt.prototype, "set", function(e, t) {
        var s;
        if (Kt(this, "set"),
        ts(e))
            return (s = e[this._id]) && s[0] === e ? s[1] = t : F(e, this._id, [e, t]),
            this;
        throw new TypeError("Invalid value used as weak map key")
    }),
    F(Jt, "_polyfill", !0),
    Jt));
    (function(e) {
        var t, s, i;
        i = function() {
            var t, s, i, r, n, e = Object.prototype.toString, a = "undefined" != typeof setImmediate ? function(e) {
                return setImmediate(e)
            }
            : setTimeout;
            try {
                Object.defineProperty({}, "x", {}),
                t = function(e, t, s, i) {
                    return Object.defineProperty(e, t, {
                        value: s,
                        writable: !0,
                        configurable: !1 !== i
                    })
                }
            } catch (e) {
                t = function(e, t, s) {
                    return e[t] = s,
                    e
                }
            }
            function o(e, t) {
                this.fn = e,
                this.self = t,
                this.next = void 0
            }
            function l(e, t) {
                v.add(e, t),
                s = s || a(v.drain)
            }
            function c(e) {
                var t, s = typeof e;
                return "function" == typeof (t = null == e || "object" != s && "function" != s ? t : e.then) && t
            }
            function d() {
                for (var e = 0; e < this.chain.length; e++) {
                    s = t = n = r = i = void 0;
                    var t, s, i = this, r = 1 === this.state ? this.chain[e].success : this.chain[e].failure, n = this.chain[e];
                    try {
                        !1 === r ? n.reject(i.msg) : (t = !0 === r ? i.msg : r.call(void 0, i.msg)) === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (s = c(t)) ? s.call(t, n.resolve, n.reject) : n.resolve(t)
                    } catch (e) {
                        n.reject(e)
                    }
                }
                this.chain.length = 0
            }
            function h(e) {
                var s, i = this;
                if (!i.triggered) {
                    i.triggered = !0,
                    i.def && (i = i.def);
                    try {
                        (s = c(e)) ? l(function() {
                            var t = new u(i);
                            try {
                                s.call(e, function() {
                                    h.apply(t, arguments)
                                }, function() {
                                    f.apply(t, arguments)
                                })
                            } catch (e) {
                                f.call(t, e)
                            }
                        }) : (i.msg = e,
                        i.state = 1,
                        0 < i.chain.length && l(d, i))
                    } catch (e) {
                        f.call(new u(i), e)
                    }
                }
            }
            function f(e) {
                var t = this;
                t.triggered || (t.triggered = !0,
                (t = t.def ? t.def : t).msg = e,
                t.state = 2,
                0 < t.chain.length && l(d, t))
            }
            function p(e, s, i, r) {
                for (var t = 0; t < s.length; t++)
                    !function(t) {
                        e.resolve(s[t]).then(function(e) {
                            i(t, e)
                        }, r)
                    }(t)
            }
            function u(e) {
                this.def = e,
                this.triggered = !1
            }
            function m(e) {
                this.promise = e,
                this.state = 0,
                this.triggered = !1,
                this.chain = [],
                this.msg = void 0
            }
            function g(e) {
                if ("function" != typeof e)
                    throw TypeError("Not a function");
                if (0 !== this.__NPO__)
                    throw TypeError("Not a promise");
                this.__NPO__ = 1;
                var i = new m(this);
                this.then = function(e, t) {
                    var s = {
                        success: "function" != typeof e || e,
                        failure: "function" == typeof t && t
                    };
                    return s.promise = new this.constructor(function(e, t) {
                        if ("function" != typeof e || "function" != typeof t)
                            throw TypeError("Not a function");
                        s.resolve = e,
                        s.reject = t
                    }
                    ),
                    i.chain.push(s),
                    0 !== i.state && l(d, i),
                    s.promise
                }
                ,
                this.catch = function(e) {
                    return this.then(void 0, e)
                }
                ;
                try {
                    e.call(void 0, function(e) {
                        h.call(i, e)
                    }, function(e) {
                        f.call(i, e)
                    })
                } catch (e) {
                    f.call(i, e)
                }
            }
            var v = {
                add: function(e, t) {
                    n = new o(e,t),
                    r ? r.next = n : i = n,
                    r = n
                },
                drain: function() {
                    var e = i;
                    for (i = r = s = void 0; e; )
                        e.fn.call(e.self),
                        e = e.next
                }
            }
              , b = t({}, "constructor", g, !1);
            return t(g.prototype = b, "__NPO__", 0, !1),
            t(g, "resolve", function(s) {
                return s && "object" == typeof s && 1 === s.__NPO__ ? s : new this(function(e, t) {
                    if ("function" != typeof e || "function" != typeof t)
                        throw TypeError("Not a function");
                    e(s)
                }
                )
            }),
            t(g, "reject", function(s) {
                return new this(function(e, t) {
                    if ("function" != typeof e || "function" != typeof t)
                        throw TypeError("Not a function");
                    t(s)
                }
                )
            }),
            t(g, "all", function(t) {
                var a = this;
                return "[object Array]" != e.call(t) ? a.reject(TypeError("Not an array")) : 0 === t.length ? a.resolve([]) : new a(function(s, e) {
                    if ("function" != typeof s || "function" != typeof e)
                        throw TypeError("Not a function");
                    var i = t.length
                      , r = Array(i)
                      , n = 0;
                    p(a, t, function(e, t) {
                        r[e] = t,
                        ++n === i && s(r)
                    }, e)
                }
                )
            }),
            t(g, "race", function(t) {
                var i = this;
                return "[object Array]" != e.call(t) ? i.reject(TypeError("Not an array")) : new i(function(s, e) {
                    if ("function" != typeof s || "function" != typeof e)
                        throw TypeError("Not a function");
                    p(i, t, function(e, t) {
                        s(t)
                    }, e)
                }
                )
            }),
            g
        }
        ,
        (s = Gt)[t = "Promise"] = s[t] || i(),
        e.exports && (e.exports = s[t])
    }
    )(p = {
        exports: {}
    });
    var S = p.exports
      , L = new WeakMap;
    function ss(e, t, s) {
        var i = L.get(e.element) || {};
        t in i || (i[t] = []),
        i[t].push(s),
        L.set(e.element, i)
    }
    function is(e, t) {
        return (L.get(e.element) || {})[t] || []
    }
    function rs(e, t, s) {
        var i = L.get(e.element) || {};
        return !i[t] || (s ? (-1 !== (s = i[t].indexOf(s)) && i[t].splice(s, 1),
        L.set(e.element, i),
        i[t] && 0 === i[t].length) : (i[t] = [],
        L.set(e.element, i),
        !0))
    }
    function ns(e) {
        if ("string" == typeof e)
            try {
                e = JSON.parse(e)
            } catch (e) {
                return console.warn(e),
                {}
            }
        return e
    }
    function O(e, t, s) {
        e.element.contentWindow && e.element.contentWindow.postMessage && (t = {
            method: t
        },
        void 0 !== s && (t.value = s),
        8 <= (s = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"))) && s < 10 && (t = JSON.stringify(t)),
        e.element.contentWindow.postMessage(t, e.origin))
    }
    function as(s, i) {
        var t, e, r, n, a = [];
        (i = ns(i)).event ? ("error" === i.event && is(s, i.data.method).forEach(function(e) {
            var t = new Error(i.data.message);
            t.name = i.data.name,
            e.reject(t),
            rs(s, i.data.method, e)
        }),
        a = is(s, "event:".concat(i.event)),
        t = i.data) : i.method && (e = s,
        r = i.method,
        r = !((n = is(e, r)).length < 1) && (rs(e, r, e = n.shift()),
        e)) && (a.push(r),
        t = i.value),
        a.forEach(function(e) {
            try {
                "function" == typeof e ? e.call(s, t) : e.resolve(t)
            } catch (e) {}
        })
    }
    var os = ["autopause", "autoplay", "background", "byline", "color", "colors", "controls", "dnt", "height", "id", "interactive_params", "keyboard", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];
    function ls(i, e) {
        return os.reduce(function(e, t) {
            var s = i.getAttribute("data-vimeo-".concat(t));
            return !s && "" !== s || (e[t] = "" === s ? 1 : s),
            e
        }, 1 < arguments.length && void 0 !== e ? e : {})
    }
    function cs(e, t) {
        var s, e = e.html;
        if (t)
            return null === t.getAttribute("data-vimeo-initialized") && ((s = document.createElement("div")).innerHTML = e,
            t.appendChild(s.firstChild),
            t.setAttribute("data-vimeo-initialized", "true")),
            t.querySelector("iframe");
        throw new TypeError("An element must be provided")
    }
    function ds(n, e, t) {
        var a = 1 < arguments.length && void 0 !== e ? e : {}
          , o = 2 < arguments.length ? t : void 0;
        return new Promise(function(t, s) {
            if (!C(n))
                throw new TypeError("“".concat(n, "” is not a vimeo.com url."));
            var e, i = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(n));
            for (e in a)
                a.hasOwnProperty(e) && (i += "&".concat(e, "=").concat(encodeURIComponent(a[e])));
            var r = new ("XDomainRequest"in window ? XDomainRequest : XMLHttpRequest);
            r.open("GET", i, !0),
            r.onload = function() {
                if (404 === r.status)
                    s(new Error("“".concat(n, "” was not found.")));
                else if (403 === r.status)
                    s(new Error("“".concat(n, "” is not embeddable.")));
                else
                    try {
                        var e = JSON.parse(r.responseText);
                        403 === e.domain_status_code ? (cs(e, o),
                        s(new Error("“".concat(n, "” is not embeddable.")))) : t(e)
                    } catch (e) {
                        s(e)
                    }
            }
            ,
            r.onerror = function() {
                var e = r.status ? " (".concat(r.status, ")") : "";
                s(new Error("There was an error fetching the embed code from Vimeo".concat(e, ".")))
            }
            ,
            r.send()
        }
        )
    }
    function hs(e) {
        function s(e) {
            "console"in window && console.error && console.error("There was an error creating an embed: ".concat(e))
        }
        e = 0 < arguments.length && void 0 !== e ? e : document,
        e = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"));
        e.forEach(function(t) {
            try {
                var e;
                null === t.getAttribute("data-vimeo-defer") && ds(Xt(e = ls(t)), e, t).then(function(e) {
                    return cs(e, t)
                }).catch(s)
            } catch (e) {
                s(e)
            }
        })
    }
    function fs(e) {
        var a, t = 0 < arguments.length && void 0 !== e ? e : document;
        window.VimeoCheckedUrlTimeParam || (window.VimeoCheckedUrlTimeParam = !0,
        a = function(e) {
            "console"in window && console.error && console.error("There was an error getting video Id: ".concat(e))
        }
        ,
        window.addEventListener("message", function(i) {
            if (C(i.origin)) {
                var e = ns(i.data);
                if (e && "ready" === e.event)
                    for (var r = t.querySelectorAll("iframe"), n = 0; n < r.length; n++)
                        !function() {
                            var t, e = r[n], s = e.contentWindow === i.source;
                            Zt(e.src) && s && (t = new bs(e)).getVideoId().then(function(e) {
                                var e = new RegExp("[?&]vimeo_t_".concat(e, "=([^&#]*)")).exec(window.location.href);
                                e && e[1] && (e = decodeURI(e[1]),
                                t.setCurrentTime(e))
                            }).catch(a)
                        }()
            }
        }))
    }
    var j, ps, T, us = {
        role: "viewer",
        autoPlayMuted: !0,
        allowedDrift: .3,
        maxAllowedDrift: 1,
        minCheckInterval: .1,
        maxRateAdjustment: .2,
        maxTimeToCatchUp: 1
    }, ms = function(e) {
        var t = a;
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(t, "prototype", {
            writable: !1
        }),
        e && Bt(t, e);
        var i, s, r, n = qt(a);
        function a(e, t) {
            var r, s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, i = 3 < arguments.length ? arguments[3] : void 0;
            return Tt(this, a),
            zt(Dt(r = n.call(this)), "logger", void 0),
            zt(Dt(r), "speedAdjustment", 0),
            zt(Dt(r), "adjustSpeed", function() {
                var s = A(E().mark(function e(t, s) {
                    var i;
                    return E().wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r.speedAdjustment === s)
                                    return e.abrupt("return");
                                e.next = 2;
                                break;
                            case 2:
                                return e.next = 4,
                                t.getPlaybackRate();
                            case 4:
                                return e.t0 = e.sent,
                                e.t1 = r.speedAdjustment,
                                e.t2 = e.t0 - e.t1,
                                e.t3 = s,
                                i = e.t2 + e.t3,
                                r.log("New playbackRate:  ".concat(i)),
                                e.next = 12,
                                t.setPlaybackRate(i);
                            case 12:
                                r.speedAdjustment = s;
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }, e)
                }));
                return function(e, t) {
                    return s.apply(this, arguments)
                }
            }()),
            r.logger = i,
            r.init(t, e, Ot(Ot({}, us), s)),
            r
        }
        return Mt(a, [{
            key: "disconnect",
            value: function() {
                this.dispatchEvent(new Event("disconnect"))
            }
        }, {
            key: "init",
            value: (r = A(E().mark(function e(t, s, i) {
                var r, n, a, o = this;
                return E().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            this.waitForTOReadyState(t, "open");
                        case 2:
                            if ("viewer" === i.role)
                                return e.next = 5,
                                this.updatePlayer(t, s, i);
                            e.next = 10;
                            break;
                        case 5:
                            r = Ut(t, "change", function() {
                                return o.updatePlayer(t, s, i)
                            }),
                            n = this.maintainPlaybackPosition(t, s, i),
                            this.addEventListener("disconnect", function() {
                                n.cancel(),
                                r.cancel()
                            }),
                            e.next = 14;
                            break;
                        case 10:
                            return e.next = 12,
                            this.updateTimingObject(t, s);
                        case 12:
                            a = Ut(s, ["seeked", "play", "pause", "ratechange"], function() {
                                return o.updateTimingObject(t, s)
                            }, "on", "off"),
                            this.addEventListener("disconnect", function() {
                                return a.cancel()
                            });
                        case 14:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            })),
            function(e, t, s) {
                return r.apply(this, arguments)
            }
            )
        }, {
            key: "updateTimingObject",
            value: (s = A(E().mark(function e(t, s) {
                return E().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.t0 = t,
                            e.next = 3,
                            s.getCurrentTime();
                        case 3:
                            return e.t1 = e.sent,
                            e.next = 6,
                            s.getPaused();
                        case 6:
                            e.sent ? (e.t2 = 0,
                            e.next = 13) : e.next = 10;
                            break;
                        case 10:
                            return e.next = 12,
                            s.getPlaybackRate();
                        case 12:
                            e.t2 = e.sent;
                        case 13:
                            e.t3 = e.t2,
                            e.t4 = {
                                position: e.t1,
                                velocity: e.t3
                            },
                            e.t0.update.call(e.t0, e.t4);
                        case 16:
                        case "end":
                            return e.stop()
                        }
                }, e)
            })),
            function(e, t) {
                return s.apply(this, arguments)
            }
            )
        }, {
            key: "updatePlayer",
            value: (i = A(E().mark(function e(t, s, i) {
                var r, n;
                return E().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n = t.query(),
                            r = n.position,
                            n = n.velocity,
                            "number" == typeof r && s.setCurrentTime(r),
                            "number" != typeof n)
                                e.next = 25;
                            else {
                                if (0 === n)
                                    return e.next = 6,
                                    s.getPaused();
                                e.next = 11
                            }
                            break;
                        case 6:
                            if (e.t0 = e.sent,
                            !1 !== e.t0) {
                                e.next = 9;
                                break
                            }
                            s.pause();
                        case 9:
                            e.next = 25;
                            break;
                        case 11:
                            if (0 < n)
                                return e.next = 14,
                                s.getPaused();
                            e.next = 25;
                            break;
                        case 14:
                            if (e.t1 = e.sent,
                            !0 === e.t1)
                                return e.next = 18,
                                s.play().catch(function() {
                                    var t = A(E().mark(function e(t) {
                                        return E().wrap(function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    if ("NotAllowedError" === t.name && i.autoPlayMuted)
                                                        return e.next = 3,
                                                        s.setMuted(!0);
                                                    e.next = 5;
                                                    break;
                                                case 3:
                                                    return e.next = 5,
                                                    s.play().catch(function(e) {
                                                        return console.error("Couldn't play the video from TimingSrcConnector. Error:", e)
                                                    });
                                                case 5:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }, e)
                                    }));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }());
                            e.next = 19;
                            break;
                        case 18:
                            this.updatePlayer(t, s, i);
                        case 19:
                            return e.next = 21,
                            s.getPlaybackRate();
                        case 21:
                            if (e.t2 = e.sent,
                            e.t3 = n,
                            e.t2 === e.t3) {
                                e.next = 25;
                                break
                            }
                            s.setPlaybackRate(n);
                        case 25:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            })),
            function(e, t, s) {
                return i.apply(this, arguments)
            }
            )
        }, {
            key: "maintainPlaybackPosition",
            value: function(n, a, e) {
                var o = this
                  , l = e.allowedDrift
                  , c = e.maxAllowedDrift
                  , t = e.minCheckInterval
                  , d = e.maxRateAdjustment
                  , h = e.maxTimeToCatchUp
                  , e = 1e3 * Math.min(h, Math.max(t, c))
                  , s = function() {
                    var e = A(E().mark(function e() {
                        var t, s, i, r;
                        return E().wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (e.t0 = 0 === n.query().velocity,
                                    e.t0) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 4,
                                    a.getPaused();
                                case 4:
                                    e.t1 = e.sent,
                                    e.t0 = !0 === e.t1;
                                case 6:
                                    if (e.t0)
                                        return e.abrupt("return");
                                    e.next = 8;
                                    break;
                                case 8:
                                    return e.t2 = n.query().position,
                                    e.next = 11,
                                    a.getCurrentTime();
                                case 11:
                                    if (e.t3 = e.sent,
                                    t = e.t2 - e.t3,
                                    s = Math.abs(t),
                                    o.log("Drift: ".concat(t)),
                                    c < s)
                                        return e.next = 18,
                                        o.adjustSpeed(a, 0);
                                    e.next = 22;
                                    break;
                                case 18:
                                    a.setCurrentTime(n.query().position),
                                    o.log("Resync by currentTime"),
                                    e.next = 29;
                                    break;
                                case 22:
                                    if (l < s)
                                        return r = (r = s / h) < (i = d) ? (i - r) / 2 : i,
                                        e.next = 28,
                                        o.adjustSpeed(a, r * Math.sign(t));
                                    e.next = 29;
                                    break;
                                case 28:
                                    o.log("Resync by playbackRate");
                                case 29:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
                  , i = setInterval(function() {
                    return s()
                }, e);
                return {
                    cancel: function() {
                        return clearInterval(i)
                    }
                }
            }
        }, {
            key: "log",
            value: function(e) {
                var t;
                null != (t = this.logger) && t.call(this, "TimingSrcConnector: ".concat(e))
            }
        }, {
            key: "waitForTOReadyState",
            value: function(s, i) {
                return new Promise(function(t) {
                    (function e() {
                        s.readyState === i ? t() : s.addEventListener("readystatechange", e, {
                            once: !0
                        })
                    }
                    )()
                }
                )
            }
        }]),
        a
    }(Ht(EventTarget)), gs = new WeakMap, vs = new WeakMap, P = {}, bs = function() {
        function i(n) {
            var a = this
              , t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            if (Tt(this, i),
            window.jQuery && n instanceof jQuery && (1 < n.length && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."),
            n = n[0]),
            "undefined" != typeof document && "string" == typeof n && (n = document.getElementById(n)),
            s = n,
            !Boolean(s && 1 === s.nodeType && "nodeName"in s && s.ownerDocument && s.ownerDocument.defaultView))
                throw new TypeError("You must pass either a valid element or a valid id.");
            if ("IFRAME" === (n = "IFRAME" !== n.nodeName && (s = n.querySelector("iframe")) ? s : n).nodeName && !C(n.getAttribute("src") || ""))
                throw new Error("The player element passed isn’t a Vimeo embed.");
            if (gs.has(n))
                return gs.get(n);
            this._window = n.ownerDocument.defaultView,
            this.element = n,
            this.origin = "*";
            var e, s = new S(function(i, r) {
                var e;
                a._onMessage = function(e) {
                    var t, s;
                    C(e.origin) && a.element.contentWindow === e.source && ("*" === a.origin && (a.origin = e.origin),
                    (e = ns(e.data)) && "error" === e.event && e.data && "ready" === e.data.method ? ((t = new Error(e.data.message)).name = e.data.name,
                    r(t)) : (t = e && "ready" === e.event,
                    s = e && "ping" === e.method,
                    t || s ? (a.element.setAttribute("data-ready", "true"),
                    i()) : as(a, e)))
                }
                ,
                a._window.addEventListener("message", a._onMessage),
                "IFRAME" !== a.element.nodeName && ds(Xt(e = ls(n, t)), e, n).then(function(e) {
                    var t, s, i = cs(e, n);
                    return a.element = i,
                    a._originalElement = n,
                    t = n,
                    i = i,
                    s = L.get(t),
                    L.set(i, s),
                    L.delete(t),
                    gs.set(a.element, a),
                    e
                }).catch(r)
            }
            );
            return vs.set(this, s),
            gs.set(this.element, this),
            "IFRAME" === this.element.nodeName && O(this, "ping"),
            P.isEnabled && (e = function() {
                return P.exit()
            }
            ,
            this.fullscreenchangeHandler = function() {
                (P.isFullscreen ? ss : rs)(a, "event:exitFullscreen", e),
                a.ready().then(function() {
                    O(a, "fullscreenchange", P.isFullscreen)
                })
            }
            ,
            P.on("fullscreenchange", this.fullscreenchangeHandler)),
            this
        }
        var s;
        return Mt(i, [{
            key: "callMethod",
            value: function(s) {
                var i = this
                  , r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                return new S(function(e, t) {
                    return i.ready().then(function() {
                        ss(i, s, {
                            resolve: e,
                            reject: t
                        }),
                        O(i, s, r)
                    }).catch(t)
                }
                )
            }
        }, {
            key: "get",
            value: function(s) {
                var i = this;
                return new S(function(e, t) {
                    return s = Wt(s, "get"),
                    i.ready().then(function() {
                        ss(i, s, {
                            resolve: e,
                            reject: t
                        }),
                        O(i, s)
                    }).catch(t)
                }
                )
            }
        }, {
            key: "set",
            value: function(s, i) {
                var r = this;
                return new S(function(e, t) {
                    if (s = Wt(s, "set"),
                    null == i)
                        throw new TypeError("There must be a value to set.");
                    return r.ready().then(function() {
                        ss(r, s, {
                            resolve: e,
                            reject: t
                        }),
                        O(r, s, i)
                    }).catch(t)
                }
                )
            }
        }, {
            key: "on",
            value: function(e, t) {
                if (!e)
                    throw new TypeError("You must pass an event name.");
                if (!t)
                    throw new TypeError("You must pass a callback function.");
                if ("function" != typeof t)
                    throw new TypeError("The callback must be a function.");
                0 === is(this, "event:".concat(e)).length && this.callMethod("addEventListener", e).catch(function() {}),
                ss(this, "event:".concat(e), t)
            }
        }, {
            key: "off",
            value: function(e, t) {
                if (!e)
                    throw new TypeError("You must pass an event name.");
                if (t && "function" != typeof t)
                    throw new TypeError("The callback must be a function.");
                rs(this, "event:".concat(e), t) && this.callMethod("removeEventListener", e).catch(function(e) {})
            }
        }, {
            key: "loadVideo",
            value: function(e) {
                return this.callMethod("loadVideo", e)
            }
        }, {
            key: "ready",
            value: function() {
                var e = vs.get(this) || new S(function(e, t) {
                    t(new Error("Unknown player. Probably unloaded."))
                }
                );
                return S.resolve(e)
            }
        }, {
            key: "addCuePoint",
            value: function(e) {
                return this.callMethod("addCuePoint", {
                    time: e,
                    data: 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                })
            }
        }, {
            key: "removeCuePoint",
            value: function(e) {
                return this.callMethod("removeCuePoint", e)
            }
        }, {
            key: "enableTextTrack",
            value: function(e, t) {
                if (e)
                    return this.callMethod("enableTextTrack", {
                        language: e,
                        kind: t
                    });
                throw new TypeError("You must pass a language.")
            }
        }, {
            key: "disableTextTrack",
            value: function() {
                return this.callMethod("disableTextTrack")
            }
        }, {
            key: "pause",
            value: function() {
                return this.callMethod("pause")
            }
        }, {
            key: "play",
            value: function() {
                return this.callMethod("play")
            }
        }, {
            key: "requestFullscreen",
            value: function() {
                return P.isEnabled ? P.request(this.element) : this.callMethod("requestFullscreen")
            }
        }, {
            key: "exitFullscreen",
            value: function() {
                return P.isEnabled ? P.exit() : this.callMethod("exitFullscreen")
            }
        }, {
            key: "getFullscreen",
            value: function() {
                return P.isEnabled ? S.resolve(P.isFullscreen) : this.get("fullscreen")
            }
        }, {
            key: "requestPictureInPicture",
            value: function() {
                return this.callMethod("requestPictureInPicture")
            }
        }, {
            key: "exitPictureInPicture",
            value: function() {
                return this.callMethod("exitPictureInPicture")
            }
        }, {
            key: "getPictureInPicture",
            value: function() {
                return this.get("pictureInPicture")
            }
        }, {
            key: "remotePlaybackPrompt",
            value: function() {
                return this.callMethod("remotePlaybackPrompt")
            }
        }, {
            key: "unload",
            value: function() {
                return this.callMethod("unload")
            }
        }, {
            key: "destroy",
            value: function() {
                var s = this;
                return new S(function(e) {
                    var t;
                    vs.delete(s),
                    gs.delete(s.element),
                    s._originalElement && (gs.delete(s._originalElement),
                    s._originalElement.removeAttribute("data-vimeo-initialized")),
                    s.element && "IFRAME" === s.element.nodeName && s.element.parentNode && (s.element.parentNode.parentNode && s._originalElement && s._originalElement !== s.element.parentNode ? s.element.parentNode.parentNode.removeChild(s.element.parentNode) : s.element.parentNode.removeChild(s.element)),
                    s.element && "DIV" === s.element.nodeName && s.element.parentNode && (s.element.removeAttribute("data-vimeo-initialized"),
                    t = s.element.querySelector("iframe")) && t.parentNode && (t.parentNode.parentNode && s._originalElement && s._originalElement !== t.parentNode ? t.parentNode.parentNode.removeChild(t.parentNode) : t.parentNode.removeChild(t)),
                    s._window.removeEventListener("message", s._onMessage),
                    P.isEnabled && P.off("fullscreenchange", s.fullscreenchangeHandler),
                    e()
                }
                )
            }
        }, {
            key: "getAutopause",
            value: function() {
                return this.get("autopause")
            }
        }, {
            key: "setAutopause",
            value: function(e) {
                return this.set("autopause", e)
            }
        }, {
            key: "getBuffered",
            value: function() {
                return this.get("buffered")
            }
        }, {
            key: "getCameraProps",
            value: function() {
                return this.get("cameraProps")
            }
        }, {
            key: "setCameraProps",
            value: function(e) {
                return this.set("cameraProps", e)
            }
        }, {
            key: "getChapters",
            value: function() {
                return this.get("chapters")
            }
        }, {
            key: "getCurrentChapter",
            value: function() {
                return this.get("currentChapter")
            }
        }, {
            key: "getColor",
            value: function() {
                return this.get("color")
            }
        }, {
            key: "getColors",
            value: function() {
                return S.all([this.get("colorOne"), this.get("colorTwo"), this.get("colorThree"), this.get("colorFour")])
            }
        }, {
            key: "setColor",
            value: function(e) {
                return this.set("color", e)
            }
        }, {
            key: "setColors",
            value: function(e) {
                var t;
                return Array.isArray(e) ? (t = new S(function(e) {
                    return e(null)
                }
                ),
                e = [e[0] ? this.set("colorOne", e[0]) : t, e[1] ? this.set("colorTwo", e[1]) : t, e[2] ? this.set("colorThree", e[2]) : t, e[3] ? this.set("colorFour", e[3]) : t],
                S.all(e)) : new S(function(e, t) {
                    return t(new TypeError("Argument must be an array."))
                }
                )
            }
        }, {
            key: "getCuePoints",
            value: function() {
                return this.get("cuePoints")
            }
        }, {
            key: "getCurrentTime",
            value: function() {
                return this.get("currentTime")
            }
        }, {
            key: "setCurrentTime",
            value: function(e) {
                return this.set("currentTime", e)
            }
        }, {
            key: "getDuration",
            value: function() {
                return this.get("duration")
            }
        }, {
            key: "getEnded",
            value: function() {
                return this.get("ended")
            }
        }, {
            key: "getLoop",
            value: function() {
                return this.get("loop")
            }
        }, {
            key: "setLoop",
            value: function(e) {
                return this.set("loop", e)
            }
        }, {
            key: "setMuted",
            value: function(e) {
                return this.set("muted", e)
            }
        }, {
            key: "getMuted",
            value: function() {
                return this.get("muted")
            }
        }, {
            key: "getPaused",
            value: function() {
                return this.get("paused")
            }
        }, {
            key: "getPlaybackRate",
            value: function() {
                return this.get("playbackRate")
            }
        }, {
            key: "setPlaybackRate",
            value: function(e) {
                return this.set("playbackRate", e)
            }
        }, {
            key: "getPlayed",
            value: function() {
                return this.get("played")
            }
        }, {
            key: "getQualities",
            value: function() {
                return this.get("qualities")
            }
        }, {
            key: "getQuality",
            value: function() {
                return this.get("quality")
            }
        }, {
            key: "setQuality",
            value: function(e) {
                return this.set("quality", e)
            }
        }, {
            key: "getRemotePlaybackAvailability",
            value: function() {
                return this.get("remotePlaybackAvailability")
            }
        }, {
            key: "getRemotePlaybackState",
            value: function() {
                return this.get("remotePlaybackState")
            }
        }, {
            key: "getSeekable",
            value: function() {
                return this.get("seekable")
            }
        }, {
            key: "getSeeking",
            value: function() {
                return this.get("seeking")
            }
        }, {
            key: "getTextTracks",
            value: function() {
                return this.get("textTracks")
            }
        }, {
            key: "getVideoEmbedCode",
            value: function() {
                return this.get("videoEmbedCode")
            }
        }, {
            key: "getVideoId",
            value: function() {
                return this.get("videoId")
            }
        }, {
            key: "getVideoTitle",
            value: function() {
                return this.get("videoTitle")
            }
        }, {
            key: "getVideoWidth",
            value: function() {
                return this.get("videoWidth")
            }
        }, {
            key: "getVideoHeight",
            value: function() {
                return this.get("videoHeight")
            }
        }, {
            key: "getVideoUrl",
            value: function() {
                return this.get("videoUrl")
            }
        }, {
            key: "getVolume",
            value: function() {
                return this.get("volume")
            }
        }, {
            key: "setVolume",
            value: function(e) {
                return this.set("volume", e)
            }
        }, {
            key: "setTimingSrc",
            value: (s = A(E().mark(function e(t, s) {
                var i, r = this;
                return E().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t) {
                                e.next = 2;
                                break
                            }
                            throw new TypeError("A Timing Object must be provided.");
                        case 2:
                            return e.next = 4,
                            this.ready();
                        case 4:
                            return i = new ms(this,t,s),
                            O(this, "notifyTimingObjectConnect"),
                            i.addEventListener("disconnect", function() {
                                return O(r, "notifyTimingObjectDisconnect")
                            }),
                            e.abrupt("return", i);
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }, e, this)
            })),
            function(e, t) {
                return s.apply(this, arguments)
            }
            )
        }]),
        i
    }();
    gt || (j = function() {
        for (var e, t = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], s = 0, i = t.length, r = {}; s < i; s++)
            if ((e = t[s]) && e[1]in document) {
                for (s = 0; s < e.length; s++)
                    r[t[0][s]] = e[s];
                return r
            }
        return !1
    }(),
    ps = {
        fullscreenchange: j.fullscreenchange,
        fullscreenerror: j.fullscreenerror
    },
    T = {
        request: function(r) {
            return new Promise(function(e, t) {
                function s() {
                    T.off("fullscreenchange", s),
                    e()
                }
                T.on("fullscreenchange", s);
                var i = (r = r || document.documentElement)[j.requestFullscreen]();
                i instanceof Promise && i.then(s).catch(t)
            }
            )
        },
        exit: function() {
            return new Promise(function(t, e) {
                var s, i;
                T.isFullscreen ? (T.on("fullscreenchange", s = function e() {
                    T.off("fullscreenchange", e),
                    t()
                }
                ),
                (i = document[j.exitFullscreen]())instanceof Promise && i.then(s).catch(e)) : t()
            }
            )
        },
        on: function(e, t) {
            e = ps[e];
            e && document.addEventListener(e, t)
        },
        off: function(e, t) {
            e = ps[e];
            e && document.removeEventListener(e, t)
        }
    },
    Object.defineProperties(T, {
        isFullscreen: {
            get: function() {
                return Boolean(document[j.fullscreenElement])
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return document[j.fullscreenElement]
            }
        },
        isEnabled: {
            enumerable: !0,
            get: function() {
                return Boolean(document[j.fullscreenEnabled])
            }
        }
    }),
    P = T,
    hs(),
    function(e) {
        var i = 0 < arguments.length && void 0 !== e ? e : document;
        window.VimeoPlayerResizeEmbeds_ || (window.VimeoPlayerResizeEmbeds_ = !0,
        window.addEventListener("message", function(e) {
            if (C(e.origin) && e.data && "spacechange" === e.data.event)
                for (var t = i.querySelectorAll("iframe"), s = 0; s < t.length; s++)
                    if (t[s].contentWindow === e.source) {
                        t[s].parentElement.style.paddingBottom = "".concat(e.data.data[0].bottom, "px");
                        break
                    }
        }))
    }(),
    function(e) {
        var a = 0 < arguments.length && void 0 !== e ? e : document;
        window.VimeoSeoMetadataAppended || (window.VimeoSeoMetadataAppended = !0,
        window.addEventListener("message", function(e) {
            if (C(e.origin)) {
                var t = ns(e.data);
                if (t && "ready" === t.event)
                    for (var s = a.querySelectorAll("iframe"), i = 0; i < s.length; i++) {
                        var r = s[i]
                          , n = r.contentWindow === e.source;
                        Zt(r.src) && n && new bs(r).callMethod("appendVideoMetadata", window.location.href)
                    }
            }
        }))
    }(),
    fs());
    customElements.define("block-video", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        get defaultData() {
            return {
                isPlaying: !1
            }
        }
        afterRender() {
            var e = this.querySelector("iframe");
            if (e && !this.hasInit)
                try {
                    this.hasInit = !0;
                    let t = new bs(e);
                    t.on("play", function() {
                        this.data.isPlaying = !0
                    }),
                    this.intersectionObserver = new IntersectionObserver(e=>{
                        e.forEach(e=>{
                            e.isIntersecting ? t?.play() : t?.pause()
                        }
                        )
                    }
                    ),
                    this.intersectionObserver.observe(this)
                } catch (e) {}
        }
        render() {
            var {content: e, isPlaying: t} = this.data;
            let s = null;
            return e?.vimeo_id1 && (s = w(e?.vimeo_id1, x)?.replace("<p>", "")?.replace("</p>", "")),
            e ? o`

            <section class="rel z:2  p-y:170fx  bg:#FAF8F3 c:#0E0E0E m-b:20fx  w:fit  p-y:0fx@m  m-b:10px@m" >
                <div class="p-x:250fx p-x:10px@m ">
                    <div class="rel before before:p-t:56% before:p-t:60.5%@m">
                        <iframe 
                            class="abs tl:0 w:fit h:fit" 
                            ?src="${"" + (e?.vimeo_id1 && `https://player.vimeo.com/video/${s}?muted=1&controls=0&loop=1&app_id=122963&autoplay=1`)}" 
                            allow="autoplay; fullscreen; picture-in-picture"
                            frameborder="0" >
                        </iframe>
                        <img  
                            loading="lazy"
                            class="pointer:none abs tl:0 fit object:cover ${t || !e?.temp_image ? "d:none " : ""}"  
                            alt="${e?.image?.alt}" 
                            ?src="${e?.temp_image?.url && v(e?.temp_image, {
                fm: "webp"
            })}"
                            width="${e?.temp_image?.dimensions?.width}"
                            height="${e?.temp_image?.dimensions?.height}"
                        />
                    </div>
                </div>
            </section>` : o``
        }
    }
    );
    customElements.define("block-image", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        get defaultData() {
            return {
                isPlaying: !1
            }
        }
        afterRender() {
            var e = this.querySelector("iframe");
            if (e && !this.hasInit)
                try {
                    this.hasInit = !0;
                    let t = new bs(e);
                    t.on("play", function() {
                        this.data.isPlaying = !0
                    }),
                    this.intersectionObserver = new IntersectionObserver(e=>{
                        e.forEach(e=>{
                            e.isIntersecting ? t?.play() : t?.pause()
                        }
                        )
                    }
                    ),
                    this.intersectionObserver.observe(this)
                } catch (e) {}
        }
        render() {
            var {content: e, isPlaying: t} = this.data;
            return e?.vimeo_id1 && w(e?.vimeo_id1, x)?.replace("<p>", "")?.replace("</p>", ""),
            e ? o`

            <section class="rel z:2 bg:#FAF8F3 c:#0E0E0E m-b:20fx w:fit p-x:40fx p-x:10fx@m m-b:10px@m" >
                <div class="w:fit rel before before:p-t:68%">
                    <img  
                        loading="lazy"
                        decode="async"
                        class="pointer:none abs tl:0 fit object:cover ${t || !e?.image1 ? "d:none " : ""}"  
                        alt="${e?.image1?.alt}" 
                        ?src="${e?.image1?.url && v(e?.image1, {
                fm: "webp"
            })}"
                        width="${e?.image?.dimensions?.width}"
                        height="${e?.image?.dimensions?.height}"
                    />
                </div>
            </section>` : o``
        }
    }
    );
    customElements.define("block-phones-screens", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <section class="rel z:2 flex items:start m-b:20fx just:between c:#0E0E0E p-y:170fx ${"bg:" + e?.background_color} p-x:250fx  p-x:10fx@m p-y:65fx@m  m-b:0px@m" >

                <div class="abs tl:0 fit p-x:40fx p-x:10fx@m">
                    <img 
                        loading="lazy"
                        decode="async"
                        ?src="${e?.background_image?.url}" 
                        width="${e?.background_image?.dimensions?.width}"
                        height="${e?.background_image?.dimensions?.height}"
                        class="fit object:cover ${e?.background_image ? "" : "d:none"}" 
                    />
                </div>

                <div class="rel flex items:stretch just:center space-x:44fx space-x:7fx@m w:fit p-x:10fx@m">
                    <div class=""></div>
                    ${e?.slides?.map((e,t)=>o`
                            <div class="mask w:300fx radius:18fx border:solid,3fx,#000  block before before:p-t:196% rel ${1 < t ? "d:none@m" : ""} w:189fx@m">
                                <img  
                                    loading="lazy"
                                    decode="async"
                                    alt="${e?.screen?.alt}" 
                                    ?src="${e?.screen?.url}"
                                    width="${e?.screen?.dimensions?.width}"
                                    height="${e?.screen?.dimensions?.height}"
                                    class="abs tl:0 fit object:cover" 
                                />
                            </div>`)}
                </div>
                        
            </section>` : o``
        }
    }
    );
    customElements.define("block-case-header", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <section dark-theme class="rel z:2 h:100vhfix c:#FFFCF1 w:fit mask" >

                <scroll-object class="block abs tl:0 fit" parallax ratio="-0.1">
                    <img  
                        loading="lazy"
                        decode="async"
                        alt="${e?.image?.alt}" 
                        width="${e?.image?.dimensions?.width}"
                        height="${e?.image?.dimensions?.height}"
                        ?src="${e?.image?.url && v(e?.image, {
                fm: "webp"
            })}"
                        class="abs tl:0 fit object:cover transform scale:1.4 (.in-view):scale:1 (.in-view):tween:all,1.8s,easeOutSlow  ${e?.mobile_align_right ? "object-pos:100%,50%@m" : ""}" 
                    />
                </scroll-object>

                <div class="abs tl:0 fit bg:#000000 o:0.1" style="background: linear-gradient(0deg, black, transparent)"></div>

                <div class="abs tl:0 fit flex items:end just:between p-x:40fx p-x:10fx@m just:start@m w:60%@m">
                    <div class="w:fit p-l:690fx p-l:0@m">
                        <div class="(&//*):fs:62fx lh:1.07 m-b:70fx m-b:40fx@m (&//*):fs:28fx@m">
                            <split-text data-delay="0.3">
                                ${e?.description && w(e?.description, x)}
                            </split-text>
                        </div>
                    </div>
                </div>

                <button class="abs b:70fx r:40fx bg:none border:none r:10fx@m b:40fx@m d:none@m">
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                        <circle opacity="0.2" cx="26" cy="26" r="25" stroke="#FFFCF1" stroke-width="2"/>
                        <circle cx="26.5" cy="23.5" r="1.5" transform="rotate(90 26.5 23.5)" fill="#FFFCF1"/>
                        <circle cx="26.5" cy="29.5" r="1.5" transform="rotate(90 26.5 29.5)" fill="#FFFCF1"/>
                    </svg>
                </button>

            </section>` : o``
        }
    }
    );
    customElements.define("block-next-case", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <section dark-theme class="group rel z:2 h:60vhfix c:#FFFCF1 w:fit mask" >

                <scroll-object class="block abs tl:0 fit" parallax ratio="-0.1">
                    <img  
                        loading="lazy"
                        decode="async"
                        alt="${e?.image?.alt}" 
                        ?src="${e?.image?.url && v(e?.image, {
                fm: "webp"
            })}"
                        width="${e?.image?.dimensions?.width}"
                        height="${e?.image?.dimensions?.height}"
                        class="abs tl:0 fit object:cover transform scale:1.4 (.in-view):scale:1 (.in-view):tween:all,1.8s,easeOutSlow" 
                    />
                </scroll-object>

                <div class="abs tl:0 fit bg:#000000 o:1" style="background: linear-gradient(180deg, #0E0E0E, transparent)"></div>

              

                <span class="iblock abs b:70fx r:40fx bg:none border:none r:10fx@m d:none d:inline-block@m">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                        <circle opacity="0.2" cx="26" cy="26" r="25" stroke="#FFFCF1" stroke-width="2"/>
                        <circle cx="26.5" cy="23.5" r="1.5" transform="rotate(90 26.5 23.5)" fill="#FFFCF1"/>
                        <circle cx="26.5" cy="29.5" r="1.5" transform="rotate(90 26.5 29.5)" fill="#FFFCF1"/>
                    </svg> -->

                    <div class="
                            w:50fx h:50fx c:#FFFCF1 flex items:center just:center radius:100%
                            border:solid,1px,#FFFCF1
                        ">
                        <span class="fs:13fx transform c:#FFFCF1 transform scale-x:-1 m-t:0.3em">↵</span>
                    </div>

                </span>


                <core-cursor-wrapper class="transform block abs tl:0 fit z:2 d:none@m">
                    <core-cursor aria-hidden="true" class="transform d:block tl:0fx w:90fx h:90fx pointer:none z:2 border:none abs tl:0 fs:0 | d:none@m ">
                        <div class="
                                abs tl:10fx fit c:#FFFCF1 flex items:center just:center radius:100%
                                transform scale:0 (.group:hover):scale:1 tween:transform,1s,easeOut 
                                border:solid,1px,#FFFCF1
                            ">
                            <span class="fs:13fx transform c:#FFFCF1 transform scale-x:-1 m-t:0.1em">↵</span>
                        </div>
                    </core-cursor>
                </core-cursor-wrapper>


                <a ?href="${"work/" + e?._meta?.uid}" 
                    class="abs tl:0 fit flex items:end just:between p-x:40fx p-x:10fx@m z:3">
                    <span class="w:fit block">
                        <span class="block fs:16fx">next</span>
                        <span class="block (&//*):fs:62fx lh:1.07 m-b:70fx  (&//*):fs:36fx@m">
                            <split-text data-delay="0.3">
                                ${e?.title && w(e?.title, x)}
                            </split-text>
                        </span>
                    </span>
                </a>

                

            </section>` : o``
        }
    }
    );
    customElements.define("block-testimonials", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <section class="rel z:2 p-x:40fx p-y:85fx bg:#FAF8F3 c:#0E0E0E p-x:10fx@m" >

                <scroll-object class=" w:fit flex items:start just:between m-b:200fx m-b:65fx@m wrap:wrap@m space-y:20fx@m">
                    ${e?.slides?.map((e,t)=>o`
                        <article class=" w:325fx o:0 (.in-view):o:1 ${`(.in-view):tween:all,1s,${.2 + .1 * t}s,easeOut`} w:175fx@m ">
                            <div class="mask rel before before:p-t:120% m-b:30fx">
                                <img  
                                    loading="lazy"
                                    decode="async"
                                    alt="${e?.image?.alt}" 
                                    ?src="${e?.image?.url && v(e?.image, {
                fm: "webp"
            })}"
                                    width="${e?.image?.dimensions?.width}"
                                    height="${e?.image?.dimensions?.height}"
                                    class="abs tl:0 fit object:cover" 
                                />
                            </div>
                            <span class=" block shrink:0 ">
                                <span class="(&//*):fs:17fx (&//*):fs:14fx@m ">
                                    ${e.name}
                                </span>
                                <br/>
                                <span class="(&//*):fs:13fx (&//*):fs:14fx@m ">
                                    ${e.role?.replace(/\n/g, "<br/>")}
                                </span>
                            </span>
                        </article>
                    `)}
                </scroll-object>


                <scroll-object class="space-y:60fx w:fit  space-y:40fx@m">
                    ${e?.slides?.map((e,t)=>o`
                        <article class="flex items:start just:start p-t:20fx o:0 (.in-view):o:1 ${`(.in-view):tween:all,1s,${.2 + .1 * t}s,easeOut`} wrap:wrap@m space-y:48fx@m">
                            <div class="flex items:start just:start items:center@m ">
                                <span class="shrink:0@m w:116fx d:block m-b:40fx fs:16fx! fs:14fx@m! m-b:0@m w:40fx@m"> 
                                    ${`(0${t + 1})`}
                                </span>
                                <h2 class="block w:460fx (&//*):fs:24fx (&//*):fs:17fx@m block shrink:0 nowrap deco:underline w:fit@m">
                                    ${e.name + " (" + (e.company || "") + ")"}
                                </h2>
                            </div>
                            <blockquote class="p:0 block (&//*):fs:24fx (&//*):fs:17fx@m block w:660fx  shrink:1 w:fit@m">
                                ${e.text && w(e.text, x)?.replace(/em\>/g, "sup>")}
                            </blockquote>
                        </article>
                    `)}
                </scroll-object>

            </section>` : o``
        }
    }
    );
    customElements.define("block-case-awards", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <section dark-theme class="rel c:#FFFCF1 bg:#0E0E0E p:40fx flex items:start just:between" >
                <h2 class="w:690fx fs:24fx shrink:0 fs:17fx@m">
                    Awards <br/>
                    & Recognitions
                </h2>
                <ul class="w:fit (&/*):lh:1.2 (&/*):fs:16fx (&/*):fs:17fx@m">
                    ${e?.awards?.map((e,t)=>o`
                        <li class="p-l:30fx rel m-b:1em">
                            <span class="abs l:0 t:0 m-t:-2px  space-x:2px">
                                <span class="align-y:middle iblock w:4fx h:4fx radius:100% bg:currentColor"></span>
                                <span class="align-y:middle iblock w:4fx h:4fx radius:100% bg:currentColor"></span>
                            </span>
                            <span>${e?.line_1 && w(e?.line_1, x)}</span>
                            <span>${e?.line_2 && w(e?.line_2, x)}</span>
                        </li>
                    `)}
                </ul>

            </section>` : o``
        }
    }
    );
    customElements.define("block-case-motion", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        created() {
            this.isPaused = !0
        }
        afterRender() {
            var e = this.querySelector("iframe");
            if (e && !this.hasInit) {
                this.hasInit = !0;
                try {
                    var t = new bs(e);
                    this.player = t,
                    this.classList.add("is-paused")
                } catch (e) {}
            }
        }
        play() {
            this.isPaused = !1,
            this.player?.play(),
            this.classList.add("is-playing"),
            this.classList.remove("is-paused")
        }
        pause() {
            this.isPaused = !0,
            this.player?.pause(),
            this.classList.remove("is-playing"),
            this.classList.add("is-paused")
        }
        toggle() {
            this[this.isPaused ? "play" : "pause"]()
        }
        render() {
            var e = this.data["content"];
            let t = null;
            return e?.vimeo_id && (t = w(e?.vimeo_id, x)?.replace("<p>", "")?.replace("</p>", "")),
            e ? o`

            <section dark-theme   class="rel z:2  p-b:85fx  bg:#0E0E0E c:#fff p:40fx w:fit p-x:10fx@m" >
                <div class="rel before before:p-t:63% mask __before:p-t:78%@m">
                    <iframe 
                        class="abs tl:0 w:fit h:fit" 
                        ?src="${"" + (t && `https://player.vimeo.com/video/${t}?controls=0&loop=1&app_id=122963&autoplay=0`)}" 
                        allow="autoplay; fullscreen; picture-in-picture"
                        frameborder="0" >
                    </iframe>
                    <div class="abs tl:0 fit (.is-playing):o:0  ">
                        <div class="align-x:right abs fit flex items:end just:end p:40fx fs:16fx c:#fff p-x:30fx@m p-y:20fx@m fs:17fx@m">
                            experince the website
                            <br/>
                            in motion
                        </div>
                        <div @click="${e=>this.toggle()}"  class="abs fit  flex items:center just:center p:40fx fs:16fx c:#fff">
                            <button class="rel w:106fx h:106fx bg:#FF5F38 radius:100% border:none w:80fx@m h:80fx@m">
                                <svg xmlns="http://www.w3.org/2000/svg" class="abs tl:0 fit"  viewBox="0 0 106 106" fill="none">
                                    <path d="M56.0634 54.0448L51.0995 58.0118L51 49.8672L56.0634 54.0448Z" fill="#FFFCF1"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>` : o``
        }
    }
    );
    customElements.define("block-slider", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        next() {
            this.querySelector("core-slideshow")?.next()
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <section class="rel z:2 m-b:20fx  p-t:210fx p-b:85fx flex items:start just:between bg:#FAF8F3 c:#0E0E0E p-y:120fx p-x:40fx p-x:10px@m p-y:0@m  m-b:10px@m" >

                <core-slideshow data-use-bullets="true" class="block rel before before:p-t:60% w:fit mask">
                    ${e?.slides?.map((e,t)=>o`
                            <core-slide class="block abs tl:0 fit o:0 transform scale:1.2 (&.is-slide-active):o:1 (&.is-slide-active):scale:1 tween:all,1.1s,easeOut ">
                                <img  
                                    loading="lazy"
                                    decode="async"
                                    alt="${e?.image1?.alt}" 
                                    ?src="${e?.image1?.url}"
                                    class="w:fit h:fit object:cover" 
                                    width="${e?.image?.dimensions?.width}"
                                    height="${e?.image?.dimensions?.height}"
                                />
                            </core-slide>`)}
                </core-slideshow>

                <core-cursor-wrapper @click="${e=>this.next()}"class="group block abs tl:0 fit __blend:difference">
                    <core-cursor aria-hidden="true" class="abs tl:0fx w:98fx h:98fx pointer:none z:2 border:none abs tl:0 fs:0 | d:none@m">
                        <div class="
                                abs tl:0 fit bg:#FFFCF1 c:#FFFCF1 flex items:center just:center radius:120px 
                                transform scale:0 o:0 (.group:hover):o:1   (.group:hover):scale:1 tween:all,0.6s,easeOut 
                            ">
                            <svg class="abs tl:0 fit" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 55 55" fill="none">
                                <path d="M22 27H34M34 27L30 23M34 27L30 31" stroke="#FF5F38"/>
                            </svg>
                        </div>
                    </core-cursor>
                </core-cursor-wrapper>

            </section>` : o``
        }
    }
    );
    customElements.define("block-screen-with-background-image", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var {content: e, isPlaying: t} = this.data;
            return e ? o`

            <section class="rel z:2 bg:#FAF8F3 c:#0E0E0E m-b:20fx w:fit p-x:40fx p-x:10fx@m  p-t:220fx p-b:170fx p-x:250fx p-x:10px@m p-y:65fx@m __p-y:10fx@m overflow:hidden@m m-b:10px@m" >
                <div class="abs tl:0 w:fit before before:p-t:68% h:fit@m">
                    <img  
                        loading="lazy"
                        decode="async"
                        class="pointer:none abs tl:0 fit object:cover ${t || !e?.background_image ? "d:none " : ""}"  
                        alt="${e?.background_image?.alt}" 
                        ?src="${e?.background_image?.url && v(e?.background_image, {
                fm: "webp"
            })}"
                        width="${e?.background_image?.dimensions?.width}"
                        height="${e?.background_image?.dimensions?.height}"
                    />
                </div>

                <img  
                    loading="lazy"
                    decode="async"
                    class="rel pointer:none w:fit h:auto"  
                    alt="${e?.screen?.alt}" 
                    ?src="${e?.screen?.url && v(e?.screen, {
                fm: "webp"
            })}"
                    width="${e?.screen?.dimensions?.width}"
                    height="${e?.screen?.dimensions?.height}"
                />
            
            </section>` : o``
        }
    }
    );
    customElements.define("block-quote", class extends e {
        get props() {
            return {
                content: Object
            }
        }
        render() {
            var e = this.data["content"];
            return e ? o`

            <section class="rel z:2 p-x:40fx p-t:60fx p-b:210fx flex items:start just:between bg:#FAF8F3 c:#0E0E0E d:block@m space-y:55fx@m p-x:10fx@m p-t:116fx@m" >

                <div class="w:325fx w:fit@m flex items:center just:start space-x:20fx">
                    <div class="w:60fx h:60fx radius:100% mask before before:p-t:100% rel">
                        <img 
                            loading="lazy"
                            decode="async"
                            width="${e?.author_image?.dimensions?.width}"
                            height="${e?.author_image?.dimensions?.height}"
                            alt="${e?.author_image?.alt}" 
                            ?src="${e?.author_image?.url && v(e?.author_image, {
                fm: "webp"
            })}"
                            class="abs tl:0 fit object:cover" 
                        />
                    </div>
                    <div class="(&/*):fs:16fx (&/*):fs:17fx@m ">
                        <span>
                            ${e?.author_name && w(e?.author_name, x)}
                        <span>
                        <span>
                            ${e?.author_job && w(e?.author_job, x)}
                        </span>
                    </div>
                </div>

                <div class="w:555fx m-r:112fx fs:24fx lh:1.16 w:fit@m">
                    <div class="wysiwyg (&/*):fs:28fx@m">
                        ${e?.text && w(e?.text, x)?.replace("<p>", "<p>”")?.replace("</p>", "”</p>")}
                    </div>
                </div>
                        
            </section>` : o``
        }
    }
    ),
    ce({
        state: {
            menuOpened: !1
        },
        getters: {
            menuOpened() {
                return this.state.menuOpened
            }
        },
        actions: {
            toggleMenu() {
                this.commit("toggleMenu")
            },
            setMenuOpened(e) {
                this.commit("setMenuOpened", {
                    opened: e
                })
            }
        },
        mutations: {
            setMenuOpened(e, t) {
                return e.menuOpened = t.opened,
                e
            },
            toggleMenu(e) {
                return e.menuOpened = !e.menuOpened,
                e
            }
        }
    });
    var ws = function(e, t, s, i, r, n) {
        return xs(e, t, s, i)(r, n)
    };
    function xs(e, t, s, i) {
        function r(e, t) {
            return e = function(e, t) {
                for (var s, i, r, n, a = e, o = 0; o < 8; o++) {
                    if (r = h(a) - e,
                    Math.abs(r) < t)
                        return a;
                    if (n = f(a),
                    Math.abs(n) < 1e-6)
                        break;
                    a -= r / n
                }
                if ((a = e) < (s = 0))
                    return s;
                if ((i = 1) < a)
                    return i;
                for (; s < i; ) {
                    if (r = h(a),
                    Math.abs(r - e) < t)
                        return a;
                    r < e ? s = a : i = a,
                    a = .5 * (i - s) + s
                }
                return a
            }(e, t),
            ((d * e + c) * e + l) * e
        }
        var n = 3 * e
          , a = 3 * (s - e) - n
          , o = 1 - n - a
          , l = 3 * t
          , c = 3 * (i - t) - l
          , d = 1 - l - c
          , h = function(e) {
            return ((o * e + a) * e + n) * e
        }
          , f = function(e) {
            return (3 * o * e + 2 * a) * e + n
        };
        return function(e, t) {
            return r(e, 1 / (200 * (+t || 400)))
        }
    }
    u.fetchCases(()=>{
        m.fetchPage(window.location.pathname)
    }
    );
    customElements.define("web-application", class extends e {
        get props() {
            return {
                graphqlApiBase: String
            }
        }
        get defaultData() {
            return {
                reelUrl: null,
                showGrid: !1,
                pages: [],
                page: {},
                scroll: 0
            }
        }
        resize() {
            this.$themeSwitchers?.forEach(e=>{
                var {top: t, left: s, width: i, height: r} = ye(e);
                e._top = t,
                e._left = s,
                e._width = i,
                e._height = r
            }
            ),
            this.$footer && (this.$footer._top = ye(this.$footer).top)
        }
        created() {
            this.onApplicationClick = this.onApplicationClick.bind(this),
            this.linksCache = {},
            this._scrollTop = 0,
            s.on("scroll", e=>{
                this._scrollTop = e.animatedScroll
            }
            )
        }
        update() {
            let t = !1;
            var e;
            this.$themeSwitchers?.forEach(e=>{
                e._top - this._scrollTop < 35 && e._top - this._scrollTop > 35 - e._height && (t = !0)
            }
            ),
            t && !this.$header?.classList.contains("is-dark-theme") && this.$header?.classList.add("is-dark-theme"),
            !t && this.$header?.classList.contains("is-dark-theme") && this.$header?.classList.remove("is-dark-theme"),
            this.$footer && ((e = this.$footer._top - this._scrollTop < 35) && !this.$header?.classList.contains("is-footer") && this.$header?.classList.add("is-footer"),
            !e) && this.$header?.classList.contains("is-footer") && this.$header?.classList.remove("is-footer")
        }
        attached() {
            this.style.display = "block",
            this.addEventListener("click", this.onApplicationClick),
            new ResizeObserver(e=>{
                this.resize()
            }
            ).observe(this)
        }
        afterRender() {
            0 < document.querySelectorAll("app-block").length && !this.isReady && (this.isReady = !0,
            requestAnimationFrame(()=>{
                document.documentElement.classList.add("is-ready");
                let e = !1;
                var t = this.querySelector("[player-close-button]");
                function s() {
                    n.fire("reel:hide")
                }
                n.on("reel:show", ()=>{
                    e = !0,
                    this.data.reelUrl = "https://player.vimeo.com/video/736431927?app_id=122963?loop=1&title=0&byline=0&portrait=0&autoplay=1",
                    this.classList[e ? "add" : "remove"]("is-player-opened"),
                    this.$header.closeMenu(),
                    this.$mainReelIframe = this.querySelector("[data-main-reel]"),
                    setTimeout(()=>{
                        try {
                            this.player = new bs(this.$mainReelIframe),
                            this.player.on("ended", s)
                        } catch (e) {}
                    }
                    , 100)
                }
                ),
                n.on("reel:hide", ()=>{
                    e = !1,
                    this.data.reelUrl = null,
                    this.classList[e ? "add" : "remove"]("is-player-opened"),
                    this.player.off("ended", s)
                }
                ),
                t?.addEventListener("click", ()=>{
                    n.fire("reel:hide")
                }
                );
                let i = !1;
                n.on("apply:show", ()=>{
                    i = !0,
                    this.classList[i ? "add" : "remove"]("is-apply-opened")
                }
                ),
                n.on("apply:hide", ()=>{
                    i = !1,
                    this.data.reelUrl = null,
                    this.classList[i ? "add" : "remove"]("is-apply-opened")
                }
                ),
                this.querySelector("[apply-close-button]")?.addEventListener("click", ()=>{
                    n.fire("apply:hide")
                }
                ),
                this.$header = this.querySelector("app-header"),
                this.$footer = this.querySelector("app-footer"),
                this.$themeSwitchers = this.querySelectorAll("[dark-theme]"),
                this.$pageContainer = this.querySelector("[page-container]"),
                n.on("page:loaded", ()=>{
                    this.$themeSwitchers = this.querySelectorAll("[dark-theme]"),
                    this.resize()
                }
                )
            }
            ))
        }
        onApplicationClick(e) {
            let t = e.target;
            for (; t.parentNode && t !== document; ) {
                if ("A" == t.tagName) {
                    this.onLinkDown(e, t);
                    break
                }
                t = t.parentNode
            }
        }
        onLinkDown(t, s) {
            if (!window.event.ctrlKey && !window.event.metaKey) {
                let e = s.getAttribute("href");
                if ((e.includes(window.location.origin) || /^\//.test(e) || !/^http/.test(e)) && !s.hasAttribute("target") && !/mailto/.test(e)) {
                    if (t.preventDefault(),
                    window.location.pathname == e?.replace(/\#.*/, ""))
                        return s = new URL(e,document.baseURI).hash,
                        void this.autoScroll(s);
                    n.fire("router:goto", [new URL(e,document.baseURI).toString()]),
                    setTimeout(()=>{
                        window.scrollTo(0, 0),
                        this.$header?.closeMenu(),
                        n.fire(e !== document.baseURI && "/" !== e ? "logo:show" : "logo:hide")
                    }
                    , 500)
                }
                /\.pdf/.test(e) && (t.preventDefault(),
                window.open(e, "_blank").focus())
            }
        }
        autoScroll(e) {
            var t;
            "#" !== e && "" !== e && (t = e.replace("#", ""),
            document.getElementById(t)) && s.scrollTo(e, {
                duration: 1.6,
                easing: e=>ws(.43, .195, .02, 1, Math.max(0, Math.min(1, e)), 1)
            })
        }
        render() {
            return m.state.loading || this.hasCalledNodeCallback || (this.hasCalledNodeCallback = !0,
            setTimeout(()=>{
                requestAnimationFrame(()=>{
                    window.__node_callback__ && window.__node_callback__()
                }
                )
            }
            , 1e3)),
            m.state.loading && window.__is_server__ ? o`` : o`

          
            <app-router></app-router>
            <app-header></app-header>

            <app-loader></app-loader>
            
            <!-- <gl-scene> -->
                <main page-container>
                    ${m.state.page?.blocks?.map(e=>e.type ? o`
                            <app-block 
                                name="${e.type.replace(/\_/g, "-")}"
                                type="${e.type}"
                                content="${{
                ...e.fields,
                slides: e.slides
            }}"
                                class="block">
                            </app-block>` : o``)}
                </main>
            <!-- </gl-scene> -->

            <app-footer parallax offset="0.1" no-scale class=""></app-footer>
            <!-- <debug-grid></debug-grid> -->

            <div class="
                    | z:10000000000 bg:#000 fixed tl:0 w:fit h:100vhfix bg:#000 
                    | z:1000 flex items:center just:center d:flex   pointer:none
                    | tween:transform,1.1s,easeOutSlow mask transform
                    | (.is-player-opened):pointer:auto (.is-player-opened):shift-x:0 shift-x:-100% 
                    ">

                    <!-- <app-video-player class="w:fit h:fit block" src="<?php echo ($video['url']); ?>"></app-video-player> -->
                
                <div class="abs tl:0 fit  transform tween:transform,1.1s,easeOutSlow (.is-player-opened):shift-x:0 shift-x:100% ">
                    <iframe 
                        aria-label="Main Reel Video"
                        data-main-reel
                        class="abs tl:0 w:fit h:fit" 
                        ?src="${this.data.reelUrl}" 
                        allow="autoplay; fullscreen; picture-in-picture"
                        frameborder="0" >
                    </iframe>
                    <button player-close-button class="abs radius:100% border:solid,1px,#fff w:48fx h:48fx w:35fx@m h:35fx@m z:2 abs tr:24fx bg:none border:none" aria-label="close player">
                        <span class="abs tl:50% bg:#fff h:1.5px w:20fx transform iblock rotate:45deg shift-x:-50% shift-y:-50%"></span>
                        <span class="abs tl:50% bg:#fff h:1.5px w:20fx transform iblock rotate:-45deg shift-x:-50% shift-y:-50%"></span>
                    </button>
                </div>

            </div>


            <div class="
                    | z:10000000000  fixed tl:0 w:fit h:100vhfix bg:#0E0E0E 
                    | z:1000 pointer:none
                    | tween:transform,1.1s,easeOutSlow mask transform
                    | (.is-apply-opened):pointer:auto (.is-apply-opened):shift-x:0 shift-x:-100% 
                    ">
                    
                <div class="flex items:center just:center d:flex    abs tl:0 fit  transform tween:transform,1.1s,easeOutSlow (.is-apply-opened):shift-x:0 shift-x:100% ">
                    
    
                    <button apply-close-button class="abs radius:100% border:solid,1px,#FFFCF1 w:48fx h:48fx w:35fx@m h:35fx@m z:2 abs tr:24fx bg:none border:none" aria-label="close apply overlay">
                        <span class="abs tl:50% bg:#FFFCF1 h:1.5px w:20fx transform iblock rotate:45deg shift-x:-50% shift-y:-50%"></span>
                        <span class="abs tl:50% bg:#FFFCF1 h:1.5px w:20fx transform iblock rotate:-45deg shift-x:-50% shift-y:-50%"></span>
                    </button>
                    
                    <div class="rel align-x:center c:#FFFCF1 ">
                        <p class="fs:24fx m-b:1em fs:16fx@m">
                        Don't be shy!
                        </p>
                        <a href="mailto:biz@rejouice.com" class="__fs:28fx fs:130fx underlined-link-alt fs:35fx@m" >
                            biz@rejouice.com
                        </a>
                    </div>

                </div>

            </div>

            <app-cookie-banner class="o:0 (&.is-loader-ended):tween:opacity,0.6s,1.8s,easeOut (&.is-loader-ended):o:1  space-x:30fx@m fs:13px@m flex just:between items:center z:1000 fixed b:13fx r:20fx l:20fx w:auto bg:#FF5F38 p:15fx,40fx fs:14fx c:#0E0E0E _w:450fx _w:300px@m fs:14px@m l:2.5%@m r:2.5%@m b:10fx@m p:15px,20px@m">
                <p class="__m-b:1em">Our website use cookies. By continuing, we assume your permission to deploy cookies as detailed in our <a href="legal">Privacy Policy</a>.</p>
                <div class="space-x:10px space-x:0@m space-y:4px@m">
                    <button btn-accept class="w:120fx@m bg:none border:solid,1px,#0E0E0E  bg:#0E0E0E c:#FF5F38 radius:6px p:9px,20px">
                        <span class="transform scale-x:-1 iblock"></span>Accept
                    </button>
                    <button btn-decline class="w:120fx@m bg:none  border:solid,1px,currentcolor radius:6px p:9px,20px">
                        Decline
                    </button>
                </div>
            </app-cookie-banner>


            <!-- <div class="d:none@m o:0.2 pointer:none transform z:99999 fixed tl:0 h:100vhfix w:fit flex items:start just:between p-x:40fx space-x:20fx">
                ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(e=>o`<div class="h:fit w:fit bg:red"></div>`)}
            </div>
            <div class="d:none d:flex@m o:0.2 pointer:none transform z:99999 fixed tl:0 h:100vhfix w:fit flex items:start just:between p-x:10fx space-x:4fx">
                ${[0, 1, 2, 3, 4, 5].map(e=>o`<div class="h:fit w:fit bg:red"></div>`)}
            </div>
             -->
            `
        }
    }
    ),
    window.__is_server__ || setTimeout(()=>{
        requestAnimationFrame(()=>{
            document.getElementById("main-overlay").style.display = "none"
        }
        )
    }
    , 100),
    setTimeout(()=>{
        window.dispatchEvent(new Event("resize"))
    }
    , 1e3),
    window.history && (window.history.scrollRestoration = "manual");
    let ys;
    function ks() {
        clearTimeout(ys),
        ys = setTimeout(()=>{
            document.documentElement.style.setProperty("--vhfix", window.innerHeight + "px"),
            document.documentElement.style.setProperty("--vhfixonce", window.innerHeight + "px")
        }
        , 10)
    }
    window.addEventListener("resize", ks),
    ks(),
    document.addEventListener("DOMContentLoaded", e=>{
        ks()
    }
    ),
    window.addEventListener("load", e=>{
        ks()
    }
    ),
    new ResizeObserver(function() {
        ks()
    }
    ).observe(document.body)
});
