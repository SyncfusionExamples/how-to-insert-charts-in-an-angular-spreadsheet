import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent, getFormatFromType, ChartModel, getCell, getRangeIndexes, SheetModel } from '@syncfusion/ej2-angular-spreadsheet';
import {GDPData} from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';

  @ViewChild("spreadsheet")
  public ssObj: SpreadsheetComponent|undefined;

  public data:object = GDPData();

  public chart: ChartModel[] = [{ type:'Bar', theme:'Material', isSeriesInRows:true, range:'A2:E8'}]

  public btnClick(){
    let rangeIndex = getRangeIndexes("G1")
    let cell = getCell(rangeIndex[0], rangeIndex[1], (this.ssObj?.getActiveSheet() as SheetModel))
    if(cell.chart){
      this.ssObj?.deleteChart(cell.chart[0].id)
    }
  }
 
  public onCreated(){
    this.ssObj?.cellFormat(
      { backgroundColor: '#e56590', 
        color: '#fff', 
        fontWeight: 'bold', 
        textAlign: 'center' }, 
      'A1:E1');
    this.ssObj?.numberFormat(getFormatFromType('Currency'), 'B2:E8');
    // this.ssObj?.insertChart(this.chart);
  }
}
