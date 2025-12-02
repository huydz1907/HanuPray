const huong_ani = document.getElementsByClassName('nhang')[0]

const khoi_ani = document.getElementsByClassName('khoi')[0]


const pass_ani = document.getElementsByClassName('pass')[0]
const pass_ani2 = document.getElementsByClassName('pass2')[0]
const pass_ani3 = document.getElementsByClassName('pass3')[0]
const pass_ani4 = document.getElementsByClassName('pass4')[0]
const pass_ani5 = document.getElementsByClassName('pass5')[0]
const sound = document.getElementsByClassName('play')[0]


const playButton = document.getElementById("nhangid")

playButton.addEventListener("click", () => khoi_ani.style.animationPlayState = "running")
playButton.addEventListener("click", () => huong_ani.style.animationPlayState = "running")
playButton.addEventListener("click", () => pass_ani.style.animationPlayState = "running")
playButton.addEventListener("click", () => pass_ani2.style.animationPlayState = "running")
playButton.addEventListener("click", () => pass_ani3.style.animationPlayState = "running")
playButton.addEventListener("click", () => pass_ani4.style.animationPlayState = "running")
playButton.addEventListener("click", () => pass_ani5.style.animationPlayState = "running")


playButton.addEventListener("click", () => sound.play())



