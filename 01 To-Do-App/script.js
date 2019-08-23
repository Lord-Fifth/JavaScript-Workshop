function getInputValue() {
    // console.log('Clicked!')
    const ip = document.getElementById('app-item-to-add');
    // console.log(ip.value)
    return ip.value;
}

function appendToList(toAdd) {
    const ul = document.getElementById('app-add-list');
    const newli = document.createElement('li')
    newli.innerText = toAdd;
    ul.appendChild(newli);
    return;

}

const btn = document.getElementById('app-add-btn')
btn.addEventListener('click', function() {
    const toInsert = getInputValue()
    appendToList(toInsert)
})