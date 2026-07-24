// lib/guides.js — Another Degree Hotter guide articles

export function guideSlugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const GUIDES = [
  {
    slug: 'gpa-requirements-explained',
    title: 'GPA Requirements for Graduate School, Explained',
    description:
      'What "recommended GPA" means in graduate admissions, how it varies by field and program type, and what to do if your GPA falls below a program\'s threshold.',
    publishDate: '2026-01-15',
    readingMinutes: 7,
    sections: [
      {
        heading: null,
        paragraphs: [
          'When you\'re researching graduate programs, you\'ll quickly encounter the phrase "recommended GPA" — often alongside a number like 3.0 or 3.5. But what does that actually mean, and how strictly do admissions committees enforce it? The answer depends heavily on the type of program, the field, and what the rest of your application looks like.',
        ],
      },
      {
        heading: 'What "Recommended GPA" Actually Means',
        paragraphs: [
          'Unlike undergraduate admissions, where GPA cutoffs can be fairly rigid, most graduate programs treat a "recommended" GPA as a holistic guideline rather than a hard floor. A 3.5 recommendation doesn\'t mean your application is automatically rejected at 3.49. It means that the average admitted student has a GPA in that range, and applicants below it will need to demonstrate strength in other areas to be competitive.',
          'The terminology matters. Programs that list a "minimum" GPA (less common) are more binding than those that list a "recommended" one. A program listing 3.0 as its minimum is flagging that applications below that threshold will rarely receive serious consideration. A program listing 3.0 as recommended is simply telling you what a typical admitted student looks like — not drawing a hard line.',
        ],
      },
      {
        heading: 'How GPA Varies by Program Type',
        paragraphs: [
          'Research-focused PhD programs in competitive fields — economics, clinical psychology, computer science — typically draw from an applicant pool with very high GPAs, often 3.7 or above. This doesn\'t mean applicants with a 3.5 can\'t succeed, but the competition is intense and GPA is one of the few metrics that can be standardized across applicants from different institutions and majors.',
          'Professional master\'s programs — MBA, MPH, MSW, MPA, MEd — tend to evaluate GPA in context. A 3.1 from a rigorous engineering or pre-med program at a highly competitive university can carry more weight than a 3.5 from a lighter curriculum. Work experience, letters of recommendation, and the personal statement carry substantial weight in these programs, sometimes more than GPA itself.',
        ],
      },
      {
        heading: 'GPA Expectations by Field',
        paragraphs: [
          'Highly GPA-sensitive programs (typical competitive range 3.5–3.9) include Computer Science PhD, Economics PhD, Clinical Psychology PhD, and top-tier MBA programs. These programs receive large applicant pools from highly qualified candidates, so GPA serves as an important initial signal.',
          'Moderately GPA-sensitive programs (3.0–3.5 competitive range) include MPH, MSW, Urban Planning, Public Policy, and Education. Here, work experience, field placement history, and a clear sense of professional purpose often matter as much as grades.',
          'Portfolio-forward fields — Architecture, Fine Arts/MFA, Landscape Architecture, Library Science — weight your submitted work more heavily. A strong portfolio or writing sample can substantially offset a GPA that would raise flags elsewhere. Many architecture schools state explicitly that the portfolio is the primary criterion for admission.',
        ],
      },
      {
        heading: 'What to Do If Your GPA Is Below the Recommendation',
        paragraphs: [
          'If your GPA falls below a program\'s recommendation, you\'re not out of options. Several strategies can shift your application in a positive direction. First, make the rest of your application as strong as possible: a compelling personal statement that explains your trajectory, strong letters of recommendation from academic or professional supervisors, and concrete research or work experience can all change the conversation.',
          'Second, consider reaching out to the admissions office directly — admissions staff can often give you an honest sense of whether your profile is competitive without wasting your application fee. Third, note that many programs place more weight on your most recent years of study than your cumulative GPA. If you struggled early and finished strong, highlight that trend explicitly in your statement of purpose.',
          'Finally, for research-based programs, demonstrated research ability — publications, posters at academic conferences, or a strong undergraduate thesis — can outweigh a lower GPA more effectively than in professional master\'s programs. Committees know that some of the best researchers had difficult undergraduate years.',
        ],
      },
      {
        heading: 'GPA and Funding Eligibility',
        paragraphs: [
          'Beyond admission, your GPA can affect funding offers. PhD programs that fully fund their cohorts often look for the strongest overall applicant package; a lower GPA alongside an otherwise outstanding application may earn admission but affect fellowship competitiveness relative to peers.',
          'At the professional master\'s level, merit scholarships at many programs are GPA-sensitive. Programs like MPH, MBA, and Data Science often award partial tuition waivers based on academic record — worth asking about explicitly when you apply and when you receive offers.',
        ],
      },
      {
        heading: 'The Bottom Line',
        paragraphs: [
          'Recommended GPA figures are meaningful context, not absolute gatekeepers. Use Another Degree Hotter\'s GPA filter to identify programs where you\'re realistically competitive, but don\'t let a single number rule out a program you\'re genuinely excited about — especially if the rest of your application is strong, your trajectory is upward, or the field prioritizes portfolio and experience over transcripts.',
        ],
      },
    ],
  },

  {
    slug: 'portfolio-field-by-field-guide',
    title: 'Do I Need a Portfolio? A Field-by-Field Guide',
    description:
      'Which graduate programs require a portfolio, what to include for architecture vs. fine arts vs. creative writing, and tips for presenting your work effectively.',
    publishDate: '2026-01-15',
    readingMinutes: 8,
    sections: [
      {
        heading: null,
        paragraphs: [
          'The portfolio requirement is one of the sharpest dividing lines in graduate admissions. In some fields it\'s the single most important element of your application; in others, it\'s irrelevant. Knowing what\'s expected — and what a strong portfolio actually looks like — can mean the difference between an offer and a rejection.',
        ],
      },
      {
        heading: 'Which Fields Require a Portfolio?',
        paragraphs: [
          'Across the programs on Another Degree Hotter, portfolio requirements fall into three categories. Fields where a portfolio is universally required include Architecture (MArch), Fine Arts (MFA in Studio Art), and Landscape Architecture (MLA). The portfolio is the primary admission criterion in these fields — GPA and transcripts are secondary.',
          'Fields where a writing sample functions as a portfolio include MFA in Creative Writing, and sometimes MS/MA programs in Communications & Journalism. Here, the writing sample is evaluated with the same rigor that a visual portfolio receives in studio fields.',
          'Most other graduate fields — public policy, public health, social work, education, engineering, business, data science, economics — do not require a portfolio at all. Your application materials consist of transcripts, letters of recommendation, test scores (where required), and a personal statement or statement of purpose.',
        ],
      },
      {
        heading: 'Architecture Portfolio: What to Include',
        paragraphs: [
          'An architecture portfolio for graduate school is typically 20–40 pages in PDF form. Programs want to see design thinking, not just finished renderings. Include a mix of process work — sketches, diagrams, models, and work-in-progress documentation — alongside polished final presentations. This lets reviewers assess how you think through a design problem, not just what your end products look like.',
          'Quality over quantity is the universal advice. Admissions committees review hundreds of portfolios; a focused 20-page portfolio that demonstrates clear conceptual development is more compelling than a bloated 60-page document crammed with every project you\'ve ever touched.',
          'If you have non-architecture creative work — drawing, painting, photography, industrial design — it\'s generally acceptable to include one or two examples at the end. It shows range. But the core of the portfolio should be design work that demonstrates spatial thinking.',
        ],
      },
      {
        heading: 'Studio Art Portfolio (MFA): What to Include',
        paragraphs: [
          'MFA programs in studio art typically ask for 15–20 slides or images of your strongest recent work. Most programs specify that work should be from the past two to three years, reflecting your current practice rather than a greatest-hits compilation from your entire artistic career.',
          'Show a coherent body of work rather than a sampling of unrelated pieces. Even if you work in multiple media, try to organize your portfolio around a consistent set of ideas or questions. Admissions readers are trying to understand your artistic sensibility and where you might go — not just what techniques you\'ve mastered.',
          'Installation and time-based work (video, performance) can usually be submitted as documentation images or short video clips. Check each program\'s technical requirements, as they vary: some use SlideRoom, others accept PDFs or direct video uploads.',
        ],
      },
      {
        heading: 'Creative Writing Portfolio (MFA): The Writing Sample',
        paragraphs: [
          'MFA creative writing programs require a writing sample rather than a visual portfolio, but it functions the same way: it\'s the central admission criterion, more important than GPA or any other part of your file. For fiction programs, the typical requirement is 20–30 pages of your best work. For poetry, 10–20 pages of poems.',
          'Submit work that represents your current voice, not your most "impressive" piece from five years ago that no longer reflects how you write. Admissions readers are looking for writers they want to work with for two or three years — someone whose current work is alive and interesting, not polished in an outdated style.',
          'Don\'t over-explain your work in the statement of purpose. If you feel the need to explain why your writing sample is good, it\'s a sign you should revise the sample itself. Let the work speak.',
        ],
      },
      {
        heading: 'Landscape Architecture Portfolio',
        paragraphs: [
          'Landscape architecture portfolios share many characteristics with architecture portfolios: process work matters, spatial thinking should be evident, and a focused 20–30 pages is better than an exhaustive document. The key difference is that ecological literacy and site analysis often feature more prominently — reviewers want to see that you understand how designed landscapes interact with natural systems.',
          'If you\'re transitioning from a non-design background (which is common in MLA programs), your portfolio might include analytical drawings, maps, site inventories, or even photography and writing that demonstrates your relationship to landscape. Many MLA programs explicitly encourage applications from non-designers.',
        ],
      },
      {
        heading: 'Practical Tips Across All Portfolio Fields',
        paragraphs: [
          'Start your portfolio before you start your applications. Revising your portfolio takes time, and leaving it until the last month of application season is one of the most common mistakes prospective students make.',
          'Always follow each program\'s specific format and size requirements. If a program asks for a PDF under 10MB with no more than 20 pages, that\'s not a suggestion. Technical non-compliance signals carelessness to admissions committees.',
          'Get feedback from practicing professionals or faculty in your field, not just from friends and family. Honest critique from someone who reviews portfolios or teaches in the field is worth more than enthusiastic encouragement from people who love you.',
        ],
      },
    ],
  },

  {
    slug: 'mpp-vs-mpa-vs-msw',
    title: 'MPP vs. MPA vs. MSW: What\'s the Difference?',
    description:
      'A clear comparison of the Master of Public Policy (MPP), Master of Public Administration (MPA), and Master of Social Work (MSW) — what each degree trains you for and how to choose.',
    publishDate: '2026-01-15',
    readingMinutes: 7,
    sections: [
      {
        heading: null,
        paragraphs: [
          'Three of the most common social-sector graduate degrees — the MPP, MPA, and MSW — are frequently confused with one another, and for good reason: they all prepare graduates to improve people\'s lives through public systems and institutions. But their emphases, methods, and career trajectories are meaningfully different, and choosing between them is one of the most consequential decisions a prospective student can make.',
        ],
      },
      {
        heading: 'Master of Public Policy (MPP)',
        paragraphs: [
          'The MPP is the most analytically oriented of the three degrees. It trains students to design, evaluate, and improve government policies using tools from economics, statistics, and quantitative analysis. Core courses typically include microeconomics, cost-benefit analysis, regression analysis, program evaluation, and policy analysis methods.',
          'MPP graduates tend to work in roles where the primary question is "what does the evidence say this policy should look like?" — positions in government agencies, think tanks, international organizations like the World Bank or United Nations, consulting firms with public-sector practices, and research institutes. The Kennedy School at Harvard, Princeton\'s School of Public and International Affairs, and the Goldman School at UC Berkeley are among the most recognized MPP programs.',
          'The MPP is a good fit if you\'re drawn to data-driven analysis, comfortable with economics and quantitative methods, and interested in working on policy design and evaluation rather than direct service delivery.',
        ],
      },
      {
        heading: 'Master of Public Administration (MPA)',
        paragraphs: [
          'The MPA focuses on management, leadership, and operations within public and nonprofit organizations. Where the MPP asks "what should the policy be," the MPA asks "how do we run the organization that implements it?" Core courses typically include organizational behavior, public finance and budgeting, human resources management, strategic planning, and leadership.',
          'MPA graduates often move into roles managing government agencies, nonprofits, NGOs, or public-private partnerships. The degree is common among mid-career professionals seeking to advance into leadership roles in government or the social sector. Programs like the Maxwell School at Syracuse, the Harvard Kennedy School\'s MPA, and Columbia\'s SIPA are well-known options.',
          'The MPA is a good fit if you\'re interested in leading organizations, managing teams, or running programs — rather than generating the policy analysis that informs those programs.',
        ],
      },
      {
        heading: 'Master of Social Work (MSW)',
        paragraphs: [
          'The MSW is the most direct-service–oriented of the three degrees. It prepares students to work directly with individuals, families, and communities — providing counseling, connecting clients to resources, advocating for vulnerable populations, and leading community-based organizations. Clinical MSW programs include supervised field placements (typically 900+ hours) where students practice social work under licensed supervision.',
          'MSW graduates work as licensed clinical social workers (LCSW) in mental health settings, hospitals, schools, child welfare agencies, and community organizations. The macro practice track within MSW programs also produces graduates who work in community organizing, policy advocacy, and program management — but always with a grounding in direct human service.',
          'The MSW is a good fit if you want to work directly with people, become a licensed therapist or counselor, or pursue advocacy and community development from a social justice orientation.',
        ],
      },
      {
        heading: 'How to Choose',
        paragraphs: [
          'The simplest question to ask yourself is: where do you want to spend most of your working day? If the answer is analyzing data, writing policy memos, and evaluating programs, the MPP is the stronger fit. If it\'s managing people, running organizations, and navigating bureaucracies, the MPA makes more sense. If it\'s sitting across from a client, walking alongside a family through a crisis, or organizing a community, the MSW is the right path.',
          'Salary and job market considerations also differ. MPP and MPA graduates often enter roles with relatively competitive government and think-tank salaries. MSW graduates — especially clinical social workers — often earn more modest starting salaries, though senior clinical and administrative social workers in healthcare settings can earn well.',
          'It\'s also worth noting that some programs offer joint degrees (MPP/MSW or MPA/MSW) for students who want to bridge policy analysis with direct practice. If you\'re genuinely torn between the paths, a joint degree might be worth exploring at programs that offer them.',
        ],
      },
      {
        heading: 'A Note on the MPA vs. MPP in Practice',
        paragraphs: [
          'In practice, the MPA/MPP distinction is fuzzier at some programs than others. Several schools use the degrees interchangeably, and at the Harvard Kennedy School, for instance, the core curriculum is largely shared between MPA and MPP students. What matters more than the degree abbreviation is the curriculum, faculty strengths, and alumni network of the specific program you attend.',
        ],
      },
    ],
  },

  {
    slug: 'thesis-vs-non-thesis-programs',
    title: 'How to Choose Between a Thesis and Non-Thesis Master\'s',
    description:
      'The difference between thesis-based and course-based master\'s programs, when each makes sense for your career goals, and which fields offer both options.',
    publishDate: '2026-01-15',
    readingMinutes: 6,
    sections: [
      {
        heading: null,
        paragraphs: [
          'Many master\'s programs offer two completion pathways: a thesis option and a non-thesis (or course-based) option. The choice is more consequential than it might appear. It affects how you spend two years of your life, what skills you develop, whether you\'re funded, and how your degree is perceived by future employers and PhD admissions committees.',
        ],
      },
      {
        heading: 'What a Thesis Actually Is',
        paragraphs: [
          'A master\'s thesis is a substantial piece of original research or scholarship, typically 60–150 pages, completed under the supervision of a faculty advisor. It requires you to identify a research question, review the existing literature, collect or analyze data, and write up your findings in a form that makes a genuine contribution to knowledge in your field.',
          'The thesis process typically takes a full year or more on top of your coursework. You\'ll work closely with a thesis committee (usually two or three faculty members), have multiple proposal and draft defenses, and revise extensively before your work is accepted. It\'s demanding — but it also produces a level of expertise in a narrow area that course-based programs simply cannot replicate.',
        ],
      },
      {
        heading: 'What a Non-Thesis Program Looks Like',
        paragraphs: [
          'Non-thesis programs (also called course-based, professional, or MEng/MBA/MPH programs) satisfy graduation requirements entirely through coursework, sometimes supplemented by a capstone project, internship, or comprehensive exam. The capstone is typically a smaller, more applied project than a thesis — often a policy memo, program evaluation, design project, or consulting deliverable for a real organization.',
          'Non-thesis programs are more common in professional fields (business, public health, urban planning, social work, engineering) and are specifically designed to prepare students for industry and practice roles rather than academic careers.',
        ],
      },
      {
        heading: 'When to Choose the Thesis Track',
        paragraphs: [
          'Choose the thesis track if you\'re considering a PhD program. Almost universally, doctoral programs prefer applicants who have completed a thesis — it demonstrates that you can develop and sustain an original research project, work independently with a faculty advisor, and tolerate the ambiguity of original inquiry. A strong master\'s thesis is also one of the most persuasive application materials you can submit for a PhD.',
          'Also choose thesis if you want to develop deep expertise in a specific sub-field, or if your career goals involve research roles in government, think tanks, or industry R&D. The thesis experience makes you a better researcher and signals that seriousness to future employers and collaborators.',
        ],
      },
      {
        heading: 'When to Choose the Non-Thesis Track',
        paragraphs: [
          'Choose the non-thesis track if your goal is to enter or advance in a professional practice field. If you want to become a clinical social worker, urban planner, public health practitioner, engineer, or manager, the additional coursework and internship experience in a non-thesis program will serve you better than spending a year writing a thesis.',
          'Non-thesis programs are also typically faster and, in some fields, more affordable — they\'re designed to get you into the workforce efficiently. If you\'re paying tuition out of pocket and have clear professional goals, the non-thesis path is usually the financially sensible choice.',
        ],
      },
      {
        heading: 'Funding Implications',
        paragraphs: [
          'In many departments, thesis students are more likely to receive funding — tuition waivers, stipends, or research assistantships — because they contribute to the department\'s research output. Non-thesis students typically pay full tuition and rarely receive departmental funding, though merit scholarships and external fellowships are still possible.',
          'This pattern is most pronounced in STEM and social science fields. In professional programs (MBA, MPH, MArch, etc.), virtually all students are self-funded regardless of thesis status.',
        ],
      },
      {
        heading: 'Fields Where the Distinction Matters Most',
        paragraphs: [
          'In fields like Geography, Environmental Science, Sociology, Economics, and Psychology, the thesis/non-thesis distinction is significant and the pathway you choose should closely match your post-graduation goals. In fields like Business Administration, Urban Planning, Social Work, and Public Health, the non-thesis professional track is so dominant that the question rarely arises — most students take the course-based route by default.',
          'If you\'re unsure which path fits your goals, talk to current students in both tracks at programs you\'re considering. Their experience of daily academic life — the freedom of self-directed research vs. the structure of coursework — will give you a more honest picture than any program brochure.',
        ],
      },
    ],
  },

  {
    slug: 'applying-without-related-undergrad',
    title: 'Applying to Grad School Without a Related Undergraduate Degree',
    description:
      'Which graduate fields are open to applicants from any undergraduate background, which require or strongly prefer a related degree, and how to strengthen your application as a career changer.',
    publishDate: '2026-01-15',
    readingMinutes: 7,
    sections: [
      {
        heading: null,
        paragraphs: [
          'One of the most common concerns among prospective graduate students is whether they need an undergraduate degree in the same field to be competitive. The answer varies dramatically by field and program type — and in many cases, the answer is no. Here\'s how to read the landscape.',
        ],
      },
      {
        heading: 'How Another Degree Hotter Categorizes This',
        paragraphs: [
          'Each program on Another Degree Hotter includes a "Related Undergrad" field with three possible values: Not Required, Preferred, or Required. These reflect how programs treat applicants from outside the field. Not Required means the program explicitly welcomes applicants from any background. Preferred means a related background strengthens your application but career changers are seriously considered. Required means you\'ll need a relevant degree — or equivalent coursework — to be admitted.',
        ],
      },
      {
        heading: 'Fields That Are Genuinely Open to Any Background',
        paragraphs: [
          'Several of the most popular graduate fields explicitly recruit from diverse undergraduate backgrounds. Public policy programs (MPP, MPA) routinely admit economics majors, political scientists, engineers, biologists, lawyers, and former military officers — anyone with demonstrated analytical ability and a clear sense of why they want to work in policy. Social work programs similarly admit applicants from sociology, psychology, history, and dozens of other majors.',
          'Public health, urban planning, architecture (MArch first-professional), library and information science, education, communications, and MBA programs are all in this category. What these fields share is an expectation that graduate school is the professional formation ground — you arrive as an intelligent person from another discipline and the program builds your professional identity.',
        ],
      },
      {
        heading: 'Fields Where a Related Background Is Strongly Preferred',
        paragraphs: [
          'Computer science, data science, and engineering master\'s programs have a strong implicit preference for applicants with STEM backgrounds, even when the policy doesn\'t formally require it. The first-year curriculum assumes linear algebra, calculus, and programming proficiency. Applicants without this background can sometimes satisfy prerequisites through coursework (community college courses, MOOCs, bootcamps) before applying, but the pathway is steeper.',
          'Economics PhD programs similarly expect a strong mathematics foundation — linear algebra, real analysis, and multivariable calculus at minimum. History, political science, or sociology majors who want to pursue an economics PhD typically spend a year taking the necessary math courses first. Psychology PhD programs, especially clinical programs, expect an undergraduate background in psychology or a closely related behavioral science.',
        ],
      },
      {
        heading: 'Fields Where a Related Degree Is Required',
        paragraphs: [
          'Nursing master\'s programs (traditional MSN) typically require a Bachelor of Science in Nursing (BSN) and a current RN license. This reflects accreditation and licensing requirements, not just admissions preferences. Notable exceptions exist: Yale School of Nursing and Vanderbilt School of Nursing offer direct-entry MSN programs designed specifically for career changers with non-nursing bachelor\'s degrees, typically requiring additional years of study.',
          'Some clinical psychology PhD programs require significant coursework in psychology or a related behavioral science, and research experience working in a psychology lab is a near-universal expectation regardless of undergraduate major.',
        ],
      },
      {
        heading: 'How to Strengthen Your Application as a Career Changer',
        paragraphs: [
          'If you\'re applying to a field outside your undergraduate major, your personal statement is crucial. You need to tell a compelling story about why you\'re making this change, what experiences drew you to the field, and what specifically you bring from your prior background that makes you a strong candidate. Admissions committees admit people, not transcripts — a coherent narrative matters enormously.',
          'Supplement your application with evidence of investment in the new field. Relevant work experience, volunteer work, informational interviews, and professional courses or certifications all demonstrate that your interest is genuine and your knowledge is real. A political science major who spent two years managing a housing nonprofit\'s programs is a genuinely competitive MSW applicant, regardless of their undergraduate major.',
          'Letters of recommendation from people in the new field — a supervisor at a relevant internship, a professor in an evening course you took — can do more work than letters from your undergraduate advisor who doesn\'t know the field. Think carefully about who can speak most directly to your fit for the program you\'re applying to.',
        ],
      },
      {
        heading: 'Bridge Programs and Pre-Requisite Courses',
        paragraphs: [
          'Many universities offer pre-requisite coursework, post-baccalaureate programs, or bridge programs designed specifically for career changers. These can range from single courses (one semester of statistics, one semester of programming) to full-year programs. Check the admissions pages of programs you\'re interested in — many specify exactly which courses they expect you to have completed, and some offer summer bridge coursework to admitted students.',
        ],
      },
    ],
  },

  {
    slug: 'us-vs-canadian-programs',
    title: 'US vs. Canadian Graduate Programs: Key Differences for Applicants',
    description:
      'A practical comparison of US and Canadian graduate programs — cost, structure, funding culture, post-graduation work pathways, and which fields are especially strong in Canada.',
    publishDate: '2026-01-15',
    readingMinutes: 8,
    sections: [
      {
        heading: null,
        paragraphs: [
          'Another Degree Hotter covers graduate programs across both the United States and Canada, and for many applicants — especially international students — the choice between countries is as important as the choice between programs. The differences are real and worth understanding before you apply.',
        ],
      },
      {
        heading: 'Cost: The Most Obvious Difference',
        paragraphs: [
          'The most dramatic difference between US and Canadian graduate education is cost. International tuition at top US private universities can reach $60,000–$80,000 per year for professional master\'s programs. Canadian programs — even at the country\'s best universities — typically run $15,000–$35,000 CAD per year for international students, which translates to roughly $11,000–$26,000 USD at current exchange rates.',
          'For domestic students, the gap is smaller but still meaningful. US public universities often have lower in-state tuition, but "in-state" residency requirements exclude recent graduates from other states. Canadian domestic tuition at provincial universities is typically $7,000–$15,000 CAD per year. The cost advantage of Canadian programs is most pronounced for international students from outside North America.',
        ],
      },
      {
        heading: 'Program Structure and Academic Culture',
        paragraphs: [
          'Canadian graduate programs, particularly research-based master\'s and PhD programs, tend to be more thesis-focused than their US counterparts. The course-heavy professional master\'s that dominates US graduate education is less common in Canada; many Canadian departments expect even terminal master\'s students to complete a substantial research project.',
          'US professional master\'s programs are often larger and more structured, with cohort models, career services offices, and robust alumni networks built specifically for career placement. Canadian programs are typically smaller, with closer faculty-student relationships but less formalized professional development support.',
        ],
      },
      {
        heading: 'Funding Culture',
        paragraphs: [
          'Research-track students (thesis master\'s and PhD) in both countries may receive funding through Teaching Assistantships (TAs), Research Assistantships (RAs), or fellowships. In Canada, national fellowships like SSHRC (Social Sciences and Humanities Research Council) and NSERC (Natural Sciences and Engineering Research Council) are competitive and prestigious. Canadian institutions also often supplement federal funding with departmental awards.',
          'Professional master\'s students in both countries typically self-fund. MBA, MPH, MSW, MEd, and MArch students should expect to pay tuition in full, though merit scholarships and need-based aid are available at many programs in both countries.',
        ],
      },
      {
        heading: 'Post-Graduation Work Pathways',
        paragraphs: [
          'For international students, this is often the decisive factor. Canada\'s Post-Graduation Work Permit (PGWP) allows graduates of designated Canadian institutions to work in Canada for up to three years after completing a program of at least two years. Combined with Express Entry points for Canadian education and work experience, this creates a viable immigration pathway that many students find attractive.',
          'The US Optional Practical Training (OPT) offers international graduates one year of post-graduation work authorization, extendable to three years for STEM fields. However, the cap-subject H-1B lottery creates significant uncertainty for graduates who want to stay long-term, and the pathway to permanent residency is longer and more complex for most nationalities.',
          'If long-term immigration is a factor in your decision, consulting an immigration lawyer in your target country is worthwhile before committing to a program.',
        ],
      },
      {
        heading: 'Which Fields Are Especially Strong in Canada',
        paragraphs: [
          'Canada has world-class programs across a range of fields. In AI and machine learning, the Toronto-Waterloo corridor is globally recognized, with Mila (the Montreal Institute for Learning Algorithms) at McGill and U de Montréal hosting some of the world\'s leading deep learning researchers. Computer science programs at Waterloo, Toronto, UBC, and McGill are competitive with top US programs.',
          'Environmental programs benefit from Canada\'s vast natural systems — geography, environmental management, conservation biology, and forestry programs at UBC, U of T, McGill, and Dalhousie have access to ecosystems that don\'t exist in most of the continental US. Public health and urban planning programs in Canadian cities offer distinctive fieldwork contexts in countries with universal healthcare and strong planning traditions.',
          'Library and information science, social work, nursing, and education programs at major Canadian universities are accredited by the same bodies that accredit US programs (ALA, CSWE, CCNE, NCATE) and are fully recognized for professional licensure in both countries in most cases — though you should verify your specific situation with the relevant licensing body.',
        ],
      },
      {
        heading: 'Language Considerations',
        paragraphs: [
          'Most programs covered on Another Degree Hotter are in English, including all programs at anglophone Canadian universities (UBC, Toronto, Waterloo, McGill English programs, Dalhousie, etc.). McGill and several other Montreal institutions offer some programs in both English and French, and Montréal itself is a bilingual city. The few fully francophone programs (Université de Montréal, Université Laval) are not currently listed on Another Degree Hotter.',
        ],
      },
    ],
  },

  {
    slug: 'personal-statement-tips-by-field',
    title: 'Personal Statement Tips by Field (Policy, Design, STEM, Humanities)',
    description:
      'How graduate school personal statements differ across fields — what admissions committees in policy, STEM, design, clinical, and humanities programs are actually looking for.',
    publishDate: '2026-01-15',
    readingMinutes: 8,
    sections: [
      {
        heading: null,
        paragraphs: [
          'The personal statement — also called a statement of purpose, letter of intent, or personal essay depending on the program — is your most direct opportunity to tell an admissions committee who you are, why you want this degree, and why you belong in their program specifically. But what makes a strong personal statement varies significantly by field. What works for a public policy program will undermine you at a PhD program in computer science.',
        ],
      },
      {
        heading: 'Research-Focused STEM Programs (CS, Engineering, Data Science, Economics PhD)',
        paragraphs: [
          'In research STEM programs, the statement of purpose is primarily about fit with faculty research. Committees want to know what problems you want to work on, what you\'ve already done that demonstrates your research ability, and which specific faculty members you want to work with and why. The document is closer to a research proposal than a personal narrative.',
          'Name specific professors. Read recent papers by your target faculty before you write. Explain why their work is relevant to the questions you want to pursue. Generic statements that express enthusiasm for "the field" without demonstrating familiarity with the specific research happening in the department are a significant red flag in PhD admissions.',
          'Describe your research experience concretely. What problem were you working on? What did you do? What did you find or contribute? Committees read hundreds of statements claiming "research experience" — the ones that stand out show the reader exactly what that experience involved.',
        ],
      },
      {
        heading: 'Social Science and Policy Programs (MPP, MPA, Public Health, Urban Planning)',
        paragraphs: [
          'Policy and public-sector programs want to understand your purpose. What problem do you want to solve, and why are you the right person to work on it? A compelling policy statement typically opens with a specific moment, policy failure, or community experience that crystallized your commitment to the field — not a general statement about caring about society.',
          'The statement should also be explicit about what you want to do with the degree. "I want to work at the intersection of housing policy and climate adaptation at the local government level" is more compelling than "I want to make a difference." Programs want to fund students with clear goals; vagueness reads as uncertainty about whether you actually want to be there.',
          'Quantitative skills and analytical credibility matter in policy programs. If you have relevant data analysis, research, or evaluation experience, foreground it — even if it comes from outside the traditional policy sector.',
        ],
      },
      {
        heading: 'Social Work, Counseling, and Nursing Programs',
        paragraphs: [
          'Clinical programs expect you to demonstrate both passion for direct service and sufficient self-awareness to become an effective practitioner. Admissions readers are assessing not just your academic qualifications but whether you\'re emotionally equipped for demanding clinical work. This means the personal statement can be more reflective and personal than in other fields — but it shouldn\'t be therapeutic self-disclosure.',
          'Describe your direct service experience concretely: what population did you work with, what was your role, and what did you learn that you couldn\'t have learned any other way? Programs want to know that you understand what the work actually involves at the ground level, not just in theory.',
          'For clinical programs, self-awareness about your own background and how it might affect your clinical practice is often explicitly valued. Programs preparing therapists and social workers want practitioners who have done some of this reflective work before arriving.',
        ],
      },
      {
        heading: 'Design and Architecture Programs',
        paragraphs: [
          'Architecture and design programs typically require a shorter written statement alongside the portfolio — and the portfolio does most of the talking. The statement should articulate your design philosophy, the questions you want to investigate in studio, and why this particular program is the right context for that investigation. It should not describe your portfolio; let the portfolio speak for itself.',
          'Be specific about what draws you to the program: a particular faculty member\'s work, a studio option, the city the school is in, a specific theoretical tradition the department is known for. Generic statements about loving buildings are the design equivalent of STEM applications that don\'t name any faculty — a signal that you didn\'t do your research.',
        ],
      },
      {
        heading: 'Humanities and Social Science Research Programs (Sociology, Psychology PhD, Fine Arts)',
        paragraphs: [
          'PhD programs in humanities and interpretive social sciences want to understand your intellectual project — the set of questions you\'re drawn to and the frameworks you\'re learning to use. You\'re not expected to have your dissertation fully formed, but you should be able to articulate a research area, identify the conversations in the field you want to contribute to, and name the faculty at this specific institution who are working in adjacent areas.',
          'MFA creative writing programs often ask for a separate statement from your writing sample. The statement should reflect on your relationship to writing: what you\'re trying to do as a writer, what writers or traditions have shaped your thinking, and what you hope to accomplish in the program. Avoid statements that are primarily defensive explanations of your writing sample — let the work stand on its own.',
        ],
      },
      {
        heading: 'Mistakes to Avoid Across All Fields',
        paragraphs: [
          'Don\'t open with a quote, a dictionary definition, or a sentence about when you first knew you wanted to be in the field as a child. These openings are so common that they\'ve become negative signals — they suggest you\'re writing from a template rather than from genuine reflection.',
          'Don\'t use the statement to explain weaknesses in your record unless a weakness is so significant that not addressing it would leave a question hanging. If your GPA dipped sophomore year, you don\'t need to explain it in the statement — that\'s what the optional addendum is for. If you have a significant research gap that the committee will notice, brief and forward-looking acknowledgment is appropriate; extensive apologizing is not.',
          'Do tailor each statement to each program. Generic statements that could be submitted to any graduate school in your field are detectable and depressing to read. Admissions committees appreciate the effort of specificity — it signals genuine interest rather than application-factory behavior.',
        ],
      },
    ],
  },

  {
    slug: 'funded-vs-self-funded-programs',
    title: 'Funded vs. Self-Funded Master\'s Programs: What to Know',
    description:
      'What graduate school funding actually looks like, which fields and program types typically fund their students, how to evaluate a funding offer, and what questions to ask.',
    publishDate: '2026-01-15',
    readingMinutes: 7,
    sections: [
      {
        heading: null,
        paragraphs: [
          'The funding landscape for graduate school is one of the most misunderstood aspects of the application process. Many prospective students don\'t realize that PhD students in most fields are typically funded, while professional master\'s students typically pay tuition. Understanding this distinction — and its exceptions — can save you from significant debt or from unnecessarily ruling out programs you could have attended for free.',
        ],
      },
      {
        heading: 'What "Funded" Actually Means',
        paragraphs: [
          'A fully funded graduate program provides a stipend (typically $20,000–$40,000 per year, depending on field and location), tuition remission (your tuition is waived), and often health insurance. In exchange, students typically work as Teaching Assistants (TAs) or Research Assistants (RAs) for 15–20 hours per week. The goal is to allow students to focus on their research and studies without financial desperation.',
          'Partial funding — scholarships, fellowships, or tuition waivers without a stipend — is common in professional master\'s programs. These can significantly reduce your cost but don\'t eliminate the need to pay for living expenses. Always distinguish between tuition support and total cost of attendance when evaluating offers.',
        ],
      },
      {
        heading: 'PhD Programs: Usually Funded',
        paragraphs: [
          'In most fields, PhD programs provide full funding packages to admitted students. The logic is straightforward: PhD students produce research that benefits the faculty and department, and the program needs to attract the strongest candidates. Unfunded PhD programs exist but are widely considered a red flag — proceeding to a PhD without funding commits you to 5–7 years of work with debt accumulating in the background.',
          'Key exceptions: some professional doctorates (EdD, PsyD, DrPH) are self-funded programs that target working professionals. If a PhD program in your field offers you admission without funding while others in the field routinely fund their students, it\'s worth asking the program directly what percentage of admitted students receive funding.',
        ],
      },
      {
        heading: 'Professional Master\'s: Usually Self-Funded',
        paragraphs: [
          'MBA, MPH, MSW, MArch, MEd, MPA, and most professional master\'s programs are self-funded. Students pay tuition (ranging from $15,000 to $80,000+ per year at private US institutions) and cover living expenses. The degree is an investment in career advancement, and the expected return is higher earning potential or career transformation.',
          'However, merit scholarships and partial fellowships are common at professional master\'s programs. Competitive applicants — those in the top quartile of the admitted class by GPA, GRE/GMAT scores, work experience, or some combination — often receive offers of $5,000–$30,000 per year in merit aid. These offers are sometimes negotiable, especially if you have competing offers from peer programs.',
        ],
      },
      {
        heading: 'Research Master\'s: It Depends',
        paragraphs: [
          'Thesis-based master\'s programs sit between PhD and professional master\'s on the funding spectrum. In STEM fields, funded master\'s positions attached to faculty grants are common — a professor with NSF or NIH funding may recruit a master\'s student as a research assistant. In humanities and social sciences, funded master\'s positions are rarer, though some departments offer TA stipends that cover tuition.',
          'In Canadian graduate programs, funded thesis master\'s positions are more common than in the US, reflecting different departmental structures and funding models. If you\'re considering Canadian thesis programs, ask directly about TA funding availability.',
        ],
      },
      {
        heading: 'How to Evaluate a Funding Offer',
        paragraphs: [
          'Before accepting a funding package, calculate whether the stipend actually covers your cost of living in that city. A $22,000 stipend in rural Wisconsin is livable; the same amount in New York or San Francisco is not. Living cost calculators and conversations with current PhD students are more reliable than program brochures for understanding actual financial reality.',
          'Ask whether the funding is guaranteed for multiple years or contingent on satisfactory academic progress and continued TA/RA work. Multi-year guarantees (typically 4–5 years for PhD, 1–2 years for thesis master\'s) provide meaningful security; year-to-year offers are less stable.',
          'Also ask about fellowship eligibility. Some students can supplement their base stipend with external fellowships (NSF GRFP, SSHRC, Fulbright, etc.) that can add $10,000–$34,000 per year and may release you from TA obligations for a semester or year.',
        ],
      },
      {
        heading: 'External Fellowship Opportunities',
        paragraphs: [
          'External fellowships are worth pursuing aggressively. The NSF Graduate Research Fellowship Program (GRFP) provides $37,000/year for three years in STEM and social science fields and is one of the most valuable awards a US graduate student can receive. The SSHRC Doctoral Fellowship serves a similar function for Canadian humanities and social science students.',
          'Nationally competitive fellowships like the Fulbright, the Ford Foundation, the American Association of University Women (AAUW) fellowship, and dozens of field-specific awards can fund graduate study at programs that don\'t offer internal funding. Many applicants overlook these because they\'re not advertised on program websites — but a fellowship can open doors to programs that would otherwise be financially impossible.',
        ],
      },
    ],
  },

  {
    slug: 'geography-human-vs-physical',
    title: 'Geography Grad Programs: Choosing Between Human and Physical Geography',
    description:
      'The difference between human and physical geography tracks in graduate programs, what each prepares you for, and how GIS fits into both.',
    publishDate: '2026-01-15',
    readingMinutes: 6,
    sections: [
      {
        heading: null,
        paragraphs: [
          'Geography is one of the most intellectually diverse graduate fields available — and that diversity can be disorienting for prospective students trying to figure out which program is right for them. Understanding the distinction between human and physical geography tracks, and knowing how GIS and remote sensing bridge them, is essential before you start comparing programs.',
        ],
      },
      {
        heading: 'Human Geography: People, Place, and Power',
        paragraphs: [
          'Human geography examines the relationship between people and places — how societies organize space, how power shapes landscapes, how communities form and change, and how global economic forces interact with local lived experience. It draws heavily on social theory, and depending on the subfield, it can look a lot like sociology, political science, anthropology, or cultural studies.',
          'Major subfields within human geography include: urban geography (cities, housing, neighborhoods), economic geography (industry, trade, regional development), political geography (borders, sovereignty, geopolitics), cultural geography (identity, place, landscape meaning), and development geography (Global South, international development, postcolonial theory). GIS and spatial analysis appear in human geography as tools for visualizing and analyzing social patterns — not as ends in themselves.',
        ],
      },
      {
        heading: 'Physical Geography: Earth Systems and Environment',
        paragraphs: [
          'Physical geography studies the natural processes that shape the Earth\'s surface: climate systems, river systems, glaciers, soils, vegetation, and landforms. It sits at the intersection of geography, earth science, ecology, and atmospheric science. Physical geographers often conduct fieldwork in demanding environments — measuring soil erosion in drylands, monitoring glacial retreat in the Arctic, or tracking river channel change after flooding events.',
          'Major subfields include: climatology and meteorology (weather patterns, climate change), geomorphology (landforms, erosion, sediment transport), hydrology (water systems, watersheds), biogeography (distribution of species, ecosystems), and soils geography (soil formation, land degradation). Physical geographers regularly work alongside ecologists, hydrologists, and environmental scientists, and the methodological toolkit is closer to natural science than to humanities.',
        ],
      },
      {
        heading: 'Geographic Information Science (GIS): The Bridge',
        paragraphs: [
          'GIS and remote sensing are technical skills that span both human and physical geography and have strong independent career markets. GIS specialists analyze spatial data, create maps and visualizations, and build geographic databases for government agencies, environmental consultancies, urban planners, transportation departments, and emergency management organizations.',
          'Many geography programs allow students to specialize in GIS/GIScience as a concentration within a broader geography MA or MS. Dedicated GIScience programs (Another Degree Hotter lists these separately) offer more technical depth and are popular with students who want applied geospatial careers rather than academic research positions. The skills transfer well into fields like urban planning, environmental management, and public health.',
        ],
      },
      {
        heading: 'Career Paths: Where Each Track Leads',
        paragraphs: [
          'Human geographers work in academic positions (the traditional route), urban and regional planning agencies, development organizations (NGOs, UN agencies, World Bank), policy research institutes, and increasingly in private sector roles in tech companies doing spatial analysis of market patterns or social trends. The degree is useful for anyone who wants to analyze the social dimensions of place with rigorous methods.',
          'Physical geographers work in academic and government research positions (USGS, NOAA, Environment Canada, NASA), environmental consulting, natural resource management agencies, climate adaptation planning, and insurance and risk assessment. The fieldwork component of many physical geography programs gives graduates practical skills that translate well into environmental science careers.',
        ],
      },
      {
        heading: 'How to Choose',
        paragraphs: [
          'The simplest way to decide is to look at your reading habits. Do you find yourself drawn to books and articles about cities, inequality, development, culture, and political power as expressed through space? Human geography is your track. Do you spend time reading about climate systems, landforms, ecology, and the mechanics of Earth\'s surface processes? Physical geography is where you belong.',
          'Look carefully at faculty research in programs you\'re considering. Geography departments are often split between human and physical geographers, and your advisor\'s subfield will largely determine your intellectual training and career network. Find programs where two or three faculty members are doing work you genuinely find exciting — that\'s a stronger signal than rankings.',
        ],
      },
    ],
  },

  {
    slug: 'mba-admissions-gpa-test-scores',
    title: 'MBA Admissions: What GPA and Test Scores Actually Matter',
    description:
      'How business schools evaluate GPA and GMAT/GRE scores, when work experience compensates for a lower academic record, and what trends in test-optional admissions mean for you.',
    publishDate: '2026-01-15',
    readingMinutes: 8,
    sections: [
      {
        heading: null,
        paragraphs: [
          'MBA admissions is different from almost every other graduate school process. Understanding what business schools actually weigh — and how GPA and test scores fit into a much larger picture — is essential for putting together a competitive application.',
        ],
      },
      {
        heading: 'GPA in MBA Admissions',
        paragraphs: [
          'Undergraduate GPA matters in MBA admissions, but it\'s evaluated very differently than in academic PhD programs. Top programs like Harvard Business School and Wharton have median GPAs around 3.7, but their admitted classes include applicants with GPAs as low as 3.0 — and occasionally below — who compensate with exceptional work experience, leadership, test scores, or a compelling personal story.',
          'Context matters enormously. A 3.3 in electrical engineering from a rigorous technical university is viewed differently than a 3.3 in an easier major from a less selective school. Business schools have access to data on grade distributions across institutions and majors, and many apply an unofficial adjustment. If your GPA is below average for programs you\'re targeting, a strong quantitative background demonstrated in other ways — high GMAT quant score, work involving complex financial analysis, technical publications — can help offset the concern.',
        ],
      },
      {
        heading: 'GMAT vs. GRE: Which Should You Take?',
        paragraphs: [
          'Most top business schools have been "GRE neutral" for years — meaning they officially treat GMAT and GRE equally. In practice, GMAT remains the stronger signal at the most selective programs, and GMAT scores are what applicants and schools most often cite in their statistics. If you\'re targeting top-10 programs and have the bandwidth to prepare for one exam, the GMAT still carries a slight advantage in perception.',
          'The GRE is increasingly accepted and increasingly common among MBA applicants, particularly those who are also applying to other graduate programs (policy, law, public health) alongside business school. GRE preparation is more generalizable across different application contexts.',
          'The new GMAT Focus Edition (released in late 2023) is shorter and differently structured than the classic GMAT. Score equivalencies between the editions are published by GMAC, and most schools have updated their targets accordingly. Check the specific school\'s website for guidance on which edition they prefer.',
        ],
      },
      {
        heading: 'What Is a Competitive Score?',
        paragraphs: [
          'At the most selective programs (M7: Harvard, Wharton, Stanford, Booth, Kellogg, Sloan, Columbia), median GMAT Focus Edition scores typically fall in the 720–760 range on the legacy scale equivalent. Scoring at or above the median for your target programs puts you in a competitive position; scoring significantly below (more than 20–30 points below median) is a meaningful headwind that the rest of your application needs to overcome.',
          'At strong but less selective programs — Duke Fuqua, Ross, UCLA Anderson, UNC Kenan-Flagler — the median GMAT scores are typically in the 680–720 range, and admissions teams are more holistic in how they evaluate candidates. Work experience quality, career goals clarity, and interview performance often carry as much or more weight than test scores.',
        ],
      },
      {
        heading: 'Work Experience: The Factor That Matters Most',
        paragraphs: [
          'Unlike other graduate programs, MBA admissions is substantially driven by work experience. Most full-time MBA programs seek applicants with 3–7 years of post-undergraduate professional experience, and the quality and trajectory of that experience is the central admission criterion. Two candidates with identical GPAs and GMAT scores will be evaluated almost entirely on the strength of their work history, career progression, leadership, and professional impact.',
          'Strong work experience for MBA admissions typically involves: increasing scope of responsibility over time, direct leadership of people or projects, measurable impact, and evidence that you\'ve been trusted with significant decisions. Consulting, investment banking, entrepreneurship, military service, and roles in high-growth technology companies are common backgrounds among admitted students — but program managers in government, engineers with technical leadership, and nonprofit leaders are competitive too.',
        ],
      },
      {
        heading: 'The Test-Optional Trend',
        paragraphs: [
          'COVID-era test-optional policies that many schools adopted have largely been rolled back at the most selective programs, which have returned to requiring GMAT or GRE scores. However, a number of schools — including several strong regional programs and some international schools — have maintained test-optional or test-flexible policies.',
          'Even at test-optional programs, submitting a strong score is almost always advantageous. Opting out of submitting scores is most defensible when your scores are genuinely weak and the rest of your application is exceptional. If your test scores are average or strong for the program, submit them.',
        ],
      },
      {
        heading: 'Reapplication and Improvement Strategies',
        paragraphs: [
          'If you\'ve been rejected or feel your current numbers aren\'t competitive, the most productive path is almost always to improve your work experience rather than retake the GMAT. A year in a stronger role with greater impact is a more powerful application improvement than 30 additional GMAT points.',
          'If your test score is genuinely weak (below 600 on legacy GMAT or equivalent), retaking is worth considering — particularly if you know you underperformed due to preparation or test anxiety. But test prep has diminishing returns beyond a certain point. Most applicants who score below 600 on their first attempt can improve substantially with structured preparation; those who score 650+ are often better served putting that energy into the rest of their application.',
        ],
      },
    ],
  },
]

export function getGuideBySlug(slug) {
  return GUIDES.find(g => g.slug === slug) ?? null
}
