$(function(){

  $('.homeAll').fadeIn(5000);


$(window).scroll(function(){
      if($(window).scrollTop() > 100){
       $('.up-waku').fadeIn();
    }else{
    $('.up-waku').fadeOut();
    }
    });


    //***vegas
  $('#vegas').vegas({
        slides: [
            { src: './img/nobag1.jpg' },
            { src: './img/choco1.jpg' },
            { src: './img/port1.jpg' }
        ],
        
    });
    
    
    //***モーダルウィンドウ
      // サムネールをクリック
  $('#nobag a, #choco .grid a,#meguru .grid a').click(function(){
    // body要素の最後にdiv#bgを追加
    $('body').append('<div id="bg">');

    // body要素の最後にdiv#photoを追加
    $('body').append('<div id="photo">');

    // それぞれ非表示にする
    $('#bg').hide();
    $('#photo').hide();

    // #photoの中にimg要素を追加
    $('#photo').html('<img>');

    // img要素にsrc属性を設定
    $('#photo img').attr('src', $(this).attr('href'));

    // img要素にwidth、height、alt属性を追加
    $('#photo img').attr('width', 500);
    $('#photo img').attr('height', 707);
    $('#photo img').attr('alt', 'Photo');

    // #bgと#photoをフェードイン
    $('#bg').fadeIn();
    $('#photo').fadeIn();

    // 背景をクリック
    $('#bg').click(function(){
      // 背景（自分自身）をフェードアウト、完了したら削除
      $(this).fadeOut(function(){
        $(this).remove();
      });

      // 拡大画像をフェードアウト、完了したら削除
      $('#photo').fadeOut(function(){
        $(this).remove();
      });
    });

    return false;
  });
    
}); //owari
