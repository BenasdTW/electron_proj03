// Retrieve remote BrowserWindow

const {BrowserWindow} = require("electron").remote

function add_new(s: string): void{
    let node = $("<p></p>").text(s).attr({"id": "to_do", "class": "last"});
    let prev = $("p.last");
    //console.log(prev);
    prev.before(node);
    prev.removeClass("last");
    $("p#first").remove();

    //let all_node = $("#content p");
    //console.log(all_node);
    $("#content p").each((index) => {
        console.log(index.toString()+": "+$(this).text());
        $(this).text(index.toString()+": "+$(this).text()); 
    });
}

$(document).ready(function() {
    $("#min-btn").on("click", () => {
        BrowserWindow.getFocusedWindow().minimize();
    });
    $("#close-btn").on("click", () => {
        BrowserWindow.getFocusedWindow().close();
    });

    $("#input-box").keypress((e) => {
        let input_value: string = $("#input-box").val().toString();
        if(e.keyCode==13){
            //$("#content p").html(input_value);
            add_new(input_value);
        }
    });
});
