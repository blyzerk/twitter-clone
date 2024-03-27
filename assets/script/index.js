// Get references to the necessary elements  
const postButton = document.getElementById('postButton');  
const postInput = document.getElementById('postInput');  
const newsFeed = document.getElementById('newsFeed');  
  
// Add event listener to the post button  
postButton.addEventListener('click', () => {  
  // Get the value from the input field  
  const postText = postInput.value;  
  
  // Create a new post element  
  const postElement = document.createElement('div');  
  postElement.classList.add('center-post');  
  
  // Create profile image element  
  const profileImage = document.createElement('div');  
  profileImage.classList.add('post-profile');  
  const profileImageImg = document.createElement('img');  
  profileImageImg.src = './assets/img/no icons/Alvin.jpg';  
  profileImage.appendChild(profileImageImg);  
  postElement.appendChild(profileImage);  
  
  // Create post container element  
  const postContainer = document.createElement('div');  
  postContainer.classList.add('post-container');  
  
  // Create what is happening container element  
  const whatIsHappening = document.createElement('div');  
  whatIsHappening.classList.add('whatishappening');  
  const postTextElement = document.createElement('p');  
  postTextElement.innerText = postText;  
  whatIsHappening.appendChild(postTextElement);  
  postContainer.appendChild(whatIsHappening);  
  
  // Add post container to the post element  
  postElement.appendChild(postContainer);  
  
  // Add the new post element to the news feed  
  newsFeed.appendChild(postElement);  
  
  // Clear the input field  
  postInput.value = '';  
});  