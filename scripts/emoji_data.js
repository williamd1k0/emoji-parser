
function Emoji(code, parsed){
    var _code = code;
    var _parsed = parsed;

    this.getCode = function(){
        return _code;
    }
    this.getParsed = function(){
        return _parsed;
    }
}

const PREFIX = ';;';

var emoji_data = [
    new Emoji('shrugs', '¯\\_(ツ)_/¯'),
    new Emoji('lenny', '( ͡° ͜ʖ ͡°)')
];
