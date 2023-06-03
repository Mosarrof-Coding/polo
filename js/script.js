$('.w-slide-inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.me-prev',
    nextArrow: '.me-next',
  });
$('.w-slide-inner1').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.me-prev1',
    nextArrow: '.me-next2',
  });
$('.ban_vidslider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '.me-prev3',
    nextArrow: '.me-next4',
  });
$('.item-slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows:false,
    autoplay:true,
    autoplaySpeed:5000,
    asNavFor:'.text-slider',
  });

  $('.text-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor:'.item-slider',
    prevArrow: '.asnavbtn i.fa-chevron-left',
    nextArrow: '.asnavbtn i.fa-chevron-right',
  });