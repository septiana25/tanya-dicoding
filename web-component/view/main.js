import { async } from 'regenerator-runtime';
import '../component/news-list.js'
import '../component/search-bar.js';
import DataSource from "../data/data-source.js";

const main = _ => {
  const navWrapper = document.querySelector('.nav-wrapper');
  const searchElement = document.querySelector('search-bar');
  const clubListElement = document.querySelector('news-list');
  

  const onButtonSearchClicked =  async _ => {
    try {
      const newsResult = await DataSource.searchMedia();
      
      renderCategories(newsResult, searchElement.value1);

    } catch (error) {
      fallbackResult(error);
    }

  };

  const renderCategories = (newsResult, value) => {
    const medFilter = mediaFilter(newsResult, value);
    searchElement.categories = medFilter;

    const newsFil = newsFilter(medFilter);
    newsRender(newsFil[0].name, value);
    
    
  }

  const newsRender = async (path, media) => {
    try {
      const newsFilterResult = await DataSource.searchNews(path, media);
      renderResult(newsFilterResult);
    } catch (error) {
      fallbackResult(error);
    }
  }

  const newsFilter = news => {
    for (const item of news) {
      return item.paths
    }
  }

  const mediaFilter = (categories, value) => {
    return categories.filter(category => category.name == value.toLowerCase())
  }

  const renderResult = results => {
    clubListElement.newsList = results;
  };

  const fallbackResult = message => {
    clubListElement.renderError(message);
  };
  
  const renderNavigation = async _ => {
    
    try {
      const result = await DataSource.searchMedia();
      const mediaName = result.map(media => media.name);

      const mediaList = document.createElement('p');
      mediaList.innerText = mediaName.join(', ');
      navWrapper.appendChild(mediaList);
      
    } catch (error) {
      console.log(error);
    }

  }

  searchElement.clickEvent = onButtonSearchClicked;
  
  renderNavigation();


};

export default main;
