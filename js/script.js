/* COLLAPSIBLE FAQS */

const question = document.querySelectorAll(".question");

for (let i = 0; i < question.length; i++) {
	question[i].addEventListener("click", () => {
		const answer = question[i].nextElementSibling;
		const plus = question[i].children[1];
		const minus = question[i].children[2];
		if (answer.style.display === "none" || answer.style.display === "") {
			answer.style.display = "block";
			plus.style.display = "none";
			minus.style.display = "inline-block";
		} else {
			answer.style.display = "none";
			plus.style.display = "inline-block";
			minus.style.display = "none";
		}
	});
}
