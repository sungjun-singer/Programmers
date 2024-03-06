const form = document.querySelector("#form");
const input = document.querySelector("#phone");
const output = document.querySelector("#output");

const re = /^(?:\d{3}|\(\d{3}\))([-\/\.])\d{4}\1\d{4}$/;

const testInfo = (phoneInput) => {

    console.log(phoneInput.value);
	const ok = re.exec(phoneInput.value);

	if(!ok){
		output.textContent = `형식에 맞지 않는 전화번호입니다. (${phoneInput.value})`;
	}else{
		output.textContent = `감사합니다. 전화번호는 (${ok[0]}) 입니다.`;
	}
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	testInfo(input);
});