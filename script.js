document.addEventListener("DOMContentLoaded", function () {
	let showButtons = document.querySelectorAll(".click");

	showButtons.forEach((button) => {
		button.addEventListener("click", () => {
			let inputs = button.parentElement;
			let name = inputs.querySelector("#name").value;
			let price = inputs.querySelector("#price").value;
			let url = inputs.querySelector("#url").value;

			let result = inputs.querySelector("#result");

			if (!name || !price || !url) {
				alert("Заполните поле");
			} else {
				let productDiv = document.createElement("div");
				productDiv.innerHTML =
					"<p>Name: " +
					name +
					"</p><p>Price: " +
					price +
					"</p><img src='" +
					url +
					"' alt='Photo'>";
				let deleteButton = document.createElement("button");
				deleteButton.textContent = "Delete";
				deleteButton.addEventListener("click", () => {
					productDiv.remove();
				});
				productDiv.appendChild(deleteButton);
				result.appendChild(productDiv);
			}
		});
	});
});
