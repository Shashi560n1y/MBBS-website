document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
});

elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
        element.classList.add('fade-in');
    }
});

if (email.value === '' || name.value === '') {
    alert('Please fill in all fields.');
} else {
    alert('Form submitted successfully!');
    form.reset();
}



