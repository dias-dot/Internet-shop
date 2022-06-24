// Reload
function reload(){
    window.scrollTo({top: 0});
    window.location.reload();
}





// OnmouseOver
function big(element){
    element.style.fontSize="21px";
 }

// OnmouseOut
 function small(element){
     element.style.fontSize="20px";
 }

// Order Button
function order(){
    $(".laptops").fadeIn(1500);
    $("#choosebrand").fadeIn(1500);
    window.scrollTo({top: 0, behavior:'smooth'});
    document.querySelector(".form_order").style.display="flex";
    $(".form_order").animate({opacity:'1'},1500);
    document.querySelector("body").style.overflow="hidden";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".hp").style.display="none";
    document.querySelector(".macType").style.display="none";
    document.querySelector(".acerType").style.display="none";
    document.querySelector(".asusType").style.display="none";
    document.querySelector(".dellType").style.display="none";
    document.querySelector(".lenovoType").style.display="none";
    document.querySelector(".hpType").style.display="none";
}
// Close Order
function Close_order(){
    $(".form_order").animate({opacity:'0'},"slow");
    document.querySelector("body").style.overflow="scroll";
    document.querySelector(".form_order").style.display="none";
}
// Close Cart
function Close_cart(){
    $(".form_cart").animate({opacity:'0'},"slow");
    document.querySelector("body").style.overflow="scroll";
    document.querySelector(".form_cart").style.display="none";
}
// Functions for Brands ()
function displayTextNone(element){
    document.getElementById(element.id).style.display="none";
}
function displayTextShow(element){
    document.getElementById(element.id).style.display="block";
}
// BackToBrands
function BackToOrder1(){
    order();
    document.querySelector("#back_icon1").style.display="none";
}
// After choosing Brands
function macbook(){
    document.querySelector("#choosebrand").style.display="none";
    document.querySelector(".laptops").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".hp").style.display="none";
    document.querySelector("#back_icon1").style.display="block";
    $(".macbook").fadeIn(1500);
}
function acer(){
    document.querySelector("#choosebrand").style.display="none";
    document.querySelector(".laptops").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".hp").style.display="none";
    document.querySelector("#back_icon1").style.display="block";
    $(".acer").fadeIn(1500);
}
function asus(){
    document.querySelector("#choosebrand").style.display="none";
    document.querySelector(".laptops").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".hp").style.display="none";
    document.querySelector("#back_icon1").style.display="block";
    $(".asus").fadeIn(1500);
}
function lenovo(){
    document.querySelector("#choosebrand").style.display="none";
    document.querySelector(".laptops").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".hp").style.display="none";
    document.querySelector("#back_icon1").style.display="block";
    $(".lenovo").fadeIn(1500);
}
function dell(){
    document.querySelector("#choosebrand").style.display="none";
    document.querySelector(".laptops").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
    document.querySelector("#back_icon1").style.display="block";
    $(".dell").fadeIn(1500);
}
function hp(){
    document.querySelector("#choosebrand").style.display="none";
    document.querySelector(".laptops").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector("#back_icon1").style.display="block";
    $(".hp").fadeIn(1500);
}

// After choosing brands, after than choosing type 
function macbookAir(){
    $(".macType").fadeIn(1500);
    document.querySelector(".macbookAir").style.display="flex";
    document.querySelector(".macbookPro").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
    document.querySelector(".acerType").style.display="none";
}
function macbookPro(){
    $(".macType").fadeIn(1500);
    document.querySelector(".macbookPro").style.display="flex";
    document.querySelector(".macbookAir").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
    
}

function acerNitro(){
    $(".acerType").fadeIn(1500);
    document.querySelector(".acerNitro").style.display="flex";
    document.querySelector(".acerAspire").style.display="none";
    document.querySelector(".acerPredator").style.display="none";
    document.querySelector(".acerSwift").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
}

function acerSwift(){
    $(".acerType").fadeIn(1500);
    document.querySelector(".acerSwift").style.display="flex";
    document.querySelector(".acerAspire").style.display="none";
    document.querySelector(".acerPredator").style.display="none";
    document.querySelector(".acerNitro").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
}

function acerPredator(){
    $(".acerType").fadeIn(1500);
    document.querySelector(".acerPredator").style.display="flex";
    document.querySelector(".acerAspire").style.display="none";
    document.querySelector(".acerSwift").style.display="none";
    document.querySelector(".acerNitro").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
}
function acerAspire(){
    $(".acerType").fadeIn(1500);
    document.querySelector(".acerAspire").style.display="flex";
    document.querySelector(".acerSwift").style.display="none";
    document.querySelector(".acerPredator").style.display="none";
    document.querySelector(".acerNitro").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
}

function asusZenbook(){
    $(".asusType").fadeIn(1500);
    document.querySelector(".asusZenbook").style.display="flex";
    document.querySelector(".asusVivobook").style.display="none";
    document.querySelector(".asusROG").style.display="none";
    document.querySelector(".asusChromebook").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
}
function asusVivobook(){
    $(".asusType").fadeIn(1500);
    document.querySelector(".asusVivobook").style.display="flex";
    document.querySelector(".asusZenbook").style.display="none";
    document.querySelector(".asusROG").style.display="none";
    document.querySelector(".asusChromebook").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
}
function asusROG(){
    $(".asusType").fadeIn(1500);
    document.querySelector(".asusROG").style.display="flex";
    document.querySelector(".asusVivobook").style.display="none";
    document.querySelector(".asusZenbook").style.display="none";
    document.querySelector(".asusChromebook").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
}
function asusChromebook(){
    $(".asusType").fadeIn(1500);
    document.querySelector(".asusChromebook").style.display="flex";
    document.querySelector(".asusVivobook").style.display="none";
    document.querySelector(".asusROG").style.display="none";
    document.querySelector(".asusZenbook").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
}
function lenovoLegion(){
    $(".lenovoType").fadeIn(1500);
    document.querySelector(".lenovoLegion").style.display="flex";
    document.querySelector(".lenovoYoga").style.display="none";
    document.querySelector(".lenovoIdeaPad").style.display="none";
    document.querySelector(".lenovoThinkPad").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
}
function lenovoYoga(){
    $(".lenovoType").fadeIn(1500);
    document.querySelector(".lenovoYoga").style.display="flex";
    document.querySelector(".lenovoLegion").style.display="none";
    document.querySelector(".lenovoIdeaPad").style.display="none";
    document.querySelector(".lenovoThinkPad").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
}
function lenovoIdeaPad(){
    $(".lenovoType").fadeIn(1500);
    document.querySelector(".lenovoIdeaPad").style.display="flex";
    document.querySelector(".lenovoYoga").style.display="none";
    document.querySelector(".lenovoLegion").style.display="none";
    document.querySelector(".lenovoThinkPad").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
}
function lenovoThinkPad(){
    $(".lenovoType").fadeIn(1500);
    document.querySelector(".lenovoThinkPad").style.display="flex";
    document.querySelector(".lenovoYoga").style.display="none";
    document.querySelector(".lenovoIdeaPad").style.display="none";
    document.querySelector(".lenovoLegion").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
}
function dellXPS(){
    $(".dellType").fadeIn(1500);
    document.querySelector(".dellXPS").style.display="flex";
    document.querySelector(".dellVostro").style.display="none";
    document.querySelector(".dellLatitude").style.display="none";
    document.querySelector(".dellGSeries").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
}
function dellVostro(){
    $(".dellType").fadeIn(1500);
    document.querySelector(".dellVostro").style.display="flex";
    document.querySelector(".dellXPS").style.display="none";
    document.querySelector(".dellLatitude").style.display="none";
    document.querySelector(".dellGSeries").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
}
function dellLatitude(){
    $(".dellType").fadeIn(1500);
    document.querySelector(".dellLatitude").style.display="flex";
    document.querySelector(".dellVostro").style.display="none";
    document.querySelector(".dellXPS").style.display="none";
    document.querySelector(".dellGSeries").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
}
function dellGSeries(){
    $(".dellType").fadeIn(1500);
    document.querySelector(".dellGSeries").style.display="flex";
    document.querySelector(".dellVostro").style.display="none";
    document.querySelector(".dellLatitude").style.display="none";
    document.querySelector(".dellXPS").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
}
function hpSpectre(){
    $(".hpType").fadeIn(1500);
    document.querySelector(".hpSpectre").style.display="flex";
    document.querySelector(".hpPavilion").style.display="none";
    document.querySelector(".hpEnvy").style.display="none";
    document.querySelector(".hpElitebook").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
}
function hpPavilion(){
    $(".hpType").fadeIn(1500);
    document.querySelector(".hpPavilion").style.display="flex";
    document.querySelector(".hpSpectre").style.display="none";
    document.querySelector(".hpEnvy").style.display="none";
    document.querySelector(".hpElitebook").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
}
function hpEnvy(){
    document.querySelector(".hpEnvy").style.display="flex";
    $(".hpType").fadeIn(1500);
    document.querySelector(".hpPavilion").style.display="none";
    document.querySelector(".hpSpectre").style.display="none";
    document.querySelector(".hpElitebook").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
}
function hpElitebook(){
    $(".hpType").fadeIn(1500);
    document.querySelector(".hpElitebook").style.display="flex";
    document.querySelector(".hpPavilion").style.display="none";
    document.querySelector(".hpEnvy").style.display="none";
    document.querySelector(".hpSpectre").style.display="none";
    document.querySelector(".macbook").style.display="none";
    document.querySelector(".acer").style.display="none";
    document.querySelector(".asus").style.display="none";
    document.querySelector(".dell").style.display="none";
    document.querySelector(".lenovo").style.display="none";
    document.querySelector(".hp").style.display="none";
    document.querySelector(".acerType").style.display="none";
}



// Close Add To Cart icon
function Close_carts(){
    $(".form_carts").animate({opacity:'0'},"slow");
    document.querySelector("body").style.overflow="scroll";
    document.querySelector(".form_carts").style.display="none";
}
// Add to Cart Icon click
function cart(){
    window.scrollTo({top: 0, behavior:'smooth'});
    document.querySelector(".form_cart").style.display="flex";
    $(".form_cart").animate({opacity:'1'},1500);
    document.querySelector("body").style.overflow="hidden";
    document.querySelector(".form_carts").style.display="none";
    document.querySelector(".form_order").style.display="none";

}
                                            // Add To Cart

// Add to Cart
function AddToCart(arg1){
    window.scrollTo({top: 0, behavior:'smooth'});
    document.querySelector(".form_carts").style.display="flex";
    $(".form_carts").animate({opacity:'1'},1500);
    document.querySelector("body").style.overflow="hidden";
    var itd=1;
    var order=[];
    var total_price=0;
    var d=document.createElement("div");
    var e=document.createElement("text");
    d.id=itd+".z";
    e.innerHTML="";
    d.innerHTML="The Price of your Order "+arg1+"";
    d.appendChild(e);
    d.style.fontSize="large";
    d.style.padding="10px";
    e.style.width="15px";
    e.style.height="15px";
    e.style.float="right";  
    d.style.maxWidth="100%";
    d.style.borderBottom="solid";
    document.querySelector(".form-content_cart").appendChild(d);
    document.querySelector(".form-content_cart").style.display="block";

    var price=arg1;
    order=parseInt(price);
    
    itd++;
    total_price+=parseInt(price);
 }
 

//Overview
 function overview(){
    window.scrollTo({top: 0,});
    document.querySelector("#aboutUswords1").style.display="none";
    document.querySelector("#aboutUswords2").style.display="none";
    document.querySelector("#aboutUswords3").style.display="none";
    document.querySelector("#aboutUswords4").style.display="none";
    document.querySelector("#aboutUswords5").style.display="none";
    document.querySelector("#aboutUswords6").style.display="none";
    document.querySelector("#aboutUswords7").style.display="none";
    document.querySelector("#b_image").style.display="none";
    document.querySelector(".order").style.display="none";
    document.querySelector("#about_").style.display="none";
    document.querySelector(".accessories").style.display="none";
    document.querySelector(".videos").style.display="none";
    document.querySelector(".best").style.display="none";
    if(window.innerWidth<=1000){
    document.querySelector(".overview_").style.display="block";
    document.querySelector("#overview_img").style.display="none";
    }
    else{
    document.querySelector(".overview_").style.display="flex";
    document.querySelector("#overview_img").style.display="block";
   
    
    }
 }


 //  Best of Best
function best(){
    document.querySelector(".accessories").style.display="none";
    document.querySelector(".videos").style.display="none";
    document.querySelector(".best").style.display="block";
    document.querySelector(".overview_").style.display="none";
    document.querySelector(".overview_").style.display="none";
    document.querySelector("#overview_img").style.display="none";
    document.querySelector("#aboutUswords1").style.display="none";
    document.querySelector("#aboutUswords2").style.display="none";
    document.querySelector("#aboutUswords3").style.display="none";
    document.querySelector("#aboutUswords4").style.display="none";
    document.querySelector("#aboutUswords5").style.display="none";
    document.querySelector("#aboutUswords6").style.display="none";
    document.querySelector("#aboutUswords7").style.display="none";
    document.querySelector("#b_image").style.display="none";
    document.querySelector(".order").style.display="none";
    document.querySelector("#about_").style.display="none";
    if(window.innerWidth<=1000){
        window.scrollTo({top: 0,});
    document.querySelector(".best1").style.display="block";
    document.querySelector(".best2").style.display="block";
    document.querySelector(".best3").style.display="block";
    document.querySelector(".best4").style.display="block";
    document.querySelector(".best5").style.display="block";
    }
    else{
    window.scrollTo({top: 0,});
    document.querySelector(".best1").style.display="flex";
    document.querySelector(".best2").style.display="flex";
    document.querySelector(".best3").style.display="flex";
    document.querySelector(".best4").style.display="flex";
    document.querySelector(".best5").style.display="flex";
    }
}


// Videos
function video(){
    window.scrollTo({top: 0,});
    document.querySelector(".accessories").style.display="none";
    document.querySelector(".videos").style.display="block";
    document.querySelector(".best").style.display="none";
    document.querySelector("#aboutUswords1").style.display="none";
    document.querySelector("#aboutUswords2").style.display="none";
    document.querySelector("#aboutUswords3").style.display="none";
    document.querySelector("#aboutUswords4").style.display="none";
    document.querySelector("#aboutUswords5").style.display="none";
    document.querySelector("#aboutUswords6").style.display="none";
    document.querySelector("#aboutUswords7").style.display="none";
    document.querySelector("#overview_img").style.display="none";
    document.querySelector("#b_image").style.display="none";
    document.querySelector(".order").style.display="none";
    document.querySelector("#about_").style.display="none";
    document.querySelector(".overview_").style.display="none";
    if(window.innerWidth<=1000){
    window.scrollTo({top: 0,});
    document.querySelector(".videos1").style.display="block";
    document.querySelector(".videos2").style.display="block";
    document.querySelector(".videos3").style.display="block";
    document.querySelector(".videos4").style.display="block";
    document.querySelector(".videos5").style.display="block";
    }
    else{
        document.querySelector(".videos1").style.display="flex";
        document.querySelector(".videos2").style.display="flex";
        document.querySelector(".videos3").style.display="flex";
        document.querySelector(".videos4").style.display="flex";
        document.querySelector(".videos5").style.display="flex";
    }
}

// Accessories
function accessories(){
    window.scrollTo({top: 0,});
    document.querySelector("#about_").style.display="none";
    document.querySelector(".accessories").style.display="flex";
    document.querySelector(".videos").style.display="none";
    document.querySelector(".best").style.display="none";
    document.querySelector("#aboutUswords1").style.display="none";
    document.querySelector("#aboutUswords2").style.display="none";
    document.querySelector("#aboutUswords3").style.display="none";
    document.querySelector("#aboutUswords4").style.display="none";
    document.querySelector("#aboutUswords5").style.display="none";
    document.querySelector("#aboutUswords6").style.display="none";
    document.querySelector("#aboutUswords7").style.display="none";
    document.querySelector("#overview_img").style.display="none";
    document.querySelector("#b_image").style.display="none";
    document.querySelector(".order").style.display="none";
    document.querySelector(".overview_").style.display="none";
    if(window.innerWidth<=1000){
    }
    
}

//  Contant Us
function contactUs(){
    $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
}

 //AboutUs
function aboutUs(){
    window.scrollTo({top: 0,});
    document.querySelector(".accessories").style.display="none";
    document.querySelector("#about_").style.display="block";
    document.querySelector("#aboutUswords1").style.display="block";
    document.querySelector("#aboutUswords2").style.display="block";
    document.querySelector("#aboutUswords3").style.display="block";
    document.querySelector("#aboutUswords4").style.display="block";
    document.querySelector("#aboutUswords5").style.display="block";
    document.querySelector("#aboutUswords6").style.display="block";
    document.querySelector("#aboutUswords7").style.display="block";
    document.querySelector("#overview_img").style.display="none";
    document.querySelector("#b_image").style.display="none";
    document.querySelector(".order").style.display="none";
    document.querySelector(".overview_").style.display="none";
    document.querySelector(".videos").style.display="none";
    document.querySelector(".best").style.display="none";
}


