import { useNavigate } from "react-router-dom";

export default function RainStory() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-xl text-center">

        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          🌧️ Rain Story
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
         🌧️Barish ki to tu bat hi naa kar  😤 barish ki vajase kitana nukasham huaa he mera.😑lekin khushi bhi thi ke  me paheli bar tujase mila ne scooty pe aaraha hu or tabhi barish ho gyi. 😫 Fir me tera wait kar raha hu or tu jane kya kar rahi thi.🥺 Fir jese tese bus pakadi or paheli bar ham face to face mile.😍 Tera to pata nay lekin mere liae to 1 pal k liae duniya ruk gyi thi. 🫣 Fir thodi bate ki hamane or icecream 🍨 khay or tu tere rate or me mere raste.💙
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 px-5 py-2 bg-blue-500 text-white rounded-lg"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
}
