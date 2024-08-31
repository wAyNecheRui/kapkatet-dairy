document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicators div');
    let currentIndex = 0;

    function showSlide(index) {
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});
function handleBuyAction() {
    // Example JavaScript function to handle buying action
    fetch('/api/purchase/buy', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ livestockId: '123', buyerId: '456' }) // Replace with actual IDs
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message); // Show success or error message
    })
    .catch(error => {
        console.error('Error purchasing livestock:', error);
        alert('Failed to purchase livestock. Please try again.');
    });
}
