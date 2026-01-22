import { useState } from "react"
import { motion } from "framer-motion"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";



import homeImg from "../assets/Home.png"
import profileImg from "../assets/Profile.png"
import discoverImg from "../assets/Discover.png"
import campaignImg from "../assets/Campaign.png"
import logo from "../assets/logo.png"

export default function ComingSoon() {


    const [showFAQ, setShowFAQ] = useState(false)
    const [showPolicy, setShowPolicy] = useState(false)
    const [showAbout, setShowAbout] = useState(false)

    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
    if (!email) {
        setStatus("Please enter your email.");
        return;
    }

    setLoading(true);
    setStatus("");

    try {
        await addDoc(collection(db, "subscribers"), {
        email,
        timestamp: serverTimestamp(),
        });
        setStatus("🎉 Success! You’ll be notified.");
        setEmail("");
    } catch (error) {
        console.error("Firebase Error:", error);
        setStatus("❌ Something went wrong. Try again.");
    } finally {
        setLoading(false);
    }
    };


  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#F8F5F0] via-[#E6EEF8] to-[#F3E8C8]">
      <div className="relative w-full max-w-[1200px] min-h-[75vh]
bg-gradient-to-br from-white/80 via-blue-50/60 to-yellow-50/60
backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl 
p-6 sm:p-8 md:p-10
flex flex-col lg:flex-row gap-8 md:gap-10 overflow-hidden">




        {/* LEFT CONTENT */}
        <motion.div
        className="flex-1 flex flex-col justify-center gap-6 text-center lg:text-left"

          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

        {/* Logo + About */}
        <div className="flex items-center justify-between w-full">
        <motion.img
            src={logo}
            alt="Logo"
            className="h-20 w-auto object-contain cursor-pointer"
            initial={{  scale: 1.5 }}
            animate={{  scale: [1.5, 2, 1.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{
            filter: "drop-shadow(0 6px 16px rgba(37,99,235,0.35))"
            }}
        />

        <motion.button
          onClick={() => setShowAbout(true)}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="
            relative px-4 sm:px-6 py-2 sm:py-2.5 
            text-base sm:text-lg lg:text-xl 
            font-semibold tracking-tight 
            text-slate-600 hover:text-blue-600 
            transition-all duration-300 group bg-transparent
            focus:outline-none
          "
        >
          <span className="relative z-10">About</span>

          {/* Underline */}
          <span className="absolute left-0 bottom-0 h-[2px] sm:h-[3px] w-0 
            bg-gradient-to-r from-blue-400 to-sky-300 
            transition-all duration-300 ease-out group-hover:w-full">
          </span>

          {/* Soft glow */}
          <span className="absolute inset-0 rounded-xl 
            bg-blue-400/10 blur-md opacity-0 
            group-hover:opacity-100 transition -z-10">
          </span>
        </motion.button>



        </div>


        <motion.span
        className="tracking-widest text-blue-600 font-bold flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-blue-50 relative overflow-hidden"
        initial={{ opacity: 0, x: -10 }}
        animate={{
            opacity: 1,
            x: 0
        }}
        transition={{ duration: 0.6 }}
        >
        <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
            →
        </motion.span>
        COMING SOON

        {/* Glow sweep */}
        <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/40 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        />
        </motion.span>


          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Get Notified <br />
            <span className="bg-gradient-to-r from-blue-600 via-yellow-400 to-blue-600 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
              When We Launch
            </span>
          </h1>

          <p className="text-gray-600 text-lg max-w-xl">
            We're building something amazing. Be the first to know when we're live and get exclusive early access.
          </p>

          {/* Email Input */}
        <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
        <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-6 py-4 rounded-full w-full sm:w-96 outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500"
        />

        <motion.button
            onClick={handleSubmit}
            disabled={loading}
            whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(37,99,235,0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold shadow-lg transition disabled:opacity-60 whitespace-nowrap"
        >
            {loading ? "Saving..." : "Notify Me"}
        </motion.button>
        </div>


          {status && (
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-blue-600 mt-2"
            >
                {status}
            </motion.p>
            )}


          {/* Store Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
            {[
              "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg",
              "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
            ].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                className="h-10 sm:h-12 md:h-14 cursor-pointer"
                whileHover={{
                  scale: 1.08,
                  filter: "drop-shadow(0 8px 18px rgba(0,0,0,0.25))"
                }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </div>


          {/* Social Icons */}
          <div className="flex gap-6 mt-6 text-gray-500">
            {[
              { Icon: FaFacebookF, color: "hover:text-blue-600", glow: "hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.6)]" },
              { Icon: FaTwitter, color: "hover:text-sky-500", glow: "hover:drop-shadow-[0_0_10px_rgba(14,165,233,0.6)]" },
              { Icon: FaInstagram, color: "hover:text-pink-500", glow: "hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]" },
              { Icon: FaYoutube, color: "hover:text-red-600", glow: "hover:drop-shadow-[0_0_10px_rgba(220,38,38,0.6)]" }
            ].map(({ Icon, color, glow }, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.25, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className={`transition ${color} ${glow} cursor-pointer`}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>
        </motion.div>
        

        {/* RIGHT VISUALS */}
        <motion.div
          className="flex-1 flex items-center justify-center relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative flex items-center justify-center">

            {/* Glow */}
            <div className="absolute w-72 h-72 bg-blue-400/20 blur-3xl rounded-full -z-10"></div>

            {/* Main Phone */}
            <motion.div
              className="w-[180px] h-[360px] sm:w-[220px] sm:h-[440px] md:w-[260px] md:h-[520px] rounded-[28px] sm:rounded-[32px] p-[3px] shadow-xl overflow-hidden animate-float"

              whileHover={{
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={homeImg}
                alt="Home"
                className="w-full h-full object-fit bg-white rounded-[28px]"
              />
            </motion.div>

            {/* Mini Card 1 */}
            <div className="absolute -top-4 sm:-top-10 -right-16 sm:-right-28 w-24 sm:w-40 h-16 sm:h-28bg-white rounded-xl shadow-lg overflow-hidden">

              <motion.img
                src={profileImg}
                className="w-full object-cover"
                style={{ height: "200%" }}
                animate={{ y: [0, "-50%", 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              />
            </div>

            {/* Mini Card 2 */}
            <div className="absolute bottom-10 sm:bottom-16 -left-20 sm:-left-28 w-28 sm:w-36 h-20 sm:h-24bg-white rounded-xl shadow-lg overflow-hidden">
              <motion.img
                src={discoverImg}
                className="w-full object-cover"
                style={{ height: "220%" }}
                animate={{ y: ["-40%", "0%", "-40%"] }}
                transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
              />
            </div>

            {/* Mini Card 3 */}
            <div className="absolute bottom-6 sm:bottom-10 -right-10 sm:-right-16 w-24 sm:w-32 h-16 sm:h-20bg-white rounded-xl shadow-lg overflow-hidden">

              <motion.img
                src={campaignImg}
                className="w-full object-cover"
                style={{ height: "210%" }}
                animate={{ y: [0, "-45%", 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              />
            </div>

          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 z-50">

        <motion.span
            onClick={() => setShowFAQ(true)}
            whileHover={{ scale: 1.05, color: "#2563eb" }}
            className="cursor-pointer relative group"
        >
            FAQ
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
        </motion.span>

        <motion.span
            onClick={() => setShowPolicy(true)}
            whileHover={{ scale: 1.05, color: "#2563eb" }}
            className="cursor-pointer relative group"
        >
            Privacy Policy
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
        </motion.span>

        <motion.a
        href="mailto:contact@ministryangel.org?subject=Contact%20from%20Landing%20Page"
        whileHover={{ scale: 1.05, color: "#2563eb" }}
        className="cursor-pointer relative group"
        >
        Email Us
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
        </motion.a>


        </div>

      </div>
        {/* ABOUT MODAL */}
        {showAbout && (
        <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.div
            className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-2xl relative"
            initial={{ scale: 0.85, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            >
            <button
                onClick={() => setShowAbout(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
            >
                ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">About Our App</h2>

            <div className="text-sm text-gray-600 space-y-3 max-h-[350px] overflow-y-auto pr-2">

                <p>
                <strong>Ministry Angel</strong> is a next-generation digital platform designed to help ministries,
                organizations, and communities manage outreach, campaigns, and engagement efficiently.
                </p>

                <p><strong>Core Features:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                <li>Campaign & Event Management</li>
                <li>User Profiles & Discover System</li>
                <li>Real-time Notifications</li>
                <li>Secure Authentication</li>
                <li>Analytics & Insights</li>
                </ul>

                <p>
                Our mission is to simplify digital ministry operations while keeping everything fast, beautiful,
                and user-friendly.
                </p>

                <p className="pt-2"><strong>Get it on Play Store:</strong></p>

                <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-5 py-2 rounded-full bg-green-600 text-white font-semibold shadow hover:scale-105 transition"
                >
                Open Play Store
                </a>

                <p className="pt-3 text-xs text-gray-500">
                For support or business inquiries: contact@ministryangel.org
                </p>
            </div>
            </motion.div>
        </motion.div>
        )}

        {/* Privacy Policy Modal */}
        {showPolicy && (
        <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.div
            className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl relative"
            initial={{ scale: 0.85, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            >
            <button
                onClick={() => setShowPolicy(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
            >
                ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <div className="text-sm text-gray-600 space-y-3 max-h-[300px] overflow-y-auto pr-2">
                <p>We respect your privacy and protect your personal information.</p>
                <p>We only collect your email for launch notifications.</p>
                <p>No spam. No data sharing.</p>
                <p>Your information is stored securely.</p>
                <p>Contact: chanduarasavalli95@gmail.com</p>
            </div>
            </motion.div>
        </motion.div>
        )}

        {/* FAQ Modal */}
        {showFAQ && (
        <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.div
            className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl relative"
            initial={{ scale: 0.85, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            >
            <button
                onClick={() => setShowFAQ(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
            >
                ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">FAQs</h2>
            <div className="text-sm text-gray-600 space-y-3">
                <p><strong>When will you launch?</strong><br/>Very soon! Stay tuned.</p>
                <p><strong>Is it free?</strong><br/>Yes for early users.</p>
                <p><strong>Will I get spam?</strong><br/>Never.</p>
                <p><strong>How do I contact?</strong><br/>Email us anytime.</p>
            </div>
            </motion.div>
        </motion.div>
        )}
    </div>
  )
}
