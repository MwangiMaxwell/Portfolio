import type { BlogPost, Work } from "./types";

export const siteConfig = {
  name: "Maxwell Mwangi",
  role: "Frontend Developer",
  email: "maxwellmwangi34@gmail.com",
  socials: {
    github: "https://github.com/MwangiMaxwell",
    linkedin: "https://www.linkedin.com/in/maxwell-wamaitha-7b426a280/",
    x: "https://x.com/mwas_01?s=21",
    instagram: "https://www.instagram.com/_mwangii__/",
  },
  bio: " Co-Founder of Corvux Systems and a systems strategist. I am passionate about building resilient digital ecosystems.",
};

export const works: Work[] = [
  {
    slug: "llvm-load-store-counter",
    title: "LLVM Load Store Counter",
    description:
      "A  LLVM New Pass Manager plugin that counts Load and Store instructions per function and in the whole module.",
    year: "2026",
    tags: ["Python", "LLVM", "Shell"],
    github: "https://github.com/MwangiMaxwell/llvm-load-store-counter",
    live: "https://github.com/MwangiMaxwell/llvm-load-store-counter",
  },
  {
    slug: "Hospital-Queue-Management-System",
    title: "Hospital Queue Management System",
    description:
      "A web-based application for managing patient queues in hospital settings.",
    year: "2025",
    tags: ["React", "Tailwind", "Stripe"],
    github: "https://github.com/MwangiMaxwell/Hospital_Queue_System",
    live: "https://github.com/MwangiMaxwell/Hospital_Queue_System",
  },
  {
    slug: "Aegis-guard",
    title: "Aegis Guard",
    description:
      "A transparent, approval-gated execution proxy for MCP infrastructure tools. Functional prototype. Aegis implements request forwarding, inspection, classification, suspension, and manual release, but it is not yet production-ready or a complete security boundary.",
    year: "2024",
    tags: ["Python", "Dockerfile", "ProseMirror"],
    github: "https://github.com/mzain2004/Aegis",
  },
  {
    slug: "Welfare-Enabled-Energy-Tariff-System",
    title: "Welfare-Enabled-Energy-Tariff-System",
    description:
      "A web-based application for managing energy tariffs with welfare considerations.",
    year: "2024",
    tags: ["Pylint", "React", "Node.js", "MongoDB", "Scikit-learn"],
    github: "https://github.com/MwangiMaxwell/Welfare-Enabled-Energy-Tariff-System",
    live: "https://github.com/MwangiMaxwell/Welfare-Enabled-Energy-Tariff-System",
  },
  {
    slug: "An executive AI agent for managing your calendar and emails",
    title: "An executive AI agent for managing your calendar and emails",
    description:
      "An AI-powered assistant for streamlining calendar management and email organization.",
    year: "2024",
    tags: ["Python", "OpenAI", "React", "Node.js"],

    github: "https://github.com/MwangiMaxwell/gcp-adk-exec-assistant",
    live: "https://github.com/MwangiMaxwell/gcp-adk-exec-assistant",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "mpesa-innovation-ceiling",
    title: "The M-Pesa Trap: How Kenya's Biggest Fintech Win Became Its Innovation Ceiling",
    excerpt:
      "M-Pesa proved Kenya could lead the world in mobile money. Two decades later, it might be the reason nothing else has scaled the same way.",
    date: "2025-12-02",
    readTime: "7 min",
    tags: ["Fintech", "Kenya", "Opinion"],
    content: `Everyone loves the M-Pesa origin story. Safaricom builds a mobile money product in 2007, unbanked Kenyans adopt it faster than anyone predicted, and suddenly Nairobi is the case study every fintech conference in the world wants to cite. Fair enough. It earned that reputation.

But I think we need to be honest about what happened after. M-Pesa did not just solve a problem, it captured the rails that every other financial product in Kenya now has to negotiate with. Any startup trying to move money in this country eventually runs into Safaricom's pricing, Safaricom's APIs, or Safaricom's willingness to let you exist next to them. That is not a neutral market condition, it is a chokepoint.

Compare that to what happened in Nigeria, where no single telco owned the payment rail the way Safaricom does here. Flutterwave and Paystack had room to build because the incumbent advantage was fragmented across banks and telcos instead of consolidated in one company. Kenya got its fintech moment early, then spent the next fifteen years mostly protecting it rather than building on top of it.

The startups that do break through here tend to be the ones that route around M-Pesa entirely, or that get acquired into the ecosystem rather than compete with it. That is not innovation, that is survival strategy dressed up as strategy.

**What gets lost in the celebration:**
- Developer talent gets funneled into building on top of one company's infrastructure instead of inventing new infrastructure
- Regulatory attention stays fixed on protecting the incumbent's stability rather than opening the market
- International investors keep pointing to M-Pesa as proof Kenya is ready for more capital, while the actual next generation of products struggles to get funded because they cannot promise the same dominance

I do not think M-Pesa did anything wrong by winning. I think we did something wrong by treating one company's success as evidence the whole ecosystem was healthy. Eighteen years on, the most interesting fintech work in Africa is happening in places that never had a monopoly this clean, and that should tell us something uncomfortable about what actually breeds competition.`,
  },
  {
    slug: "konza-technopolis-powerpoint-cities",
    title: "Konza Technopolis and the Cost of Building Tech Cities on PowerPoint",
    excerpt:
      "Kenya announced its 'Silicon Savannah' in 2008. Nearly two decades and several billion shillings later, it is worth asking what a tech city actually needs to become one.",
    date: "2025-10-14",
    readTime: "6 min",
    tags: ["Kenya", "Policy", "Infrastructure"],
    content: `I want to like Konza. The ambition behind it is real and the idea, a purpose built technology hub 60 kilometers from Nairobi, is not inherently bad. Rwanda's Kigali Innovation City and Morocco's Technopolis in Rabat prove that planned tech zones can work when the fundamentals are right. The problem is that Konza was sold to the public as a city before the state had solved the much less glamorous question of why companies would actually move there.

You cannot build a Silicon Savannah by putting up fiber and calling it done. Silicon Valley did not happen because someone zoned land for it, it happened because Stanford produced graduates, defense contracts produced early capital, and a culture of failure tolerance let founders try again after collapsing. Konza has the fiber. It does not yet have the university pipeline feeding it, the venture capital circling it, or the population density that makes talent want to live there instead of commute in.

What actually happened is more mundane than the marketing decks suggested. Some data centers went up. Some government offices moved in. A handful of BPO and tech companies took incentives to set up shop. Meanwhile the vast majority of Kenyan tech talent stayed exactly where it already was, in Westlands, Kilimani, and increasingly in fully remote arrangements that made the question of physical location irrelevant.

**The uncomfortable comparison:**
Nairobi did not need a masterplan to become the tech hub it is. iHub, Ushahidi, and the general concentration of universities, cafes, and coworking spaces in the city did that organically, without a 20 year national blueprint. Konza tried to manufacture in one location what actually emerges from density, competition, and talent clustering over time.

None of this means Konza is a total waste. Infrastructure investment rarely is. But if the lesson from Konza is not learned honestly, the next big government tech initiative will make the same mistake: assuming that buildings and broadband create innovation, when in reality they only create the conditions where innovation might eventually show up, if everything else is also in place.`,
  },
  {
    slug: "african-startup-funding-numbers-lie",
    title: "Why African Startup Funding Numbers Lie to Us",
    excerpt:
      "The headline totals every year sound impressive until you look at where the money actually goes and who never sees a shilling of it.",
    date: "2025-08-27",
    readTime: "7 min",
    tags: ["Africa", "Venture Capital", "Startups"],
    content: `Every January, someone publishes a report saying African startups raised some enormous number the year before, and every January, tech Twitter treats it as proof the continent has arrived. I have stopped trusting these headline totals, and I think more people building here should too.

The first problem is concentration. The so called Big Four, Nigeria, Kenya, Egypt, and South Africa, routinely absorb somewhere around three quarters of all reported venture funding on the continent. That means when someone says African tech raised two billion dollars, what they usually mean is a small cluster of startups in four countries raised most of it, while founders in Ghana, Senegal, Ethiopia, Rwanda, and the other fifty or so countries fight over the leftovers. Calling that pan African is generous at best.

The second problem is what counts as a startup in these reports. Debt financing, project finance for solar and energy companies, and large infrastructure rounds routinely get lumped into the same totals as early stage equity for a five person SaaS team. That inflates the number without telling you anything about how many actual companies are being built or how many founders are getting a real shot.

**What the number hides:**
- Female founders in Africa still receive a tiny sliver of total funding, often cited around one percent when you isolate all female founding teams
- Most of the money that does flow in is concentrated in fintech, which means agritech, healthtech, and edtech founders solving equally urgent problems are chronically underfunded
- A large share of "African" funding rounds go to startups that are legally incorporated in Delaware or London, with African operations, which complicates any claim that the capital is building local wealth

I am not saying the growth is fake. Real companies are being built, real jobs are being created, and the ecosystem in 2025 looks nothing like it did a decade ago. But treating an aggregate funding number as a scoreboard for the whole continent lets everyone, investors, governments, and journalists, avoid the harder question of who is actually being left out, and why.`,
  },
  {
    slug: "hustle-culture-nairobi-capital-problem",
    title: "Nairobi's Tech Scene Doesn't Have a Hustle Problem, It Has a Capital Problem",
    excerpt:
      "We keep telling young developers to grind harder. Maybe the grind was never the bottleneck.",
    date: "2025-07-09",
    readTime: "5 min",
    tags: ["Kenya", "Culture", "Startups"],
    content: `There is a specific genre of LinkedIn post in Nairobi tech circles that I have come to actively distrust. It usually involves someone describing how they coded for eighteen hours a day, slept on a couch, and refused to give up, framed as the reason they eventually made it. The implication for everyone reading is clear: if you have not made it yet, you probably have not hustled hard enough.

I do not doubt these stories happened. What I doubt is that hustle was ever the scarce resource. Kenyan developers already work under conditions that would be considered extreme almost anywhere else, unreliable power in some areas, expensive data, long commutes, and a job market where a computer science degree does not guarantee a role anywhere near your skill level. The grind is not missing. What is missing is patient capital willing to fund an idea through its slow, unglamorous early years without demanding profitability in eighteen months.

Compare the environment a founder in Nairobi operates in to one in Berlin or Toronto. Both might work equally hard. Only one of them has access to angel networks, government backed grants, and a local VC scene deep enough to do a proper seed round without every check coming from outside the country. Effort was never the differentiator. Access was.

**Why the hustle narrative persists anyway:**
It is a convenient story for everyone except the founder. It lets underfunded accelerators claim their mentorship is sufficient without writing real checks. It lets investors who ask for founder-friendly optics avoid confronting how thin the actual capital pool is. And it lets the ecosystem celebrate resilience instead of interrogating why so much resilience is required in the first place.

I would rather see fewer motivational posts about grinding through the night and more honest conversations about why a promising Nairobi startup can build a working product, get real users, and still die waiting for a term sheet that a comparable startup in a better funded market would have closed in weeks.`,
  },
  {
    slug: "leapfrogging-comforting-myth",
    title: "Leapfrogging Is a Comforting Story We Tell Ourselves About African Tech",
    excerpt:
      "Skipping landlines for mobile phones was real. Skipping the hard, boring infrastructure work that every mature tech economy went through is not.",
    date: "2025-05-21",
    readTime: "6 min",
    tags: ["Africa", "Infrastructure", "Opinion"],
    content: `The leapfrogging narrative goes like this: Africa never built fixed line telephony at scale, so it jumped straight to mobile, and that same pattern will repeat everywhere, banking, energy, government services, until the continent skips decades of infrastructure debt that older economies had to slog through. It is a genuinely useful framework in a few specific cases. Mobile money is the textbook example, and it is real.

But somewhere along the way, leapfrogging stopped being a description of one specific technological jump and became a general excuse for not doing infrastructure work. I hear it used to justify skipping reliable grid electricity in favor of assuming solar will simply arrive in time. I hear it used to explain why broadband penetration outside major cities remains patchy, as if fiber rollout is somehow optional now that satellite internet exists. Starlink is useful, but it is not a substitute for the kind of terrestrial infrastructure that keeps costs low enough for mass adoption.

The countries actually pulling ahead in African tech, and I would put Rwanda and to some extent Egypt in this category, are not skipping infrastructure. They are building it aggressively and deliberately, often with heavy state involvement, and using that foundation to attract the kind of capital and talent that lets later stage innovation happen. Nothing about their progress looks like a leap. It looks like unglamorous, sequential investment.

**Where the myth actually causes harm:**
When leapfrogging becomes the default explanation for uneven development, it removes pressure from governments and telecom regulators to actually fix the boring things, spectrum allocation, undersea cable redundancy, rural electrification. Every time a data center in Nairobi goes dark because of a grid failure, or a fintech startup in a secondary city cannot scale because connectivity outside the capital is unreliable, someone points to leapfrogging as the eventual solution instead of demanding the infrastructure investment that was always going to be required.

Leapfrogging happened once, in one specific domain, for reasons that were more circumstantial than strategic. Turning it into a general theory of African development lets everyone off the hook for the parts of the work that were never going to be skippable.`,
  },
  {
    slug: "ecitizen-digital-government-illusion",
    title: "eCitizen and the Illusion of Digital Government",
    excerpt:
      "Putting a government service online is not the same as making it work. Kenya's digitization push has confused the two for years.",
    date: "2025-04-03",
    readTime: "6 min",
    tags: ["Kenya", "GovTech", "Policy"],
    content: `eCitizen is, on paper, one of the more ambitious government digitization efforts on the continent. Passport applications, business registration, land searches, and dozens of other services theoretically no longer require standing in a physical queue. That is genuinely useful, and I do not want to pretend otherwise.

What bothers me is how often the platform gets held up as evidence that Kenya has solved digital government, when in practice it has mostly digitized the front door while leaving the actual bureaucratic machinery behind it almost untouched. You can submit a document online and still wait weeks for a human being in an understaffed office to process it manually. You can pay a fee instantly through the portal and still have no visibility into why your application has been sitting unresolved for a month. Moving the paperwork online did not remove the paperwork, it just changed where you fill it out.

There is also the question of who eCitizen actually serves well. It assumes reliable internet access, a smartphone or computer, and enough digital literacy to navigate government forms designed by people who were not necessarily thinking about usability. For someone in Nairobi with a laptop and fiber, eCitizen is a genuine convenience. For someone in a rural constituency relying on a shared cybercafe or a slow mobile connection, it can add friction rather than remove it, especially when the nearest Huduma Centre used to be the more reliable option.

**What real digital government would require:**
- Backend process redesign, not just a frontend for existing paper workflows
- Interoperability between agencies so citizens are not re-entering the same information across a dozen different portals
- Genuine service level accountability, where a delay has consequences for the office responsible, not just a status label that says pending

I think eCitizen is a reasonable first step that has been mistaken for a finished product. The mistake is not building a portal. The mistake is treating the portal as the hard part, when the hard part was always the institutional reform underneath it, and that reform has barely started.`,
  },
  {
    slug: "ai-hype-outpacing-african-tech-narrative",
    title: "The AI Hype Cycle Is Eating Africa's Tech Narrative Before We've Built Anything",
    excerpt:
      "Every pitch deck in Nairobi now has an AI slide. Very few of them have a reason for it to be there.",
    date: "2026-02-17",
    readTime: "7 min",
    tags: ["AI", "Africa", "Opinion"],
    content: `Somewhere around 2023, it became almost mandatory for African startups to describe themselves as AI companies, regardless of what they actually built. I have sat in enough demo days to watch this happen in real time, a founder with a perfectly reasonable logistics or agritech product suddenly reframing a basic recommendation algorithm as artificial intelligence because that is what investors in the room wanted to hear.

I do not think this is unique to Africa, the global funding environment rewards AI framing everywhere right now. But I think it is more damaging here specifically, because the actual infrastructure needed to build meaningful AI products, compute access, large scale local language data, and engineers with real machine learning training, is thinner on the ground than in markets where this hype cycle originated. When a Bay Area startup slaps an AI label on a feature, it is usually riding on top of genuine research capacity somewhere in the stack. When that happens here, more often than not it is a thin wrapper around an API call to a foreign model, repackaged as innovation.

There is real work happening that deserves attention. Efforts to build large language models with meaningful Swahili, Yoruba, and other African language support are addressing an actual gap that the big labs have mostly ignored. Startups doing agricultural image recognition trained on local crop data are solving something genuinely specific to the continent. That work is slow, unglamorous, and rarely gets the same funding attention as a founder who can say the word AI convincingly in a pitch meeting.

**What gets crowded out:**
- Funding that could go toward compute infrastructure and data center capacity instead chases whichever startup has the flashiest AI narrative
- Genuinely useful, less trendy problems, rural connectivity, basic financial inclusion, healthcare logistics, get deprioritized because they do not fit the current investor thesis
- Talented engineers spend their time building thin AI wrappers for funding purposes instead of the deeper infrastructure work that would actually let African AI companies compete in five years

I am not against AI ambition here. I am against the specific pattern where hype outpaces the underlying capability, because when the correction eventually comes, and it always does, the startups that get hurt worst are the ones that spent their runway chasing a narrative instead of building something durable.`,
  },
  {
    slug: "open-source-sustainability-crisis",
    title: "Open Source Sustainability Is a Crisis Nobody Wants to Fund",
    excerpt:
      "The software running most of the internet depends on maintainers who are burning out for free, and the industry keeps treating that as someone else's problem.",
    date: "2025-11-28",
    readTime: "7 min",
    tags: ["Open Source", "Software", "Global Tech"],
    content: `Every major tech company runs on open source infrastructure it did not pay for. That is not an exaggeration, it is a fairly literal description of the dependency tree behind nearly every production system in the industry. And yet the maintainers responsible for keeping that infrastructure alive are, in a huge number of cases, unpaid volunteers doing the work in their spare time, often while holding down an unrelated day job.

We got a preview of what happens when this arrangement breaks down with the xz utils incident, where a maintainer who had been carrying a critical compression library largely alone for years was gradually worn down until a malicious actor was able to insert a backdoor by offering to help with maintenance. That was not a freak accident. It was the predictable outcome of a system where critical infrastructure depends on the goodwill and stamina of individuals who receive essentially nothing for the responsibility they carry.

The corporate response to this pattern has mostly been symbolic. Companies will sponsor a conference, put a logo on a foundation's website, or occasionally throw a one time grant at a maintainer whose project just had a security scare. What almost never happens is the boring, unglamorous thing that would actually fix the problem, which is sustained, structural funding for the people doing ongoing maintenance work, before there is a crisis, not after.

**Why this keeps happening:**
- Open source is treated as a free input rather than a dependency that requires investment, the same way companies would never treat their cloud hosting bill as optional
- Funding tends to flow toward high visibility projects while the less glamorous but equally critical dependencies, the small library that half the ecosystem quietly relies on, gets ignored
- Individual maintainers rarely have leverage to negotiate for support, because the moment they push too hard, a fork or a replacement library is always technically possible, even if practically disruptive

I do not think this gets fixed by asking companies to be more generous out of goodwill. It gets fixed when enough of them experience a security incident bad enough to make the cost of underfunding open source higher than the cost of actually funding it. Until then, the people holding up large parts of the internet will keep doing it for free, and we will keep acting surprised when something breaks.`,
  },
  {
    slug: "enshittification-coming-for-african-platforms",
    title: "Enshittification Isn't Just a Silicon Valley Problem, It's Coming for African Platforms Too",
    excerpt:
      "The pattern that ruined so many Western platforms, get users, extract from users, extract from advertisers, is not exclusive to Facebook and Amazon. Watch for it locally.",
    date: "2025-09-19",
    readTime: "6 min",
    tags: ["Global Tech", "Platforms", "Africa"],
    content: `Cory Doctorow's term for platform decay describes a specific lifecycle. A platform starts by being genuinely good to its users to build a user base, then shifts to extracting value from those users to please business customers, then eventually starts extracting from the business customers too, leaving everyone worse off while the platform itself becomes barely tolerable. We have watched this happen to Facebook, to Amazon's marketplace, to Google Search. It is easy to talk about this as a uniquely American big tech pathology.

I do not think it is. I think it is a pathology of any platform business model that reaches dominant market position without meaningful competitive pressure, and several African platforms are either already there or heading there quickly. Look at how ride hailing pricing in Nairobi has shifted over the years since the early days when apps subsidized rides aggressively to win market share. Look at how e-commerce marketplaces across the continent have gradually increased seller fees once they had enough buyer lock in that sellers had nowhere else profitable to go.

The specific danger for African markets is that this decay can happen with even less friction than it did in the West, because regulatory scrutiny of dominant tech platforms here is generally thinner, and because a smaller number of viable alternatives exist in most product categories to begin with. When Amazon starts squeezing sellers in the United States, there is at least a meaningful conversation happening about antitrust enforcement. When a dominant delivery or payments platform in an African market does the same thing, there is often no equivalent regulatory apparatus paying close attention.

**What to actually watch for:**
- Pricing that starts generous during a growth phase and quietly tightens once user habits are locked in
- Fee structures for merchants or drivers that shift gradually enough that no single change feels like the moment things got worse
- Platforms that reduce customer support quality once switching costs for users are high enough that complaints stop mattering to retention

I am not arguing every growing platform is destined for this outcome. I am arguing that the assumption it could not happen here, because our market is different or our founders are more mission driven, is not a real defense. The incentive structure that produces enshittification is a function of market power, not geography, and African markets are not immune just because the platforms extracting value happen to be homegrown instead of imported from Silicon Valley.`,
  },
  {
    slug: "remote-work-offshore-exploitation",
    title: "Remote Work Didn't Democratize Tech Jobs for Africans, It Just Moved the Exploitation Offshore",
    excerpt:
      "Global companies love talking about the borderless remote workforce. The pay gap that comes with it tells a different story.",
    date: "2026-01-08",
    readTime: "7 min",
    tags: ["Remote Work", "Africa", "Global Tech"],
    content: `The pitch for remote work as a great equalizer for African developers sounds appealing. A talented engineer in Nairobi or Lagos no longer needs a visa or a relocation package to work for a company in London or San Francisco, they can simply apply, interview over video, and start contributing from wherever they already live. On the surface, that looks like real progress, and for a meaningful number of individual developers, it genuinely has been.

But look at how most of these arrangements are actually structured and the story gets more complicated. A large share of African developers working remotely for foreign companies are not employed directly, they are hired through staffing agencies or contractor arrangements specifically designed to let the employer pay a fraction of what an equivalent hire in the company's home country would cost. The company gets senior level output at junior level, sometimes barely above local, pay, and calls it a win for global talent access. The developer gets a salary that is genuinely good relative to the local market, but is quietly understood by everyone involved to be well below what the same skill set would command if the person happened to live somewhere else.

This is not really democratization. It is arbitrage. The value being extracted is the gap between what African talent costs and what the same talent would cost in a higher wage market, and remote work simply made that gap easier to exploit at scale, without the overhead of setting up a formal local entity or dealing with immigration processes.

**What this looks like in practice:**
- Contractor arrangements that avoid the legal protections, benefits, and job security that come with formal direct employment in the company's home jurisdiction
- Compensation benchmarked against local cost of living rather than the value of the work delivered, even when the work itself is functionally identical to a role in a higher paying market
- Career growth ceilings, where remote hires from African markets are disproportionately kept in individual contributor roles rather than promoted into leadership, regardless of demonstrated capability

None of this means African developers should avoid remote roles with foreign companies, for many people it remains the best available option relative to local alternatives. But the industry narrative that frames this as a triumphant borderless meritocracy deserves more scrutiny than it usually gets. A system can genuinely improve someone's material circumstances while still being built on an unequal foundation, and remote work in its current form is mostly that, an improvement for individuals riding on top of a structure that was never actually designed to close the gap it claims to be closing.`,
  },
];
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getWork(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}
