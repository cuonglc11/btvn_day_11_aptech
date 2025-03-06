const listcategoris = [];
const listProduct = [];
let id = 0;
const token = localStorage.getItem("token");
if (!token) {
	window.location = "/day9/login.html";
}

document.getElementById("formCategory").addEventListener("submit", function(e) {
		e.preventDefault();
		const data = {};
		const form = new FormData(e.target);
		form.forEach((item, key) => {
			data["id"] = Math.floor(Math.random() * 10);
			data[key] = item;
		});
		listcategoris.push(data);
		loadCategory();
		document.getElementById("formCategory").reset();
	});
document.getElementById("formProduct").addEventListener("submit", function(e) {
	e.preventDefault();
	const data = {};
	const form = new FormData(e.target);
	form.forEach((item, key) => {
		data["id"] = Math.floor(Math.random() * 10);
		data[key] = item;
	});
	listProduct.push(data);
	document.getElementById("formProduct").reset();
	loadProduct();
});

function loadCategory() {
	document.getElementById("category").innerHTML =
		' <option value="">Category</option>';
	listcategoris.forEach((item) => {
		if (!document.getElementById(`category_${item.id}`)) {
			document.getElementById("listCategoris").innerHTML += `
        <div class="detail-category">
          <div>
            <p>${item.name}</p>
            <p>${item.discription}</p>
          </div>
          <div id="category_${item.id}" class="list-product"></div>
        </div>
      `;
		}
		document.getElementById("category").innerHTML += `
        <option value="${item.id}">${item.name}</option>`;
	});
}

function loadProduct() {
	const categories = document.querySelectorAll("[id^='category_']");
	categories.forEach((category) => {
		category.innerHTML = "";
	});
	listProduct.forEach((item) => {
		const category = document.getElementById(
			"category_" + getCategory(item.category)
		);

		if (category) {
			category.innerHTML += `
        <div class="product-item">
            <img src="${item.image}" alt="">
            <h1>
               ${item.name}
            </h1>
             <div class="price-item">
                <s>${item.oldPrice}d</s>
                <p>${item.oldPrice}d</p>
             </div>
             <p>${item.discription}</p>
        </div>
        `;
		} else {}
	});
}

function getCategory(idCategory) {
	const category = listcategoris.find((c) => c.id === Number(idCategory));
	return category ? category.id : "";
}
// jquery