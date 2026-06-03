document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    /* ─── WANNA KNOW MORE: Word-by-word ScrollTrigger reveal ─── */
    const words = gsap.utils.toArray(".wkm-word");

    gsap.to(words, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".wanna-know-more",
            start: "top 75%",
            end: "center 40%",
            scrub: false,
            toggleActions: "play none none reverse",
            onComplete: () => {
                document.querySelector(".wkm-heading").classList.add("revealed");
            }
        }
    });

    /* ─── Parallax depth on the wanna section ────────────────── */
    gsap.to(".wkm-inner", {
        y: -40,
        ease: "none",
        scrollTrigger: {
            trigger: ".wanna-know-more",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    /* ─── Open overlay when WKM section is clicked ─────────────── */
    const overlay    = document.getElementById("cardsOverlay");
    const closeBtn   = document.getElementById("overlayClose");
    const wannaSection = document.getElementById("wannaKnow");

    function openOverlay() {
        overlay.classList.remove("hidden");
        overlay.classList.add("visible");
        document.body.style.overflow = "hidden";
        gsap.fromTo(".flip-card",
            { opacity: 0, y: 60, scale: 0.88 },
            { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.15,
              ease: "back.out(1.7)" }
        );
    }

    function closeOverlay() {
        gsap.to(".flip-card", {
            opacity: 0, y: 40, scale: 0.9, duration: 0.35, stagger: 0.08,
            ease: "power2.in",
            onComplete: () => {
                overlay.classList.add("hidden");
                overlay.classList.remove("visible");
                document.body.style.overflow = "";
            }
        });
    }

    wannaSection.addEventListener("click", openOverlay);
    closeBtn.addEventListener("click", (e) => { e.stopPropagation(); closeOverlay(); });
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeOverlay();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeOverlay();
    });

    /* ─── Resume Card: 3D flip + PDF download ────────────────── */
    const resumeCard  = document.getElementById("resumeCard");
    const resumeInner = document.getElementById("resumeInner");
    let flipped = false;

    if (resumeCard) {
        resumeCard.addEventListener("click", () => {
            if (flipped) return;
            flipped = true;
            resumeInner.classList.add("flipped");

            // Trigger dummy PDF download after flip starts
            setTimeout(() => {
                const link = document.createElement("a");
                link.href = "resume.pdf"; // ← Replace with actual PDF path
                link.download = "Aamin_Singh_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }, 500);

            // Reset after 3 seconds so card can be clicked again
            setTimeout(() => {
                resumeInner.classList.remove("flipped");
                flipped = false;
            }, 3500);
        });
    }
});
