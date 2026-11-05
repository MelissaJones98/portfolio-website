# Portfolio Website

My personal portfolio website, introducing who I am as a junior full-stack developer and bringing my projects and certificates together in one place.

> **Status: in progress.** The site is styled and interactive, but the contact form doesn't send messages yet and the site isn't deployed.

## What's on the Site

It's a single page, with these sections:

- **Header:** navigation links, my photo, name (linked to my GitHub profile) and job title
- **About Me:** a short bio covering how I work and my creative hobbies
- **Projects:** a carousel of 14 project cards, shown one at a time, each with a description, the technologies used and a link to its GitHub repository (many also list features)
- **Certificates and Qualifications:** 13 certificates from Codecademy, IT Career Switch and Zenva, shown with their completion dates
- **Contact Me:** a form with name, email and message fields
- **Footer:** copyright notice

## Features

- **Project carousel:** move between projects with the arrow buttons or by swiping. Each arrow hides when you reach that end of the list, and long projects scroll inside their card.
- **Contact form checks:** values are trimmed before they're checked, so a field containing only spaces counts as empty, and a success or error message appears below the form. Messages aren't sent anywhere yet.
- **Go to top button:** appears once you've scrolled down the page.
- **Responsive layout:** the page adapts to narrower screens using CSS media queries. For example, the carousel arrows move below the cards on small screens.

## Technologies

- HTML
- CSS
- JavaScript
- [Google Fonts](https://fonts.google.com/) (PT Sans and PT Mono)

There are no frameworks, dependencies or build steps.

## Running Locally

1. Clone the repository:

   ```bash
   git clone git@github.com:MelissaJones98/portfolio-website.git
   ```

2. Open `index.html` in your browser.

## Project Structure

```text
portfolio-website/
├── certificates/    # Certificate images
├── css/
│   └── styles.css   # Site styles
├── index.html       # All page content
├── photo.png        # Profile photo
├── script.js        # Carousel, go to top button and contact form handling
└── README.md
```

## Roadmap

- [x] Style the site, including responsive layouts
- [x] Add a project carousel, go to top button and contact form checks
- [ ] Make the contact form send messages (it currently shows a thank-you message without sending anything)
- [ ] Fix the right carousel arrow staying visible on the last card when the page is zoomed
- [ ] Add a dropdown to the navigation that jumps to a chosen project's card
- [ ] Add screenshots to the project cards
- [ ] Deploy the site
- [ ] Link to live versions of projects as they are deployed

## Author

**Melissa Jones** - [GitHub](https://github.com/MelissaJones98)
