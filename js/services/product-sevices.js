const productList = () => {
    return fetch("http://localhost:3000/productos")
            .then((res) => res.json())
            .catch((err) => console.log(err));
}

// Creación de un nuevo producto con un ID consecutivo

const createProducts = async (nombre_producto, precio, img) => {
    try {
        // Obtener la lista actual de productos
        const products = await productList();
        
        // Encuentra el ID actual más alta
        const maxId = products.reduce((max, product) => {
            const id = typeof product.id === "number" ? product.id : parseInt(product.id);
            return id > max ? id : max;
        }, 0);

        // Asignar un nuevo ID
        const newId = maxId + 1;

        // Crear el nuevo producto con el nuevo ID
        const newProduct = {
            id: newId,
            nombre_producto,
            precio,
            img
        };

        // Publicar el nuevo producto en el servidor
        return fetch("http://localhost:3000/productos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct)
        }).then((res) => res.json());
    } catch (err) {
        console.log(err);
    }
};

export const servicesProducts = {
    productList,
    createProducts,
}