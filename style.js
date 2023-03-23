let buttonsEl = Array.from(document.getElementsByClassName('btn'));
let result = document.getElementById('result');

buttonsEl.map((async button => {
    button.addEventListener('click',(event) =>{
        switch(event.target.value){
            case 'C':
                result.value = ''
                break;
            case '=':
                try{
                    result.value = eval(result.value)
                }catch{
                    result.value = 'Invalid Operation!'
                }
                break;
            case "←":
                if(result.value){
                    result.value = result.value.slice(0,-1);
                }
                break;
            default:
                result.value += event.target.value;
                break;
        }
    })
}))

