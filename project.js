
        // JavaScript for Dropdown Functionality
        document.querySelectorAll('.dropdown').forEach((dropdown) => {
            dropdown.addEventListener('click', (e) => {
                e.stopPropagation();
                // Close other dropdowns
                document.querySelectorAll('.dropdown-content').forEach((content) => {
                    if (content !== dropdown.querySelector('.dropdown-content')) {
                        content.style.display = 'none';
                    }
                });
                // Toggle the current dropdown
                const dropdownContent = dropdown.querySelector('.dropdown-content');
                dropdownContent.style.display =
                    dropdownContent.style.display === 'block' ? 'none' : 'block';
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            document.querySelectorAll('.dropdown-content').forEach((content) => {
                content.style.display = 'none';
            });
        });
         // Search bar functionality
        const searchButton = document.getElementById('searchButton');
        const searchInput = document.getElementById('searchInput');

        searchButton.addEventListener('click', () => {
            const query = searchInput.value.toLowerCase();
            alert(`You searched for: ${query}`);
        });

        // Theme toggling
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            if (document.body.classList.contains('light-theme')) {
                document.body.style.backgroundColor = '#fff';
                document.body.style.color = '#000';
            } else {
                document.body.style.backgroundColor = '#f4f4f4';
                document.body.style.color = '#333';
            }
        });
    