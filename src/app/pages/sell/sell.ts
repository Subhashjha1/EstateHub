import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-sell',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './sell.html',
    styleUrl: './sell.css'
})

export class Sell {

    propertyTitle = '';
    propertyType = '';
    location = '';
    price = '';
    name = '';
    email = '';
    phone = '';

    submitted = false;

    submitProperty(): void {

        if (
            !this.propertyTitle ||
            !this.propertyType ||
            !this.location ||
            !this.price ||
            !this.name ||
            !this.email ||
            !this.phone
        ) {
            return;
        }

        this.submitted = true;

    }

}
