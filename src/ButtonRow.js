const KEYROW1 = [

    {key: {en: '`' , ru: 'ё'}, code: 'Backquote' , altkey: {en:'~', ru:'null' },},
    {key: '1', code:'Digit1', altkey: {en:'!'}},
    {key: '2', code:'Digit2', altkey: {en:'@', ru:'"' }},
    {key: '3', code:'Digit3', altkey: {en:'#', ru:'№' }},
    {key: '4', code:'Digit4', altkey: {en:'$', ru:';' }},
    {key: '5', code:'Digit5', altkey: {en:'%'}},
    {key: '6', code:'Digit6', altkey: {en:'^', ru:':' }},
    {key: '7', code:'Digit7', altkey: {en:'&', ru:'?' }},
    {key: '8', code:'Digit8', altkey: {en:'*', ru:'*' }},
    {key: '9', code:'Digit9', altkey: {en:'('}},
    {key: '0', code:'Digit0', altkey: {en:')', ru:'' }},
    {key: '-', code:'-', altkey: {en:'_'}},
    {key: '=', code:'=', altkey: {en:'+'}},
    {key: 'Backspace', code: 'Backspace' , system: true,  class: 'keyboard--key--wibe15', },
   
];
const KEYROW2 = [

    {key: 'Tab', code:'Tab' , system: true, class: 'keyboard--key--wibe10'},
    {key: {en: 'q' , ru: 'й'}, code:'KeyQ' },
    {key: {en: 'w' , ru: 'ц'}, code:'KeyW' },
    {key: {en: 'e' , ru: 'у'}, code:'KeyE' },
    {key: {en: 'r' , ru: 'к'}, code:'KeyR' },
    {key: {en: 't' , ru: 'е'}, code:'KeyT' },
    {key: {en: 'y' , ru: 'н'}, code:'KeyY' },
    {key: {en: 'u' , ru: 'г'}, code:'KeyU' },
    {key: {en: 'i' , ru: 'ш'}, code:'KeyI' },
    {key: {en: 'o' , ru: 'щ'}, code:'KeyO' },
    {key: {en: 'p' , ru: 'з'}, code:'KeyP' },
    {key: {en: '[' , ru: 'х'}, code:'BracketLeft' , altkey: {en:'{', ru:'null' }},
    {key: {en: ']' , ru: 'ъ'}, code:'BracketRight' , altkey: {en:'}', ru:'null' }},
    {key: '\\', code:'Backslash' , altkey: {en:'|'}, class: 'keyboard--key--wibe10'},
   
];
const KEYROW3 = [

    {key: 'CapsLock', code:'CapsLock' , system: true, class: 'keyboard--key--wibe11' },
    {key: {en: 'a' , ru: 'ф'}, code:'Key'},
    {key: {en: 's' , ru: 'ы'}, code:'Key'},
    {key: {en: 'd' , ru: 'в'}, code:'Key'},
    {key: {en: 'f' , ru: 'а'}, code:'Key'},
    {key: {en: 'g' , ru: 'п'}, code:'Key'},
    {key: {en: 'h' , ru: 'р'}, code:'Key'},
    {key: {en: 'j' , ru: 'о'}, code:'Key'},
    {key: {en: 'k' , ru: 'л'}, code:'Key'},
    {key: {en: 'l' , ru: 'д'}, code:'Key'},
    {key: {en: ';' , ru: 'ж'}, code:'Key' , altkey: {en:':', ru: null }},
    {key: {en: '\'' , ru: 'э'}, code:'Key' , altkey: {en:'"', ru: null }},
    {key: 'Enter', code:'Enter' , system: true, class: 'keyboard--key--wibe15' },
       
];
const KEYROW4 = [

    {key: 'Shift', code:'ShiftLeft', system: true, class: 'keyboard--key--wibe15' },
    {key:{en: 'z' , ru: ''}, code:'Key' , altkey: {en:'', ru:'' }},
    {key:{en: 'x' , ru: ''}, code:'Key' , altkey: {en:'', ru:'' }},
    {key:{en: 'c' , ru: ''}, code:'Key' , altkey: {en:'', ru:'' }},
    {key:{en: 'v' , ru: ''}, code:'Key' , altkey: {en:'', ru:'' }},
    {key:{en: 'b' , ru: ''}, code:'Key' , altkey: {en:'', ru:'' }},
    {key:{en: 'n' , ru: ''}, code:'Key' , altkey: {en:'', ru:'' }},
    {key:{en: 'm' , ru: ''}, code:'Key' , altkey: {en:'', ru:'' }},
    {key:{en: ',' , ru: ''}, code:'Key' , altkey: {en:'', ru:'' }},
    {key:{en: '.' , ru: ''}, code:'Key' , altkey: {en:'', ru:'' }},
    {key:{en: '/' , ru: ''}, code:'Key' , altkey: {en:'', ru:'' }},
    {key:{en: '?' , ru: ''}, code:'Key' , altkey: {en:'', ru:'' }},
    {key: '↑', code:'ArrowUp', system: true},
    {key: 'shift', code:'ShiftLeft' , system: true,  },
   
];
const KEYROW5 = [

    {key: 'Ctrl',  code:'ControlLeft' , system: true, class: 'keyboard--key--wibe10' },
    {key: 'Win',   code:'MetaLeft' , system: true, },
    {key: 'Alt',   code:'AltLeft' , system: true, },
    {key: ' ',     code:'Space' , class: 'keyboard--key--space' },
    {key: 'Alt',   code:'AltRight' , system: true, },
    {key: 'ctrl',  code:'ControlRight' , system: true, },
    {key: '←',     code:'ArrowLeft', },
    {key: '↓',     code:'ArrowDown', },
    {key: '→',     code:'ArrowRight', },
  
   
];
 export let  ButtonRow =  [KEYROW1, KEYROW2,KEYROW3, KEYROW4, KEYROW5]