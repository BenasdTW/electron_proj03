// Retrieve remote BrowserWindow
const {BrowserWindow} = require("electron").remote
const $ = require("jquery");


$(document).ready(function() {
    $("#min-btn").on("click", () => {
        BrowserWindow.getFocusedWindow().minimize();
    });
    $("#close-btn").on("click", () => {
        BrowserWindow.getFocusedWindow().close();
    });

    $("#input-box").keypress(function(e){
        let input_value = $("#input-box").val();
        if(e.keyCode==13){
            $("#content p").html(input_value);
        }
    });
});
