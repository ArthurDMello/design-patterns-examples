class Device {
    turnOn() {}
    turnOff() {}
  }
  
  class TV extends Device {
    turnOn() {
      console.log("TV ligada.");
    }
    turnOff() {
      console.log("TV desligada.");
    }
  }
  
  class Radio extends Device {
    turnOn() {
      console.log("Rádio ligado.");
    }
    turnOff() {
      console.log("Rádio desligado.");
    }
  }
  
  class RemoteControl {
    constructor(device) {
      this.device = device;
    }
  
    pressPowerButton(on) {
      if (on) this.device.turnOn();
      else this.device.turnOff();
    }
  }
  
  class AdvancedRemote extends RemoteControl {
    mute() {
      console.log("Dispositivo mutado.");
    }
  }
 
  const tv = new TV();
  const tvRemote = new RemoteControl(tv);
  tvRemote.pressPowerButton(true);
  tvRemote.pressPowerButton(false);
  
  const radio = new Radio();
  const radioRemote = new RemoteControl(radio);
  radioRemote.pressPowerButton(true);
  radioRemote.pressPowerButton(false);
  