import React, { useState, useEffect } from 'react';
import pluginsData from '@site/static/plugins/index.json';

function GroupedTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(pluginsData);

  useEffect(() => {
    const filtered = pluginsData.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.checksum.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.version.toString().includes(searchQuery)
    );
    setFilteredData(filtered);
  }, [searchQuery]);

  const groupedData = filteredData.reduce((groups, item) => {
    if (!groups[item.name]) {
      groups[item.name] = [];
    }
    groups[item.name].push(item);
    return groups;
  }, {});

  return (
    <div className='margin-top--lg'>
      Search plugins: <input
        type="text"
        placeholder="Search by name, description, version, or checksum"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='small-input margin-bottom--lg'
      />
      
      {/* Render grouped data in a table */}
      {Object.keys(groupedData).map((name) => (
        <div key={name}>
          <h3 className='header-colorful'>{name}</h3>
          <table className="small-table">
            <thead>
              <tr>
                <th>Version</th>
                <th>Author</th>
                <th>Description</th>
                <th>Checksum (SHA256)</th>
              </tr>
            </thead>
            <tbody>
              {groupedData[name].map((item, index) => (
                <tr key={index}>
                  <td>{item.version}</td>
                  <td>{item.author}</td>
                  <td>{item.description}</td>
                  <td>{item.checksum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default GroupedTable;
