import { Component } from '@angular/core';
import { CanvasWhiteboardComponent, CanvasWhiteboardModule, CanvasWhiteboardOptions } from 'ng2-canvas-whiteboard';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   viewProviders: [CanvasWhiteboardComponent]
})
export class AppComponent {
  title = 'AngularWhiteBoard';
  
canvasOptions: CanvasWhiteboardOptions = {
    drawButtonEnabled: true,
    drawButtonClass: "drawButtonClass",
    drawButtonText: "Draw",
    clearButtonEnabled: true,
    clearButtonClass: "clearButtonClass",
    clearButtonText: "Clear",
    undoButtonText: "Undo",
    undoButtonEnabled: true,
    redoButtonText: "Redo",
    redoButtonEnabled: true,
    colorPickerEnabled: true,
    saveDataButtonEnabled: true,
    saveDataButtonText: "Save",
    lineWidth: 5,
    strokeColor: "rgb(0,0,0)",
    shouldDownloadDrawing: true
  };
  
}
