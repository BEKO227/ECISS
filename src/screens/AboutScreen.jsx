import React from 'react';

const customers = [
  {
    name: 'Pepsico',
    logo: 'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/PepsiCo%20logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzY5ODgxMjhlLWRmZGUtNDdkMC1hNzk4LTU0MDk2NWNhYThhZCJ9.eyJ1cmwiOiJsb2dvcy9QZXBzaUNvIGxvZ28ucG5nIiwiaWF0IjoxNzQ0NDczOTEyLCJleHAiOjQ4OTgwNzM5MTJ9.VqKl8F63Vq74KusTzgEEiBrx1rnPIxyfoTqrrT-zAu4',
  },
  {
    name: 'Egypt Foods',
    logo: 'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/egypt-foods-group.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzY5ODgxMjhlLWRmZGUtNDdkMC1hNzk4LTU0MDk2NWNhYThhZCJ9.eyJ1cmwiOiJsb2dvcy9lZ3lwdC1mb29kcy1ncm91cC5qcGciLCJpYXQiOjE3NDQ0NzUwMzgsImV4cCI6MzMyODA0NzUwMzh9.pXLemhke74MUqryfPoEPMktp-CyVWQY7jzCn1Z-DYZ8',
  },
  {
    name: 'Coca Cola',
    logo: 'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/CoCaCola.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzY5ODgxMjhlLWRmZGUtNDdkMC1hNzk4LTU0MDk2NWNhYThhZCJ9.eyJ1cmwiOiJsb2dvcy9Db0NhQ29sYS5qcGciLCJpYXQiOjE3NDQ0NzUxMTEsImV4cCI6MzMyODA0NzUxMTF9.ohktiJVe1gDRP0rZVPUl64BjupAcR3cYMsoBfhvO_mU',
  },
  {
    name: 'Unilever mashreq',
    logo: 'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Unilever.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzY5ODgxMjhlLWRmZGUtNDdkMC1hNzk4LTU0MDk2NWNhYThhZCJ9.eyJ1cmwiOiJsb2dvcy9VbmlsZXZlci5wbmciLCJpYXQiOjE3NDQ0NzUyOTMsImV4cCI6MzMyODA0NzUyOTN9.L0SzNPuwh0nrdFjtKOGgExVl97VxGEHx2pE_W1pz2pE',
  },
  {
    name: 'Savola group',
    logo: 'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Savola%20group.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzY5ODgxMjhlLWRmZGUtNDdkMC1hNzk4LTU0MDk2NWNhYThhZCJ9.eyJ1cmwiOiJsb2dvcy9TYXZvbGEgZ3JvdXAucG5nIiwiaWF0IjoxNzQ0NTc3ODU2LCJleHAiOjMzMjgwNTc3ODU2fQ.Y5B_CsZ2kUK6OKiKReuBph6rK0FfOJSks1dXF_4Dk6o',
  },
  {
    name: 'Cadbury',
    logo: 'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Cadbury.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzY5ODgxMjhlLWRmZGUtNDdkMC1hNzk4LTU0MDk2NWNhYThhZCJ9.eyJ1cmwiOiJsb2dvcy9DYWRidXJ5LnN2ZyIsImlhdCI6MTc0NDQ3NTIyNywiZXhwIjozMzI4MDQ3NTIyN30.AQMK5ibNWq1hO3bZ8h1gENmo60V-x2knEhmHw-Tq0qQ',
  },
  {
    name:'Milano For Food industries',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Milano%20food.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzY5ODgxMjhlLWRmZGUtNDdkMC1hNzk4LTU0MDk2NWNhYThhZCJ9.eyJ1cmwiOiJsb2dvcy9NaWxhbm8gZm9vZC5wbmciLCJpYXQiOjE3NDUzNTI3NjMsImV4cCI6MzMyODEzNTI3NjN9.XTYyJfLWsMq-VZ4zMWLILWhevu6Oz5tWV3Kblq7wgI0',
  },
  {
    name:'الملكة للصناعات الغذائية',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/El%20Maleka.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzY5ODgxMjhlLWRmZGUtNDdkMC1hNzk4LTU0MDk2NWNhYThhZCJ9.eyJ1cmwiOiJsb2dvcy9FbCBNYWxla2EuanBnIiwiaWF0IjoxNzQ1MzUyOTY2LCJleHAiOjMzMjgxMzUyOTY2fQ.1gMSxCMot4MaLBzftNzh14_YSAOW2kgu7TBXJ0uRC4k',
  },
  {
    name:'Nestle',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/nestle.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzY5ODgxMjhlLWRmZGUtNDdkMC1hNzk4LTU0MDk2NWNhYThhZCJ9.eyJ1cmwiOiJsb2dvcy9uZXN0bGUuc3ZnIiwiaWF0IjoxNzQ1NDM1NzczLCJleHAiOjMzMjgxNDM1NzczfQ.NCLurjRlRabO_oTY4gD6c0fIAqB0jQAkG7o8EuGk_FU',
  },
];

export default function AboutScreen() {
  return (
    <div style={styles.background}>
      <div style={styles.scrollViewContent}>
        <div style={styles.rowLayout}>
          {/* Mission */}
          <div style={{ ...styles.sectionBox, ...styles.missionBox }}>
            <h2 style={styles.heading}>Mission</h2>
            <p style={styles.text}>
              To empower industries with world-class testing and laboratory solutions, providing exceptional service and support that ensures the highest standards of quality, safety, and efficiency.
            </p>
          </div>

          <div style={{ ...styles.sectionBox, ...styles.missionBox }}>
            <h2 style={styles.heading}>Vision</h2>
            <p style={styles.text}>
            To be the <strong>leading technical solutions provider</strong> in the region, known for our expertise, integrity, and commitment to customer success across every sector we serve.            </p>
          </div>

          {/* Customers */}
          <div style={{ ...styles.sectionBox, ...styles.partnerBox }}>
            <h2 style={styles.heading}>Our Customers</h2>
            <div style={styles.partnerList}>
              {customers.map((customer, index) => (
                <div key={index} style={styles.partnerItem}>
                  {customer.logo ? (
                    <img
                      src={customer.logo}
                      alt={customer.name}
                      style={styles.partnerLogo}
                    />
                  ) : (
                    <div style={styles.partnerLogo} />
                  )}
                  <p style={styles.partnerName}>{customer.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  background: {
    backgroundImage: `url("https://www.mecmesin.com/sites/default/files/styles/hero_sq_1920w/public/2023-06/hero-immerse_header_force_torque.png.webp?itok=-E2EZWEK")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    minHeight: '100vh',
  },
  scrollViewContent: {
    padding: 20,
    maxWidth: 1000,
    margin: '0 auto',
  },
  rowLayout: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 20,
  },
  sectionBox: {
    backgroundColor: 'rgba(216, 218, 220, 0.7)',
    padding: 20,
    borderRadius: 12,
    boxShadow: '0 4px 6px rgba(0,0,0,0.25)',
    border: '4px solid #000066',
    flex: 1,
    minWidth: 300,
  },
  missionBox: {
    marginRight: 10,
  },
  partnerBox: {
    marginLeft: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000066',
    marginBottom: 15,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  partnerList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  partnerItem: {
    width: '45%',
    textAlign: 'center',
    margin: '10px 0',
  },
  partnerLogo: {
    width: '100%',
    height: 50,
    objectFit: 'contain',
    marginBottom: 5,
  },
  partnerName: {
    fontSize: 13,
    color: '#222',
  },
};
