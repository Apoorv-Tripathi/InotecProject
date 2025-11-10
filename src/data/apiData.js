export const API_DATA = {
  products: [

    {
      id: 1,
      name: "Digital Tyre Inflator – DI-3000",
      category: "tyre_inflator",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      description: "High-accuracy digital tyre inflator designed for fuel stations and automotive workshops.",
      specs: {
        pressure_range: "0–150 PSI",
        accuracy: "±1 PSI",
        display: "LED/LCD Backlit",
        power: "230V AC, 50 Hz",
        hose_length: "8 meters",
        system: "Microcontroller Based Auto Sensing",
        mounting: "Floor Standing"
      }
    },
    {
      id: 2,
      name: "Wall Mount Tyre Inflator – WM-2100",
      category: "wall_tyfe_inflator",
      image: "https://images.unsplash.com/photo-1592982537447-5c3c20636608?w=800&q=80",
      description: "Space-efficient wall-mounted tyre inflator ideal for workshops and petrol pumps.",
      specs: {
        pressure_range: "0–120 PSI",
        accuracy: "±1 PSI",
        display: "Backlit Digital Display",
        power: "230V AC",
        hose_length: "10 meters",
        enclosure: "MS Powder Coated Cabinet",
        installation: "Wall Mounted"
      }
    },
    {
      id: 3,
      name: "Automatic Air Compressor – AC-500",
      category: "air_compressor",
      image: "https://images.unsplash.com/photo-1581091012184-5c7b4d9c760d?w=800&q=80",
      description: "Heavy-duty automatic air compressor built for continuous industrial and automotive use.",
      specs: {
        tank_capacity: "200 Liters",
        motor_power: "3 HP / 2.2 kW",
        pressure_max: "150 PSI",
        airflow: "250 LPM",
        power_supply: "230V AC / 50 Hz",
        stage: "Single Stage",
        weight: "85 kg"
      }
    },
    {
      id: 4,
      name: "Quick Oil Changer – QOC-100",
      category: "oil_changer",
      image: "https://images.unsplash.com/photo-1581092917457-5c3c20636888?w=800&q=80",
      description: "Fast and efficient oil changing system for automotive service stations.",
      specs: {
        capacity: "80 Liters",
        suction_power: "0.8 MPa",
        tank_type: "Steel, Powder Coated",
        operation: "Pneumatic / Manual",
        mobility: "Wheeled with Handle",
        temperature_range: "0°C – 80°C"
      }
    },
    {
      id: 5,
      name: "Nitrogen Tyre Inflator – N2-7000",
      category: "nitrogen",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      description: "High-purity nitrogen generator for precise tyre inflation at fuel stations and workshops.",
      specs: {
        purity: "95–99.99%",
        flow_rate: "5–50 L/min",
        pressure_output: "0–10 bar",
        storage_tank: "Integrated 40L Tank",
        power: "750W",
        display: "Digital with Backlit",
        operation: "Auto Sensing"
      }
    },
    {
      id: 6,
      name: "Industrial Water Cooler – WC-50",
      category: "water_cooler",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c3e3?w=800&q=80",
      description: "High-capacity stainless steel water cooler ideal for retail shops, petrol pumps, and workshops.",
      specs: {
        capacity: "50 Liters/hour",
        tank_material: "SS-304",
        cooling_technology: "Compressor Cooling",
        power_consumption: "2.5 kW",
        temperature_control: "Thermostat Based",
        output_taps: "2 Taps"
      }
    },
    {
      id: 7,
      name: "LED Signage Display – LS-900",
      category: "led_signage",
      image: "https://images.unsplash.com/photo-1588332285871-1c5b5b0b2c51?w=800&q=80",
      description: "High-brightness digital LED display for fuel stations, showrooms, and commercial branding.",
      specs: {
        brightness: "6500–8000 Nits",
        resolution: "Full Color LED",
        lifespan: "100,000 Hours",
        control: "WiFi / USB / App Based",
        cabinet: "Aluminum Waterproof",
        power_input: "230V AC"
      }
    },
    {
      id: 8,
      name: "Air Canopy System – ACN-800",
      category: "air_canopy",
      image: "https://images.unsplash.com/photo-1508898578281-774ac4893a54?w=800&q=80",
      description: "Modern air canopy system commonly used at fuel stations for inflator and compressor setups.",
      specs: {
        structure: "Mild Steel Frame",
        roofing: "Polycarbonate / ACP Sheet",
        height: "8–12 Feet",
        lighting: "Integrated LED",
        installation: "On-Site Fabrication",
        durability: "Weather Resistant"
      }
    }
  ],
  services: [
    {
      id: 1,
      title: "Calibration Services",
      icon: "gauge",
      description: "Precision calibration to maintain measurement accuracy and ensure compliance with industry standards.",
      features: [
        "Accuracy testing and adjustment",
        "Certified calibration reports",
        "ISO-aligned procedures",
        "On-site calibration support",
        "Performance verification"
      ]
    },
    {
      id: 2,
      title: "Preventive Maintenance",
      icon: "shield-check",
      description: "Scheduled maintenance to enhance machine life, reduce downtime, and maintain optimal performance.",
      features: [
        "Quarterly service visits",
        "Cleaning and wear inspection",
        "Electrical and pneumatic checks",
        "Accuracy and pressure testing",
        "Lubrication and component tuning"
      ]
    },
    {
      id: 3,
      title: "Paid Service Calls",
      icon: "phone-call",
      description: "On-demand service and repairs for machines out of warranty or requiring urgent expert attention.",
      features: [
        "Breakdown inspection",
        "Fault diagnosis",
        "On-site repair support",
        "Optional calibration add-on",
        "Quick response time"
      ]
    },
    {
      id: 4,
      title: "Annual Maintenance Contract (AMC)",
      icon: "calendar-check",
      description: "Comprehensive yearly coverage including regular service, calibration, and performance inspections.",
      features: [
        "Scheduled quarterly maintenance",
        "Free calibration certificate",
        "Priority service support",
        "Performance and safety check",
        "Genuine spare usage"
      ]
    },
    {
      id: 5,
      title: "Installation & Maintenance",
      icon: "settings",
      description: "End-to-end installation, setup, and maintenance services ensuring machines operate efficiently from day one.",
      features: [
        "Site assessment",
        "Machine placement and alignment",
        "Electrical and pneumatic integration",
        "Initial performance testing",
        "Routine performance upkeep"
      ]
    },
    {
      id: 6,
      title: "Petroleum Equipment Services",
      icon: "fuel",
      description: "Specialized services for fuel stations including inflator setup, compressor systems, and essential safety checks.",
      features: [
        "Fuel station equipment integration",
        "Air line pipeline setup",
        "Inflator and compressor alignment",
        "Safety and performance audit",
        "Calibration and certification"
      ]
    },
    {
      id: 7,
      title: "Digital Tyre Inflator Solutions",
      icon: "cpu",
      description: "Supply, installation, and servicing of advanced digital tyre inflators designed for accuracy and durability.",
      features: [
        "High-precision inflator units",
        "Digital pressure monitoring",
        "Installation & setup",
        "Annual calibration support",
        "Maintenance and repairs"
      ]
    },
    {
      id: 8,
      title: "Nitrogen Tyre Inflator Solutions",
      icon: "wind",
      description: "Advanced nitrogen inflator systems engineered for stable pressure and extended tyre life.",
      features: [
        "High purity nitrogen output",
        "Automated pressure control",
        "Installation & demonstration",
        "Calibration and accuracy testing",
        "Preventive maintenance support"
      ]
    },
    {
      id: 9,
      title: "Automatic Air Compressor Services",
      icon: "air-vent",
      description: "Complete solutions for industrial and automotive air compressors including installation, repair, and periodic servicing.",
      features: [
        "Compressor installation",
        "Pressure system check",
        "Valve and motor inspection",
        "Performance load testing",
        "Fitness certification support"
      ]
    },
    {
      id: 10,
      title: "Garage Equipment Supply & Support",
      icon: "toolbox",
      description: "Supply, setup, and servicing of essential garage equipment for workshops and service stations.",
      features: [
        "Equipment selection guidance",
        "Installation and training",
        "Maintenance and repairs",
        "Spare parts availability",
        "Performance optimization"
      ]
    }
  ]
};