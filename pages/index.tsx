import SharedButton from '@/lib/submodules_library_test/src/app/SharedButton';
import styles from './index.module.css';
import NetworkButon from '@/lib/network-submodule/src/NetworkButton';
import { useState } from 'react';

export default function Home() {
  const [mainCounter, setMainCounter] = useState(0);
  const [libraryCounter, setLibraryCounter] = useState(0);
  const [networkCounter, setNetworkCounter] = useState(0);
  return (
    <>
      <div className={styles.container}>
        <div>
          <h1>{`Main Counter: ${mainCounter}`}</h1>
          <button
            onClick={() => {
              setMainCounter(mainCounter + 1);
            }}
          >
            Main Button
          </button>
        </div>

        <div>
          <h1>{`Library Counter: ${libraryCounter}`}</h1>
          <SharedButton
            onClick={() => {
              setLibraryCounter(libraryCounter + 1);
              setMainCounter(mainCounter + 1);
            }}
          />
        </div>
        <div>
          <h1>{`Network Counter: ${networkCounter}`}</h1>
          <NetworkButon
            onClick={() => {
              setNetworkCounter(networkCounter + 1);
              setMainCounter(mainCounter + 1);
            }}
          />
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button
          onClick={() => {
            setNetworkCounter(0);
            setMainCounter(0);
            setLibraryCounter(0);
          }}
        >
          Reset All Counters
        </button>
      </div>
    </>
  );
}
