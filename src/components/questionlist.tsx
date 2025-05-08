import { BsInfoCircle } from "react-icons/bs"

const Questionlist = () => {
    const Quetions = [
        "Tell us about yourself",
        "Why do you think you'regood at sales?",
        "What is the biggest eal you have closed?",
        "Why you choose this company?",
        "What your experience in sales"
    ]

  return (
    <section className='bg-white text-black col-span-12 lg:col-span-3 row-span-5 lg:row-span-4 rounded-2xl py-3 px-5'>
      <div className="flex justify-between items-center mb-2">
        <p className="font-semibold">Qustion List</p>
        <BsInfoCircle className="text-green-700" />
      </div>
      <ul className="grid gap-2">
        {
            Quetions.map((q, i) => (
                <li key={i} className="flex gap-3 text-xs font-bold items-center">
                    <p className={`${i + 1 == 1 ? 'bg-green-600' : ''} bg-green-600 text-white py-1 px-2 rounded-full h-fit`}>{i + 1}</p>
                    <p>{q}</p>
                </li>
            ))
        }
      </ul>
    </section>
  )
}

export default Questionlist
