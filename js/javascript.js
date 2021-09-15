$(function(){
	 // header-nav
   const arrTopVal = [];

   for(let i=0;i<6;i++){
     arrTopVal[i] = $('.scroll').eq(i).offset().top;
   }
 
   console.log('arrTopVal =', arrTopVal);
  
   const moveFn = function(idx){
     $('html,body').stop().animate({scrollTop: arrTopVal[idx]-0},'easeInOutCubic');
   };
 
   const $mnu = $('header > .hd > nav > .menu > li > a');
 
   $mnu.on('click', function(evt){
 
     evt.preventDefault();
 
     const nowIdx = $mnu.index(this);
     
     moveFn(nowIdx); // 0~4
   });
   
   $(window).on('scroll', function(){
 
     const scrollTop = $(window).scrollTop();
 
     console.log(scrollTop);
 
     for(let i=0;i<6;i++){
       if(scrollTop >= arrTopVal[i]-200){
 
         $mnu.eq(i).parent().addClass('on').siblings().removeClass('on');
       }else if(scrollTop<arrTopVal[0]-84){
         $mnu.parent().removeClass('on');
       }
     }
   });
 
   $('.logo>a').on('click', function(evt){
     evt.preventDefault();
 
     $('html,body').stop().animate({scrollTop:0});
   });
 
   $(window).on('load', function(){
     $mnu.parent().siblings().removeClass('on');
 
     $('.logo>a').trigger('click');
   });
  


  //aboutme
  const $indicator =  $('.aboutme > .ab > .pagination > li > a');
  const $container = $('.aboutme > .ab > .container > li');

  let aboutIdx = 0;

  const fadeFn = function(){
    $container.filter('.on').stop().fadeOut(600).removeClass('on');

    $container.eq(aboutIdx).stop().fadeIn(600).addClass('on');

    $indicator.eq(aboutIdx).parent().addClass('on').siblings().removeClass('on');
  };

  $indicator.on('click', function(evt){
    evt.preventDefault();

    aboutIdx = $indicator.index(this);

    fadeFn();
  })

  $(window).on('load',function(){
    $container.eq(0).show();
  });

  $indicator.eq(1).on('click', function(evt){
    $container.eq(0).fadeOut(600);
  });

  $indicator.eq(2).on('click', function(evt){
    $container.eq(0).fadeOut(600);
  });



  //portfolio
  $('.scr').on('click', function(evt){
    evt.preventDefault();
  });


  //마켓컬리
  const $shadow1 = $('.pfm-shadow');
  const $lightbox1 = $('.pfm-lightbox');

  //썸네일
  $('.wbtn').on('click', function (evt) {
      evt.preventDefault();

      $lightbox1.children('img').attr({
          src: $(this).attr('href'),
          alt: $(this).children('img').attr('alt')
      });

      $shadow1.show();
  });

  //그림자 영역을 클릭해도 닫힘
  $shadow1.on('click', function () {
    $(this).hide();
  });

  // 자손에게 일어난 이벤트를 조상에게 전파되는걸 차단
  $lightbox1.on('click', function (evt) {
      evt.stopPropagation();
  });


  //샐러디
  const $shadow2 = $('.pfs-shadow');
  const $lightbox2 = $('.pfs-lightbox');

  //썸네일
  $('.cont1>.wbtn2').on('click', function (evt) {
      evt.preventDefault();

      $lightbox2.children('img').attr({
          src: $(this).attr('href'),
          alt: $(this).children('img').attr('alt')
      });

      $shadow2.show();
  });

  //그림자 영역을 클릭해도 닫힘
  $shadow2.on('click', function () {
    $(this).hide();
  });

  // 자손에게 일어난 이벤트를 조상에게 전파되는걸 차단
  $lightbox2.on('click', function (evt) {
      evt.stopPropagation();
  });



  //쥬씨
  const $shadow3 = $('.pfj-shadow');
  const $lightbox3 = $('.pfj-lightbox');

  //썸네일
  $('.cont2>.wbtn2').on('click', function (evt) {
      evt.preventDefault();

      $lightbox3.children('img').attr({
          src: $(this).attr('href'),
          alt: $(this).children('img').attr('alt')
      });

      $shadow3.show();
  });

  //그림자 영역을 클릭해도 닫힘
  $shadow3.on('click', function () {
    $(this).hide();
  });

  // 자손에게 일어난 이벤트를 조상에게 전파되는걸 차단
  $lightbox3.on('click', function (evt) {
      evt.stopPropagation();
  });


  //한국중재원
  const $shadow4 = $('.pfk-shadow');
  const $lightbox4 = $('.pfk-lightbox');

  //썸네일
  $('.cont3>.wbtn2').on('click', function (evt) {
      evt.preventDefault();

      $lightbox4.children('img').attr({
          src: $(this).attr('href'),
          alt: $(this).children('img').attr('alt')
      });

      $shadow4.show();
  });

  //그림자 영역을 클릭해도 닫힘
  $shadow4.on('click', function () {
    $(this).hide();
  });

  // 자손에게 일어난 이벤트를 조상에게 전파되는걸 차단
  $lightbox4.on('click', function (evt) {
      evt.stopPropagation();
  });





  //design1
  $('.mou-1').on('click', function(evt){
    evt.preventDefault();

    $('.on1').stop().fadeIn(300);
    $('.min1').stop().fadeIn(300);
  });

  $('.mou-2').on('click', function(evt){
    evt.preventDefault();

    $('.on2').stop().fadeIn(300);
    $('.min2').stop().fadeIn(300);
  });

  $('.mou-3').on('click', function(evt){
    evt.preventDefault();

    $('.on3').stop().fadeIn(300);
    $('.min3').stop().fadeIn(300);
  });

  $('.mou-4').on('click', function(evt){
    evt.preventDefault();

    $('.on4').stop().fadeIn(300);
    $('.min4').stop().fadeIn(300);
  });



  //design2
  const $d_1_shadow = $('.d-1-shadow');
  const $d_1_lightbox = $('.d-1-lightbox');

  //썸네일
  $('.d-1').on('click', function (evt) {
      evt.preventDefault();

      $d_1_lightbox.children('img').attr({
          src: $(this).attr('href'),
          alt: $(this).children('img').attr('alt')
      });

      $d_1_shadow.show();
  });

  //그림자 영역을 클릭해도 닫힘
  $d_1_shadow.on('click', function () {
    $(this).hide();
  });

  // 자손에게 일어난 이벤트를 조상에게 전파되는걸 차단
  $d_1_lightbox.on('click', function (evt) {
      evt.stopPropagation();
  });


  const $d_2_shadow = $('.d-2-shadow');
  const $d_2_lightbox = $('.d-2-lightbox');

  //썸네일
  $('.d-2').on('click', function (evt) {
      evt.preventDefault();

      $d_2_lightbox.children('img').attr({
          src: $(this).attr('href'),
          alt: $(this).children('img').attr('alt')
      });

      $d_2_shadow.show();
  });

  //그림자 영역을 클릭해도 닫힘
  $d_2_shadow.on('click', function () {
    $(this).hide();
  });

  // 자손에게 일어난 이벤트를 조상에게 전파되는걸 차단
  $d_2_lightbox.on('click', function (evt) {
      evt.stopPropagation();
  });



  const $d_3_shadow = $('.d-3-shadow');
  const $d_3_lightbox = $('.d-3-lightbox');

  //썸네일
  $('.d-3').on('click', function (evt) {
      evt.preventDefault();

      $d_3_lightbox.children('img').attr({
          src: $(this).attr('href'),
          alt: $(this).children('img').attr('alt')
      });

      $d_3_shadow.show();
  });

  //그림자 영역을 클릭해도 닫힘
  $d_3_shadow.on('click', function () {
    $(this).hide();
  });

  // 자손에게 일어난 이벤트를 조상에게 전파되는걸 차단
  $d_3_lightbox.on('click', function (evt) {
      evt.stopPropagation();
  });



  const $d_4_shadow = $('.d-4-shadow');
  const $d_4_lightbox = $('.d-4-lightbox');

  //썸네일
  $('.d-4').on('click', function (evt) {
      evt.preventDefault();

      $d_4_lightbox.children('img').attr({
          src: $(this).attr('href'),
          alt: $(this).children('img').attr('alt')
      });

      $d_4_shadow.show();
  });

  //그림자 영역을 클릭해도 닫힘
  $d_4_shadow.on('click', function () {
    $(this).hide();
  });

  // 자손에게 일어난 이벤트를 조상에게 전파되는걸 차단
  $d_4_lightbox.on('click', function (evt) {
      evt.stopPropagation();
  });




  const $d_5_shadow = $('.d-5-shadow');
  const $d_5_lightbox = $('.d-5-lightbox');

  //썸네일
  $('.d-5').on('click', function (evt) {
      evt.preventDefault();

      $d_5_lightbox.children('img').attr({
          src: $(this).attr('href'),
          alt: $(this).children('img').attr('alt')
      });

      $d_5_shadow.show();
  });

  //그림자 영역을 클릭해도 닫힘
  $d_5_shadow.on('click', function () {
    $(this).hide();
  });

  // 자손에게 일어난 이벤트를 조상에게 전파되는걸 차단
  $d_5_lightbox.on('click', function (evt) {
      evt.stopPropagation();
  });



  const $d_6_shadow = $('.d-6-shadow');
  const $d_6_lightbox = $('.d-6-lightbox');

  //썸네일
  $('.d-6').on('click', function (evt) {
      evt.preventDefault();

      $d_6_lightbox.children('img').attr({
          src: $(this).attr('href'),
          alt: $(this).children('img').attr('alt')
      });

      $d_6_shadow.show();
  });

  //그림자 영역을 클릭해도 닫힘
  $d_6_shadow.on('click', function () {
    $(this).hide();
  });

  // 자손에게 일어난 이벤트를 조상에게 전파되는걸 차단
  $d_6_lightbox.on('click', function (evt) {
      evt.stopPropagation();
  });



  //project
  const $shadow = $('.pj-shadow');
  const $lightbox = $('.pj-lightbox');

  //썸네일
  $('.pjbtn').on('click', function (evt) {
      evt.preventDefault();

      $lightbox.children('img').attr({
          src: $(this).attr('href'),
          alt: $(this).children('img').attr('alt')
      });

      $shadow.show();

  });

  //그림자 영역을 클릭해도 닫힘
  $shadow.on('click', function () {
      $(this).hide();
  });

  // 자손에게 일어난 이벤트를 조상에게 전파되는걸 차단
  $lightbox.on('click', function (evt) {
      evt.stopPropagation();
  });



  //qna(사전면접 질문)
  $('.qna > .q-box > dl > dt > a').on('click', function(evt){
    evt.preventDefault();

    $(this).parent().toggleClass('on').next().stop().slideToggle();
  });
     
});
