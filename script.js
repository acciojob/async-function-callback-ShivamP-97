const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
async function fetchData(callback) {
    try {
        const response = await fetch(url);   
        const data = await response.json();
        callback(data);                      
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayTitle(result) {
    document.getElementById("output").textContent = result.title;
}

document.getElementById("btn").addEventListener("click", () => {
    fetchData(displayTitle);
});
