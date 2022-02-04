const header = document.getElementById("ScrollHeader");
window.addEventListener('scroll', () => {

	if (window.scrollY > 50){
		header.classList.add('anim-nav');
	}
	else {
		header.classList.remove('anim-nav');
	}
})

function cacherCookies() {
    var boxCookies = document.getElementById("cookie");
    boxCookies.style.display = "None";
}

function retourCookies() {
	var boxCookies = document.getElementById("cookie");
	boxCookies.style.display = "None";
}