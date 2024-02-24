// Scriptjs
document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from JSON file
    fetch("blogdata.json")
        .then(response => response.json())
        .then(data => {
            // Display only the last eight cards
            const lastEightBlogs = data.slice(-8);
            // Populate cards with blog data
            lastEightBlogs.forEach(blog => {
                createCard(blog);
            });
        })
        .catch(error => console.error("Error fetching blog data:", error));
});



function createCard(blog) {
    const cardContainer = document.getElementById("card-container");
    const card = document.createElement("div");
    card.classList.add("card", "mb-5","col-md-6", "col-lg-4"); // Bootstrap classes for column sizing
    card.innerHTML = `
        <img src="${blog.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${blog.title}</h5>
            <p class="card-text">${blog.description}</p>
        </div>
        <div class="card-footer">
            <small class="text-body-secondary">${blog.lastUpdated ? `Last updated ${blog.lastUpdated}` : ''}</small>
            <button type="button" class="btn btn-info">
                <a href="blogdata.html?id=${blog.id}" class="btn btn-outline" style="font-size:20px;">Read more</a>
            </button>
        </div>
    `;
    cardContainer.appendChild(card);
}



// document.addEventListener("DOMContentLoaded", function () {
//     // Fetch JSON data
//     fetch("data.json")
//         .then(response => response.json())
//         .then(jsonData => {
//             // Get the card container
//             const cardContainer = document.getElementById("cardContainer");

//             // Loop through the JSON data and create cards dynamically
//             for (let i = 0; i < jsonData.length; i += 3) {
//                 // Create a new row
//                 const row = document.createElement("div");
//                 row.className = "row";

//                 // Create three cards in the current row
//                 for (let j = i; j < i + 3 && j < jsonData.length; j++) {
//                     const cardData = jsonData[j];

//                     const card = document.createElement("div");
//                     card.className = "col-md-4"; // Bootstrap class for columns

//                     card.innerHTML = `
//                         <div class="card">
//                             <img src="${cardData.imageUrl}" class="card-img-top" alt="...">
//                             <div class="card-body">
                        
//                                 <h5 class="card-title">${cardData.title}</h5>
                                
//                                 <p class="card-text">${cardData.content}</p>
//                             </div>
//                             <div class="card-footer">
//                                 <small class="text-body-secondary">Last updated 3 mins ago</small>
//                                 <button type="button" class="btn btn-info">
//                                 <a href="newpage2.html?blogIndex=${i}">Read more</a>
//                                 </button>
//                             </div>
//                         </div>
//                     `;

//                     // Append the card to the row
//                     row.appendChild(card);
//                 }

//                 // Append the row to the container
//                 cardContainer.appendChild(row);
//             }
//         })
//         .catch(error => console.error("Error fetching JSON:", error));
// });

