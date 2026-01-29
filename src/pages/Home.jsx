import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [now, setNow] = useState(new Date());
  const [showVideo, setShowVideo] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);

  // ⏰ Live clock
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 🎂 Birthday date (CHANGE IF NEEDED)
  const birthdayTime = new Date(
    new Date().getFullYear(),
    0, // January = 0
    30,
    0, 0, 0
  );

  const isBirthdayTime = now >= birthdayTime;

  // 🎬 Start video only once when time completes
  useEffect(() => {
    if (isBirthdayTime && !videoFinished) {
      setShowVideo(true);
    }
  }, [isBirthdayTime, videoFinished]);

  // ⏳ Countdown calculation
  const diff = birthdayTime - now;
  const hours = Math.max(Math.floor(diff / (1000 * 60 * 60)), 0);
  const minutes = Math.max(Math.floor((diff / (1000 * 60)) % 60), 0);
  const seconds = Math.max(Math.floor((diff / 1000) % 60), 0);

  return (
    <>
      {/* 🎬 FULL SCREEN VIDEO */}
      {showVideo && (
        <div className="fixed inset-0 z-[9999] bg-black">
          <video
            src="/birthday-intro.mp4"
            autoPlay
            muted
            playsInline
            onEnded={() => {
              setShowVideo(false);
              setVideoFinished(true);
            }}
            className="w-screen h-screen object-cover"
          />
        </div>
      )}

      {/* 🌸 MAIN CONTENT */}
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 flex items-center justify-center p-4">
        <div className="bg-white/70 backdrop-blur-lg max-w-xl w-full rounded-3xl shadow-xl p-8 text-center">

          {/* ⏳ STEP 1: COUNTDOWN */}
          {!isBirthdayTime && (
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
          )}

          {/* 🎉 STEP 4: HAPPY BIRTHDAY PAGE */}
          {isBirthdayTime && videoFinished && (
            <>
              <h1 className="text-4xl font-bold text-purple-600">
                Happy Birthday 🎉
              </h1>

              <h2 className="text-xl mt-2 text-gray-700">
                Chavani💖
              </h2>

              <div className="w-20 h-1 bg-pink-400 mx-auto my-6 rounded-full"></div>

              <p className="text-gray-700 text-lg leading-relaxed">
                Dear Chavani, birthday wishes kese kiya jata he muje nay aata, lekin muje abhi bhi yad he hamare pura ne din, i know bahut jayada time nay huaa he lekin kuchha story he . ✨
              </p>

              {/* 🔘 NEVER FORGET BUTTONS */}
              <div className="mt-8 flex justify-center gap-4">
                <button
                  onClick={() => navigate("/rain")}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 transition"
                >
                  🌧️ Rain
                </button>

                <button
                  onClick={() => navigate("/bick")}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-500 text-white font-semibold shadow-md hover:bg-pink-600 transition"
                >
                  🏍️ Bick
                </button>
              </div>

              <p className="mt-8 text-sm text-gray-600">
                Made with ❤️ by your best friend
              </p>
            </>
          )}

        </div>
      </div>
    </>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="bg-white rounded-xl shadow-md px-5 py-4 w-24">
      <p className="text-2xl font-bold text-pink-500">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}
