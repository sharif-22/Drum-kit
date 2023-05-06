// dom
const drumSetEl = document.querySelector(".drum-set");
const notificationEl = document.querySelector(".notification");

const drumSetElChild = drumSetEl.children;

let drumTypes = [
  { code: "KeyW", drumtype: "tom-1" },
  { code: "KeyA", drumtype: "tom-2" },
  { code: "KeyS", drumtype: "tom-3" },
  { code: "KeyD", drumtype: "tom-4" },
  { code: "KeyJ", drumtype: "snare" },
  { code: "KeyK", drumtype: "kick-bass" },
  { code: "KeyL", drumtype: "crash" },
];

// utillity function
function playDrum(file) {
  let audio = new Audio(`./assets/sounds/${file}.mp3`);
  audio.play();
}

// setting background image by programmatically

drumTypes.forEach((element, index) => {
  // console.log(element.drumtype, index);
  let style = drumSetElChild[index].style;
  style.backgroundImage = `url(./assets/images/${element.drumtype}.png)`;
});

// notifying user to use keyboard
if (document.body.scrollWidth >= 1280) {
  console.dir(notificationEl);
  // displaying notification in destop
  notificationEl.classList.remove("d-none");
  // removing notification later 5s
  setInterval(() => {
    notificationEl.classList.add("d-none");
  }, 5000);
}

// events

// click event
drumSetEl.addEventListener("click", (e) => {
  const target = e.target;
  if (target.tagName === "DIV") return;

  let soundFile = target.name;
  console.log("file name and name of el in html  ", soundFile);

  drumTypes.findIndex((element) => {
    // console.log(element.drumtype);
    if (soundFile === element.drumtype) {
      playDrum(element.drumtype);
    }
  });
});

// keyboard event
document.body.addEventListener("keydown", (e) => {
  let code = e.code;
  // console.log(code);
  drumTypes.findIndex((element) => {
    // console.log(element.code);
    if (code === element.code) {
      playDrum(element.drumtype);
    }
  });
});
