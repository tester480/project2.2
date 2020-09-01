$(document).ready(function(){
   mobmenu();
   mobmenuS();
   search();
   tabs();
});

function mobmenu() {
   $(".burger").on('click', function () {
         var $parent = $(".burger, .sidebar");
         if ($parent.hasClass('mob-menu')) {
            $parent.removeClass('mob-menu');
         } else {
            $parent.addClass('mob-menu');
         }
   });
}

function mobmenuS() {
   $(".burger-s").on('click', function () {
         var $parent = $(".burger-s, .sidebar");
         if ($parent.hasClass('mob-menu-s')) {
            $parent.removeClass('mob-menu-s');
         } else {
            $parent.addClass('mob-menu-s');
         }
   });
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".burger-s, .sidebar").length) {
         if ($(".burger-s, .sidebar").hasClass("mob-menu-s")) {
            $(".burger-s, .sidebar").removeClass("mob-menu-s");
         }
      }
   });
}

function search() {
   $(".mob-search-btn, .close").on('click', function () {
         var $parent = $(".mob-search-btn, .header-search");
         if ($parent.hasClass('mob-search')) {
            $parent.removeClass('mob-search');
         } else {
            $parent.addClass('mob-search');
         }
   });
   $(".wrapper").on('click', function(event) {
      if (!$(event.target).closest(".mob-search-btn, .header-search").length) {
         if ($(".mob-search-btn, .header-search").hasClass("mob-search")) {
            $(".mob-search-btn, .header-search").removeClass("mob-search");
         }
      }
   });
}

function tabs(){
   $('.tab-item').not(':first').hide();
   $('.media-body .tab').click(function() {
      $('.media-body .tab').removeClass('active').eq($(this).index()).addClass('active');
      $('.tab-item').hide().eq($(this).index()).fadeIn()
   }).eq(0).addClass('active');
}