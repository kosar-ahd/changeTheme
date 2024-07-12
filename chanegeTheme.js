const $ = document

const btnELement = $.querySelectorAll('.btn')

btnELement.forEach(function(item){
    item.addEventListener('click', function(event){
        // console.log(event.target.dataset);
        let getColor = event.target.dataset.color
        // console.log(getColor);
        document.documentElement.style.setProperty('--theme-color', getColor)
    })
})