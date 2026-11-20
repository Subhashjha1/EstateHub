import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-properties',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink],
    templateUrl: './properties.html',
    styleUrl: './properties.css'
})

export class Properties implements OnInit {

    // PROPERTY DATA
    properties = [
        {
            id: 1,
            title: 'Modern Luxury Villa',
            type: 'Luxury Villa',
            location: 'Gurgaon, Haryana',
            price: '₹2.5 Crore',
            priceValue: 25000000,
            status: 'For Sale',
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
            priceValue: 45000,
            status: 'For Rent',
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
            priceValue: 18000000,
            status: 'For Sale',
            beds: 5,
            baths: 4,
            area: '3,000 Sq.ft',
            image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800'
        }
    ];

    // SEARCH FILTERS
    filteredProperties = [...this.properties];

    locationSearch = '';
    selectedType = '';
    selectedBudget = '';

    activeTab = 'Buy';

    constructor(private route: ActivatedRoute) {}

    // READ BUY/RENT SELECTION FROM URL
    ngOnInit(): void {

        this.route.queryParamMap.subscribe(params => {

            const status = params.get('status');

            if (status === 'Buy' || status === 'Rent') {
                this.activeTab = status;
            } else {
                this.activeTab = 'Buy';
            }

            this.filterProperties();

        });

    }

    // SWITCH BETWEEN BUY AND RENT
    selectTab(tab: string): void {

        this.activeTab = tab;
        this.filterProperties();

    }

    // FILTER PROPERTY LISTINGS
    filterProperties(): void {

        this.filteredProperties = this.properties.filter(property => {

            const matchesLocation =
                property.location.toLowerCase().includes(
                    this.locationSearch.toLowerCase()
                );

            const matchesType =
                !this.selectedType ||
                property.type === this.selectedType;

            const matchesBudget =
                !this.selectedBudget ||
                property.priceValue <= Number(this.selectedBudget);

            const matchesStatus =
                this.activeTab === 'Buy'
                    ? property.status === 'For Sale'
                    : property.status === 'For Rent';

            return matchesLocation &&
                   matchesType &&
                   matchesBudget &&
                   matchesStatus;

        });

    }

}