const submitBtn = document.getElementById('submit-btn');
const headingText = document.getElementById('heading');
submitBtn.setAttribute('disabled', true);

function onChange(e) {
	e.value = e.value.replace(/[^\d.]/g, '');
	e.value = parseFloat(e.value ? e.value : 0).toFixed(2);
	console.log(!!(e.value > 0), e.value);
	if (e.value > 0) submitBtn.removeAttribute('disabled');
	else submitBtn.setAttribute('disabled', true);
	e.value = `$${e.value}`;
}

function onSubmit() {
	submitBtn.innerText = 'Submitting';
	setTimeout(() => {
		headingText.innerText = 'Congratulations! You have made a donation 🙏';
		submitBtn.classList.add('hide');
		confetti.start(1000);
	}, 2000);
}
