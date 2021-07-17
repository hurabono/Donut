 
    function initmap(){
      const myLatLng = {
          lat: 43.676246,
          lng: -79.400662
      }

      const map = new google.maps.Map(
          document.getElementById('map'),
          {
              center: myLatLng,
              scrollwheel: false,
              zoom: 18
          }
      );

      const marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Toronto'

      });
  }
