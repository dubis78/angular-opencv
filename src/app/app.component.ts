import { Component, ElementRef, ViewChild } from "@angular/core";
import { fromEvent, Observable } from 'rxjs';
import { NgOpenCVService, OpenCVLoadResult } from 'ng-open-cv';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // Keep tracks of the ready
  openCVLoadResult: Observable<OpenCVLoadResult>;
  // HTML Element references
  @ViewChild("canvasInput", { static: true })
  canvasInput: ElementRef;
  @ViewChild("canvasOutput", { static: true })
  canvasOutput: ElementRef;

  constructor(private ngOpenCVService: NgOpenCVService) { }

  ngOnInit() {
    this.openCVLoadResult =this.ngOpenCVService.isReady$;
    console.log(this.openCVLoadResult);
    // console.log(cv.getBuildInformation());
    this.setImage();
  }

  // ngOnInit(): void {
  //   this._setImage();
  //   console.log("cv", cv);
  //   cv["onRuntimeInitialized"] = () => {
  //     console.log(cv.getBuildInformation());
  //     // this._runTest();
  //   };
  //   this._runTest();
  // }

  setImage(): void {
    const img = new Image();
    img.src = "assets/face.png";
    const context: CanvasRenderingContext2D = this.canvasInput.nativeElement.getContext(
      "2d"
    );

    img.onload = () => {
      context.drawImage(img, 0, 0);
      // this._runTest();
    };        
  }

  private _runTest(): void {
    console.log('holis');
    // const src = cv.imread(this.canvasInput.nativeElement.id);    
    // const gray = new cv.Mat();
    // cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);    
    // // let low = new cv.Mat(src.rows, src.cols, src.type(), [0, 0, 0, 0]);
    // // let high = new cv.Mat(src.rows, src.cols, src.type(), [150, 150, 150, 255]);
    // // cv.inRange(src, low, high, dst);
    // // cv.imshow('canvasOutput', dst);
    // // const faces = new cv.RectVector();
    // // const eyes = new cv.RectVector();
    // // const faceCascade = new cv.CascadeClassifier();
    // // const eyeCascade = new cv.CascadeClassifier();
    // // load pre-trained classifiers
    // // faceCascade.load("../../assets/haarcascade_frontalface_default.xml");
    // // eyeCascade.load("../../assets/haarcascade_eye.xml");
    // // // detect faces
    // // const msize = new cv.Size(0, 0);
    // // faceCascade.detectMultiScale(gray, faces, 1.1, 3, 0, msize, msize);
    // // for (let i = 0; i < faces.size(); ++i) {
    // //   const roiGray = gray.roi(faces.get(i));
    // //   const roiSrc = src.roi(faces.get(i));
    // //   const point1 = new cv.Point(faces.get(i).x, faces.get(i).y);
    // //   const point2 = new cv.Point(
    // //     faces.get(i).x + faces.get(i).width,
    // //     faces.get(i).y + faces.get(i).height
    // //   );
    // //   cv.rectangle(src, point1, point2, [255, 0, 0, 255]);

    // //   // detect eyes in face ROI
    // //   eyeCascade.detectMultiScale(roiGray, eyes);
    // //   for (let j = 0; j < eyes.size(); ++j) {
    // //     const point11 = new cv.Point(eyes.get(j).x, eyes.get(j).y);
    // //     const point22 = new cv.Point(
    // //       eyes.get(j).x + eyes.get(j).width,
    // //       eyes.get(j).y + eyes.get(j).height
    // //     );
    // //     cv.rectangle(roiSrc, point11, point22, [0, 0, 255, 255]);
    // //   }
    // //   roiGray.delete();
    // //   roiSrc.delete();
    // // }

    // cv.imshow("canvasOutput", gray);
    // src.delete();
    // gray.delete();
    // faceCascade.delete();
    // eyeCascade.delete();
    // faces.delete();
    // eyes.delete();
  }
}
