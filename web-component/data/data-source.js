
class DataSource {
  static async searchNews(path, media) {

    try {
      const response =  await fetch(`https://api-berita-indonesia.vercel.app/${media.toLowerCase()}/${path.toLowerCase()}/`);
      const responseJson = await response.json();
      if (responseJson.success) {

        return Promise.resolve(responseJson.data);
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    } catch (error) { 
      return Promise.reject('Check your internet connection');
    }
  };

  static async searchMedia(){

    try {
      const response =  await fetch(`https://api-berita-indonesia.vercel.app/`);
      const responseJson = await response.json();

      if (responseJson.endpoints.length) {
        return Promise.resolve(responseJson.endpoints);
      } else {
        return Promise.reject(`data is not found`);
      }
    } catch (error) { 
      return Promise.reject('Check your internet connection');
    }
  }
};

export default DataSource;