const FormSubmit = document.querySelector('.submit-form');
const form = async (own, age, siblings, noofsib, patno, patnodia, matno, matnodia) => {
	try {
		const data = {
			own,
			age,
			siblings,
			noofsib,
			patno,
			patnosib,
			matno,
			matnosib,
		};
		const res = await axios.post('/api/forms', data);
		console.log(res);
	} catch (err) {
		console.log(err);
	}
};

if (FormSubmit) {
	FormSubmit.addEventListener('Submit', e => {
        e.preventDefault();
        console.log("Hi");
		const own = document.getElementById('own').value;
		const age = document.getElementById('age').value;
		const siblings = document.getElementById('siblings').value;
		const noofsib = document.getElementById('noofsib').value;
		const patno = document.getElementById('patno').value;
		const patnodia = document.getElementById('patnodia').value;
		const matno = document.getElementById('matno').value;
		const matnodia = document.getElementById('matnodia').value;
		form(own, age, siblings, noofsib, patno, patnodia, matno, matnodia);
	});
}
