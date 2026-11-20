
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContactEnquiry } from '../../components/contact-enquiry/contact-enquiry';

@Component({
    selector: 'app-property-details',
    standalone: true,
    imports: [CommonModule, RouterLink, ContactEnquiry],
    templateUrl: './property-details.html',
    styleUrl: './property-details.css'
})

export class PropertyDetails implements OnInit {

    property: any;

    // IMAGE GALLERY PREVIEW
selectedImage: string | null = null;

galleryImages = [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200'
];

// OPEN IMAGE PREVIEW
openImage(image: string): void {
    this.selectedImage = image;
}

// CLOSE IMAGE PREVIEW
closeImage(): void {
    this.selectedImage = null;
}

    // PROPERTY DATA
    properties = [

        {
            id: 1,
            title: 'Modern Luxury Villa',
            type: 'Luxury Villa',
            location: 'Gurgaon, Haryana',
            price: '₹2.5 Crore',
            status: 'For Sale',
            beds: 4,
            baths: 3,
            area: '2,400 Sq.ft',
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
            description: 'Experience premium living in this beautiful modern luxury villa. Designed with elegant interiors, spacious rooms and contemporary architecture.',
            amenities: [
                'Swimming Pool',
                'Parking',
                'Garden',
                'Security',
                'Modular Kitchen',
                'Balcony'
            ]
        },

        {
            id: 2,
            title: 'Contemporary City Apartment',
            type: 'Premium Apartment',
            location: 'South Delhi, Delhi',
            price: '₹45,000 / month',
            status: 'For Rent',
            beds: 3,
            baths: 2,
            area: '1,650 Sq.ft',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
            description: 'Enjoy comfortable city living in this contemporary apartment featuring modern interiors, spacious rooms and excellent connectivity.',
            amenities: [
                'Lift',
                'Parking',
                'Security',
                'Gym',
                'Balcony',
                'Power Backup'
            ]
        },

        {
            id: 3,
            title: 'Elegant Family Residence',
            type: 'Independent House',
            location: 'Patna, Bihar',
            price: '₹1.8 Crore',
            status: 'For Sale',
            beds: 5,
            baths: 4,
            area: '3,000 Sq.ft',
            image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200',
            description: 'A spacious family residence offering a peaceful environment, elegant architecture and generous living spaces.',
            amenities: [
                'Garden',
                'Parking',
                'Security',
                'Terrace',
                'Balcony',
                'Water Supply'
            ]
        }

    ];

    // CONSTRUCTOR
    constructor(private route: ActivatedRoute) {}

    // LOAD PROPERTY DETAILS
    ngOnInit(): void {

        const propertyId = Number(
            this.route.snapshot.paramMap.get('id')
        );

        this.property = this.properties.find(
            item => item.id === propertyId
        );

    }

    // SCROLL TO ENQUIRY FORM
    scrollToEnquiry(): void {

        document.getElementById('enquiry-form')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    }

}
