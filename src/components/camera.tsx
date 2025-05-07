import Webcam from "react-webcam";

const Camera = () => {
    const videoConstraints = {
        width: 1000,
        height: 500,
        facingMode: "user"
    };

  return (
    <>
        <section className="col-span-12 lg:col-span-9 row-span-5 lg:row-span-8 bg-white text-black rounded-2xl overflow-hidden">
            <Webcam
                onUserMediaError={(err) => console.error("Webcam error", err)}
                disablePictureInPicture={true}
                videoConstraints={videoConstraints}
                className="w-full h-full object-cover"
            />
        </section>
    </>
  )
}

export default Camera
