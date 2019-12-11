import * as d3 from "d3";
import {generateGraghChart} from "./graph_chart";
import {display_chart} from "./display_difference_chart";

(function(){

   let jsonUrl = <HTMLInputElement>document.getElementById('json-url'),
       body = document.getElementsByTagName("body")[0],
       closeBtn = document.getElementsByClassName("close-btn")[0],
       rightBar = document.getElementById("right-bar"),
       uploadLink = document.getElementById("upload-link");

   // display the right panel
   uploadLink.addEventListener("click", function(){
      rightBar.hidden = false;
   });
   // close the right panel
   closeBtn.addEventListener("click", function(evt){
      rightBar.hidden = true;

   });
   // draw graph network
   if (jsonUrl && jsonUrl.value){
      // remove background image, replace with background color
      body.style.backgroundImage = 'None';
      // hide right panel by default when graph chart is generated
      if (rightBar){
         rightBar.hidden = true;
      }
      generateGraghChart(jsonUrl);
      display_chart();
   }

}());