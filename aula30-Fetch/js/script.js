const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("p#loading");
const postsContainer = document.querySelector("div#posts-container");

//Get All Posts

async function getAllPosts() {
    
    const response = await fetch(url);

    console.log(response);

    const data = await response.json();

    console.log(data);
    
    loadingElement.classList.add("hide");

    data.map((post) => {
        
    })
}

getAllPosts()



































































//============================================================*/

//=============================================================/
