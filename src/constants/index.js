const { Router } = require("express");
const app = new Router();
const API_KEY = 'aef6ab3b038b52dc89c19d605bbbf2af'
const TOKEN = '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'
const URL = 'test-options-javi.myshopify.com'
const baseURL = `https://${ API_KEY }:${ TOKEN }@${ URL }/admin/api/2022-10/products.json`


module.exports.app = app;
module.exports.baseURL = baseURL;