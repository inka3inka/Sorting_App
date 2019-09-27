document.addEventListener('DOMContentLoaded', function(){

//Variables//
    const buttonSort = document.querySelector('.btn-sorting');
    const buttonShuffle = document.querySelector('.btn-shuffle');
    const buttonRestore = document.querySelector('.btn-restore');
    const buttonClear = document.querySelector('.btn-clear');
    const area = document.querySelector('.area');
    const checkboxPosition = document.querySelector('.checkbox input');
    const dropZone = document.querySelector('#drop-zone');
    let restored;


//Functions//
    //Function for adding textarea lines to HTML as an innertext
    function valueImplementation() {
        area.innerText = area.value;
    }

    //Function for sorting and changing sorted array to string
    function sortAndPrint(array) {
        const sortedArray = array.sort(function(a,b){
            return a.localeCompare(b);
        });
        area.value = sortedArray.join("\n")
    }

    //Function for shufflering
    function shuffler(array) {
        for (let i = 0; i < array.length; i++) {
            const j = Math.floor(Math.random() * (array.length - 1));
            const x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        return array;
    }

    //Function for removing white spaces
    function trimmer(array) {
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i].trim();
        }
    }

    // Drop function
    dropZone.addEventListener('drop', function(event) {
        event.stopPropagation();
        event.preventDefault();
        const fileToRead = event.dataTransfer.files[0];
        const fileReader = new FileReader();
        fileReader.onload = function(ev){
            area.value = ev.target.result
        };
        area.value = fileReader.readAsText(fileToRead);
        fileReader.addEventListener('load', function(){
            restored = area.value;
        });
    });

    //Memorize first added text
    area.addEventListener('change', function(){
        restored = area.value;
    });



//Features//
    //Sort
    buttonSort.addEventListener('click', function(){
        valueImplementation();
        const arrayOfStrings = area.value.split(/\r\n|\n|\r/);
        /*Trimmer*/
        if (checkboxPosition['checked'] === true) {
            trimmer(arrayOfStrings);
            sortAndPrint(arrayOfStrings)
        }
        /*Casual sorting*/
        else {
            sortAndPrint(arrayOfStrings)
        }
    });

    //Shuffle
    buttonShuffle.addEventListener('click', function(){
        valueImplementation();
        const arrayOfStrings = area.value.split(/\r\n|\n|\r/);
        shuffler(arrayOfStrings);
        area.value = arrayOfStrings.join("\n");
    });

    //Restore
    buttonRestore.addEventListener('click', function() {
        area.value = restored;
    });

    //Clear
    buttonClear.addEventListener('click', function(){
        area.value = '';
    });

});



