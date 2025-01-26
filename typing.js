document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".typing-effect");
  const text = "Explore my work and projects here!!";
  const typingSpeed = 100; 
  const erasingSpeed = 50; 
  const delayBetweenLoops = 2000; 
  let index = 0;
  let isErasing = false;

  function typeText() {
    if (!isErasing && index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, typingSpeed);
    } else if (isErasing && index > 0) {
      textElement.textContent = text.substring(0, index - 1);
      index--;
      setTimeout(typeText, erasingSpeed);
    } else if (!isErasing && index === text.length) {
      setTimeout(() => {
        isErasing = true;
        typeText();
      }, delayBetweenLoops);
    } else if (isErasing && index === 0) {
      isErasing = false;
      setTimeout(typeText, typingSpeed);
    }
  }

  typeText(); 
});
