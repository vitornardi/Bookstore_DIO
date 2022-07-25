import { Component, OnInit } from '@angular/core';
import { Book } from './product-item/model/book';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  livros: Array<Book> = [];
  bookService: BooksService;

  constructor( bookService: BooksService ) {
    this.bookService = bookService;
   }

  ngOnInit(): void {
      this.bookService.getBook().subscribe((data => {
      this.livros = this.formataPrecos(data.books.splice(0, 12));;
      console.log(this.livros);
    }))
  }

  formataPrecos(list: Array<Book>) {
    for (let i = 0; i < list.length; i++) {
      const preco = list[i].price.substring(1);
      list[i].priceReal = Number(preco);
    }
    return list;
  }
}
