import axios from "axios";

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    const result = await axios(
      "https://forkify-api.herokuapp.com/api/get?rId=" + this.id
    );
    this.publisher = result.data.publisher;
    this.ingredients = result.data.ingredients;
    this.source_url = result.data.source_url;
    this.image_url = result.data.image_url;
    this.publisher_url = result.data.publisher_url;
    this.title = result.data.title;
    this.social_rank = result.data.social_rank;
    console.log(this.title);
  }
}
