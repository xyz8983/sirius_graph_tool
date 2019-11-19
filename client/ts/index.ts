import * as d3 from "d3";

(function(){
   console.log('hey is it still alive');

   let jsonUrl = <HTMLInputElement>document.getElementById('json-url');
   if (jsonUrl && jsonUrl.value){
      console.log('value', jsonUrl.value);
      d3.json(jsonUrl.value, function(error, data){
         console.log(data);
      });
      // todo: get pure blue background of the image or just the color
   }


}());