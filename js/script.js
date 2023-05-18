'use strict'

$(function(){

  /* Main Visual Slide */
    let visualSlide = $('#visualSlide');
    let visualSlideDesc = $('#slideDesc');
    let titles = [
      '인천 바다를 항해하다<br>유람선, 요트, 놀이공원까지',
      '해운대의 시원함과<br>광안리의 아름다운 야경까지',
      '에메랄드빛 바다와<br>자연을 그대로 간직한 제주',
      '시간을 머금은<br>살아 숨쉬는 역사의 본고장',
      '작은고추가 맵다!<br>매운맛 한번 보고가세요',
      '전북은 무슨 설명이<br>들어가야되는지 모르겠어'
    ]

    visualSlide.on('beforeChange', function(event, slick, currentSlide, nextSlide){
      visualSlideDesc.delay(300).html(titles[nextSlide]);
    });

    visualSlide.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      infinite: true,
      centerMode: true,
      centerPadding: "20%",
      touchMove: false,
    });
  /* // Main Visual Slide */



  /* Region Product Slide */
    let regionPrdSlide = $('#regionPrdSlide');

    regionPrdSlide.slick({
      rows: 1,
      slidesToShow: 3.2,
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
    });
  /* // Region Product Slide */



  /* Product Ranking */

    let dummyData = [
      {
        id: 'jj',
        total: 13486,
        month: 96,
        comment: 4237,
        grade: 4.2,
        img: 'img/img_main_visualSlide_jj.jpg',
        tit: '제주투어패스 48시간 프리패스 제주도 여행 체험 관광지 감귤 액티비티 카트 ...',
        rate: 54,
        price: 106000,
        priceBefore: 216000,
      },
      {
        id: 'bs',
        total: 11974,
        month: 154,
        comment: 3174,
        grade: 4.4,
        img: 'img/img_main_visualSlide_bs.jpg',
        tit: '부산투어패스 48시간 프리패스 부산 여행 체험 관광지 액티비티 카트 요트',
        rate: 54,
        price: 106000,
        priceBefore: 216000,
      },
      {
        id: 'kb',
        total: 6468,
        month: 13,
        comment: 72,
        grade: 4.7,
        img: 'img/img_main_visualSlide_kb.jpg',
        tit: '경북투어패스 48시간 프리패스 경북 여행 체험 관광지 액티비티 카트',
        rate: 54,
        price: 106000,
        priceBefore: 216000,
      },
      {
        id: 'jb',
        total: 3447,
        month: 22,
        comment: 2248,
        grade: 4.5,
        img: 'img/img_main_visualSlide_jb.jpg',
        tit: '전북투어패스 48시간 프리패스 전북 여행 체험 관광지 액티비티 카페',
        rate: 54,
        price: 106000,
        priceBefore: 216000,
      },
      {
        id: 'cy',
        total: 442,
        month: 3,
        comment: 368,
        grade: 4.9,
        img: 'img/img_main_visualSlide_cy.jpg',
        tit: '청양투어패스 48시간 프리패스 청양 여행 체험 관광지 액티비티 카페',
        rate: 54,
        price: 106000,
        priceBefore: 216000,
      },
      {
        id: 'ic',
        total: 1967,
        month: 35,
        comment: 1045,
        grade: 4.8,
        img: 'img/img_main_visualSlide_ic.jpg',
        tit: '인천투어패스 48시간 프리패스 인천 여행 체험 관광지 액티비티 카페',
        rate: 54,
        price: 106000,
        priceBefore: 216000,
      }      
    ]


    function hotRanking(tabNm) {
      
      //메뉴별 내림차순 정렬
      // if (tabNm == 'total') {
      //   dummyData.sort(function (a, b) {
      //     return b.total - a.total;
      //   })
      // } else if (tabNm == 'monthly') {
      //   dummyData.sort(function (a, b) {
      //     return b.month - a.month;
      //   })
      // } else if (tabNm == 'comments') {
      //   dummyData.sort(function (a, b) {
      //     return b.comment - a.comment;
      //   })
      // } else if (tabNm == 'grade') {
      //   dummyData.sort(function (a, b) {
      //     return b.grade - a.grade;
      //   })
      // }
      var tabName = tabNm
      console.log(tabNm)
      console.log(tabName)
      console.log(dummyData[0])
      console.log(dummyData[0].tabName)

      dummyData.sort(function (a, b) {
        return b.tabName - a.tabName;
      })

      $('#prdRanking .rank_container .rank_item').each(function(i){
        // 이미지 삽입
        $(this).find('.img_box').css('background-image', 'url(../' + dummyData[i].img + ')');
        // 상품명 삽입
        $(this).find('.text_box .prd_tit').text(dummyData[i].tit);
        // 할인율 삽입
        $(this).find('.text_box .price_box .rate').text(dummyData[i].rate);
        // 판매가 삽입 (3자리마다 콤마 정규식 포함)
        $(this).find('.text_box .price_box .price').text(dummyData[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        // 정상가 삽입 (3자리마다 콤마 정규식 포함)
        $(this).find('.text_box .price_box .price_before').text(dummyData[i].priceBefore.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
      });
    }

    // 윈도우 시작시 누적판매량부터 보이게 함
    hotRanking('total');

    // 탭메뉴 클릭이벤트
    let tabMenu = $('#prdRanking .tab_menu li');

    tabMenu.on('click', function(){
      let tabNm = $(this).data('tabname');
          
      tabMenu.removeClass('active');
      $(this).addClass('active');
      
      hotRanking(tabNm);
      
    })

  /* // Product Ranking */
  
})