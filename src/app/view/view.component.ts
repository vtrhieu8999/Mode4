import {Component, OnInit} from '@angular/core';
import {Ibook} from '../ibook';
import {BookService} from '../book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  private id: number;

  product: Ibook;


  constructor(
    private productService: BookService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;

      this.productService.findById(this.id).toPromise().then(value => {
        console.log(value);
        this.product = value;
      });
    });
  }
}
