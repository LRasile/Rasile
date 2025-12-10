export default function VideoEmbed({ src }) {
  let embedUrl = src
  if (src.search('youtube') != -1) {
    embedUrl = `https://www.youtube.com/embed/${src.split('?v=')[1]}`
  }
  if (src.search('twitch') != -1) {
    embedUrl =
      src.replace('https://www.twitch.tv/videos/', 'https://player.twitch.tv/?video=') +
      `&parent=${window.location.hostname}&autoplay=false`
    console.log(embedUrl)
  }
  if (src.search('streamable') != -1) {
    embedUrl = src.replace('https://streamable.com/', 'https://streamable.com/e/')
  }
  if (src.search('medal') != -1) {
    embedUrl = src.replace('https://medal.tv/games/league-of-legends/clips', 'https://medal.tv/clip')
  }

  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )
}
