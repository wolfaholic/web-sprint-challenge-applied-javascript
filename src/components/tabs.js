const Tabs = (topics) => {
  axios
  .get(`https://Lambda-times-backend.herokuapp.com/topics`)
  .then(response => {
      console.log(response);
      response.data.topics.forEach(item => {
          const topics = tabsComponent(item);
          newsTopics.appendChild(topics);

      });

  })
  .catch(function(error) {
      console.log(error);
  });

}

const tabsAppender = (data) => {
 
    let tabTopic = document.createElement('div');
    tabTopic.classList.add('tab');
    tabTopic.textContent = `${data}`;

    console.log(data);

    return tabTopic;
}

export { Tabs, tabsAppender }
