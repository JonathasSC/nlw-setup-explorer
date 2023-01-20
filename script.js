const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const buttonAdd = document.querySelector('.buttonAdd')

buttonAdd.addEventListener('click',add)
form.addEventListener('change',save)

function add() {

	const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
	const dayExists = nlwSetup.dayExists(today) // retorna True se o dia já existir, false se não existir

	if (dayExists) {
		alert('Dia já incluso.') // Para rodar esse pedaço código é necessario que dayExists seja true
		return
	}

	alert('Dia adicionado com sucesso.')
	nlwSetup.addDay(today)
}

function save() {
	localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} 

nlwSetup.setData(data)
nlwSetup.load()