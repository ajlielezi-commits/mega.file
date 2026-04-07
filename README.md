# Photo Capture Website

This website allows users to take a photo using their camera, displays the captured photo alongside a predefined photo, and sends the captured photo to the site owner via email.

## Setup

1. Open `index.html` in a web browser that supports camera access (e.g., Chrome, Firefox).

2. To enable email sending:
   - Sign up for EmailJS at https://www.emailjs.com/
   - Create a service, template, and get your user ID.
   - In `script.js`, replace `'YOUR_USER_ID'`, `'YOUR_SERVICE_ID'`, `'YOUR_TEMPLATE_ID'` with your actual IDs.
   - In the template, set up to send to your email with attachment.

3. For the predefined photo, replace the `src` in `index.html` with your desired image URL or path.

## Features

- Access camera and display live video.
- Capture photo and display it.
- Send the photo via email using EmailJS.
- Display user's photo and a placeholder "my photo".

## Note

Ensure the browser allows camera access. For local files, you may need to serve via a local server for some features.