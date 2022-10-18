import illustration__box from "./illustration-box-desktop.svg";
import illustration__woman_desktop from "./illustration-woman-online-desktop.svg";
import illustration__woman_mobile from "./illustration-woman-online-mobile.svg";
import arrow from "./icon-arrow-down.svg"
import { useState } from "react";

function App() {

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false
      }
  
      return faq
    }))
  }

  const [faqs, setfaqs] = useState([
    {
      question: "How many team members can I invite?",
      answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
        open: true,
    },
    {
      question: "What is the maximum file upload size?",
      answer:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
        open: false,
    },
    {
      question: "How do I reset my password?",
      answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
      open: false,
    },
    {
      question: "Can I cancel my subscription?",
      answer: `Yes! Send us a message and weill process your request no questions asked.`,
      open: false,
    },
    {
      question: "Do you provide additional support?",
      answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
      open: false,
    },
  ])

  return (
    <div className="h-screen bg-gradient-to-b relative from-[#af67e9] to-[#6565e7] flex flex-col overflow-hidden items-center justify-center">
      <div className="desk:w-[875px] mobile:w-[350px] desk:h-[450px] mobile:h-[600px] bg-white shadow-xl rounded-3xl flex desk:flex-row mobile:flex-col">
        
        {/* Illustration */}
        <div className="illustration mobile:h-[25%] w-[350] desk:h-[100%] flex-col">
        <img
            src={illustration__box}
            alt="illustration with box"
            className="illustration__box"
          />

          <img
            className="illustration__woman-desktop"
            src={illustration__woman_desktop}
            alt="illustration with woman"
          />
          <img
            className="illustration__woman-mobile"
            src={illustration__woman_mobile}
            alt="illustration with woman"
          />
        </div>

        <div className="desk:w-[55%] mobile:w-[100%] flex items-center justify-between">
          <div className="desk:w-[90%] mobile:w-[90%] desk:ml-0 mobile:ml-4 h-[80%] flex-col items-center">
            <h1 className="text-4xl font-bold desk:text-start mobile:text-center">FAQ</h1>
            <div className="w-[100%] h-[100%] mt-5 flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <div onClick={() => toggleFAQ(i)} className={`flex flex-col gap-2 items-start ${faq.open ? "h-[90px]":"h-[40px]"} border-b-[0.5px] border-black transition-all cursor-pointer hover:text-[#f47c57] duration-700`}>
                  <h1 className="flex flex-row items-center justify-between w-[100%] font-[600]">{faq.question}<img src={arrow} className="w-[12px] h-[9px]" /></h1>
                  {faq.open ? <p className="text-xs font-600 text-[#1d1e35]/60">{faq.answer}</p>:""}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
