import * as d3 from "d3";

export function display_chart(){

    // add event listener to the document, ensure the listener can be created before the target element, lke line, is created
    document.addEventListener("click", function(e){
        console.log("here clicked?");
        console.log(e);
        let clickedElement: any = e.target;
        console.log("line or not", clickedElement.nodeName=='line');
        if (clickedElement.nodeName=='line'){
            let sourceName = clickedElement.__data__.source.source,
                sourceIndex = clickedElement.__data__.source.index,
                targetName = clickedElement.__data__.target.source,
                targetIndex = clickedElement.__data__.target.index;
            console.log("here?", clickedElement.__data__);
            console.log("sourceName",sourceName);
            console.log("sourceIndex",sourceIndex);
            console.log("targetName",targetName);
            console.log("targetIndex",targetIndex);


        }

    });

}