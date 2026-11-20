const proposal = document.getElementById('proposal');
const success = document.getElementById('success');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

yesButton.addEventListener('click', () => {
  proposal.classList.add('hidden');
  success.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// The No button dodges the pointer on desktop and touch attempts on phones.
function moveNoButton() {
  const card = proposal.getBoundingClientRect();
  const button = noButton.getBoundingClientRect();
  const maxX = Math.max(0, card.width - button.width - 24);
  const maxY = Math.max(0, card.height - button.height - 24);
  const x = Math.random() * maxX - maxX / 2;
  const y = Math.random() * Math.min(maxY, 100) - Math.min(maxY, 100) / 2;
  noButton.style.transform = `translate(${x}px, ${y}px)`;
}
noButton.addEventListener('pointerenter', moveNoButton);
noButton.addEventListener('touchstart', (event) => {
  event.preventDefault();
  moveNoButton();
}, { passive: false });
noButton.addEventListener('click', moveNoButton);
