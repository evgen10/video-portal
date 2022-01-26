import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICource } from "src/app/core/models/cource";

@Injectable({
  providedIn: 'root'})
export class CourceService {
  private readonly courcesEndPoint: string = 'http://localhost:3004/courses';

  public videoCources: Array<ICource> = new Array<ICource>();

  constructor(private httpClient: HttpClient) { }

  public getAll(count?: number, fragmentSearch?: string): Observable<Array<ICource>> {
    let params: HttpParams = new HttpParams();
    if (count && count > 0) {
      params = params.set('count', count.toString());
    }
    if (fragmentSearch) {
      params = params.set('textFragment', fragmentSearch);
    }
    params = params.set('sort', 'date');
    return this.httpClient.get<Array<ICource>>(this.courcesEndPoint, {
      params
    })
  }

  public add(cource: ICource): Observable<ICource> {
    return this.httpClient.post<ICource>(this.courcesEndPoint, cource)
  }

  public getById(id: number): Observable<ICource> {
    return this.httpClient.get<ICource>(`${this.courcesEndPoint}/${id}`);
  }

  public edit(changedCource: ICource): Observable<ICource> {
    console.log(`${this.courcesEndPoint}/${changedCource.id}`);
    return this.httpClient.patch<ICource>(`${this.courcesEndPoint}/${changedCource.id}`, changedCource);
  }

  public remove(id: number): Observable<object> {
    return this.httpClient.delete(`${this.courcesEndPoint}/${id}`);
  }
}
