const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
const galleryContainer = document.querySelector(".gallery");
for (const image of images) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery-item");
  galleryItem.innerHTML = `
    <a class="gallery-link" href="${image.original}">
      <img
        class="gallery-image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </li>`;
  galleryContainer.appendChild(galleryItem);
}

const lightbox = document.querySelectorAll(".gallery-link");
lightbox.forEach((link, index) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    let currentIndex = index;
    const instance = basicLightbox.create(
      `<div class="lightbox-content">
      <button class="nav-arrow prev-arrow" id="prevBtn">&#10094;</button>
      <img class="lightbox-image" 
      src="${images[currentIndex].original}"  width="1100" height="820"
      alt="${images[currentIndex].description}"
      />
      <button class="nav-arrow next-arrow" id="nextBtn">&#10095;</button>
    `,
      {
        closable: false,
        onShow: (instance) => {
          const prevBtn = instance.element().querySelector("#prevBtn");
          const nextBtn = instance.element().querySelector("#nextBtn");

          prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            const lightboxImage = instance.element().querySelector(
              ".lightbox-image",
            );
            lightboxImage.src = images[currentIndex].original;
            lightboxImage.alt = images[currentIndex].description;
          });

          nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            const lightboxImage = instance.element().querySelector(
              ".lightbox-image",
            );
            lightboxImage.src = images[currentIndex].original;
            lightboxImage.alt = images[currentIndex].description;
          }); 
          const handleKeyDown = (event) => {
            if (event.key === "Escape") {
              instance.close();
              document.removeEventListener("keydown", handleKeyDown);
            }
          };
          document.addEventListener("keydown", handleKeyDown);
        },
      },
    );
    instance.show();
  });
});