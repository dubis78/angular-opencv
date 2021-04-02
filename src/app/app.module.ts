import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgOpenCVModule } from 'ng-open-cv';
import { OpenCVOptions } from 'ng-open-cv';

const openCVConfig: OpenCVOptions = {
  scriptUrl: `assets/opencv/opencv.js`,
  wasmBinaryFile: 'wasm/opencv_js.wasm',
  usingWasm: true
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,NgOpenCVModule.forRoot(openCVConfig),],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
