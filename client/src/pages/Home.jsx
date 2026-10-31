import { useState } from "react";
import {
  Search,
  Bell,
  ChevronRight,
  ArrowUpRight,
  Flame,
  Clock3,
  BookOpen,
  Trophy,
  Target,
  Code2,
  Brain,
  Database,
  Layers,
  Play,
  CheckCircle2,
  Zap,
  CalendarDays,
  MoreHorizontal,
  Sparkles,
  Users,
  Compass,
  Home as HomeIcon,
  Route,
  Menu,
  X,
//   Plus,
//   Star,
} from "lucide-react";

const courses = [
  {
    title: "Java Programming",
    category: "PROGRAMMING",
    instructor: "Core Java Fundamentals",
    progress: 72,
    lessons: "18 / 25 lessons",
    icon: Code2,
    color: "bg-[#C5FF54]",
    iconColor: "text-[#101216]",
  },
  {
    title: "Data Structures & Algorithms",
    category: "COMPUTER SCIENCE",
    instructor: "DSA Masterclass",
    progress: 45,
    lessons: "12 / 27 lessons",
    icon: Brain,
    color: "bg-[#B8A5FF]",
    iconColor: "text-[#101216]",
  },
  {
    title: "Database Management",
    category: "DATABASE",
    instructor: "SQL & MongoDB",
    progress: 28,
    lessons: "7 / 24 lessons",
    icon: Database,
    color: "bg-[#79CFFF]",
    iconColor: "text-[#101216]",
  },
];

const learningPaths = [
  {
    title: "Full Stack Development",
    description: "Frontend, backend and deployment",
    duration: "6 months",
    lessons: "48 modules",
    icon: Layers,
    color: "text-[#C5FF54]",
    bg: "bg-[#C5FF54]/10",
  },
  {
    title: "Data Science",
    description: "Python, ML and data analytics",
    duration: "5 months",
    lessons: "36 modules",
    icon: Database,
    color: "text-[#79CFFF]",
    bg: "bg-[#79CFFF]/10",
  },
  {
    title: "AI & Machine Learning",
    description: "Build intelligent applications",
    duration: "7 months",
    lessons: "52 modules",
    icon: Brain,
    color: "text-[#B8A5FF]",
    bg: "bg-[#B8A5FF]/10",
  },
];

const challenges = [
  {
    title: "Solve a DSA problem",
    description: "Practice your problem-solving skills",
    icon: Code2,
    time: "20 min",
    points: "+50 XP",
  },
  {
    title: "Daily Aptitude Quiz",
    description: "Test your logical reasoning",
    icon: Brain,
    time: "15 min",
    points: "+30 XP",
  },
  {
    title: "Revise Java Concepts",
    description: "Strengthen your fundamentals",
    icon: BookOpen,
    time: "25 min",
    points: "+40 XP",
  },
];

const navItems = [
  { name: "Home", icon: HomeIcon },
  { name: "Explore", icon: Compass },
  { name: "Roadmaps", icon: Route },
  { name: "Practice", icon: Target },
  { name: "Community", icon: Users },
];

export default function Home() {
  const [activeNav, setActiveNav] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All courses");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesTab =
      activeTab === "All courses" ||
      (activeTab === "In progress" && course.progress < 100);

    return matchesSearch && matchesTab;
  });

  return (
    <div className="min-h-screen bg-[#101216] text-white">

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#101216]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between px-5 md:px-10">

          <a href="#" className="flex items-center gap-3">
            <img
              src="/learnloop-logo.png"
              alt="LearnLoop"
              className="h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveNav(item.name)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm transition ${
                  activeNav === item.name
                    ? "bg-[#C5FF54]/10 text-[#C5FF54]"
                    : "text-[#9DA3AD] hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon size={16} />
                {item.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="relative rounded-xl border border-white/10 p-2.5 text-[#9DA3AD] hover:bg-white/5">
              <Bell size={19} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#C5FF54]" />
            </button>

            <button className="hidden items-center gap-2 rounded-xl border border-white/10 p-1.5 pr-3 sm:flex">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C5FF54] text-sm font-bold text-[#101216]">
                A
              </div>
              <span className="text-sm">My Profile</span>
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-xl border border-white/10 p-2 lg:hidden"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#171A1F] p-4 lg:hidden">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveNav(item.name);
                  setMobileOpen(false);
                }}
                className="flex w-full items-center gap-3 rounded-xl p-3 text-left text-[#9DA3AD] hover:bg-white/5"
              >
                <item.icon size={18} />
                {item.name}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="mx-auto max-w-[1500px] space-y-10 px-5 py-8 md:px-10 md:py-10">

        {/* WELCOME */}

        <section className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm text-[#9DA3AD]">
              Saturday, October 31, 2026
            </p>
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Welcome back, <span className="text-[#C5FF54]">Learner!</span>
            </h1>
            <p className="mt-2 text-sm text-[#9DA3AD]">
              Every small step takes you closer to your dream career.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-[#C5FF54]/20 bg-[#C5FF54]/[0.06] px-4 py-3">
            <Flame className="text-[#C5FF54]" size={20} />
            <div>
              <p className="text-sm font-semibold">7 Day Streak</p>
              <p className="text-xs text-[#9DA3AD]">
                Keep the momentum going!
              </p>
            </div>
          </div>
        </section>

        {/* HERO */}

        <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#1C2026]">
          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-[#C5FF54]/10 blur-[100px]" />
          <div className="absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-[#C5FF54]/[0.06] blur-[100px]" />

          <div className="relative grid items-center gap-8 p-7 md:p-12 lg:grid-cols-[1.3fr_0.7fr]">

            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C5FF54]/20 bg-[#C5FF54]/10 px-3 py-2 text-xs font-medium text-[#C5FF54]">
                <Sparkles size={14} />
                YOUR LEARNING JOURNEY STARTS HERE
              </div>

              <h2 className="text-4xl font-bold leading-[1.15] tracking-tight md:text-6xl">
                Learn today.
                <br />
                <span className="text-[#C5FF54]">Lead tomorrow.</span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#A4AAB4] md:text-base">
                One platform. Endless possibilities. Master new skills,
                practice what matters, and build the future you deserve.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveNav("Explore")}
                  className="flex items-center gap-2 rounded-xl bg-[#C5FF54] px-6 py-3.5 text-sm font-bold text-[#101216] transition hover:bg-[#d4ff80] hover:shadow-[0_0_30px_rgba(197,255,84,0.2)]"
                >
                  Explore Courses
                  <ArrowUpRight size={17} />
                </button>

                <button
                  onClick={() => setActiveNav("Roadmaps")}
                  className="flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  View Roadmaps
                  <ChevronRight size={17} />
                </button>
              </div>

              <div className="mt-9 flex flex-wrap gap-6 text-xs text-[#9DA3AD]">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#C5FF54]" />
                  Structured learning
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#C5FF54]" />
                  Practical projects
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#C5FF54]" />
                  Career focused
                </span>
              </div>
            </div>

            {/* HERO VISUAL */}

            <div className="relative mx-auto flex w-full max-w-sm items-center justify-center py-5">
              <div className="absolute h-64 w-64 rounded-full border border-[#C5FF54]/10" />
              <div className="absolute h-48 w-48 rounded-full border border-[#C5FF54]/20" />

              <div className="relative flex h-52 w-52 items-center justify-center rounded-[40px] border border-[#C5FF54]/20 bg-gradient-to-br from-[#C5FF54]/20 via-[#20252C] to-[#101216] shadow-[0_0_80px_rgba(197,255,84,0.08)] md:h-64 md:w-64">
                <svg
                  viewBox="0 0 200 140"
                  className="w-4/5"
                  fill="none"
                >
                  <path
                    d="M20 70 C45 20 65 20 100 70 C135 120 155 120 180 70 C155 20 135 20 100 70 C65 120 45 120 20 70Z"
                    stroke="#C5FF54"
                    strokeWidth="13"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="absolute bottom-5 rounded-full border border-[#C5FF54]/20 bg-[#101216] px-4 py-2 text-xs font-semibold text-[#C5FF54]">
                  Keep Growing ✦
                </div>
              </div>

              <div className="absolute -left-1 top-5 rounded-xl border border-white/10 bg-[#252A31] p-3 shadow-xl">
                <Trophy size={21} className="text-[#C5FF54]" />
              </div>

              <div className="absolute -right-2 bottom-8 rounded-xl border border-white/10 bg-[#252A31] p-3 shadow-xl">
                <Zap size={21} className="text-[#C5FF54]" />
              </div>
            </div>
          </div>
        </section>

        {/* STATISTICS */}

        <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            {
              title: "Courses Enrolled",
              value: "08",
              change: "4 active courses",
              icon: BookOpen,
            },
            {
              title: "Learning Hours",
              value: "42.5",
              change: "This month",
              icon: Clock3,
            },
            {
              title: "Completed Lessons",
              value: "126",
              change: "Great progress!",
              icon: CheckCircle2,
            },
            {
              title: "Total XP Earned",
              value: "2,450",
              change: "Level 08 learner",
              icon: Trophy,
            },
          ].map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-white/[0.07] bg-[#1A1D22] p-5 transition hover:border-[#C5FF54]/30"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs text-[#9DA3AD]">{stat.title}</span>
                <stat.icon size={19} className="text-[#C5FF54]" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                {stat.value}
              </h3>
              <p className="mt-2 text-xs text-[#9DA3AD]">{stat.change}</p>
            </div>
          ))}
        </section>

        {/* COURSES */}

        <section>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold md:text-2xl">
                Continue Learning
              </h2>
              <p className="mt-2 text-sm text-[#9DA3AD]">
                Pick up right where you left off.
              </p>
            </div>

            <button
              onClick={() => setActiveNav("Explore")}
              className="flex items-center gap-2 text-sm font-semibold text-[#C5FF54] hover:underline"
            >
              View all courses <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              {["All courses", "In progress"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-lg px-4 py-2 text-xs font-medium transition ${
                    activeTab === tab
                      ? "bg-[#C5FF54] text-[#101216]"
                      : "border border-white/10 text-[#9DA3AD] hover:bg-white/5"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex w-full items-center gap-2 rounded-xl border border-white/10 bg-[#1A1D22] px-3 py-2.5 sm:w-64">
              <Search size={16} className="text-[#9DA3AD]" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search your courses..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-[#707783]"
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredCourses.map((course) => (
              <div
                key={course.title}
                className="group rounded-2xl border border-white/[0.07] bg-[#1A1D22] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C5FF54]/30 hover:shadow-xl"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className={`rounded-xl p-3 ${course.color}`}>
                    <course.icon size={23} className={course.iconColor} />
                  </div>
                  <button className="rounded-lg p-2 text-[#9DA3AD] hover:bg-white/5">
                    <MoreHorizontal size={20} />
                  </button>
                </div>

                <p className="mb-2 text-[10px] font-semibold tracking-[1.5px] text-[#9DA3AD]">
                  {course.category}
                </p>

                <h3 className="text-lg font-bold">{course.title}</h3>
                <p className="mt-2 text-xs text-[#9DA3AD]">
                  {course.instructor}
                </p>

                <div className="mb-3 mt-7 flex items-center justify-between">
                  <span className="text-xs text-[#9DA3AD]">Your progress</span>
                  <span className="text-sm font-bold text-[#C5FF54]">
                    {course.progress}%
                  </span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-[#30343A]">
                  <div
                    className="h-full rounded-full bg-[#C5FF54] transition-all"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-[#9DA3AD]">
                    {course.lessons}
                  </span>
                  <button className="flex items-center gap-2 text-xs font-semibold text-[#C5FF54] transition group-hover:gap-3">
                    Resume <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            ))}

            {filteredCourses.length === 0 && (
              <div className="col-span-full rounded-2xl border border-white/10 p-8 text-center text-sm text-[#9DA3AD]">
                No matching courses found.
              </div>
            )}
          </div>
        </section>

        {/* LEARNING PATHS */}

        <section>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold md:text-2xl">
                Explore Learning Paths
              </h2>
              <p className="mt-2 text-sm text-[#9DA3AD]">
                Follow structured roadmaps to master in-demand skills.
              </p>
            </div>
            <button
              onClick={() => setActiveNav("Roadmaps")}
              className="hidden items-center gap-2 text-sm font-semibold text-[#C5FF54] sm:flex"
            >
              All paths <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {learningPaths.map((path, index) => (
              <div
                key={path.title}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#1A1D22] p-6 transition hover:border-[#C5FF54]/30"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/[0.02] transition group-hover:bg-[#C5FF54]/[0.04]" />

                <div className={`mb-6 inline-flex rounded-xl p-3 ${path.bg}`}>
                  <path.icon size={25} className={path.color} />
                </div>

                <p className="mb-2 text-[10px] font-semibold tracking-widest text-[#9DA3AD]">
                  CAREER PATH 0{index + 1}
                </p>

                <h3 className="text-lg font-bold">{path.title}</h3>
                <p className="mt-2 text-sm text-[#9DA3AD]">
                  {path.description}
                </p>

                <div className="mt-6 flex items-center gap-5 border-t border-white/[0.07] pt-5 text-xs text-[#9DA3AD]">
                  <span className="flex items-center gap-2">
                    <Clock3 size={14} /> {path.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <BookOpen size={14} /> {path.lessons}
                  </span>
                </div>

                <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#C5FF54]">
                  Explore roadmap
                  <ArrowUpRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CHALLENGES AND ACTIVITY */}

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

          {/* DAILY CHALLENGES */}

          <div className="rounded-2xl border border-white/[0.07] bg-[#1A1D22] p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Daily Challenges</h2>
                <p className="mt-2 text-sm text-[#9DA3AD]">
                  Small wins create big results.
                </p>
              </div>
              <div className="rounded-xl bg-[#C5FF54]/10 p-3">
                <Target className="text-[#C5FF54]" size={22} />
              </div>
            </div>

            <div className="space-y-3">
              {challenges.map((challenge, index) => (
                <div
                  key={challenge.title}
                  className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-[#20242A] p-4 transition hover:border-[#C5FF54]/20"
                >
                  <div className="rounded-lg bg-[#C5FF54]/10 p-3">
                    <challenge.icon size={20} className="text-[#C5FF54]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold">
                      {challenge.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#9DA3AD]">
                      {challenge.description}
                    </p>
                    <div className="mt-2 flex gap-3 text-[10px] text-[#9DA3AD]">
                      <span>{challenge.time}</span>
                      <span className="text-[#C5FF54]">
                        {challenge.points}
                      </span>
                    </div>
                  </div>

                  <button
                    aria-label={`Start ${challenge.title}`}
                    className="rounded-full border border-white/10 p-2.5 text-[#C5FF54] transition hover:bg-[#C5FF54] hover:text-[#101216]"
                  >
                    <Play size={15} />
                  </button>
                </div>
              ))}
            </div>

            <button className="mt-5 w-full rounded-xl border border-[#C5FF54]/20 py-3 text-sm font-semibold text-[#C5FF54] transition hover:bg-[#C5FF54]/10">
              View all challenges
              <ChevronRight className="ml-1 inline" size={16} />
            </button>
          </div>

          {/* LEARNING SUMMARY */}

          <div className="rounded-2xl border border-white/[0.07] bg-[#1A1D22] p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Weekly Activity</h2>
                <p className="mt-2 text-sm text-[#9DA3AD]">
                  Your learning consistency.
                </p>
              </div>
              <CalendarDays size={20} className="text-[#C5FF54]" />
            </div>

            <div className="mb-8 flex items-end justify-between gap-2">
              {[
                { day: "M", value: 45 },
                { day: "T", value: 75 },
                { day: "W", value: 55 },
                { day: "T", value: 95 },
                { day: "F", value: 65 },
                { day: "S", value: 85 },
                { day: "S", value: 30 },
              ].map((day, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-3">
                  <div className="flex h-32 w-full items-end rounded-lg bg-[#252930] p-1">
                    <div
                      className={`w-full rounded-md transition-all ${
                        i === 6
                          ? "bg-[#C5FF54]"
                          : "bg-[#C5FF54]/40 hover:bg-[#C5FF54]/70"
                      }`}
                      style={{ height: `${day.value}%` }}
                    />
                  </div>
                  <span className="text-xs text-[#9DA3AD]">{day.day}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-[#C5FF54]/15 bg-[#C5FF54]/[0.06] p-4">
              <div className="flex items-center gap-2">
                <Flame size={19} className="text-[#C5FF54]" />
                <span className="text-sm font-semibold">You're on fire!</span>
              </div>
              <p className="mt-2 text-xs leading-6 text-[#9DA3AD]">
                You've been consistently learning this week. Keep showing up
                and make every day count.
              </p>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}

        <section className="relative overflow-hidden rounded-2xl border border-[#C5FF54]/20 bg-gradient-to-r from-[#202A19] via-[#1B211C] to-[#1A1D22] p-7 md:p-10">
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-[#C5FF54]/10 blur-[80px]" />

          <div className="relative flex flex-wrap items-center justify-between gap-6">
            <div>
              <div className="mb-3 flex items-center gap-2 text-[#C5FF54]">
                <Sparkles size={17} />
                <span className="text-xs font-semibold tracking-widest">
                  YOUR NEXT CHAPTER
                </span>
              </div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Ready to level up your skills?
              </h2>
              <p className="mt-3 text-sm text-[#9DA3AD]">
                Discover new opportunities and build something extraordinary.
              </p>
            </div>

            <button
              onClick={() => setActiveNav("Explore")}
              className="flex items-center gap-2 rounded-xl bg-[#C5FF54] px-6 py-3.5 text-sm font-bold text-[#101216] transition hover:scale-105"
            >
              Start Exploring <ArrowUpRight size={17} />
            </button>
          </div>
        </section>

        {/* FOOTER */}

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] py-7 text-xs text-[#707783]">
          <p>© 2026 LearnLoop. Learn. Practice. Grow. Get Hired.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#C5FF54]">About</a>
            <a href="#" className="hover:text-[#C5FF54]">Help Center</a>
            <a href="#" className="hover:text-[#C5FF54]">Privacy</a>
          </div>
        </footer>

      </main>
    </div>
  );
}
