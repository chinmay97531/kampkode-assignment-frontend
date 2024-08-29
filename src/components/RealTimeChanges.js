import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import React from 'react';

function RealTimeChanges() {
  return (
    <div style={styles.container}>
      <div style={styles.text}>
        <h2>Real time changes</h2>
        <p style={{
          color: "gray",
          fontSize:"21px"
        }}>See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates</p>
      </div>
      <div style={styles.gradientBox}></div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '50px 20px',
    backgroundColor: '#000',
    color: '#fff',
  },
  text: {
    width: '600px',
    color: "#e8e8e8"
  },
  gradientBox: {
    width: '300px',
    height: '200px',
    background: 'linear-gradient(45deg, #ff6b6b, #f06595, #6a4c93)',
    borderRadius: '10px',
  },
};

export default RealTimeChanges;