import Webcam from "react-webcam";
import Interviewer from "./interviewer";

const Camera = () => {
    const videoConstraints = {
        width: 1000,
        height: 500,
        facingMode: "user"
    };

  return (
    <>
        <section className="relative col-span-12 lg:col-span-9 row-span-5 lg:row-span-8 bg-white text-black rounded-2xl overflow-hidden">
            <Webcam
                onUserMediaError={(err) => console.error("Webcam error", err)}
                disablePictureInPicture={true}
                videoConstraints={videoConstraints}
                className="w-full h-full object-cover"
            />
            <Interviewer />
            <div className="absolute top-4 left-4 flex gap-2 text-white">
                <img src="/assets/react.svg" alt="user photo" />
                <div>
                    <p className="font-semibold text-lg">Seo Jan Im</p>
                    <small className="text-xs">Talent</small>
                </div>
            </div>
        </section>
    </>
  )
}

export default Camera
