import { useNavigate } from "react-router-dom";

export default function BickStory() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-xl text-center">

        <h1 className="text-3xl font-bold text-purple-600 mb-4">
          🏍️ Bick Story
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          Bicke 🏍️ opas..! Pahele hi sorry bol deta hu 😅 ish bar tu mera wait kar rahi he or me soo Raha tha . 😴 Lekin usha din me bahut thak gya tha yrr🥺. Achha huaa tu fir man gyi or ham gye bick pe betha ke ghum ne 🥰. Tu ahemdabad me itane time se he or tuje ek jaga nahi pata jaha ham jaa sake kyo achhi jaga dekha ne me adha time west ho gya. 😮‍💨 Fr ham gyi grand me, or ham bethe, OMG 🫣 tumere itane pass thi ki me thik se shashe bhi nay le paa raha ek to kya bat karu pata hi nahi chal raha tha, wese me call pe or vc pe bahut bol leta hu lekin tuje dekh te hi kya hota he pata nay 😅. Fir ham gye pani puri khane usa me itana maja nay aaya fir tuje tere Ghar ke pass chhod k me chala gya. Ye jo experience tha mere liae sab se achha tha 🥰. Wese me ne 2 ya 3 ladkiyo ko bick pe bitha he lekin jab tuj lekin me ghum raha tha to.....💜
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 px-5 py-2 bg-purple-500 text-white rounded-lg"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
}
