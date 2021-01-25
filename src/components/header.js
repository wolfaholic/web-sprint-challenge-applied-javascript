const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

   //defining the elements
   const newsHead = document.createElement('div');
   const newsDate = document.createElement('span');
   const newsTitle = document.createElement('h1');
   const newsTemp = document.createElement('span')

   //adding classes
   newsHead.classList.add('header')
   newsDate.classList.add('date')
   newsTemp.classList.add('temp')


   //appending 
   newsHead.append(newsDate);
   newsHead.append(newsTitle);
   newsHead.append(newsTemp);


   //content
   newsDate.textContent = 'March 28th 2019';
   newsTitle.textContent = 'Lambda Times';
   newsTemp.textContent = '98°';

   newsHead.appendChild(newsDate);
   newsHead.appendChild(newsTitle);
   newsHead.appendChild(newsTemp);

   //other
   return newsHead;
}

const headerAppender = (newsHead) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
