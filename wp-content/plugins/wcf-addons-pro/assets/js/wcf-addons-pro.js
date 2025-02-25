function _createForOfIteratorHelper(e, t) {
    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!n) {
        if (Array.isArray(e) || (n = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var i = 0,
                o = function() {};
            return {
                s: o,
                n: function() {
                    return i >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[i++]
                    }
                },
                e: function(e) {
                    throw e
                },
                f: o
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var r, s = !0,
        a = !1;
    return {
        s: function() {
            n = n.call(e)
        },
        n: function() {
            var e = n.next();
            return s = e.done, e
        },
        e: function(e) {
            a = !0, r = e
        },
        f: function() {
            try {
                s || null == n.return || n.return()
            } finally {
                if (a) throw r
            }
        }
    }
}

function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
    }
}

function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i
}

function ownKeys(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, i)
    }
    return n
}

function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(Object(n), !0).forEach((function(t) {
            _defineProperty(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
    }
    return e
}

function _defineProperty(e, t, n) {
    return (t = _toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _toPropertyKey(e) {
    var t = _toPrimitive(e, "string");
    return "symbol" == _typeof(t) ? t : t + ""
}

function _toPrimitive(e, t) {
    if ("object" != _typeof(e) || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var i = n.call(e, t || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return ("string" === t ? String : Number)(e)
}

function _typeof(e) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, _typeof(e)
}! function(e) {
    var t = e("#wpadminbar").height();
    e.fn.wcf_tilt = function(t) {
        var n = this;
        this.settings = e.extend({
            maxTilt: 20,
            perspective: 1e3,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            scale: 1,
            speed: 3e3,
            reset: !0
        }, t), e(this).css({
            transition: "all ".concat(this.settings.speed, "ms ").concat(this.settings.easing)
        }), e(this).each((function(t, i) {
            e(i).mousemove((function(t) {
                var o = window.innerWidth / 2,
                    r = window.innerHeight / 2,
                    s = t.clientX - o,
                    a = (t.clientY - r) / r * n.settings.maxTilt,
                    l = -s / o * n.settings.maxTilt;
                e(i).css({
                    transform: "perspective(".concat(n.settings.perspective, "px) rotateX(").concat(a, "deg) rotateY(").concat(l, "deg) scale3d(").concat(n.settings.scale, ",").concat(n.settings.scale, ",").concat(n.settings.scale, ")")
                })
            })), n.settings.reset && e(i).mouseleave((function(t) {
                e(i).css({
                    transform: ""
                })
            }))
        }))
    }, e(window).on("elementor/frontend/init", (function() {
        e(window).width();
        var t = elementorFrontend.config.responsive.activeBreakpoints,
            n = elementorModules.frontend.handlers.Base;
        if ("object" === ("undefined" == typeof gsap ? "undefined" : _typeof(gsap))) {
            var i = gsap.matchMedia(),
                o = n.extend({
                    bindEvents: function() {
                        this.run()
                    },
                    run: function() {
                        if (!this.isEdit && "yes" === this.getElementSettings("wcf_enable_horizontal_scroll")) {
                            var e = this.$element.children(),
                                n = this.$element,
                                o = this.getElementSettings("horizontal_scroll_width");
                            if (o = o.size + o.unit, this.$element.hasClass("e-con-boxed") && (n = this.$element.children(), e = this.$element.children(".e-con-inner").children()), e.length) {
                                n.addClass("wcf-horizontal-scroll");
                                var r = "all";
                                if (this.getElementSettings("horizontal_scroll_breakpoint")) r = "min-width: " + (t[this.getElementSettings("horizontal_scroll_breakpoint")].value + 1) + "px";
                                if ("all" === r) return n.css({
                                        width: o,
                                        "max-width": o,
                                        transition: "none",
                                        height: "100%"
                                    }), e.css({
                                        transition: "none",
                                        height: "100%"
                                    }), gsap.to(e, {
                                        xPercent: -100 * (e.length - 1),
                                        ease: "none",
                                        scrollTrigger: {
                                            trigger: n,
                                            pin: !0,
                                            scrub: 1
                                        }
                                    }),
                                    function() {
                                        n.css({
                                            width: "var(--width)",
                                            "max-width": "min(100%,var(--width))",
                                            height: "auto"
                                        })
                                    };
                                i.add("(".concat(r, ")"), (function() {
                                    return n.css({
                                            width: o,
                                            "max-width": o,
                                            transition: "none",
                                            height: "100%"
                                        }), e.css({
                                            transition: "none",
                                            height: "100%"
                                        }), gsap.to(e, {
                                            xPercent: -100 * (e.length - 1),
                                            ease: "none",
                                            scrollTrigger: {
                                                trigger: n,
                                                pin: !0,
                                                scrub: 1
                                            }
                                        }),
                                        function() {
                                            n.css({
                                                width: "var(--width)",
                                                "max-width": "min(100%,var(--width))",
                                                height: "auto"
                                            })
                                        }
                                }))
                            }
                        }
                    }
                }),
                r = n.extend({
                    bindEvents: function() {
                        this.run()
                    },
                    run: function() {
                        if (this.getElementSettings("wcf_enable_hover_image")) {
                            if (this.isEdit && !this.getElementSettings("wcf_enable_hover_image_editor")) return;
                            var t = e(this.$element);
                            0 === t.find(".wcf-image-hover").length && t.append('<div class="wcf-image-hover"></div>'), setTimeout((function() {
                                var n = e(t.find(".wcf-image-hover"));
                                e(t).mouseenter((function(e) {
                                    gsap.to(n, {
                                        delay: 0,
                                        duration: 0,
                                        autoAlpha: 1
                                    })
                                })), e(t).mouseleave((function(e) {
                                    gsap.to(n, {
                                        delay: 0,
                                        duration: 0,
                                        autoAlpha: 0
                                    })
                                })), e(t).mousemove((function(e) {
                                    var i = t[0].getBoundingClientRect(),
                                        o = e.clientX - i.x,
                                        r = e.clientY - i.y;
                                    gsap.set(n, {
                                        delay: 0,
                                        duration: 0,
                                        x: o,
                                        y: r
                                    })
                                }))
                            }), 100)
                        }
                    }
                }),
                s = n.extend({
                    bindEvents: function() {
                        this.run()
                    },
                    run: function() {
                        if (!this.isEdit && this.getElementSettings("wcf_enable_mouse_move_effect")) {
                            var t = this.$element;
                            "custom" === this.getElementSettings("wcf_mouse_move_area_trigger") && (t = e(this.getElementSettings("wcf_custom_mouse_move_area"))), t.on("mousemove", this.move_effect)
                        }
                    },
                    getTypedValue: function(e) {
                        return isNaN(Number(e)) || !0 === e || !1 === e ? "true" == e || "false" != e && e : Number(e)
                    },
                    move_effect: function(e) {
                        var t = this.getElementSettings("wcf_mouse_move_x"),
                            n = this.getElementSettings("wcf_mouse_move_y"),
                            i = this.getElementSettings("wcf_mouse_move_duration"),
                            o = this.get_custom_config(),
                            r = window.innerWidth,
                            s = window.innerHeight,
                            a = {
                                x: (e.clientX / r - .5) * t,
                                y: (e.clientY / s - .5) * n,
                                ease: "power3.out",
                                duration: i
                            },
                            l = Object.assign({}, o, a);
                        gsap.to(this.$element, l)
                    },
                    get_custom_config: function() {
                        var e = this,
                            t = this.getElementSettings("wcf_mouse_move_custom"),
                            n = {};
                        if (!t) return n;
                        t.length && t.split(",").map((function(t) {
                            if (0 !== t.replace(/\s/g, "").length) {
                                var i = t.split(":").filter((function(e) {
                                    return 0 !== e.replace(/\s/g, "").length
                                }));
                                if (2 === i.length) {
                                    var o = i[0].replace(/\s/g, ""),
                                        r = i[i.length - 1].replace(/\s/g, "");
                                    n[o] = e.getTypedValue(r)
                                }
                            }
                        }));
                        return n
                    }
                });
            elementorFrontend.hooks.addAction("frontend/element_ready/widget", (function(e) {
                elementorFrontend.elementsHandler.addHandler(s, {
                    $element: e
                })
            })), elementorFrontend.hooks.addAction("frontend/element_ready/container", (function(e) {
                elementorFrontend.elementsHandler.addHandler(s, {
                    $element: e
                })
            }));
            for (var a = n.extend({
                    bindEvents: function() {
                        this.run()
                    },
                    run: function() {
                        if (this.getElementSettings("wcf_enable_cursor_hover_effect")) {
                            var t = this.getID(),
                                n = this.getElementSettings("wcf_enable_cursor_hover_effect_text"),
                                i = e(".wcf-hover-cursor-effect.active-".concat(t));
                            if (this.isEdit && !this.getElementSettings("wcf_enable_cursor_hover_effect_editor")) return void i.css({
                                display: "none"
                            });
                            i.css({
                                display: "flex"
                            }), e(".wcf-hover-cursor-effect.active-".concat(t)).length || e("body").prepend('<div class="wcf-hover-cursor-effect active-'.concat(t, '"></div>')), i = e(".wcf-hover-cursor-effect.active-".concat(t));
                            var o = e(this.$element);
                            "wcf--a-portfolio" === this.getWidgetType() && (o = e(this.findElement("article"))), gsap.set(i, {
                                xPercent: -50,
                                yPercent: -50,
                                scale: 0
                            });
                            var r = gsap.quickTo(i, "x", {
                                    duration: .6,
                                    ease: "expo"
                                }),
                                s = gsap.quickTo(i, "y", {
                                    duration: .6,
                                    ease: "expo"
                                }),
                                a = gsap.timeline({
                                    paused: !0
                                });
                            a.to(i, {
                                scale: 1,
                                opacity: 1,
                                duration: .5,
                                ease: "expo.inOut"
                            }), e(document).mousemove((function(e) {
                                r(e.clientX), s(e.clientY)
                            })), e(o).mouseenter((function(e) {
                                a.play(), i.html(n)
                            })), e(o).mouseleave((function(e) {
                                a.reverse()
                            }))
                        }
                    }
                }), l = 0, c = ["skin-portfolio-one", "skin-portfolio-two", "skin-portfolio-three", "skin-portfolio-four", "skin-portfolio-five", "skin-portfolio-six", "skin-portfolio-seven", "skin-portfolio-eight", "skin-portfolio-nine"]; l < c.length; l++) {
                var d = c[l];
                elementorFrontend.hooks.addAction("frontend/element_ready/wcf--a-portfolio.".concat(d), (function(e) {
                    elementorFrontend.elementsHandler.addHandler(a, {
                        $element: e
                    })
                }))
            }
            elementorFrontend.hooks.addAction("frontend/element_ready/container", (function(e) {
                elementorFrontend.elementsHandler.addHandler(r, {
                    $element: e
                }), elementorFrontend.elementsHandler.addHandler(a, {
                    $element: e
                }), elementorFrontend.elementsHandler.addHandler(o, {
                    $element: e
                })
            }));
            elementorFrontend.hooks.addAction("frontend/element_ready/wcf--scroll-elements.default", (function(t) {
                var n = e(".scroll-title", t),
                    i = e(".image-wrap img", t),
                    o = e(".single-content", t),
                    r = e(".wcf--scroll-elements", t).data("navigation"),
                    s = e(".wcf--scroll-elements", t).data("image");
                "yes" === r && (gsap.timeline({
                    scrollTrigger: {
                        trigger: t,
                        start: "top top",
                        end: "bottom bottom",
                        pin: e(".scroll-nav-bar", t),
                        pinSpacing: !1,
                        scrub: !0,
                        markers: !1
                    }
                }), n.each((function(t, i) {
                    e(i).on("click", (function(i) {
                        gsap.to(window, {
                            duration: 1,
                            scrollTo: {
                                y: o[t],
                                autoKill: !0,
                                ease: "power2"
                            }
                        }), n.removeClass("active"), e(this).addClass("active")
                    }))
                }))), "yes" === s && gsap.timeline({
                    scrollTrigger: {
                        trigger: t,
                        pin: e(".scroll-images", t),
                        pinSpacing: !1,
                        start: "top top",
                        end: "bottom bottom",
                        markers: !1
                    }
                }), "yes" !== r && "yes" !== s || o.each((function(t, o) {
                    ScrollTrigger.create({
                        trigger: o,
                        start: "top center",
                        end: "bottom center",
                        markers: !1,
                        onToggle: function(o) {
                            o.isActive ? ("yes" === r && gsap.to(n[t], {
                                scale: 1,
                                onStart: function() {
                                    e(this._targets).addClass("active")
                                }
                            }), "yes" === s && gsap.to(i[t], {
                                opacity: 1,
                                duration: 1,
                                scale: 1
                            })) : ("yes" === r && gsap.to(n[t], {
                                scale: 1,
                                onStart: function() {
                                    e(this._targets).removeClass("active")
                                }
                            }), "yes" === s && gsap.to(i[t], {
                                opacity: 0,
                                duration: 1,
                                scale: 1.2
                            }))
                        }
                    })
                }))
            }));
            ! function() {
                if (elementorFrontend.getKitSettings("wcf_enable_cursor")) {
                    var n = e(".wcf-cursor"),
                        i = e(".wcf-cursor-follower"),
                        o = t[elementorFrontend.getKitSettings("wcf_cursor_breakpoint")].value;
                    if (e(window).width() < o) return n.hide(), void i.hide();
                    n.css("display", "flex"), i.show(), gsap.set(n, {
                        xPercent: -50,
                        yPercent: -50,
                        scale: 0
                    }), gsap.set(i, {
                        xPercent: -50,
                        yPercent: -50,
                        scale: 0
                    });
                    var r = gsap.quickTo(n, "x", {
                            duration: .6,
                            ease: "power4.out"
                        }),
                        s = gsap.quickTo(i, "x", {
                            duration: .6,
                            ease: "power4.out"
                        }),
                        a = gsap.quickTo(n, "y", {
                            duration: .6,
                            ease: "power4.out"
                        }),
                        l = gsap.quickTo(i, "y", {
                            duration: .6,
                            ease: "power4.out"
                        }),
                        c = gsap.timeline({
                            paused: !0
                        });
                    c.to(n, {
                        scale: 1,
                        opacity: 1,
                        duration: .5,
                        ease: "power4.out"
                    }), c.to(i, {
                        scale: 1,
                        opacity: 1,
                        duration: .5,
                        ease: "power4.out"
                    }), e(document).mousemove((function(e) {
                        c.play(), r(e.clientX), a(e.clientY), s(e.clientX), l(e.clientY)
                    }))
                }
            }();
            var h, f = function(n) {
                    var o = e(".wcf--advance-portfolio", n).data("animation-settings");
                    if ("yes" === o.enable) {
                        if ("skin-portfolio-five" === o.skin && g(n), n.hasClass("elementor-element-edit-mode") && "" === o.enable_editor) return;
                        if (o.breakpoint) {
                            var r = t[o.breakpoint].value;
                            i.add("(".concat("min-width: " + r + "px", ")"), (function() {
                                "skin-portfolio-three" === o.skin && m(n, o), "skin-portfolio-four" === o.skin && u(n, o)
                            }))
                        } else "skin-portfolio-three" === o.skin && m(n, o), "skin-portfolio-four" === o.skin && u(n, o)
                    }
                    "skin-portfolio-eight" === o.skin && p(n, o)
                },
                m = function(t, n) {
                    var i = e(".section-title", t);
                    e(".item", t).css({
                        scale: .5,
                        opacity: 0,
                        "-webkit-transform": "perspective(4000px) rotateX(90deg)",
                        transform: "perspective(4000px) rotateX(90deg)"
                    });
                    var o = gsap.timeline({
                        scrollTrigger: {
                            trigger: t,
                            start: n.pin_area_start,
                            pin: i,
                            end: n.pin_area_end,
                            markers: !1,
                            pinSpacing: !1,
                            scrub: 1
                        }
                    });
                    o.to(i, {
                        scale: 3,
                        duration: 1
                    }), o.to(i, {
                        scale: 1,
                        duration: 1
                    }, "+=2"), e(".item", t).each((function(e, t) {
                        gsap.set(t, {
                            opacity: .7
                        });
                        var n = gsap.timeline();
                        n.set(t, {
                            position: "relative"
                        }), n.to(t, {
                            scrollTrigger: {
                                trigger: t,
                                scrub: 2,
                                duration: 1.5,
                                start: "top bottom+=100",
                                end: "bottom center",
                                markers: !1
                            },
                            scale: 1,
                            opacity: 1,
                            rotateX: 0
                        })
                    }))
                },
                u = function(t) {
                    var n = gsap.quickTo(e(".wcf--advance-portfolio.skin-portfolio-four img"), "skewY"),
                        i = gsap.utils.clamp(-15, 15);
                    ScrollSmoother.create({
                        smooth: 1.35,
                        smoothTouch: !1,
                        normalizeScroll: !1,
                        ignoreMobileResize: !0,
                        onUpdate: function(e) {
                            return n(i(e.getVelocity() / -80))
                        },
                        onStop: function() {
                            return n(0)
                        }
                    })
                },
                g = function(t) {
                    e(".item", t).wcf_tilt()
                },
                p = function(t, n) {
                    if (e(".slider_items", t)) {
                        var i = function(t) {
                                if (!d) {
                                    var n = function(e, t) {
                                            e.appendChild(t), gsap.to(e, _objectSpread(_objectSpread({}, u), {}, {
                                                y: -window.innerHeight
                                            })).then((function() {
                                                e.children[0].remove(), gsap.to(e, {
                                                    duration: 0,
                                                    y: 0
                                                })
                                            }))
                                        },
                                        i = function(e, t) {
                                            e.prepend(t), gsap.to(e, {
                                                duration: 0,
                                                y: -window.innerHeight
                                            }), gsap.to(e, _objectSpread(_objectSpread({}, u), {}, {
                                                y: 0
                                            })).then((function() {
                                                e.children[1].remove(), d = !1
                                            }))
                                        };
                                    for (var o in d = !0, c + t < 0 ? c = l.length - 1 : c + t >= l.length ? c = 0 : c += t, a) {
                                        var r = a[o],
                                            s = document.createElement("a");
                                        s.href = e(l[c]).find("a").attr("href"), s.className = "section", s.innerHTML = l[c].innerHTML, (o - Math.max(0, t)) % 2 ? i(r, s) : n(r, s)
                                    }
                                }
                            },
                            o = function(e) {
                                clearTimeout(undefined), setTimeout((function() {
                                    e.deltaY < -40 ? i(-1) : e.deltaY >= 40 && i(1)
                                }))
                            };
                        document.querySelector(".slider_items").style.display = "none";
                        var r = 1;
                        e(window).width() > 767 && (r = 3);
                        for (var s = document.getElementById("main-" + n.skin), a = [], l = e(".slide_item", t), c = 0, d = !1, h = 0; h < r; h++) {
                            var f = document.createElement("div");
                            f.className = "part";
                            var m = document.createElement("a");
                            m.className = "section", m.href = e(l[c]).find("a").attr("href"), m.innerHTML = l[c].innerHTML, f.style.setProperty("--x", -100 * h + "%"), f.style.setProperty("--image-width", e(s).width() + "px"), f.appendChild(m), s.appendChild(f), a.push(f)
                        }
                        var u = {
                            duration: 2.3,
                            ease: Power4.easeInOut
                        };
                        window.addEventListener("mousewheel", o, !1), window.addEventListener("wheel", o, !1), document.querySelectorAll("#main-".concat(n.skin, " .part"))[0].classList.add("showed")
                    }
                },
                v = _createForOfIteratorHelper(elementorFrontend.hooks.applyFilters("wcf/widgets/a-portfolio", ["skin-portfolio-three", "skin-portfolio-four", "skin-portfolio-five", "skin-portfolio-eight"]));
            try {
                for (v.s(); !(h = v.n()).done;) {
                    var w = h.value;
                    elementorFrontend.hooks.addAction("frontend/element_ready/wcf--a-portfolio.".concat(w), f)
                }
            } catch (e) {
                v.e(e)
            } finally {
                v.f()
            }
            elementorFrontend.hooks.addAction("frontend/element_ready/wcf--a-portfolio.skin-portfolio-nine", (function(t) {
                var n = e(".item", t),
                    i = n.length;
                i < 10 && (i = "0" + i), e(".total", t).html(i), gsap.timeline({
                    scrollTrigger: {
                        trigger: t,
                        start: "top top",
                        end: "bottom bottom",
                        pin: e(".widget_header", t),
                        pinSpacing: !1,
                        scrub: !0,
                        markers: !1
                    }
                }), n.each((function(n, i) {
                    ScrollTrigger.create({
                        trigger: i,
                        start: "top center",
                        end: "bottom center",
                        markers: !1,
                        onToggle: function(i) {
                            i.isActive && e(".current", t).html(n + 1)
                        }
                    })
                }))
            }))
        }
        elementorFrontend.hooks.addFilter("wcf/widgets/slider", (function(e) {
            return Object.assign({}, e, {
                "a-portfolio": ["skin-portfolio-one", "skin-portfolio-two", "skin-portfolio-six", "skin-portfolio-seven"]
            })
        }));
        elementorFrontend.hooks.addAction("frontend/element_ready/wcf--toggle-switch.default", (function(t) {
            var n = e("input", t),
                i = e(".toggle-pane", t),
                o = e(".before_label, .after_label", t);
            n.change((function() {
                i.toggleClass("show"), o.toggleClass("active")
            }))
        }));
        elementorFrontend.hooks.addAction("frontend/element_ready/wcf--filterable-gallery.default", (function(t) {
            var n = e(".gallery-wrapper", t);
            n.length && mixitup(n), e(".gallery-item", t).magnificPopup({
                type: "iframe"
            })
        }));
        elementorFrontend.hooks.addAction("frontend/element_ready/container", (function(t) {
            var n = t.data("wcf-wrapper-link");
            void 0 !== n && t.on("click", (function() {
                var t = document.createElement("a");
                e(t).attr(n), t.click()
            }))
        }));
        var y = n.extend({
            run: function() {
                if ("yes" === this.getElementSettings("wcf_enable_tilt") && (!this.isEdit || this.getElementSettings("wcf_enable_tilt_editor"))) {
                    var e = {},
                        t = this.getElementSettings("wcf_max_tilt"),
                        n = this.getElementSettings("wcf_tilt_perspective"),
                        i = this.getElementSettings("wcf_tilt_scale"),
                        o = this.getElementSettings("wcf_tilt_speed");
                    t && (e.maxTilt = t), t && (e.perspective = n), t && (e.scale = i), t && (e.speed = o), this.$element.wcf_tilt(e)
                }
            },
            bindEvents: function() {
                this.run()
            }
        });
        elementorFrontend.hooks.addAction("frontend/element_ready/widget", (function(e) {
            elementorFrontend.elementsHandler.addHandler(y, {
                $element: e
            })
        })), elementorFrontend.hooks.addAction("frontend/element_ready/container", (function(e) {
            elementorFrontend.elementsHandler.addHandler(y, {
                $element: e
            })
        }));
        var _ = n.extend({
            getDefaultSettings: function() {
                return {
                    selectors: {
                        widgetContainer: ".elementor-widget-container",
                        postContentContainer: '.elementor:not([data-elementor-type="header"]):not([data-elementor-type="footer"]):not([data-elementor-type="popup"])',
                        expandButton: ".toc__toggle-button--expand",
                        collapseButton: ".toc__toggle-button--collapse",
                        body: ".toc__body",
                        headerTitle: ".toc__header-title"
                    },
                    classes: {
                        anchor: "elementor-menu-anchor",
                        listWrapper: "toc__list-wrapper",
                        listItem: "toc__list-item",
                        listTextWrapper: "toc__list-item-text-wrapper",
                        firstLevelListItem: "toc__top-level",
                        listItemText: "toc__list-item-text",
                        activeItem: "elementor-item-active",
                        headingAnchor: "toc__heading-anchor",
                        collapsed: "toc--collapsed"
                    },
                    listWrapperTag: "numbers" === this.getElementSettings().marker_view ? "ol" : "ul"
                }
            },
            getDefaultElements: function() {
                var e = this.getSettings();
                return {
                    $pageContainer: this.getContainer(),
                    $widgetContainer: this.$element.find(e.selectors.widgetContainer),
                    $expandButton: this.$element.find(e.selectors.expandButton),
                    $collapseButton: this.$element.find(e.selectors.collapseButton),
                    $tocBody: this.$element.find(e.selectors.body),
                    $listItems: this.$element.find("." + e.classes.listItem)
                }
            },
            getContainer: function() {
                var e = this.getElementSettings();
                if (e.container) return jQuery(e.container);
                var t = this.$element.parents(".elementor");
                if ("popup" === t.attr("data-elementor-type")) return t;
                var n = this.getSettings();
                return jQuery(n.selectors.postContentContainer)
            },
            getHeadings: function() {
                var e = this.getElementSettings(),
                    t = e.headings_by_tags.join(","),
                    n = this.getSettings("selectors"),
                    i = e.exclude_headings_by_selector;
                return this.elements.$pageContainer.find(t).not(n.headerTitle).filter((function(e, t) {
                    return !jQuery(t).closest(i).length
                }))
            },
            handleNoHeadingsFound: function() {
                return this.elements.$tocBody.html("No headings were found on this page.")
            },
            getHeadingAnchorLink: function(e, t) {
                var n = this.elements.$headings[e].id,
                    i = this.elements.$headings[e].closest(".elementor-widget").id,
                    o = "";
                return n ? o = n : i && (o = i), n || i ? jQuery(this.elements.$headings[e]).data("hasOwnID", !0) : o = "".concat(t.headingAnchor, "-").concat(e), o
            },
            setHeadingsData: function() {
                var e = this;
                this.headingsData = [];
                var t = this.getSettings("classes");
                this.elements.$headings.each((function(n, i) {
                    var o = e.getHeadingAnchorLink(n, t);
                    e.headingsData.push({
                        tag: +i.nodeName.slice(1),
                        text: i.textContent,
                        anchorLink: o
                    })
                }))
            },
            addAnchorsBeforeHeadings: function() {
                var e = this,
                    t = this.getSettings("classes");
                this.elements.$headings.before((function(n) {
                    if (!jQuery(e.elements.$headings[n]).data("hasOwnID")) return '<span id="'.concat(t.headingAnchor, "-").concat(n, '" class="').concat(t.anchor, ' "></span>')
                }))
            },
            activateItem: function(e) {
                var t, n = this.getSettings("classes");
                (this.deactivateActiveItem(e), e.addClass(n.activeItem), this.$activeItem = e, this.getElementSettings("collapse_subitems")) && ((t = e.hasClass(n.firstLevelListItem) ? e.parent().next() : e.parents("." + n.listWrapper).eq(-2)).length ? (this.$activeList = t, this.$activeList.stop().slideDown()) : delete this.$activeList)
            },
            deactivateActiveItem: function(e) {
                if (this.$activeItem && !this.$activeItem.is(e)) {
                    var t = this.getSettings().classes;
                    this.$activeItem.removeClass(t.activeItem), !this.$activeList || e && this.$activeList[0].contains(e[0]) || this.$activeList.slideUp()
                }
            },
            followAnchor: function(e, t) {
                var n, i = this,
                    o = e[0].hash;
                try {
                    n = jQuery(decodeURIComponent(o))
                } catch (e) {
                    return
                }
                elementorFrontend.waypoint(n, (function(o) {
                    if (!i.itemClicked) {
                        var r = n.attr("id");
                        "down" === o ? (i.viewportItems[r] = !0, i.activateItem(e)) : (delete i.viewportItems[r], i.activateItem(i.$listItemTexts.eq(t - 1)))
                    }
                }), {
                    offset: "bottom-in-view",
                    triggerOnce: !1
                }), elementorFrontend.waypoint(n, (function(o) {
                    if (!i.itemClicked) {
                        var r = n.attr("id");
                        "down" === o ? (delete i.viewportItems[r], Object.keys(i.viewportItems).length && i.activateItem(i.$listItemTexts.eq(t + 1))) : (i.viewportItems[r] = !0, i.activateItem(e))
                    }
                }), {
                    offset: 0,
                    triggerOnce: !1
                })
            },
            followAnchors: function() {
                var e = this;
                this.$listItemTexts.each((function(t, n) {
                    return e.followAnchor(jQuery(n), t)
                }))
            },
            populateTOC: function() {
                this.listItemPointer = 0, this.getElementSettings().hierarchical_view ? this.createNestedList() : this.createFlatList(), this.$listItemTexts = this.$element.find(".toc__list-item-text"), this.$listItemTexts.on("click", this.onListItemClick.bind(this)), elementorFrontend.isEditMode() || this.followAnchors()
            },
            createNestedList: function() {
                var e = this;
                this.headingsData.forEach((function(t, n) {
                    t.level = 0;
                    for (var i = n - 1; i >= 0; i--) {
                        var o = e.headingsData[i];
                        if (o.tag <= t.tag) {
                            t.level = o.level, o.tag < t.tag && t.level++;
                            break
                        }
                    }
                })), this.elements.$tocBody.html(this.getNestedLevel(0))
            },
            createFlatList: function() {
                this.elements.$tocBody.html(this.getNestedLevel())
            },
            getNestedLevel: function(e) {
                var t, n = this.getSettings(),
                    i = this.getElementSettings(),
                    o = this.getElementSettings("icon");
                o && (t = elementorFrontend.config.experimentalFeatures.e_font_icon_svg && !elementorFrontend.isEditMode() ? o.rendered_tag : '<i class="'.concat(o.value, '"></i>'));
                for (var r = "<".concat(n.listWrapperTag, ' class="').concat(n.classes.listWrapper, '">'); this.listItemPointer < this.headingsData.length;) {
                    var s = this.headingsData[this.listItemPointer],
                        a = n.classes.listItemText;
                    if (0 === s.level && (a += " " + n.classes.firstLevelListItem), e > s.level) break;
                    if (e === s.level) {
                        r += '<li class="'.concat(n.classes.listItem, '">'), r += '<div class="'.concat(n.classes.listTextWrapper, '">');
                        var l = '<a href="#'.concat(s.anchorLink, '" class="').concat(a, '">').concat(s.text, "</a>");
                        "bullets" === i.marker_view && o && (l = "".concat(t).concat(l)), r += l, r += "</div>", this.listItemPointer++;
                        var c = this.headingsData[this.listItemPointer];
                        c && e < c.level && (r += this.getNestedLevel(c.level)), r += "</li>"
                    }
                }
                return r += "</".concat(n.listWrapperTag, ">")
            },
            run: function() {
                if (this.elements.$headings = this.getHeadings(), !this.elements.$headings.length) return this.handleNoHeadingsFound();
                this.setHeadingsData(), elementorFrontend.isEditMode() || this.addAnchorsBeforeHeadings(), this.populateTOC(), this.getElementSettings("minimize_box") && this.collapseBodyListener()
            },
            bindEvents: function() {
                var e = this;
                this.viewportItems = [], this.run();
                var t = this.getElementSettings();
                t.minimize_box && (this.elements.$expandButton.on("click", (function() {
                    return e.expandBox()
                })).on("keyup", (function(t) {
                    return e.triggerClickOnEnterSpace(t)
                })), this.elements.$collapseButton.on("click", (function() {
                    return e.collapseBox()
                })).on("keyup", (function(t) {
                    return e.triggerClickOnEnterSpace(t)
                }))), t.collapse_subitems && this.elements.$listItems.on("hover", (function(e) {
                    return jQuery(e.target).slideToggle()
                }))
            },
            onListItemClick: function(e) {
                var t = this;
                this.itemClicked = !0, setTimeout((function() {
                    return t.itemClicked = !1
                }), 2e3);
                var n, i = jQuery(e.target),
                    o = i.parent().next(),
                    r = this.getElementSettings("collapse_subitems");
                r && i.hasClass(this.getSettings("classes.firstLevelListItem")) && o.is(":visible") && (n = !0), this.activateItem(i), r && n && o.slideUp()
            },
            expandBox: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = this.getCurrentDeviceSetting("min_height");
                this.$element.removeClass(this.getSettings("classes.collapsed")), this.elements.$tocBody.attr("aria-expanded", "true").slideDown(), this.elements.$widgetContainer.css("min-height", t.size + t.unit), e && this.elements.$collapseButton.trigger("focus")
            },
            collapseBox: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.$element.addClass(this.getSettings("classes.collapsed")), this.elements.$tocBody.attr("aria-expanded", "false").slideUp(), this.elements.$widgetContainer.css("min-height", "0px"), e && this.elements.$expandButton.trigger("focus")
            },
            triggerClickOnEnterSpace: function(e) {
                13 !== e.keyCode && 32 !== e.keyCode || (e.currentTarget.click(), e.stopPropagation())
            },
            collapseBodyListener: function() {
                var e = elementorFrontend.breakpoints.getActiveBreakpointsList({
                        withDesktop: !0
                    }),
                    t = this.getElementSettings("minimized_on"),
                    n = elementorFrontend.getCurrentDeviceMode(),
                    i = this.$element.hasClass(this.getSettings("classes.collapsed"));
                "desktop" === t || e.indexOf(t) >= e.indexOf(n) ? i || this.collapseBox(!1) : i && this.expandBox(!1)
            }
        });
        elementorFrontend.hooks.addAction("frontend/element_ready/wcf--table-of-contents.default", (function(e) {
            elementorFrontend.elementsHandler.addHandler(_, {
                $element: e
            })
        }));
        var b = n.extend({
            run: function() {
                var t = this,
                    n = this.getElementSettings("expand_style"),
                    i = this.findElement(".accordion-item");
                i.each((function(o, r) {
                    "click" === n ? r.addEventListener("click", (function() {
                        t.openAccordion(o, r, i)
                    })) : (e(r).mouseenter((function() {
                        t.openAccordion(o, r, i)
                    })), e(r).mouseleave((function() {
                        r.classList.remove("accordion-hover-active")
                    })))
                }))
            },
            bindEvents: function() {
                this.run()
            },
            openAccordion: function(e, t, n) {
                n.each((function(e, n) {
                    n === t ? n.classList.add("accordion-hover-active") : n.classList.remove("accordion-hover-active")
                }))
            }
        });
        elementorFrontend.hooks.addAction("frontend/element_ready/wcf--imag-accordion.default", (function(e) {
            elementorFrontend.elementsHandler.addHandler(b, {
                $element: e
            })
        }));
        var k = n.extend({
            onInit: function() {
                "enable" === this.getElementSettings("wcf_advanced_tooltip_enable") && (this.$element.append("<span class='wcf-advanced-tooltip animated'></span>"), this.run())
            },
            run: function() {
                var t = this.getElementSettings("wcf_advanced_tooltip_trigger"),
                    n = this.getElementSettings("wcf_advanced_tooltip_content"),
                    i = this.getElementSettings("wcf_advanced_tooltip_animation"),
                    o = this.getElementSettings("wcf_advanced_tooltip_duration") || 500,
                    r = this.getElementSettings("wcf_advanced_tooltip_arrow") || !1,
                    s = this.$element.find(".wcf-advanced-tooltip");
                s.html(e.parseHTML(n)), s.css("animation-duration", o + "ms"), r || s.addClass("no-arrow"), "click" === t ? this.$element.on("click", (function() {
                    s.hasClass("show") ? (s.removeClass("show"), s.removeClass(i)) : (s.addClass("show"), s.addClass(i))
                })) : "hover" === t && (this.$element.on("mouseenter", (function() {
                    s.addClass("show"), s.addClass(i)
                })), this.$element.on("mouseleave", (function() {
                    s.removeClass("show"), s.removeClass(i)
                })))
            }
        });
        elementorFrontend.hooks.addAction("frontend/element_ready/widget", (function(e) {
            elementorFrontend.elementsHandler.addHandler(k, {
                $element: e
            })
        })), elementorFrontend.hooks.addAction("frontend/element_ready/container", (function(e) {
            elementorFrontend.elementsHandler.addHandler(k, {
                $element: e
            })
        }));
        var S = n.extend({
            loadMore: null,
            loadMoreSpin: null,
            anchor: null,
            isLoading: !1,
            elementId: null,
            currentPage: 0,
            maxPage: -1,
            bindEvents: function() {
                if ("yes" === this.getElementSettings("show_title_highlight")) {
                    var t = this.getElementSettings("highlight_title_length");
                    this.findElement(".wcf-post-title").each((function(n, i) {
                        var o = e(i).children("a"),
                            r = e(i).children("a").text().trim().split(" "),
                            s = r.slice(0, t),
                            a = r.slice(t),
                            l = '<span class="highlight">'.concat(s.join(" "), "</span> ").concat(a.join(" "));
                        o.html(l)
                    }))
                }
                this.isEdit || this.run()
            },
            run: function() {
                var t = this;
                this.loadMore = this.findElement(".wcf-post-load-more"), this.loadMoreSpin = this.findElement(".load-more-spinner"), this.anchor = this.findElement(".load-more-anchor"), this.elementId = this.getID(), this.currentPage = this.anchor.data("page"), this.maxPage = this.anchor.data("max-page");
                var n = this.loadMore.data("type");
                if ("load_on_click" === n && this.loadMore.on("click", (function(e) {
                        e.preventDefault(), t.currentPage < t.maxPage && t.handlePostsQuery()
                    })), "infinite_scroll" === n) {
                    new IntersectionObserver((function(e) {
                        var n, i = _createForOfIteratorHelper(e);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                n.value.isIntersecting && t.currentPage < t.maxPage && t.handlePostsQuery()
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                    }), {
                        rootMargin: "-30%",
                        threshold: 1
                    }).observe(this.anchor[0])
                }
                var i = this.findElement(".play.video"),
                    o = this.findElement(".play.audio");
                i.length && (i.magnificPopup({
                    type: "iframe"
                }), i.on("click", (function(t) {
                    t.preventDefault(), e(".wcf-audio-player").remove()
                }))), o.length && o.on("click", (function(t) {
                    t.preventDefault(), e(".wcf-audio-player").remove();
                    var n = '<div class="wcf-audio-player"><audio controls src="'.concat(this.href, '"></audio></div>');
                    e("body").append(n), e(".wcf-audio-player").find("audio").trigger("play")
                }))
            },
            handlePostsQuery: function() {
                var e = this;
                this.handleUiBeforeLoading(), this.isLoading && (this.loadMoreSpin.css("opacity", 1), this.$element.find(".load-more-text").css("opacity", 0)), this.currentPage++;
                var t = this.anchor.attr("data-next-page");
                return fetch(t).then((function(e) {
                    return e.text()
                })).then((function(t) {
                    var n = (new DOMParser).parseFromString(t, "text/html");
                    e.handleSuccessFetch(n)
                }))
            },
            handleSuccessFetch: function(t) {
                var n = this;
                this.handleUiAfterLoading();
                var i = t.querySelectorAll('[data-id="'.concat(this.elementId, '"] .wcf-posts > article'));
                e(i).addClass("wcf-hide");
                var o = t.querySelector('[data-id="'.concat(this.elementId, '"] .load-more-anchor')).getAttribute("data-next-page");
                i.forEach((function(e) {
                    return n.findElement(".wcf-posts").append(e)
                })), this.anchor.attr("data-page", this.currentPage), this.anchor.attr("data-next-page", o), setTimeout((function() {
                    n.isLoading || (n.loadMoreSpin.css("opacity", 0), n.$element.find(".load-more-text").css("opacity", 1)), n.currentPage === n.maxPage && n.loadMore.remove(), e(i).removeClass("wcf-hide")
                }), 300)
            },
            handleUiBeforeLoading: function() {
                this.isLoading = !0
            },
            handleUiAfterLoading: function() {
                this.isLoading = !1
            }
        });
        elementorFrontend.hooks.addAction("frontend/element_ready/wcf--posts-pro.default", (function(e) {
            elementorFrontend.elementsHandler.addHandler(S, {
                $element: e
            })
        }));
        var x = n.extend({
            bindEvents: function() {
                if ("yes" === this.getElementSettings("show_title_highlight")) {
                    var t = this.getElementSettings("highlight_title_length");
                    this.findElement(".wcf-post-title").each((function(n, i) {
                        var o = e(i).children("a"),
                            r = e(i).children("a").text().trim().split(" "),
                            s = r.slice(0, t),
                            a = r.slice(t),
                            l = '<span class="highlight">'.concat(s.join(" "), "</span> ").concat(a.join(" "));
                        o.html(l)
                    }))
                }
                this.banner(), this.isEdit || this.run()
            },
            run: function() {
                var t = this.findElement(".play.video"),
                    n = this.findElement(".play.audio");
                t.length && (t.magnificPopup({
                    type: "iframe"
                }), t.on("click", (function(t) {
                    t.preventDefault(), e(".wcf-audio-player").remove()
                }))), n.length && n.on("click", (function(t) {
                    t.preventDefault(), e(".wcf-audio-player").remove();
                    var n = '<div class="wcf-audio-player"><audio controls src="'.concat(this.href, '"></audio></div>');
                    e("body").append(n), e(".wcf-audio-player").find("audio").trigger("play")
                }))
            },
            banner: function() {
                var e = this.findElement(".post-banner"),
                    t = this.findElement(".tabs-wrap .thumb").clone();
                e.html(t), this.tab()
            },
            tab: function() {
                var t = this.findElement(".tabs-wrap .wcf-post-title"),
                    n = this.findElement(".post-banner"),
                    i = n.find(".thumb");
                this.findElement(".tabs-wrap .wcf-post:first").addClass("active"), this.findElement(".post-banner .thumb:first").addClass("active"), t.click((function(o) {
                    o.preventDefault();
                    var r = e(this).parent(".wcf-post");
                    if (!r.hasClass("active")) {
                        var s = r.attr("data-id");
                        return t.parent(".wcf-post").removeClass("active"), r.addClass("active"), i.removeClass("active"), n.find("[data-target='".concat(s, "']")).addClass("active"), !1
                    }
                }))
            }
        });
        elementorFrontend.hooks.addAction("frontend/element_ready/wcf--feature-posts.default", (function(e) {
            elementorFrontend.elementsHandler.addHandler(x, {
                $element: e
            })
        }))
    }));
    ! function() {
        var t = e(".wcf-scroll-to-top");
        if (t.length) {
            if (t.hasClass("scroll-to-circle")) {
                var n = document.querySelector(".wcf-scroll-to-top .progress-circle path"),
                    i = n.getTotalLength();
                n.style.transition = n.style.WebkitTransition = "none", n.style.strokeDasharray = i + " " + i, n.style.strokeDashoffset = i, n.getBoundingClientRect(), n.style.transition = n.style.WebkitTransition = "stroke-dashoffset 10ms linear";
                var o = function() {
                    var t = e(window).scrollTop(),
                        o = e(document).height() - e(window).height(),
                        r = i - t * i / o;
                    n.style.strokeDashoffset = r
                };
                o(), e(window).scroll(o)
            }
            e(window).scroll((function() {
                e(this).scrollTop() > 100 ? t.addClass("show-scroll-to-top") : t.removeClass("show-scroll-to-top")
            })), t.on("click", (function() {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }))
        }
    }();
    ! function() {
        var t = e(".wcf-preloader");
        t.length && e(document).ready((function() {
            setTimeout((function() {
                e("body.wcf-preloader-active").removeClass("wcf-preloader-active"), t.remove()
            }), 500)
        }))
    }();
    if (function() {
            if (e(".wcf-scroll-indicator").length) {
                window.addEventListener("scroll", (function() {
                    var e = document.querySelector(".wcf-scroll-indicator .indicator-bar"),
                        t = document.body.scrollHeight - window.innerHeight,
                        n = window.scrollY / t * 100;
                    e.style.width = "".concat(n, "%")
                })), e(".scroll-indicator-top").css("top", t)
            }
        }(), "function" == typeof ScrollSmoother && "object" === ("undefined" == typeof gsap ? "undefined" : _typeof(gsap)) && window.wcf_header_settings) {
        var n = wcf_header_settings,
            i = e(".elementor-".concat(n.id));
        ScrollTrigger.create({
            trigger: "body",
            pin: i,
            pinSpacing: !1,
            start: "top top",
            end: "bottom bottom"
        })
    }
}(jQuery);