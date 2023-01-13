const axios = require('axios')
const cheerio = require('cheerio')

const newspapers = require('../newspapers')
const Article = require('../model/article')
const article = require('../model/article')
const articles = []
const aarticles = []
let date = new Date
let t = false
exports.ukrHTML = (req, res, next) => {
    newspapers.forEach(newspaper => {
            t++
            // async
            // async function asyncnews(){

            // while(tru){
                axios.get(newspaper.address)
                    .then( (response) => {
                        while(articles.length > 0) {
                            articles.pop();
                        }
                        const html = response.data
                        const $ = cheerio.load(html)
                        // let t = 0
                        // let index = 0
                        $('a:contains("Ukraine")', html).each(function () {
                            var title = $(this).text().replaceAll('/n', '').trim()
                            var url = $(this).attr('href')
                            
                                
                            
                            
                            

                            articles.push({
                                source: newspaper.name,
                                title: title,
                                url: newspaper.base + url,
                                date: date
                            })
                                
                            
                        })
                        return articles
                        //console.log(articles)
                        // wsm nie potrzebny drugi then, spróbować zrobić async funkcje z await
                    }).then((articles)=>{
                        
                        // console.log(t)
                        // const article = new Article({
                        //     title: title,
                        //     url: url,
                        //     date: date
                        // })  
                        
// IMPLEMENTACJA FOR

                        // for(let i = 0; i<articles.length - 1; i++){
                        //     if(i==articles.length){
                        //         break
                                
                        //     }
                        //     // for(let k = 0; k<aarticles.length-1; k++){
                        //     //     if(articles[i].url == articles[k].url){

                        //     // }

                        //     for(let j = 0; j<articles.length - 1; j++){
                        //         if(articles[i].url == articles[j].url){
                        //             let title = articles[i].title
                        //             let url = articles[i].url
                        //             const article = new Article({
                        //                 source: newspaper.name,
                        //                 title: title,
                        //                 url: newspaper.base + url,
                        //                 date: date
                                    
                        //             })
                        //             if(i==j){
                                        
                                        
                        //                 article.save()
                        //                 // .then(result =>{
                        //                 //     aarticles.push(result)
                        //                 //     console.log(result)
                        //                 // })
                        //                 console.log(articles[i])
                        //                 aarticles.push(articles[i])
                                        
                                        
                                        
                        //             }
                        //             else{
                                        
                        //                 articles.splice(j,1)
                        //                 //console.log(articles[i])
                                        
                        //                 //article.save()
                        //             }
                                    
                        //         }
                        
                        //     }
                        // }

// IMPLEMENTACJA FOR

// IMPLEMENTACJA WHILE
                    let i = 0
                    t = true
                    while(true){
                        let jtab = []

                        for(let j = 0; j<articles.length; j++){

                            if(articles[i].url == articles[j].url){
                                let title = articles[i].title
                                let url = articles[i].url
                                const article = new Article({
                                    source: newspaper.name,
                                    title: title,
                                    url: newspaper.base + url,
                                    date: date
                                
                                })
                                if(i==j){
                                    
                                    
                                    article.save()
                                    // .then(result =>{
                                    //     aarticles.push(result)
                                    //     console.log(result)
                                    // })
                                    // console.log(articles[i])
                                    aarticles.push(articles[i])
                                    
                                    
                                    
                                }
                                else{
                                    jtab.push(j)
                                    //articles.splice(j,1)
                                    //console.log(articles[i])
                                    
                                    //article.save()
                                }
                                
                            }
                        }
                        let lwsp = 0;
                        for(let l = 0; l < jtab.length; l++){
                            articles.splice(jtab[l]-lwsp,1)
                            lwsp++
                        }
                        if(i==articles.length-1){
                            break
                        }
                        i++
                    }

                        // if(articles.length != 0){
                        // console.log(articles)
                        // n = []
                        // aarticles = n.concat(articles)
                        // console.log(aarticles)
                        // while(articles.length > 0) {
                        //     articles.pop();
                        // }
                        // }
                        
                        
                        // res.json(articles)
                        // if(t==newspapers.length){
                        //     break;
                        // }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                }

            
        // }
        // asyncnews() 
            
        )
        res.json(aarticles)}
        
    // USUŃ ASYNCA I RESA - JESLI JEST THEN TO POWINIEN ON BYC ALBO NA KONCU ALBO SAM
        
    // exports.ukrHTML = (req, res, next) => {
    //     res.json(aarticles)
    // }
        //console.log(newspapers)
        //res.json(articles)
    // }
    //setTimeout(()=>console.log(articles), 8000)


    // nadal jest powtarzanie sie artykolow, poza tym trzeba ogarnac articles, res i save()
    // if(t == newspapers.length){
    // res.json(aarticles)    
    // }
    // else{
    //     continue
    // }
// }
// module.exports = aarticles