import * as d3 from "d3";
import {generateGraghChart} from "./graph_chart";

(function(){
   console.log('hey is it still alive');

   let jsonUrl = <HTMLInputElement>document.getElementById('json-url'),
       body = document.getElementsByTagName("body")[0];

   if (jsonUrl && jsonUrl.value){
      // remove background image, replace with background color
      body.style.backgroundImage = 'None';
      generateGraghChart(jsonUrl);
   }


}());