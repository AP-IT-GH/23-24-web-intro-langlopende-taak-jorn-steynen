fetch('https://localhost:7179/Audio/GetCurrentSong')

.then(response => response.json())

.then(json => {

  let html = '<div>';

  for (let i = 0; i < json.length; i++) {
    const state = json[i];
    html += `<div">
         <p><span style="text-decoration: underline;">Uw huidig nummer:</span></p> 
        <p>Nummer: ${state.song}</p> 
        <p>Artiest: ${state.artist}</p>
        <p>Album: ${state.album}</p>
      </div>
    </div>`;
    console.log(json[i]);
  }

  html += '</div>';
  document.getElementById("randomSong").innerHTML = html;
})
.catch(error => {
  console.log('Error:', error);
  fetch('./json/muziek.json')
    .then(response => response.json())

    .then(json => {
    
      let html = '<div>';
    
      for (let i = 0; i < json.length; i++) {
        const state = json[i];
        html += `<div">
        <p><span style="text-decoration: underline;">Uw huidig nummer:</span></p> 
       <p>Nummer: ${state.song}</p> 
       <p>Artiest: ${state.artist}</p>
       <p>Album: ${state.album}</p>
     </div>
   </div>`;
        console.log(json[i]);
      }
    html += '</div>';
    document.getElementById("randomSong").innerHTML = html;
  })
});