const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso")
    return
  }

  nlwSetup.addDay(today)
  alert("Dia adicionado com sucesso ✅")
}

function save() {
  console.log("nlwSetup.data")
  localStorage.setItem("NlWSetup@Habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NlWSetup@Habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
