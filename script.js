"use strict";

const copyButton = document.querySelector("[data-copy-name]");
const copyLabel = document.querySelector("[data-copy-label]");
const copyStatus = document.querySelector("[data-copy-status]");
const copyIcon = copyButton?.querySelector(".copy-icon");

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const field = document.createElement("textarea");
  field.value = text;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  const copied = document.execCommand("copy");
  field.remove();

  if (!copied) {
    throw new Error("Copy command was not accepted.");
  }
}

copyButton?.addEventListener("click", async () => {
  const fullName = copyButton.dataset.copyText ?? "";

  try {
    await copyText(fullName);
    copyButton.classList.add("is-copied");
    copyLabel.textContent = "Designation copied";
    copyIcon.textContent = "✓";
    copyStatus.textContent = "Full MAGEWA designation copied to clipboard.";
  } catch {
    copyLabel.textContent = "Select and copy manually";
    copyStatus.textContent =
      "Automatic copy was unavailable. Select the designation above and copy it manually.";
  }

  window.setTimeout(() => {
    copyButton.classList.remove("is-copied");
    copyLabel.textContent = "Copy full designation";
    copyIcon.textContent = "⧉";
    copyStatus.textContent = "";
  }, 3200);
});

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reducedMotion && "IntersectionObserver" in window) {
  document.documentElement.classList.add("has-motion");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  document.querySelectorAll(".reveal").forEach((section) => {
    revealObserver.observe(section);
  });
}
