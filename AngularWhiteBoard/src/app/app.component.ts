import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularWhiteBoard';
  
 color; //to change line color
 width; //to change line width
 isPensil = false;

directive("drawing", function(){
  return {
    restrict: "EA",
    link: function(scope, element){

      
      var ctx = element[0].getContext('2d');
      
         console.log('asdasd'+element);
      
      // variable that decides if something should be drawn on mousemove
      var drawing = false;
      
      // the last coordinates before the current move
      var lastX;
      var lastY;
      
      
      element.bind('mousedown', function(event){
        if(event.offsetX!==undefined){
          lastX = event.offsetX;
          lastY = event.offsetY;
        } else {
          lastX = event.layerX - event.currentTarget.offsetLeft;
          lastY = event.layerY - event.currentTarget.offsetTop;
        }
        
        // begins new line
        ctx.beginPath();
        
        drawing = true;
      });
      element.bind('mousemove', function(event){
        if(drawing && isPensil){
          // get current mouse position
          if(event.offsetX!==undefined){
            currentX = event.offsetX;
            currentY = event.offsetY;
          } else {
            currentX = event.layerX - event.currentTarget.offsetLeft;
            currentY = event.layerY - event.currentTarget.offsetTop;
          }
          
          draw(lastX, lastY, currentX, currentY);
          
          // set current coordinates to last one
          lastX = currentX;
          lastY = currentY;
        }
        
      });
      element.bind('mouseup', function(event){
        // stop drawing
        drawing = false;
      });
        
      // canvas reset
      function reset(){
       element[0].width = element[0].width; 
      }
      
      function draw(lX, lY, cX, cY){
        // line from
        console.log(lX,lY,cX,cY);
        ctx.moveTo(lX,lY);
        // to
        ctx.lineTo(cX,cY);
        // color
        ctx.strokeStyle = color;
        
        ctx.lineWidth = width;
        
        // draw it
        ctx.stroke();
      }
    //}
  }
  };
});


//controller for pencil tool
app.controller('colorCtrl',function($scope){

  //for change color
  $scope.GetColor = function (selected) {
                color = $scope.selected;
                console.log('color is ' + color);
                
            }

  //for change size
  $scope.GetWidth = function (selected) {
    width = $scope.selected;
    console.log('width is ' + width);

  }

});

controller('pencliCtrl',function($scope) {
  $scope.getPencil = function()
  {
    isPensil = true;
    console.log('isPensil=true');
  }

});

// app.controller('ctrlNav', function () {});

// app.directive("offCanvasMenu", function () {
//     return {
//         restrict: 'A',
//         replace: false,
//         link: function (scope, element) {
//             scope.isMenuOpen = false;
//             scope.toggleMenu = function () {
//                 scope.isMenuOpen = !scope.isMenuOpen;
//             };
//         }
//     };
// });

}
