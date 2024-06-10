const $heightInput = $('#heightTxt');
const $weightInput = $('#weightTxt');
const $resultBar = $('.result');
const $resultTxt = $('.result-txt');
const $btnSearch = $('.btn-search');

$btnSearch.on('click', function(){

   const imc = handleImcCalc($heightInput.val(), $weightInput.val());

   handleResultBar(imc);

})


function handleImcCalc(height, weight){

    const heightInMeters = height / 100;
    const calc = weight / (heightInMeters * heightInMeters);

    return calc.toFixed(2);

}

function handleResultBar(imc){
    switch (true) {
        case (imc > 0 && imc < 18.5):
            $resultBar.css('background-color', '#FF6464');
            $resultTxt.text(`${imc} - Abaixo do Peso`);
            break;
        case (imc >= 18.5 && imc <= 24.9):
            $resultBar.css('background-color', '#91C483');
            $resultTxt.text(`${imc} - Normal`);
            break;
        case (imc >= 25.0 && imc <= 29.9):
            $resultBar.css('background-color', '#FFE162');
            $resultTxt.text(`${imc} - Sobrepeso`);
            break;
        case (imc >= 30.0 && imc <= 39.9):
            $resultBar.css('background-color', '#FFE162');
            $resultTxt.text(`${imc} - Obesidade`);
            break;
        case (imc >= 40 && imc <= 1000):
            $resultBar.css('background-color', '#FF6464');
            $resultTxt.text(`${imc} - Obesidade Grave`);;
            break;
        default:
            $resultBar.css('background-color', 'gray');
            $resultTxt.text(``);;
            break;
    }
}