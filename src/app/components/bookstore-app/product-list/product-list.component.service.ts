import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "./product-item/model/book";
import { ListBook } from "./product-item/model/book-list";
import { Observable } from "rxjs";

@Injectable()

export class BooksService {
    private url = 'https://api.itbook.store/1.0/new';

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'}),
    }

    constructor (private http: HttpClient) { }

    getBook(): Observable<ListBook> {
        return this.http.get<ListBook>(this.url)
    }
}