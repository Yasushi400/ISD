function Selection() {
    const data ={
        '': 20,
        '': 20,
        '': 20,
        '': 20,
        '': 20,
    }

    const rand = Math.floor(Math.random() * 100)
    let rate = 0
    for (const prop in data) {
        rate += data[prop]
        if (rand <= rate) {
            result = prop
            break
        }
    }
    return result
}

const selection = document.getElementById('selection')
const result = document.getElementById('result')
let _selection = []
b.addEventListener('click', () =>{
    result.innerHTML = lot()
})
