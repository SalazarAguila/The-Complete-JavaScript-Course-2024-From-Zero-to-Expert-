import layout from "../layout.js"
import {getError} from "../../helpers.js"

export default ({product, errors}) => {
    return layout({
        content:`
        <div class="columns is-centered">
          <div class="column is-half">
            <h1 class="subtitle">Edit a Product</h1>
  
            <form method="POST" enctype="multipart/form-data">
              <div class="field">
                <label class="label">Title</label>
                <input class="input" value="${product.title}" name="title">
                <p class="help is-danger">${getError(errors, 'title')}</p>
              </div>
              
              <div class="field">
                <label class="label">Price</label>
                <input class="input" value="${product.price}" name="price">
                <p class="help is-danger">${getError(errors, 'price')}</p>
              </div>
              
              <div class="field">
                <label class="label">Image</label>            
                <input type="file" name="image" />
                <p class="help is-danger">${getError(errors, 'image')}</p>
              </div>
              <br />
              <button class="button is-primary">Submit</button>
            </form>
          </div>
        </div>
      `
    })
}