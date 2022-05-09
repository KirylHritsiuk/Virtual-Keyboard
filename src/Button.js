export default function createButton(data){

    const BUTTONKEY = typeof data.key ==='object' ? data.key.en : data.key; 
    const BUTTON = document.createElement("button");
    
    BUTTON.classList.add('keyboard--key');

    BUTTON.setAttribute('data', data.code );

    BUTTON.value = data.code;
    
    if(data.system) {
        BUTTON.insertAdjacentHTML("beforeend", `<span class="systemKey">${BUTTONKEY}</span>`);
    };
    if(!data.system){
        BUTTON.insertAdjacentHTML("beforeend", `<span class="key">${BUTTONKEY}</span>`);
    }
    if(data.altkey){
        BUTTON.insertAdjacentHTML('beforeend', `<span class="systemKey noActive">${data.altkey.en}</span>`);
    };
    if(data.class){
        switch(data.class){
            case 'keyboard--key--wibe10' :
                BUTTON.classList.add('keyboard--key--wibe10');
            break;
            case 'keyboard--key--wibe11':
                BUTTON.classList.add('keyboard--key--wibe11');
            break;
            case 'keyboard--key--wibe15':
                BUTTON.classList.add('keyboard--key--wibe15');
            break;
            case 'keyboard--key--space':
                BUTTON.classList.add('keyboard--key--space');
            break;

        }
    }
    return BUTTON;
}