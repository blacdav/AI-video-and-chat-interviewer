import { BsInfoCircle } from "react-icons/bs"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Score = () => {
  return (
    <section className="col-span-12 lg:col-span-6 row-span-10 lg:row-span-4 grid grid-col-1 lg:grid-cols-2 bg-white text-black rounded-2xl text-sm overflow-hidden">
      <div className="lg:border-r lg:border-gray-400 grid gap-1 p-3 order-2 lg:order-none">
        <BsInfoCircle className="text-green-600" />
        <p className="text-3xl font-bold">85%</p>
        <p className="font-bold">AI Video Score Summary</p>
        <p className="text-xs">The presentation of talent is good. Check the breakdown summary  off AI Video Score</p>
        <div className="grid grid-cols-2 gap-1">
            <button className="col-span-1 border border-green-600 p-1.5 flex items-center gap-2 justify-center rounded-sm"><FaCheck className="text-green-600" /> Accept</button>
            <button className="col-span-1 border border-green-600 p-1.5 flex items-center gap-2 justify-center rounded-sm"><RxCross2 className="text-red-600" /> Reject</button>
            <button className="col-span-2 bg-green-600 p-1.5 rounded-sm">Hire Talent</button>
        </div>
      </div>
      <div className="p-3 order-1 lg:order-none">
        <h2 className="font-semibold">AI Video Score Details</h2>
        <ul className="grid grid-cols-2 grid-rows-2 gap-y-5 *:justify-center *:items-center *:font-semibold">
          <li className="grid place-items-center">
            <p className="w-1/3"><CircularProgressbar value={80} text={`${80}%`} styles={buildStyles({textColor: `black`})} /></p>
            <p>Professionalism</p>
          </li>
          <li className="grid place-items-center">
            <p className="w-1/3"><CircularProgressbar value={90} text={`${90}%`} styles={buildStyles({textColor: `black`})} /></p>
            <p>Business Acument</p>
          </li>
          <li className="grid place-items-center">
            <p className="w-1/3"><CircularProgressbar value={65} text={`${65}%`} styles={buildStyles({pathColor: `orange`, textColor: `black`})} /></p>
            <p>Opportnistic</p>
          </li>
          <li className="grid place-items-center">
            <p className="w-1/3"><CircularProgressbar value={85} text={`${85}%`} styles={buildStyles({textColor: `black`})} /></p>
            <p>Closing Technique</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Score
