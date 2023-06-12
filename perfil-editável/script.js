const inputFiles = document.querySelector("#edita");
const pictureImage = document.querySelector("#fototeste");
const picturreImageText = "escolha uma imagem";
pictureImage.innerHTML = picturreImageText;

	inputFiles.addEventListener("change", function (e){
		const inputTarget = e.target;
		const file = inputTarget.files[0];

		if (file) {
			const reader = new FileReader();

			reader.addEventListener("load", function (e) {
				const readerTarget = e.target;

				const img = document.createElement("img");
				img.src = readerTarget.result;
				img.classList.add("fototeste");

				pictureImage.innerHTML = "";
				pictureImage.appendChild(img);
			});
			
			reader.readAsDataURL(file);
		} else {
			pictureImage.innerHTML = picturreImageText;
		}
	});