$(function () {
  const $myBook = $('#myBook');

  console.log($myBook.booklet)

  const $btnNext = $('#next_page_button');
  const $btnPrev = $('#prev_page_button');
  const $loading = $('#loading');
  const $myBookImages = $myBook.find('img');
  // const cnt_images = $myBookImages.length;
  // let loaded = 0;

  $loading.hide();
  $btnNext.show();
  $btnPrev.show();
  $myBook.show().booklet({
    name: null,
    width: 800,
    height: 500,
    speed: 600,
    direction: 'LTR',
    next: $btnNext,
    prev: $btnPrev,
  })

});