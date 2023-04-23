import os from 'os';
import si from 'systeminformation';

const frequencyInSeconds = Number(process.argv[2]);

setInterval(async () => {
    const osInfo = {
        name: os.type(),
        arch: os.arch(),
        user: os.userInfo().username,
    };

    const cpuInfo = {
        cores: await si.cpu(),
        temperature: await si.cpuTemperature(),
    };

    const graphicsInfo = await si.graphics();

    const memoryInfo = await si.mem();

    const batteryInfo = await si.battery();

    console.log(`Operating system: ${osInfo.name} ${osInfo.arch}`);
    console.log(`Current user name: ${osInfo.user}`);
    console.log(`CPU cores: ${JSON.stringify(cpuInfo.cores.model)}`);
    console.log(`CPU temperature: ${JSON.stringify(cpuInfo.temperature)}°C`);
    console.log(`Graphics controllers: ${JSON.stringify(graphicsInfo.controllers)}`);
    console.log(`Memory: Total ${Math.round(memoryInfo.total / (1024 * 1024 * 1024))}GB, Used ${Math.round(memoryInfo.used / (1024 * 1024 * 1024))}GB, Free ${Math.round(memoryInfo.free / (1024 * 1024 * 1024))}GB`);

    if (batteryInfo.hasBattery) {
        console.log(`Battery: ${batteryInfo.percent}% remaining, ${batteryInfo.timeRemaining} remaining`);
    } else {
        console.log(`Battery: not available`);
    }
}, frequencyInSeconds * 1000);
