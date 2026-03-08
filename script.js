document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    /*
     * SCROLL SEQUENCE (hero stays PINNED the whole time):
     *
     * Phase 1  [pos  0 → 8 ] : Car drives in from far left → center screen
     * Phase 2  [pos  5 → 8 ] : Letters stagger up into the green band
     * Phase 3  [pos  8 → 13] : Car CONTINUES driving → exits completely off RIGHT
     * Phase 4  [pos  7 → 12] : Stat boxes pop in one by one (while car exits)
     * Phase 5  [pos 12 → 14] : Everything settled, user sees full hero
     */

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "+=3200",       // total scroll distance while pinned
            scrub: 1.4,
            pin: true,
            anticipatePin: 1,
        }
    });

    // ── PHASE 1: Car drives from off-screen LEFT to center ──────────
    tl.to("#carContainer", {
        x: "42vw",               // lands roughly at center
        duration: 8,
        ease: "power1.inOut"
    }, 0);

    // ── Scroll hint fades out immediately ───────────────────────────
    tl.to("#scrollHint", {
        opacity: 0,
        duration: 1.5
    }, 0);

    // ── PHASE 2: Letters stagger up while car is at center ──────────
    tl.to(".letter:not(.spacer)", {
        opacity: 1,
        y: 0,
        duration: 1.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
    }, 4.5);

    // ── PHASE 3: Car EXITS off-screen to the RIGHT ──────────────────
    tl.to("#carContainer", {
        x: "130vw",              // fully exits right edge
        duration: 7,
        ease: "power1.in"
    }, 7);

    // ── PHASE 4: Stat boxes appear one by one as car exits ──────────
    tl.to(".stat-box.orange", {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power2.out"
    }, 8);

    tl.to(".stat-box.blue", {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power2.out"
    }, 9);

    tl.to(".stat-box.yellow", {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power2.out"
    }, 10);

    tl.to(".stat-box.dark", {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power2.out"
    }, 11);

});