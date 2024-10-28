const heartsContainer = document.querySelector('.hearts-container');

function createFloatingElement() {
  // Randomly choose to create a heart or the "I ❤️ You" text
  const isHeart = Math.random() > 0.3;
  
  if (isHeart) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.width = `${Math.random() * 10 + 10}px`;
    heart.style.height = heart.style.width;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);

  } else {
    const loveText = document.createElement('div');
    loveText.classList.add('love-text');
    loveText.textContent = "Je t'aime Boo ❤️";
    loveText.style.left = `${Math.random() * 100}vw`;
    loveText.style.animationDuration = `${Math.random() * 2 + 3}s`;

    heartsContainer.appendChild(loveText);

    setTimeout(() => {
      loveText.remove();
    }, 5000);
  }
}

// Create floating hearts and text at intervals
setInterval(createFloatingElement, 300);
