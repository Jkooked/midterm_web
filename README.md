# FLY FUN — Travel Agency

FLY FUN is an educational travel agency website created for the Midterm Project. Visitors can learn about the agency, explore destinations, compare tour prices, and complete a demo booking form. The project focuses on travel and tourism, and the website interface is in English.

## Team Members and Individual Contributions

Our team has three members: **Karima, Saida, and Ainaz**. Responsibilities are assigned as follows:

| Team Member | Pages and Responsibilities |
| --- | --- |
| **Karima** | Home (`index.html`) and About (`about.html`): the hero section, destination cards, agency information, and guide profiles; the shared header and footer, Flexbox navigation, typography, and basic styling. |
| **Saida** | Tours (`tours.html`) and Contacts (`contacts.html`): the tour pricing table, booking form with labels and required fields, email validation, automatic tour selection, and a local booking request preview. |
| **Ainaz** | Gallery (`gallery.html`): the CSS Grid photo gallery and captions; tablet and mobile responsiveness, hover and focus effects, README documentation, and preparation for deployment. |

Each member should be able to explain the entire project, including the pages and code assigned to other members.

## Implemented Features

- Five pages with shared navigation and an active page indicator.
- Semantic HTML5 elements: `header`, `nav`, `main`, `section`, and `footer`.
- Destination cards using Bootstrap Grid and a separate photo gallery using CSS Grid.
- A comparison table for four tours, with horizontal scrolling on narrow screens and alternating rows using `:nth-child()`.
- A form with native HTML validation; each Book Now button automatically selects the corresponding tour.
- Responsive layouts with media queries at `767.98px` and `575.98px`, Flexbox, and CSS positioning.
- CSS variables, the Outfit font from Google Fonts, `:hover` effects, and visible keyboard focus.
- Lazy image loading with `loading="lazy"`.
- Contact details, a copyright notice, and external social platform links in the footer.

## Technologies Used

HTML5, CSS3, Bootstrap **5.3.3**, Google Fonts, and a small JavaScript file for the demo form. Bootstrap is included locally in `css/bootstrap.min.css`; all custom styles are in `css/style.css`. No build process or npm installation is required.

## Running the Project

Download the project and open `index.html` in a browser. Alternatively, run a local server from the project folder:

```bash
python3 -m http.server 8000
```

Then open [localhost:8000](http://localhost:8000). An internet connection is required for Google Fonts and external Unsplash images.

## Deployment

- [Project repository](https://github.com/Jkooked/midterm_web)
- [Website address after enabling GitHub Pages](https://jkooked.github.io/midterm_web/)

As of **October 6, 2026**, GitHub Pages has not been enabled for this repository. Before submission, select **Settings → Pages → Deploy from a branch → main → /(root) → Save**. After deployment, check the website and update this status. See the [GitHub deployment guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

The project was originally based on [saeshaa/midterm_web](https://github.com/saeshaa/midterm_web).

## Demo Limitations

The form validates input and displays a preview in the browser. It **does not send requests, store data, or confirm bookings**. Real booking requests would require a backend or a form processing service. Contact details are for demonstration purposes, and the Facebook, X, and Instagram links lead to the platforms' homepages.
