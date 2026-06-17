// intialization plugins
$(document).ready(function () {

    //animation icon toggler of navbar
    $(`.navbar-toggler`).click(function() {
        $(`.navbar-toggler`).toggleClass(`active`);
    });


    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true
    });

});


// Mouse 
$(document).ready(function () {

    const mouse = document.querySelector(".mouse");

    if (!mouse) return;

    const xSetter = gsap.quickSetter(mouse, "x", "px");
    const ySetter = gsap.quickSetter(mouse, "y", "px");

    document.addEventListener("mousemove", (e) => {
        xSetter(e.clientX);
        ySetter(e.clientY);
    });

    $(".link").hover(
        function () {
            $(".mouse").addClass("mouse-link");
        },
        function () {
            $(".mouse").removeClass("mouse-link");
        }
    );

});

// GSAP 
$(document).ready(function () {

    gsap.registerPlugin(
        ScrollTrigger,
        ScrollSmoother,
        SplitText
    );


    const  smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
        normalizeScroll: false
    });

    ScrollTrigger.refresh();

    function initCinematicCrop() {

        const sections = gsap.utils.toArray(".cinematic-crop");

        if (!sections.length) return;

        gsap.from(sections, {
            clipPath: "inset(0 0 100% 0)",
            duration: 1,
            ease: "power4.inOut"
        });

        const backgrounds = gsap.utils.toArray(".cinematic-crop .bg");

        if (backgrounds.length) {

            gsap.from(backgrounds, {
                scale: 1.35,
                duration: 2.5,
                ease: "power2.out"
            });

        }

    }
    initCinematicCrop();


    function initDeckSpread() {

        const cards = gsap.utils.toArray(".deck-spread");

        if (!cards.length) return;

        gsap.set(cards, {
            x: -150,
            opacity: 0
        });

        gsap.to(cards, {
            x: 0,
            opacity: 1,
            duration: 1.4,
            stagger: .08,
            ease: "expo.out",
            scrollTrigger: {
                trigger: cards[0],
                start: "top 85%"
            }
        });

    }
    initDeckSpread();



    function initAboutImage() {

        const imgBox = document.querySelector(".img_box");

        if (!imgBox) return;

        const frame = imgBox.querySelector(".frame-bg");
        const image = imgBox.querySelector(".secImg");

        if (frame) {

            gsap.to(frame, {
                rotate: -3,
                duration: 1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: imgBox,
                    start: "top 75%",
                    toggleActions: "play none none none"
                }
            });

        }

        if (image) {

            gsap.fromTo(image,
                {
                    scale: .8
                },
                {
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: imgBox,
                        start: "top 100%",
                        end: "bottom 0%",
                        scrub: 1
                    }
                }
            );

        }

    }
    initAboutImage();

    function initFadeInUp() {

        const items = gsap.utils.toArray(".fadeInUp");

        if (!items.length) return;

        items.forEach(item => {

            gsap.from(item, {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%"
                }
            });

        });

    }
    initFadeInUp();

    function initFadeInDown() {

        const items = gsap.utils.toArray(".fadeInDown");

        if (!items.length) return;

        items.forEach(item => {

            gsap.from(item, {
                y: -60,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%"
                }
            });

        });

    }
    initFadeInDown();

    function initZoomIn() {

        const items = gsap.utils.toArray(".zoomIn");

        if (!items.length) return;

        items.forEach(item => {

            gsap.from(item, {
                scale: .5,
                opacity: 0,
                duration: .8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%"
                }
            });

        });

    }
    initZoomIn();

    function initSlideRTL() {

        const items = gsap.utils.toArray(".slide_rtl");

        if (!items.length) return;

        items.forEach(item => {

            gsap.from(item, {
                x: -60,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%"
                }
            });

        });

    }
    initSlideRTL();

    function initSlideLTR() {

        const items = gsap.utils.toArray(".slide_ltr");

        if (!items.length) return;

        items.forEach(item => {

            gsap.from(item, {
                x: 60,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%"
                }
            });

        });

    }
    initSlideLTR();

    function initTextFocusIn() {

        const items = gsap.utils.toArray(".text-focus-in");

        if (!items.length) return;

        items.forEach(item => {

            gsap.from(item, {
                filter: "blur(12px)",
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%"
                }
            });

        });

    }
    initTextFocusIn();

    function initWordWeave() {

        const items = gsap.utils.toArray(".word-weave");

        if (!items.length) return;

        items.forEach((item) => {

            const split = SplitText.create(item, {
                type: "words"
            });

            gsap.from(split.words, {
                yPercent: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.05,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    once: true
                },
                onComplete: () => split.revert()
            });

        });

    }
    initWordWeave();
    

    function initCheckCascade() {

        const items = gsap.utils.toArray(".check-cascade li");

        if (!items.length) return;

        gsap.from(items, {
            x: 40,
            opacity: 0,
            scale: 0.95,
            duration: 0.9,
            stagger: 0.12,
            ease: "expo.out",
            scrollTrigger: {
                trigger: items[0],
                start: "top 85%"
            }
        });

    }
    initCheckCascade();


    function initGridWave() {

        const cards = gsap.utils.toArray(".grid-wave");

        if (!cards.length) return;

        const positions = [
            { x: -120, y: -60 },
            { y: -80 },
            { x: 120, y: -60 },

            { x: 120, y: 60 },
            { y: 80 },
            { x: -120, y: 60 }
        ];

        cards.forEach((card, index) => {

            gsap.from(card, {
                ...positions[index % positions.length],
                scale: 0.85,
                opacity: 0,
                duration: 0.8,
                ease: "expo.out",
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%"
                }
            });

        });

    }
    initGridWave() ;

    function initHeadlineFocus() {

        const heads = gsap.utils.toArray(".headline-focus");

        if (!heads.length) return;

        heads.forEach((head) => {

            const badge = head.querySelector(".badge");
            const title = head.querySelector("h2");
            const text = head.querySelector(".p");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: head,
                    start: "top 85%",
                    once: true
                }
            });

            if (badge) {

                tl.from(badge, {
                    scale: 0.5,
                    opacity: 0,
                    duration: 0.5,
                    ease: "back.out(2)"
                });

            }

            if (title) {

                tl.from(title, {
                    y: 60,
                    rotateX: -70,
                    transformOrigin: "50% 100%",
                    opacity: 0,
                    duration: 1,
                    ease: "expo.out"
                }, "-=.2");

            }

            if (text) {

                tl.from(text, {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                }, "-=.5");

            }

        });

    }
    initHeadlineFocus();    

    function initCascadeReveal() {

        const items = gsap.utils.toArray(".cascade-reveal");

        if (!items.length) return;

        gsap.from(items, {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
                trigger: items[0],
                start: "top 85%"
            }
        });

    }
    initCascadeReveal();

    function initSpotlightRise() {

        const sections = gsap.utils.toArray(".spotlight-rise");

        if (!sections.length) return;

        sections.forEach(section => {

            const bg = section.querySelector(".bg");

            if (!bg) return;

            gsap.fromTo(
                bg,
                {
                    scale: 1.15
                },
                {
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );

        });

    }
    initSpotlightRise();

    function initImageZoomScroll() {

        const sections = gsap.utils.toArray(".image-zoom-scroll");

        if (!sections.length) return;

        sections.forEach(section => {

            const image = section.querySelector(".secImg");

            if (!image) return;

            gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "-600 top",
                    scrub: true
                }
            }).to(image, {
                x: 0,
                y: 0,
                scale: 1.3,
                ease: "none"
            });

        });

    }
    initImageZoomScroll() ;

    function initStepCardReveal() {

        const cards = gsap.utils.toArray(".step_card");

        if (!cards.length) return;

        cards.forEach((card) => {

            const num = card.querySelector(".num");
            const icon = card.querySelector(".icon_box");
            const title = card.querySelector("h4");
            const text = card.querySelector(".p");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    once: true
                }
            });

            // Card
            tl.from(card, {
                y: 30,
                opacity: 0,
                duration: .5,
                ease: "power2.out"
            });

            // Number
            tl.from(num, {
                scale: 0,
                rotate: -30,
                duration: .45,
                ease: "back.out(2.2)"
            }, "-=.25");

            // Icon
            tl.from(icon, {
                y: 15,
                opacity: 0,
                scale: .8,
                duration: .35,
                ease: "power2.out"
            }, "+=.05");

            // Title
            tl.from(title, {
                y: 12,
                opacity: 0,
                duration: .3,
                ease: "power2.out"
            }, "+=.05");

            // Text
            tl.from(text, {
                y: 12,
                opacity: 0,
                duration: .3,
                ease: "power2.out"
            }, "-=.15");

        });

    }
    initStepCardReveal() ;


});
