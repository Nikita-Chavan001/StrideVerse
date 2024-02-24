// blogdata.js

document.addEventListener("DOMContentLoaded", function () {
  // Get the blog post ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get('id');

  // Fetch data from JSON file
  fetch("blogdata.json")
      .then(response => response.json())
      .then(data => {
          // Find the specific blog post based on the ID
          const selectedBlog = data.find(blog => blog.id == blogId);
          if (selectedBlog) {
              // Populate the blog post content
              displayBlogContent(selectedBlog);
          } else {
              console.error("Blog not found");
          }
      })
      .catch(error => console.error("Error fetching blog data:", error));
});





function displayBlogContent(blog) {
    const blogContainer = document.getElementById("blog-container");
    const blogPost = document.createElement("div");
    blogPost.innerHTML = `
        <div class="image-container" style="display: flex; justify-content: center; align-items: center; flex-direction: column; padding: 20px;">
            <h1 style="font-size: 80px;color: #fff;">${blog.title}</h1>
            <img class="img" src="${blog.image}" alt="${blog.title}" style="max-width: 100%; margin-top: 40px; height: 400px; width: 400px;border-radius:10px;">
    
      
        </div>
        <p style="margin-top: 40px;font-size: 25px;color: #fff;">${blog.content}</p>
    `;
    blogContainer.appendChild(blogPost);
  }
  

  


const urlParams = new URLSearchParams(window.location.search);
const blogIndex = parseInt(urlParams.get("blogIndex"), 10);
console.log("Blog Index:", blogIndex);

fetch("data1.json")
  .then((response) => response.json())
  .then((jsonData) => {
    console.log("JSON data:", jsonData);
    const blogData = jsonData[blogIndex];
    console.log("Blog data:", blogData);

    document.getElementById("blogImage").src = blogData.imageUrl;
    document.getElementById("blogContent").innerHTML = `
       <strong>${blogData.title}</strong>
       <p>${blogData.content}</p>
    `;
  })
  .catch((error) => console.error("Error fetching JSON:", error));


  