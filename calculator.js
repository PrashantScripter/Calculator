const input = document.querySelector(".mainInput");
const buttonval = document.querySelectorAll(".buttonVal");
const finalVal = document.querySelector('.FinalVal');
const allclear = document.querySelector(".allClear");
const oneClear = document.querySelector(".oneClear");


buttonval.forEach((buttonval) => {
    const val = buttonval.getAttribute("value");
    buttonval.addEventListener('click', () => {
        try{
            input.value += val;
        }
        catch(error){
            input.value = 'Error';
        }
    })
});

finalVal.addEventListener('click', () => {
    const ans = eval(input.value);
    input.value = ans;
});

allclear.addEventListener('click', () => {
    const input = document.querySelector(".mainInput");
    input.value = "";
});

oneClear.addEventListener('click',() =>{
    input.value = input.value.slice(0,-1);
});
