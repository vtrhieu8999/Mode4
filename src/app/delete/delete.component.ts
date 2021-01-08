import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  id: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: BookService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
  }

  // tslint:disable-next-line:typedef
  onDelete() {
    this.productService.deleteById(this.id).toPromise().then(value => {
      console.log('Delete', value);
      this.router.navigate(['/']);
    });
  }

}
