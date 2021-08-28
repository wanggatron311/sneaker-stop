const bar = document.querySelector(".bar");
const close = document.querySelector(".close");

close.onclick = (e) => {
	bar.style.display = "none";
};
