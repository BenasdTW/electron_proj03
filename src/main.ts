// Retrieve remote BrowserWindow

const {BrowserWindow} = require("electron").remote


$(document).ready(function() {
    $("#min-btn").on("click", () => {
        BrowserWindow.getFocusedWindow().minimize();
    });
    $("#close-btn").on("click", () => {
        BrowserWindow.getFocusedWindow().close();
    });

    $("#input-box").keypress(function(e){
        let input_value: string = $("#input-box").val().toString();
        if(e.keyCode==13){
            $("#content p").html(input_value);
        }
    });
});
