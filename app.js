document.addEventListener('DOMContentLoaded', function(){

    let buttonSort = document.querySelector('.btn-sorting');
    let buttonShuffle = document.querySelector('.btn-shuffle');
    let buttonRestore = document.querySelector('.btn-restore');
    let buttonClear = document.querySelector('.btn-clear');
    let area = document.querySelector('.area');

    //Sortowanie
    buttonSort.addEventListener('click', function(){
        area.innerText = area.value;
        let arrayOfStrings = area.value.split(/\r\n|\n|\r/);
        let sortedArray = arrayOfStrings.sort();
        area.value = sortedArray.join("\n");
    });

    //Shuffle
    buttonShuffle.addEventListener('click', function(){
        area.innerText = area.value;
        let arrayOfStrings = area.value.split(/\r\n|\n|\r/);
        function shuffler(array) {
            for (let i = 0; i < array.length; i++) {
                let j = Math.floor(Math.random() * (array.length - 1));
                let x = array[i];
                array[i] = array[j];
                array[j] = x;
            }
            return array;
        }
        shuffler(arrayOfStrings);
        area.value = arrayOfStrings.join("\n");
    });

    //Clear
    buttonClear.addEventListener('click', function(){
        area.value = '';
    })

});

