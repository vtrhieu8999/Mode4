import {Component, OnInit, TemplateRef, ViewEncapsulation} from '@angular/core';
import {BookService} from '../book.service';
import {Ibook} from '../ibook';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  products: Ibook[];
  public modalRef: BsModalRef;

  constructor(private productService: BookService,
              private modalService: BsModalService) {
  }

  public openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.productService.getAll().toPromise().then(value => {
      this.products = value;
      console.log(value);
      console.log(this.products);
    });
  }

}
