
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './home.html',
    styleUrl: './home.css'
})

export class Home {

    featuredProperties = [
        {
            id: 1,
            title: 'Modern Luxury Villa',
            type: 'Luxury Villa',
            location: 'Gurgaon, Haryana',
            price: '₹2.5 Crore',
            beds: 4,
            baths: 3,
            area: '2,400 Sq.ft',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'
        },
        {
            id: 2,
            title: 'Contemporary City Apartment',
            type: 'Premium Apartment',
            location: 'South Delhi, Delhi',
            price: '₹45,000 / month',
            beds: 3,
            baths: 2,
            area: '1,650 Sq.ft',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
        },
        {
            id: 3,
            title: 'Elegant Family Residence',
            type: 'Independent House',
            location: 'Patna, Bihar',
            price: '₹1.8 Crore',
            beds: 5,
            baths: 4,
            area: '3,000 Sq.ft',
            image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800'
        }
    ];

}
