async function fetchlist() {
    try {
        const response = await fetch('https://s3.amazonaws.com/open-to-cors/assignment.json');
        const data = await response.json();
        return Object.values(data.products).sort((a, b) => b.popularity - a.popularity);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function display(products) {
    const tableBody = document.querySelector("#product-table tbody");
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.popularity}</td>
        `;
        tableBody.appendChild(row);
    });
}


fetchlist().then(display);