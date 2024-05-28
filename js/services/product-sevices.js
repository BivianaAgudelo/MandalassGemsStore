const productList = () => {
    return fetch("http://localhost:3000/productos")
            .then((res) => res.json())
            .catch((err) => console.log(err));
}

const createProducts = (nombre_producto, precio, img) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nombre_producto,
            precio,
            img,
        })
    }).then((res) => res.json())
      .catch((err) => console.log(err));
}

export const servicesProducts = {
    productList,
    createProducts,
}