export function initSmallMap() {
  const token =
    "pk.eyJ1IjoiY3NzbmluamEiLCJhIjoiY2toZW1nYm0zMDAxODJycXFzZ3g4cnZ6diJ9.9ebfrGREuwkauRr_afDTgA";
  const markerOptions = {
    color: "red",
  };

  return {
    initMap() {
      mapboxgl.accessToken = token;
      const longitude = parseFloat(
        document.getElementById("small-map").getAttribute("data-long")
      );
      const latitude = parseFloat(
        document.getElementById("small-map").getAttribute("data-lat")
      );
      const smallMap = new mapboxgl.Map({
        container: "small-map",
        style: this.$store.app.isDark === true
          ? "mapbox://styles/mapbox/dark-v10"
          : "mapbox://styles/mapbox/light-v10",
        center: [longitude, latitude],
        zoom: 12,
      });

      smallMap.addControl(new mapboxgl.NavigationControl());

      const marker = new mapboxgl.Marker(markerOptions)
        .setLngLat([longitude, latitude])
        .addTo(smallMap);
    },
  };
}

export function initContactMap() {
  const token =
    "pk.eyJ1IjoiY3NzbmluamEiLCJhIjoiY2toZW1nYm0zMDAxODJycXFzZ3g4cnZ6diJ9.9ebfrGREuwkauRr_afDTgA";
  const markerOptions = {
    color: "red",
  };

  return {
    initHeroMap() {
      mapboxgl.accessToken = token;
      const longitude = parseFloat(
        document.getElementById("hero-map").getAttribute("data-long")
      );
      const latitude = parseFloat(
        document.getElementById("hero-map").getAttribute("data-lat")
      );
      const mainMap = new mapboxgl.Map({
        container: "hero-map",
        style: this.$store.app.isDark === true
          ? "mapbox://styles/mapbox/dark-v10"
          : "mapbox://styles/mapbox/light-v10",
        center: [longitude, latitude],
        zoom: 12,
      });

      mainMap.addControl(new mapboxgl.NavigationControl());

      const marker1 = new mapboxgl.Marker(markerOptions)
        .setLngLat([longitude, latitude])
        .addTo(mainMap);
    },
  };
}
