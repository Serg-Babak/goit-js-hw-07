import { galleryItems } from './gallery-items.js';
// Change code below this line


const galeryList = document.querySelector('.gallery');
const makeGaleryList = galleryItems.map((galleryItem) =>
`<li> <img class=gallery__image src=${galleryItem.preview} alt=${galleryItem.description} width="354" height="240"> </li>`)
.join("");
galeryList.style.listStyle = 'none';

galeryList.insertAdjacentHTML("beforeend", makeGaleryList) ; 
console.log(galleryItems);

document.querySelector('li').onclick = () => {

	basicLightbox.create(`
    <li> <img width="1400" height="900" src=${galleryItems.original}></li>
	`)
    .show()

}

{/* <div class="gallery__item">
        <a class="gallery__link" href="${galleryItems.original}">
    <img
        class="gallery__image"
        src="${galleryItem.preview}"
        data-source="${galleryItem.original}"
        alt="${galleryItem.description}"
        width="354" height="240"
    />
        </a>
</div> */}


// const instance = basicLightbox.create(`
// <div class="gallery__item">
//     <a class="gallery__link" href="large-image.jpg">
//     <img
//         class="gallery__image"
//         src=${galleryItem.preview}
//         data-source="large-image.jpg"
//         alt=${galleryItem.description}
//     />
//     </a>
// </div>
// `)
// instance.show()