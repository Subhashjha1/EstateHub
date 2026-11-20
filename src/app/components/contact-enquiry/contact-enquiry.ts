import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact-enquiry',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './contact-enquiry.html',
    styleUrl: './contact-enquiry.css'
})

export class ContactEnquiry {

    name = '';
    email = '';
    phone = '';
    message = '';

    submitted = false;

    submitEnquiry(): void {

        if (!this.name || !this.email || !this.phone || !this.message) {
            return;
        }

        this.submitted = true;

    }

}
