const gameItems = document.querySelectorAll('.game-item');

  gameItems.forEach(gameItem => {
    gameItem.addEventListener('mouseover', () => {
      console.log(gameItem.childNodes[1].classList)
      gameItem.childNodes[1].classList.add('image-blur');
    });

    gameItem.addEventListener('mouseout', () => {
      console.log(gameItem.childNodes[1].classList)
      gameItem.childNodes[1].classList.remove('image-blur');
    });
  });
