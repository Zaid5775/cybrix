// ScanResultsComponent.js

import React from 'react';
import './ScanResultsComponent.css'; // Add CSS file

const ScanResultsComponent = ({ scanResults }) => {
    const hasSuspiciousOrMalicious = scanResults["Suspicious Scans"] > 0 || scanResults["Malicious Scans"] > 0;
    
    return (
        <div className={`scan-results ${hasSuspiciousOrMalicious ? 'red' : 'green'}`}>
            <h1>Scan Results</h1>
            <p>URL: {scanResults.URL}</p>
            <p>Scan ID: {scanResults["Scan ID"]}</p>
            <p>Scan Date: {scanResults["Scan Date"]}</p>
            {hasSuspiciousOrMalicious && (
                <div>
                    <p>Suspicious : {scanResults["Suspicious Scans"]}</p>
                    <p>Malicious: {scanResults["Malicious Scans"]}</p>
                </div>
            )}
            {!hasSuspiciousOrMalicious && ( <div> 
            <p className="green-text">Suspicious: {scanResults["Suspicious Scans"]}</p> 
            <p className="green-text">Malicious: {scanResults["Malicious Scans"]}</p> 
            <p className="green-text">{scanResults["Harmless Scans"]}% Harmless</p> 
            </div>)}
        </div>
    );
}

export default ScanResultsComponent;
