const API ='https://music.niubishanshan.top/api/v2/music/search/json'

const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const ul = document.querySelector('.song-list')

btn.addEventListener('click', () => {
  const req = new XMLHttpRequest()
  const keyword = input.value
  req.open('GET', API+keyword,true)
  req.onreadystatechange = function () {
    if (req.readyState === 4){
      if(req.status >= 200 && req.status < 300|| req.status ===304){
        const json = JSON.parse(req.responseText)
        const {data} = json
        const {songList} = data
        const idList = songList.map(e => e.songListMid)
        const html = idList.map(str => '<li>${str}</li>').join

        ul.innerHTML = html
      }else{
        console.log('请求错误')
      }
    }
  }
  req.send()
})
