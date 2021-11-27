'use strict';
(function () {

    //Create a new stage
    const stage = new stageObj(400, 800);

    //Create a new character
    const character = new charObj(50, 50, 100);

    //Add event listener to the character
    character.addEvent('click', () => {
        character.hide();
    });

    //Create a new image class
    const imageobject = new imgObj('/src/image/glowing-lamp.png', 0, 0, 720, 720);

    //Add the image to the character
    character.on(imageobject);

    //Show the character
    stage.put(character);

    function start() {
        document.body.appendChild(stage.canvasElement);
    }

    window.addEventListener('load', start);
})();