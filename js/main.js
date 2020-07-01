$(document).ready(function(){
    $("#first-tab-active").on('click', function(){
        activateTab($("#first-tab"));
    });
    $("#second-tab-active").on('click', function(){
        activateTab($("#second-tab"));
    });
    $("#third-tab-active").on('click', function(){
        activateTab($("#third-tab"));
    });

   function activateTab(tabId){
        $(".custom-tab-content").removeClass("active-tab");
        $(tabId).addClass("active-tab");
    }

    const allItems = $(".progress-item");
    allItems.each(function(index){
        this.addEventListener('click', function(e){
            this.classList.add('active')
        })
    });
})
