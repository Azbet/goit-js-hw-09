var e=[{preview:`https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg`,original:`https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg`,description:`Hokkaido Flower`},{preview:`https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg`,original:`https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg`,description:`Container Haulage Freight`},{preview:`https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg`,original:`https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg`,description:`Aerial Beach View`},{preview:`https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg`,original:`https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg`,description:`Flower Blooms`},{preview:`https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg`,original:`https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg`,description:`Alpine Mountains`},{preview:`https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg`,original:`https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg`,description:`Mountain Lake Sailing`},{preview:`https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg`,original:`https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg`,description:`Alpine Spring Meadows`},{preview:`https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg`,original:`https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg`,description:`Nature Landscape`},{preview:`https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg`,original:`https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg`,description:`Lighthouse Coast Sea`}],t=document.querySelector(`.gallery`);for(let n of e){let e=document.createElement(`li`);e.classList.add(`gallery-item`),e.innerHTML=`
    <a class="gallery-link" href="${n.original}">
      <img
        class="gallery-image"
        src="${n.preview}"
        data-source="${n.original}"
        alt="${n.description}"
      />
    </a>
  </li>`,t.appendChild(e)}document.querySelectorAll(`.gallery-link`).forEach((t,n)=>{t.addEventListener(`click`,t=>{t.preventDefault();let r=n;basicLightbox.create(`<div class="lightbox-content">
      <button class="nav-arrow prev-arrow" id="prevBtn">&#10094;</button>
      <img class="lightbox-image" 
      src="${e[r].original}"  width="1100" height="820"
      alt="${e[r].description}"
      />
      <button class="nav-arrow next-arrow" id="nextBtn">&#10095;</button>
    `,{closable:!1,onShow:t=>{let n=t.element().querySelector(`#prevBtn`),i=t.element().querySelector(`#nextBtn`);n.addEventListener(`click`,()=>{r=(r-1+e.length)%e.length;let n=t.element().querySelector(`.lightbox-image`);n.src=e[r].original,n.alt=e[r].description}),i.addEventListener(`click`,()=>{r=(r+1)%e.length;let n=t.element().querySelector(`.lightbox-image`);n.src=e[r].original,n.alt=e[r].description});let a=e=>{e.key===`Escape`&&(t.close(),document.removeEventListener(`keydown`,a))};document.addEventListener(`keydown`,a)}}).show()})});