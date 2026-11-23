# Shaily Kumari | Personal Portfolio

A responsive personal portfolio website for **Shaily Kumari**, an aspiring software developer. It showcases her skills, projects, education and resume, with a light and dark theme and a working contact form. It is built with plain HTML, CSS and JavaScript, with no frameworks or build step.

## Features

- **Light and dark theme:** a toggle in the navbar. It follows the device setting on the first visit and remembers the choice afterwards.
- **Responsive design:** works on desktop, tablet and mobile, with a hamburger menu on small screens.
- **Smooth navigation:** a sticky navbar that highlights the section you are currently viewing.
- **Scroll animations:** sections and cards fade in as you scroll, and cards lift on hover.
- **Project cards:** each shows its tech stack, a GitHub link and a live demo link.
- **Education timeline:** undergraduate and school education.
- **Resume download:** a one-click Download Resume button.
- **Contact form:** validates the fields and opens the visitor's email app with the message ready to send.
- **Back-to-top button** and an automatic footer year.
- **Accessible:** skip link, keyboard-friendly menu (Esc closes it), ARIA labels and reduced-motion support.

## Sections

1. Home
2. About
3. Skills
4. Projects
5. Education
6. Resume
7. Contact

## Projects Featured

| Project | Tech | Repository |
|---|---|---|
| Personal Portfolio Website | HTML, CSS, JavaScript | [FUTURE_FS_02](https://github.com/Shaily-2910/FUTURE_FS_02) |
| Campus Event Seat Reservation API | Python, FastAPI, SQLModel, SQLite | [Campus-Event-Seat-Reservation-API](https://github.com/Shaily-2910/Campus-Event-Seat-Reservation-API) |
| Cappuccino Cafe Website | HTML, CSS, JavaScript | [FUTURE_FS_03](https://github.com/Shaily-2910/FUTURE_FS_03) |

## Tech Stack

- **HTML5**
- **CSS3** (custom properties, Grid, Flexbox)
- **Vanilla JavaScript** (no libraries)
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) (Inter and Poppins)

## Project Structure

```
.
├── index.html      # Page structure and content
├── style.css       # Styling, themes and responsive layout
├── script.js       # Theme toggle, navigation, animations, contact form
├── assets/
│   └── resume.pdf  # Resume used by the Download Resume button
└── README.md
```

## Run Locally

No installation is needed.

1. Clone the repository:
   ```bash
   git clone https://github.com/Shaily-2910/<repository-name>.git
   ```
2. Open the folder and double-click `index.html`, or serve it locally:
   ```bash
   # Python
   python -m http.server 5500
   ```
   Then visit `http://localhost:5500`.

## Deploy on GitHub Pages

1. Push the files to your GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, choose the `main` branch and the `/ (root)` folder, then save.
4. After a minute, your site is live at `https://shaily-2910.github.io/<repository-name>/`.

## Customisation

- **Live demo links:** replace `YOUR_PORTFOLIO_LIVE_URL`, `YOUR_API_LIVE_URL` and `YOUR_CAFE_LIVE_URL` in `index.html` with the real project URLs.
- **Resume:** put your resume at `assets/resume.pdf`.
- **Contact form email:** change `CONTACT_RECIPIENT` at the top of `script.js`.
- **Colours:** edit the CSS variables at the top of `style.css`. There is one set for light mode and one for dark mode.

## Contact

- **Email:** [shailykumari128@gmail.com](mailto:shailykumari128@gmail.com)
- **LinkedIn:** [linkedin.com/in/shaily-kumari-812a7531b](https://www.linkedin.com/in/shaily-kumari-812a7531b)
- **GitHub:** [github.com/Shaily-2910](https://github.com/Shaily-2910)

---

&copy; Shaily Kumari. All rights reserved.
