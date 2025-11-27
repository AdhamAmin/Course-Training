# 🌍 Wanderlux — AI Travel Planner

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

Wanderlux is a modern, AI-powered travel planning application designed to create personalized itineraries, discover hidden gems, and provide real-time travel updates. Experience the future of travel with a seamless, intuitive interface.

---

## 📖 Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contact Information](#contact-information)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 About The Project

**Travel Smarter, Not Harder.**

Wanderlux combines the power of artificial intelligence with years of travel expertise to revolutionize how you explore the world. Our platform learns from millions of travelers to provide you with insights, recommendations, and itineraries that match your exact preferences.

### 📊 Key Statistics

- **500K+** Happy Travelers
- **150+** Countries Covered
- **4.9/5** User Rating
- **1M+** Custom Itineraries Created
- **24/7** Customer Support

### 🎯 Mission

Our mission is to make travel planning effortless and enjoyable. We believe that every journey should be unique, and our AI-powered platform ensures that your travel experience is tailored to your preferences, budget, and interests.

---

## ✨ Features

### Core Functionality

#### 🤖 AI-Powered Planning
Intelligent algorithms analyze your preferences, budget, and interests to create the perfect travel plan tailored just for you. Our AI considers:
- Your travel style (adventure, relaxation, culture, etc.)
- Budget constraints and spending preferences
- Time availability and pace preferences
- Dietary restrictions and accessibility needs

#### 📅 Personalized Itineraries
Receive custom day-by-day itineraries with handpicked attractions, restaurants, and hidden gems based on your unique travel style:
- Daily schedules optimized for your energy levels
- Restaurant recommendations based on cuisine preferences
- Activity suggestions matching your interests
- Flexible plans that adapt to changes

#### 🔔 Real-Time Updates
Stay informed with instant notifications about:
- Flight changes and delays
- Weather alerts and forecasts
- Local events and festivals
- Safety advisories and travel restrictions

### User Experience

#### 📱 Fully Responsive Design
- Optimized for all devices (desktop, tablet, mobile)
- Modern CSS techniques including `clamp()` for fluid typography
- Flexible grid layouts that adapt to screen sizes
- Touch-friendly interface for mobile users

#### 🎨 Modern Design
- Sleek, user-friendly interface
- Smooth animations and transitions
- Glassmorphism effects for depth
- Curated color palette for visual harmony
- Custom SVG icons for sharp visuals

#### ♿ Accessible
- Semantic HTML5 structure
- ARIA labels for screen readers
- Keyboard navigation support
- Focus management for interactive elements
- High contrast ratios for readability

---

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic structure and content
- **CSS3**: Advanced styling with modern features
  - CSS Variables for consistent theming
  - Flexbox & Grid for responsive layouts
  - Media Queries for device adaptation
  - CSS Animations for smooth interactions
- **JavaScript (ES6+)**: Dynamic functionality
  - Modular component loading
  - Event handling
  - Form validation
  - Interactive elements

### Assets & Resources
- **Images**: High-quality PNG images for hero and about sections
- **Icons**: Custom SVG icons for crisp visuals on all displays
- **Fonts**: Modern web fonts for typography

### Third-Party Services
- **Formspree**: Contact form backend integration
- **EmailJS**: Email delivery service for contact form

---

## 📂 Project Structure

```
wanderlux/
├── index.html              # Homepage with hero section and overview
├── features.html           # Detailed feature showcase
├── about.html              # About page with mission and statistics
├── contact.html            # Contact form page
├── styles.css              # Main stylesheet with all custom styles
├── README.md               # Project documentation (this file)
├── includes/               # Reusable HTML components
│   ├── header.html         # Site header with navigation
│   └── footer.html         # Site footer with links and newsletter
├── js/                     # JavaScript files
│   └── common.js           # Header/footer injection and utilities
└── images/                 # Image assets
    ├── hero-bg.png         # Hero section background
    └── about-image.png     # About page image
```

### Page Descriptions

#### 🏠 Home Page (`index.html`)
The landing page featuring:
- Captivating hero section with call-to-action
- Project overview and value proposition
- Quick introduction to key features
- Responsive design optimized for conversions

#### ⚡ Features Page (`features.html`)
Detailed breakdown of Wanderlux capabilities:
- AI-Powered Planning details
- Personalized Itinerary creation
- Real-Time Updates system
- Responsive grid layout with custom icons

#### ℹ️ About Page (`about.html`)
Information about the platform:
- Company mission and vision
- Global reach statistics
- User satisfaction metrics
- Platform impact and achievements

#### 📞 Contact Page (`contact.html`)
Functional contact form with:
- Form validation
- Spam protection
- Formspree integration
- Success/error feedback

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML/CSS/JavaScript (for development)
- Text editor or IDE (VS Code, Sublime Text, etc.)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/wanderlux.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd wanderlux
   ```

3. **Open the project**:
   - Simply open `index.html` in your web browser, or
   - Use a local development server for better experience:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```

4. **Access the application**:
   - Open your browser to `http://localhost:8000`

---

## 💡 Usage

### For Users

1. **Navigate to the homepage** to explore the platform
2. **Visit the Features page** to understand all capabilities
3. **Check the About page** to learn about our mission
4. **Use the Contact form** to get in touch with our team

### For Developers

#### Modifying Styles
All styles are centralized in `styles.css`. The stylesheet uses CSS variables for easy theming:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  /* Modify these variables to change the theme */
}
```

#### Adding New Pages
1. Create a new HTML file in the root directory
2. Include the header and footer using the common.js script:
   ```html
   <div id="header-placeholder"></div>
   <!-- Your content here -->
   <div id="footer-placeholder"></div>
   <script src="js/common.js"></script>
   ```

#### Updating Header/Footer
Edit the files in the `includes/` directory:
- `includes/header.html` for navigation
- `includes/footer.html` for footer content

#### Form Integration
The contact form uses Formspree. To use your own endpoint:
1. Sign up at [Formspree](https://formspree.io/)
2. Update the form action in `contact.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID">
   ```

---

## 📞 Contact Information

### Get in Touch

- **Email**: info@Wanderlux.com
- **Phone**: +1 (555) 123-4567
- **Address**: 123 Travel Street, Adventure City, AC 12345

### Social Media

Stay connected with us on social media:

- [Facebook](https://facebook.com/wanderlux)
- [Twitter](https://twitter.com/wanderlux)
- [Instagram](https://instagram.com/wanderlux)
- [LinkedIn](https://linkedin.com/company/wanderlux)

### Support

For technical support or questions:
- Email: support@wanderlux.com
- Response time: Within 24 hours

---

## 📝 Changelog

### [Version 1.0.0] - 2025-11-27

#### ✨ New Features
- **AI-Powered Planning**: Complete implementation of personalized travel planning
- **Responsive Design**: Full mobile, tablet, and desktop optimization
- **Contact Form**: Functional contact form with Formspree integration
- **Modular Structure**: Separated header and footer into reusable components
- **Newsletter Section**: Footer newsletter signup for updates
- **Project Info Section**: Comprehensive overview on homepage

#### 🐛 Bug Fixes & Improvements
- **Footer Layout**: Fixed "Stay in Touch" section alignment
- **Social Icons**: Corrected SVG icon display in footer
- **Typography**: Implemented `clamp()` for fluid text scaling
- **CSS Restoration**: Repaired corrupted styles for consistency
- **Mobile Navigation**: Added hamburger menu for mobile devices
- **Hero Section**: Improved mobile browser support with `100dvh`
- **Grid Layouts**: Refined spacing for all screen sizes
- **Accessibility**: Enhanced ARIA labels and semantic HTML

#### 🎨 Design Updates
- **Color Palette**: Implemented cohesive color scheme
- **Animations**: Added smooth transitions and micro-interactions
- **Glassmorphism**: Applied modern glass effects
- **Wave Separator**: Added SVG wave to footer
- **Four-Column Footer**: Redesigned footer with improved organization

---

## 🤝 Contributing

We welcome contributions to Wanderlux! Here's how you can help:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write clear, descriptive commit messages
- Test your changes across different browsers
- Update documentation as needed
- Ensure responsive design is maintained

---

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2025 Wanderlux

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Acknowledgments

- **Design Inspiration**: Modern web design trends and best practices
- **Icons**: Custom SVG designs
- **Formspree**: For contact form backend
- **Community**: All contributors and users who provide feedback

---

## 🔮 Future Enhancements

### Planned Features

- **User Authentication**: Allow users to save and manage their itineraries
- **Interactive Maps**: Integration with mapping services for visual planning
- **Multi-language Support**: Internationalization for global users
- **Booking Integration**: Direct booking for flights, hotels, and activities
- **Social Sharing**: Share itineraries with friends and family
- **Mobile App**: Native iOS and Android applications
- **AI Chat Assistant**: Real-time chat support with AI travel advisor
- **Budget Tracker**: Track expenses during your trip
- **Photo Gallery**: Upload and organize travel photos
- **Reviews & Ratings**: Community-driven destination insights

---

## 📊 Browser Support

Wanderlux is compatible with the following browsers:

| Browser | Version |
|---------|---------|
| Chrome | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Edge | Latest 2 versions |
| Opera | Latest 2 versions |

---

## 🔒 Privacy & Security

We take your privacy seriously:

- No personal data is stored without consent
- Contact form submissions are encrypted
- Newsletter signups are GDPR compliant
- No tracking cookies without permission

---

## 📞 Need Help?

If you encounter any issues or have questions:

1. Check the documentation above
2. Review existing issues on GitHub
3. Contact us at support@wanderlux.com
4. Join our community forum

---

<div align="center">

**Made with ❤️ by the Wanderlux Team**

*Transforming the way the world travels, one journey at a time.*

[Website](https://wanderlux.com) • [Documentation](https://docs.wanderlux.com) • [Support](mailto:support@wanderlux.com)

</div>
