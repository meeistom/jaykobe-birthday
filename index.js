console.log('If you see this you should tell me how handsome of a man I am.');

const partyBtn = document.getElementById('party-mode');
const boringBtn = document.getElementById('boring-mode');
const boring = document.getElementById('boring');
const party = document.getElementById('party');
console.log(boring)
console.log(party)

partyBtn.addEventListener('click', () => {
  boring.style.display = 'none';
  party.style.display = 'block';
});

boringBtn.addEventListener('click', () => {
  boring.style.display = 'block';
  party.style.display = 'none';
});