const paragraph = document.querySelector("p");
const cursorButton = document.querySelector(".circle");

const getDetails = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  const newAdvice = `<div>
    <p>${data.slip.advice}</p>
    <p>${data.slip.id}</p>
  </div>`;

  paragraph.innerHTML = newAdvice;
};

cursorButton.addEventListener("click", () => {
  getDetails();
});

getDetails();
