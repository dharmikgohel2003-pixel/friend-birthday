import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [now, setNow] = useState(new Date());
  const audioRef = useRef(null);
  const navigate = useNavigate();

  // update time every second
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  // 🎂 Birthday: 29 January, 12:00 AM
  const birthdayMidnight = new Date(
    new Date().getFullYear(),
    0, // January
    30,
    0, 0, 0
  );

  const isBirthdayTime = now >= birthdayMidnight;

  // 🎵 play song at birthday time
  useEffect(() => {
    if (isBirthdayTime && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [isBirthdayTime]);

  // ⏳ Countdown calculation
  const diff = birthdayMidnight - now;
  const hours = Math.max(Math.floor(diff / (1000 * 60 * 60)), 0);
  const minutes = Math.max(Math.floor((diff / (1000 * 60)) % 60), 0);
  const seconds = Math.max(Math.floor((diff / 1000) % 60), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 flex items-center justify-center p-4">
      <div className="bg-white/70 backdrop-blur-lg max-w-xl w-full rounded-3xl shadow-xl p-8 text-center">

        {/* BEFORE BIRTHDAY → CLOCK UI */}
        {!isBirthdayTime ? (
          <>
            <p className="text-sm text-gray-600 mb-2">
              ⏰ {now.toLocaleTimeString()}
            </p>

            <h1 className="text-3xl font-bold text-purple-600 mb-6">
              Countdown to Something Special ✨
            </h1>

            <div className="flex justify-center gap-4">
              <TimeBox label="Hours" value={hours} />
              <TimeBox label="Minutes" value={minutes} />
              <TimeBox label="Seconds" value={seconds} />
            </div>

            <p className="mt-6 text-gray-700">
              Just a little more time… 💖
            </p>
          </>
        ) : (
          <>
            {/* 🎉 AFTER BIRTHDAY */}
            <h1 className="text-4xl font-bold text-purple-600 animate-bounce">
              Happy Birthday 🎉
            </h1>

            <h2 className="text-xl mt-2 text-gray-700">
              Chavani 💖
            </h2>

            <div className="w-20 h-1 bg-pink-400 mx-auto my-6 rounded-full"></div>

            <p className="text-gray-700 text-lg leading-relaxed">
              💖✨ Dear Chavani, mujhe birthday wishes ka sahi tareeka nahi aata,
              lekin mujhe yaad hai hamare poore din… shayad time zyada nahi hua,
              par kuch kahaniyaan bahut khaas hoti hain 💖✨
            </p>

            {/* 🔘 Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => navigate("/rain")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-400 to-rose-500 text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                🌧️ Rain
              </button>

              <button
                onClick={() => navigate("/bick")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                🏍️ Bick
              </button>
            </div>

            <p className="mt-8 text-sm text-gray-600">
              Made with ❤️ by your best friend
            </p>

            {/* 🎵 Song
            <audio ref={audioRef} loop>
                <source src="/birthday-song.mp3" type="audio/mpeg" />
            </audio> */}
          </>
        )}
      </div>
    </div>
  );
}

/* ⏱️ Small clock box component */
function TimeBox({ label, value }) {
  return (
    <div className="bg-white rounded-xl shadow-md px-5 py-4 w-24">
      <p className="text-2xl font-bold text-pink-500">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}
