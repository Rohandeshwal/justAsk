import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { JustAskDataHelperService } from 'src/app/core/services/just-ask-data-helper-service';
@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class RegisterServiceComponent implements OnInit {
  serviceDetails: any;
  model: any = {};
  submitted: Boolean = false;
  contactForm: FormGroup;
  constructor(private serviceDataHelper: JustAskDataHelperService, private toastr: ToastrService, private activatedRoute: ActivatedRoute, private shared: SharedService) { }

  ngOnInit(): void {
    this.initContactForm();
    this.getServiceData();
    scrollTo(0, 0);
  }

  initContactForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      address: new FormControl('')
    });
  }

  getServiceData() {
    this.activatedRoute.params.subscribe(route => {
      this.serviceDetails = this.serviceDataHelper.getServiceDetails(route.id);
    });
  }
  onContactFormSave() {
    console.log(this.contactForm.getRawValue());
    this.toastr.success('Thanks for choosing JustAsk Services. Our team will reach out to you shortly.');
    this.submitted = true;
  }
}
