function _typeof(t) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, _typeof(t)
}! function(t) {
    t(window).on("elementor/frontend/init", (function() {
        var e = t(window).width(),
            n = elementorFrontend.config.responsive.activeBreakpoints,
            i = elementorModules.frontend.handlers.Base,
            o = 1.35,
            a = !1;
        if (null !== WCF_ADDONS_JS.smoothScroller && (o = WCF_ADDONS_JS.smoothScroller.smooth, a = "on" === WCF_ADDONS_JS.smoothScroller.mobile), "function" == typeof ScrollSmoother && "object" === ("undefined" == typeof gsap ? "undefined" : _typeof(gsap))) {
            var s = gsap.matchMedia();
            a ? window.wcf_smoother = ScrollSmoother.create({
                smooth: o,
                effects: !0,
                smoothTouch: .1,
                normalizeScroll: !0,
                ignoreMobileResize: !1
            }) : s.add("(min-width: 768px)", (function() {
                window.wcf_smoother = ScrollSmoother.create({
                    smooth: o,
                    effects: !0,
                    smoothTouch: .1,
                    normalizeScroll: !0,
                    ignoreMobileResize: !1
                })
            }))
        }
        if ("object" === ("undefined" == typeof gsap ? "undefined" : _typeof(gsap))) {
            var r = gsap.matchMedia(),
                l = i.extend({
                    bindEvents: function() {
                        this.run()
                    },
                    run: function() {
                        this.fade_animation(), "widget" === this.getElementType() && (this.text_animation(), this.image_animation()), this.button_move_animation()
                    },
                    text_animation: function() {
                        var e = this;
                        if (!this.isEdit || this.getElementSettings("wcf_text_animation_editor")) {
                            var i = "all";
                            if (this.getElementSettings("text_animation_breakpoint")) {
                                var o = n[this.getElementSettings("text_animation_breakpoint")].value;
                                i = "min" === this.getElementSettings("text_breakpoint_min_max") ? "min-width: " + o + "px" : "max-width: " + o + "px"
                            }
                            if ("char" === this.getElementSettings("wcf_text_animation") || "word" === this.getElementSettings("wcf_text_animation")) {
                                var a = this.getElementSettings("text_duration"),
                                    s = this.getElementSettings("text_stagger"),
                                    l = this.getElementSettings("text_translate_x"),
                                    c = this.getElementSettings("text_translate_y"),
                                    g = this.getElementSettings("text_on_scroll"),
                                    m = this.getElementSettings("text_delay"),
                                    d = this.findElement(".elementor-widget-container").children().length,
                                    f = t(this.findElement(".elementor-widget-container").children()[d - 1]),
                                    p = {
                                        duration: a,
                                        autoAlpha: 0,
                                        delay: m,
                                        stagger: s
                                    };
                                l && (p.x = l), c && (p.y = c), g && (p.scrollTrigger = {
                                    trigger: f,
                                    start: "top 90%"
                                });
                                var h = new SplitText(f, {
                                        type: "chars, words"
                                    }),
                                    u = h.chars;
                                "word" === this.getElementSettings("wcf_text_animation") && (u = h.words), "all" === i ? gsap.from(u, p) : r.add("(".concat(i, ")"), (function() {
                                    return gsap.from(u, p),
                                        function() {
                                            u.revert()
                                        }
                                }))
                            }
                            if ("text_move" === this.getElementSettings("wcf_text_animation")) {
                                var _ = this.getElementSettings("text_duration"),
                                    w = this.getElementSettings("text_delay"),
                                    S = this.getElementSettings("text_stagger"),
                                    v = this.getElementSettings("text_on_scroll"),
                                    E = this.getElementSettings("text_rotation_di"),
                                    y = this.getElementSettings("text_rotation"),
                                    x = this.getElementSettings("text_transform_origin"),
                                    b = {},
                                    k = this.findElement(".elementor-widget-container").children().length,
                                    T = t(this.findElement(".elementor-widget-container").children()[k - 1]);
                                T.hasClass("wcf--text") && T.children().length && (T = T.children());
                                var F = {
                                    duration: _,
                                    delay: w,
                                    opacity: 0,
                                    force3D: !0,
                                    transformOrigin: x,
                                    stagger: S
                                };
                                if ("x" === E && (F.rotationX = y), "y" === E && (F.rotationY = y), v && (b.scrollTrigger = {
                                        trigger: T,
                                        duration: 2,
                                        start: "top 90%",
                                        end: "bottom 60%",
                                        scrub: !1,
                                        markers: !1,
                                        toggleActions: "play none none none"
                                    }), "all" === i) {
                                    var C = gsap.timeline(b),
                                        A = new SplitText(T, {
                                            type: "lines"
                                        });
                                    gsap.set(T, {
                                        perspective: 400
                                    }), A.split({
                                        type: "lines"
                                    }), C.from(A.lines, F)
                                } else r.add("(".concat(i, ")"), (function() {
                                    var t = gsap.timeline(b),
                                        e = new SplitText(T, {
                                            type: "lines"
                                        });
                                    return gsap.set(T, {
                                            perspective: 400
                                        }), e.split({
                                            type: "lines"
                                        }), t.from(e.lines, F),
                                        function() {
                                            e.revert(), t.revert()
                                        }
                                }))
                            }
                            if ("text_reveal" === this.getElementSettings("wcf_text_animation")) {
                                var D = this.getElementSettings("text_duration"),
                                    O = this.getElementSettings("text_on_scroll"),
                                    $ = this.getElementSettings("text_stagger"),
                                    H = this.getElementSettings("text_delay"),
                                    X = this.findElement(".elementor-widget-container").children().length,
                                    j = t(this.findElement(".elementor-widget-container").children()[X - 1]),
                                    P = new SplitText(j, {
                                        type: "lines,words,chars",
                                        linesClass: "anim-reveal-line"
                                    }),
                                    Y = {
                                        duration: D,
                                        delay: H,
                                        ease: "circ.out",
                                        y: 80,
                                        stagger: $,
                                        opacity: 0
                                    };
                                O && (Y.scrollTrigger = {
                                    trigger: j,
                                    start: "top 85%"
                                }), "all" === i ? gsap.from(P.chars, Y) : r.add("(".concat(i, ")"), (function() {
                                    return gsap.from(P.chars, Y),
                                        function() {
                                            P.revert()
                                        }
                                }))
                            }
                            if ("text_invert" === this.getElementSettings("wcf_text_animation")) {
                                var M = this.findElement(".elementor-widget-container").children().length,
                                    N = t(this.findElement(".elementor-widget-container").children()[M - 1]),
                                    z = N.css("color");
                                if (z = function(t, e, n) {
                                        t /= 255, e /= 255, n /= 255;
                                        var i = Math.max(t, e, n),
                                            o = i - Math.min(t, e, n),
                                            a = o ? i === t ? (e - n) / o : i === e ? 2 + (n - t) / o : 4 + (t - e) / o : 0;
                                        return [60 * a < 0 ? 60 * a + 360 : 60 * a, 100 * (o ? i <= .5 ? o / (2 * i - o) : o / (2 - (2 * i - o)) : 0), 100 * (2 * i - o) / 2]
                                    }((z = (z = z.toString()).match(/(\d+)/g))[0], z[1], z[2]), z = "".concat(z[0].toFixed(1), ", ").concat(z[1].toFixed(1), "%, ").concat(z[2].toFixed(1), "%"), N.css("--text-color", z), "all" === i) new SplitText(N, {
                                    type: "lines",
                                    linesClass: "invert-line"
                                }).lines.forEach((function(t) {
                                    gsap.to(t, {
                                        backgroundPositionX: 0,
                                        ease: "none",
                                        scrollTrigger: {
                                            trigger: t,
                                            scrub: 1,
                                            start: "top 85%",
                                            end: "bottom center"
                                        }
                                    })
                                }));
                                else r.add("(".concat(i, ")"), (function() {
                                    var t = new SplitText(N, {
                                        type: "lines",
                                        linesClass: "invert-line"
                                    });
                                    return t.lines.forEach((function(t) {
                                            gsap.to(t, {
                                                backgroundPositionX: 0,
                                                ease: "none",
                                                scrollTrigger: {
                                                    trigger: t,
                                                    scrub: 1,
                                                    start: "top 85%",
                                                    end: "bottom center"
                                                }
                                            })
                                        })),
                                        function() {
                                            t.revert()
                                        }
                                }))
                            }
                            if ("text_spin" === this.getElementSettings("wcf_text_animation")) {
                                var J = function() {
                                        var n = e.getElementSettings("text_on_scroll"),
                                            i = e.findElement(".elementor-widget-container").children().length,
                                            o = t(e.findElement(".elementor-widget-container").children()[i - 1]),
                                            a = o[0].cloneNode(!0);
                                        t(a).addClass("duplicate-text"), o.css({
                                            perspective: "600px",
                                            "white-space": "nowrap"
                                        }), t(a).css({
                                            perspective: "600px",
                                            "white-space": "nowrap"
                                        });
                                        var s = e.findElement(".elementor-widget-container")[0];
                                        if (o.after(a), gsap.set(a, {
                                                yPercent: -100
                                            }), s.originalSplit = SplitText.create(o, {
                                                type: "chars"
                                            }), s.cloneSplit = SplitText.create(a, {
                                                type: "chars"
                                            }), n) {
                                            var r = {
                                                    trigger: e.$element,
                                                    animation: W(s),
                                                    invalidateOnRefresh: !0
                                                },
                                                l = {
                                                    start: e.getElementSettings("spin_text_start"),
                                                    end: e.getElementSettings("spin_text_end"),
                                                    scrub: "yes" === e.getElementSettings("spin_text_scrub"),
                                                    toggleActions: e.getElementSettings("spin_text_toggle_action")
                                                };
                                            l = Object.assign({}, r, l), ScrollTrigger.create(l)
                                        } else W(s)
                                    },
                                    W = function(t) {
                                        var n = e.getElementSettings("text_delay"),
                                            i = {
                                                each: .03,
                                                ease: "power1",
                                                from: "start"
                                            };
                                        gsap.set(t.cloneSplit.chars, {
                                            opacity: 0
                                        });
                                        var o = gsap.timeline();
                                        return o.set(t.cloneSplit.chars, {
                                            rotationX: -90,
                                            transformOrigin: function() {
                                                var e = t.offsetHeight;
                                                return "50% 50% -".concat(e / 2)
                                            }
                                        }), o.to(t.originalSplit.chars, {
                                            delay: n,
                                            duration: .4,
                                            rotationX: 90,
                                            transformOrigin: function() {
                                                var e = t.offsetHeight;
                                                return "50% 50% -".concat(e / 2)
                                            },
                                            stagger: i
                                        }), o.to(t.originalSplit.chars, {
                                            duration: .4,
                                            delay: n,
                                            opacity: 0,
                                            stagger: i,
                                            ease: "power2.in"
                                        }, 0), o.to(t.cloneSplit.chars, {
                                            duration: .001,
                                            delay: n,
                                            opacity: 1,
                                            stagger: i
                                        }, .001), o.to(t.cloneSplit.chars, {
                                            duration: .4,
                                            delay: n,
                                            rotationX: 0,
                                            stagger: i
                                        }, 0), o
                                    };
                                "all" === i ? J() : r.add("(".concat(i, ")"), (function() {
                                    J()
                                }))
                            }
                        }
                    },
                    image_animation: function() {
                        if (!this.isEdit || this.getElementSettings("wcf_img_animation_editor")) {
                            if ("reveal" === this.getElementSettings("wcf-image-animation")) {
                                var e = this.findElement("img").parent(),
                                    n = this.$element;
                                this.findElement("img").parent().parent().css("overflow", "hidden"), e.css({
                                    overflow: "hidden",
                                    display: "block",
                                    visibility: "hidden",
                                    transition: "none"
                                });
                                var i = this.getElementSettings("image-ease"),
                                    o = !1,
                                    a = "";
                                t.each(["effect-zoom-in", "effect-zoom-out", "left-move", "right-move"], (function(t, e) {
                                    n.hasClass("wcf--image-".concat(e)) && (o = !0, a = "wcf--image-".concat(e), n.removeClass(a))
                                })), e.each((function() {
                                    var e = t(this).find("img"),
                                        s = gsap.timeline({
                                            scrollTrigger: {
                                                trigger: t(this),
                                                start: "top 50%"
                                            }
                                        });
                                    s.set(t(this), {
                                        autoAlpha: 1
                                    }), s.from(t(this), 1.5, {
                                        xPercent: -100,
                                        ease: i,
                                        onComplete: function() {
                                            o && (n.addClass(a), o = !1)
                                        }
                                    }), s.from(e, 1.5, {
                                        xPercent: 100,
                                        scale: 1.3,
                                        delay: -1.5,
                                        ease: i
                                    })
                                }))
                            }
                            if ("scale" === this.getElementSettings("wcf-image-animation")) {
                                var s = this.findElement("img"),
                                    r = this.getElementSettings("wcf-animation-start");
                                "custom" === this.getElementSettings("wcf-animation-start") && (r = this.getElementSettings("wcf_animation_custom_start")), gsap.set(s, {
                                    scale: this.getElementSettings("wcf-scale-start")
                                }), gsap.to(s, {
                                    scrollTrigger: {
                                        trigger: this.$element,
                                        start: r,
                                        scrub: !0
                                    },
                                    scale: this.getElementSettings("wcf-scale-end"),
                                    ease: this.getElementSettings("image-ease")
                                }), s.parent().css("overflow", "hidden")
                            }
                            if ("stretch" === this.getElementSettings("wcf-image-animation")) {
                                var l = this.findElement("img"),
                                    c = this.findElement("img").parent();
                                c.css("padding-bottom", "395px"), gsap.timeline({
                                    scrollTrigger: {
                                        trigger: c,
                                        start: "top top",
                                        pin: !0,
                                        scrub: 1,
                                        pinSpacing: !1,
                                        end: "bottom bottom+=100"
                                    }
                                }).to(l, {
                                    width: "100%",
                                    borderRadius: "0px"
                                }), c.css("transition", "none")
                            }
                        }
                    },
                    fade_animation: function() {
                        var t = this;
                        if ("none" !== this.getElementSettings("wcf-animation") && (!this.isEdit || this.getElementSettings("wcf_enable_animation_editor"))) {
                            var e = this.getElementSettings("fade-from"),
                                i = this.getElementSettings("on-scroll"),
                                o = this.getElementSettings("data-duration"),
                                a = this.getElementSettings("fade-offset"),
                                s = this.getElementSettings("delay"),
                                l = this.getElementSettings("ease"),
                                c = "all";
                            if (this.$element.css("transition", "none"), this.getElementSettings("fade_animation_breakpoint")) {
                                var g = n[this.getElementSettings("fade_animation_breakpoint")].value;
                                c = "min" === this.getElementSettings("fade_breakpoint_min_max") ? "min-width: " + g + "px" : "max-width: " + g + "px"
                            }
                            var m = {
                                opacity: 0,
                                ease: l,
                                duration: o,
                                delay: s
                            };
                            if ("fade" === this.getElementSettings("wcf-animation") && ("top" === e && (m.y = -a), "bottom" === e && (m.y = a), "left" === e && (m.x = -a), "right" === e && (m.x = a), "scale" === e && (m.scale = this.getElementSettings("wcf-a-scale"))), "move" === this.getElementSettings("wcf-animation")) {
                                var d = this.getElementSettings("wcf_a_rotation_di"),
                                    f = this.getElementSettings("wcf_a_transform_origin"),
                                    p = this.getElementSettings("wcf_a_rotation");
                                m.force3D = !0, m.transformOrigin = f, "x" === d && (m.rotationX = p), "y" === d && (m.rotationY = p), gsap.set(this.$element.parent(), {
                                    perspective: 400
                                })
                            }
                            i && (m.scrollTrigger = {
                                trigger: this.$element,
                                start: "top 85%"
                            }), "all" === c ? gsap.from(this.$element, m) : r.add("(".concat(c, ")"), (function() {
                                return gsap.from(t.$element, m),
                                    function() {}
                            }))
                        }
                    },
                    button_move_animation: function() {
                        var e = this.findElement(".btn-wrapper"),
                            n = this.findElement(".btn-item");
                        if (e.length) {
                            var i = function(t, n, i) {
                                var o = t.pageX - e.offset().left,
                                    a = t.pageY - e.offset().top;
                                gsap.to(n, .5, {
                                    x: (o - e.width() / 2) / e.width() * i,
                                    y: (a - e.height() / 2) / e.height() * i,
                                    ease: Power2.easeOut
                                })
                            };
                            e.mousemove((function(t) {
                                ! function(t) {
                                    i(t, n, 80)
                                }(t)
                            })), e.mouseleave((function(t) {
                                gsap.to(n, .5, {
                                    x: 0,
                                    y: 0,
                                    ease: Power2.easeOut
                                })
                            }))
                        }
                        var o = this.findElement(".btn-hover-bgchange");
                        if (o.length) {
                            var a = document.createElement("span");
                            o.append(a), o.on("mouseenter", (function(e) {
                                var n = e.pageX - t(this).offset().left,
                                    i = e.pageY - t(this).offset().top;
                                t(this).find("span").css({
                                    top: i,
                                    left: n
                                })
                            })), o.on("mouseout", (function(e) {
                                var n = e.pageX - t(this).offset().left,
                                    i = e.pageY - t(this).offset().top;
                                t(this).find("span").css({
                                    top: i,
                                    left: n
                                })
                            }))
                        }
                    }
                });
            elementorFrontend.hooks.addAction("frontend/element_ready/widget", (function(t) {
                elementorFrontend.elementsHandler.addHandler(l, {
                    $element: t
                })
            })), elementorFrontend.hooks.addAction("frontend/element_ready/container", (function(t) {
                elementorFrontend.elementsHandler.addHandler(l, {
                    $element: t
                })
            }));
            var c = i.extend({
                bindEvents: function() {
                    this.isEdit || "yes" === this.getElementSettings("wcf_enable_pin_area") && (this.getElementSettings("wcf_pin_breakpoint") ? e > n[this.getElementSettings("wcf_pin_breakpoint")].value && this.run() : this.run())
                },
                run: function() {
                    var t = this.$element,
                        e = this.getElementSettings("wcf_pin_area_start"),
                        n = this.getElementSettings("wcf_pin_area_end"),
                        i = this.getElementSettings("wcf_pin_end_trigger");
                    "custom" === e && (e = this.getElementSettings("wcf_pin_area_start_custom")), "custom" === n && (n = this.getElementSettings("wcf_pin_area_end_custom")), this.getElementSettings("wcf_custom_pin_area") && (t = this.getElementSettings("wcf_custom_pin_area")), gsap.to(this.$element, {
                        scrollTrigger: {
                            trigger: t,
                            endTrigger: i,
                            pin: this.$element,
                            pinSpacing: !1,
                            start: e,
                            end: n,
                            delay: .5,
                            markers: !1
                        }
                    }), this.$element.css("transition", "none")
                }
            });
            elementorFrontend.hooks.addAction("frontend/element_ready/container", (function(t) {
                elementorFrontend.elementsHandler.addHandler(c, {
                    $element: t
                })
            }))
        }
        var g = i.extend({
            bindEvents: function() {
                this.run()
            },
            run: function() {
                var t = this;
                this.getElementSettings("wcf_enable_popup") && (this.isEdit && this.getElementSettings("wcf_enable_popup_editor"), this.$element.on("click", (function(e) {
                    e.preventDefault(), t.isEdit && !t.getElementSettings("wcf_enable_popup_editor") || t.ajax_call()
                })))
            },
            ajax_call: function() {
                var e = this.getElementSettings("popup_animation"),
                    n = this.getElementSettings("popup_animation_delay");
                t.ajax({
                    url: WCF_ADDONS_JS.ajaxUrl,
                    data: {
                        action: "wcf_load_popup_content",
                        widget_id: this.getID(),
                        post_id: WCF_ADDONS_JS.post_id,
                        nonce: WCF_ADDONS_JS._wpnonce
                    },
                    dataType: "json",
                    type: "POST",
                    success: function(i) {
                        var o = {
                            removalDelay: n,
                            items: {
                                src: t('<div id="wcf--popup" class="wcp--popup  mfp-with-anim" >'.concat(i.html, "</div>")),
                                type: "inline"
                            },
                            callbacks: {
                                beforeOpen: function() {
                                    this.st.mainClass = e
                                }
                            }
                        };
                        t.magnificPopup.open(o)
                    }
                })
            }
        });
        elementorFrontend.hooks.addAction("frontend/element_ready/container", (function(t) {
            elementorFrontend.elementsHandler.addHandler(g, {
                $element: t
            })
        }));
        elementorFrontend.hooks.addAction("frontend/element_ready/wcf--video-mask.default", (function(e) {
            t(".video--btn", e).on("click", (function() {
                e.toggleClass("mask-open"), t(".open-title", e).toggle(), t(".close-title", e).toggle();
                var n = e.data("id");
                e.closest(".wcf-video-mask-content").toggleClass("wcf-video-mask-content-".concat(n)), t("video", e).each((function() {
                    this.autoplay || (this.paused ? this.play() : this.pause())
                }))
            }))
        }));
        for (var m = function(e, n) {
                if (e) {
                    e.timeScale(1.6).reverse();
                    var i = t(".wcf-anim-video-popup-".concat(n)).find("iframe"),
                        o = t(".wcf-anim-video-popup-".concat(n)).attr("data-src");
                    i && (i.remove(), t(".wcf-anim-video-popup-".concat(n, " .wcf--popup-close")).after('<iframe src="'.concat(o, '"></iframe>')))
                }
            }, d = function(e) {
                var n = t(".thumb video", e);
                n.length && t(".wcf--video-box", e).hover((function() {
                    n.get(0).play()
                }), (function() {
                    n.get(0).pause(), n.get(0).currentTime = 0
                }))
            }, f = 0, p = ["video-box", "video-box-slider"]; f < p.length; f++) {
            var h = p[f];
            elementorFrontend.hooks.addAction("frontend/element_ready/wcf--".concat(h, ".default"), d)
        }
        elementorFrontend.hooks.addAction("frontend/element_ready/wcf--video-popup.default", (function(e) {
            if ("wcf--video-popup.default" === e.attr("data-widget_type")) {
                var n, i = e.find(".wcf--popup-video-wrapper").attr("data-src"),
                    o = e.attr("data-id"),
                    a = t(".wcf-anim-video-popup-".concat(o));
                a.parent().is("body") || a.appendTo("body"), a.find("iframe").attr("src", i), e.find(".wcf-popup-btn").off("click").on("click", (function() {
                    n = gsap.timeline({
                        defaults: {
                            ease: "power2.inOut"
                        }
                    }).to(".wcf-anim-video-popup-".concat(o), {
                        scaleY: .01,
                        x: 1,
                        opacity: 1,
                        visibility: "visible",
                        duration: .4
                    }).to(".wcf-anim-video-popup-".concat(o), {
                        scaleY: 1,
                        duration: .6
                    }).to(".wcf-anim-video-popup-".concat(o, " .wcf--popup-video"), {
                        scaleY: 1,
                        opacity: 1,
                        visibility: "visible",
                        duration: .6
                    }, "-=0.4")
                })), t(document).on("click", ".wcf-anim-video-popup-".concat(o, " .wcf--popup-close"), (function() {
                    m(n, o), n = null
                })), t(document).on("click", ".wcf-anim-video-popup-".concat(o), (function(e) {
                    0 === t(e.target).closest(".wcf--popup-video").length && (m(n, o), n = null)
                }))
            }
        }))
    }))
}(jQuery);