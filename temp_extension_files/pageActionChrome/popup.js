chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    var tabURL = tabs[0].url;
    tabURL = tabURL.replace('http://','').replace('https://','').split(/[/?#]/)[0];
    // match tabURL with domain column in database to get ID in server.js file?
    // serve up that results page and send that results page to popup.html
    console.log(tabURL);
    checkURL(tabURL);
});

var title = document.getElementById("company");
var rankings = document.getElementById("rankings");
var otherCo = document.getElementById("otherCo");
var com = document.getElementById("com");
var ag = document.getElementById("aggregate");
var cr = document.getElementById("cei_rating");
var wob = document.getElementById("women_on_board");
var esg = document.getElementById("esg_score");
var gc = document.getElementById("gc_score");
var ck = document.getElementById("corporate_knights");
var dtox = document.getElementById("detox_2020");
var pfc = document.getElementById("pfc_elimination");
var trans = document.getElementById("transparency");
var comp1 = document.getElementById("comp1");
var comp2 = document.getElementById("comp2");
var comp3 = document.getElementById("comp3");

var companyData = [
    {
        brand: "Nike",
        url: "www.nike.com",
        rankings: {
            cei_rating: 100,
            women_on_board: .25,
            esg_score: 56,
            gc_score: 62,
            corporate_knights: .5,
            detox_2020: 0.0,
            pfc_elimination: 0.0,
            transparency: 0.0,
            overall: 3
        }
    }, 
    {
        brand: "Adidas",
        url: "www.adidas.com",
        rankings: {
            cei_rating: -1,
            women_on_board: .17,
            esg_score: 50,
            gc_score: 59,
            corporate_knights: -1,
            detox_2020: 0.0,
            pfc_elimination: 2.0,
            transparency: 3.0,
            overall: 3
        }
    }, 
    {
        brand: "Puma",
        url: "us.puma.com",
        rankings: {
            cei_rating: -1,
            women_on_board: .11,
            esg_score: 62,
            gc_score: 62,
            corporate_knights: -1,
            detox_2020: 0.0,
            pfc_elimination: 2.0,
            transparency: 3.0,
            overall: 3
        }
    }, 
    {
        brand: "Under Armor",
        url: "www.underarmour.com",
        rankings: {
            cei_rating: -1,
            women_on_board: .22,
            esg_score: 51,
            gc_score: 50,
            corporate_knights: -1,
            detox_2020: -1,
            pfc_elimination: -1,
            transparency: -1,
            overall: 3
        }
    }
];


function checkURL(str) {
    switch (str) {
        case companyData[0].url:
            companyInfo(companyData[0]);

            com.innerHTML = "Competitors' Inform Scores";
            comp1.innerHTML = companyData[1].brand + ": " + calculateAggregate(companyData[1]);
            comp2.innerHTML = companyData[2].brand + ": " + calculateAggregate(companyData[2]);
            comp3.innerHTML = companyData[3].brand + ": " + calculateAggregate(companyData[3]);
            break;
        case companyData[1].url:
            companyInfo(companyData[1]);

            //rewrite this
            com.innerHTML = "Competitors' Inform Scores";
                                //link the brand name w/ url
            comp1.innerHTML = companyData[0].brand + ": " + calculateAggregate(companyData[0]);
            comp2.innerHTML = companyData[2].brand + ": " + calculateAggregate(companyData[2]);
            comp3.innerHTML = companyData[3].brand + ": " + calculateAggregate(companyData[3]);
            break;
        case companyData[2].url:
            companyInfo(companyData[2]);

            com.innerHTML = "Competitors' Inform Scores";
            comp1.innerHTML = companyData[1].brand + ": " + calculateAggregate(companyData[1]);
            comp2.innerHTML = companyData[0].brand + ": " + calculateAggregate(companyData[0]);
            comp3.innerHTML = companyData[3].brand + ": " + calculateAggregate(companyData[3]);
            break;
        case companyData[3].url: 
            companyInfo(companyData[3]);
            
            com.innerHTML = "Competitors' Inform Scores";
            comp1.innerHTML = companyData[1].brand + ": " + calculateAggregate(companyData[1]);
            comp2.innerHTML = companyData[2].brand + ": " + calculateAggregate(companyData[2]);
            comp3.innerHTML = companyData[0].brand + ": " + calculateAggregate(companyData[0]);
            break;
        default:
            title.innerHTML = "Not enough data! Tweet at the company and demand transparency!";
    }
}

function companyInfo(data) {
    title.innerHTML = data.brand;
    ag.innerHTML = "Inform Score: " + calculateAggregate(data)
    cr.innerHTML = "Corporate Equality Index: " + data.rankings.cei_rating;
    wob.innerHTML = "% of female Board of Directors: " + data.rankings.women_on_board;
    esg.innerHTML = "Environmental, Social, Governance Score: " + data.rankings.esg_score;
    gc.innerHTML = "United Nations Global Compact Score: " + data.rankings.gc_score;
    ck.innerHTML = "Sustainability Score: " + data.rankings.corporate_knights;
    dtox.innerHTML = "Detox 2020 Score: " + data.rankings.detox_2020;
    pfc.innerHTML = "PFC Elimination Score: " + data.rankings.pfc_elimination;
    trans.innerHTML = "Transparency quotient: " + data.rankings.transparency;
}

function calculateAggregate(companyData) {
    let rd = companyData.rankings;
    let perfectScore = 7.13;
    let calculatedScore = 0;
    if(rd.cei_rating>0) calculatedScore += rd.cei_rating/100;
    if(rd.women_on_board>0) calculatedScore += rd.women_on_board;
    if(rd.esg_score>0) calculatedScore += rd.esg_score/69;
    if(rd.gc_score>0) calculatedScore += rd.gc_score/72;
    if(rd.corporate_knights>0) calculatedScore += rd.corporate_knights;
    if(rd.detox_2020>0) calculatedScore += rd.detox_2020/3.0;
    if(rd.pfc_elimination>0) calculatedScore += rd.pfc_elimination/3.0;
    if(rd.transparency>0) calculatedScore += rd.transparency/3.0;
    let aggregateScore = calculatedScore/perfectScore;
    aggregateScore = aggregateScore.toFixed(4);
    return aggregateScore;
}