//modalOverlay
const modalOverlay = document.querySelector(".modalOverlay");
const closeModelBtn = document.querySelector(".closeModelBtn");
const body = document.querySelector("body");

//show modal after a short delay
// const showModal = window.setTimeout(() => {
//   modalOverlay.classList.add("modalVisible");
// }, 4000);

//close modal when 'x' button clicked
closeModelBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("modalVisible");
});
//close modal if it's open and user clicks outside the modal
body.addEventListener("click", function (e) {
  const targetClassList = e.target.classList;
  if (targetClassList[0] === "modalOverlay") {
    modalOverlay.classList.remove("modalVisible");
  }
});
//modalOverlay end
///////////////////////////////////////////////
//photoGallery scroll start
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const imageItemOne = document.getElementById("imageItemOne");
const imageItemTwo = document.getElementById("imageItemTwo");
const imageItemThree = document.getElementById("imageItemThree");

let imageCounter = 0;

nextBtn.addEventListener("click", function () {
  if (imageCounter === 4) {
    imageCounter = 0;
  }
  slideImageForward();
});

prevBtn.addEventListener("click", function () {
  console.log(`i am button push ${imageCounter}`);
  if (imageCounter === 0) {
    imageCounter = 5;
  }
  slideImageBackward();
});

const slideImageForward = () => {
  imageItemThree.src = imageArray[imageCounter].src;
  imageItemTwo.src = imageArray[imageCounter + 1].src;
  imageItemOne.src = imageArray[imageCounter + 2].src;
  imageCounter++;
};
const slideImageBackward = () => {
  console.log(`slidebackward 1 ${imageCounter}`);
  imageItemThree.src = imageArray[imageCounter].src;
  imageItemTwo.src = imageArray[imageCounter - 1].src;
  imageItemOne.src = imageArray[imageCounter - 2].src;
  imageCounter--;
  console.log(`slide backward 2 ${imageCounter}`);
};

const imageArray = [
  {
    id: 1,
    src: "./assets/home-image-6.jpg",
    alt: "pink building exterior",
  },
  {
    id: 2,
    src: "./assets/home-image-7.jpg",
    alt: "airplane flying at sunset",
  },

  {
    id: 3,
    src: "https://picsum.photos/id/101/300/300",
    alt: "kitty placeholder",
  },
  {
    id: 4,
    src: "https://picsum.photos/id/1014/300/300",
    alt: "random placeholder",
  },
  {
    id: 5,
    src: "https://picsum.photos/id/1025/300/300",
    alt: "random placeholder",
  },
  {
    id: 6,
    src: "./assets/home-image-8.jpg",
    alt: "marble with pink and blue hue",
  },
];
