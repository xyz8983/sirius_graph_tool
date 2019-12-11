import * as d3 from "d3";
import * as $ from "jquery";

export function display_chart(){

    // add event listener to the document, ensure the listener can be created before the target element, lke line, is created
    document.addEventListener("click", function(e){
        let clickedElement: any = e.target;
        if (clickedElement.nodeName=='line'){
            let sourceName = clickedElement.__data__.source.source,
                sourceIndex = clickedElement.__data__.source.index,
                targetName = clickedElement.__data__.target.source,
                targetIndex = clickedElement.__data__.target.index,
                imageType = '.png',
                uploadFolderPath = '/static/upload_files/';
            let staticImageFileName = sourceName.split(" ").join("_") + "_" + targetName.split(" ").join("_");
            staticImageFileName = staticImageFileName + imageType;

            let staticImageURL = uploadFolderPath + staticImageFileName,
                rightContentBar = <HTMLElement>document.querySelector(".right-bar-content"),
                imageElement = <HTMLImageElement>document.getElementById("difference_chart"),
                rightImageBar = <HTMLElement>document.querySelector(".right-bar-image"),
                uploadLink = document.getElementById("upload-link"),
                imageTitleElement = document.getElementById("image-title");

            $.ajax({
                url: staticImageURL,
                success: function(){
                    let imageTitle = sourceName.toUpperCase() + ' VS ' + targetName.toUpperCase();
                    uploadLink.click(); // or uploadLink.hidden = true;
                    rightContentBar.hidden = true;
                    rightImageBar.hidden = false;
                    imageTitleElement.innerText = imageTitle;
                    imageElement.src = staticImageURL;
                    imageElement.height = 200;
                    imageElement.width = 300;
                },
                error: function(){
                    uploadLink.click(); // or uploadLink.hidden = true;
                    rightContentBar.hidden = true;
                    rightImageBar.hidden = false;
                    imageTitleElement.innerText = "No Image For this Edge";
                    imageElement.removeAttribute("src");
                    imageElement.removeAttribute("height");
                    imageElement.removeAttribute("width");
                }
            });
        }

    });

}