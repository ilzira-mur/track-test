import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import initialTracks from "../../utils/utils";

function App() {
  const [isAdminMode, setAdminMode] = React.useState(false);
  const [tracks, setTracks] = React.useState([]);

  React.useEffect(() => {
    setTracks(initialTracks)
  }, [])

  const handleCheckbox = () => {
    setAdminMode(!isAdminMode);
}

function handleTrackDelete(track) {
  console.log(track)
  setTracks(initialTracks.filter((c) => c !== track))
  console.log(tracks)
}



  return (
    <div className="app">
      <Header />
      <Main 
        isAdminMode={isAdminMode}
        onCheckbox={handleCheckbox}
        tracks={tracks}
        handleTrackDelete={handleTrackDelete} />
      <Footer />
    </div>
  );
}

export default App;
