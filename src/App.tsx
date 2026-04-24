import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Caregivers from './pages/Caregivers'
import CaregiverProfile from './pages/CaregiverProfile'
import PostJob from './pages/PostJob'
import Messages from './pages/Messages'
import Premium from './pages/Premium'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/caregivers" element={<Caregivers />} />
            <Route path="/caregivers/:id" element={<CaregiverProfile />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/how-it-works" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
