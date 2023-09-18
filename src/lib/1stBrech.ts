import { BreachImage, ConfirmedBreachs } from "./type"

const image1: BreachImage = {
  alt: "1st hit",
  url: "/image1.png",
  description: "Inflict some damage to the boss and scan memory slots with this number.\nHere, I found 118,291 memory slots with this number.",
}

const image2: BreachImage = {
  alt: "second hit",
  url: "/image2.png",
  description:
    "Elevate the score by defeating the boss again, then search for memory slots that have evolved from the old score to the new one.\nI found only 4 matching memory slots.",
}

const image3: BreachImage = {
  alt: "changing variable",
  url: "/image3.png",
  description:
    "Now you can try to modify the score variable as you wish, for example, to 20000.\nThere are only 4 possibilities, so it won't take much time.",
}

const image4: BreachImage = {
  alt: "application in other mode",
  url: "/image5.png",
  description:
    "You can do this for all the unsecured variables, such as poison or fire in the guild boss mode.\nI imagine you can find more by searching a bit.",
}

export const firstcConfirmedBrech: ConfirmedBreachs = {
  title: "Vulnerables variables",
  description:
    "Many variables in the game are vulnerable because they are variables that evolve as you play the game.\nYou can scan memory slots to modify them using open-source, easy-to-find free software",
  images: [image1, image2, image3, image4],
  solution:
    "Modify these variables to be constants.\nFor example, if you hit twice, the unique variable 'score' first with 'score = score + hit_1,' and then 'score = score + hit_2.'\nFix this by using a list.\n'score' will become [hit_1, hit_2].\nEach hit will be stored in different memory slots as constants, making them untraceable because they won't evolve, unlike the 118k possibilities I found with the first scan.",
}
