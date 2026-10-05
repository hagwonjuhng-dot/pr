// ==================== Configuration ====================
const COFFEE_CHAT_URL = "https://forms.gle/2pQrgPGiLNRxCCPE7"; // 구글 폼 URL을 여기에 입력하세요

// ==================== DOM Elements ====================
const header = document.getElementById("header");
const headerCta = document.getElementById("headerCta");
const mainCta = document.getElementById("mainCta");
const coffeechatLink = document.getElementById("coffeechat-link");
const stickyCta = document.getElementById("stickyCta");
const stickyCta_btn = document.getElementById("stickyCta-btn");
const toast = document.getElementById("toast");
const heroSection = document.getElementById("heroSection");
const aboutSection = document.getElementById("aboutSection");
const contentSection = document.getElementById("contentSection");
const ctaSection = document.getElementById("ctaSection");

// ==================== Utility Functions ====================
/**
 * Show toast notification
 */
function showToast(message, duration = 2000) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, duration);
}

/**
 * Handle coffee chat link click
 */
function handleCoffeeChatClick(e) {
  e.preventDefault();

  if (!COFFEE_CHAT_URL) {
    showToast("📅 커피챗 링크가 준비 중입니다. 잠시만 기다려주세요!");
    return;
  }

  window.open(COFFEE_CHAT_URL, "_blank");
}

/**
 * Intersection Observer for fade-up animation
 */
function observeSections() {
  const sections = [
    { element: aboutSection, id: "aboutSection" },
    { element: contentSection, id: "contentSection" },
    { element: ctaSection, id: "ctaSection" }
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-up");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach(({ element }) => {
    if (element) {
      observer.observe(element);
    }
  });
}

/**
 * Handle header shadow and sticky CTA visibility on scroll
 */
function handleScroll() {
  const scrollY = window.scrollY;
  const heroHeight = heroSection.offsetHeight;

  // Add shadow to header when scrolled
  if (scrollY > 5) {
    header.classList.add("shadow");
  } else {
    header.classList.remove("shadow");
  }

  // Show sticky CTA after hero section
  if (scrollY > heroHeight - 200) {
    stickyCta.classList.add("show");
  } else {
    stickyCta.classList.remove("show");
  }
}

// ==================== Event Listeners ====================
// Coffee chat buttons
headerCta.addEventListener("click", handleCoffeeChatClick);
mainCta.addEventListener("click", handleCoffeeChatClick);
stickyCta_btn.addEventListener("click", handleCoffeeChatClick);
coffeechatLink.addEventListener("click", handleCoffeeChatClick);

// Scroll events
window.addEventListener("scroll", handleScroll, { passive: true });

// ==================== Initialization ====================
document.addEventListener("DOMContentLoaded", () => {
  // Add fade-up animation to hero section immediately
  heroSection.classList.add("fade-up");

  // Observe sections for animation
  observeSections();

  // Initial scroll check
  handleScroll();

  // Show welcome toast on page load
  setTimeout(() => {
    showToast("👋 AI 협업의 세계에 오신 것을 환영합니다!");
  }, 300);
});

// ==================== Responsive Touch Feedback ====================
// Add subtle touch feedback for card interactions
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("touchstart", () => {
    card.style.opacity = "0.95";
  });

  card.addEventListener("touchend", () => {
    card.style.opacity = "1";
  });
});

// ==================== Prefetch Links ====================
// Prefetch coffee chat link for faster navigation
if (COFFEE_CHAT_URL) {
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.href = COFFEE_CHAT_URL;
  document.head.appendChild(link);
}
