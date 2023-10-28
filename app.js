let arr = [];

// Progression 1: create a function and fetch the api using axios
 
function getData() {
  const getBlog = document.getElementById('blog');

  axios
    .get(
      'https://gnews.io/api/v4/search?q=example&token=d8fe06049438d5e24178ef0232a180e4&lang=en'
    )
    .then((res) => {
      console.log(res.data.articles);
      const listOfArticles = res.data.articles;

      listOfArticles.forEach((article) => {
        const getArticle = document.createElement('div');
        getArticle.setAttribute('id', 'article');
        getArticle.setAttribute('class', 'article');

        const title = document.createElement('h3');
        const content = document.createAttribute('p');
        const img = document.createAttribute('img');

        title.innertext = article.title;
        content.innertext = article.content;
        img.setAttribute('src', article.image);

        getArticle.append(title);
        getArticle.append(content);
        getArticle.append(img);

        arr.push(getArticle);
      });

      arr.forEach((ele) => {
        getBlog.append(ele);
      });
    });
}

getData();