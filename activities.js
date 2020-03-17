

function createActivs(){

events.forEach(element => {
    let _list = document.createElement("LI");
        let node_item = document.createTextNode(element.name + " -------- " + element.dates);
        _list.appendChild(node_item);
        document.getElementsByClassName("activities-page")[0].appendChild(_list);


});

}