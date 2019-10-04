document.addEventListener('DOMContentLoaded', function(){

//Variables//
    const buttonSort = document.querySelector('.btn-sorting');
    const buttonShuffle = document.querySelector('.btn-shuffle');
    const buttonRestore = document.querySelector('.btn-restore');
    const buttonClear = document.querySelector('.btn-clear');
    const zone = document.querySelector('.zone');
    const checkboxPosition = document.querySelector('.checkbox input');
    let restored;


//Functions//
    //Function for adding textarea lines to HTML as an innertext
    function valueImplementation() {
        zone.innerText = zone.value;
    }

    //Function for sorting and changing sorted array to string
    function sortAndPrint(array) {
        const sortedArray = array.sort(function(a,b){
            return a.localeCompare(b);
        });
        zone.value = sortedArray.join("\n")
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
    zone.addEventListener('drop', function(event) {
        //Stop default events
        event.stopPropagation();
        event.preventDefault();
        //Get file
        const fileToRead = event.dataTransfer.files[0];
        //Read file
        const fileReader = new FileReader();
        fileReader.onload = function(ev){
            zone.value = ev.target.result
        };
        zone.value = fileReader.readAsText(fileToRead);
        //Restore added file
        fileReader.addEventListener('load', function(){
            restored = zone.value;
        });
    });

    //Memorize first added text
    zone.addEventListener('change', function(){
        restored = zone.value;
    });



//Features//
    //Sort
    buttonSort.addEventListener('click', function(){
        valueImplementation();
        const arrayOfStrings = zone.value.split(/\r\n|\n|\r/);
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
        const arrayOfStrings = zone.value.split(/\r\n|\n|\r/);
        shuffler(arrayOfStrings);
        zone.value = arrayOfStrings.join("\n");
    });

    //Restore
    buttonRestore.addEventListener('click', function() {
        zone.value = restored;
    });

    //Clear
    buttonClear.addEventListener('click', function(){
        zone.value = '';
    });

});



