import { useEffect, useState } from "react";

export default function Home() {
  const [now, setNow] = useState(new Date());
  const [showVideo, setShowVideo] = useState(false);
  const [videoDone, setVideoDone] = useState(false);

  // ⏰ Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 🎂 Birthday date
  const birthdayMidnight = new Date(
    new Date().getFullYear(),
    0, // January
    30,
    0, 0, 0
  );

  const isBirthdayTime = now >= birthdayMidnight;

  // 🎬 Trigger video ONLY once
  useEffect(() => {
    if (isBirthdayTime && !videoDone) {
      setShowVideo(true);
    }
  }, [isBirthdayTime, videoDone]);

  // ⏳ Countdown calculation
  const diff = birthdayMidnight - now;
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
              setVideoDone(true);
            }}
            className="w-screen h-screen object-cover"
          />
        </div>
      )}

      {/* 🌸 MAIN PAGE */}
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 flex items-center justify-center p-4">
        <div className="bg-white/70 backdrop-blur-lg max-w-xl w-full rounded-3xl shadow-xl p-8 text-center">

          {/* ⏳ COUNTDOWN */}
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

          {/* 🎉 HAPPY BIRTHDAY */}
          {isBirthdayTime && videoDone && (
            <>
              <h1 className="text-4xl font-bold text-purple-600">
                Happy Birthday 🎉
              </h1>

              <h2 className="text-xl mt-2 text-gray-700">
                To Someone Truly Special 💖
              </h2>

              <div className="w-20 h-1 bg-pink-400 mx-auto my-6 rounded-full"></div>

              <p className="text-gray-700 text-lg leading-relaxed">
                May your day be filled with happiness,
                smiles, and beautiful moments ✨
              </p>

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
