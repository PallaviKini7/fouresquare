import React from 'react';
import { useState } from 'react';
import './App.css';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import Header from './component/header/header';
import Sidemenu from './component/sidemenu/sidemenu';

function App() {
  const [disp, setDisp] = useState(false)
  const [setlatgeodb, setsetlatgeodb] = useState({})
  function displaySideMenu() {
    setDisp(true)
  }

  const { isLoaded } = useLoadScript(
    {
      googleMapsApiKey: process.env.API_KEY
    }
  )
  if (!isLoaded) {
    return <h1>Loading</h1>
  }
  const loc = {
    lat: 13.340881,
    lng: 74.742142
  }

  return (
    <div className="App">
      <Header latlong={setlatgeodb} />
      <main>
        {
          disp && <Sidemenu />
        }

        <GoogleMap
          center={loc}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false
          }}
        >
          <Marker position={loc} onClick={displaySideMenu} />

        </GoogleMap>


      </main>

    </div>
  );
}

export default App;
