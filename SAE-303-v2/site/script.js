 /*Pour la page d'accueil*/
 let anim = bodymovin.loadAnimation({
  container: document.getElementById("bm"),
  renderer: "svg",
  autoplay: true,
  loop: false,
  path: "./json/animAccueil.json",
});


/*Pour le camembert*/
LottieInteractivity.create({
  player: "#page2",
  mode: "scroll",
  loop: false,
  actions: [
    {
      visibility: [0.1, 0.2],
      type: "play",
    },
  ],
});

/*Le bus*/
let bus = document.querySelectorAll(".bus");
const businter = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.9,
};
const busconst = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.play();
    } else {
      entry.target.stop();
    }
  });
}, businter);

bus.forEach((select) => {
  busconst.observe(select);
});


/*La meduse*/
let meduse = bodymovin.loadAnimation({
  container: document.getElementById("meduse"),
  renderer: "svg",
  autoplay: true,
  loop: false,
  path: "./json/meduse.json",
});

let selects = document.querySelectorAll(".meduse");
const option = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.9,
};
const meduseconst = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.play();
    } else {
      entry.target.stop();
    }
  });
}, option);

selects.forEach((select) => {
  meduseconst.observe(select);
});

/*Pour l'avion*/
let avion = document.querySelectorAll(".avion");
const avioninter = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.8,
};

const avionconst = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.play();
    } else {
      entry.target.stop();
    }
  });
}, avioninter);

avion.forEach((element) => {
  avionconst.observe(element);
});

/*Pour l'avion*/
let terre = document.querySelectorAll(".terre");
const terreinter = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.8,
};

const terreconst = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.play();
    } 
  });
}, terreinter);

terre.forEach((element) => {
  terreconst.observe(element);
});