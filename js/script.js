
//Categorie Lightbox 
const lightbox=document.querySelector(".lightbox"),
      lightboxImg=lightbox.querySelector(".lightbox-img"),
      lightboxClose=lightbox.querySelector(".lightbox-close"),
      lightboxText=lightbox.querySelector(".caption-text"),
      categorieItems=document.querySelectorAll(".post"),
      totalCategorieItems= categorieItems.length;
      lightboxCounter=lightbox.querySelector(".caption-counter");
      let itemIndex=0;

      for(let i=0; i<totalCategorieItems;i++){
        categorieItems[i].addEventListener("click",function(){
                itemIndex=i;
                changeItem();
                toggleLightbox();
          })
      }


      function nextItem(){
        if(itemIndex === totalCategorieItems-1){
            itemIndex=0;
        }
        else{
            itemIndex++
        }
        changeItem();
    }

    function prevItem(){
        if(itemIndex === 0){
            itemIndex=totalCategorieItems-1;
        }
        else{
            itemIndex--
        }
        changeItem();
    }
        function toggleLightbox(){
            lightbox.classList.toggle("open");
        }

      function changeItem(){
          imgSrc=categorieItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
          lightboxImg.src = imgSrc;
          lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
          lightboxCounter.innerHTML= (itemIndex+1) + " of " + totalPortfolioItem;
      }

      //close Lightbox
      lightbox.addEventListener("click",function(event){
          if(event.target === lightboxClose || event.target === lightbox){
              toggleLightbox();
          }
      })

