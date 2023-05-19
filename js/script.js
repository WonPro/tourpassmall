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
      dots: true,
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
      swipeToSlide: true,
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

    // 메뉴별 내림차순 정렬
    function hotRanking(tabNm) {

      // 필터별 배열 정렬
      dummyData.sort(function (a, b) {
        return b[tabNm] - a[tabNm];
      });

      // html 변경
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


  /* Recommended Product */

    let dummyData2 = [
      {
        id: '001',
        img: 'img/img_main_prdRanking_dgw.jpg',
        region: '경북',
        tit: '동궁원',
        price: 106000,
        priceBefore: 216000,
        rate: 51,
        tag: [
          '사전예약', '바로이용가능'
        ]
      },
      {
        id: '002',
        img: 'img/img_main_visualSlide_kb.jpg',
        region: '경북',
        tit: '경북투어패스 여행 가볼만한곳 관광 전시 액티비티 카페',
        price: 106000,
        priceBefore: 17900,
        rate: 51,
        tag: [
          '사전예약', '바로이용가능'
        ]
      },
      {
        id: '003',
        img: 'img/img_main_visualSlide_ic.jpg',
        region: '인천',
        tit: '[인천투어패스] 통합권',
        price: 106000,
        priceBefore: 216000,
        rate: 51,
        tag: [
          '사전예약', '바로이용가능'
        ]
      },
      {
        id: '004',
        img: 'img/img_main_prdRanking_jsgg.jpg',
        region: '전북',
        tit: '지식공간 서유구와 빙허각',
        price: 3000,
        priceBefore: null,
        rate: null,
        tag: [
          '사전예약', '바로이용가능'
        ]
      },
      {
        id: '005',
        img: 'img/img_main_visualSlide_ic.jpg',
        region: '인천',
        tit: '[인천투어패스] 통합권',
        price: 106000,
        priceBefore: 216000,
        rate: 51,
        tag: [
          '사전예약', '바로이용가능'
        ]
      },
      {
        id: '006',
        img: 'img/img_main_prdRanking_flower.jpg',
        region: '전북',
        tit: '꽃잔디동산',
        price: 106000,
        priceBefore: 216000,
        rate: 54,
        tag: [
          '사전예약', '바로이용가능'
        ]
      }
    ]

    function recommendPrd() {
      // html 변경
      const recommendItems = $('#recommendPrd .recommend_container .recommend_item');
    
      recommendItems.each(function(i) {
        // 이미지 삽입
        $(this).find('.img_box').css('background-image', `url(${dummyData2[i].img})`);
    
        // 태그 삽입
        const tagContainer = $(this).find('.tag_container');
    
        dummyData2[i].tag.forEach(function(tag) {
          const tagElement = $('<span class="tag"></span>').text(tag);
          tagContainer.append(tagElement);
        });
        // 지역 삽입
        const titContainer = $(this).find('.tit_container'),
              regionElement = $('<span class="region font_bold"></span>').text(dummyData2[i].region);

        titContainer.append(regionElement)        
        
        // 상품명 삽입
        $(this).find('.tit_container').append(dummyData2[i].tit);

    
        // 할인율 삽입
        $(this).find('.price_container .rate').text(dummyData2[i].rate);
        if (dummyData2[i].rate == null){
          $(this).find('.price_container .rate').addClass('null')
        } 
    
        // 판매가 삽입 (3자리마다 콤마 정규식 포함)
        $(this).find('.price_container .price_box .price').text(dummyData2[i].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    
        // 정상가 삽입 (3자리마다 콤마 정규식 포함)
        const priceBefore = dummyData2[i].priceBefore ? dummyData2[i].priceBefore.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
        $(this).find('.price_container .price_box .price_before').text(priceBefore);
      });
    }

    recommendPrd();
    /* // Recommended Product */


    /* Monthly Product Slide */
    let monthlyPrdSlide = $('#monthlyPrdSlide');

    monthlyPrdSlide.slick({
      dots: true,
      slidesToScroll: 1,
    })


    function monthlyPrd(){
      // html 변경
      $('#monthlyPrd .monthly_container .monthly_item').each(function(i){
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

    monthlyPrd();
    /* // Monthly Product Slide */
    

  
})