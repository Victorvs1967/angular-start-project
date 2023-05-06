import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";

export class AppDataSource extends DataSource<any> {

  data: BehaviorSubject<any[]>;

  constructor(data: any[]) {
    super();
    this.data = new BehaviorSubject<any[]>(data);
  }

  override connect(): Observable<any[]> {
    return this.data;
  }

  override disconnect(collectionViewer: CollectionViewer): void {
    throw new Error("Method not implemented.");
  }

}
