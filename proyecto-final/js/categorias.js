export async function requestCategorias(apiUrl) {
    const response = await fetch(`${apiUrl}/categories`);
    const categorias = await response.json();
    return categorias;
}

export function cargarCategorias(categorias) {
    const dropdown_categorias = document.getElementById("dropdown_categorias");
    dropdown_categorias.innerHTML = ``;
    for (let categoria of categorias) {
        let option_categoria = document.createElement("option");
        option_categoria.value = categoria;
        option_categoria.text = categoria.charAt(0).toUpperCase() + categoria.slice(1);
        dropdown_categorias.add(option_categoria);
    }
}