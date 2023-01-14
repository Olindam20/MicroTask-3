async function getLatLong(street, city, state, country, postalcode) {
  console.log(street, city, state, country, postalcode);

  try {
    let res = await fetch(
      `https://nominatim.openstreetmap.org/search?street=${street}{city=${city}&state=${state}&country=${country}&postalcode=${postalcode}&format=json`
    );
    res = await res.json();
    // console.log(res);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}

window.onload = function () {
  let form = document.forms.getLatLong;

  form.addEventListener("submit", (e) => {
    let formdata = new FormData(form);
    console.log(formdata);
    e.preventDefault();
    getLatLong(
      formdata.get("street").toLowerCase(),
      formdata.get("city").toLowerCase(),
      formdata.get("state").toLowerCase(),
      formdata.get("country").toLowerCase(),
      formdata.get("postalcode")
    ).then((res)=>{

        document.getElementById("latlong-box").style.display = "flex"
        console.log(res);
        document.getElementById("your-latlong").innerHTML = "Latitude : " +  res[0].lat + ' ' + "Longitude : " + res[0].lon
    })
  });
};
