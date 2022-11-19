
const axios = require('axios');

const { app, baseURL } = require("../constants");

app.get("/api/items", async (req, response) => {
  try {

    const product  = await axios.get(baseURL).then((res) => res.data )

    if (product.status == '404') {
      return response.status(500)
        .send(product);
    }

    response.json(product);

  }
  catch (err) {
    return response.status(500)
      .send(err);
  }
});

module.exports = app;
