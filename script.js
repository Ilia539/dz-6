// .............1 background

let inpColor = document.querySelector('.inp-color');
let bdColor = document.querySelector('body');
//получаю кнопку и присваиваю ей выполнение ф-и по клику ф-я содержит изменение стиля тега в зависимости от изменения инпута
document.querySelector('.btn-color').onclick = () => {
    // console.log(inpColor.value);
    // bdColor.style.backgroundColor = inpColor.value;

    if (bdColor.style.backgroundColor == "") {
        bdColor.style.backgroundColor = inpColor.value;
    } else {
        bdColor.style.backgroundColor = "";
    }
};
//.................2 color text.....

let textColor = document.querySelector('.text-color');

document.querySelector('.btn-text').onclick = () => {
    // bdColor.style.color = textColor.value;

    if (bdColor.style.color == "") {
        bdColor.style.color = textColor.value;
    } else {
        bdColor.style.color = "";
    }
};
//...............3 size text...........

// let titleText = document.querySelector('.title-text');
// let sizeText = document.querySelector('.size-text');

document.querySelector('.range-text').oninput = () => {
    let data = document.querySelector('.range-text').value;

    // let titleText = document.querySelector('.title-text');

    // console.log(titleText);

    document.querySelector('.title-text').style.fontSize = data + "px";

    document.querySelector('.size-text').innerHTML = data;
}

//....................background circle//...............

    // let circleColor = document.querySelector('.circle');


// function applyColor(){
    // let inpColorOne = document.querySelector('.inp-color-one').value;
    // let inpColorTwo = document.querySelector('.inp-color-two').value;
    // let inpColorThree = document.querySelector('.inp-color-three').value;
    // let circleColor = document.querySelector('.circle');
    // console.log(document.querySelector('#inr-1').value);

    // circleColor.style.background = `rgb( ${inpColorOne}, ${inpColorTwo},  ${inpColorThree})`;

    // circleColor.innerHTML = `rgb ( ${inpColorOne}, ${inpColorTwo}, ${inpColorThree})`;
// };

//..........второй вариант

    // let inpColorOne = document.querySelector('.inp-color-one');
    // let inpColorTwo = document.querySelector('.inp-color-two');
    // let inpColorThree = document.querySelector('.inp-color-three');

// function cvet () {
//     console.log(inpColorOne.value);
//     let circleColor = document.querySelector('.circle');

//     circleColor.style.background = `rgb( ${inpColorOne.value}, ${inpColorTwo.value},  ${inpColorThree.value})`;

//     circleColor.innerHTML = `rgb ( ${inpColorOne.value}, ${inpColorTwo.value}, ${inpColorThree.value})`;
// }

// inpColorOne.oninput = cvet;
// inpColorTwo.oninput = cvet;
// inpColorThree.oninput = cvet;


//..........третий вариант

 let inpColorBak = document.querySelectorAll('.range-color');
        // console.log(inpColorBak);


    for (let i = 0; i < inpColorBak.length; i++) {
        inpColorBak[i].oninput = cvet;
        // console.log(inpColorBak[i]);

    }

function cvet () {
    // console.log(inpColor[i].value);
    let circleColor = document.querySelector('.circle');

    circleColor.style.background = `rgb( ${inpColorBak[0].value}, ${inpColorBak[1].value},  ${inpColorBak[2].value})`;

    circleColor.innerHTML = `rgb ( ${inpColorBak[0].value}, ${inpColorBak[1].value}, ${inpColorBak[2].value})`;
}