async function fetchlist() {
    try {
        const response = await fetch('https://s3.amazonaws.com/open-to-cors/assignment.json');
        const data = await response.json();
        return Object.values(data.products).sort((a, b) => b.popularity - a.popularity);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


fetchlist().then(display);