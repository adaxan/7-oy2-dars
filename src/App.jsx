import React, { useEffect, useState } from 'react';
import locate from '../src/images/locate.svg';
import iphone from '../src/images/iphone.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const translations = {
    uzbek: {
      securitySolution: "XAVFSIZLIK YECHIMI",
      keepTrack: "Oila a'zolaringizni real vaqtda kuzatib boring!",
      noticed: "Biz dunyoda xavfsizlik darajasining yuqori ekanligini sezib, ushbu muammolarni texnologiya yordamida hal qilish haqida o'yladik.",
      joinWaitlist: "Bizning navbatga qo'shiling!",
      firstNotify: "Mahsulot tayyor bo'lganda birinchilardan bo'lib xabardor bo'ling!",
      yourEmail: "Email manzilingiz",
      joinList: "Ro'yxatga qo'shilish!",
    },
    english: {
      securitySolution: "A SECURITY SOLUTION",
      keepTrack: "Keep track of your loved ones in real time!",
      noticed: "We noticed the high level of insecurity in the world, and we thought of how technology could be used to combat these insecurities.",
      joinWaitlist: "Join Our Waitlist!",
      firstNotify: "Be the first to get notified when the product is ready!",
      yourEmail: "Your email address",
      joinList: "Join List!",
    },
    russian: {
      securitySolution: "РЕШЕНИЕ БЕЗОПАСНОСТИ",
      keepTrack: "Следите за своими близкими в реальном времени!",
      noticed: "Мы заметили высокий уровень небезопасности в мире и подумали о том, как технологии могут помочь в борьбе с этими проблемами.",
      joinWaitlist: "Присоединяйтесь к нашему списку ожидания!",
      firstNotify: "Будьте первым, кто узнает, когда продукт будет готов!",
      yourEmail: "Ваш адрес электронной почты",
      joinList: "Присоединяйтесь к списку!",
    },
  };

  const [language, setLanguage] = useState('uzbek');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value); 
  };

  useEffect(() => {
    toast.success("Welcome to the app!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }, []);

  return (
    <div className='container max-w-7xl mx-auto'>
      <ToastContainer />
      <div className='flex flex-col justify-center mx-auto mt-10 shadow-lg items-center p-8'>
        <div className='flex space-x-4'>
          <select 
            className='px-4 py-2 border border-gray-300 rounded-md'
            onChange={handleLanguageChange}
          >
            <option value="uzbek">Uzbek</option>
            <option value="english">English</option>
            <option value="russian">Russian</option>
          </select>
          <select className='px-4 py-2 border border-gray-300 rounded-md'>
            <option value="light mode">Light Mode</option>
            <option value="dark mode">Dark Mode</option>
          </select>
        </div>
      </div>
      
      <div className='flex mt-5 bg-blue-200 rounded-3xl p-10'>
        <div>
          <h3 className='font-bold text-gray-600'>{translations[language].securitySolution}</h3>
          <h2 className='w-4/5 font-black text-5xl text-blue-950'>{translations[language].keepTrack}</h2>  
          <div className='flex items-center gap-7 mt-5'>
            <img className='w-12 h-20' src={locate} alt="" />
            <p className='w-1/2'>{translations[language].noticed}</p>
          </div>
          <h3 className='font-extrabold text-3xl mt-5'>{translations[language].joinWaitlist}</h3>
          <p className='font-medium text-lg text-blue-950 mt-3'>{translations[language].firstNotify}</p>
          <div className='mt-3 border w-1/2 p-2 rounded-full bg-white flex justify-between gap-10'>
            <input className='outline-none bg-transparent' type="text" placeholder={translations[language].yourEmail} />
            <button className='bg-blue-600 p-3 rounded-3xl px-8 cursor-pointer text-white'>{translations[language].joinList}</button>
          </div>
        </div>
        <div>
          <img src={iphone} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;