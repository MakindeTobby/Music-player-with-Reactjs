import { useEffect, useRef, useState } from 'react'
import Controls from './Components/Controls';
import Head from './Components/Head';
import Footer from './Components/Footer';
import Details from './Components/PlayerDetails';
import axios from 'axios';

function App() {
  let isMounted = true;
  const [song, setSong] = useState(
    [
      // {
      //   "artist": "Brymo",
      //   title: "A Fèèdú Fan’nà",
      //   src: "/Music/A Fèèdú Fan’nà.mp3"
      // },
      // {
      //   "artist": "Brymo",
      //   title: "Adèdótun",
      //   src: "/Music/Adèdótun.mp3"
      // },
      // {
      //   "artist": "Brymo",
      //   title: "Ozymandias",
      //   src: "/Music/Ozymandias.mp3"
      // },
      // {
      //   "artist": "Brymo",
      //   title: "Rara Rira",
      //   src: "/Music/Rara Rira.mp3"
      // },
      // {
      //   "artist": "Brymo",
      //   title: "Heartbreak Songs Are Better Than English",
      //   src: "/Music/Heartbreak Songs Are Better Than English.mp3"
      // },
      // {
      //   "artist": "Infinity",
      //   title: "Only Praise",
      //   src: "/Music/Only_praise.mp3"
      // },
    ]
  )
  let [currentSong, setCurrentSong] = useState(0)
  const audioEl = useRef(null)
  const barEl = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  useEffect(() => {
    const Fetch = async () => {
      const response = await axios.get('https://musica-api.up.railway.app/popular');
      const result = await response.data;
      setSong(result);
    }

    if (isMounted) Fetch()
    return () => {
      isMounted = false
    }

  }, [])
  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play()
    } else {
      audioEl.current.pause()
    }
    audioEl.current.addEventListener('timeupdate', updateProgress)
    function updateProgress(e) {
      const { duration, currentTime } = e.srcElement;
      const progressPercent = (currentTime / duration) * 100;
      barEl.current.style.width = `${progressPercent}%`
    }
  })


  const forwardSong = () => {
    currentSong++;
    setCurrentSong(currentSong)
    if (currentSong > song.length - 1) {
      currentSong = 0
      setCurrentSong(currentSong)
    }
  }
  const backwardSong = () => {
    currentSong--;
    setCurrentSong(currentSong)
    if (currentSong < 0) {
      currentSong = 0
      setCurrentSong(currentSong)
    }
  }

  return (
    <div className='container tw-bg-slate-200 tw-h-[100vh] tw-w-full rounded  tw-flex  tw-items-center tw-justify-center p-4'>
      <div className='tw-bg-slate-900 tw-w-80 h-auto  tw-flex tw-gap-4 tw-items-center tw-p-5 tw-flex-col rounded'>
        <Head isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <div>
          <audio src={song[currentSong]?.audio} ref={audioEl}></audio>
          <Details song={song} currentSong={currentSong} />
          <div className="w-100 tw-h-1 rounded-pill tw-bg-slate-100 tw-pointer-cursor">
            <div ref={barEl} className="tw-h-1 rounded-pill  tw-bg-red-600">

            </div>
          </div>
        </div>
        <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} skipSong={forwardSong} backSong={backwardSong} />
        <Footer />

      </div>

    </div>

  )
}

export default App
