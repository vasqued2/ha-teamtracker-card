let $4fcaa3c95ba349ea$export$a4ad2735b021c132 = "v0.14.3";
let $4fcaa3c95ba349ea$export$6df7962ea75d9a39 = "https://a.espncdn.com/i/headshots/golf/players/full/";
let $4fcaa3c95ba349ea$export$7e154a1de2266268 = "https://a.espncdn.com/i/headshots/mma/players/full/";
let $4fcaa3c95ba349ea$export$c8a00e33d990d0fa = "https://a.espncdn.com/i/headshots/rpm/players/full/";
let $4fcaa3c95ba349ea$export$54565cc34e8d24d2 = "https://a.espncdn.com/i/headshots/tennis/players/full/";
let $4fcaa3c95ba349ea$export$607dc1951b62972e = "https://cdn-icons-png.freepik.com/512/9706/9706583.png";


//
//  Define and register the UI Card Editor 
//
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $bd101b5e047d4d04$var$tt = globalThis, $bd101b5e047d4d04$export$b4d10f6001c083c2 = $bd101b5e047d4d04$var$tt.ShadowRoot && (void 0 === $bd101b5e047d4d04$var$tt.ShadyCSS || $bd101b5e047d4d04$var$tt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $bd101b5e047d4d04$var$it = Symbol(), $bd101b5e047d4d04$var$et = new WeakMap;
class $bd101b5e047d4d04$export$505d1e8739bad805 {
    constructor(t, s, i){
        if (this._$cssResult$ = !0, i !== $bd101b5e047d4d04$var$it) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = s;
    }
    get styleSheet() {
        let t = this.i;
        const s = this.t;
        if ($bd101b5e047d4d04$export$b4d10f6001c083c2 && void 0 === t) {
            const i = void 0 !== s && 1 === s.length;
            i && (t = $bd101b5e047d4d04$var$et.get(s)), void 0 === t && ((this.i = t = new CSSStyleSheet).replaceSync(this.cssText), i && $bd101b5e047d4d04$var$et.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $bd101b5e047d4d04$export$8d80f9cac07cdb3 = (t)=>new $bd101b5e047d4d04$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $bd101b5e047d4d04$var$it), $bd101b5e047d4d04$export$dbf350e5966cf602 = (t, ...s)=>{
    const i = 1 === t.length ? t[0] : s.reduce((s, i, e)=>s + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(i) + t[e + 1], t[0]);
    return new $bd101b5e047d4d04$export$505d1e8739bad805(i, t, $bd101b5e047d4d04$var$it);
}, $bd101b5e047d4d04$export$2ca4a66ec4cecb90 = (t, s)=>{
    if ($bd101b5e047d4d04$export$b4d10f6001c083c2) t.adoptedStyleSheets = s.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const i of s){
        const s = document.createElement("style"), e = $bd101b5e047d4d04$var$tt.litNonce;
        void 0 !== e && s.setAttribute("nonce", e), s.textContent = i.cssText, t.appendChild(s);
    }
}, $bd101b5e047d4d04$export$ee69dfd951e24778 = $bd101b5e047d4d04$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let s = "";
        for (const i of t.cssRules)s += i.cssText;
        return $bd101b5e047d4d04$export$8d80f9cac07cdb3(s);
    })(t) : t, { is: $bd101b5e047d4d04$var$at, defineProperty: $bd101b5e047d4d04$var$lt, getOwnPropertyDescriptor: $bd101b5e047d4d04$var$ut, getOwnPropertyNames: $bd101b5e047d4d04$var$dt, getOwnPropertySymbols: $bd101b5e047d4d04$var$ft, getPrototypeOf: $bd101b5e047d4d04$var$pt } = Object, $bd101b5e047d4d04$var$vt = globalThis, $bd101b5e047d4d04$var$mt = $bd101b5e047d4d04$var$vt.trustedTypes, $bd101b5e047d4d04$var$yt = $bd101b5e047d4d04$var$mt ? $bd101b5e047d4d04$var$mt.emptyScript : "", $bd101b5e047d4d04$var$gt = $bd101b5e047d4d04$var$vt.reactiveElementPolyfillSupport, $bd101b5e047d4d04$var$_t = (t, s)=>t, $bd101b5e047d4d04$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $bd101b5e047d4d04$var$yt : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $bd101b5e047d4d04$export$53a6892c50694894 = (t, s)=>!$bd101b5e047d4d04$var$at(t, s), $bd101b5e047d4d04$var$wt = {
    attribute: !0,
    type: String,
    converter: $bd101b5e047d4d04$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $bd101b5e047d4d04$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $bd101b5e047d4d04$var$vt.litPropertyMetadata ??= new WeakMap;
class $bd101b5e047d4d04$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this.o(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this.u && [
            ...this.u.keys()
        ];
    }
    static createProperty(t, s = $bd101b5e047d4d04$var$wt) {
        if (s.state && (s.attribute = !1), this.o(), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), e = this.getPropertyDescriptor(t, i, s);
            void 0 !== e && $bd101b5e047d4d04$var$lt(this.prototype, t, e);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: n } = $bd101b5e047d4d04$var$ut(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get () {
                return e?.call(this);
            },
            set (s) {
                const r = e?.call(this);
                n.call(this, s), this.requestUpdate(t, r, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $bd101b5e047d4d04$var$wt;
    }
    static o() {
        if (this.hasOwnProperty($bd101b5e047d4d04$var$_t("elementProperties"))) return;
        const t = $bd101b5e047d4d04$var$pt(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($bd101b5e047d4d04$var$_t("finalized"))) return;
        if (this.finalized = !0, this.o(), this.hasOwnProperty($bd101b5e047d4d04$var$_t("properties"))) {
            const t = this.properties, s = [
                ...$bd101b5e047d4d04$var$dt(t),
                ...$bd101b5e047d4d04$var$ft(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this.u = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this.p(t, s);
            void 0 !== i && this.u.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(t) {
        const s = [];
        if (Array.isArray(t)) {
            const i = new Set(t.flat(1 / 0).reverse());
            for (const t of i)s.unshift($bd101b5e047d4d04$export$ee69dfd951e24778(t));
        } else void 0 !== t && s.push($bd101b5e047d4d04$export$ee69dfd951e24778(t));
        return s;
    }
    static p(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this.v = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this.m = null, this._();
    }
    _() {
        this.S = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this.$(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this.P ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this.P?.delete(t);
    }
    $() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this.v = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return $bd101b5e047d4d04$export$2ca4a66ec4cecb90(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this.P?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this.P?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    C(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor.p(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const n = (void 0 !== i.converter?.toAttribute ? i.converter : $bd101b5e047d4d04$export$7312b35fbf521afb).toAttribute(s, i.type);
            this.m = t, null == n ? this.removeAttribute(e) : this.setAttribute(e, n), this.m = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i.u.get(t);
        if (void 0 !== e && this.m !== e) {
            const t = i.getPropertyOptions(e), n = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $bd101b5e047d4d04$export$7312b35fbf521afb;
            this.m = e, this[e] = n.fromAttribute(s, t.type), this.m = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? $bd101b5e047d4d04$export$53a6892c50694894)(this[t], s)) return;
            this.T(t, s, i);
        }
        !1 === this.isUpdatePending && (this.S = this.M());
    }
    T(t, s, i) {
        this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this.m !== t && (this.k ??= new Set).add(t);
    }
    async M() {
        this.isUpdatePending = !0;
        try {
            await this.S;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this.v) {
                for (const [t, s] of this.v)this[t] = s;
                this.v = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t)!0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.T(s, this[s], i);
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this.P?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this.A();
        } catch (s) {
            throw t = !1, this.A(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this.P?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    A() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this.S;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this.k &&= this.k.forEach((t)=>this.C(t, this[t])), this.A();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$bd101b5e047d4d04$export$c7c07a37856565d.elementStyles = [], $bd101b5e047d4d04$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $bd101b5e047d4d04$export$c7c07a37856565d[$bd101b5e047d4d04$var$_t("elementProperties")] = new Map, $bd101b5e047d4d04$export$c7c07a37856565d[$bd101b5e047d4d04$var$_t("finalized")] = new Map, $bd101b5e047d4d04$var$gt?.({
    ReactiveElement: $bd101b5e047d4d04$export$c7c07a37856565d
}), ($bd101b5e047d4d04$var$vt.reactiveElementVersions ??= []).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $bd101b5e047d4d04$var$Pt = globalThis, $bd101b5e047d4d04$var$Ct = $bd101b5e047d4d04$var$Pt.trustedTypes, $bd101b5e047d4d04$var$Tt = $bd101b5e047d4d04$var$Ct ? $bd101b5e047d4d04$var$Ct.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $bd101b5e047d4d04$var$xt = "$lit$", $bd101b5e047d4d04$var$Mt = `lit$${Math.random().toFixed(9).slice(2)}$`, $bd101b5e047d4d04$var$kt = "?" + $bd101b5e047d4d04$var$Mt, $bd101b5e047d4d04$var$At = `<${$bd101b5e047d4d04$var$kt}>`, $bd101b5e047d4d04$var$Et = document, $bd101b5e047d4d04$var$ys = ()=>$bd101b5e047d4d04$var$Et.createComment(""), $bd101b5e047d4d04$var$ms = (t)=>null === t || "object" != typeof t && "function" != typeof t, $bd101b5e047d4d04$var$Ot = Array.isArray, $bd101b5e047d4d04$var$Rt = (t)=>$bd101b5e047d4d04$var$Ot(t) || "function" == typeof t?.[Symbol.iterator], $bd101b5e047d4d04$var$zt = "[ 	\n\f\r]", $bd101b5e047d4d04$var$Vt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $bd101b5e047d4d04$var$Lt = /-->/g, $bd101b5e047d4d04$var$It = />/g, $bd101b5e047d4d04$var$jt = RegExp(`>|${$bd101b5e047d4d04$var$zt}(?:([^\\s"'>=/]+)(${$bd101b5e047d4d04$var$zt}*=${$bd101b5e047d4d04$var$zt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $bd101b5e047d4d04$var$Dt = /'/g, $bd101b5e047d4d04$var$Ht = /"/g, $bd101b5e047d4d04$var$Bt = /^(?:script|style|textarea|title)$/i, $bd101b5e047d4d04$var$Wt = (t)=>(s, ...i)=>({
            _$litType$: t,
            strings: s,
            values: i
        }), $bd101b5e047d4d04$export$c0bb0b647f701bb5 = $bd101b5e047d4d04$var$Wt(1), $bd101b5e047d4d04$export$7ed1367e7fa1ad68 = $bd101b5e047d4d04$var$Wt(2), $bd101b5e047d4d04$export$47d5b44d225be5b4 = $bd101b5e047d4d04$var$Wt(3), $bd101b5e047d4d04$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $bd101b5e047d4d04$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $bd101b5e047d4d04$var$Kt = new WeakMap, $bd101b5e047d4d04$var$Qt = $bd101b5e047d4d04$var$Et.createTreeWalker($bd101b5e047d4d04$var$Et, 129);
function $bd101b5e047d4d04$var$Xt(t, s) {
    if (!$bd101b5e047d4d04$var$Ot(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $bd101b5e047d4d04$var$Tt ? $bd101b5e047d4d04$var$Tt.createHTML(s) : s;
}
const $bd101b5e047d4d04$var$Yt = (t, s)=>{
    const i = t.length - 1, e = [];
    let n, r = 2 === s ? "<svg>" : 3 === s ? "<math>" : "", o = $bd101b5e047d4d04$var$Vt;
    for(let s = 0; s < i; s++){
        const i = t[s];
        let h, c, l = -1, a = 0;
        for(; a < i.length && (o.lastIndex = a, c = o.exec(i), null !== c);)a = o.lastIndex, o === $bd101b5e047d4d04$var$Vt ? "!--" === c[1] ? o = $bd101b5e047d4d04$var$Lt : void 0 !== c[1] ? o = $bd101b5e047d4d04$var$It : void 0 !== c[2] ? ($bd101b5e047d4d04$var$Bt.test(c[2]) && (n = RegExp("</" + c[2], "g")), o = $bd101b5e047d4d04$var$jt) : void 0 !== c[3] && (o = $bd101b5e047d4d04$var$jt) : o === $bd101b5e047d4d04$var$jt ? ">" === c[0] ? (o = n ?? $bd101b5e047d4d04$var$Vt, l = -1) : void 0 === c[1] ? l = -2 : (l = o.lastIndex - c[2].length, h = c[1], o = void 0 === c[3] ? $bd101b5e047d4d04$var$jt : '"' === c[3] ? $bd101b5e047d4d04$var$Ht : $bd101b5e047d4d04$var$Dt) : o === $bd101b5e047d4d04$var$Ht || o === $bd101b5e047d4d04$var$Dt ? o = $bd101b5e047d4d04$var$jt : o === $bd101b5e047d4d04$var$Lt || o === $bd101b5e047d4d04$var$It ? o = $bd101b5e047d4d04$var$Vt : (o = $bd101b5e047d4d04$var$jt, n = void 0);
        const u = o === $bd101b5e047d4d04$var$jt && t[s + 1].startsWith("/>") ? " " : "";
        r += o === $bd101b5e047d4d04$var$Vt ? i + $bd101b5e047d4d04$var$At : l >= 0 ? (e.push(h), i.slice(0, l) + $bd101b5e047d4d04$var$xt + i.slice(l) + $bd101b5e047d4d04$var$Mt + u) : i + $bd101b5e047d4d04$var$Mt + (-2 === l ? s : u);
    }
    return [
        $bd101b5e047d4d04$var$Xt(t, r + (t[i] || "<?>") + (2 === s ? "</svg>" : 3 === s ? "</math>" : "")),
        e
    ];
};
class $bd101b5e047d4d04$var$ts {
    constructor({ strings: t, _$litType$: s }, i){
        let e;
        this.parts = [];
        let n = 0, r = 0;
        const o = t.length - 1, h = this.parts, [c, l] = $bd101b5e047d4d04$var$Yt(t, s);
        if (this.el = $bd101b5e047d4d04$var$ts.createElement(c, i), $bd101b5e047d4d04$var$Qt.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (e = $bd101b5e047d4d04$var$Qt.nextNode()) && h.length < o;){
            if (1 === e.nodeType) {
                if (e.hasAttributes()) for (const t of e.getAttributeNames())if (t.endsWith($bd101b5e047d4d04$var$xt)) {
                    const s = l[r++], i = e.getAttribute(t).split($bd101b5e047d4d04$var$Mt), o = /([.?@])?(.*)/.exec(s);
                    h.push({
                        type: 1,
                        index: n,
                        name: o[2],
                        strings: i,
                        ctor: "." === o[1] ? $bd101b5e047d4d04$var$os : "?" === o[1] ? $bd101b5e047d4d04$var$rs : "@" === o[1] ? $bd101b5e047d4d04$var$ns : $bd101b5e047d4d04$var$hs
                    }), e.removeAttribute(t);
                } else t.startsWith($bd101b5e047d4d04$var$Mt) && (h.push({
                    type: 6,
                    index: n
                }), e.removeAttribute(t));
                if ($bd101b5e047d4d04$var$Bt.test(e.tagName)) {
                    const t = e.textContent.split($bd101b5e047d4d04$var$Mt), s = t.length - 1;
                    if (s > 0) {
                        e.textContent = $bd101b5e047d4d04$var$Ct ? $bd101b5e047d4d04$var$Ct.emptyScript : "";
                        for(let i = 0; i < s; i++)e.append(t[i], $bd101b5e047d4d04$var$ys()), $bd101b5e047d4d04$var$Qt.nextNode(), h.push({
                            type: 2,
                            index: ++n
                        });
                        e.append(t[s], $bd101b5e047d4d04$var$ys());
                    }
                }
            } else if (8 === e.nodeType) {
                if (e.data === $bd101b5e047d4d04$var$kt) h.push({
                    type: 2,
                    index: n
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = e.data.indexOf($bd101b5e047d4d04$var$Mt, t + 1));)h.push({
                        type: 7,
                        index: n
                    }), t += $bd101b5e047d4d04$var$Mt.length - 1;
                }
            }
            n++;
        }
    }
    static createElement(t, s) {
        const i = $bd101b5e047d4d04$var$Et.createElement("template");
        return i.innerHTML = t, i;
    }
}
function $bd101b5e047d4d04$var$ss(t, s, i = t, e) {
    if (s === $bd101b5e047d4d04$export$9c068ae9cc5db4e8) return s;
    let n = void 0 !== e ? i.U?.[e] : i.N;
    const r = $bd101b5e047d4d04$var$ms(s) ? void 0 : s._$litDirective$;
    return n?.constructor !== r && (n?._$AO?.(!1), void 0 === r ? n = void 0 : (n = new r(t), n._$AT(t, i, e)), void 0 !== e ? (i.U ??= [])[e] = n : i.N = n), void 0 !== n && (s = $bd101b5e047d4d04$var$ss(t, n._$AS(t, s.values), n, e)), s;
}
class $bd101b5e047d4d04$var$is {
    constructor(t, s){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = s;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    O(t) {
        const { el: { content: s }, parts: i } = this._$AD, e = (t?.creationScope ?? $bd101b5e047d4d04$var$Et).importNode(s, !0);
        $bd101b5e047d4d04$var$Qt.currentNode = e;
        let n = $bd101b5e047d4d04$var$Qt.nextNode(), r = 0, o = 0, h = i[0];
        for(; void 0 !== h;){
            if (r === h.index) {
                let s;
                2 === h.type ? s = new $bd101b5e047d4d04$var$ws(n, n.nextSibling, this, t) : 1 === h.type ? s = new h.ctor(n, h.name, h.strings, this, t) : 6 === h.type && (s = new $bd101b5e047d4d04$var$cs(n, this, t)), this._$AV.push(s), h = i[++o];
            }
            r !== h?.index && (n = $bd101b5e047d4d04$var$Qt.nextNode(), r++);
        }
        return $bd101b5e047d4d04$var$Qt.currentNode = $bd101b5e047d4d04$var$Et, e;
    }
    R(t) {
        let s = 0;
        for (const i of this._$AV)void 0 !== i && (void 0 !== i.strings ? (i._$AI(t, i, s), s += i.strings.length - 2) : i._$AI(t[s])), s++;
    }
}
let $bd101b5e047d4d04$var$ws = class t {
    get _$AU() {
        return this._$AM?._$AU ?? this.V;
    }
    constructor(t, s, i, e){
        this.type = 2, this._$AH = $bd101b5e047d4d04$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = s, this._$AM = i, this.options = e, this.V = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const s = this._$AM;
        return void 0 !== s && 11 === t?.nodeType && (t = s.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, s = this) {
        t = $bd101b5e047d4d04$var$ss(this, t, s), $bd101b5e047d4d04$var$ms(t) ? t === $bd101b5e047d4d04$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $bd101b5e047d4d04$export$45b790e32b2810ee && this._$AR(), this._$AH = $bd101b5e047d4d04$export$45b790e32b2810ee) : t !== this._$AH && t !== $bd101b5e047d4d04$export$9c068ae9cc5db4e8 && this.L(t) : void 0 !== t._$litType$ ? this.I(t) : void 0 !== t.nodeType ? this.j(t) : $bd101b5e047d4d04$var$Rt(t) ? this.D(t) : this.L(t);
    }
    H(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    j(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.H(t));
    }
    L(t) {
        this._$AH !== $bd101b5e047d4d04$export$45b790e32b2810ee && $bd101b5e047d4d04$var$ms(this._$AH) ? this._$AA.nextSibling.data = t : this.j($bd101b5e047d4d04$var$Et.createTextNode(t)), this._$AH = t;
    }
    I(t) {
        const { values: s, _$litType$: i } = t, e = "number" == typeof i ? this._$AC(t) : (void 0 === i.el && (i.el = $bd101b5e047d4d04$var$ts.createElement($bd101b5e047d4d04$var$Xt(i.h, i.h[0]), this.options)), i);
        if (this._$AH?._$AD === e) this._$AH.R(s);
        else {
            const t = new $bd101b5e047d4d04$var$is(e, this), i = t.O(this.options);
            t.R(s), this.j(i), this._$AH = t;
        }
    }
    _$AC(t) {
        let s = $bd101b5e047d4d04$var$Kt.get(t.strings);
        return void 0 === s && $bd101b5e047d4d04$var$Kt.set(t.strings, s = new $bd101b5e047d4d04$var$ts(t)), s;
    }
    D(s) {
        $bd101b5e047d4d04$var$Ot(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let e, n = 0;
        for (const r of s)n === i.length ? i.push(e = new t(this.H($bd101b5e047d4d04$var$ys()), this.H($bd101b5e047d4d04$var$ys()), this, this.options)) : e = i[n], e._$AI(r), n++;
        n < i.length && (this._$AR(e && e._$AB.nextSibling, n), i.length = n);
    }
    _$AR(t = this._$AA.nextSibling, s) {
        for(this._$AP?.(!1, !0, s); t && t !== this._$AB;){
            const s = t.nextSibling;
            t.remove(), t = s;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this.V = t, this._$AP?.(t));
    }
};
class $bd101b5e047d4d04$var$hs {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, s, i, e, n){
        this.type = 1, this._$AH = $bd101b5e047d4d04$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = s, this._$AM = e, this.options = n, i.length > 2 || "" !== i[0] || "" !== i[1] ? (this._$AH = Array(i.length - 1).fill(new String), this.strings = i) : this._$AH = $bd101b5e047d4d04$export$45b790e32b2810ee;
    }
    _$AI(t, s = this, i, e) {
        const n = this.strings;
        let r = !1;
        if (void 0 === n) t = $bd101b5e047d4d04$var$ss(this, t, s, 0), r = !$bd101b5e047d4d04$var$ms(t) || t !== this._$AH && t !== $bd101b5e047d4d04$export$9c068ae9cc5db4e8, r && (this._$AH = t);
        else {
            const e = t;
            let o, h;
            for(t = n[0], o = 0; o < n.length - 1; o++)h = $bd101b5e047d4d04$var$ss(this, e[i + o], s, o), h === $bd101b5e047d4d04$export$9c068ae9cc5db4e8 && (h = this._$AH[o]), r ||= !$bd101b5e047d4d04$var$ms(h) || h !== this._$AH[o], h === $bd101b5e047d4d04$export$45b790e32b2810ee ? t = $bd101b5e047d4d04$export$45b790e32b2810ee : t !== $bd101b5e047d4d04$export$45b790e32b2810ee && (t += (h ?? "") + n[o + 1]), this._$AH[o] = h;
        }
        r && !e && this.B(t);
    }
    B(t) {
        t === $bd101b5e047d4d04$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $bd101b5e047d4d04$var$os extends $bd101b5e047d4d04$var$hs {
    constructor(){
        super(...arguments), this.type = 3;
    }
    B(t) {
        this.element[this.name] = t === $bd101b5e047d4d04$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $bd101b5e047d4d04$var$rs extends $bd101b5e047d4d04$var$hs {
    constructor(){
        super(...arguments), this.type = 4;
    }
    B(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $bd101b5e047d4d04$export$45b790e32b2810ee);
    }
}
class $bd101b5e047d4d04$var$ns extends $bd101b5e047d4d04$var$hs {
    constructor(t, s, i, e, n){
        super(t, s, i, e, n), this.type = 5;
    }
    _$AI(t, s = this) {
        if ((t = $bd101b5e047d4d04$var$ss(this, t, s, 0) ?? $bd101b5e047d4d04$export$45b790e32b2810ee) === $bd101b5e047d4d04$export$9c068ae9cc5db4e8) return;
        const i = this._$AH, e = t === $bd101b5e047d4d04$export$45b790e32b2810ee && i !== $bd101b5e047d4d04$export$45b790e32b2810ee || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, n = t !== $bd101b5e047d4d04$export$45b790e32b2810ee && (i === $bd101b5e047d4d04$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, i), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $bd101b5e047d4d04$var$cs {
    constructor(t, s, i){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = s, this.options = i;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $bd101b5e047d4d04$var$ss(this, t);
    }
}
const $bd101b5e047d4d04$export$8613d1ca9052b22e = {
    W: $bd101b5e047d4d04$var$xt,
    q: $bd101b5e047d4d04$var$Mt,
    J: $bd101b5e047d4d04$var$kt,
    Z: 1,
    F: $bd101b5e047d4d04$var$Yt,
    G: $bd101b5e047d4d04$var$is,
    K: $bd101b5e047d4d04$var$Rt,
    X: $bd101b5e047d4d04$var$ss,
    Y: $bd101b5e047d4d04$var$ws,
    tt: $bd101b5e047d4d04$var$hs,
    st: $bd101b5e047d4d04$var$rs,
    it: $bd101b5e047d4d04$var$ns,
    et: $bd101b5e047d4d04$var$os,
    ht: $bd101b5e047d4d04$var$cs
}, $bd101b5e047d4d04$var$ls = $bd101b5e047d4d04$var$Pt.litHtmlPolyfillSupport;
$bd101b5e047d4d04$var$ls?.($bd101b5e047d4d04$var$ts, $bd101b5e047d4d04$var$ws), ($bd101b5e047d4d04$var$Pt.litHtmlVersions ??= []).push("3.2.0");
const $bd101b5e047d4d04$export$b3890eb0ae9dca99 = (t, s, i)=>{
    const e = i?.renderBefore ?? s;
    let n = e._$litPart$;
    if (void 0 === n) {
        const t = i?.renderBefore ?? null;
        e._$litPart$ = n = new $bd101b5e047d4d04$var$ws(s.insertBefore($bd101b5e047d4d04$var$ys(), t), t, void 0, i ?? {});
    }
    return n._$AI(t), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $bd101b5e047d4d04$export$3f2f9f5909897157 extends $bd101b5e047d4d04$export$c7c07a37856565d {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this.ot = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const s = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this.ot = $bd101b5e047d4d04$export$b3890eb0ae9dca99(s, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this.ot?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this.ot?.setConnected(!1);
    }
    render() {
        return $bd101b5e047d4d04$export$9c068ae9cc5db4e8;
    }
}
$bd101b5e047d4d04$export$3f2f9f5909897157._$litElement$ = !0, $bd101b5e047d4d04$export$3f2f9f5909897157["finalized"] = !0, globalThis.litElementHydrateSupport?.({
    LitElement: $bd101b5e047d4d04$export$3f2f9f5909897157
});
const $bd101b5e047d4d04$var$fs = globalThis.litElementPolyfillSupport;
$bd101b5e047d4d04$var$fs?.({
    LitElement: $bd101b5e047d4d04$export$3f2f9f5909897157
});
const $bd101b5e047d4d04$export$f5c524615a7708d6 = {
    _$AK: (t, s, i)=>{
        t._$AK(s, i);
    },
    _$AL: (t)=>t._$AL
};
(globalThis.litElementVersions ??= []).push("4.1.0");
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $bd101b5e047d4d04$export$6acf61af03e62db = !1, { Y: $bd101b5e047d4d04$var$es } = $bd101b5e047d4d04$export$8613d1ca9052b22e, $bd101b5e047d4d04$export$c3825b437cbdea5c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $bd101b5e047d4d04$export$80c36ae3cab9881d = {
    HTML: 1,
    SVG: 2,
    MATHML: 3
}, $bd101b5e047d4d04$export$6b6d145ec2a44ca9 = (t, s)=>void 0 === s ? void 0 !== t?._$litType$ : t?._$litType$ === s, $bd101b5e047d4d04$export$6a0e8de894d2fcca = (t)=>null != t?._$litType$?.h, $bd101b5e047d4d04$export$2f448fec17d50a3e = (t)=>void 0 !== t?._$litDirective$, $bd101b5e047d4d04$export$f28e31de6a6eaf32 = (t)=>t?._$litDirective$, $bd101b5e047d4d04$export$7f431ad0fff82fd9 = (t)=>void 0 === t.strings, $bd101b5e047d4d04$var$Ut = ()=>document.createComment(""), $bd101b5e047d4d04$export$291b2338ad9b0b30 = (t, s, i)=>{
    const e = t._$AA.parentNode, n = void 0 === s ? t._$AB : s._$AA;
    if (void 0 === i) {
        const s = e.insertBefore($bd101b5e047d4d04$var$Ut(), n), r = e.insertBefore($bd101b5e047d4d04$var$Ut(), n);
        i = new $bd101b5e047d4d04$var$es(s, r, t, t.options);
    } else {
        const s = i._$AB.nextSibling, r = i._$AM, o = r !== t;
        if (o) {
            let s;
            i._$AQ?.(t), i._$AM = t, void 0 !== i._$AP && (s = t._$AU) !== r._$AU && i._$AP(s);
        }
        if (s !== n || o) {
            let t = i._$AA;
            for(; t !== s;){
                const s = t.nextSibling;
                e.insertBefore(t, n), t = s;
            }
        }
    }
    return i;
}, $bd101b5e047d4d04$export$cb8bf9562088e9f4 = (t, s, i = t)=>(t._$AI(s, i), t), $bd101b5e047d4d04$var$As = {}, $bd101b5e047d4d04$export$ea70d9dd5965b1c8 = (t, s = $bd101b5e047d4d04$var$As)=>t._$AH = s, $bd101b5e047d4d04$export$59e9bce518cde500 = (t)=>t._$AH, $bd101b5e047d4d04$export$3133b3144bbba267 = (t)=>{
    t._$AP?.(!1, !0);
    let s = t._$AA;
    const i = t._$AB.nextSibling;
    for(; s !== i;){
        const t = s.nextSibling;
        s.remove(), s = t;
    }
}, $bd101b5e047d4d04$export$7f600b8138c094dc = (t)=>{
    t._$AR();
}, $bd101b5e047d4d04$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $bd101b5e047d4d04$export$99b43ad1ed32e735 = (t)=>(...s)=>({
            _$litDirective$: t,
            values: s
        });
class $bd101b5e047d4d04$export$befdefbdce210f91 {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, s, i) {
        this.nt = t, this._$AM = s, this.rt = i;
    }
    _$AS(t, s) {
        return this.update(t, s);
    }
    update(t, s) {
        return this.render(...s);
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $bd101b5e047d4d04$var$Ls = (t, s)=>{
    const i = t._$AN;
    if (void 0 === i) return !1;
    for (const t of i)t._$AO?.(s, !1), $bd101b5e047d4d04$var$Ls(t, s);
    return !0;
}, $bd101b5e047d4d04$var$zs = (t)=>{
    let s, i;
    do {
        if (void 0 === (s = t._$AM)) break;
        i = s._$AN, i.delete(t), t = s;
    }while (0 === i?.size);
}, $bd101b5e047d4d04$var$js = (t)=>{
    for(let s; s = t._$AM; t = s){
        let i = s._$AN;
        if (void 0 === i) s._$AN = i = new Set;
        else if (i.has(t)) break;
        i.add(t), $bd101b5e047d4d04$var$Ds(s);
    }
};
function $bd101b5e047d4d04$var$Hs(t) {
    void 0 !== this._$AN ? ($bd101b5e047d4d04$var$zs(this), this._$AM = t, $bd101b5e047d4d04$var$js(this)) : this._$AM = t;
}
function $bd101b5e047d4d04$var$Is(t, s = !1, i = 0) {
    const e = this._$AH, n = this._$AN;
    if (void 0 !== n && 0 !== n.size) {
        if (s) {
            if (Array.isArray(e)) for(let t = i; t < e.length; t++)$bd101b5e047d4d04$var$Ls(e[t], !1), $bd101b5e047d4d04$var$zs(e[t]);
            else null != e && ($bd101b5e047d4d04$var$Ls(e, !1), $bd101b5e047d4d04$var$zs(e));
        } else $bd101b5e047d4d04$var$Ls(this, t);
    }
}
const $bd101b5e047d4d04$var$Ds = (t)=>{
    2 == t.type && (t._$AP ??= $bd101b5e047d4d04$var$Is, t._$AQ ??= $bd101b5e047d4d04$var$Hs);
};
class $bd101b5e047d4d04$export$7d025501802325e extends $bd101b5e047d4d04$export$befdefbdce210f91 {
    constructor(){
        super(...arguments), this._$AN = void 0;
    }
    _$AT(t, s, i) {
        super._$AT(t, s, i), $bd101b5e047d4d04$var$js(this), this.isConnected = t._$AU;
    }
    _$AO(t, s = !0) {
        t !== this.isConnected && (this.isConnected = t, t ? this.reconnected?.() : this.disconnected?.()), s && ($bd101b5e047d4d04$var$Ls(this, t), $bd101b5e047d4d04$var$zs(this));
    }
    setValue(t) {
        if ($bd101b5e047d4d04$export$7f431ad0fff82fd9(this.nt)) this.nt._$AI(t, this);
        else {
            const s = [
                ...this.nt._$AH
            ];
            s[this.rt] = t, this.nt._$AI(s, this, 0);
        }
    }
    disconnected() {}
    reconnected() {}
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $bd101b5e047d4d04$var$Ws {
    constructor(t){
        this.ct = t;
    }
    disconnect() {
        this.ct = void 0;
    }
    reconnect(t) {
        this.ct = t;
    }
    deref() {
        return this.ct;
    }
}
class $bd101b5e047d4d04$var$Zs {
    constructor(){
        this.lt = void 0, this.ut = void 0;
    }
    get() {
        return this.lt;
    }
    pause() {
        this.lt ??= new Promise((t)=>this.ut = t);
    }
    resume() {
        this.ut?.(), this.lt = this.ut = void 0;
    }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $bd101b5e047d4d04$export$39a433aa22cdf479 extends $bd101b5e047d4d04$export$7d025501802325e {
    constructor(){
        super(...arguments), this.dt = new $bd101b5e047d4d04$var$Ws(this), this.ft = new $bd101b5e047d4d04$var$Zs;
    }
    render(t, s) {
        return $bd101b5e047d4d04$export$9c068ae9cc5db4e8;
    }
    update(t, [s, i]) {
        if (this.isConnected || this.disconnected(), s === this.vt) return $bd101b5e047d4d04$export$9c068ae9cc5db4e8;
        this.vt = s;
        let e = 0;
        const { dt: n, ft: r } = this;
        return (async (t, s)=>{
            for await (const i of t)if (!1 === await s(i)) return;
        })(s, async (t)=>{
            for(; r.get();)await r.get();
            const o = n.deref();
            if (void 0 !== o) {
                if (o.vt !== s) return !1;
                void 0 !== i && (t = i(t, e)), o.commitValue(t, e), e++;
            }
            return !0;
        }), $bd101b5e047d4d04$export$9c068ae9cc5db4e8;
    }
    commitValue(t, s) {
        this.setValue(t);
    }
    disconnected() {
        this.dt.disconnect(), this.ft.pause();
    }
    reconnected() {
        this.dt.reconnect(this), this.ft.resume();
    }
}
const $bd101b5e047d4d04$export$662eef59ff6bd56a = $bd101b5e047d4d04$export$99b43ad1ed32e735($bd101b5e047d4d04$export$39a433aa22cdf479), $bd101b5e047d4d04$export$eaa89ade56b7c0c1 = $bd101b5e047d4d04$export$99b43ad1ed32e735(/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class extends $bd101b5e047d4d04$export$39a433aa22cdf479 {
    constructor(t){
        if (super(t), 2 !== t.type) throw Error("asyncAppend can only be used in child expressions");
    }
    update(t, s) {
        return this.ot = t, super.update(t, s);
    }
    commitValue(t, s) {
        0 === s && $bd101b5e047d4d04$export$7f600b8138c094dc(this.ot);
        const i = $bd101b5e047d4d04$export$291b2338ad9b0b30(this.ot);
        $bd101b5e047d4d04$export$cb8bf9562088e9f4(i, t);
    }
}), $bd101b5e047d4d04$var$Js = (t)=>$bd101b5e047d4d04$export$6a0e8de894d2fcca(t) ? t._$litType$.h : t.strings, $bd101b5e047d4d04$export$69a3209f1a06c04d = $bd101b5e047d4d04$export$99b43ad1ed32e735(class extends $bd101b5e047d4d04$export$befdefbdce210f91 {
    constructor(t){
        super(t), this.yt = new WeakMap;
    }
    render(t) {
        return [
            t
        ];
    }
    update(t, [s]) {
        const i = $bd101b5e047d4d04$export$6b6d145ec2a44ca9(this.bt) ? $bd101b5e047d4d04$var$Js(this.bt) : null, e = $bd101b5e047d4d04$export$6b6d145ec2a44ca9(s) ? $bd101b5e047d4d04$var$Js(s) : null;
        if (null !== i && (null === e || i !== e)) {
            const s = $bd101b5e047d4d04$export$59e9bce518cde500(t).pop();
            let e = this.yt.get(i);
            if (void 0 === e) {
                const t = document.createDocumentFragment();
                e = $bd101b5e047d4d04$export$b3890eb0ae9dca99($bd101b5e047d4d04$export$45b790e32b2810ee, t), e.setConnected(!1), this.yt.set(i, e);
            }
            $bd101b5e047d4d04$export$ea70d9dd5965b1c8(e, [
                s
            ]), $bd101b5e047d4d04$export$291b2338ad9b0b30(e, void 0, s);
        }
        if (null !== e) {
            if (null === i || i !== e) {
                const s = this.yt.get(e);
                if (void 0 !== s) {
                    const i = $bd101b5e047d4d04$export$59e9bce518cde500(s).pop();
                    $bd101b5e047d4d04$export$7f600b8138c094dc(t), $bd101b5e047d4d04$export$291b2338ad9b0b30(t, void 0, i), $bd101b5e047d4d04$export$ea70d9dd5965b1c8(t, [
                        i
                    ]);
                }
            }
            this.bt = s;
        } else this.bt = void 0;
        return this.render(s);
    }
}), $bd101b5e047d4d04$export$7877a478dd30fd3d = (t, s, i)=>{
    for (const i of s)if (i[0] === t) return (0, i[1])();
    return i?.();
}, $bd101b5e047d4d04$export$56cc687933817664 = $bd101b5e047d4d04$export$99b43ad1ed32e735(/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class extends $bd101b5e047d4d04$export$befdefbdce210f91 {
    constructor(t){
        if (super(t), 1 !== t.type || "class" !== t.name || t.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return " " + Object.keys(t).filter((s)=>t[s]).join(" ") + " ";
    }
    update(t, [s]) {
        if (void 0 === this.gt) {
            this.gt = new Set, void 0 !== t.strings && (this.wt = new Set(t.strings.join(" ").split(/\s/).filter((t)=>"" !== t)));
            for(const t in s)s[t] && !this.wt?.has(t) && this.gt.add(t);
            return this.render(s);
        }
        const i = t.element.classList;
        for (const t of this.gt)t in s || (i.remove(t), this.gt.delete(t));
        for(const t in s){
            const e = !!s[t];
            e === this.gt.has(t) || this.wt?.has(t) || (e ? (i.add(t), this.gt.add(t)) : (i.remove(t), this.gt.delete(t)));
        }
        return $bd101b5e047d4d04$export$9c068ae9cc5db4e8;
    }
}), $bd101b5e047d4d04$var$Xs = {}, $bd101b5e047d4d04$export$864d727b48066337 = $bd101b5e047d4d04$export$99b43ad1ed32e735(class extends $bd101b5e047d4d04$export$befdefbdce210f91 {
    constructor(){
        super(...arguments), this._t = $bd101b5e047d4d04$var$Xs;
    }
    render(t, s) {
        return s();
    }
    update(t, [s, i]) {
        if (Array.isArray(s)) {
            if (Array.isArray(this._t) && this._t.length === s.length && s.every((t, s)=>t === this._t[s])) return $bd101b5e047d4d04$export$9c068ae9cc5db4e8;
        } else if (this._t === s) return $bd101b5e047d4d04$export$9c068ae9cc5db4e8;
        return this._t = Array.isArray(s) ? Array.from(s) : s, this.render(s, i);
    }
}), $bd101b5e047d4d04$export$f68dd208b5df064d = (t)=>t ?? $bd101b5e047d4d04$export$45b790e32b2810ee /**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ ;
function* $bd101b5e047d4d04$export$f7e2c8231c57a8bd(t, s) {
    const i = "function" == typeof s;
    if (void 0 !== t) {
        let e = -1;
        for (const n of t)e > -1 && (yield i ? s(e) : s), e++, yield n;
    }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $bd101b5e047d4d04$export$8dbf9c790527241e = $bd101b5e047d4d04$export$99b43ad1ed32e735(class extends $bd101b5e047d4d04$export$befdefbdce210f91 {
    constructor(){
        super(...arguments), this.key = $bd101b5e047d4d04$export$45b790e32b2810ee;
    }
    render(t, s) {
        return this.key = t, s;
    }
    update(t, [s, i]) {
        return s !== this.key && ($bd101b5e047d4d04$export$ea70d9dd5965b1c8(t), this.key = s), i;
    }
}), $bd101b5e047d4d04$export$28cf49ad70f82d12 = $bd101b5e047d4d04$export$99b43ad1ed32e735(/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class extends $bd101b5e047d4d04$export$befdefbdce210f91 {
    constructor(t){
        if (super(t), 3 !== t.type && 1 !== t.type && 4 !== t.type) throw Error("The `live` directive is not allowed on child or event bindings");
        if (!$bd101b5e047d4d04$export$7f431ad0fff82fd9(t)) throw Error("`live` bindings can only contain a single expression");
    }
    render(t) {
        return t;
    }
    update(t, [s]) {
        if (s === $bd101b5e047d4d04$export$9c068ae9cc5db4e8 || s === $bd101b5e047d4d04$export$45b790e32b2810ee) return s;
        const i = t.element, e = t.name;
        if (3 === t.type) {
            if (s === i[e]) return $bd101b5e047d4d04$export$9c068ae9cc5db4e8;
        } else if (4 === t.type) {
            if (!!s === i.hasAttribute(e)) return $bd101b5e047d4d04$export$9c068ae9cc5db4e8;
        } else if (1 === t.type && i.getAttribute(e) === s + "") return $bd101b5e047d4d04$export$9c068ae9cc5db4e8;
        return $bd101b5e047d4d04$export$ea70d9dd5965b1c8(t), s;
    }
});
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function* $bd101b5e047d4d04$export$871de8747c9eaa88(t, s) {
    if (void 0 !== t) {
        let i = 0;
        for (const e of t)yield s(e, i++);
    }
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function* $bd101b5e047d4d04$export$d02631cccf789723(t, s, i = 1) {
    const e = void 0 === s ? 0 : t;
    s ??= t;
    for(let t = e; i > 0 ? t < s : s < t; t += i)yield t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $bd101b5e047d4d04$export$7d1e3a5e95ceca43 = ()=>new $bd101b5e047d4d04$var$ci;
class $bd101b5e047d4d04$var$ci {
}
const $bd101b5e047d4d04$var$li = new WeakMap, $bd101b5e047d4d04$export$eff4d24c3ff7876e = $bd101b5e047d4d04$export$99b43ad1ed32e735(class extends $bd101b5e047d4d04$export$7d025501802325e {
    render(t) {
        return $bd101b5e047d4d04$export$45b790e32b2810ee;
    }
    update(t, [s]) {
        const i = s !== this.ct;
        return i && void 0 !== this.ct && this.St(void 0), (i || this.$t !== this.Tt) && (this.ct = s, this.xt = t.options?.host, this.St(this.Tt = t.element)), $bd101b5e047d4d04$export$45b790e32b2810ee;
    }
    St(t) {
        if (this.isConnected || (t = void 0), "function" == typeof this.ct) {
            const s = this.xt ?? globalThis;
            let i = $bd101b5e047d4d04$var$li.get(s);
            void 0 === i && (i = new WeakMap, $bd101b5e047d4d04$var$li.set(s, i)), void 0 !== i.get(this.ct) && this.ct.call(this.xt, void 0), i.set(this.ct, t), void 0 !== t && this.ct.call(this.xt, t);
        } else this.ct.value = t;
    }
    get $t() {
        return "function" == typeof this.ct ? $bd101b5e047d4d04$var$li.get(this.xt ?? globalThis)?.get(this.ct) : this.ct?.value;
    }
    disconnected() {
        this.$t === this.Tt && this.St(void 0);
    }
    reconnected() {
        this.St(this.Tt);
    }
}), $bd101b5e047d4d04$var$ui = (t, s, i)=>{
    const e = new Map;
    for(let n = s; n <= i; n++)e.set(t[n], n);
    return e;
}, $bd101b5e047d4d04$export$76d90c956114f2c2 = $bd101b5e047d4d04$export$99b43ad1ed32e735(class extends $bd101b5e047d4d04$export$befdefbdce210f91 {
    constructor(t){
        if (super(t), 2 !== t.type) throw Error("repeat() can only be used in text expressions");
    }
    Et(t, s, i) {
        let e;
        void 0 === i ? i = s : void 0 !== s && (e = s);
        const n = [], r = [];
        let o = 0;
        for (const s of t)n[o] = e ? e(s, o) : o, r[o] = i(s, o), o++;
        return {
            values: r,
            keys: n
        };
    }
    render(t, s, i) {
        return this.Et(t, s, i).values;
    }
    update(t, [s, i, e]) {
        const n = $bd101b5e047d4d04$export$59e9bce518cde500(t), { values: r, keys: o } = this.Et(s, i, e);
        if (!Array.isArray(n)) return this.Ct = o, r;
        const h = this.Ct ??= [], c = [];
        let l, a, u = 0, d = n.length - 1, f = 0, p = r.length - 1;
        for(; u <= d && f <= p;)if (null === n[u]) u++;
        else if (null === n[d]) d--;
        else if (h[u] === o[f]) c[f] = $bd101b5e047d4d04$export$cb8bf9562088e9f4(n[u], r[f]), u++, f++;
        else if (h[d] === o[p]) c[p] = $bd101b5e047d4d04$export$cb8bf9562088e9f4(n[d], r[p]), d--, p--;
        else if (h[u] === o[p]) c[p] = $bd101b5e047d4d04$export$cb8bf9562088e9f4(n[u], r[p]), $bd101b5e047d4d04$export$291b2338ad9b0b30(t, c[p + 1], n[u]), u++, p--;
        else if (h[d] === o[f]) c[f] = $bd101b5e047d4d04$export$cb8bf9562088e9f4(n[d], r[f]), $bd101b5e047d4d04$export$291b2338ad9b0b30(t, n[u], n[d]), d--, f++;
        else if (void 0 === l && (l = $bd101b5e047d4d04$var$ui(o, f, p), a = $bd101b5e047d4d04$var$ui(h, u, d)), l.has(h[u])) {
            if (l.has(h[d])) {
                const s = a.get(o[f]), i = void 0 !== s ? n[s] : null;
                if (null === i) {
                    const s = $bd101b5e047d4d04$export$291b2338ad9b0b30(t, n[u]);
                    $bd101b5e047d4d04$export$cb8bf9562088e9f4(s, r[f]), c[f] = s;
                } else c[f] = $bd101b5e047d4d04$export$cb8bf9562088e9f4(i, r[f]), $bd101b5e047d4d04$export$291b2338ad9b0b30(t, n[u], i), n[s] = null;
                f++;
            } else $bd101b5e047d4d04$export$3133b3144bbba267(n[d]), d--;
        } else $bd101b5e047d4d04$export$3133b3144bbba267(n[u]), u++;
        for(; f <= p;){
            const s = $bd101b5e047d4d04$export$291b2338ad9b0b30(t, c[p + 1]);
            $bd101b5e047d4d04$export$cb8bf9562088e9f4(s, r[f]), c[f++] = s;
        }
        for(; u <= d;){
            const t = n[u++];
            null !== t && $bd101b5e047d4d04$export$3133b3144bbba267(t);
        }
        return this.Ct = o, $bd101b5e047d4d04$export$ea70d9dd5965b1c8(t, c), $bd101b5e047d4d04$export$9c068ae9cc5db4e8;
    }
}), $bd101b5e047d4d04$var$fi = "important", $bd101b5e047d4d04$var$pi = " !" + $bd101b5e047d4d04$var$fi, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a = $bd101b5e047d4d04$export$99b43ad1ed32e735(class extends $bd101b5e047d4d04$export$befdefbdce210f91 {
    constructor(t){
        if (super(t), 1 !== t.type || "style" !== t.name || t.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return Object.keys(t).reduce((s, i)=>{
            const e = t[i];
            return null == e ? s : s + `${i = i.includes("-") ? i : i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${e};`;
        }, "");
    }
    update(t, [s]) {
        const { style: i } = t.element;
        if (void 0 === this.Pt) return this.Pt = new Set(Object.keys(s)), this.render(s);
        for (const t of this.Pt)null == s[t] && (this.Pt.delete(t), t.includes("-") ? i.removeProperty(t) : i[t] = null);
        for(const t in s){
            const e = s[t];
            if (null != e) {
                this.Pt.add(t);
                const s = "string" == typeof e && e.endsWith($bd101b5e047d4d04$var$pi);
                t.includes("-") || s ? i.setProperty(t, s ? e.slice(0, -11) : e, s ? $bd101b5e047d4d04$var$fi : "") : i[t] = e;
            }
        }
        return $bd101b5e047d4d04$export$9c068ae9cc5db4e8;
    }
}), $bd101b5e047d4d04$export$e446d0492332fcd4 = $bd101b5e047d4d04$export$99b43ad1ed32e735(/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class extends $bd101b5e047d4d04$export$befdefbdce210f91 {
    constructor(t){
        if (super(t), 2 !== t.type) throw Error("templateContent can only be used in child bindings");
    }
    render(t) {
        return this.At === t ? $bd101b5e047d4d04$export$9c068ae9cc5db4e8 : (this.At = t, document.importNode(t.content, !0));
    }
});
class $bd101b5e047d4d04$export$3bebd1f0e3943985 extends $bd101b5e047d4d04$export$befdefbdce210f91 {
    constructor(t){
        if (super(t), this.bt = $bd101b5e047d4d04$export$45b790e32b2810ee, 2 !== t.type) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(t) {
        if (t === $bd101b5e047d4d04$export$45b790e32b2810ee || null == t) return this.Mt = void 0, this.bt = t;
        if (t === $bd101b5e047d4d04$export$9c068ae9cc5db4e8) return t;
        if ("string" != typeof t) throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (t === this.bt) return this.Mt;
        this.bt = t;
        const s = [
            t
        ];
        return s.raw = s, this.Mt = {
            _$litType$: this.constructor.resultType,
            strings: s,
            values: []
        };
    }
}
$bd101b5e047d4d04$export$3bebd1f0e3943985.directiveName = "unsafeHTML", $bd101b5e047d4d04$export$3bebd1f0e3943985.resultType = 1;
const $bd101b5e047d4d04$export$b6e69390c23686fb = $bd101b5e047d4d04$export$99b43ad1ed32e735($bd101b5e047d4d04$export$3bebd1f0e3943985);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $bd101b5e047d4d04$var$gi extends $bd101b5e047d4d04$export$3bebd1f0e3943985 {
}
$bd101b5e047d4d04$var$gi.directiveName = "unsafeSVG", $bd101b5e047d4d04$var$gi.resultType = 2;
const $bd101b5e047d4d04$export$1cb98903879b8bf5 = $bd101b5e047d4d04$export$99b43ad1ed32e735($bd101b5e047d4d04$var$gi), $bd101b5e047d4d04$var$_i = (t)=>!$bd101b5e047d4d04$export$c3825b437cbdea5c(t) && "function" == typeof t.then, $bd101b5e047d4d04$var$Si = 1073741823;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $bd101b5e047d4d04$export$51c6edf8ee19b71a extends $bd101b5e047d4d04$export$7d025501802325e {
    constructor(){
        super(...arguments), this.kt = $bd101b5e047d4d04$var$Si, this.Ut = [], this.dt = new $bd101b5e047d4d04$var$Ws(this), this.ft = new $bd101b5e047d4d04$var$Zs;
    }
    render(...t) {
        return t.find((t)=>!$bd101b5e047d4d04$var$_i(t)) ?? $bd101b5e047d4d04$export$9c068ae9cc5db4e8;
    }
    update(t, s) {
        const i = this.Ut;
        let e = i.length;
        this.Ut = s;
        const n = this.dt, r = this.ft;
        this.isConnected || this.disconnected();
        for(let t = 0; t < s.length && !(t > this.kt); t++){
            const o = s[t];
            if (!$bd101b5e047d4d04$var$_i(o)) return this.kt = t, o;
            t < e && o === i[t] || (this.kt = $bd101b5e047d4d04$var$Si, e = 0, Promise.resolve(o).then(async (t)=>{
                for(; r.get();)await r.get();
                const s = n.deref();
                if (void 0 !== s) {
                    const i = s.Ut.indexOf(o);
                    i > -1 && i < s.kt && (s.kt = i, s.setValue(t));
                }
            }));
        }
        return $bd101b5e047d4d04$export$9c068ae9cc5db4e8;
    }
    disconnected() {
        this.dt.disconnect(), this.ft.pause();
    }
    reconnected() {
        this.dt.reconnect(this), this.ft.resume();
    }
}
const $bd101b5e047d4d04$export$a40009bd2c363351 = $bd101b5e047d4d04$export$99b43ad1ed32e735($bd101b5e047d4d04$export$51c6edf8ee19b71a);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $bd101b5e047d4d04$export$a55877ca9db47377(t, s, i) {
    return t ? s(t) : i?.(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $bd101b5e047d4d04$var$Ei = Symbol.for(""), $bd101b5e047d4d04$var$Ci = (t)=>{
    if (t?.r === $bd101b5e047d4d04$var$Ei) return t?._$litStatic$;
}, $bd101b5e047d4d04$export$4b395f4b8c9b548e = (t)=>({
        _$litStatic$: t,
        r: $bd101b5e047d4d04$var$Ei
    }), $bd101b5e047d4d04$export$c8ec6e1ec9fefcb0 = (t, ...s)=>({
        _$litStatic$: s.reduce((s, i, e)=>s + ((t)=>{
                if (void 0 !== t._$litStatic$) return t._$litStatic$;
                throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`);
            })(i) + t[e + 1], t[0]),
        r: $bd101b5e047d4d04$var$Ei
    }), $bd101b5e047d4d04$var$Mi = new Map, $bd101b5e047d4d04$export$878791788f808fc0 = (t)=>(s, ...i)=>{
        const e = i.length;
        let n, r;
        const o = [], h = [];
        let c, l = 0, a = !1;
        for(; l < e;){
            for(c = s[l]; l < e && void 0 !== (r = i[l], n = $bd101b5e047d4d04$var$Ci(r));)c += n + s[++l], a = !0;
            l !== e && h.push(r), o.push(c), l++;
        }
        if (l === e && o.push(s[e]), a) {
            const t = o.join("$$lit$$");
            void 0 === (s = $bd101b5e047d4d04$var$Mi.get(t)) && (o.raw = o, $bd101b5e047d4d04$var$Mi.set(t, s = o)), i = h;
        }
        return t(s, ...i);
    }, $bd101b5e047d4d04$export$a633fc168f84f25d = $bd101b5e047d4d04$export$878791788f808fc0($bd101b5e047d4d04$export$c0bb0b647f701bb5), $bd101b5e047d4d04$export$bc0275dbd7416569 = $bd101b5e047d4d04$export$878791788f808fc0($bd101b5e047d4d04$export$7ed1367e7fa1ad68);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ window.litDisableBundleWarning || console.warn("Lit has been loaded from a bundle that combines all core features into a single file. To reduce transfer size and parsing cost, consider using the `lit` npm package directly in your project.");


class $de5768471e29ae80$export$c622f67f045f310d extends (0, $bd101b5e047d4d04$export$3f2f9f5909897157) {
    static get properties() {
        return {
            _config: {
                type: Object
            },
            currentPage: {
                type: String
            },
            entities: {
                type: Array
            },
            hass: {
                type: Object
            },
            _entity: {
                type: String
            }
        };
    }
    constructor(){
        super();
        this.currentPage = "card";
        this._entity = "";
        this.entities = [];
        this._formValueChanged = this._formValueChanged.bind(this);
    }
    setConfig(config) {
        if (!config) throw new Error("Invalid configuration");
        this._config = config;
        this._entity = config.entity || "";
    }
    get config() {
        return this._config;
    }
    updated(changedProperties) {
        if (changedProperties.has("hass")) this.fetchEntities();
        if (changedProperties.has("_config") && this._config && this._config.entity) this._entity = this._config.entity;
    }
    fetchEntities() {
        if (this.hass) this.entities = Object.keys(this.hass.states).filter((e)=>e.startsWith("sensor.") && this.hass.states[e].attributes.hasOwnProperty("sport")).sort((a, b)=>a.localeCompare(b));
    }
    configChanged(newConfig) {
        const event = new Event("config-changed", {
            bubbles: true,
            composed: true
        });
        event.detail = {
            config: newConfig
        };
        this.dispatchEvent(event);
    }
    _EntityChanged(event, key) {
        if (!this._config) return;
        const newConfig = {
            ...this._config
        };
        if (key === "entity") {
            newConfig.entity = event.target.value;
            this._entity = event.target.value;
        }
        this.configChanged(newConfig);
        this.requestUpdate();
    }
    _valueChanged(event, key) {
        if (!this._config) return;
        let newConfig = {
            ...this._config
        };
        if (key.includes(".")) {
            const parts = key.split(".");
            let currentLevel = newConfig;
            for(let i = 0; i < parts.length - 1; i++){
                const part = parts[i];
                currentLevel[part] = {
                    ...currentLevel[part]
                };
                currentLevel = currentLevel[part];
            }
            const finalKey = parts[parts.length - 1];
            if (event.target.checked !== undefined) currentLevel[finalKey] = event.target.checked;
            else currentLevel[finalKey] = event.target.value;
        } else if (event.target.checked !== undefined) newConfig[key] = event.target.checked;
        else newConfig[key] = event.target.value;
        this.configChanged(newConfig);
        this.requestUpdate();
    }
    _formValueChanged(event) {
        if (event.target.tagName.toLowerCase() === "ha-form") {
            const newConfig = event.detail.value;
            this.configChanged(newConfig);
            this.requestUpdate();
        }
    }
    // This function is called when the input element of the editor loses focus
    entityChanged(ev) {
        // We make a copy of the current config so we don't accidentally overwrite anything too early
        const _config = Object.assign({}, this._config);
        // Then we update the entity value with what we just got from the input field
        _config.entity = ev.target.value;
        // And finally write back the updated configuration all at once
        this._config = _config;
        // A config-changed event will tell lovelace we have made changed to the configuration
        // this make sure the changes are saved correctly later and will update the preview
        const event = new CustomEvent("config-changed", {
            detail: {
                config: _config
            },
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }
    render() {
        if (!this.hass || !this._config) return (0, $bd101b5e047d4d04$export$c0bb0b647f701bb5)``;
        return (0, $bd101b5e047d4d04$export$c0bb0b647f701bb5)`
        <style>
        .switch-label {
            padding-left: 14px;
        }
        .switch-container {
            margin-top: 12px;
            margin-left: 15px;

        }
        .textfield-container {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
            gap: 0px;
        }
        .ha-textfield {
            flex-basis: 50%;
            flex-grow: 1;
        }
        .indented-container {
            margin-left: 55px;
        }
        h4 {
            margin-bottom: 0px;
        }
        </style>
        <div>
            <h4>Teamtracker Sensor:</h4>
            <div class="textfield-container">
                <ha-select
                    naturalMenuWidth
                    fixedMenuPosition
                    label="Entity"
                    .configValue=${"entity"}
                    .value=${this._entity}
                    @change=${(e)=>this._EntityChanged(e, "entity")}
                    @closed=${(ev)=>ev.stopPropagation()}
                    >
                    ${this.entities.map((entity)=>{
            return (0, $bd101b5e047d4d04$export$c0bb0b647f701bb5)`<ha-list-item .value=${entity}>${entity}</ha-list-item>`;
        })}
                </ha-select>
            </div>
            <hr>
            <h4>Settings:</h4>
            <ha-select
                naturalMenuWidth
                fixedMenuPosition
                .configValue=${"home_side"}
                .value=${this._config.home_side}
                @change=${(e)=>this._valueChanged(e, "home_side")}
                @closed=${(ev)=>ev.stopPropagation()}
                >
                <ha-list-item .value=${""}>Team on Left</ha-list-item>
                <ha-list-item .value=${"left"}>Home on Left</ha-list-item>
                <ha-list-item .value=${"right"}>Home on Right</ha-list-item>
            </ha-select>
            <div class="switch-container">
                <ha-switch
                    @change="${(e)=>this._valueChanged(e, "show_league")}"
                    .checked="${this._config.show_league === true}"
                    >
                </ha-switch>
                <label class="switch-label">
                    Show League
                </label>
            </div>
            <div class="switch-container">
                <ha-switch
                    @change="${(e)=>this._valueChanged(e, "show_rank")}"
                    .checked="${this._config.show_rank !== false}"
                    >
                </ha-switch>
                <label class="switch-label">
                    Show Rank
                </label>
            </div>
            <div class="switch-container">    
                <ha-switch
                    @change="${(e)=>this._valueChanged(e, "show_timeouts")}"
                    .checked="${this._config.show_timeouts !== false}"
                    >
                </ha-switch>
                <label class="switch-label">
                    Show Timeouts
                </label>
            </div>
            <div class="switch-container">    
                <ha-switch
                    @change="${(e)=>this._valueChanged(e, "outline")}"
                    .checked="${this._config.outline === true}"
                    >
                </ha-switch>
                <label class="switch-label">
                    Show Outline
                </label>
            </div>
            <div class="indented-container">
                <ha-textfield
                    label="Outline Color"
                    .value="${this._config.outline_color || "lightgrey"}"
                    @change="${(e)=>this._valueChanged(e, "outline_color")}"
                    >
                </ha-textfield>
            </div>
            <hr>
            <h4>Overrides:</h4>
            <ha-textfield
                label="Title"
                .value="${this._config.card_title || ""}"
                @change="${(e)=>this._valueChanged(e, "card_title")}"
                >
            </ha-textfield>
            </br>
            <ha-textfield
                label="Team URL"
                .value="${this._config.team_url || ""}"
                @change="${(e)=>this._valueChanged(e, "team_url")}"
                >
            </ha-textfield>
            </br>
            <ha-textfield
                label="Opponent URL"
                .value="${this._config.opponent_url || ""}"
                @change="${(e)=>this._valueChanged(e, "opponent_url")}"
                >
            </ha-textfield>
            </br>
            <ha-textfield
                label="Bottom URL"
                .value="${this._config.bottom_url || ""}"
                @change="${(e)=>this._valueChanged(e, "bottom_url")}"
                >
            </ha-textfield>
            <hr>
            <div class="switch-container">    
                <ha-switch
                    @change="${(e)=>this._valueChanged(e, "debug")}"
                    .checked="${this._config.debug === true}"
                    >
                </ha-switch>
                <label class="switch-label">
                    Show Debug Info
                </label>
            </div>
        </div>
        `;
    }
}



const $9bf8d9821f43b5a3$export$84584c2a98eb6753 = {
    "common": {
        "api_error": "API Error",
        "no_upcoming_games": "No upcoming games through %s",
        "finalTerm": "%s - Final",
        "byeTerm": "BYE",
        "tourney2": "Final",
        "tourney4": "Semifinals",
        "tourney8": "Quarterfinals",
        "tourney16": "Round of 16",
        "tourney32": "Round of 32",
        "tourney64": "Round of 64",
        "tourney128": "Early Rounds",
        "tourney256": "Early Rounds",
        "today": "Today",
        "tomorrow": "Tomorrow"
    },
    "australian-football": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "First Pitch",
        "overUnder": "O/U: %s",
        "gameStat1": "Balls %s",
        "gameStat2": "Strikes %s",
        "gameStat3": "%s Outs",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Tipoff",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "Kickoff",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "Round Starts",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Shots (Thru)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "Puck Drop",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Shots on Goal",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Laps",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "Kickoff",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Shots (On Target)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "First Serve",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "First Serve",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s Score",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $738479ced03534bd$export$25dc44e90bc68e13 = {
    "common": {
        "api_error": "API Error",
        "no_upcoming_games": "No upcoming games through %s",
        "finalTerm": "%s - Final",
        "byeTerm": "BYE",
        "tourney2": "Final",
        "tourney4": "Semifinals",
        "tourney8": "Quarterfinals",
        "tourney16": "Round of 16",
        "tourney32": "Round of 32",
        "tourney64": "Round of 64",
        "tourney128": "Early Rounds",
        "tourney256": "Early Rounds",
        "today": "Today",
        "tomorrow": "Tomorrow"
    },
    "australian-football": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "First Pitch",
        "overUnder": "O/U: %s",
        "gameStat1": "Balls %s",
        "gameStat2": "Strikes %s",
        "gameStat3": "%s Outs",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Tipoff",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "Kickoff",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "Round Starts",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Shots (Thru)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "Puck Drop",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Shots on Goal",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Laps",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "Kickoff",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Shots (On Target)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "First Serve",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "First Serve",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s Score",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $fa59b11c3970eda2$export$ca5e4045a55e76d2 = {
    "common": {
        "api_error": "Error de API",
        "no_upcoming_games": "No hay pr\xf3ximos juegos hasta el %s",
        "finalTerm": "%s - Final",
        "byeTerm": "DESCANSO",
        "tourney2": "Final",
        "tourney4": "Semifinales",
        "tourney8": "Cuartos de Finals",
        "tourney16": "Octavos de Finals",
        "tourney32": "Ronda de 32",
        "tourney64": "Ronda de 64",
        "tourney128": "Primeras Rondas",
        "tourney256": "Primeras Rondas",
        "today": "Hoy",
        "tomorrow": "Ma\xf1ana"
    },
    "australian-football": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "Bolas %s",
        "gameStat2": "Strikes %s",
        "gameStat3": "%s Outs",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tiros (Trav\xe9s De)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tiros a Puerta",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Vueltas",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tiros (A Puerta)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": " Puntaje de %s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $b35902dfc88d0d3b$export$13aa9a2e371cd2fd = {
    "common": {
        "api_error": "Error de API",
        "no_upcoming_games": "No hay pr\xf3ximos juegos hasta el %s",
        "finalTerm": "%s - Final",
        "byeTerm": "DESCANSO",
        "tourney2": "Final",
        "tourney4": "Semifinales",
        "tourney8": "Cuartos de Finals",
        "tourney16": "Octavos de Finals",
        "tourney32": "Ronda de 32",
        "tourney64": "Ronda de 64",
        "tourney128": "Primeras Rondas",
        "tourney256": "Primeras Rondas",
        "today": "Hoy",
        "tomorrow": "Ma\xf1ana"
    },
    "australian-football": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "Bolas %s",
        "gameStat2": "Strikes %s",
        "gameStat3": "%s Outs",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tiros (Trav\xe9s De)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tiros a Puerta",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Vueltas",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tiros (A Puerta)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": " Puntaje de %s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "Comienzo",
        "overUnder": "M\xe1s/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidad de Ganar",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $4f808b6be6c4ddc7$export$acb2a88f7d552ebf = {
    "common": {
        "api_error": "Erreur API",
        "no_upcoming_games": "Aucun match pr\xe9vu pour l'instant %s",
        "finalTerm": "%s - Terminer",
        "byeTerm": "Au revoir",
        "tourney2": "Terminer",
        "tourney4": "Demi finale",
        "tourney8": "Quart de finale",
        "tourney16": "Round de 16",
        "tourney32": "Round de 32",
        "tourney64": "Round de 64",
        "tourney128": "Premier round",
        "tourney256": "Premiers Rounds",
        "today": "Aujourd'hui",
        "tomorrow": "Demain"
    },
    "australian-football": {
        "startTerm": "Commencer",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe9 de victoire",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "Premier lancer",
        "overUnder": "O/U: %s",
        "gameStat1": "Balls %s",
        "gameStat2": "Strikes %s",
        "gameStat3": "%s Outs",
        "gameBar": "Probabilit\xe9 de victoire",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Astuce",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe9 de victoire",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "Commencer",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe9 de victoire",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "D\xe9marrer",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe9 de victoire",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "Debut du Round",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tirs (\xe0 travers)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "Lancer de rondelle",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tirs au but",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "Commencer",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe9 de victoire",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "Commencer",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tours",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "D\xe9marrer",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tirs (cadrer)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "Premier service",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "Premier service",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s Score",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "Commencer",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe9 de victoire",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $d573fc5554189e19$export$3486a10f30cf1ee4 = {
    "common": {
        "api_error": "API Error",
        "no_upcoming_games": "Nessun Match imminente %s",
        "finalTerm": "%s - Finale",
        "byeTerm": "Ciao",
        "tourney2": "Finale",
        "tourney4": "Semifinale",
        "tourney8": "Quarti di finale",
        "tourney16": "Sedicesimi",
        "tourney32": "Trentaduesimi",
        "tourney64": "Sessantaquattresimi",
        "tourney128": "Gironi",
        "tourney256": "Gironi",
        "today": "Oggi",
        "tomorrow": "Domani"
    },
    "australian-football": {
        "startTerm": "Inizio",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe0 di vittoria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "Primo lancio",
        "overUnder": "O/U: %s",
        "gameStat1": "Balls %s",
        "gameStat2": "Strikes %s",
        "gameStat3": "%s Outs",
        "gameBar": "Probabilit\xe0 di vittoria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Palla a due",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe0 di vittoria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "Inizio",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe0 di vittoria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "Calcio di inizio",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe0 di vittoria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "Inizio",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Colpi (attraverso)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "Inizio",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tiri in porta",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "Inizio",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe0 di vittoria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "Partenza",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Giri",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "Calcio di inizio",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Tiri (In porta)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "Primo servizio",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "Primo servizio",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s Punteggio",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "Inizio",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilit\xe0 di vittoria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $48e4764806fa7a6b$export$9c64ee4d84d79ce1 = {
    "common": {
        "api_error": "API Error",
        "no_upcoming_games": "Geen aankomende wedstrijden door %s",
        "finalTerm": "%s - Finale",
        "byeTerm": "BYE",
        "tourney2": "Finale",
        "tourney4": "Halve Finales",
        "tourney8": "Kwart Finales",
        "tourney16": "Achtste Finales",
        "tourney32": "Zestiende Finales",
        "tourney64": "Tweeendertigste Finale",
        "tourney128": "Voorrondes",
        "tourney256": "Voorrondes",
        "today": "Vandaag",
        "tomorrow": "Morgen"
    },
    "australian-football": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Win Probability",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "Eerste Worp",
        "overUnder": "O/U: %s",
        "gameStat1": "Ballen %s",
        "gameStat2": "Slagen %s",
        "gameStat3": "%s Outs",
        "gameBar": "Winstwaarschijnlijkheid",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Sprongbal",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Winstwaarschijnlijkheid",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Winstwaarschijnlijkheid",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "Aftrap",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Winstwaarschijnlijkheid",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "Ronde Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Schoten (Thru)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "Puck Drop",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Schoten op Doel",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Winstwaarschijnlijkheid",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Rondes",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "Aftrap",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Schoten (Op Doel)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "Eerste Service",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "Eerste Service",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s Score",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "Start",
        "overUnder": "O/U: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Winstwaarschijnlijkheid",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $60a4d35e5022a9df$export$9dc8766c8c230075 = {
    "common": {
        "api_error": "Erro de API",
        "no_upcoming_games": "Sem pr\xf3ximos jogos %s",
        "finalTerm": "%s - Final",
        "byeTerm": "DESCANSO",
        "today": "Hoje",
        "tomorrow": "Amanh\xe3"
    },
    "baseball": {
        "startTerm": "Come\xe7a",
        "overUnder": "Mais/Menos: %s",
        "gameStat1": "Bolas %s",
        "gameStat2": "Strikes %s",
        "gameStat3": "%s Fora",
        "gameBar": "Probabilidade de Vit\xf3ria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Come\xe7a",
        "overUnder": "Mais/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidade de Vit\xf3ria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "Come\xe7a",
        "overUnder": "Mais/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidade de Vit\xf3ria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "Come\xe7a",
        "overUnder": "Mais/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidade de Vit\xf3ria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "hockey": {
        "startTerm": "Come\xe7a",
        "overUnder": "Mais/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Chutes no Gol",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "Come\xe7a",
        "overUnder": "Mais/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Chutes no Gol",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "Primeiro servi\xe7o",
        "overUnder": "Mais/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": " Pontos %s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "Come\xe7a",
        "overUnder": "Mais/Menos: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Probabilidade de Vit\xf3ria",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $06041e2b1c26c877$export$d608fa5b5bfd2021 = {
    "common": {
        "api_error": "Chyba API",
        "no_upcoming_games": "\u017Diadn\xfd nadch\xe1dzaj\xfaci z\xe1pas do %s",
        "finalTerm": "%s - Koniec",
        "byeTerm": "Vo\u013Eno",
        "tourney2": "Fin\xe1le",
        "tourney4": "Semifin\xe1le",
        "tourney8": "\u0160tvr\u0165fin\xe1le",
        "tourney16": "Posledn\xfdch 16",
        "tourney32": "Posledn\xfdch 32",
        "tourney64": "Posledn\xfdch 64",
        "tourney128": "Prv\xe9 kol\xe1",
        "tourney256": "Prv\xe9 kol\xe1",
        "today": "Dnes",
        "tomorrow": "Zajtra"
    },
    "australian-football": {
        "startTerm": "\u0160tart",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "Prv\xfd nadhod",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "Odpaly %s",
        "gameStat2": "Minut\xe9 odpaly %s",
        "gameStat3": "%s Outy",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Rozkok",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "\u0160tart",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "V\xfdkop",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "Za\u010Diatky kola",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "\xdadery (Cez)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "Strata Puku",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Strely na br\xe1nu",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "\u0160tart",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "\u0160tart",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Okruhy",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "V\xfdkop",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Strely (Na br\xe1nu)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "Prv\xfd servis",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "Prv\xfd servis",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s Sk\xf3re",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "\u0160tart",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


const $125926858f90b59c$export$b2bcf639de11a4af = {
    "common": {
        "api_error": "Chyba API",
        "no_upcoming_games": "\u017Diadn\xfd nadch\xe1dzaj\xfaci z\xe1pas do %s",
        "finalTerm": "%s - Koniec",
        "byeTerm": "Vo\u013Eno",
        "tourney2": "Fin\xe1le",
        "tourney4": "Semifin\xe1le",
        "tourney8": "\u0160tvr\u0165fin\xe1le",
        "tourney16": "Posledn\xfdch 16",
        "tourney32": "Posledn\xfdch 32",
        "tourney64": "Posledn\xfdch 64",
        "tourney128": "Prv\xe9 kol\xe1",
        "tourney256": "Prv\xe9 kol\xe1",
        "today": "Dnes",
        "tomorrow": "Zajtra"
    },
    "australian-football": {
        "startTerm": "\u0160tart",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "baseball": {
        "startTerm": "Prv\xfd nadhod",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "Odpaly %s",
        "gameStat2": "Minut\xe9 odpaly %s",
        "gameStat3": "%s Outy",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "basketball": {
        "startTerm": "Rozkok",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "cricket": {
        "startTerm": "\u0160tart",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "football": {
        "startTerm": "V\xfdkop",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "golf": {
        "startTerm": "Za\u010Diatky kola",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "\xdadery (Cez)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "hockey": {
        "startTerm": "Strata Puku",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Strely na br\xe1nu",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "mma": {
        "startTerm": "\u0160tart",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    },
    "racing": {
        "startTerm": "\u0160tart",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Okruhy",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "soccer": {
        "startTerm": "V\xfdkop",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Strely (Na br\xe1nu)",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "tennis": {
        "startTerm": "Prv\xfd servis",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "volleyball": {
        "startTerm": "Prv\xfd servis",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "%s Sk\xf3re",
        "teamBarLabel": "%s",
        "oppoBarLabel": "%s"
    },
    "default": {
        "startTerm": "\u0160tart",
        "overUnder": "Viac/Menej: %s",
        "gameStat1": "%s",
        "gameStat2": "%s",
        "gameStat3": "",
        "gameBar": "Pravdepodobnos\u0165 v\xfdhry",
        "teamBarLabel": "%s%",
        "oppoBarLabel": "%s%"
    }
};


var $cfd70fadc94c42c5$var$languages = {
    en: (0, $9bf8d9821f43b5a3$export$84584c2a98eb6753),
    en_US: (0, $738479ced03534bd$export$25dc44e90bc68e13),
    es: (0, $fa59b11c3970eda2$export$ca5e4045a55e76d2),
    es_419: (0, $b35902dfc88d0d3b$export$13aa9a2e371cd2fd),
    nl: (0, $48e4764806fa7a6b$export$9c64ee4d84d79ce1),
    fr: (0, $4f808b6be6c4ddc7$export$acb2a88f7d552ebf),
    it: (0, $d573fc5554189e19$export$3486a10f30cf1ee4),
    pt_BR: (0, $60a4d35e5022a9df$export$9dc8766c8c230075),
    sk: (0, $06041e2b1c26c877$export$d608fa5b5bfd2021),
    sk_SK: (0, $125926858f90b59c$export$b2bcf639de11a4af)
};
class $cfd70fadc94c42c5$export$9850010f89e291bb {
    constructor(lang = "en"){
        this.lang = lang.replace(/['"]+/g, "").replace("-", "_");
    }
    translate(key, search, replace) {
        var lang = this.lang;
        var translated;
        search = search || "";
        replace = replace || "";
        try {
            translated = key.split(".").reduce(function(o, i) {
                return o[i];
            }, $cfd70fadc94c42c5$var$languages[lang]);
        } catch (e) {
            try {
                translated = key.split(".").reduce(function(o, i) {
                    return o[i];
                }, $cfd70fadc94c42c5$var$languages[lang].substring(0, 2));
            } catch (e) {
                try {
                    translated = key.split(".").reduce(function(o, i) {
                        return o[i];
                    }, $cfd70fadc94c42c5$var$languages["en"]);
                } catch (e) {
                    translated = "{" + key + "}";
                }
            }
        }
        if (translated === undefined || !(typeof translated === "string") && !(translated instanceof String)) translated = "{" + key + "}";
        if (search !== "" && replace !== "") translated = translated.replace(search, replace);
        return translated;
    }
}




function $6af844b6602814f2$export$eac7a64041e7dd4f(c) {
    // Render the HTML template using the provided object `c`
    const htmlTemplate = (0, $bd101b5e047d4d04$export$c0bb0b647f701bb5)`
    <ha-card>
        <div class="card">
            <img class="team-bg" src="${c.logoBG[team]}" />
            <div class="card-content">
                <div class="team">
                    <img src="${c.logo[team]}" />
                    <div class="name">${c.name[team]}</div>
                </div>
                <div class="bye">${c.byeTerm}</div>
            </div>
        </div>
    </ha-card>
`;
    // Return the HTML template
    return htmlTemplate;
}



function $07b3e4094688f328$export$b2e19b637b85e37f() {
    const htmlTemplate = (0, $bd101b5e047d4d04$export$c0bb0b647f701bb5)``;
    // Return the HTML template
    return htmlTemplate;
}
function $07b3e4094688f328$export$adab126bb38c4dbc(entity) {
    const htmlTemplate = (0, $bd101b5e047d4d04$export$c0bb0b647f701bb5)`
        <ha-card>Unknown entity: ${entity}</ha-card> 
    `;
    // Return the HTML template
    return htmlTemplate;
}
function $07b3e4094688f328$export$83a5095ba0388927(entity) {
    const htmlTemplate = (0, $bd101b5e047d4d04$export$c0bb0b647f701bb5)`
    <style>
        ha-card {padding: 10px 16px;}
    </style>
    <ha-card>
        Sensor unavailable: ${entity}
    </ha-card>
    `;
    // Return the HTML template
    return htmlTemplate;
}
function $07b3e4094688f328$export$e26cf6a49fd1ec72() {
    const htmlTemplate = (0, $bd101b5e047d4d04$export$c0bb0b647f701bb5)`
    <style>
        ha-card {padding: 10px 16px;}
    </style>
    <ha-card>
        State Invalid: ${this._config.state}
    </ha-card>
    `;
    // Return the HTML template
    return htmlTemplate;
}



function $654f96c20a3bcd40$export$3f4c9efb42c5bfd8(c) {
    // Render the HTML template using the provided object `c`
    const htmlTemplate = (0, $bd101b5e047d4d04$export$c0bb0b647f701bb5)`
    <ha-card>
        <div class="card">
            <div class="title">${c.title}</div>
            <img class="team-bg" src="${c.logoBG[1]}" />
            <img class="opponent-bg" src="${c.logoBG[2]}" />
            <div class="card-content">
                <div class="team">
                    <a class="left-clickable ${!c.url[1] ? "disabled" : ""}" href="${c.url[1] ? c.url[1] : "#"}" target="_blank">
                        <img class="logo" src="${c.logo[1]}" onerror="this.onerror=null; this.src='${c.logoError[1]}';" />
                        <div class="name"><span class="rank" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--rank-display": `${c.rankDisplay}`
    })}>${c.rank[1]}</span> ${c.name[1]}</div>
                        <div class="record">${c.record[1]}</div>
                        <div class="timeouts-wrapper" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--timeouts-display": `${c.timeoutsDisplay}`
    })}>
                            <div class="timeout" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--timeout-opacity": `${c.timeoutsOp[1][1]}`,
        "--timeout-color": `${c.color[1]}`,
        "--timeout-border": `${c.outlineWidth}px`,
        "--timeout-border-color": `${c.outlineColor}`
    })}></div>
                            <div class="timeout" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--timeout-opacity": `${c.timeoutsOp[1][2]}`,
        "--timeout-color": `${c.color[1]}`,
        "--timeout-border": `${c.outlineWidth}px`,
        "--timeout-border-color": `${c.outlineColor}`
    })}></div>
                            <div class="timeout" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--timeout-opacity": `${c.timeoutsOp[1][3]}`,
        "--timeout-color": `${c.color[1]}`,
        "--timeout-border": `${c.outlineWidth}px`,
        "--timeout-border-color": `${c.outlineColor}`
    })}></div>
                        </div>
                    </a>
                </div>
                <div class="possession" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--possession-opacity": `${c.possessionOp[1]}`
    })}>&bull;</div>
                <div class="score" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--score_size": `${c.scoreSize}`
    })}>${c.score[1]}</div>
                <div class="divider">&nbsp&nbsp&nbsp</div>
                <div class="score" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--score_size": `${c.scoreSize}`
    })}>${c.score[2]}</div>
                <div class="possession" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--possession-opacity": `${c.possessionOp[2]}`
    })}>&bull;</div>
                <div class="team">
                    <a class="right-clickable ${!c.url[2] ? "disabled" : ""}" href="${c.url[2] ? c.url[2] : "#"}" target="_blank">
                        <img class="logo" src="${c.logo[2]}" onerror="this.onerror=null; this.src='${c.logoError[2]}';" />
                        <div class="name"><span class="rank" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--rank-display": `${c.rankDisplay}`
    })}>${c.rank[2]}</span> ${c.name[2]}</div>
                        <div class="record">${c.record[2]}</div>
                        <div class="timeouts-wrapper" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--timeouts-display": `${c.timeoutsDisplay}`
    })}>
                            <div class="timeout" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--timeout-opacity": `${c.timeoutsOp[2][1]}`,
        "--timeout-color": `${c.color[2]}`,
        "--timeout-border": `${c.outlineWidth}px`,
        "--timeout-border-color": `${c.outlineColor}`
    })}></div>
                            <div class="timeout" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--timeout-opacity": `${c.timeoutsOp[2][2]}`,
        "--timeout-color": `${c.color[2]}`,
        "--timeout-border": `${c.outlineWidth}px`,
        "--timeout-border-color": `${c.outlineColor}`
    })}></div>
                            <div class="timeout" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--timeout-opacity": `${c.timeoutsOp[2][3]}`,
        "--timeout-color": `${c.color[2]}`,
        "--timeout-border": `${c.outlineWidth}px`,
        "--timeout-border-color": `${c.outlineColor}`
    })}></div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="play-clock">${c.playClock}</div>
            <div class="bases" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--bases-display": `${c.basesDisplay}`
    })}>
                <div class="on-base" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--on-base-opacity": `${c.onSecondOp}`
    })}>&bull;</div>
            </div>
            <div class="bases" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--bases-display": `${c.basesDisplay}`
    })}>
                <div class="on-base" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--on-base-opacity": `${c.onThirdOp}`
    })}>&bull;</div>
                <div class="pitcher"></div>
                <div class="on-base" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--on-base-opacity": `${c.onFirstOp}`
    })}>&bull;</div>
            </div>
            <div class="outs" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--outs-display": `${c.outsDisplay}`
    })}>${c.in0}</div>
            <div class="in-series-info" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--series_summary-display": `${c.seriesSummaryDisplay}`
    })}>${c.seriesSummary}</div>
            <div class="line"></div>
            <a class="bottom-clickable ${!c.bottomURL ? "disabled" : ""}" href="${c.bottomURL ? c.bottomURL : "#"}" target="_blank">
                <div class="in-row1">
                    <div class="venue">${c.venue}</div>
                    <div class="down-distance">${c.in1}</div>
                </div>
                <div class="in-row2">
                    <div class="location">${c.location}</div>
                    <div class="network">${c.in2}</div>
                </div>
                <div class="line"></div>
                <div class="last-play" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--last-play-speed": `${c.lastPlaySpeed}s`
    })}>
                    <p>${c.lastPlay}</p>
                </div>
                <div class="bar-wrapper" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--bar-display": `${c.barDisplay}`
    })}>
                    <div class="bar-text">${c.gameBar}</div>
                    <div class="bar">
                        <div class="bar1-label">${c.barLabel[1]}</div>
                        <div class="bar-flex">
                            <div class="bar-left"  style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--bar-length": `${c.barLength[1]}%`,
        "--bar-color": `${c.color[1]}`,
        "--bar-border": `${c.outlineWidth}px`,
        "--bar-border-color": `${c.outlineColor}`
    })}></div>
                            <div class="bar-right" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--bar-length": `${c.barLength[2]}%`,
        "--bar-color": `${c.color[2]}`,
        "--bar-border": `${c.outlineWidth}px`,
        "--bar-border-color": `${c.outlineColor}`
    })}></div>
                        </div>
                        <div class="bar2-label">${c.barLabel[2]}</div>
                    </div>
                </div>
            </a>
        </div>
    </ha-card>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('a.disabled').forEach(function(link) {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                });
            });
        });
    </script>
    `; // Return the HTML template
    return htmlTemplate;
}



function $5cc9eebd21270610$export$cbe2629e62de17f0(c) {
    // Render the HTML template using the provided object `c`
    const htmlTemplate = (0, $bd101b5e047d4d04$export$c0bb0b647f701bb5)`
        <ha-card>
            <div class="card">
                <div class="title">${c.title}</div>
                <img class="team-bg" src="${c.notFoundLogoBG}" />
                <div class="card-content">
                    <div class="team">
                        <img class="logo" src="${c.notFoundLogoBG}" />
                        <div class="notFoundLeague">${c.notFoundLeague}</div>
                    </div>
                    <div class="notFoundWrapper">
                        <div class="notFound1">${c.notFoundTerm1}</div>
                        <div class="notFound2">${c.notFoundTerm2}</div>
                    </div>
                </div>
            </div>
        </ha-card>
    `;
    // Return the HTML template
    return htmlTemplate;
}



function $ba84a5acf45954c4$export$823f4865e91cfbff(c) {
    // Render the HTML template using the provided object `c`
    const htmlTemplate = (0, $bd101b5e047d4d04$export$c0bb0b647f701bb5)`
    <ha-card>
        <div class="card">
            <div class="title">${c.title}</div>
            <img class="team-bg" src="${c.logoBG[1]}" />
            <img class="opponent-bg" src="${c.logoBG[2]}" />
            <div class="card-content">
                <div class="team">
                    <a class="left-clickable ${!c.url[1] ? "disabled" : ""}" href="${c.url[1] ? c.url[1] : "#"}" target="_blank">
                        <img class="logo" src="${c.logo[1]}" onerror="this.onerror=null; this.src='${c.logoError[1]}';" />
                        <div class="name"><span class="rank" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--rank-display": c.rankDisplay
    })}>${c.rank[1]}</span> ${c.name[1]}</div>
                        <div class="record">${c.record[1]}</div>
                    </a>
                </div>
                <div class="score" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--score_opacity": c.scoreOp[1],
        "--score_size": c.scoreSize
    })}>${c.score[1]}</div>
                <div class="divider">&nbsp&nbsp&nbsp</div>
                <div class="score" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--score_opacity": c.scoreOp[2],
        "--score_size": c.scoreSize
    })}>${c.score[2]}</div>
                <div class="team">
                    <a class="right-clickable ${!c.url[2] ? "disabled" : ""}" href="${c.url[2] ? c.url[2] : "#"}" target="_blank">
                        <img class="logo" src="${c.logo[2]}" onerror="this.onerror=null; this.src='${c.logoError[2]}';" />
                        <div class="name"><span class="rank" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--rank-display": c.rankDisplay
    })}>${c.rank[2]}</span> ${c.name[2]}</div>
                        <div class="record">${c.record[2]}</div>
                    </a>
                </div>
            </div>
            <a class="bottom-clickable ${!c.bottomURL ? "disabled" : ""}" href="${c.bottomURL ? c.bottomURL : "#"}" target="_blank">
                <div class="post-row1">${c.finalTerm}</div>
                <div class="post-series-info" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--series-summary-display": c.seriesSummaryDisplay
    })}>${c.seriesSummary}</div>
            </a>
        </div>
    </ha-card>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('a.disabled').forEach(function(link) {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                });
            });
        });
    </script>
    `; // Return the HTML template
    return htmlTemplate;
}



function $32e2f72be859b718$export$d6bad15bd473a528(c) {
    // Render the HTML template using the provided object `c`
    const htmlTemplate = (0, $bd101b5e047d4d04$export$c0bb0b647f701bb5)`
    <ha-card>
        <div class="card">
            <div class="title">${c.title}</div>
            <img class="team-bg" src="${c.logoBG[1]}" />
            <img class="opponent-bg" src="${c.logoBG[2]}" />
            <div class="card-content">
                <div class="team">
                    <a class="left-clickable ${!c.url[1] ? "disabled" : ""}" href="${c.url[1] ? c.url[1] : "#"}" target="_blank">
                        <img class="logo" src="${c.logo[1]}" onerror="this.onerror=null; this.src='${c.logoError[1]}';" />
                        <div class="name"><span class="rank" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--rank-display": `${c.rankDisplay}`
    })}>${c.rank[1]}</span> ${c.name[1]}</div>
                        <div class="record">${c.record[1]}</div>
                    </a>
                </div>
                <div class="gamewrapper">
                    <div class="gameday">${c.gameWeekday}</div>
                    <div class="gamedate">${c.gameDatePRE}</div>
                    <div class="gametime">${c.gameTime}</div>
                </div>
                <div class="team">
                    <a class="right-clickable ${!c.url[2] ? "disabled" : ""}" href="${c.url[2] ? c.url[2] : "#"}" target="_blank">
                        <img class="logo" src="${c.logo[2]}" onerror="this.onerror=null; this.src='${c.logoError[2]}';" />
                        <div class="name"><span class="rank" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--rank-display": `${c.rankDisplay}`
    })}>${c.rank[2]}</span> ${c.name[2]}</div>
                        <div class="record">${c.record[2]}</div>
                    </a>
                </div>
            </div>
            <div class="pre-series-info" style=${(0, $bd101b5e047d4d04$export$1e5b4ce2fa884e6a)({
        "--series_summary-display": `${c.seriesSummaryDisplay}`
    })}>${c.seriesSummary}</div>
            <div class="line"></div>
            <a class="bottom-clickable ${!c.bottomURL ? "disabled" : ""}" href="${c.bottomURL ? c.bottomURL : "#"}" target="_blank">
                <div class="pre-row1">
                    <div class="date">${c.startTerm} ${c.startTime}</div>
                    <div class="odds">${c.pre1}</div>
                </div>
                <div class="pre-row2">
                    <div class="venue">${c.venue}</div>
                    <div class="overunder"> ${c.pre2}</div>
                </div>
                <div class="pre-row3">
                    <div class="location">${c.location}</div>
                    <div class="network">${c.pre3}</div>
                </div>
            </a>
        </div>
    </ha-card>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('a.disabled').forEach(function(link) {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                });
            });
        });
    </script>
    `; // Return the HTML template
    return htmlTemplate;
}



function $84bc952fd23869d6$export$554552fb00f06e66(c) {
    c.logoBG = [];
    c.logo = [];
    c.logoError = [];
    c.name = [];
    c.url = [];
    c.initials = [];
    c.rank = [];
    c.record = [];
    c.score = [];
    c.scoreOp = [];
    c.scoreSize = "3em";
    c.barLabel = [];
    c.barLength = [];
    c.color = [];
    c.possessionOp = [];
    c.winner = [];
    c.timeoutsOp = [];
    c.timeoutsOp[1] = [];
    c.timeoutsOp[2] = [];
}
function $84bc952fd23869d6$export$2e2366488d12e20d(t, lang, stateObj, c, o, sport, team, oppo) {
    // Set default sections to display / hide
    c.initialsDisplay = "none";
    c.outsDisplay = "none";
    c.basesDisplay = "none";
    c.barDisplay = "inherit";
    c.timeoutsDisplay = "inline";
    c.rankDisplay = "inline";
    c.seriesSummaryDisplay = "none";
    if (o.bottomURL == "more-info") c.bottomURL = null;
    else c.bottomURL = o.bottomURL || stateObj.attributes.event_url;
    if (o.show_timeouts == false) c.timeoutsDisplay = "none";
    if (o.show_rank == false) c.rankDisplay = "none";
    c.onFirstOp = 0.2;
    c.onSecondOp = 0.2;
    c.onThirdOp = 0.2;
    if (stateObj.attributes.on_first) c.onFirstOp = 1;
    if (stateObj.attributes.on_second) c.onSecondOp = 1;
    if (stateObj.attributes.on_third) c.onThirdOp = 1;
    // Set Title data
    c.title = o.cardTitle;
    if (o.showLeague) c.title = c.title || stateObj.attributes.league;
    // Set Scoreboard data
    c.logo[team] = stateObj.attributes.team_logo;
    c.logoError[team] = (0, $4fcaa3c95ba349ea$export$607dc1951b62972e);
    c.logoBG[team] = stateObj.attributes.team_logo;
    c.name[team] = stateObj.attributes.team_name;
    if (o.teamURL == "more-info") c.url[team] = null;
    else c.url[team] = o.teamURL || stateObj.attributes.team_url;
    c.rank[team] = stateObj.attributes.team_rank;
    c.record[team] = stateObj.attributes.team_record;
    c.winner[team] = stateObj.attributes.team_winner || false;
    c.logo[oppo] = stateObj.attributes.opponent_logo;
    c.logoError[oppo] = (0, $4fcaa3c95ba349ea$export$607dc1951b62972e);
    c.logoBG[oppo] = stateObj.attributes.opponent_logo;
    c.name[oppo] = stateObj.attributes.opponent_name;
    if (o.opponentURL == "more-info") c.url[oppo] = null;
    else c.url[oppo] = o.opponentURL || stateObj.attributes.opponent_url;
    c.rank[oppo] = stateObj.attributes.opponent_rank;
    c.record[oppo] = stateObj.attributes.opponent_record;
    c.winner[oppo] = stateObj.attributes.opponent_winner || false;
    c.playClock = stateObj.attributes.clock;
    if (o.showLeague) {
        c.logoBG[team] = stateObj.attributes.league_logo;
        c.logoBG[oppo] = stateObj.attributes.league_logo;
    }
    c.score[team] = stateObj.attributes.team_score;
    c.score[oppo] = stateObj.attributes.opponent_score;
    c.scoreOp[1] = .6;
    c.scoreOp[2] = .6;
    if (c.winner[team]) c.scoreOp[team] = 1;
    if (c.winner[oppo]) c.scoreOp[oppo] = 1;
    if (stateObj.attributes.team_homeaway == "home") {
        c.color[team] = stateObj.attributes.team_colors[0];
        c.color[oppo] = stateObj.attributes.opponent_colors[1];
    } else if (stateObj.attributes.team_homeaway == "away") {
        c.color[team] = stateObj.attributes.team_colors[1];
        c.color[oppo] = stateObj.attributes.opponent_colors[0];
    } else {
        c.color[team] = "#ffffff";
        c.color[oppo] = "#000000";
    }
    c.possessionOp[team] = 0;
    c.possessionOp[oppo] = 0;
    if (stateObj.attributes.possession == stateObj.attributes.team_id) c.possessionOp[team] = 1;
    if (stateObj.attributes.possession == stateObj.attributes.opponent_id) c.possessionOp[oppo] = 1;
    c.timeoutsOp[team][1] = stateObj.attributes.team_timeouts >= 1 ? 1 : 0.2;
    c.timeoutsOp[team][2] = stateObj.attributes.team_timeouts >= 2 ? 1 : 0.2;
    c.timeoutsOp[team][3] = stateObj.attributes.team_timeouts >= 3 ? 1 : 0.2;
    c.timeoutsOp[oppo][1] = stateObj.attributes.opponent_timeouts >= 1 ? 1 : 0.2;
    c.timeoutsOp[oppo][2] = stateObj.attributes.opponent_timeouts >= 2 ? 1 : 0.2;
    c.timeoutsOp[oppo][3] = stateObj.attributes.opponent_timeouts >= 3 ? 1 : 0.2;
    // Set Location / Context data
    c.startTerm = t.translate(sport + ".startTerm");
    c.startTime = stateObj.attributes.kickoff_in;
    c.venue = stateObj.attributes.venue;
    c.location = stateObj.attributes.location;
    c.pre1 = stateObj.attributes.odds;
    c.pre2 = "";
    if (stateObj.attributes.overunder) c.pre2 = t.translate(sport + ".overUnder", "%s", String(stateObj.attributes.overunder));
    c.pre3 = stateObj.attributes.tv_network;
    c.in0 = "";
    c.in1 = "";
    if (stateObj.attributes.down_distance_text) c.in1 = t.translate(sport + ".gameStat1", "%s", stateObj.attributes.down_distance_text);
    c.in2 = "";
    if (stateObj.attributes.tv_network) c.in2 = t.translate(sport + ".gameStat2", "%s", stateObj.attributes.tv_network);
    c.finalTerm = stateObj.attributes.clock + " - " + c.gameDatePOST;
    // Set Play data
    c.lastPlay = stateObj.attributes.last_play;
    c.lastPlaySpeed = 18;
    if (c.lastPlay) c.lastPlaySpeed = 18 + Math.floor(c.lastPlay.length / 40) * 5;
    // Set Game Bar data
    c.gameBar = t.translate(sport + ".gameBar");
    c.barLength[team] = 0;
    if (stateObj.attributes.team_win_probability) c.barLength[team] = (stateObj.attributes.team_win_probability * 100).toFixed(0);
    c.barLength[oppo] = 0;
    if (stateObj.attributes.opponent_win_probability) c.barLength[oppo] = (stateObj.attributes.opponent_win_probability * 100).toFixed(0);
    c.barLabel[team] = t.translate(sport + ".teamBarLabel", "%s", String(c.barLength[team]));
    c.barLabel[oppo] = t.translate(sport + ".oppoBarLabel", "%s", String(c.barLength[oppo]));
    // Situation specific data
    c.notFoundLogo = stateObj.attributes.league_logo;
    c.notFoundLogoBG = c.notFoundLogo;
    c.notFoundLeague = null;
    if (stateObj.attributes.league != "XXX") c.notFoundLeague = stateObj.attributes.league;
    c.notFoundTerm1 = stateObj.attributes.team_abbr;
    c.notFoundTerm2 = "NOT_FOUND";
    if (stateObj.attributes.api_message) {
        c.notFoundTerm2 = t.translate("common.api_error");
        var apiTail = stateObj.attributes.api_message.substring(stateObj.attributes.api_message.length - 17);
        if (apiTail.slice(-1) == "Z") {
            var lastDateForm = new Date(apiTail);
            c.notFoundTerm2 = t.translate("common.no_upcoming_games", "%s", lastDateForm.toLocaleDateString(lang));
        }
    }
    c.byeTerm = t.translate("common.byeTerm");
    c.seriesSummary = stateObj.attributes.series_summary;
    if (c.seriesSummary) c.seriesSummaryDisplay = "inherit";
}
function $84bc952fd23869d6$export$f8996dc3406efa5a(o, c) {
    c.outlineWidth = 0;
    c.outlineColor = o.outlineColor;
    if (o.outline == true) c.outlineWidth = 1;
}
function $84bc952fd23869d6$export$539ef78a097046ba(c, stateObj, t, lang, time_format) {
    var gameDate = new Date(stateObj.attributes.date);
    var gameDateStr = gameDate.toLocaleDateString(lang, {
        month: "short",
        day: "2-digit"
    });
    var todayDate = new Date();
    var todayDateStr = todayDate.toLocaleDateString(lang, {
        month: "short",
        day: "2-digit"
    });
    var tomorrowDate = new Date();
    tomorrowDate.setDate(todayDate.getDate() + 1);
    var tomorrowDateStr = tomorrowDate.toLocaleDateString(lang, {
        month: "short",
        day: "2-digit"
    });
    var nextweekDate = new Date();
    nextweekDate.setDate(todayDate.getDate() + 6);
    c.gameWeekday = gameDate.toLocaleDateString(lang, {
        weekday: "long"
    });
    if (gameDateStr === todayDateStr) c.gameWeekday = t.translate("common.today");
    else if (gameDateStr === tomorrowDateStr) c.gameWeekday = t.translate("common.tomorrow");
    c.gameDatePOST = gameDateStr;
    c.gameDatePRE = null;
    if (gameDate > nextweekDate) c.gameDatePRE = gameDateStr;
    c.gameTime = gameDate.toLocaleTimeString(lang, {
        hour: "2-digit",
        minute: "2-digit"
    });
    if (time_format == "24") c.gameTime = gameDate.toLocaleTimeString(lang, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });
    if (time_format == "12") c.gameTime = gameDate.toLocaleTimeString(lang, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
    if (time_format == "system") {
        var sys_lang = navigator.language || "en";
        c.gameTime = gameDate.toLocaleTimeString(sys_lang, {
            hour: "2-digit",
            minute: "2-digit"
        });
    }
}



function $8d10daf0cda71373$export$42406174c4ed4231(sport, t, stateObj, c, team, oppo) {
    switch(sport){
        case "baseball":
            return $8d10daf0cda71373$export$e9b71e702ec65841(t, stateObj, c, team, oppo);
        case "basketball":
            return $8d10daf0cda71373$export$d7bcdef8b0eb1304(t, stateObj, c, team, oppo);
        case "cricket":
            return $8d10daf0cda71373$export$8e398608f504e816(t, stateObj, c, team, oppo);
        case "golf":
            return $8d10daf0cda71373$export$d4f0019d7c6b6a3d(t, stateObj, c, team, oppo);
        case "hockey":
            return $8d10daf0cda71373$export$5a6583dd53975e58(t, stateObj, c, team, oppo);
        case "mma":
            return $8d10daf0cda71373$export$b95402321280aab2(t, stateObj, c, team, oppo);
        case "racing":
            return $8d10daf0cda71373$export$75a82cd3fb272a60(t, stateObj, c, team, oppo);
        case "soccer":
            return $8d10daf0cda71373$export$215e00a8cdeadf2(t, stateObj, c, team, oppo);
        case "tennis":
            return $8d10daf0cda71373$export$b80102c1df210e4f(t, stateObj, c, team, oppo);
        case "volleyball":
            return $8d10daf0cda71373$export$ae478c65328ff5a5(t, stateObj, c, team, oppo);
        default:
            return;
    }
}
function $8d10daf0cda71373$export$e9b71e702ec65841(t, stateObj, c, team, oppo) {
    c.in1 = t.translate("baseball.gameStat1", "%s", String(stateObj.attributes.balls));
    c.in2 = t.translate("baseball.gameStat2", "%s", String(stateObj.attributes.strikes));
    c.in0 = t.translate("baseball.gameStat3", "%s", String(stateObj.attributes.outs));
    c.outsDisplay = "inherit";
    c.timeoutsDisplay = "none";
    c.basesDisplay = "inherit";
}
function $8d10daf0cda71373$export$d7bcdef8b0eb1304(t, stateObj, c, team, oppo) {
    c.timeoutsDisplay = "none";
    c.barDisplay = "none";
}
function $8d10daf0cda71373$export$8e398608f504e816(t, stateObj, c, team, oppo) {
    var subscores = [];
    c.timeoutsDisplay = "none";
    c.barDisplay = "none";
    c.in1 = stateObj.attributes.odds;
    c.in2 = stateObj.attributes.quarter;
    if (c.score != []) {
        if (c.score[1] || c.score[2]) {
            subscores[1] = c.score[1].split("(");
            subscores[2] = c.score[2].split("(");
            c.score[1] = subscores[1][0];
            c.score[2] = subscores[2][0];
            if (subscores[1].length > 1) c.record[1] = "(" + subscores[1][1];
            if (subscores[2].length > 1) c.record[2] = "(" + subscores[2][1];
        }
    }
}
function $8d10daf0cda71373$export$d4f0019d7c6b6a3d(t, stateObj, c, team, oppo) {
    c.title = c.title || stateObj.attributes.event_name;
    c.venue = stateObj.attributes.event_name;
    c.barLength[team] = stateObj.attributes.team_shots_on_target;
    c.barLength[oppo] = stateObj.attributes.opponent_shots_on_target;
    c.barLabel[team] = t.translate("golf.teamBarLabel", "%s", stateObj.attributes.team_total_shots + "(" + stateObj.attributes.team_shots_on_target + ")");
    c.barLabel[oppo] = t.translate("golf.oppoBarLabel", "%s", stateObj.attributes.opponent_total_shots + "(" + stateObj.attributes.opponent_shots_on_target + ")");
    c.finalTerm = stateObj.attributes.clock;
    c.timeoutsDisplay = "none";
    c.logo[team] = (0, $4fcaa3c95ba349ea$export$6df7962ea75d9a39) + stateObj.attributes.team_id + ".png";
    c.logo[oppo] = (0, $4fcaa3c95ba349ea$export$6df7962ea75d9a39) + stateObj.attributes.opponent_id + ".png";
}
function $8d10daf0cda71373$export$5a6583dd53975e58(t, stateObj, c, team, oppo) {
    c.barLength[team] = stateObj.attributes.team_shots_on_target;
    c.barLength[oppo] = stateObj.attributes.opponent_shots_on_target;
    c.barLabel[team] = t.translate("hockey.teamBarLabel", "%s", String(stateObj.attributes.team_shots_on_target));
    c.barLabel[oppo] = t.translate("hockey.oppoBarLabel", "%s", String(stateObj.attributes.opponent_shots_on_target));
    c.timeoutsDisplay = "none";
}
function $8d10daf0cda71373$export$b95402321280aab2(t, stateObj, c, team, oppo) {
    c.title = c.title || stateObj.attributes.event_name;
    c.timeoutsDisplay = "none";
    c.barDisplay = "none";
    c.logo[team] = (0, $4fcaa3c95ba349ea$export$7e154a1de2266268) + stateObj.attributes.team_id + ".png";
    c.logo[oppo] = (0, $4fcaa3c95ba349ea$export$7e154a1de2266268) + stateObj.attributes.opponent_id + ".png";
}
function $8d10daf0cda71373$export$75a82cd3fb272a60(t, stateObj, c, team, oppo) {
    c.title = c.title || stateObj.attributes.event_name;
    if (stateObj.attributes.quarter) {
        c.pre1 = stateObj.attributes.quarter;
        c.in1 = stateObj.attributes.quarter;
        c.finalTerm = stateObj.attributes.clock + " - " + c.gameDatePOST + " (" + stateObj.attributes.quarter + ")";
    }
    c.timeoutsDisplay = "none";
    c.barLength[team] = stateObj.attributes.team_total_shots;
    c.barLength[oppo] = stateObj.attributes.team_total_shots;
    c.barLabel[team] = t.translate("racing.teamBarLabel", "%s", String(stateObj.attributes.team_total_shots));
    c.barLabel[oppo] = t.translate("racing.teamBarLabel", "%s", String(stateObj.attributes.team_total_shots));
    //    if (stateObj.attributes.league.includes("NASCAR")) {
    //        c.logo[team] = null;
    //        c.logo[oppo] = null;
    //        c.initials[team] = "";
    //        c.initials[oppo] = "";
    //        if (c.name[team] && c.name[oppo]) {
    //            c.initials[team] = c.name[team].split(" ").map((n)=>n[0]).join("");
    //            c.initials[oppo] = c.name[oppo].split(" ").map((n)=>n[0]).join("");
    //            c.initialsDisplay = 'inline';
    //       }
    //    }
    c.logo[team] = (0, $4fcaa3c95ba349ea$export$c8a00e33d990d0fa) + stateObj.attributes.team_id + ".png";
    c.logo[oppo] = (0, $4fcaa3c95ba349ea$export$c8a00e33d990d0fa) + stateObj.attributes.opponent_id + ".png";
}
function $8d10daf0cda71373$export$215e00a8cdeadf2(t, stateObj, c, team, oppo) {
    c.barLength[team] = stateObj.attributes.team_total_shots;
    c.barLength[oppo] = stateObj.attributes.opponent_total_shots;
    c.barLabel[team] = t.translate("soccer.teamBarLabel", "%s", stateObj.attributes.team_total_shots + "(" + stateObj.attributes.team_shots_on_target + ")");
    c.barLabel[oppo] = t.translate("soccer.oppoBarLabel", "%s", stateObj.attributes.opponent_total_shots + "(" + stateObj.attributes.opponent_shots_on_target + ")");
    c.timeoutsDisplay = "none";
}
function $8d10daf0cda71373$export$b80102c1df210e4f(t, stateObj, c, team, oppo) {
    c.venue = stateObj.attributes.venue;
    c.location = stateObj.attributes.location;
    c.pre1 = stateObj.attributes.event_name;
    c.pre2 = stateObj.attributes.overunder;
    c.pre3 = stateObj.attributes.down_distance_text;
    c.in1 = c.pre1;
    c.in2 = c.pre3;
    c.finalTerm = stateObj.attributes.clock + " - " + c.gameDatePOST + " (" + c.pre3 + ")";
    c.gameBar = t.translate("tennis.gameBar", "%s", stateObj.attributes.clock);
    c.barLength[team] = stateObj.attributes.team_score;
    c.barLength[oppo] = stateObj.attributes.opponent_score;
    if (stateObj.attributes.team_shots_on_target) {
        c.gameBar = t.translate("tennis.gameBar", "%s", stateObj.attributes.clock + "(tiebreak)");
        c.barLabel[team] = t.translate("tennis.teamBarLabel", "%s", stateObj.attributes.team_score + "(" + stateObj.attributes.team_shots_on_target + ")");
    } else c.barLabel[team] = t.translate("tennis.teamBarLabel", "%s", String(stateObj.attributes.team_score));
    if (stateObj.attributes.team_shots_on_target) {
        c.gameBar = t.translate("tennis.gameBar", "%s", stateObj.attributes.clock + "(tiebreak)");
        c.barLabel[oppo] = t.translate("tennis.oppoBarLabel", "%s", stateObj.attributes.opponent_score + "(" + stateObj.attributes.opponent_shots_on_target + ")");
    } else c.barLabel[oppo] = t.translate("tennis.oppoBarLabel", "%s", String(stateObj.attributes.opponent_score));
    c.timeoutsOp[team][1] = stateObj.attributes.team_sets_won >= 1 ? 1 : 0.2;
    c.timeoutsOp[team][2] = stateObj.attributes.team_sets_won >= 2 ? 1 : 0.2;
    c.timeoutsOp[team][3] = stateObj.attributes.team_sets_won >= 3 ? 1 : 0.2;
    c.timeoutsOp[oppo][1] = stateObj.attributes.opponent_sets_won >= 1 ? 1 : 0.2;
    c.timeoutsOp[oppo][2] = stateObj.attributes.opponent_sets_won >= 2 ? 1 : 0.2;
    c.timeoutsOp[oppo][3] = stateObj.attributes.opponent_sets_won >= 3 ? 1 : 0.2;
    c.logo[team] = (0, $4fcaa3c95ba349ea$export$54565cc34e8d24d2) + stateObj.attributes.team_id + ".png";
    c.logo[oppo] = (0, $4fcaa3c95ba349ea$export$54565cc34e8d24d2) + stateObj.attributes.opponent_id + ".png";
    c.title = c.title || stateObj.attributes.event_name;
    c.timeoutsDisplay = "inline";
}
function $8d10daf0cda71373$export$ae478c65328ff5a5(t, stateObj, c, team, oppo) {
    c.gameBar = t.translate("volleyball.gameBar", "%s", stateObj.attributes.clock);
    c.barLength[team] = stateObj.attributes.team_score;
    c.barLength[oppo] = stateObj.attributes.opponent_score;
    c.barLabel[team] = t.translate("volleyball.teamBarLabel", "%s", String(stateObj.attributes.team_score));
    c.barLabel[oppo] = t.translate("volleyball.oppoBarLabel", "%s", String(stateObj.attributes.opponent_score));
    c.timeoutsOp[team][1] = stateObj.attributes.team_sets_won >= 1 ? 1 : 0.2;
    c.timeoutsOp[team][2] = stateObj.attributes.team_sets_won >= 2 ? 1 : 0.2;
    c.timeoutsOp[team][3] = stateObj.attributes.team_sets_won >= 3 ? 1 : 0.2;
    c.timeoutsOp[oppo][1] = stateObj.attributes.opponent_sets_won >= 1 ? 1 : 0.2;
    c.timeoutsOp[oppo][2] = stateObj.attributes.opponent_sets_won >= 2 ? 1 : 0.2;
    c.timeoutsOp[oppo][3] = stateObj.attributes.opponent_sets_won >= 3 ? 1 : 0.2;
    c.timeoutsDisplay = "inline";
}



const $1a7c5d625ead7579$export$c579ff79a032fc68 = (0, $bd101b5e047d4d04$export$dbf350e5966cf602)`
.card { position: relative; overflow: hidden; padding: 16px 16px 20px; font-weight: 400; border-radius: var(--ha-card-border-radius, 10px); }
.title { text-align: center; font-size: 1.2em; font-weight: 500; }
.team-bg { opacity: 0.08; position: absolute; top: -20%; left: -20%; width: 58%; z-index: 0; }
.opponent-bg { opacity: 0.08; position: absolute; top: -20%; right: -20%; width: 58%; z-index: 0; }
.card-content { display: flex; justify-content: space-evenly; align-items: center; text-align: center; position: relative; z-index: 1; }
.team { text-align: center; width: 35%; }
.team img { max-width: 90px; }
.logo { max-height: 6.5em; }
.score { font-size: var(--score_size, 3em); opacity: var(--score_opacity, 1); text-align: center; line-height: 1; }
.line { height: 1px; background-color: var(--primary-text-color); margin:10px 0; }
.left-clickable { text-decoration: none; color: inherit; }
.right-clickable { text-decoration: none; color: inherit; }
.bottom-clickable { text-decoration: none; color: inherit; }
.disabled { pointer-events: none; cursor: default; }

.possession { opacity: var(--possession-opacity, 1); font-size: 2.5em; text-align: center; font-weight:900; }
.divider { font-size: 2.5em; text-align: center; margin: 0 4px; }
.name { font-size: 1.4em; margin-bottom: 4px; }
.rank { display: var(--rank-display, inline); font-size:0.8em; }
.record { font-size:1.0em; height 1.0em; }
.timeouts-wrapper { margin: 0.4em auto; width: 70%; display: var(--timeouts-display, inline); }
.timeout { height: 0.6em; border-radius: 0.3em; background-color: var(--timeout-color, #000000); border: var(--timeout-border, 1px) solid var(--timeout-border-color, #ffffff); width: 20%; display: inline-block; margin: 0.4em auto; position: relative; opacity: var(--timeout-opacity, 0.2); }
.bases { display: var(--bases-display, inherit); font-size: 2.5em; text-align: center; font-weight:900; }
.on-base { opacity: var(--on-base-opacity, 1); display: inline-block; }
.pitcher { opacity: 0.0; display: inline-block; }
.in-row1 { font-size: 1em; height: 1em; margin: 6px 0 2px; }
.in-row2 { ; font-size: 1em; height: 1em; margin: 6px 0 2px; }
.in-row1, .in-row2 { display: flex; justify-content: space-between; align-items: center; margin: 2px 0; }
.last-play { font-size: 1.2em; width: 100%; white-space: nowrap; overflow: hidden; box-sizing: border-box; }
.last-play p { animation : slide var(--last-play-speed, 18s) linear infinite; display: inline-block; padding-left: 100%; margin: 2px 0 12px; }
@keyframes slide { 0%   { transform: translate(0, 0); } 100% { transform: translate(-100%, 0); } }
.down-distance { text-align: right; }
.play-clock { font-size: 1.4em; height: 1.4em; text-align: center; }
.outs { display: var(--outs-display, inherit); text-align: center; }

.bar-wrapper { display: var(--bar-display, inherit) }
.bar-text { text-align: center; }
.bar-flex { width: 100%; display: flex; justify-content: center; margin-top: 4px; }
.bar-right { width: var(--bar-length, 0); background-color: var(--bar-color, red); height: 0.8em; border-radius: 0 0.4em 0.4em 0; border: var(--bar-border, 1px) solid var(--bar-border-color, lightgrey); border-left: 0; transition: all 1s ease-out; }
.bar-left { width: var(--bar-length, 0); background-color: var(--bar-color, blue); height: 0.8em; border-radius: 0.4em 0 0 0.4em; border: var(--bar-border, 1px) solid var(--bar-border-color, lightgrey); border-right: 0; transition: all 1s ease-out; }
.bar { display: flex; align-items: center; }
.bar1-label { flex: 0 0 10px; padding: 0 10px 0 0; margin-top: 4px; }
.bar2-label { flex: 0 0 10px; padding: 0 0 0 10px; text-align: right; margin-top: 4px; }
.in-series-info { display: var(--series-summary-display, none); font-size: 1.2em; text-align: center; margin: 4px; }

.gameday { font-size: 1.4em; height: 1.4em; }
.gamedate { font-size: 1.1em; height: 1.1em; }
.gametime { font-size: 1.1em; height: 1.1em; }
.pre-row1 { font-weight: 500; font-size: 1.2em; height: 1.2em; margin: 6px 0 2px; }
.pre-row1, .pre-row2, .pre-row3 { display: flex; justify-content: space-between; align-items: center; margin: 2px 0; }
.pre-series-info { display: var(--series-summary-display, none); font-size: 1.2em; text-align: center; margin: 4px; }

.post-row1 { font-size: 1.2em; text-align: center; }
.post-series-info { display: var(--series-summary-display, none); font-size: 1.2em; text-align: center; margin: 4px; }

.notFound1 { font-size: 1.4em; line-height: 1.2em; text-align: center; width: 100%; margin-bottom: 4px; }
.notFound2 { font-size: 1.4em; line-height: 1.2em; text-align: center; width: 100%; margin-bottom: 4px; }

.bye { font-size: 1.8em; text-align: center; width: 50%; }

`;


class $a510245ba2c1e365$export$c12aa10d47d2f051 extends (0, $bd101b5e047d4d04$export$3f2f9f5909897157) {
    static get properties() {
        return {
            hass: {},
            _config: {}
        };
    }
    static get styles() {
        return (0, $bd101b5e047d4d04$export$dbf350e5966cf602)`
            ${0, $1a7c5d625ead7579$export$c579ff79a032fc68}
        `;
    }
    setConfig(config) {
        this._config = config;
        this._actionConfig = {
            entity: this._config.entity,
            //            tap_action: {
            //                action: "more-info",
            //            },
            dblclick_action: {
                action: "more-info"
            }
        };
    }
    getCardSize() {
        const stateObj = this.hass.states[this._config.entity];
        switch(stateObj.state){
            case "PRE":
                return 7;
            case "IN":
                return 10;
            case "POST":
                return 5;
            case "BYE":
                return 4;
            case "NOT_FOUND":
                return 4;
            default:
                return 4;
        }
    }
    render() {
        var o = {}; // o is the object that holds the card options from the configuration
        var c = {}; // c is the object that holds the card data used to render the HTML
        //
        //  Render error message if missing configuration, entity, or state
        //
        if (!this.hass || !this._config) return (0, $07b3e4094688f328$export$b2e19b637b85e37f)();
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) return (0, $07b3e4094688f328$export$adab126bb38c4dbc)(this._config.entity);
        if (stateObj.state == "unavailable") return (0, $07b3e4094688f328$export$83a5095ba0388927)(this._config.entity);
        //
        //  Set card options based on configuration
        //
        o.cardTitle = this._config.card_title || "";
        o.outline = this._config.outline;
        o.outlineColor = this._config.outline_color || "#ffffff";
        o.showLeague = this._config.show_league;
        o.homeSide = String(this._config.home_side).toUpperCase();
        o.teamURL = this._config.team_url;
        o.opponentURL = this._config.opponent_url;
        o.bottomURL = this._config.bottom_url;
        o.show_timeouts = true;
        if (this._config.show_timeouts == false) o.show_timeouts = false;
        o.show_rank = true;
        if (this._config.show_rank == false) o.show_rank = false;
        o.debug = this._config.debug;
        //
        //  Set sport, team, and oppo 
        //
        var team = 1;
        var oppo = 2;
        if (o.homeSide == "RIGHT" && stateObj.attributes.team_homeaway == "home" || o.homeSide == "LEFT" && stateObj.attributes.opponent_homeaway == "home") {
            team = 2;
            oppo = 1;
        }
        //
        // Set language, time_format (12hr or 24hr), and translator
        //
        var lang = this.hass.selectedLanguage || this.hass.language || navigator.language || "en";
        var time_format = "language";
        try {
            time_format = this.hass.locale["time_format"] || "language";
        } catch (e) {
            time_format = "language";
        }
        var t = new (0, $cfd70fadc94c42c5$export$9850010f89e291bb)(lang);
        var sport = stateObj.attributes.sport || "default";
        if (t.translate(sport + ".startTerm") == "{" + sport + ".startTerm" + "}") sport = "default";
        //
        //  Set card data
        //
        (0, $84bc952fd23869d6$export$554552fb00f06e66)(c);
        (0, $84bc952fd23869d6$export$539ef78a097046ba)(c, stateObj, t, lang, time_format);
        (0, $84bc952fd23869d6$export$f8996dc3406efa5a)(o, c);
        (0, $84bc952fd23869d6$export$2e2366488d12e20d)(t, lang, stateObj, c, o, sport, team, oppo);
        (0, $8d10daf0cda71373$export$42406174c4ed4231)(sport, t, stateObj, c, team, oppo);
        //
        //  NCAA Specific Changes
        //
        if (stateObj.attributes.league) {
            if (stateObj.attributes.league.includes("NCAA")) c.notFoundLogo = "https://a.espncdn.com/i/espn/misc_logos/500/ncaa.png";
        }
        //
        //  Reduce score font size if needed
        //
        if (Math.max(String(c.score[1]).length, String(c.score[2]).length) > 4) c.scoreSize = "2em";
        //
        //  Add info to title if debug mode is turned on
        //
        if (o.debug) {
            var lastUpdate = new Date(stateObj.attributes.last_update);
            var updateTime = lastUpdate.toLocaleTimeString(lang, {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });
            c.title = this._config.entity + " " + c.title + "(";
            if (stateObj.attributes.api_message) c.title = c.title + stateObj.attributes.api_message[0];
            c.title = c.title + updateTime + ") " + (0, $4fcaa3c95ba349ea$export$a4ad2735b021c132);
        }
        //
        //  Render the card based on the state
        //
        switch(stateObj.state){
            case "PRE":
                return (0, $32e2f72be859b718$export$d6bad15bd473a528)(c);
            case "IN":
                return (0, $654f96c20a3bcd40$export$3f4c9efb42c5bfd8)(c);
            case "POST":
                return (0, $ba84a5acf45954c4$export$823f4865e91cfbff)(c);
            case "BYE":
                return (0, $6af844b6602814f2$export$eac7a64041e7dd4f)(c);
            case "NOT_FOUND":
                return (0, $5cc9eebd21270610$export$cbe2629e62de17f0)(c);
            default:
                return (0, $07b3e4094688f328$export$e26cf6a49fd1ec72)(c);
        }
    }
    firstUpdated() {
        // Add the double-click event listener to the card
        this.shadowRoot.querySelector("ha-card").addEventListener("dblclick", ()=>this._handleDoubleClick());
    }
    _handleDoubleClick() {
        const event = new Event("hass-action", {
            bubbles: true,
            composed: true
        });
        event.detail = {
            config: this._actionConfig,
            action: "dblclick"
        };
        this.dispatchEvent(event);
    }
    //
    // Trigger the UI Card Editor from Card Picker
    //    Uncomment to enable visual editor
    //
    static getConfigElement() {
        // Create and return an editor element
        return document.createElement("teamtracker-card-editor");
    }
}


customElements.define("teamtracker-card", (0, $a510245ba2c1e365$export$c12aa10d47d2f051));
customElements.define("teamtracker-card-editor", (0, $de5768471e29ae80$export$c622f67f045f310d));
console.info("%c TEAMTRACKER-CARD %s IS INSTALLED", "color: blue; font-weight: bold", (0, $4fcaa3c95ba349ea$export$a4ad2735b021c132));
//
//  Add card to list of Custom Cards in the Card Picker
//
window.customCards = window.customCards || []; // Create the list if it doesn't exist. Careful not to overwrite it
window.customCards.push({
    type: "teamtracker-card",
    name: "Team Tracker Card",
    preview: false,
    description: "Card to display the ha-teamtracker sensor"
});


//# sourceMappingURL=ha-teamtracker-card.js.map
