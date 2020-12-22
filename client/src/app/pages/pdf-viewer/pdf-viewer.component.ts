import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import WebViewer from '@pdftron/webviewer'; 
@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements AfterViewInit {
  @ViewChild('viewer') viewerRef : ElementRef ;

  constructor() { }

  ngAfterViewInit(): void {
    WebViewer({
      path:'../../../assets/lib',
      initialDoc:'https://www.cdc.gov/polio/stop/pdf/stop-cv-format.pdf'
    }, this.viewerRef.nativeElement).then(instance => {

    });

  }

}
