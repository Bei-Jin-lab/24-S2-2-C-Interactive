"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Menu, Bell, Settings, HelpCircle, User, Send, Book, GraduationCap, FileText, Calendar, X } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Image from "next/image"
import { useSpring, animated } from "react-spring"
import { motion, useScroll, useTransform } from "framer-motion"

export default function CBEIntegratedPortal() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [searchQuery, setSearchQuery] = useState("")
  const [chatMessage, setChatMessage] = useState("")
  const [chatHistory, setChatHistory] = useState<{message: string, isAI: boolean}[]>([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [notifications, setNotifications] = useState([
    "New course materials available",
    "Upcoming deadline for assignment submission",
    "Faculty meeting scheduled for next week"
  ])

  const mainRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      clearInterval(timer)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Searching for: ${searchQuery}`)
    setSearchQuery("")
  }

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (chatMessage.trim()) {
      setChatHistory([...chatHistory, { message: chatMessage, isAI: false }])
      // Simulated AI response
      setTimeout(() => {
        const aiResponses = [
          "That's an interesting question. Based on the information available, I would suggest...",
          "Great inquiry! Here's what I can tell you about that topic...",
          "I understand your question. Let me provide some insights on this matter...",
          "Thank you for asking. From my knowledge base, I can share the following information...",
          "Excellent question! Here's a detailed explanation that might help..."
        ]
        const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]
        setChatHistory(prev => [...prev, { message: randomResponse, isAI: true }])
      }, 1000)
      setChatMessage("")
    }
  }

  const anuLogoUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240921142457-wpDuRjQydofuZj0DnY7hGHXeh4O1HY.jpg"

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  })

  const slideIn = useSpring({
    from: { transform: 'translateY(50px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    config: { tension: 280, friction: 60 }
  })

  const menuAnimation = useSpring({
    transform: isMenuOpen ? 'translateX(0%)' : 'translateX(-100%)',
    opacity: isMenuOpen ? 1 : 0,
  })

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(45deg, #003366, #004080)",
          y: backgroundY
        }}
      />
      <header className="relative z-10 bg-[#003366] text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
          <Image 
            src={anuLogoUrl}
            alt="Australian National University Logo" 
            width={200} 
            height={50} 
            className="h-10 w-auto"
          />
          <h1 className="text-2xl font-bold">CBE Integrated Portal</h1>
        </div>
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="flex">
            <Input
              className="bg-white text-black w-64 mr-2"
              placeholder="Search resources..."
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" variant="secondary">
              <Search className="h-4 w-4" />
            </Button>
          </form>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="relative">
                <Bell className="h-6 w-6" />
                {notifications.length > 0 && (
                  <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full" />
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <h4 className="font-medium leading-none">Notifications</h4>
                {notifications.map((notification, index) => (
                  <div key={index} className="text-sm">
                    {notification}
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost">
                <Settings className="h-6 w-6" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <h4 className="font-medium leading-none">Settings</h4>
                <Button variant="outline">Account Settings</Button>
                <Button variant="outline">Notification Preferences</Button>
                <Button variant="outline">Privacy Settings</Button>
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost">
                <HelpCircle className="h-6 w-6" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <h4 className="font-medium leading-none">Help Center</h4>
                <Button variant="outline">FAQs</Button>
                <Button variant="outline">Contact Support</Button>
                <Button variant="outline">User Guide</Button>
              </div>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost">
                <User className="h-6 w-6" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <h4 className="font-medium leading-none">User Menu</h4>
                <Button variant="outline">Profile</Button>
                <Button variant="outline">My Courses</Button>
                <Button variant="outline">Log Out</Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </header>
      <animated.div ref={menuRef} style={menuAnimation} className="fixed top-0 left-0 h-full w-64 bg-[#004080] text-white p-4 z-20">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Menu</h2>
          <Button variant="ghost" onClick={() => setIsMenuOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav>
          <ul className="space-y-2">
            <li><Button variant="ghost" className="w-full justify-start text-white hover:text-blue-200">Home</Button></li>
            <li><Button variant="ghost" className="w-full justify-start text-white hover:text-blue-200">Courses</Button></li>
            <li><Button variant="ghost" className="w-full justify-start text-white hover:text-blue-200">Resources</Button></li>
            <li><Button variant="ghost" className="w-full justify-start text-white hover:text-blue-200">Community</Button></li>
            <li><Button variant="ghost" className="w-full justify-start text-white hover:text-blue-200">Staff Portal</Button></li>
          </ul>
        </nav>
      </animated.div>
      <main ref={mainRef} className="relative z-10 flex-grow p-6 bg-white bg-opacity-90">
        <animated.div style={fadeIn}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-[#003366]">Welcome to CBE Integrated Portal</h2>
              <Tabs defaultValue="staff" className="mb-6">
                <TabsList>
                  <TabsTrigger value="staff">For Staff</TabsTrigger>
                  <TabsTrigger value="students">For Students</TabsTrigger>
                </TabsList>
                <TabsContent value="staff">
                  <animated.div style={slideIn}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {["Wattle Guide", "Staff Rules", "Academic Articles", "Teaching Resources"].map((item, index) => (
                        <motion.div
                          key={item}
                          className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Image src={anuLogoUrl} alt={item} width={400} height={200} className="w-full h-40 object-cover" />
                          <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2">ANU {item}</h3>
                            <p className="text-sm text-gray-600">Access important information and resources for {item.toLowerCase()}.</p>
                            <Button className="mt-2" variant="outline">View Details</Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </animated.div>
                </TabsContent>
                <TabsContent value="students">
                  <animated.div style={slideIn}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {["Course Catalog", "Student Resources", "Academic Calendar", "Student Life"].map((item, index) => (
                        <motion.div
                          key={item}
                          className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Image src={anuLogoUrl} alt={item} width={400} height={200} className="w-full h-40 object-cover" />
                          <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2">{item}</h3>
                            <p className="text-sm text-gray-600">Explore {item.toLowerCase()} and related information.</p>
                            <Button className="mt-2" variant="outline">Learn More</Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </animated.div>
                </TabsContent>
              </Tabs>
              <div className="mt-12 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold mb-6 text-[#003366]">Latest News and Announcements</h3>
                <div className="space-y-6">
                  {[1, 2, 3].map((item) => (
                    <motion.div
                      key={item}
                      className="flex items-start space-x-4 pb-6 border-b last:border-b-0"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: item * 0.2 }}
                    >
                      <Image src={anuLogoUrl} alt={`News ${item}`} width={80} height={80} className="rounded-lg object-cover" />
                      <div>
                        <h4 className="font-semibold text-lg mb-2">Important Announcement {item}</h4>
                        <p className="text-sm text-gray-600 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Button variant="link" className="p-0 h-auto font-semibold text-[#003366] hover:text-[#004080]">
                          Read More
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <motion.div
                className="border rounded-lg shadow-md p-4 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-4 text-[#003366]">Quick Links</h3>
                <ul className="space-y-2">
                  {[
                    { icon: Book, text: "Library Resources" },
                    { icon: GraduationCap, text: "Graduation Information" },
                    { icon: FileText, text: "Academic Policies" },
                    { icon: Calendar, text: "Event Calendar" }
                  ].map((item, index) => (
                    <motion.li
                      key={item.text}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <Button variant="link" className="text-[#003366]">
                        <item.icon className="w-4 h-4 mr-2" /> {item.text}
                      </Button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="border rounded-lg shadow-md p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <h3 className="text-xl font-bold mb-4 text-[#003366]">AI Assistant</h3>
                <div className="h-64 overflow-y-auto mb-4 space-y-2">
                  {chatHistory.map((chat, index) => (
                    <motion.div
                      key={index}
                      className={`p-2 rounded-lg ${chat.isAI ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {chat.message}
                    </motion.div>
                  ))}
                </div>
                <form onSubmit={handleChatSubmit} className="flex flex-col space-y-2">
                  <Textarea
                    placeholder="Ask a question..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                  <Button type="submit" className="w-full">
                    Send <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </animated.div>
      </main>
      <footer className="relative z-10 bg-[#003366] text-white p-4 text-center">
        <p>&copy; 2023 Australian National University - College of Business and Economics. All rights reserved.</p>
      </footer>
    </div>
  )
}