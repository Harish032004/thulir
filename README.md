# Thulir Matchmaking Website — Premium Revision

Responsive multi-page static website designed around the supplied Thulir botanical logo and its ivory, olive, saffron and warm-brown palette.

## Included pages

- `index.html` — redesigned homepage
- `process.html` — professional full-process page
- `founder-story.html` — editorial founder’s story page
- `enroll.html` — enrollment Step 1 with 30 questions
- `enroll-step-2.html` — enrollment Step 2 with 30 questions and Google Form submission
- `enquiry.html` — compatibility URL that redirects to enrollment

## Homepage navigation

Home · About · How it works · Full process · Membership · FAQ · Our story · Begin journey

The mobile menu is a responsive full-screen drawer with:

- A large logo and Tamil wordmark
- A clear X close control
- Background overlay closing
- Escape-key closing
- Focus trapping and body scroll locking
- Automatic closing after selecting a menu item

## Revision highlights

- Compact hero rather than a full-screen-height hero
- Related dummy image URLs added to the hero and supporting editorial areas
- The instructional “No swiping...” line is not displayed
- Complete About Thulir copy restored and arranged in a premium editorial layout
- Compact founder’s note with the complete supplied quotation
- Interactive How It Works cards with hover/focus highlighting
- Individual package CTAs plus a centered general `Enroll` button below all plans
- General enrollment clears any previously selected package; package-specific buttons still show the selected tier
- Testimonials uses the requested `SECTION 09 — TESTIMONIALS` wording and placeholder text
- FAQ retains category choice chips with About Thulir selected by default
- Upgraded founder story, full process, footer, desktop navigation and mobile layouts

## Editing individual sections

Each major section keeps its own `<style>` block immediately above that section. JavaScript used only by a section is also placed immediately above that section.

Shared navigation, buttons, footer and responsive foundations are in:

- `assets/css/global.css`
- `assets/js/global.js`

## Replacing dummy images

Search the HTML files for:

`https://images.pexels.com/`

Replace any of those URLs with the client’s approved photographs. Image containers already include responsive cropping, border radius, overlays and mobile sizing.

## Connect enrollment to Google Forms

The website is prepared to send all 60 answers to a Google Form. Complete the one-time configuration below:

1. Create a Google Form with two Paragraph questions: `Enrollment — Step 1` and `Enrollment — Step 2`.
2. Optionally add a Short answer question named `Submission reference`.
3. Find the `entry.xxxxx` ID for each field.
4. Open `assets/js/google-form-config.js`.
5. Replace the placeholder Google Form action URL and entry IDs.
6. Upload and test one enrollment.

Until the Google Form configuration is supplied, entered answers remain in the browser and the page displays a setup notice rather than a false submission confirmation.

## Local testing

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.
