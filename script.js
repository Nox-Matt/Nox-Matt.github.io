document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});


function displayCrf(){
    fetch('crf.json')
        .then(response => response.json())
        .then(data => {
            const Container = document.getElementById('image-container');
            const image = data.images;

            image.forEach(imageUrl => {
                const image = document.createElement('img');
                image.src = imageUrl;
                Container.appendChild(image);
            });
        })
        .catch(error => {
            console.error('Error JSON:', error);
        });
    }
