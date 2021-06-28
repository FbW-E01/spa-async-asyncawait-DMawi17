import "../styles/main.scss";
import "babel-polyfill";

const modal = document.getElementById("myModal");
let promiseOfModal = new Promise(function (resolve) {
    window.setTimeout(function () {
        resolve(modal);
    }, 1000 * 3);
});

async function toAsync() {
    const val = await promiseOfModal;
    console.log("User has been on the page for 60 seconds");
    val.style.display = "block";
}

toAsync();

const animation = document.getElementById("continue");

function atAnimCompletion() {
    return new Promise((resolve) => {
        animation.addEventListener("animationend", () => {
            animation.classList.add("btn-info");
            resolve("Continue to subscribe");
        });
    });
}

async function an() {
    await atAnimCompletion();
    alert("Continue to subscribe");
}
an();

modal.addEventListener("click", (e) => {
    switch (e.target.className) {
        case "close":
        case "modal":
            modal.style.display = "none";
            break;
    }
});
