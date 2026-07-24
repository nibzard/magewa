"use strict";

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const motionGroups = [
  ".rules-grid .rule-card",
  ".lexicon-table .lexicon-row:not(.lexicon-row-head)",
  ".pipeline-strip > div",
  ".capability-grid .capability-card",
  ".decisions-grid .decision-card",
];

const motionItems = [];
const spotlightGroups = [];

motionGroups.forEach((selector) => {
  const group = [...document.querySelectorAll(selector)];

  group.forEach((item, index) => {
    item.classList.add("motion-item");
    item.style.setProperty("--motion-delay", `${Math.min(index, 6) * 55}ms`);
    motionItems.push(item);
  });

  spotlightGroups.push(group);
});

const tapOnlyItems = [
  ...document.querySelectorAll(".acronym-register .acronym-cell"),
];
const pressableItems = [...motionItems, ...tapOnlyItems];
pressableItems.forEach((item) => item.classList.add("motion-pressable"));

const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const coarsePointer = window.matchMedia("(hover: none), (pointer: coarse)");
const supportsIntersectionObserver = "IntersectionObserver" in window;
const hero = document.querySelector(".hero");
const navEntries = [...document.querySelectorAll(".site-header nav a")]
  .map((link) => {
    const hash = new URL(link.href, document.baseURI).hash;
    const target = hash ? document.querySelector(hash) : undefined;
    return target ? { link, target } : undefined;
  })
  .filter(Boolean);

let revealObserver;
let itemRevealObserver;
let spotlightFrame;
let spotlightEnabled = false;
let heroMotionObserver;
let heroInView = true;
let navFrame;

function showAllMotionContent() {
  document.documentElement.classList.remove("has-motion");
  document.querySelectorAll(".reveal").forEach((section) => {
    section.classList.add("is-visible");
  });
  motionItems.forEach((item) => item.classList.add("is-revealed"));
}

function configureRevealMotion() {
  revealObserver?.disconnect();
  itemRevealObserver?.disconnect();

  if (motionPreference.matches || !supportsIntersectionObserver) {
    showAllMotionContent();
    return;
  }

  document.documentElement.classList.add("has-motion");

  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  itemRevealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -4% 0px", threshold: 0.12 },
  );

  document.querySelectorAll(".reveal:not(.is-visible)").forEach((section) => {
    revealObserver.observe(section);
  });

  motionItems
    .filter((item) => !item.classList.contains("is-revealed"))
    .forEach((item) => itemRevealObserver.observe(item));
}

function configureMobileSpotlight() {
  if (spotlightEnabled) {
    window.removeEventListener("scroll", scheduleSpotlightUpdate);
    window.removeEventListener("resize", scheduleSpotlightUpdate);
    window.visualViewport?.removeEventListener("resize", scheduleSpotlightUpdate);
    spotlightEnabled = false;
  }

  window.cancelAnimationFrame(spotlightFrame);
  spotlightFrame = undefined;
  clearSpotlights();

  if (
    motionPreference.matches ||
    !coarsePointer.matches
  ) {
    return;
  }

  spotlightEnabled = true;
  window.addEventListener("scroll", scheduleSpotlightUpdate, { passive: true });
  window.addEventListener("resize", scheduleSpotlightUpdate);
  window.visualViewport?.addEventListener("resize", scheduleSpotlightUpdate);
  scheduleSpotlightUpdate();
}

function clearSpotlights() {
  motionItems.forEach((item) => item.classList.remove("is-spotlit"));
}

function updateMobileSpotlight() {
  spotlightFrame = undefined;

  if (!spotlightEnabled) return;

  const viewportHeight = window.innerHeight;
  const readingLine = viewportHeight * 0.52;
  const activationTop = viewportHeight * 0.3;
  const activationBottom = viewportHeight * 0.74;

  spotlightGroups.forEach((group) => {
    const measurements = group
      .map((item) => {
        const rect = item.getBoundingClientRect();
        return {
          item,
          center: rect.top + rect.height / 2,
          overlapsBand:
            rect.bottom >= activationTop && rect.top <= activationBottom,
        };
      })
      .filter((measurement) => measurement.overlapsBand);

    if (measurements.length === 0) {
      group.forEach((item) => item.classList.remove("is-spotlit"));
      return;
    }

    const winner = measurements.reduce((closest, measurement) => {
      const distance = Math.abs(measurement.center - readingLine);
      if (!closest || distance < closest.distance) {
        return { center: measurement.center, distance };
      }
      return closest;
    }, undefined);

    group.forEach((item) => {
      const measurement = measurements.find((entry) => entry.item === item);
      const sharesWinningRow =
        measurement && Math.abs(measurement.center - winner.center) <= 12;
      item.classList.toggle("is-spotlit", Boolean(sharesWinningRow));
    });
  });
}

function scheduleSpotlightUpdate() {
  if (spotlightFrame !== undefined) return;
  spotlightFrame = window.requestAnimationFrame(updateMobileSpotlight);
}

function updateCurrentNav() {
  navFrame = undefined;
  const readingLine = window.innerHeight * 0.32;
  const passedTargets = navEntries
    .map((entry) => ({
      ...entry,
      top: entry.target.getBoundingClientRect().top,
    }))
    .filter((entry) => entry.top <= readingLine)
    .sort((a, b) => a.top - b.top);
  const current = passedTargets.at(-1);

  navEntries.forEach(({ link }) => {
    const isCurrent = link === current?.link;
    link.classList.toggle("is-current", isCurrent);
    if (isCurrent) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function scheduleCurrentNavUpdate() {
  if (navFrame !== undefined) return;
  navFrame = window.requestAnimationFrame(updateCurrentNav);
}

function syncMotionSystem() {
  configureRevealMotion();
  configureMobileSpotlight();
}

function syncHeroMotion() {
  hero?.classList.toggle(
    "is-motion-paused",
    document.hidden || motionPreference.matches || !heroInView,
  );
}

if (hero && supportsIntersectionObserver) {
  heroMotionObserver = new IntersectionObserver(
    ([entry]) => {
      heroInView = entry.isIntersecting;
      syncHeroMotion();
    },
    { rootMargin: "120px 0px", threshold: 0 },
  );
  heroMotionObserver.observe(hero);
}

function listenForPreferenceChange(mediaQuery, listener) {
  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", listener);
    return;
  }

  mediaQuery.addListener(listener);
}

listenForPreferenceChange(motionPreference, () => {
  syncMotionSystem();
  syncHeroMotion();
});
listenForPreferenceChange(coarsePointer, configureMobileSpotlight);
document.addEventListener("visibilitychange", syncHeroMotion);
window.addEventListener("scroll", scheduleCurrentNavUpdate, { passive: true });
window.addEventListener("resize", scheduleCurrentNavUpdate);
window.addEventListener("hashchange", scheduleCurrentNavUpdate);
window.addEventListener("load", scheduleCurrentNavUpdate);
syncMotionSystem();
syncHeroMotion();
scheduleCurrentNavUpdate();
window.setTimeout(scheduleCurrentNavUpdate, 120);

let pressedItem;
let pendingPressedItem;
let pressedTimer;
let pressedPointerId;
let pressedOrigin;

function clearPressedItems() {
  window.clearTimeout(pressedTimer);
  pressedItem?.classList.remove("is-pressed");
  pendingPressedItem?.classList.remove("is-pressed");
  pressedItem = undefined;
  pendingPressedItem = undefined;
  pressedPointerId = undefined;
  pressedOrigin = undefined;
}

function releasePressedItem(delay = 0) {
  const item = pressedItem;
  if (!item) return;

  pressedItem = undefined;
  pressedPointerId = undefined;
  pressedOrigin = undefined;

  if (delay === 0) {
    item.classList.remove("is-pressed");
    return;
  }

  pendingPressedItem = item;
  pressedTimer = window.setTimeout(() => {
    pendingPressedItem?.classList.remove("is-pressed");
    pendingPressedItem = undefined;
  }, delay);
}

document.addEventListener(
  "pointerdown",
  (event) => {
    if (!coarsePointer.matches) return;

    const item = event.target.closest(".motion-pressable");
    if (!item) return;

    clearPressedItems();
    pressedItem = item;
    pressedPointerId = event.pointerId;
    pressedOrigin = { x: event.clientX, y: event.clientY };
    item.classList.add("is-pressed");
  },
  { passive: true },
);

document.addEventListener(
  "pointermove",
  (event) => {
    if (
      !pressedItem ||
      event.pointerId !== pressedPointerId ||
      !pressedOrigin
    ) {
      return;
    }

    const distance = Math.hypot(
      event.clientX - pressedOrigin.x,
      event.clientY - pressedOrigin.y,
    );

    if (distance > 8) releasePressedItem();
  },
  { passive: true },
);

document.addEventListener(
  "pointerup",
  (event) => {
    if (event.pointerId !== pressedPointerId) return;
    releasePressedItem(520);
  },
  { passive: true },
);

document.addEventListener(
  "pointercancel",
  () => {
    releasePressedItem();
  },
  { passive: true },
);

window.addEventListener("pagehide", () => {
  revealObserver?.disconnect();
  itemRevealObserver?.disconnect();
  heroMotionObserver?.disconnect();
  window.removeEventListener("scroll", scheduleCurrentNavUpdate);
  window.removeEventListener("resize", scheduleCurrentNavUpdate);
  window.removeEventListener("hashchange", scheduleCurrentNavUpdate);
  window.removeEventListener("load", scheduleCurrentNavUpdate);
  if (spotlightEnabled) {
    window.removeEventListener("scroll", scheduleSpotlightUpdate);
    window.removeEventListener("resize", scheduleSpotlightUpdate);
    window.visualViewport?.removeEventListener("resize", scheduleSpotlightUpdate);
  }
  clearPressedItems();
});

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    syncMotionSystem();
    heroMotionObserver?.observe(hero);
    syncHeroMotion();
    window.addEventListener("scroll", scheduleCurrentNavUpdate, {
      passive: true,
    });
    window.addEventListener("resize", scheduleCurrentNavUpdate);
    window.addEventListener("hashchange", scheduleCurrentNavUpdate);
    window.addEventListener("load", scheduleCurrentNavUpdate);
  }
  scheduleCurrentNavUpdate();
});
