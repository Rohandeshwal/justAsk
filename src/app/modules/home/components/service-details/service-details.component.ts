import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { JustAskDataHelperService } from 'src/app/core/services/just-ask-data-helper-service';
import { APIService } from 'src/app/core/services/api.service';
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
  constructor(private serviceDataHelper: JustAskDataHelperService, private toastr: ToastrService, private activatedRoute: ActivatedRoute, private apiService: APIService, private router:Router) { }

  ngOnInit(): void {
    this.getServiceData();
    this.initContactForm();
    window.scrollTo(0, 0);
  }

  initContactForm() {
    this.contactForm = new FormGroup({
      serviceName:new FormControl({value: this.serviceDetails.name,disabled:true},Validators.required),
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
    const contactDetails = this.contactForm.getRawValue();
    // TODO: Move the url to a constant/config file
    this.apiService.httpPost("contact", contactDetails).subscribe(response => {
      this.router.navigate(["home"]);
      this.toastr.success('Thanks for choosing JustAsk Services. Our team will reach out to you shortly.');
      this.submitted = true;
    });
  }
}
