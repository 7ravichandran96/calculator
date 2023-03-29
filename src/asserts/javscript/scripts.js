
let inProgress = document.querySelector('#calculations');
let executedProcessed = document.querySelector('#resultOut');
let operators = document.querySelectorAll('#oper')


let buttons = document.querySelectorAll('.btn')

buttons = addEventListener('click', (btn) => {
    // butn equal pressed operation
    if (btn.target.innerHTML === "=") {
        executedProcessed.innerHTML = eval(inProgress.innerHTML);
        inProgress.innerHTML = executedProcessed.innerHTML;
    }
   
    // btn to reduced or remove the last endered value for corrections
    else if (btn.target.innerHTML === "←") {
        inProgress.innerHTML = inProgress.innerHTML.slice(0, -1);
    }
    // used to add + sign due to try catch methode used this symbol show  an error only that case added this steps
    else if (btn.target.innerHTML === "+") {
        inProgress.innerHTML += "+";
    }
    // used to add - sign due to try catch methode used this symbol show an error only that case added this steps
    else if (btn.target.innerHTML === "-") {
        inProgress.innerHTML += "-";
    }
    // used to add / sign due to try catch methode used this symbol show an error only that case added this steps
    else if (btn.target.innerHTML === "/") {
        inProgress.innerHTML += "/";
    }
    // used to add * sign due to try catch methode used this symbol show an error only that case added this steps
    else if (btn.target.innerHTML === "*") {
        inProgress.innerHTML += "*";
    }
    // used to add C sign due to try catch methode used this symbol show an error only that case added this steps
    else if (btn.target.innerHTML === "C") {
        inProgress.innerHTML = "";
        executedProcessed.innerHTML = "";
    }

    else {

        try {
            inProgress.innerHTML += btn.target.innerHTML;

            executedProcessed.innerHTML = eval(inProgress.innerHTML);


        }
        catch (err) {
            inProgress.innerHTML = "error";
            executedProcessed.innerHTML = "error";
        }
    }
});









