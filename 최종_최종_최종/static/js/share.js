function kakaoShare(){
  Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '배스킨라빈스 무슨 맛 먹을까?',
        description: '취향에 맞는 아이스크림을 추천해드려요!',
        imageUrl:
          'https://i.pinimg.com/originals/86/27/f2/8627f2ad4ff5bdfe2a7e8462ec8c8b99.jpg',
        link: {
          mobileWebUrl: 'http://norandp.shop/',
          androidExecutionParams: 'test',
        },
      },
      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            mobileWebUrl: 'http://norandp.shop/',
          },
        },
        {
          title: '앱으로 이동',
          link: {
            mobileWebUrl: 'http://norandp.shop/',
          },
        },
      ]
    });
  }  
