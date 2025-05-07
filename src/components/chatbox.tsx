import { useState } from "react"
import { CiVideoOn } from "react-icons/ci"
import { FaRegFaceGrin } from "react-icons/fa6"
import { FiPaperclip } from "react-icons/fi"
import type { ChatsType } from "../interfaces"

const Chatbox = () => {
  const [chats, setChats] = useState<ChatsType[]>([]);
  const [message, setMessage] = useState<string>('');

  const sendmessage = async () => {
    if(!message.trim()) return;

    const userMessage: ChatsType = {
      role: 'user',
      content: message
    }

    const updatedMessage = [...chats, userMessage]

    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-v3-base:free',
          messages: updatedMessage,
          temperature: 1,
          max_tokens: 1000,
        })
      })

      const data = await res.json();
      console.log(data);
      // const assistanst: ChatsType = data.choices[0].message;
      // console.log(assistanst);
      setChats((prev) => [...prev, userMessage]);
    } catch (error) {
      console.error('API Error: ', error);
    }

    setMessage('');
  }
  return (
    <section className="col-span-12 lg:col-span-3 max-h-60 lg:max-h-none lg:row-span-12 order-last lg:order-none bg-white text-black rounded-2xl p-5">
      <div className="flex gap-3">
        <img src="/assets/react.svg" alt="user photo" />
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
      <div className="h-full">
        <div className="h-[80%] border-t border-gray-300">
          {/* <div> */}
            <div className='h-[90%] flex flex-col justify-end gap-1 overflow-y-scroll'>
              {
                chats.map((c, i) => (
                  <p key={i} className={`${c.role == 'user' ? 'self-end' : 'self-start'} bg-gray-300 px-2 py-1 rounded-lg max-w-4/5 break-words`}>{c.content}</p>
                ))
              }
            </div>
            <div className="flex gap-2 items-center justify-center py-3">
              <CiVideoOn /> Video call started
            </div>
          {/* </div> */}
        </div>
        <div className="flex gap-2 items-center">
          <div className="border-2 border-gray-300 p-3 rounded-xl">
            <FiPaperclip />
          </div>
          <div className="flex items-center w-full gap-2 border-2 border-gray-300 p-2 rounded-xl">
            <input type="text" onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => { if (e.key == 'Enter') return sendmessage()}} placeholder="Write your message" className="outline-none" />
            <FaRegFaceGrin />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chatbox
