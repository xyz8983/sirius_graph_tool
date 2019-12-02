import * as d3 from "d3";
import {generateGraghChart} from "./graph_chart";

(function(){
   console.log('hey is it still alive');

   let jsonUrl = <HTMLInputElement>document.getElementById('json-url');
   if (jsonUrl && jsonUrl.value){
      generateGraghChart(jsonUrl);
   }


}());