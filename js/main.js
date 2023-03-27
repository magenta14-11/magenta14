// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)


// const app = {
 
//  songs : [
//   {
//     name : 'Suốt Đời Không Xứng',
//     author : 'Khải Đăng',
//     image : './assets/img/a0.jpg',
//     path : './assets/music/a0.mp3'
//   },
//   {
//     name : 'Cứ Ngỡ Là Mơ',
//     author : 'Hải Băng',
//     image : './assets/img/a1.jpg',
//     path : './assets/music/a1.mp3'
//   },
//   {
//     name : 'Đặt Vị Trí Của Nhau',
//     author : 'Hà My',
//     image : './assets/img/a2.jpg',
//     path : './assets/music/a2.mp3'
//   },
//   {
//     name : 'Hào Bước Theo Đời',
//     author : 'Hồ Quang Hiếu',
//     image : './assets/img/a4.jpg',
//     path : './assets/music/a4.mp3'
//   },
//   {
//     name : 'Cứu Vãn Kịp Không',
//     author : 'Vương Anh Tú',
//     image : './assets/img/a5.jpg',
//     path : './assets/music/a5.mp3'
//   },
//   {
//     name : 'Hôm Nay Em Cưới Rồi',
//     author : 'Khải Đăng',
//     image : './assets/img/a6.jpg',
//     path : './assets/music/a6.mp3'
//   },
//   {
//     name : 'Lỗi Do Em',
//     author : 'Miko Lan Trinh',
//     image : './assets/img/a7.jpg',
//     path : './assets/music/a7.mp3'
//   },
//   {
//     name : 'Một Tình Yêu Hai Thử Thách',
//     author : 'Luan Ken',
//     image : './assets/img/a8.jpg',
//     path : './assets/music/a8.mp3'
//   },
//   {
//     name : 'Quá Khứ Anh Không Thể Quên',
//     author : 'Dương Minh Tuấn',
//     image : './assets/img/a9.jpg',
//     path : './assets/music/a9.mp3'
//   },
//   {
//     name : 'Thì Thôi',
//     author : 'Lan Anh',
//     image : './assets/img/a12.jpg',
//     path : './assets/music/a12.mp3'
//   },
// ],
// render : function(){
//   const htmls =  this.songs.map(song =>
//     `
//    <div class="song">
//             <div class="play-list__item-img">
//               <img src="${song.image}" alt="">
//             </div>
//             <div class="play-list__item-info">
//               <h4 class="play-list__item-name">${song.name}</h4>
//               <p class="play-list__item-author">${song.author}</p>
//             </div>
//             <div class="play-list__item-option">
//              <i class="fa-solid fa-ellipsis"></i>
//             </div>
//           </div>

//    `
  
//   )
//   $('.play-list').innerHTMl = htmls.join('')
//  },
// start : function(){
//   this.render()
// }

// }
// app.start()