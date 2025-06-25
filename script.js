
    <script>
        const bands = [
            'The Plot in You', 
            'The Devil Wears Prada', 
            'Pierce the Veil', 
            'Norma Jean', 
            'The Bled', 
            'Say Anything', 
            'The Midway State', 
            'We Came as Romans', 
            'Counterparts', 
            'Oh, Sleeper', 
            'A Skylit Drive', 
            'Anywhere But Here', 
            'An Old Dog'
        ];
        
        // Function to strip articles from the beginning of band names
        function strip(bandName) {
            return bandName.replace(/^(a |an |the )/i, '').trim();
        }
        
        // Sort the bands array based on band names without articles
        const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
        
        // Get the bands list element
        const bandsList = document.getElementById('bands');
        
        // Populate the list with sorted band names
        bandsList.innerHTML = sortedBands
            .map(band => `<li>${band}</li>`)
            .join('');
    </script>
