$(document).ready(function() {
    //滚动条发生滚动
    $(window).scroll(function() {
        //获取页面相对于滚动条顶部的偏移
        // let top = $(document).scrollTop();
        // let menu = $('#menu');
        // let items = $('#members').find('.item');
        // let currentId = ''; 
        // items.each(function() {
        //     let itemTop = $(this).offset().top;
        //     if (top > itemTop - 150) {
        //         currentId = '#' + $(this).attr('id');
        //     } else {
        //         return false;
        //     }
        // });
        // let currentLink = menu.find('.current');
        // if (currentId && currentLink.attr('href') != currentId) {
        //     currentLink.removeClass('current');
        //     menu.find('[href="' + currentId + '"]').addClass('current');
        // }
        //隐藏回到顶部按钮 $(window).height()
        if ($(document).scrollTop() > 100 ) {
            $('.logo').hide();
        }
        //显示回到顶部按钮
        if ($(document).scrollTop() < 100) {
            $('.logo').show();
        }

  //随着滚轮隐藏或显示顶部
        // if ($(document).scrollTop() > 100px ) {
        //     $('#b2t').hide();
        //     $('.logo').hide();
        // }
        // //显示回到顶部按钮
        // if ($(document).scrollTop() < 100px) {
        //     $('#b2t').show();
        //     $('.logo').show();
        // }

    });
});

//回到顶部
$('#b2t').click(function () {
    //获取当前滚动条距离页面顶部的距离
    let currentScrollTop = $(document).scrollTop();
    let timer = setInterval(function () {
        //当页面高度大于0时减少滚动条和页面顶部的距离
        if ($(document).scrollTop() > 0) {
            //动态设置页面上移速度
            let speed = Math.floor(-$(document).scrollTop()/5);
            $(document).scrollTop(currentScrollTop += speed);
        } else {
            clearInterval(timer);
        }
    }, 10);
});

function nav(){  
    $('div#nav ul li').mouseover(function() {  
        $(this).find('ul:first').show();  
    });  
  
    $('div#nav ul li').mouseleave(function() {  
        $('div#nav ul li ul').hide();  
    });  
  
    $('div#nav ul li ul').mouseleave(function() {  
        $('div#nav ul li ul').hide();  
    });  
      
}  
  
$(document).ready(function() {  
    nav();  
});  