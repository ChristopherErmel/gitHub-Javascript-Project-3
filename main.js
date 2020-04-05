// Christopher Ermel
// 200250446
// 12/03/2019

//variables to store the header and section element 
let header = document.querySelector('header');
let section = document.querySelector('section');
//variable for request URL 
let requestURL = "https://christopherermel.github.io/CSSProj3/weirdDeals.json";
//XHR object and new request
let request = new XMLHttpRequest(); 
request.open('GET', requestURL);
//request to accept JSON
request.responseType = 'json';
request.send();

// onload event for JSON file
request.onload = function() {
  let topFiveWDeals = request.response; 
  console.log(topFiveWDeals);
  populateHeader(topFiveWDeals); 
  topFiveWeirdDeals(topFiveWDeals);  
}

//fill in the header function 
function populateHeader(jsonObj) {    
  let headerH1 = document.createElement('h1'); 
  headerH1.textContent = jsonObj['companyName'];
  header.appendChild(headerH1);  
  let headerP = document.createElement('p');
  headerP.textContent = 'Head Office: ' + jsonObj['headOffice'] + ' , Established:  ' + jsonObj['established'];
  header.appendChild(headerP);
}

//top five weird deals
function topFiveWeirdDeals(jsonObj) {   
  let topFiveWDeals = jsonObj['topFiveWDeals'];  
  for (let i = 0; i < topFiveWDeals.length; i++) {
    //createing elements 
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let list = document.createElement('ul');    
    //grabing the img data
    img.setAttribute('src', 'https://christopherermel.github.io/CSSProj3/img/' + topFiveWDeals[i].image);
    img.setAttribute('alt', topFiveWDeals[i].image );
    
    h2.textContent = topFiveWDeals[i].name; 
    p1.textContent = 'Price: ' + topFiveWDeals[i].price;
    p2.textContent = 'Desc: ' + topFiveWDeals[i].desc;
    
    let features = topFiveWDeals[i].features;
    for(let j = 0; j < features.length; j++ ) {
      let feature = document.createElement('li'); 
      feature.textContent = features[j];
      list.appendChild(feature); 
    }    
    // Append and append!    
    article.appendChild(img); 
    article.appendChild(h2);
    article.appendChild(p1); 
    article.appendChild(p2);
    article.appendChild(list);
    section.appendChild(article); 
     
  }

}

