
(function mainLoop(){
    $(document).keydown(function(keyEvent){
        if(keyEvent.which == 32){
            for(var i = 0; i < emoji_data.length; i++){
                keyEvent.target.value = keyEvent.target.value.replace(PREFIX+emoji_data[i].getCode(), emoji_data[i].getParsed());
            }
        }
    });
})();
