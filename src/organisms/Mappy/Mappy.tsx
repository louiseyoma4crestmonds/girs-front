import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ReactMapGl, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  Source,
  Layer,
} from "react-map-gl";
import { MappyProps } from "./Mappy.types";

function Mappy(props: MappyProps): JSX.Element {
  const router = useRouter();
  const { desLattitude, desLongitude } = props;
  const [viewState, setViewState] = useState({
    longitude: Number(router.query.destinationLatitude),
    latitude: Number(router.query.destinationLongitude),
    zoom: 14,
  });

  const [start, setStart] = useState([8.344225276498344, 4.947316875217527]);
  const [end, setEnd] = useState([
    router.query.destinationLatitude,
    router.query.destinationLongitude,
  ]);
  const [coords, setCoords] = useState([]);

  const getRoute = async () => {
    const responses = await axios
      .get(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=pk.eyJ1IjoibG91aXNleW9tYSIsImEiOiJjbHBwdWI4cDcxOTBoMmtxeWVycHpkdmhmIn0.ddZUYBPHT3cFTrw-mq9yWQ`
      )
      .then((res) => {
        const coordsq: any = res.data.routes[0].geometry.coordinates;

        setCoords(coordsq);
      })
      .catch((err) => err.message);
  };

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "feature",
        geometry: {
          type: "LineString",
          coordinates: [...coords],
        },
      },
    ],
  };

  const lineStyle = {
    id: "roadLayer",
    type: "line",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "green",
      "line-width": 4,
      "line-opacity": 0.75,
    },
  };

  useEffect(() => {
    getRoute();
  }, [desLattitude, desLongitude]);

  return (
    <div>
      <ReactMapGl
        {...viewState}
        mapboxAccessToken="pk.eyJ1IjoibG91aXNleW9tYSIsImEiOiJjbHBwdWI4cDcxOTBoMmtxeWVycHpkdmhmIn0.ddZUYBPHT3cFTrw-mq9yWQ"
        mapStyle={"mapbox://styles/mapbox/streets-v9"}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: "70vw", height: "70vh" }}
      >
        <Source id="routeSource" type="geojson" data={geojson}>
          <Layer {...lineStyle} />
        </Source>
        <GeolocateControl />
        <FullscreenControl />
        <Marker longitude={start[0]} latitude={start[1]} />
      </ReactMapGl>
    </div>
  );
}

export default Mappy;
