// var x = document.getElementById("demo");

async function getAdd(lat, lng){
 try{
  let resp = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
  resp = await resp.json()
  return resp

 }catch(err){
  return err
 }
    
}

function getLoc() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    // x.innerHTML = "Geolocation is not supported by this browser.";
    console.log("GeoLocation is not supported by this browser");
  }
}

function showPosition(position) {
  getAdd(position.coords.latitude, position.coords.longitude).then((res)=>{
    console.log(res);
    let road=res?.address?.road
    let suburb=res.address?.suburb
    let county=res.address?.county
    let district=res.address?.state_district 
    let state=res.address?.state 
    let country=res.address?.country 
    document.getElementById('your-address').innerHTML = 'Your Address :' + ' ' + road + ' , ' + suburb+ ' , ' + county + ' , ' + district + ' , ' + state + ' , ' + country
  })
    // console.log(position.coords);

}

window.onload = getLoc()


