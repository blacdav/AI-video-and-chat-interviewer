import { BsInfoCircle } from "react-icons/bs"

const Score = () => {
  return (
    <section className="col-span-12 lg:col-span-6 row-span-10 lg:row-span-4 grid grid-col-1 lg:grid-cols-2 bg-white text-black rounded-2xl text-sm">
      <div className="lg:border-r lg:border-gray-400 grid gap-1 p-3">
        <BsInfoCircle className="text-green-600" />
        <p className="text-3xl font-bold">85%</p>
        <p className="font-bold">AI Video Score Summary</p>
        <p className="text-xs">The presentation of talent is good. Check the breakdown summary  off AI Video Score</p>
        <div className="grid grid-cols-2 gap-1">
            <button className="col-span-1 border border-green-600 p-1.5 rounded-sm">Accept</button>
            <button className="col-span-1 border border-green-600 p-1.5 rounded-sm">Reject</button>
            <button className="col-span-2 bg-green-600 p-1.5 rounded-sm">Hire Talent</button>
        </div>
      </div>
      <div></div>
    </section>
  )
}

export default Score
