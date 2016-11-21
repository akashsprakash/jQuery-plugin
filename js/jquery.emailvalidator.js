(function( $ ) {
 
    $.fn.verifyEmail = function (options) {
        var msg;
        $.each(options, function (key , value)
        {
            msg = value;
        });

        var email = this.val();
        if(checkIfValidEmail(email)){

            $(""+msg+"").html("<p id=\"messge\">Valid Email</p>");
            $(""+msg+"").css( "color", "green");
        }
        else{
            $(""+msg+"").html("<p>Invalid Email</p>");
            $(""+msg+"").css( "color", "red");
        }
    };

    function checkIfValidEmail(email){
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var result = regex.test(email);
        return result;
    }

}( jQuery ));