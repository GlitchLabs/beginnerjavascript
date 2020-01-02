import wait from 'waait';
import faker,{name} from 'faker';
import axios from 'axios';

console.log(faker);

const fakeNames = Array.from({length:10},name.firstName)
console.log(fakeNames)

async function go(){
    console.log('going')
    await wait(600)
    console.log('ending')
}

async function getJoke(){
    const res = await axios.get('https://icanhazdadjoke.com',{
        headers:{
            Accept:'application/json'
        }
    });
    console.log(res.data.joke)
}
getJoke();