import './App.css';
import Pricing from './components/Pricing';

function App() {
  let data = [
    {
      title: "free",
      value: "$0/Month",
      features: [
        { features: "Single User", isAvailable: true },
        { features: "50 GB Storage", isAvailable: true },
        { features: "Unlimited Public Projects", isAvailable: true },
        { features: "Community Access", isAvailable: true },
        { features: "Unlimited Private Projects", isAvailable: false },
        { features: "Dedicated Phone Support", isAvailable: false },
        { features: "Free Subdomain", isAvailable: false },
        { features: "Monthly Status Report", isAvailable: false },
      ],  button: "button",
      isAvailable: true 

    },
    {
      title: "plus",
      value: "$9/Month",
      features: [
        { features: "5 Users", isAvailable: true },
        { features: "50 GB Storage", isAvailable: true },
        { features: "Unlimited Public Projects", isAvailable: true },
        { features: "Community Access", isAvailable: true },
        { features: "Unlimited Private Projects", isAvailable: true },
        { features: "Dedicated Phone Support", isAvailable: true },
        { features: "Free Subdomain", isAvailable: true },
        { features: "Monthly Status Report", isAvailable: false },
      
      ],  button: "button",
      isAvailable: true 
    },
    {
      title: "pro",
      value: "$49/Month",
      features: [
        { features: "unlimited Users", isAvailable: true },
        { features: "50 GB Storage", isAvailable: true },
        { features: "Unlimited Public Projects", isAvailable: true },
        { features: "Community Access", isAvailable: true },
        { features: "Unlimited Private Projects", isAvailable: true },
        { features: "Dedicated Phone Support", isAvailable: true },
        { features: "Free Subdomain", isAvailable: true },
        { features: "Monthly Status Report", isAvailable: true },
        
      ],
       button: "button",
        isAvailable: true 
    }
  ];

  return (
    <>
    <div className='row mx-0' style={{ background: "blue" }}>
     
      {data.map((item, index) => (
         <div key={index} className='col-xl-4'>
        <Pricing  title={item.title} value={item.value} features={item.features} button={item.button} isAvailable={item.isAvailable}/>
        </div>
      ))}

    
    </div>
      
    </>
  )
}


export default App
