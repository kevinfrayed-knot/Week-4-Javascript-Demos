function page_load()
{
    const msg = "## page2 load";
    console.log(msg);

    const _page_title_ele = document.getElementById("page-title");

    if (_page_title_ele != null | _page_title_ele!= undefined){
        _page_title_ele.innerText = "<b>div updated</b>";
        //_page_title_ele.innerHTML = "<b>div updated</b>";
        _page_title_ele.style.background_color = "#f5f5dc";
        //_page_title_ele.clasList.add("style1", "style2")
    }
    else
    {
        msg = "## _page_title_ele not found";
        console.log(msg);
    }
}

function demo_func1()
{
    const msg = "## demo_func1...";
    console.log(msg);
}

function demo_dom_1()
{
    let msg = "## demo_dom_1";
    console.log(msg);

    const outputDiv = document.getElementById("output");

    if (outputDiv != null | outputDiv!= undefined){
        outputDiv.innerText = "<b>div updated</b>";
        //outputDiv.innerHTML = "<b>div updated</b>";
        outputDiv.style.color = "blue";
        //outputDiv.clasList.add("style1", "style2")
    }
    else
    {
        msg = "## output div not found";
        console.log(msg);
    }
}