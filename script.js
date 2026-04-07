// Initialize EmailJS with your user ID (replace with your actual ID)
emailjs.init('YOUR_USER_ID'); // Get this from EmailJS dashboard

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const capturedImage = document.getElementById('capturedImage');
const userPhoto = document.getElementById('userPhoto');
const captureBtn = document.getElementById('capture');
const sendBtn = document.getElementById('sendEmail');

// Access the camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error('Error accessing camera: ', err);
    });

// Capture photo
captureBtn.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataURL = canvas.toDataURL('image/png');
    capturedImage.src = dataURL;
    capturedImage.style.display = 'block';
    userPhoto.src = dataURL;
    userPhoto.style.display = 'block';
    sendBtn.style.display = 'block';
});

// Send email
sendBtn.addEventListener('click', () => {
    const dataURL = canvas.toDataURL('image/png');
    // Prepare email parameters
    const templateParams = {
        to_email: 'batihot54@gmail.com', // Your email
        from_name: 'Photo App',
        message: 'Here is the captured photo.',
        attachment: dataURL // EmailJS supports attachments
    };

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(response => {
            console.log('Email sent successfully!', response.status, response.text);
            alert('Photo sent successfully!');
        })
        .catch(error => {
            console.error('Failed to send email:', error);
            alert('Failed to send photo.');
        });
});