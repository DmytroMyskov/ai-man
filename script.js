const promoStrip = document.getElementById('jsPromoStrip');
const promoItems = promoStrip.querySelectorAll('.promo-item');
const scrollSpeed = 0.5;

let currentScrollPos = 0;
let promoStripWidth = 0;

function duplicateContent() {
  promoItems.forEach(item => {
    const clone = item.cloneNode(true);
    promoStrip.appendChild(clone);
  });
  promoStripWidth = promoStrip.scrollWidth / 2;
}

duplicateContent();

function animateScroll() {
  currentScrollPos -= scrollSpeed;

  if (Math.abs(currentScrollPos) >= promoStripWidth) {
    currentScrollPos = 0;
  }

  promoStrip.style.transform = `translateX(${currentScrollPos}px)`;

  requestAnimationFrame(animateScroll);
}

animateScroll();