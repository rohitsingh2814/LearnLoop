import { useRef, useState } from "react";
import {
  ArrowLeft,
  Bell,
  BookOpen,
  Camera,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  Flame,
  Globe2,
  GraduationCap,
  Link2,
  Mail,
  MapPin,
  Pencil,
  Save,
  Settings,
  ShieldCheck,
  Trophy,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Courses completed", value: "12", icon: BookOpen },
  { label: "Learning hours", value: "148.5", icon: Clock3 },
  { label: "Current streak", value: "7 days", icon: Flame },
  { label: "Total XP", value: "2,450", icon: Trophy },
];

const skillOptions = ["Java", "JavaScript", "React", "SQL", "DSA", "Python", "MongoDB"];

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const avatarInputRef = useRef(null);
  const [form, setForm] = useState({
    name: "Alex Morgan",
    username: "alexmorgan",
    headline: "Aspiring full-stack developer",
    email: "alex.morgan@email.com",
    location: "Bengaluru, India",
    bio: "I’m building strong fundamentals in software development and learning one practical skill at a time.",
    goal: "Become a full-stack developer",
  });
  const [skills, setSkills] = useState(["Java", "React", "SQL", "DSA"]);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setSaved(false);
  };

  const toggleSkill = (skill) => {
    setSkills((current) =>
      current.includes(skill) ? current.filter((item) => item !== skill) : [...current, skill],
    );
    setSaved(false);
  };

  const saveProfile = () => {
    setEditing(false);
    setSaved(true);
  };

  const cancelEditing = () => {
    setEditing(false);
    setSaved(false);
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      event.target.value = "";
      return;
    }

    setAvatarUrl(URL.createObjectURL(file));
    event.target.value = "";
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <header className="sticky top-0 z-50 border-b border-white/[0.09] bg-[#080808]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1180px] items-center justify-between px-5 md:px-8">
          <Link to="/" className="flex items-center gap-3 text-sm text-[#9DA3AD] transition hover:text-white">
            <ArrowLeft size={18} />
            Back to dashboard
          </Link>
          <div className="flex items-center gap-3">
            <button className="relative rounded-xl border border-white/10 p-2.5 text-[#9DA3AD] hover:bg-white/5" aria-label="Notifications">
              <Bell size={19} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-white" />
            </button>
            <button className="rounded-xl border border-white/10 p-2.5 text-[#9DA3AD] hover:bg-white/5" aria-label="Settings">
              <Settings size={19} />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1180px] space-y-6 px-5 py-8 md:px-8 md:py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-[#A7A7A7]">Account</p>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">My profile</h1>
            <p className="mt-2 text-sm text-[#9DA3AD]">Tell the LearnLoop community what you’re working toward.</p>
          </div>
          <div className="flex items-center gap-3">
            {editing && (
              <button
                type="button"
                onClick={cancelEditing}
                className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-[#B8B8B8] transition hover:border-white/35 hover:text-white"
              >
                Cancel
              </button>
            )}
            <button
              type="button"
              onClick={editing ? saveProfile : () => setEditing(true)}
              className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#080808] transition hover:bg-[#D8D8D8]"
            >
              {editing ? <Save size={17} /> : <Pencil size={17} />}
              {editing ? "Save changes" : "Edit profile"}
            </button>
          </div>
        </div>

        {saved && (
          <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white">
            <Check size={17} /> Your profile has been updated.
          </div>
        )}

        <section className="overflow-hidden rounded-3xl border border-white/[0.1] bg-[#151515]">
          <div className="h-32 bg-gradient-to-r from-[#303030] via-[#171717] to-[#252525] md:h-40" />
          <div className="px-5 pb-6 md:px-8 md:pb-8">
            <div className="-mt-12 flex flex-wrap items-end justify-between gap-5 md:-mt-16">
              <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-3xl border-8 border-[#151515] bg-white text-4xl font-bold text-[#080808] shadow-xl md:h-32 md:w-32">
                {avatarUrl ? (
                  <img src={avatarUrl} alt={`${form.name}'s profile`} className="h-full w-full object-cover" />
                ) : (
                  form.name.split(" ").map((part) => part[0]).join("")
                )}
                <input
                  ref={avatarInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
                <button type="button" onClick={() => avatarInputRef.current?.click()} className="absolute -bottom-2 -right-2 rounded-xl border-4 border-[#151515] bg-[#303030] p-2 text-white" aria-label="Change profile photo">
                  <Camera size={16} />
                </button>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-white">
                <ShieldCheck size={15} /> Profile 80% complete
              </div>
            </div>
            <div className="mt-5">
              <h2 className="text-2xl font-bold">{form.name}</h2>
              <p className="mt-1 text-sm text-[#D0D0D0]">@{form.username}</p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#9DA3AD]">{form.headline}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-[#9DA3AD]">
                <span className="flex items-center gap-2"><MapPin size={14} /> {form.location}</span>
                <span className="flex items-center gap-2"><GraduationCap size={14} /> Learning since October 2026</span>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/[0.09] bg-[#151515] p-4 md:p-5">
              <stat.icon size={19} className="mb-5 text-white" />
              <p className="text-xl font-bold md:text-2xl">{stat.value}</p>
              <p className="mt-1 text-xs text-[#9DA3AD]">{stat.label}</p>
            </div>
          ))}
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <section className="rounded-2xl border border-white/[0.09] bg-[#151515] p-5 md:p-7">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">Personal information</h2>
                <p className="mt-1 text-xs text-[#9DA3AD]">Keep your details current.</p>
              </div>
              <UserRound size={21} className="text-white" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" value={form.name} editing={editing} onChange={(value) => updateField("name", value)} />
              <Field label="Username" value={form.username} editing={editing} onChange={(value) => updateField("username", value)} />
              <Field label="Email address" value={form.email} editing={editing} onChange={(value) => updateField("email", value)} icon={Mail} />
              <Field label="Location" value={form.location} editing={editing} onChange={(value) => updateField("location", value)} icon={MapPin} />
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-xs font-semibold text-[#9DA3AD]">About you</label>
              {editing ? (
                <textarea value={form.bio} onChange={(event) => updateField("bio", event.target.value)} className="min-h-24 w-full resize-y rounded-xl border border-white/10 bg-[#202020] px-4 py-3 text-sm leading-6 outline-none transition focus:border-white/50" />
              ) : <p className="rounded-xl border border-white/[0.06] bg-[#202020] px-4 py-3 text-sm leading-6 text-[#A4A4A4]">{form.bio}</p>}
            </div>
          </section>

          <section className="rounded-2xl border border-white/[0.09] bg-[#151515] p-5 md:p-7">
            <h2 className="text-lg font-bold">Learning preferences</h2>
            <p className="mt-1 text-xs text-[#9DA3AD]">Personalize your learning journey.</p>
            <label className="mt-6 block text-xs font-semibold text-[#9DA3AD]">Current goal</label>
            <div className="relative mt-2">
              <select value={form.goal} onChange={(event) => updateField("goal", event.target.value)} disabled={!editing} className="w-full appearance-none rounded-xl border border-white/10 bg-[#202020] px-4 py-3 pr-10 text-sm outline-none disabled:opacity-80 focus:border-white/50">
                <option>Become a full-stack developer</option>
                <option>Get my first developer job</option>
                <option>Build better side projects</option>
                <option>Prepare for technical interviews</option>
              </select>
              <ChevronDown size={16} className="pointer-events-none absolute right-4 top-3.5 text-[#9DA3AD]" />
            </div>
            <label className="mt-6 block text-xs font-semibold text-[#9DA3AD]">Skills I’m learning</label>
            <div className="mt-3 flex flex-wrap gap-2">
              {skillOptions.map((skill) => (
                <button type="button" key={skill} onClick={() => editing && toggleSkill(skill)} className={`rounded-lg border px-3 py-2 text-xs font-medium transition ${skills.includes(skill) ? "border-white/30 bg-white/[0.12] text-white" : "border-white/10 text-[#9DA3AD]"} ${editing ? "hover:border-white/50" : "cursor-default"}`}>
                  {skills.includes(skill) && <Check size={13} className="mr-1 inline" />}{skill}
                </button>
              ))}
            </div>
            <div className="mt-7 border-t border-white/[0.07] pt-5">
              <p className="mb-3 text-xs font-semibold text-[#9DA3AD]">Public links</p>
              <div className="flex gap-2">
              {[Code2, Link2, Globe2].map((Icon, index) => <button type="button" key={index} className="rounded-xl border border-white/10 p-3 text-[#9DA3AD] transition hover:border-white/30 hover:text-white"><Icon size={17} /></button>)}
              </div>
            </div>
          </section>
        </div>

        <section className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
          <div className="flex items-center gap-3"><div className="rounded-xl bg-white/[0.1] p-3 text-white"><Code2 size={21} /></div><div><p className="text-sm font-semibold">Keep your profile fresh</p><p className="mt-1 text-xs text-[#9DA3AD]">A complete profile helps you find the right learning opportunities.</p></div></div>
          <button type="button" onClick={() => setEditing(true)} className="text-sm font-semibold text-white hover:underline">Add more details</button>
        </section>
      </main>
    </div>
  );
}

function Field({ label, value, editing, onChange, icon: Icon }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-[#9DA3AD]">{label}</label>
      <div className="relative">
        {Icon && <Icon size={15} className="absolute left-3.5 top-3.5 text-[#707783]" />}
        <input value={value} readOnly={!editing} onChange={(event) => onChange(event.target.value)}         className={`w-full rounded-xl border border-white/10 bg-[#202020] px-4 py-3 text-sm outline-none transition focus:border-white/50 ${Icon ? "pl-10" : ""} ${!editing ? "text-[#A4A4A4]" : ""}`} />
      </div>
    </div>
  );
}
