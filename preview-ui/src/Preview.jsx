import { ResponsiveBar } from '@nivo/bar';
import { CalendarDays } from '@/components/ui/calendar';
import { Zap, Globe, Smartphone, Lock, Home, Sparkles } from 'lucide-react';


function StatsBarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { metric: "Time Saved", before: 100, after: 35 },
          { metric: "No-Shows", before: 80, after: 20 },
          { metric: "Booking Time", before: 90, after: 10 },
          { metric: "Team Satisfaction", before: 55, after: 95 },
        ]}
        keys={["before", "after"]}
        indexBy="metric"
        margin={{ top: 30, right: 40, bottom: 50, left: 50 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={["#e2e8f0", "#7c3aed"]}
        borderWidth={0}
        borderRadius={4}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 10,
          tickRotation: 0,
          legend: "",
          legendOffset: 36,
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 8,
          tickRotation: 0,
          legend: "Score",
          legendOffset: -40,
        }}
        enableGridY={true}
        gridYValues={[0, 25, 50, 75, 100]}
        theme={{
          grid: {
            line: {
              stroke: "#f1f5f9",
              strokeWidth: 1,
            },
          },
          axis: {
            ticks: {
              text: {
                fontSize: 12,
                fill: "#64748b",
              },
            },
          },
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "top-right",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: -25,
            itemsSpacing: 16,
            itemWidth: 60,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderRadius: 12,
            itemTextColor: "#64748b",
          },
        ]}
      />
    </div>
  );
}

export default function AgendaAILanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [activePricingTab, setActivePricingTab] = useState("monthly");

  const features = [
    {
      icon: <CalendarDays className="h-6 w-6 text-violet-600" />,
      title: "Smart Scheduling",
      description:
        "AI finds the perfect time for every participant, respecting time zones and personal preferences automatically.",
      highlight: "90% faster booking",
    },
    {
      icon: <Zap className="h-6 w-6 text-violet-600" />,
      title: "Instant Meeting Links",
      description:
        "One click generates a virtual room with video, shared notes, and agenda — no more back-and-forth emails.",
      highlight: "1-click setup",
    },
    {
      icon: <Globe className="h-6 w-6 text-violet-600" />,
      title: "Multi‑Calendar Sync",
      description:
        "Connect Google, Outlook, and Apple calendars seamlessly. Zero double bookings, guaranteed.",
      highlight: "3+ platforms",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-violet-600" />,
      title: "Mobile First",
      description:
        "Schedule, join, and manage meetings on the go with our fully native iOS and Android apps.",
      highlight: "iOS & Android",
    },
    {
      icon: <Lock className="h-6 w-6 text-violet-600" />,
      title: "Enterprise Security",
      description:
        "SOC 2 Type II certified, end‑to‑end encryption, and SAML SSO keep your data safe and compliant.",
      highlight: "SOC 2 certified",
    },
    {
      icon: <div className="h-6 w-6 text-violet-600" />,
      title: "Team Analytics",
      description:
        "See how your team spends time and optimize meeting culture with actionable, data-driven insights.",
      highlight: "Real-time dashboards",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Connect Your Calendars",
      description:
        "Link your Google, Outlook, or Apple calendar in two clicks. Agenda AI instantly learns your availability patterns.",
      icon: <CalendarDays className="h-8 w-8 text-white" />,
      color: "from-violet-500 to-purple-600",
    },
    {
      number: "02",
      title: "Set Your Preferences",
      description:
        "Define ideal meeting times, buffer zones, favorite video platforms, and even your personal productivity rhythms.",
      icon: <Zap className="h-8 w-8 text-white" />,
      color: "from-indigo-500 to-blue-600",
    },
    {
      number: "03",
      title: "Let AI Do the Work",
      description:
        'Simply type what you need — "Schedule a 30‑min call with the design team next Tuesday afternoon." Done in seconds.',
      icon: <Sparkles className="h-8 w-8 text-white" />,
      color: "from-fuchsia-500 to-pink-600",
    },
  ];

  const testimonials = [
    {
      quote:
        "Agenda AI cut my scheduling time by 90%. I now spend zero minutes playing calendar Tetris. It's genuinely liberating.",
      name: "Sarah Chen",
      role: "Product Lead, Acme Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      rating: 5,
    },