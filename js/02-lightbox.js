import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const refs = {
    imageContainer: document.querySelector(".gallery"),
    body: document.body,
};

function makegalleryItems(items) {
    return items
        .map(({ preview, description, original }) => {
        return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `;
}).join("");
}

const cardgalleryMarkup = makegalleryItems(galleryItems);
refs.imageContainer.insertAdjacentHTML("beforeend", cardgalleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    scrollZoom: false,
});

lightbox.on("shown.simplelightbox", function () {
    refs.body.classList.add("disable-scroll");
});
lightbox.on("closed.simplelightbox", function () {
    refs.body.classList.remove("disable-scroll");
});