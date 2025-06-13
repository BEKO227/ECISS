import React from 'react';
<link
rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
/>
const partners = [
  {
    name: 'Mecmesin',
    logo: 'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Mecmesin.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9NZWNtZXNpbi5qcGciLCJpYXQiOjE3NDgzNjg2NTEsImV4cCI6MzMyODQzNjg2NTF9.PU8iwI_vNJSaaJo1ma2KZg6dspHGzroS3BwCNB_6qQ0',
  },
  {
    name: 'VMA getzmann',
    logo: 'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Vma%20logo.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9WbWEgbG9nby5zdmciLCJpYXQiOjE3NDgzNjg2OTcsImV4cCI6MzMyODQzNjg2OTd9.CfA45Y1C2CI5eM-v2KTLMteoGF5KDlF1HIZtpZDW1cA',
  },
  {
    name: 'Advance lab',
    logo: 'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/AdvanceLab-logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9BZHZhbmNlTGFiLWxvZ28ucG5nIiwiaWF0IjoxNzQ4MzY4NzE2LCJleHAiOjMzMjg0MzY4NzE2fQ.LtxqueL25vjN3IihzLBsunDkeN-xIExiXKMqyPUzGjY',
  },
  {
    name: 'Lloyds research',
    logo: 'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/lloyds%20logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9sbG95ZHMgbG9nby5wbmciLCJpYXQiOjE3NDgzNjg3NDAsImV4cCI6MzMyODQzNjg3NDB9.Q-Q4o4ttxpBsXWqqmFNnCvzLjP0YmufaZBbNDr-o4K0'
  },
];

const customers = [
  {
    name: 'Pepsico',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/PepsiCo%20logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9QZXBzaUNvIGxvZ28ucG5nIiwiaWF0IjoxNzQ4MzY2MjYzLCJleHAiOjMzMjg0MzY2MjYzfQ.ykqzV1fTIg4ogM5R7kNJ7LR8KHRab1aYMMmI4dC2cj8',
  },
  {
    name: 'Egypt Foods',
    logo: 'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/egypt-foods-group.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9lZ3lwdC1mb29kcy1ncm91cC5qcGciLCJpYXQiOjE3NDgzNjYzMDAsImV4cCI6MzMyODQzNjYzMDB9.8-eiXcBzPNuVeRyRE2yoKKDc831GO7r-aOXt3GaLDfk',
  },
  {
    name: 'Coca Cola',
    logo: 'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/CoCaCola.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9Db0NhQ29sYS5qcGciLCJpYXQiOjE3NDgzNjYzNDQsImV4cCI6MzMyODQzNjYzNDR9.pG_t522SabToxUNC__4dLhiMMHrR39iZI6BBYhDtdt0',
  },
  {
    name: 'Unilever mashreq',
    logo: 'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Unilever.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9VbmlsZXZlci5wbmciLCJpYXQiOjE3NDgzNjYzNzQsImV4cCI6MzMyODQzNjYzNzR9.QKkpyaSTBTmuR8-RiNHIBWUYhryxasP_7WHBwOut_MM',
  },
];

export default function HomeScreen() {
  return (
    <div style={styles.container}>
      <div style={styles.backgroundImage}>
        <div style={styles.scrollContent}>
          <div style={styles.heroBox}>
            <h1 style={styles.heroText}>
              Egyptian Company for Industrial & Scientific Services
            </h1>
            <p style={styles.boxText1}>
             The Egyptian Company for Industrial & Scientific Services (ECISS) is a specialized supplier of quality control and laboratory equipment in Egypt.
            </p>
          </div>

          <div style={styles.floatingSection}>
            {/* What We Do */}
            <div style={styles.floatingBox}>
              <h2 style={styles.boxTitle}>What We Do?</h2>
              <p style={styles.boxText}>
              <strong>ECISS</strong> was established in 2005, At <strong>ECISS</strong>, we provide expert solutions in <strong>testing, measuring, and laboratory systems</strong> by representing global leaders such as <strong>Mecmesin, VMA Getzmann, Lloyd Instruments</strong>, and <strong>AdvanceLab</strong>.
              </p>
              <ul style={styles.boxText}>
                <li><strong>Installation</strong> of advanced testing and lab equipment</li>
                <li><strong>Maintenance and technical support</strong> to ensure long-term performance</li>
                <li><strong>On-site training</strong> to empower your team with hands-on expertise</li>
              </ul>
              <p style={styles.boxText}>
                Whether it's force and torque testing, material analysis, mixing and dispersion, or laboratory infrastructure, ECISS is your trusted partner in precision and performance.
              </p>
              <a href="/about" style={styles.linkText}>Learn more about us →</a>
            </div>

            {/* Our Partners */}
            <div style={{ ...styles.floatingBox, ...styles.boxAlt }}>
              <h2 style={styles.boxTitle}>Our Partners</h2>
              <p style={styles.boxText}>
                Proudly partnered with global leaders in test equipment innovation.
              </p>
              <div style={styles.logoGrid}>
                {partners.map((partner, index) => (
                  <img
                    key={index}
                    src={partner.logo}
                    alt={partner.name}
                    title={partner.name}
                    style={styles.partnerLogo}
                  />
                ))}
              </div>
              <a href="/contact" style={styles.linkText}>Get in touch →</a>
            </div>

            {/* Why Choose ECISS */}
            <div style={styles.floatingBox}>
              <h2 style={styles.boxTitle}>Why Choose ECISS?</h2>
              <ul style={styles.boxText}>
                <li>✅ <strong>Authorized Agency</strong> for top international brands</li>
                <li>🛠️ <strong>Full-Service Support</strong>: Installation, maintenance, and training</li>
                <li>🎓 <strong>Technical Expertise</strong>: Certified engineers with real-world experience</li>
                <li>⏱️ <strong>Fast Response</strong>: Reliable after-sales support and rapid problem-solving</li>
                <li>🌍 <strong>Regional Understanding</strong>: Deep knowledge of local industries and needs</li>
              </ul>
              <p style={styles.boxText}>
                We don’t just supply equipment — we deliver performance, reliability, and peace of mind.
              </p>
              <a href="/services" style={styles.linkText}>Discover our solutions →</a>
            </div>

            {/* Our Customers */}
            <div style={{ ...styles.customersBox, ...styles.boxAlt }}>
              <h2 style={styles.boxTitle}>Our Customers</h2>
              <p style={styles.boxText}>
                Trusted by top-tier companies across various industries for precision testing equipment.
              </p>
              <div style={styles.logoGrid}>
                {customers.map((customer, index) => (
                  <img
                    key={index}
                    src={customer.logo}
                    alt={customer.name}
                    title={customer.name}
                    style={styles.partnerLogo}
                  />
                ))}
              </div>
              <a href="/about" style={styles.linkText}>Learn more about Customers →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    overflow: 'auto',
  },
  backgroundImage: {
    backgroundImage: `url("https://www.mecmesin.com/sites/default/files/styles/hero_sq_1920w/public/2023-06/hero-immerse_header_force_torque.png.webp?itok=-E2EZWEK")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '100px',
    paddingBottom: '100px',
  },
  scrollContent: {
    maxWidth: 1000,
    margin: '0 auto',
    padding: 20,
  },
  heroBox: {
    backgroundColor: 'rgba(0, 51, 102, 0.7)',
    padding: 30,
    borderRadius: 10,
    marginBottom: 40,
    textAlign: 'center',
    color: 'white',
  },
  heroText: {
    fontSize: '36px',
    marginBottom: 20,
  },
  floatingSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
  },
  floatingBox: {
    padding: 25,
    borderRadius: 10,
    boxShadow: '0px 2px 10px rgba(0,0,0,0.2)',
    backgroundColor: 'rgba(216, 218, 220, 0.7)',
    border:"solid rgb(0, 0, 102)"

  },
  boxAlt: {
    backgroundColor: 'rgba(216, 218, 220, 0.7)',
    border:"4px solid rgb(0, 0, 102)"
  },
  boxTitle: {
    fontSize: '1.8rem',
    marginBottom: 15,
    color: '#003366',
  },
  boxText: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: '#333',
  },
  boxText1: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: 'white',
  },
  logoGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  partnerLogo: {
    width: 100,
    height: 100,
    objectFit: 'contain',
  },
  linkText: {
    color: '#007BFF',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: 10,
    display: 'inline-block',
  },
  customersBox: {
    padding: 25,
    borderRadius: 10,
    boxShadow: '0px 2px 10px rgba(0,0,0,0.2)',
    backgroundColor: 'white',
  },
};
