document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart');
  
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        button.textContent = 'Added!';
        button.style.backgroundColor = '#2ecc71';
  
        setTimeout(() => {
          button.textContent = 'Add to Cart';
          button.style.backgroundColor = '#F39C12';
        }, 1000);
      });
    });
  });
  