function wait(ms=0){
    return new Promise(function(resolve){
        setTimeout(resolve,ms)
    })
}

function ask(options){
    return new Promise(async function (resolve){
        const popup = document.createElement('form');//create a form
        //add the class popup
        popup.classList.add("popup");
        //insert the fieldset with labels and inputs and buttons
        popup.insertAdjacentHTML("afterbegin"
        ,`<fieldset>
        <label>${options.title}</lable>  
        <input type="text" name="input"/>
        <button type="submit">Submit</button>  
        </fieldset>`)
        //if the options object passed in includeds cancel:true we will show a cancle button
        if(options.cancel){
            const skipbutton = document.createElement("button");
            skipbutton.type = "button";
            skipbutton.textContent = "Cancel";
            
            popup.firstElementChild.appendChild(skipbutton)
        }//end of if statement
        //lets add the eventlistener to the popup
        popup.addEventListener('submit',function(e){
            e.preventDefault();
            console.log("submitted boy");
            resolve(e.currentTarget.input.value)
        },{once:true})
        //add the popup to the body
        document.body.appendChild(popup);
        //wait 50 ms so the last classList.add can finish and this next one can be added to the callback que

        await wait(50);
        popup.classList.add("open");
    })//end or return new Promise
}