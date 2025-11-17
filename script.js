// select button
let btn = document.querySelector("button");
let main = document.querySelector("main");

// array
let text = ["Time is money.", "Health is wealth.", "Knowledge is power.", "Hope is the walking dream.", "Everything is possible.", "Always be positive.", "Believe in yourself.", "Work hard.", "Dream big.", "Do it.", "You cannot change what you refuse to confront.", "Sometimes good things fall apart so better things can fall together.", "Life is 10% of what happens to you and 90% of how you react to it.", "Making one person smile can change the world.", "Learn to appreciate the things you have before time forces you to appreciate the things you once had.", "Be persistent and never give up hope.", "There are no shortcuts to any place worth going.", "Always bear in mind that your own resolution to succeed is more important than any other.", "Be the change you want to see in the world.", "Just one small positive thought in the morning can change your whole day."];

// function
function randomText(val) {
  let h4 = document.createElement('h4');

  h4.innerHTML = `${text[val]}`;

  // random number
  let x = Math.floor(Math.random() * 100);
  let y = Math.floor(Math.random() * 100);
  let rotate = Math.floor(Math.random() * 360);
  let scale = Math.floor(Math.random() * 3);

  h4.style.position = 'absolute';
  h4.style.top = x + '%';
  h4.style.left = y + '%';
  h4.style.rotate = rotate + 'deg';
  h4.style.scale = scale;

  main.appendChild(h4);
}

// event listener
btn.addEventListener('click', () => {
  let textRandom = Math.floor(Math.random() * (text.length - 1));

  randomText(textRandom);
});
