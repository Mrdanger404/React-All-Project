import { useState } from "react"


const useSetData = () => {
    const [selectedProduct, setSelectedProduct] = useState({
        product: '',
        type: ''
    })
    const [bikeDetails, setBikeDetails] = useState({
        engine: '',
        power: '',
        torque: '',
        mileage: '',
        brakes: '',
        tyreType: ''
    })

    const [laptopDetails, setLaptopDetails] = useState({
      processor: '',
      processorModel: '',
      generation: '',
      ProcessorFrequency: '',
      ProcessorCore: '',
      ProcessorThread: '',
      CPUCache: '',
      DisplaySize: '',
      DisplayType: '',
      DisplayResolution: '',
      TouchScreen: '',
      DisplayFeatures: '',
      RAM: '',
      RAMType: '',
      TotalRAMSlot: '',
      StorageType: '',
      StorageCapacity: '',
      ExtraM2Slot: '',
      SupportedSSDType: '',
      StorageUpgrade: '',
      GraphicsModel: '',
      GraphicsMemory: '',
      KeyboardType: '',
      KeyboardFeatures: '',
      TouchPad: '',
      WebCam: '',
      Speaker: '',
      Microphone: '',
      AudioFeatures: '',
      OpticalDrive: '',
      CardReader: '',
      DisplayPort: '',
      HDMIPort: '',
      USB2Port: '',
      USB3Port: '',
      ThunderboltPort: '',
      Headphone: '',
      LAN: '',
      WiFi: '',
      Bluetooth: '',
      Fingerprint: '',
      OperatingSystem: '',
      
    })

    const [mobileDetails, setMobileDetails] = useState({
      displaySize: '',
      displayType: '',
      displayResolution: '',
      displayFeature: '',
      chipset: '',
      cpuType: '',
      cpuSpeed: '',
      gpu: '',
      ram: '',
      storage: '',
      cardSlot: '',
      rearCamResolution: '',
      rearCamFeature: '',
      rearCamRecording: '',
      frontCamResolution: '',
      audio:'',
      sim: '',
      network: '',
      wifi: '',
      bluetooth: '',
      gps: '',
      usb: '',
      otg: '',
      audioJack: '',
      os: '',
      fingerprint: '',
      sensors: '',
      batteryType: '',
      dimension: '',
      bodyMaterial: '',
      color: '',
      warranty: ''
    })
    const [id, setId] = useState("");
    const [productName, setProductName] = useState("");
    const [productValue, setProductValue] = useState("");
    const [productImage, setProductImage] = useState(null);
    const [details, setDetails] = useState("")

    const [offerId, setOfferId] = useState("");
    const [offerImage, setOfferImage] = useState(null);


  return {
    selectedProduct, setSelectedProduct,
    bikeDetails, setBikeDetails,
    laptopDetails, setLaptopDetails,
    mobileDetails, setMobileDetails,
    id, setId,
    productName, setProductName,
    productValue, setProductValue,
    productImage, setProductImage,
    details, setDetails,
    offerId, setOfferId,
    offerImage, setOfferImage}
}

export default useSetData