const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //


  axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then((response) => {

      const newsEntry = document.querySelector('.cards-container');
      let lambdaArt = Object.values(response.data.articles);
      lambdaArt.forEach(element => {
          element.forEach(art => {
              newsEntry.appendChild(articleEntry(art));
              console.log("newsEntry");
          })
      })
  })
  .catch((error) => {
      console.log(error);
  })


}

const cardAppender = (data) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

///elements
const article = document.createElement('div');
const headLine = document.createElement('div');
const author = document.createElement('div');
const imgWrap = document.createElement('div');
const authorImg = document.createElement('img');
const authorSig = document.createElement('span');


///appending
article.appendChild(headLine);
article.appendChild(author);
author.appendChild(imgWrap);
author.appendChild(authorSig);
imgWrap.appendChild(authorImg);

///class List
article.classList.add('card');
headLine.classList.add('headline');
author.classList.add('author');
imgWrap.classList.add('img-container');

//contnet
headLine.textContent = data.headline;
authorSig.textContent = `By ${data.authorName}`;
authorImg.src = data.authorPhoto;


return article


}

export { Card, cardAppender }
