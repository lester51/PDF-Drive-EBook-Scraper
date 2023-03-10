const axios = require("axios")
const cheerio = require("cheerio")

bookID = ""

module.exports.findEbook = async (query)=>{
    try {
        let {data} = await axios.get(`https://www.pdfdrive.com/search?q=${query}&pagecount=&pubyear=&searchin=&em=`)
        $ = cheerio.load(data);
        ebookUrl = $("div[class='files-new'] ul li div[class='file-left']");
        bookList = []
        ebookUrl.each((idx,el) => {
            obj = {}
            obj.ebookTitle = $(el).children("a").children("img").attr("title")
            obj.ebookUrl = "https:\/\/www.pdfdrive.com"+$(el).children("a").attr("href")
            bookList.push(obj)
        })
        bookID = $("div[class='files-new'] ul li div[class='file-left']").children("a").attr("data-id");
        return bookList
    } catch (e){
        return e.response
    }
}

module.exports.getEbook = async (ebookUrl)=>{
    try {
        let second = await axios.get(ebookUrl)
        $ = cheerio.load(second.data);
        health = $('div[class="ebook-buttons"] div').children("a").attr("onclick").split(",")[1].replace(/\'/g,"")
        name = $("title").text()
        dlurl = `https://www.pdfdrive.com/download.pdf?id=${bookID}&h=${health}`
        return {ebookName:name, dlUrl:dlurl}
    } catch (e){
        return e.response
    }
}