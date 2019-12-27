function wait(ms=0){
    return new Promise(function(resolve){
        setTimeout(resolve,ms)
    })
}
async function destroyPopup(popup){
    popup.classList.remove("open");
    await wait(1000);
    popup.remove();
    popup = null;

}
function ask(options){
    return new Promise(async function(resolve){
        const popupBox = document.createElement("form");
        popupBox.classList.add("popup");
popupBox.insertAdjacentHTML("afterbegin",
`<fieldset>
<label>${options.title}</label>
<input type="text" name="input"/>
<button type="submit">Submit</button>
</fieldset>`)
if(options.cancel){
    const skipButton = document.createElement("button");
    skipButton.type = "button";
    skipButton.textContent = "Cancel";
    skipButton.addEventListener('click',function(){
        resolve(null);
        destroyPopup(popupBox)
    },{once:true})
    popupBox.firstElementChild.appendChild(skipButton)
}
popupBox.addEventListener('submit',function(e){
    e.preventDefault();
    console.log("submitted")
    resolve(e.currentTarget.input.value)
    destroyPopup(popupBox)
},{once:true})

document.body.appendChild(popupBox);
    await wait(50)
    popupBox.classList.add("open");

})
}

async function askQuestion(event){
    console.log(event)
    const button = event.currentTarget;
    const cancel = 'cancel' in button.dataset
    const answer = await ask({title:button.dataset.question,cancel})
    console.log(answer)
}
const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(function(button){
button.addEventListener('click',askQuestion)
})

const questions = [
    {title:'what is your name?'},
    {title:"what is your age?",cancel:true},
    {title:"what is your dogs name?"},
]

async function asyncMap(array,callback){
    const results = [];
    for(const item of array){
        const result = await callback(item);
    results.push(result)
    }
    return results;
}

async function go(){
    const answers = await asyncMap(questions,ask);
    console.log(answers)
}
go();

async function askMany(ask){
    for(const question of questions){
        const answer = await ask(question);
        console.log(answer);
    }
}
askMany(ask)