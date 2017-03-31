(function () {
    'use strict';

    var elm = document.getElementById('tagline'),
        index,
        lines = [
            'Black tie developer.',
            'Problem solver.',
            'Home brewed developer.',
            'Codes for the dark side.',
            'Addicted to coffee.',
            '01001000 01101001 00101110',
            'jediMindTrick();'
        ];

    if (!elm) {
        return;
    }

    index = Math.floor(Math.random() * lines.length);
    elm.innerText = lines[index];

})();