import express from "express";
import {handelGenerateNewShortUrl, getUrlAndRedirect, getDataAboutUrl } from '../controllers/url.js'

// create a router variable from express Router object
const router = express.Router();

// create a post router
router.post('/', handelGenerateNewShortUrl);

router.get('/:shortId', getUrlAndRedirect);

router.get("/analytics/:shortId" , getDataAboutUrl);

export default router;