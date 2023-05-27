import os from "os"

function getLocalIpAddress() {
    const interfaces = os.networkInterfaces();
    for (const interfaceName in interfaces) {
      const interfaceData = interfaces[interfaceName];
      if(!interfaceData) return ""
      for (const data of interfaceData) {
        if (data.family === 'IPv4' && !data.internal) {
          return data.address;
        }
      }
    }
}

export default getLocalIpAddress