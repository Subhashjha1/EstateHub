import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-agents',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './agents.html',
    styleUrl: './agents.css'
})

export class Agents {

    agents = [
        {
            id: 1,
            name: 'Rahul Sharma',
            role: 'Senior Property Consultant',
            location: 'Gurgaon, Haryana',
            experience: '8 Years Experience',
            properties: 42,
            phone: '+91 98765 43210',
            email: 'rahul@estatehub.com',
            image: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
            id: 2,
            name: 'Priya Mehta',
            role: 'Residential Property Expert',
            location: 'South Delhi, Delhi',
            experience: '6 Years Experience',
            properties: 35,
            phone: '+91 98765 12340',
            email: 'priya@estatehub.com',
            image: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
            id: 3,
            name: 'Amit Verma',
            role: 'Commercial Property Advisor',
            location: 'Noida, Uttar Pradesh',
            experience: '5 Years Experience',
            properties: 28,
            phone: '+91 98765 67890',
            email: 'amit@estatehub.com',
            image: 'https://randomuser.me/api/portraits/men/46.jpg'
        }
    ];

}