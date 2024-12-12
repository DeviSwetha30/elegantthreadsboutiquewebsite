// Product data
const products = [
    { id: 5, name: "Tissu kurti", price: "$308", image: "k1 (1).jpeg" },
    { id: 6, name: "Designer kurti", price: "$289", image: "k1 (2).jpeg" },
    { id: 7, name: "Kurti", price: "$199", image: "k1 (3).jpeg" },
    { id: 8, name: "Tissu kurti", price: "$207", image: "k1 (4).jpeg" },
    { id: 1, name: "Cotton Saree", price: "$299", image: "k1 (5).jpeg" },
    { id: 2, name: "Anarkali", price: "$349", image: "k1 (6).jpeg" },
    { id: 3, name: "Silk saree", price: "$235", image: "k1 (7).jpeg" },
    { id: 4, name: "Cotton Saree", price: "$397", image: "k1 (8).jpeg" },
    { id: 5, name: "Tissu kurti", price: "$547", image: "k1 (9).jpeg" },
    { id: 6, name: "AnarkaliK", price: "$427", image: "k1 (10).jpeg" },
    { id: 7, name: "Cotton Saree", price: "$876", image: "k1 (11).jpeg" },
    { id: 8, name: "Anarkali", price: "$321", image: "k1 (12).jpeg" },
    { id: 5, name: "Silk Saree", price: "$464", image: "k1 (13).jpeg" },
    { id: 6, name: "Kurtis", price: "$875", image: "k1 (14).jpeg" },
    { id: 7, name: "Anarkali", price: "$364", image: "k1 (15).jpeg" },
    { id: 8, name: "Silk Saree", price: "$399", image: "k1 (16).jpeg" },
    { id: 1, name: "Designer-Saree", price: "$288", image: "k1 (17).jpeg" },
    { id: 2, name: "Kurtis", price: "$377", image: "k1 (18).jpeg" },
    { id: 3, name: "Anarkali's", price: "$288", image: "k1 (19).jpeg" },
    { id: 4, name: "Anarkali", price: "$488", image: "k1 (20).jpeg" },
    { id: 5, name: "Tissu kurti", price: "$266", image: "k1 (21).jpeg" },
    { id: 6, name: "Anarkali", price: "$599", image: "k1 (22).jpeg" },
    
];

// Populate products
const productGrid = document.getElementById("productGrid");

products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button>Add to Cart</button>
    `;
    productGrid.appendChild(productCard);
});
