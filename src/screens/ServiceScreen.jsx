import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

const categoryMap = {
  'Force & Torque Testing': ['Tourqe devices','Force devices', 'Accessories', 'Gauges'],
  'Disolvers & Milling Machines': ['Production', 'Laboratory', 'Accessories'],
  'Food & beverage package material Testing': ['Devices', 'Tools'],
  'Paint and Ink Testing': ['Devices', 'Tools'],
  'Food Technology Corporation (FTC)': ['Texture Analyzers'],
  'Paper and Cardboard Testing': ['Texture Analyzers'],
};

const websiteLinks = {
  'Force & Torque Testing': 'https://www.mecmesin.com/',
  'Disolvers & Milling Machines': 'https://www.vma-getzmann.com/',
  'Food & beverage package material Testing': 'https://advancelab.com/',
  'Paint and Ink Testing': 'https://www.lloydsresearch.com/',
  'Food Technology Corporation (FTC)': 'https://www.foodtechcorp.com/',
  'Paper and Cardboard Testing':'https://www.regmed.com.br/en/products',
};

const categoryToTableMap = {
  Accessories: {
    'Disolvers & Milling Machines': 'Accessories_Vma',
  },
  Devices: {
    'Food & beverage package material Testing': 'Devices_Advancelab',
    'Paint and Ink Testing': 'Devices_lloyds',
  },
  Tools: {
    'Food & beverage package material Testing': 'Tools_AdvanceLab',
    'Paint and Ink Testing': 'Tools_lloyds',
  },
  'Texture Analyzers': {
    'Food Technology Corporation (FTC)': 'Texture_Analyzers',
  },
  Laboratory: {
    'Disolvers & Milling Machines': 'Laboratory',
  },
  Production: {
    'Disolvers & Milling Machines': 'Production',
  },
  'Tourqe devices':{
    'Force & Torque Testing':'Tourqe devices',
  },
  'Force devices':{
    'Force & Torque Testing':'Force devices',
  }
};

const getTableName = (category, testType) => {
  return categoryToTableMap[category]?.[testType] || category;
};

export default function ServicesScreen() {
  const [selectedTestType, setSelectedTestType] = useState('Force & Torque Testing');
  const [selectedCategory, setSelectedCategory] = useState('Devices');
  const [searchQuery, setSearchQuery] = useState('');
  const [serviceData, setServiceData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const allCategories = Array.from(new Set(Object.values(categoryMap).flat()));

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        setIsLoading(true);
        const promises = allCategories.map((category) => {
          const tableName = getTableName(category, selectedTestType);
          return supabase.from(tableName).select('*');
        });

        const results = await Promise.all(promises);

        const dataMap = {};
        results.forEach((res, index) => {
          const category = allCategories[index];
          if (res.error) {
            console.error(`❌ Error fetching data for ${getTableName(category, selectedTestType)}:`, res.error);
          } else {
            dataMap[category] = res.data;
          }
        });

        setServiceData(dataMap);
        setIsLoading(false);
      } catch (error) {
        console.error('❌ General Error:', error);
        setIsLoading(false);
      }
    };

    fetchServiceData();
  }, [selectedTestType]);

  useEffect(() => {
    const defaultCategory = categoryMap[selectedTestType][0];
    setSelectedCategory(defaultCategory);
  }, [selectedTestType]);

  const filteredServices = searchQuery
    ? serviceData[selectedCategory]?.filter((item) =>
        item.Description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : serviceData[selectedCategory];

  const parseDescription = (text = '') => {
    const urlRegex = /(\bhttps?:\/\/[^\s]+)/gi;
    return text.split('\n').map((line, index) => (
      <div key={index}>
        {line.split(urlRegex).map((part, i) =>
          urlRegex.test(part) ? (
            <a key={i} href={part} target="_blank" rel="noopener noreferrer" style={{ color: '#0000EE' }}>
              {part}
            </a>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </div>
    ));
  };

  if (isLoading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <p style={{ marginTop: 10 }}>Loading services...</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Store</h1>

      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.searchBar}
      />

      <div style={styles.dropdownContainer}>
        <select
          value={selectedTestType}
          onChange={(e) => setSelectedTestType(e.target.value)}
          style={styles.dropdown}
        >
          {Object.keys(categoryMap).map((testType) => (
            <option key={testType} value={testType}>
              {testType}
            </option>
          ))}
        </select>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={styles.dropdown}
        >
          {categoryMap[selectedTestType].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <p style={styles.note}>
        Note: These are not all the products. For more, please visit the manufacturing company{' '}
        <a
          href={websiteLinks[selectedTestType]}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.websiteLink}
        >
          official website
        </a>.
      </p>

      {filteredServices?.length > 0 ? (
        <div style={styles.servicesContainer}>
          {filteredServices
            .slice()
            .sort((a, b) => a.id - b.id)
            .map((service, index) => {
              const imageURL = service.Pic?.startsWith('http')
                ? service.Pic
                : `https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/public/devices/${service.Pic}`;

              return (
                <div key={index} style={styles.serviceCard}>
                  <div style={styles.imageContainer}>
                    <img
                      src={imageURL}
                      alt={service.Name}
                      style={styles.image}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/fallback-image.jpg';
                      }}
                    />
                  </div>
                  <div style={styles.serviceInfo}>
                    <h3 style={styles.serviceName}>{service.Name}</h3>
                    <div style={styles.description}>{parseDescription(service.Description)}</div>
                    <p style={styles.provider}>
                      Provider: {service.ProviderCO || service['ProviderCO.'] || 'Unknown'}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <p style={styles.noResultsText}>No results found for "{searchQuery}"</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#fafafa',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    textAlign: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000066',
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    width: '100%',
    maxWidth: 400,
    padding: '0 10px',
    fontSize: 16,
    color: '#000000',
    borderRadius: 10,
    border: '1px solid #000066',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  dropdownContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    marginBottom: 20,
  },
  dropdown: {
    padding: '10px',
    fontSize: 16,
    color: '#000000',
    borderRadius: 8,
    border: '1px solid #000066',
    backgroundColor: '#f1f1f1',
    cursor: 'pointer',
    width: '250px',
  },
  note: {
    fontSize: 14,
    color: '#444',
    marginBottom: 20,
    textAlign: 'center',
    maxWidth: 600,
  },
  websiteLink: {
    color: '#0000EE',
    textDecoration: 'underline',
  },
  servicesContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  serviceCard: {
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: '250px',
    padding: '15px',
    borderRadius: 12,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    flex: '1 0 250px',
  },
  imageContainer: {
    height: '150px',
    width: '100%',
    marginBottom: '15px',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  serviceInfo: {
    marginTop: '10px',
  },
  serviceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginTop: '5px',
    textAlign: 'justify',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    whiteSpace: 'pre-wrap',
  },
  provider: {
    fontSize: 14,
    color: '#333',
    marginTop: '5px',
  },
  brochureLink: {
    display: 'inline-block',
    marginTop: '8px',
    fontSize: 14,
    color: '#0000EE',
    textDecoration: 'underline',
  },
  noResultsText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
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

// Inject spinner animation keyframes
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`, styleSheet.cssRules.length);
