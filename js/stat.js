/**
 * Sends info of a page visit to the server
 */
(function (){
    $.ajax({
        type: 'POST',
        url: 'api/stats',
        data: {type: 'visitor', page: window.location.pathname},
        success: function () { /* do nothing */ },
        dataType: 'json'
    });
})();
