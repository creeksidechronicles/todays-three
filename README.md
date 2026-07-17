# Today’s Three

Today’s Three is a very simple beginner-friendly web app for choosing and completing three priorities each day. Type one priority into each field, check it off when it is complete, and use the progress message to see how the day is going.

## Files used

- `index.html` contains the page structure, title, explanation, three priority fields, checkboxes, progress message, and Start Fresh button.
- `styles.css` contains the calm, mobile-friendly design with a warm off-white background, dark text, rounded containers, and generous spacing.
- `script.js` saves priorities, restores them after refresh, updates the progress message, and clears the list after confirmation.

## How to run it locally

No build command, package installation, npm, database, API, or external library is required.

To run the app:

1. Download or clone this repository.
2. Open the project folder.
3. Double-click `index.html` to open it in a web browser.

You can also serve the folder with any simple static file server, but that is optional.

## How localStorage works

The app uses the browser’s `localStorage` to remember the text and checkbox status for all three priorities. When you type or check a box, the app saves the current list in your browser. When you refresh or reopen the page in the same browser, the app reads that saved information and fills the list back in.

The saved priorities stay on your device and in your browser. They are not sent to a server. Clicking **Start Fresh** asks for confirmation, then clears all three fields and unchecks all three boxes.

## How to deploy it as a static website

Because this app only uses HTML, CSS, and JavaScript, it can be deployed on any static website host.

Common options include:

- GitHub Pages
- Netlify
- Cloudflare Pages
- Vercel static hosting

To deploy it, upload or publish these files together:

- `index.html`
- `styles.css`
- `script.js`

No server setup, build step, database, or environment variables are needed.
