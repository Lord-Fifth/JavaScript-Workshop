function getInputValue() {
    // console.log('Clicked!')
    const ip = document.getElementById('app-item-to-add');
    console.log(ip.value)
}

const btn = document.getElementById('app-add-btn')
btn.addEventListener('click', function() {
    getInputValue()
})