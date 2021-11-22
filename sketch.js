function setup() { 
  noCanvas();
  var map = L.map('mapid').setView([42, 25.5],7);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


  L.marker([43.2102, 23.5529]).addTo(map)
    .bindPopup('Враца<br> <a href="https://www.youtube.com/watch?v=riewPfSmaHI">Video</a>')
    .openPopup();

  L.marker([42.2613, 23.1124]).addTo(map)
     .bindPopup('Дупница<br> <a href="https://www.dupnitsa.bg/">Site</a>')
     .openPopup();
  
  L.marker([42.6977, 23.3219]).addTo(map)
     .bindPopup('София<br> <a href="https://www.youtube.com/watch?v=yxsgjD1sAHg">Video</a>')
     .openPopup();

  L.marker([42.6097, 23.0308]).addTo(map)
     .bindPopup('Перник<br> <a href="https://www.youtube.com/watch?v=cu8H3Ocpcjs">Video</a>')
     .openPopup();
  
  L.marker([43.2141, 27.9147]).addTo(map)
     .bindPopup('Варна<br> <a href="https://www.youtube.com/watch?v=2D1i5H8XEb4">Video</a>')
     .openPopup();
  
  L.marker([42.1981, 25.3304]).addTo(map)
     .bindPopup('Чирпан<br> <a href="https://www.youtube.com/watch?v=2aWSb8VNKgE">Video</a>')
     .openPopup();
  
  L.marker([43.1425, 23.7142]).addTo(map)
     .bindPopup('Мездра<br> <a href="https://www.youtube.com/watch?v=1FgkMFCTG8Q">Video</a>')
     .openPopup();

} 

function draw() { 

}