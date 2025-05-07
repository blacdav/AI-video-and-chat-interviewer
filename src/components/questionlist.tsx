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
      <div className="flex justify-between">
        <p>Qustion List</p>
        <BsInfoCircle className="text-green-700" />
      </div>
      <ul>
        {
            Quetions.map((q, i) => (
                <li key={i} className="flex gap-3 leading-8 text-xs font-bold">
                    <p>{i + 1}</p>
                    <p>{q}</p>
                </li>
            ))
        }
      </ul>
    </section>
  )
}

export default Questionlist
