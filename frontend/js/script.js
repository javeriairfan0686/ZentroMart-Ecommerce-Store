const products = [
  { id: 1, name: "Rice 5kg", price: 1200, image: "images/rice.jpg" },
  { id: 2, name: "Spices 1kg", price: 500, image: "images/spices.jpg" },
  { id: 3, name: "Flour 10kg", price: 950, image: "images/flour.jpg" },
  {id: 4, name: "Kutti hoe mirch", price: 250, image: "images/kutti hoe mirch.jpg"}
];

const productList = document.getElementById("product-list");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${p.image}" alt="${p.name}" width="150">
    <h3>${p.name}</h3>
    <p>Price: Rs. ${p.price}</p>
    
    <div class="quantity-control">
      <button onclick="decreaseQty(${p.id})">-</button>
      <input type="text" id="qty-${p.id}" value="1" readonly>
      <button onclick="increaseQty(${p.id})">+</button>
    </div>
    
    <button onclick="addToCart(${p.id})">Add to Cart</button>
  `;
  productList.appendChild(div);
});

function increaseQty(id) {
  let qtyBox = document.getElementById(`qty-${id}`);
  let qty = parseInt(qtyBox.value);
  qtyBox.value = qty + 1;
}

function decreaseQty(id) {
  let qtyBox = document.getElementById(`qty-${id}`);
  let qty = parseInt(qtyBox.value);
  if (qty > 1) {
    qtyBox.value = qty - 1;
  }
}

function addToCart(id) {
  let qtyBox = document.getElementById(`qty-${id}`);
  let quantity = parseInt(qtyBox.value);
  alert(`Added ${quantity} item(s) of product ${id} to cart!`);
}
