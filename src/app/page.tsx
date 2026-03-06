import './page.css';
import './responsive-fixes.css';
import { Award, Users, Building2, Trophy, Calendar, Phone, Mail, FileText, Medal } from 'lucide-react';
import ImageSlider from './components/image-slider';
export default function Home() {
  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <div style={styles.logoRow} className="logoRow">
          {/* <div style={styles.logoContainer} className="logoContainer">
              <img src="/inapp-logo12.png" alt="InApp Logo" style={styles.inappLogo} className="inapp-logo"/>
            </div> */}
          <div style={styles.logoContainer}>
            <img src="/logo4.png" alt="IEEE CS Logo" style={styles.inappLogo} className="ieeecslogo" />
          </div>
        </div>

        {/* <img src="/heading.png" alt="Heading Text" style={styles.headingImage} /> */}

        <h1 style={styles.heading} className="responsiveHeading">InApp - IEEE CS STUDENT PROJECT AWARDS</h1>
        <p style={styles.subheading} className="responsiveSubheading">Inspiring New Solutions, Propelling Innovation, Realizing Excellence</p>

        <div className="submissions-closed">
          Submissions Closed
        </div>

      </section>

      <section style={styles.aboutSection} id="about">
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionBadge}>About</div>
            <h2 style={styles.sectionTitle}>Empowering Innovation Through Excellence</h2>
            <p style={styles.sectionSubtitle}>
              Discover the partnership that's shaping the future of technology education and innovation
            </p>
          </div>

          <ImageSlider />

          <div style={styles.aboutCardsGrid} className="about-cards-grid">
            <div style={styles.aboutCard} className="about-card">
              <div style={styles.aboutCardIcon}>
                <Award size={32} color="white" />
              </div>

              <div style={styles.aboutCardContent}>
                <h3 style={styles.aboutCardTitle}> InApp </h3>
                <p style={styles.aboutCardText}>Since 2000, InApp has been a trusted end‑to‑end software development partner, delivering cutting‑edge technology solutions to clients around the globe. With a team of over 400 seasoned engineers, InApp has completed more than 1,500 projects for upwards of 700 organizations, driving digital transformation across industries. From crafting bespoke desktop and mobile applications to implementing cloud‑native architectures, DevOps pipelines, big‑data analytics, IoT integrations, blockchain innovations, and immersive AR/VR experiences, InApp brings every stage of the software lifecycle under one roof - whether launching a brand‑new product or modernizing a legacy system.</p>

              </div>
            </div>


            <div style={styles.aboutCard} className="about-card">
              <div style={styles.aboutCardIcon}>
                <Building2 size={32} color="white" />
              </div>
              <div style={styles.aboutCardContent}>
                <h3 style={styles.aboutCardTitle}>InApp - IEEE CS Student Project Awards</h3>
                <p style={styles.aboutCardText}>
                  The InApp Student Project Awards, previously organized in collaboration with CSI, have partnered with the IEEE Computer Society Kerala Chapter to celebrate outstanding student achievements in software development across India. This award offers an engaging, supportive platform for teams to present fully realized projects that address real‑world challenges. Each submission is carefully evaluated by a panel of industry experts, ensuring that outstanding technical rigor, inventive thinking, and real‑world impact receive the spotlight they deserve. More than a ceremony, the award empowers the next generation of technocrats to push their limits, collaborate across disciplines, and emerge as future leaders.</p>


              </div>
            </div>


            <div style={styles.aboutCard} className="about-card">
              <div style={styles.aboutCardIcon}>
                <Users size={32} color="white" />
              </div>
              <div style={styles.aboutCardContent}>
                <h3 style={styles.aboutCardTitle}>IEEE Computer Society</h3>
                <p style={styles.aboutCardText}>
                  The IEEE Computer Society (CS) Kerala Chapter, established in 1985, marks a 40-year legacy of excellence as the world’s largest Computer Society Chapter. With 48 Student Branch Chapters and over 4,060 members as of 2026, the Chapter has played a significant role in advancing computer science and engineering.</p>
                <p style={styles.aboutCardText}>
                  It organizes flagship events such as AKCSSC and AICSSYC-23, and its impact is driven by committed volunteers whose leadership has earned prestigious recognitions, including the IEEE CS (Global) Outstanding Chapter Award (2018), the Early Career Professionals Engagement Award (2022), and the IEEE Kerala Section Outstanding Large Society Chapter Award (2023).
                </p>
              </div>
            </div>



          </div>
        </div>
      </section>

      <section id="history" style={styles.historySection}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionBadge}>History</div>
            <h2 style={styles.sectionTitle}>Legacy of Excellence</h2>
            <p style={styles.sectionSubtitle}>
              Over a decade of recognizing and celebrating student innovation in technology
            </p>
          </div>

          <div style={styles.historyContent} className="history-content">
            <div style={styles.historyStats} className="history-stats">
              <div style={styles.statCard}>
                <h3 style={styles.statNumber}>15</h3>
                <p style={styles.statLabel}>Years of Awards</p>
              </div>
              <div style={styles.statCard}>
                <h3 style={styles.statNumber}>500+</h3>
                <p style={styles.statLabel}>Projects Submitted</p>
              </div>
              <div style={styles.statCard}>
                <h3 style={styles.statNumber}>100+</h3>
                <p style={styles.statLabel}>Winners Recognized</p>
              </div>
              <div style={styles.statCard}>
                <h3 style={styles.statNumber}>50+</h3>
                <p style={styles.statLabel}>Institutions Participated</p>
              </div>
            </div>

            <div style={styles.historyText} className="history-text">
              <p style={styles.historyParagraph} className="history-paragraph">
                The InApp Student Project Awards have a longstanding tradition of encouraging innovation and recognising excellence in software development among students. Since its inception, the Awards have provided a platform for young developers to showcase their skills and creative solutions to real-world problems.
              </p>
              <p style={styles.historyParagraph} className="history-paragraph">
                Until 2024, the Awards were organised in partnership with the Computer Society of India (CSI). The projects were evaluated by a distinguished panel of industry pioneers, ensuring that the best and most innovative solutions received the recognition they deserved.
              </p>
              <p style={styles.historyParagraph} className="history-paragraph">
                Building on the success of previous editions, the InApp - IEEE CS Student Project Awards continues the mission to celebrate and nurture the talent of aspiring technocrats. This edition remains committed to encouraging students to push their boundaries, innovate, and make a lasting impact in the digital world.
              </p>
              {/* <div style={styles.historyLink} className="history-link">
                <a href="#" style={styles.linkButton} className="history-link-btn">
                  View Previous Year Winners →
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section id="awards" style={styles.awardsSection}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionBadge}>Awards</div>
            <h2 style={styles.sectionTitle}>Competition Details & Guidelines</h2>
            <p style={styles.sectionSubtitle}>
              Everything you need to know about participating in the  InApp - IEEE CS Student Project Awards
            </p>
          </div>

          <div style={styles.awardsGrid} className="awards-grid">
            {/* Award Rules Card */}
            <div style={styles.awardsCard} className="awards-card">
              <div style={styles.awardsCardHeader}>
                <div style={styles.iconContainer}>
                  <FileText size={24} color="white" />
                </div>
                <h3 style={styles.awardsCardTitle}>Terms and Conditions</h3>
              </div>
              <div style={styles.awardsCardContent}>
                <p><strong>1. Eligibility</strong><br />
                  Participation is open to individuals who graduate in calendar year 2026, from any undergraduate or postgraduate program. Each entry must include a software component; submissions lacking clear software functionality will be disqualified.</p>

                <p><strong>2. Evaluation Process</strong><br />
                  All valid entries will undergo expert review by a panel appointed by the Organizing Committee. The initial assessment will consider innovation, technical merit, feasibility, and overall impact. Shortlisted teams will be notified exclusively via the email address provided at registration and must present a live demonstration - either virtually or in person, as specified by the organizers. The panel, comprising seasoned technologists and industry leaders, may conduct further rounds of evaluation if deemed necessary. All decisions on shortlisting, finalist status, and awards are final and binding.</p>

                <p><strong>3. Intellectual Property</strong><br />
                  Project teams retain full ownership of all intellectual property rights in their submissions. By entering, each team grants the organizers a non‑exclusive, royalty‑free, perpetual license to reproduce and display submission materials for non‑commercial promotional and marketing purposes only. No other rights - including commercialization, sublicensing, or modification - are conveyed.</p>

                <p><strong>4. General</strong><br />
                  Submission of an application signifies each team member’s acceptance of these Terms and Conditions. The Organizing Committee is not liable for technical disruptions, delays, omissions, or force majeure events that may affect the competition.The Organizing Committee reserves the right to modify, amend, or cancel any aspect of the competition at its sole discretion, including but not limited to timelines, evaluation criteria, judging panels, shortlisting processes, and award structures, without prior notice.</p>


              </div>

            </div>
          </div>
          <div style={styles.awardsGrid1} className="awards-grid">
            {/* Prizes Card */}
            <div style={styles.awardsCard} className="awards-card">
              <div style={styles.awardsCardHeader}>
                <div style={styles.iconContainer}>
                  <Trophy size={24} color="white" />
                </div>
                <h3 style={styles.awardsCardTitle}>Prizes</h3>
              </div>
              <div style={styles.awardsCardContent}>
                <div style={styles.prizeItem}>
                  <div style={styles.prizeIcon}>
                    <Trophy size={28} color="#FFD700" />
                  </div>
                  <div>
                    <h4 style={styles.prizeTitle}>First Prize</h4>
                    <p style={styles.prizeAmount}>Award Instrument + ₹50,000</p>
                  </div>
                </div>
                <div style={styles.prizeItem}>
                  <div style={styles.prizeIcon}>
                    <Trophy size={28} color="#A9A9A9" />
                  </div>
                  <div>
                    <h4 style={styles.prizeTitle}>Consolation Prize</h4>
                    <p style={styles.prizeAmount}>Award Instrument + ₹25,000</p>
                  </div>
                </div>


                <p style={styles.bonusText}>
                  Placement Opportunity for All Winners
                </p>

              </div>
            </div>


            {/* Timeline */}
            <div style={styles.timelineCard} className="timeline-card">
              <div style={styles.timelineHeader}>
                <Calendar size={24} color="#CC232E" />
                <h3 style={styles.timelineTitle}>Important Dates</h3>
              </div>
              <div style={styles.timelineContent}>
                <div style={styles.timelineItem}>
                  <div style={styles.timelineDot}></div>
                  <div style={styles.timelineInfo}>
                    <h4 style={styles.timelineEventTitle}>Registration Begins</h4>
                    <p style={styles.timelineDate}>January 31st, 2026</p>
                  </div>
                </div>
                <div style={styles.timelineItem}>
                  <div style={styles.timelineDot}></div>
                  <div style={styles.timelineInfo}>
                    <h4 style={styles.timelineEventTitle}>Registration Deadline</h4>
                    <p style={styles.timelineDate}>February 20th, 2026</p>
                  </div>
                </div>
                <div style={styles.timelineItem}>
                  <div style={styles.timelineDot}></div>
                  <div style={styles.timelineInfo}>
                    <h4 style={styles.timelineEventTitle}>First Round Evaluation Results</h4>
                    <p style={styles.timelineDate}>Second week of March</p>
                  </div>
                </div>
                <div style={styles.timelineItem}>
                  <div style={styles.timelineDot}></div>
                  <div style={styles.timelineInfo}>
                    <h4 style={styles.timelineEventTitle}>Second Round Evaluation</h4>
                    <p style={styles.timelineDate}>March (tentative)</p>
                  </div>
                </div>
                <div style={styles.timelineItem}>
                  <div style={styles.timelineDot}></div>
                  <div style={styles.timelineInfo}>
                    <h4 style={styles.timelineEventTitle}>Final Round Evaluation</h4>
                    <p style={styles.timelineDate}>April (tentative)</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" style={styles.contactSection}>
        <div style={styles.sectionContainer}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionBadge}>Contact Us</div>
            <h2 style={styles.sectionTitle1}> Stuck somewhere? Curious about the next step?
              Reach out — we’re here to ensure nothing holds you back</h2>
            <p style={styles.sectionSubtitle}>

            </p>
          </div>

          <div style={styles.contactGrid} className="contact-grid">
            <div style={styles.contactCard} className="contact-card">
              <div style={styles.contactCardHeader}>
                <div style={styles.contactAvatar}>
                  <Users size={24} color="white" />
                </div>
                <div>
                  <h3 style={styles.contactName}>Awards Team</h3>
                  {/* <p style={styles.contactRole}>Awards Team</p> */}
                </div>
              </div>
              <div style={styles.contactDetails}>
                <div style={styles.contactItem}>
                  <Mail size={18} color="#CC232E" />
                  <a href="mailto:studentawards@inapp.com" style={styles.contactLink}>
                    studentawards@inapp.com
                  </a>
                </div>
                <div style={styles.contactItem}>
                  <Phone size={18} color="#CC232E" />
                  <span style={styles.contactText}>+91 9446230863</span>
                </div>
                <div style={styles.contactItem}>
                  <Phone size={18} color="#CC232E" />
                  <span style={styles.contactText}>+91 8078156138</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>©2026 InApp - IEEE CS Student Project Awards. All rights reserved.</p>
      </footer>
    </div>

  );
}

const styles = {
  container: {
    paddingTop: '0px',
  },
  hero: {
    height: '100vh',
    backgroundImage: 'url(/bg1.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center' as const,
    padding: '0 20px',
  },

  logo: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  } as React.CSSProperties,
  inappLogo: {
    maxWidth: '150%',
    maxHeight: '150%',

    objectFit: 'contain',
  } as React.CSSProperties,
  ieeecsLogo: {
    maxWidth: '300%',
    maxHeight: '300%',
    objectFit: 'contain',
  } as React.CSSProperties,

  logoContainer: {
    width: '300px',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 -25px',
  },
  logoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '-30px',
  },
  heading: {
    fontFamily: 'Nexa',
    fontSize: '3.5rem',
    fontWeight: '800',
    marginBottom: '10px',
    color: '#ffffff',
    // textTransform: 'uppercase' as React.CSSProperties['textTransform'],

  },
  subheading: {
    fontFamily: 'Rothek',
    fontStyle: 'italic',
    fontWeight: '300',
    color: '#ffffff',
    fontSize: '1.4rem',
    marginBottom: '20px',
  },
  headingImage: {
    width: '100%', // adjust as needed
    maxWidth: '1000px',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '16px 40px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  },

  sectionContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  sectionHeader: {
    textAlign: 'center' as const,
    marginBottom: '4rem',
  },
  sectionBadge: {
    display: 'inline-block',
    backgroundColor: '#CC232E',
    color: 'white',
    padding: '8px 40px',
    borderRadius: '50px',
    fontSize: '1.4rem',
    fontWeight: '600',
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
    marginBottom: '1rem',
  },
  sectionTitle: {
    fontSize: '3rem',
    fontWeight: '700',
    color: 'black',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
  },
  sectionTitle1: {
    fontSize: '1.2rem',
    fontWeight: '500',
    color: 'white',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
  },
  sectionSubtitle: {
    fontSize: '1rem',
    color: '#666',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
  },

  // About Section
  aboutSection: {
    padding: '8rem 0',
    backgroundColor: '#f8f9fa',
  },

  // History Section
  historySection: {
    padding: '8rem 0',
    backgroundColor: 'white',
  },
  historyContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    marginTop: '3rem',
  },
  historyStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
  },
  statCard: {
    textAlign: 'center' as const,
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '15px',
    border: '2px solid #CC232E',
  },
  statNumber: {
    fontSize: '3rem',
    fontWeight: '800',
    color: '#CC232E',
    margin: '0 0 0.5rem 0',
  },
  statLabel: {
    fontSize: '1.1rem',
    color: '#666',
    margin: 0,
    fontWeight: '600',
  },
  historyText: {
    paddingLeft: '2rem',
  },
  historyParagraph: {
    fontSize: '1.2rem',
    color: '#666',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
  },
  historyLink: {
    marginTop: '2rem',
  },
  linkButton: {
    display: 'inline-block',
    backgroundColor: '#CC232E',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1.1rem',
    transition: 'all 0.3s ease',
  },
  aboutCardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
  },
  aboutCard: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    position: 'relative' as const,
    overflow: 'hidden',
  },
  aboutCardIcon: {
    width: '80px',
    height: '80px',
    backgroundColor: '#CC232E',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    position: 'relative' as const,
  },
  aboutCardContent: {
    position: 'relative' as const,
    zIndex: 2,
  },
  aboutCardTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '1.2rem',
  },
  aboutCardText: {
    fontSize: '1.1rem',
    color: '#666',
    lineHeight: '1.7',
    marginBottom: '1.2rem',
  },
  // Awards Section
  awardsSection: {
    padding: '8rem 0',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  },
  awardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(700px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  },
  awardsGrid1: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  },
  awardsCard: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '2rem',
    border: '2px solid #CC232E',
    boxShadow: '0 15px 40px rgba(204, 35, 46, 0.1)',
    transition: 'all 0.3s ease',
  },
  awardsCardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  awardsCardTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1a1a1a',
  },
  awardsCardContent: {
    color: '#666',
  },
  rulesList: {
    paddingLeft: '1.5rem',
    lineHeight: '1.8',
    fontSize: '1rem',
  },
  prizeItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.5rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '15px',
    marginBottom: '1.5rem',
    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
    border: '1px solid #e9ecef',
    transition: 'all 0.3s ease',
  },
  prizeIcon: {
    fontSize: '2rem',
  },
  prizeTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#1a1a1a',
    margin: '0 0 0.5rem 0',
  },
  prizeAmount: {
    fontSize: '1rem',
    color: '#CC232E',
    fontWeight: '600',
    margin: 0,
  },
  bonusCard: {
    backgroundColor: 'rgba(204, 35, 46, 0.1)',
    color: '#CC232E',
    padding: '1.5rem',
    borderRadius: '15px',
    textAlign: 'center' as const,
    boxShadow: '0 8px 25px rgba(204, 35, 46, 0.1)',
    border: '2px solid #CC232E',
  },
  bonusText: {
    margin: '1rem 0 0 0',
    fontSize: '0.9rem',
    fontWeight: '400',
    color: '#666',
    textAlign: 'center' as const,
  },

  // Timeline
  timelineCard: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '2rem',
    border: '2px solid #CC232E',
    boxShadow: '0 15px 40px rgba(204, 35, 46, 0.1)',
    transition: 'all 0.3s ease',
  },
  timelineHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',
  },
  timelineTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1a1a1a',
  },
  timelineContent: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  timelineDot: {
    width: '16px',
    height: '16px',
    backgroundColor: '#CC232E',
    borderRadius: '50%',
    flexShrink: 0,
  },
  timelineInfo: {
    flex: 1,
  },
  timelineEventTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1a1a1a',
    margin: '0 0 0.5rem 0',
  },
  timelineDate: {
    fontSize: '1rem',
    color: '#CC232E',
    fontWeight: '600',
    margin: 0,

  },
  contactSection: {
    padding: '8rem 0',
    backgroundColor: '#1a1a1a',
    color: 'white',
  },
  contactGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '3rem',
  },
  contactCard: {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '2rem',
    color: '#1a1a1a',
    transition: 'all 0.3s ease',
    maxWidth: '400px',
    width: '100%',
  },
  contactCardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  contactAvatar: {
    width: '60px',
    height: '60px',
    backgroundColor: '#CC232E',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactName: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#1a1a1a',
    margin: '0 0 0.5rem 0',
  },
  contactRole: {
    fontSize: '1rem',
    color: '#666',
    margin: 0,
  },
  contactDetails: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  contactText: {
    fontSize: '1rem',
    color: '#1a1a1a',
  },
  contactLink: {
    fontSize: '1rem',
    color: '#CC232E',
    textDecoration: 'none',
    fontWeight: '500',
  },

  iconContainer: {
    width: '50px',
    height: '50px',
    backgroundColor: '#CC232E',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center' as const,
    padding: '20px 0',
    position: 'relative' as const,
    bottom: 0,
    width: '100%',
  },


};
