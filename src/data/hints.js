import { storage } from "../Storage";

const hints = [
  {
    id: 0,
    image: "/img/locked-icon.jpg",
    message: "Pista: Ciclo del agua",
    unlocked: true,
    solved: false,
    answer: "1",
  },
  {
    id: 1,
    image: "/img/locked-icon.jpg",
    message: "Pista: Animal",
    unlocked: false,
    solved: false,
    answer: "1",
  },
  {
    id: 2,
    image: "/img/locked-icon.jpg",
    message: "Si cada una pesa 2kg, ¿cuánto pesa todo?",
    unlocked: false,
    solved: false,
    answer: "1",
  },
  {
    id: 3,
    image: "/img/locked-icon.jpg",
    message: "Pista: Hay quien dice que es una fruta y quien dice que no lo es...",
    unlocked: false,
    solved: false,
    answer: "1",
  },
  {
    id: 4,
    image: "/img/locked-icon.jpg",
    message: "No clues, jajaja",
    unlocked: false,
    solved: false,
    answer: "1",
  },
  {
    id: 5,
    image: "/img/locked-icon.jpg",
    message: "Pista: Dicen que dan mucho miedo",
    unlocked: false,
    solved: false,
    answer: "1",
  },
  {
    id: 6,
    image: "/img/locked-icon.jpg",
    message: "Pista: Pequeño, no es...",
    unlocked: false,
    solved: false,
    answer: "1",
  },
  {
    id: 7,
    image: "/img/locked-icon.jpg",
    message: "Pista: Hay una en cada casa...",
    unlocked: false,
    solved: false,
    answer: "1",
  },
  {
    id: 8,
    image: "/img/locked-icon.jpg",
    message: "Pista: mmmmmmmmmmm...",
    unlocked: false,
    solved: false,
    answer: "1",
  }
];

const lockPassword = [
  {
    id: 0,
    color: "#FF0000",
    passKey: 7,
  },
  {
    id: 1,
    color: "#CC33CC",
    passKey: 2,
  },
  {
    id: 2,
    color: "#990099",
    passKey: 4,
  },
  {
    id: 3,
    color: "#0d411c",
    passKey: 9,
  },
  {
    id: 4,
    color: "#1d4e89",
    passKey: 6,
  },
];

const lockHint = {
  id: 0,
  image: "/img/locked-icon.jpg"
}

function initData() {
  if (!storage.get("hints")) {
    storage.set("hints", hints);
  }

  if (!storage.get("lockPassword")) {
    storage.set("lockPassword", lockPassword);
  }

  if (!storage.get("lockHint")) {
    storage.set("lockHint", lockHint);
  }
}

export default initData;
