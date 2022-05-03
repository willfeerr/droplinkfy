
export default function AttentionCatcher({ children }) {
  return (
    <>
      <section className="container mx-auto flex justify-center w-full h-full">
        <div className="box p-3 mx-auto rounded-lg w-full video-container">
          <iframe
            width={"100%"}
            height={"600px"}
            className="rounded-lg w-full h-full"
            src={`https://www.youtube.com/embed/wYc5h8gsg2k?autoplay=0&loop=0&controls=1&mute=1&rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube" />
        </div>
      </section>
    </>
  )
}