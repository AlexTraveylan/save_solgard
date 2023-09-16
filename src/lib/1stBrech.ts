import { BrechImage, ConfirmedBrechs } from "./type"

const image1: BrechImage = {
  alt: "1st hit",
  url: "/image1.png",
  description: "Make some dommage to the boss, and scan memories slots with this number.\nHere i found 118291 memories slots with this number.",
}

const image2: BrechImage = {
  alt: "second hit",
  url: "/image2.png",
  description: "Evolve the score, then search again memories slots evolved from old score to new score.\nOnly 4 slot found.",
}

const image3: BrechImage = {
  alt: "changing variable",
  url: "/image3.png",
  description:
    "Now you can try modify the score variable to want you want, 20000 for example.\nOnly 4 possibilities, its will not take a lot of time.",
}

const image4: BrechImage = {
  alt: "application in other mode",
  url: "/image5.png",
  description:
    "You can do that in every not secured variables, like poison, or fire in boss guild.\nBut i guess you can find for vulnerables variables you can set.",
}

export const firstcConfirmedBrech: ConfirmedBrechs = {
  title: "Vulnerables variables",
  description:
    "A lot of variables in the game are vulnerables, cause the are variables, when are you playing, they evolves during the game.\nYou can scan memories slots for modify them with open source easy to find free sofwares.",
  images: [image1, image2, image3, image4],
  solution:
    "Modify this variables to be constants.\nFor exemple if you hit twice, the unique variable score, before score = score + hit_1, then score = score + hit_2.\nFix that with a list, score will be [hit_1, hit_2], eatch hit will be in constants different memories slots, they cant be found cause they will not evolve, like the 118k possibilities i found with the 1st scan.",
}
