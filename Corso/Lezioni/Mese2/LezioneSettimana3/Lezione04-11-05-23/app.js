document.getElementById('product-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const idField = document.getElementById('product-id');
    const id = idField.value ? parseInt(idField.value) : null;
    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const category = document.getElementById('product-category').value;
    const price = parseFloat(document.getElementById('product-price').value);

    const updateData = {
        id: id,
        name: name,
        description: description,
        category: category,
        price: price
    };

    const insertData = {
        name: name,
        description: description,
        category: category,
        price: price
    };

    if (id) {
        await updateProduct({ updateData });
    } else {
        await addProduct({ insertData });
    }

    idField.value = '';
    document.getElementById('product-name').value = '';
    document.getElementById('product-description').value = '';
    document.getElementById('product-category').value = '';
    document.getElementById('product-price').value = '';

    await fetchProducts();
});

async function displayProducts(products) {
    const tbody = document.getElementById('products-table').querySelector('tbody');
    tbody.innerHTML = '';

    for (const product of products) {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.category}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>
                <button class="edit-button">Modifica</button>
                <button class="delete-button">Elimina</button>
            </td>
        `;

        tr.querySelector('.edit-button').addEventListener('click', () => {
            document.getElementById('product-id').value = product.id;
            document.getElementById('product-name').value = product.name;
           
            document.getElementById('product-description').value = product.description;
            document.getElementById('product-category').value = product.category;
            document.getElementById('product-price').value = product.price;
        });
    
        tr.querySelector('.delete-button').addEventListener('click', async () => {
            await deleteProduct(product.id);
            await fetchProducts();
        });
    
        tbody.appendChild(tr);
    }
}

async function fetchProducts() {
try {
const response = await fetch('api.php?action=list');
if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
}

const data = await response.json();
await displayProducts(data);
} catch (error) {
console.log('Error fetching products:', error);
}
}

// Resta delle funzioni async

// Esegui fetchProducts() all'avvio
fetchProducts();

async function searchProducts(searchText) {
    try {
        const response = await fetch(`api.php?action=s&searchText=${encodeURIComponent(searchText)}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Search results:', data);
    } catch (error) {
        console.log('Error searching products:', error);
    }
}

async function fetchProductsByCategory(category) {
    try {
        const response = await fetch(`api.php?action=category&category=${encodeURIComponent(category)}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Products by category:', data);
    } catch (error) {
        console.log('Error fetching products by category:', error);
    }
}

async function deleteProduct(productId) {
    try {
        const response = await fetch('api.php?action=delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: productId })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Delete product result:', data);
    } catch (error) {
        console.log('Error deleting product:', error);
    }
}


async function updateProduct(product) {
    try {
        const response = await fetch('api.php?action=update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Update product result:', data);
    } catch (error) {
        console.log('Error updating product:', error);
    }
}

async function addProduct(product) {
    try {
        const response = await fetch('api.php?action=add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Add product result:', data);
    } catch (error) {
        console.log('Error adding product:', error);
    }
}
