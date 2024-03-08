"use strict";

async function getData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error("Не удалось получить сведения из data.json");
    }
    const data = await response.json();
    const listBoxLeft = document.querySelector(".list-box__left");
    const listBoxRight = document.querySelector(".list-box__right");

    data.forEach(({ id, name, text }) => {
      const itemEl = `
                <div class="item">
                    <button class="plus"></button>
                    <p class="item__title">${name}</p>
                    <p class="item__text">${text}</p>
                </div>
            `;
      if (id < 4) {
        listBoxLeft.insertAdjacentHTML("beforeend", itemEl);
      } else {
        listBoxRight.insertAdjacentHTML("beforeend", itemEl);
      }
    });
    const items = document.querySelectorAll(".item");
    items.forEach((elem) => {
      elem.addEventListener("click", function (e) {
        if(e.target !== elem.lastElementChild) {
          if (elem.lastElementChild.classList.contains("show")) {
              elem.lastElementChild.classList.remove("show");
              elem.firstElementChild.classList.remove("close")
          } else {
              elem.lastElementChild.classList.add("show");
              elem.firstElementChild.classList.add("close");
          }
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
}

getData();
