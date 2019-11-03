(function(){
    $(window).scroll(function(){
        var header = $('header'),
            scroll = $(window).scrollTop();   
        if (scroll >= 50) {
            header.addClass('header-fixed');
        } else 
        {
            header.removeClass('header-fixed');
        }
    });

    $('header #tabs').tabs();
    $("header #tabs>div a[href^='#']").click(function() {
        $('#tabs div').removeClass('active');
        $('#tabs svg').removeClass('svgfill');
        if($("#tabs").find('div').hasClass('animation') || $('#tabs').find('svg').hasClass('svgfill')){
            $('#tabs div').removeClass('animation');
            $('#tabs svg').removeClass('svgfill');
        }
        var index = $($(this).attr('href')).index() - 1;
        $("#tabs").tabs("option", "active", index).removeClass('animation');
        $(this).parent().addClass('animation');
        $(this).siblings('svg').addClass('svgfill');
        return false;
      });
      $('.add-more-features').click(function(){
          $('.add-more-features').toggleClass('rotate');
            $( ".features,.features svg,.features span").fadeToggle('slow');
         
      });
      $('.chat-input button').click(function(e) {
          var value= $('.chat-input input').val();
          var timespan=document.createElement('div');
          var dt = new Date();
          var time = dt.getHours() + ":" + dt.getMinutes();
          var p = document.createElement('p');
            div = document.createElement('div');
            $(div).addClass('message-container');
            $(p).addClass('text-right p-3 mb-1 dummy-msg');
            $(p).html(value);
            $(div).append(p);
            $(".personal-chat").append(div);
            $(timespan).addClass('timeofmsg');
            $(timespan).html(time);
            $(div).append(timespan);
            $('.chat-input input').val('');
    });
    
})();