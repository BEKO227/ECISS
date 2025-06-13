import React from 'react';
import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

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
  {
    name:'Regmed',
    logo:'https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/Regmed.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NjODkxNTMxLWNjOTctNDM0OS05NThkLWZlYjJkYWE1Yjg4ZCJ9.eyJ1cmwiOiJsb2dvcy9SZWdtZWQucG5nIiwiaWF0IjoxNzQ4MzY4NjczLCJleHAiOjMzMjg0MzY4NjczfQ.0CoAmfcxWpatnKv39RFtcK9S_-8JwE4x6imoI_5OHsg',
  },
];

export default function ContactScreen() {
  const [contact, setContact] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      setisLoading(true);
      const { data, error } = await supabase
        .from('Contacts_info')
        .select('Email, Phone, Telephone, Address')
        .single(); // because only one row expected

      if (error) {
        setError(error.message);
      } else {
        setContact(data);
      }
      setisLoading(false);
    }

    fetchContact();
  }, []);
  
  if (isLoading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <p style={{ marginTop: 10 }}>Loading info...</p>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage:
          'url("https://www.mecmesin.com/sites/default/files/styles/hero_sq_1920w/public/2023-06/hero-immerse_header_force_torque.png.webp?itok=-E2EZWEK")',
        backgroundSize: 'cover',
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <div style={styles.scrollViewContent}>
        {/* Contact Info Section */}
        <div style={styles.contactBox}>
          <h2 style={styles.heading}>Contact Us</h2>
          <p style={styles.text}>📧 Email: {contact.Email}</p>
          <p style={styles.text}>📞 Phone: {contact.Phone}</p>
          <p style={styles.text}>☎️ Telephone: {contact.Telephone}</p>
          <p style={styles.text}>📍 Address: {contact.Address}</p>
        </div>

        {/* Partners and Map Section Inline */}
        <div style={styles.inlineContainer}>
          {/* Our Partners */}
          <div style={{ ...styles.contactBox, flex: 1, marginRight: '10px' }}>
            <h2 style={styles.heading}>Our Partners</h2>
            <div style={styles.partnerList}>
              {partners.map((partner, index) => (
                <div key={index} style={styles.partnerItem}>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    style={styles.partnerLogo}
                  />
                  <p style={styles.partnerName}>{partner.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div style={{ ...styles.contactBox, flex: 1, marginLeft: '10px' }}>
            <h2 style={styles.heading}>Find Us on the Map</h2>
            <div style={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d538.6497590768779!2d31.308056504468524!3d30.090523632695216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e2da38974cf%3A0x6cf4555bdca89163!2z2KfZhNi02LHZg9ipINin2YTZhdi12LHZitipINmE2YTYrtiv2YXYp9iqINin2YTYudmE2YXZitipINin2YTYtdmG2KfYudmK2Kk!5e0!3m2!1sar!2seg!4v1745942441968!5m2!1sar!2seg"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  scrollViewContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  inlineContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%',
    maxWidth: '1200px',
    marginBottom: '30px',
    gap: '20px',
    flexWrap: 'wrap', // Makes it responsive
  },
  contactBox: {
    backgroundColor: 'rgba(216, 218, 220, 0.7)',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.25)',
    borderWidth: '4px',
    borderColor: '#000066',
    borderStyle: 'solid',
    minWidth: '300px',
    marginBottom: '20px',
    width:'78%',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000066',
    marginBottom: '15px',
    textAlign: 'center',
  },
  text: {
    fontSize: '16px',
    color: '#333',
    textAlign: 'center',
    marginBottom: '10px',
  },
  partnerList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  partnerItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
    width: '45%',
  },
  partnerLogo: {
    width: '100%',
    height: '50px',
    marginBottom: '5px',
    objectFit: 'contain',
  },
  partnerName: {
    fontSize: '14px',
    textAlign: 'center',
    color: '#333',
  },
  mapContainer: {
    width: '100%',
    height: '450px',
    overflow: 'hidden',
    borderRadius: '12px',
  },
  loadingContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  spinner: {
    width: 40,
    height: 40,
    border: '5px solid #ccc',
    borderTop: '5px solid #000066',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
};
