document.addEventListener('DOMContentLoaded', function(){

    let buttonSort = document.querySelector('.btn-sorting');
    let buttonShuffle = document.querySelector('.btn-shuffle');
    let buttonRestore = document.querySelector('.btn-restore');
    let buttonClear = document.querySelector('.btn-clear');
    let area = document.querySelector('.area');


    buttonSort.addEventListener('click', function(){
        area.innerText = area.value;
        let arrayOfStrings = area.value.split(/\r\n|\n|\r/);
        let sortedArray = arrayOfStrings.sort();
        area.value = sortedArray.join("\n");

    });

    buttonClear.addEventListener('click', function(){
        area.value = '';
    })

});