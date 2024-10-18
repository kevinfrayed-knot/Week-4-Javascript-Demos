function page_load()
{
    const msg = "### page1 load...";

    console.log(msg);
;}

function func3()
{
    //default let
    //msg = "function 3 called";

    msg = "function 3 called";

    console.log(msg);
}

function dom_ex5()
{
    const msg = "dom_ex5 called";
    console.log(msg);

    //select 1or more elementusin document - DOM library
    const outputDiv = document.getElementById("output");

    /*if (outputDiv != null){

    }
    else if(outputDiv != undefined){

    }*/

    //-- example of DOM - element, selection, element update, element style, etc...
    //--- ie: SPA, react - angular - vue - bootstrap, css
    
    if (outputDiv != null | outputDiv != undefined){
        //true
        outputDiv.innerText = "<b>## update div element example element</b> ";
        //outputDiv.innerHTML = "<b>## update div element example element</b>"
    }
    else
    {
        //false
        console.log("## div output not found");
    }
}
