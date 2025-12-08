async function getdata() {
  try {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();

    let container = document.getElementById("output");

    data.forEach(product => {
      container.innerHTML += `
        <div style="border:1px solid #ccc; margin:10px; padding:10px;">
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <p><strong>Price:</strong> $${product.price}</p>
          <img src="${product.image}" width="100">
        </div>
      `;
    });

  } catch (error) {
    console.log("err:", error);
  }
}

getdata();
