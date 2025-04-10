import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { endPoints } from "../Model/Constents/endPoints";

@Injectable({
 providedIn: 'root'
})

export class BaseService {
    constructor(private Http: HttpClient) { }
  
    getGridData() {
        return this.Http.get(endPoints.gridStructure);
    }

    // This method fetches random user profile Images
    getRandomImages() {
        return this.Http.get(endPoints.imageUrl);
    }
}