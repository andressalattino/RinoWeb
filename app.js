const items = [
  { type: "img", src: "img/transporte1.jpg" },
  { type: "video", src: "img/videoTransporte1.mp4" },
  { type: "img", src: "img/transporte3.jpg" },
  { type: "img", src: "img/transporte2.jpg" },
];

let index = 0;
const container = document.getElementById("carousel-container");

function showItem(i) {
  index = (i + items.length) % items.length;
  const item = items[index];

  if (item.type === "img") {
    container.innerHTML = `<img src="${item.src}" class="w-full h-80 object-cover rounded-lg shadow-md">`;
  } else if (item.type === "video") {
    container.innerHTML = `
        <video class="w-full h-80 object-cover rounded-lg shadow-md" autoplay loop muted controls>
          <source src="${item.src}" type="video/mp4">
        </video>`;
  }
}

function nextItem() {
  showItem(index + 1);
}
function prevItem() {
  showItem(index - 1);
}

// Mostrar primero
showItem(index);
