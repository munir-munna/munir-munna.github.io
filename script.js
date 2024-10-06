// Fetch and display apps on the public page
document.addEventListener('DOMContentLoaded', () => {
    const appList = document.getElementById('app-list');

    fetch('app-data.txt')
        .then(response => response.json())
        .then(data => {
            data.forEach(app => {
                const appItem = document.createElement('div');
                appItem.classList.add('app-item');

                appItem.innerHTML = `
                    <img src="${app.image}" alt="${app.name}">
                    <span>${app.name}</span>
                    <button onclick="window.location.href='${app.download}'">Download</button>
                `;

                appList.appendChild(appItem);
            });
        });
});

// Add new app on the admin page
document.getElementById('app-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const appName = document.getElementById('app-name').value;
    const appImage = document.getElementById('app-image').value;
    const appDownload = document.getElementById('app-download').value;

    const newApp = {
        name: appName,
        image: appImage,
        download: appDownload
    };

    fetch('app-data.txt')
        .then(response => response.json())
        .then(data => {
            data.push(newApp);

            // Save the updated data (this part only works in server environments, not GitHub Pages)
            // For GitHub Pages, you would need a backend or API to update the JSON file.
            console.log('Updated App List:', data);
        });

    alert('App added successfully!');
});
