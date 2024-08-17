import {nanoid} from 'nanoid'
import URL from '../models/url.js'
import { response } from 'express';
async function handelGenerateNewShortUrl(req, res){
    console.log(req.body, 'request');
    
    if(req.body.url){
        const shortUrl = nanoid(8);
        await URL.create({
            short_url: shortUrl,
            redirect_url: req.body.url,
            visit_History: [],
        })
        return res.status(201).json({status: "Short URL created successfully!"})
    }else{
        return res.status(401).json({status: "URL Required only"})
    }
}

async function getUrlAndRedirect(req, res){
    try{
        const short_url = req.params.shortId;
    const response = await URL.findOneAndUpdate({
        short_url
    },{ $push: {
            visit_History: {
                time_Stamp: Date.now()
            }
        }
    })
    res.redirect(response.redirect_url)
    }catch(err){
        console.log(err);
        
    }
}

async function getDataAboutUrl(req, res) {
    try{
        const short_url = req.params.shortId;
        const response = await URL.findOne({short_url})
        res.json({status: `This website is Visited By ${response.visit_History.length}`})
    }catch(err){
        console.log(err);
        
    }
}


export {
        handelGenerateNewShortUrl,
        getUrlAndRedirect,
        getDataAboutUrl,
    };


