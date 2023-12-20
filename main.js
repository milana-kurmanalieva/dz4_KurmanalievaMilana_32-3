const cards = document.querySelector('.cards')
const btn = document.querySelector('#btn')
btn.onclick = () =>{
    const json = () => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', 'data.json')
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.send()
        xhr.addEventListener("load", () => {
            const persons = JSON.parse(xhr.response)
            persons.forEach(persons=>{
                const person = document.createElement('div')
                person.classList.add('style')
                person.innerHTML = `
                <img src="${persons.photo}" alt="img">
                <h2>NAME: ${persons.name}</h2>
                <span>AGE: ${persons.age}</span>
                <p>MOVIE: ${persons.movie}</p>
            `
                cards.append(person)
            })
        })
    }
    json()
}





const request = new XMLHttpRequest()
request.open('GET', 'data.json')
request.setRequestHeader('Content-type', 'application/json')
request.send()
request.addEventListener("load", () => {
    const content = JSON.parse(request.response)
    console.log(content)
})