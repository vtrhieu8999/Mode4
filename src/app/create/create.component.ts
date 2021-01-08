import {Component, OnInit} from '@angular/core';
import {Ibook} from '../ibook';
import {BookService} from '../book.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  newProductForm: FormGroup;

  constructor(private http: HttpClient,
              private fb: FormBuilder,
              private productService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.newProductForm = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    });
  }

  // tslint:disable-next-line:typedef
  create() {
    const newP: Ibook = this.newProductForm.value;
    this.productService.save(newP).subscribe(() => {
      alert('successfully');
      this.router.navigate(['/create']);
    });
  }
}
