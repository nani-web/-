$(document).ready(function(e) {

  // 滚动监听导航条，并增加和删除样式
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.navbar').addClass('navbar-scrolled');
    } else {
      $('.navbar').removeClass('navbar-scrolled');
    }
  });

  // 平滑滚动菜单和.scrollto类链接
  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 50
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  // fancybox 初始化

  $(".fancybox").fancybox({
    padding: 10,
    helpers: {
      overlay: {
        locked: false
      }
    }
  });

  $('.with-hover-text, .regular-link').click(function(e) {
    e.stopPropagation();
  });


   // 悬停文本 
  

  $('.with-hover-text').hover(
    function(e) {
      $(this).css('overflow', 'visible');
      $(this).find('.hover-text')
        .show()
        .css('opacity', 0)
        .animate({
            paddingTop: '25px',
            opacity: 1
          },
          'fast',
          'linear'
        );
    },
    function(e) {
      var obj = $(this);
      $(this).find('.hover-text')
        .animate({
            paddingTop: '0',
            opacity: 0
          },
          'fast',
          'linear',
          function() {
            $(this).hide();
            $(obj).css('overflow', 'hidden');
          }
        );
    }
  );

  var img_loaded = 0;
  var j_images = [];


});


 // 画廊徘徊

jQuery(document).ready(function($) {
  //缓存一些变量
  var images = $('#portfolio a');

  images.hover(
    function(e) {
      var asta = $(this).find('img');
      $('#portfolio img').not(asta).stop(false, false).animate({
          opacity: .5
        },
        'fast',
        'linear'
      );
      var zoom = $('<div class="zoom"></div>');
      if ($(this).hasClass('video')) {
        zoom.addClass('video');
      }
      $(this).prepend(zoom);
    },
    function(e) {
      $('#portfolio img').stop(false, false).animate({
          opacity: 1
        },
        'fast',
        'linear'
      );
      $('.zoom').remove();
    }
  );
});
