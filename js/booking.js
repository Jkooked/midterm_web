// This static demo validates the form locally and never sends a booking.
const form = document.querySelector('#booking-form');
const packageSelect = document.querySelector('#packageSelect');
const feedback = document.querySelector('#booking-feedback');
const selectedPackage = new URLSearchParams(window.location.search).get('package');

if (Array.from(packageSelect.options).some(option => option.value === selectedPackage)) {
    packageSelect.value = selectedPackage;
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    feedback.textContent = [
        `Tour: ${packageSelect.selectedOptions[0].textContent}`,
        `Name: ${data.get('fullName')}`,
        `Email: ${data.get('email')}`,
        `Travel date: ${data.get('travelDate') || 'Not specified'}`,
        `Message: ${data.get('message') || 'Not specified'}`,
        'Demo preview only. No request has been sent and no booking is confirmed.'
    ].join('\n');
    feedback.hidden = false;
});

form.addEventListener('input', () => {
    feedback.hidden = true;
});
