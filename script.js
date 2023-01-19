const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const buttonAdd = document.querySelector('.buttonAdd')

const data = {
	run: [], 
	water: [],
	food: [],
	journal: [],
	takePills: [],
}


buttonAdd.addEventListener('click',add)
form.addEventListener('change',save)

function add() {

	const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
	const dayExists = nlwSetup.dayExists(today)

	if (dayExists) {
		alert('Dia já incluso') // Para rodar esse pedaço código é necessario que dayExists seja true
		return
	}

	nlwSetup.addDay(today)
}


function save() {
	
	localStorage = localStorage.setItem('NLWSetup@habits')
}


nlwSetup.setData(data)
nlwSetup.load()