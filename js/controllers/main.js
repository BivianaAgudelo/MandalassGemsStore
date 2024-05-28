import { servicesProducts } from "../services/product-sevices.js";

const galeriaContainer = document.querySelector("[data-product]");
const form = document.querySelector("[data-form]");

function createCard(id, nombre_producto, precio, img) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `<div class="img_container">
                        <img src="${img}" alt="${nombre_producto}">
                    </div>
                    <div class="card_container_info">
                        <p>${nombre_producto}</p>
                        <div class="card_container_value">
                            <p>$ ${precio}</p>
                            <button class="boton_eliminar" data-id= "${id}">
                                <img src="./img/eliminar-carrito.png" alt="Eliminar">
                            </button>
                        </div>
                    </div>`;

  galeriaContainer.appendChild(card);
  return card;
}

const render = async () => {
  try {
    const listProducts = await servicesProducts.productList();
    listProducts.forEach((product) => {
      galeriaContainer.appendChild(
        createCard(product.id, product.nombre_producto, product.precio, product.img)
      );
    });
  } catch (error) {
    console.log(error);
  }
};

// Crear Producto en el formulario a dar click en el botón

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nombre_producto = document.querySelector("[data-name]").value;
    const precio = document.querySelector("[data-price]").value;
    const img = document.querySelector("[data-image]").value;

    try {
        await servicesProducts.createProducts(nombre_producto, precio, img);
        // Re-render the product list to include the new product
        galeriaContainer.innerHTML = ""; // Clear existing content
        render(); // Re-render the product list
    } catch (err) {
        console.log(err);
    }
});

render();
