import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lpu.medicure',
  appName: 'MediCure',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
