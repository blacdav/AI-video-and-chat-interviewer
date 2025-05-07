import { CiVideoOn } from "react-icons/ci"
import { FaRegFaceGrin } from "react-icons/fa6"
import { FiPaperclip } from "react-icons/fi"

const Chatbox = () => {
  return (
    <section className="col-span-12 lg:col-span-3 max-h-60 lg:max-h-none lg:row-span-12 order-last lg:order-none bg-white text-black rounded-2xl p-5">
      <div className="flex gap-3">
        <img src="/public/assets/react.svg" alt="user photo" />
        <div>
          <p className="text-lg font-bold">Olivia Wild</p>
          <small className="text-xs">Female . 81yrs</small>
        </div>
      </div>
      <ul className="grid grid-cols-4 gap-2 *:w-fit *:flex *:justify-center *:text-center">
        <li>Record</li>
        <li className="border-b-2 border-amber-500">Chat</li>
        <li>Notes</li>
        <li>Docs</li>
      </ul>
      <div>
        <div className="max-h-4/5 border-2 border-amber-500">
          chats here
          <div>
          <CiVideoOn /> Video call started
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <FiPaperclip />
          </div>
          <div className="flex">
            <input type="text" />
            <FaRegFaceGrin />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chatbox
