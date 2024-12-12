"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { useState } from 'react';
import RippleButton from "@/components/ui/ripple-button";
import ShinyButton from "@/components/ui/shiny-button";
import { Divide } from "lucide-react";

export default function Home() {
  const words: string[] = ["Stimulants","Opioids","Analgesics","Gamma-hydroxybutyrate","Party Drugs","Hallucinogens","Synthetic drugs","Benzodiazepines","Prescription Drugs"]
  const stringofwords: string[] = ["Consequences of doing drugs in Singapore","Consequences of taking drugs in Singapore","Consequences of bringing drugs into Singapore"]
  const videos = [    
    { id: 'y5A4sbCSuhQ', title: 'Down the Rabbit Hole'},
    { id: 'cMujhh2Hhgc', title: 'Drugs Being Closely Monitored'},
    { id: 'GL1JdIeoo4A', title: 'Deadly War on Drugs'},
  ];  

  // State to track the current video index  
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Function to go to the next video
  const nextVideo = () => {    
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };
    
    const prevVideo = () => {    
        setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };
  return (
    <div> 
      <div className=""> 
        <div className="flex flex-col justify-center h-dvh">   
          <h1 className="font-bold text-5xl text-center"> Don't misuse 
            <FlipWords words={words}/> 
          </h1> <br/> 
          <p className="text-sm text-center animate-bounce"> THEY HAVE NEAGTIVE IMPACTS ON YOU AND LAST LONG  </p> 
        </div> 
      </div>

      <div className="flex flex-col justify-center items-center h-screen bg-purple-100 bg-cover bg-center" style={{ backgroundImage: "url(data:image/jpeg;base64,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)" }}> 
        <p className="font-bold text-white text-left text-3xl mb-4">
            <FlipWords words = {stringofwords} className="text-white" />
        </p> 
          <table className="border border-transparent bg-transparent w-full max-w-4xl mt-4"> 
            <tbody> 
              <tr> 
                <td className="font-bold py-2 px-4 border-b text-white">Consequences for taking drugs in singapore</td> 
                <td className="py-2 px-4 border-b text-white"> 
                  <span className="font-bold text-white"> 
                  Consumption of controlled drugs is an offence. If found guily, one may face imprisonment of a minimum of 1 year and up to 10 years, or a fine not exceeding S$20,000 or both.
                  </span> 
                </td> 
              </tr> 
              <tr> 
                <td className="font-bold py-2 px-4 border-b text-white">How drugs affect our physical body</td> 
                <td className="py-2 px-4 border-b text-white"> 
                  <span className="font-bold text-white"> 
                  People with addictions often have one or more associated health issues, which could include heart diseases, stroke, or cancer. The damaging effects of long-term drug use can be shown through imaging scans, chest X-rays, and blood tests.
                  </span>
                </td> 
              </tr> 
              <tr> 
                <td className="font-bold py-2 px-4 border-transparent text-white">How drugs affect our mental health</td> 
                <td className="spy-2 px-4 border-transparent text-white"> 
                  <span className="font-bold text-white"> 
                  Drugs may cause or worsen mood swings, despession, paranoia, insomnia, hallucinations, anxieties and more
                  </span> 
                  <br />  
                </td> 
              </tr> 
            </tbody> 
          </table> 

  <br></br>     
  <br></br>   
          
<div>
<a href="https://www.cnb.gov.sg/docs/default-source/educational-resources-documents/pde-info-kit-faq.pdf" >
        <ShinyButton className="bg-blue-400">Learn More</ShinyButton>
        </a>

</div>


      </div>

      {/* New Video Section */} 
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100"> 
        <h2 className="font-bold text-4xl text-center text-gray-800 mb-6"> 
          More about Drug Abuse... 
        </h2> 
        <p className="font-bold text-3xl text-center text-gray-800 mb-4">{videos[currentVideoIndex].title}</p> 
        <div className="flex items-center"> 
          {/* Previous Button */} 
          <button  
            onClick={prevVideo}  
             className="px-4 py-2 text-xl bg-gray-800 text-white rounded hover:bg-gray-700" 
          > 
            &lt; {/* Left Arrow */} 
          </button> 
 
          <iframe  
            style={{ width: '800px', height: '350px' }} 
            className="mx-4" 
            src={`https://www.youtube.com/embed/${videos[currentVideoIndex].id}`}  
            title="YouTube video player"  
            frameBorder="0"  
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  
            allowFullScreen> 
          </iframe> 
 
          {/* Next Button */} 
          <button  
            onClick={nextVideo}  
             className="px-4 py-2 text-xl bg-gray-800 text-white rounded hover:bg-gray-700" 
          > 
            &gt; {/* Right Arrow */} 
          </button> 
        </div> 
        </div> 

      <div className="flex flex-col justify-center items-center h-screen bg-blue-100"> 
        <p className="font-bold text-3xl text-center text-blue-800 mb-4">Get Help</p> 
        <p className="text-md text-center text-gray-800 max-w-md"> 
        <strong>Singapore Anti-Narcotics Association (SANA)</strong><br /> 
        Tel: 6732 1122 (Sengkang branch) OR 9847 5102 (Lakeside branch)<br /><br /> 
 
        <strong>Samaritans of Singapore (SOS)</strong><br /> 
        Tel: 1800 221 4444* (24 hours daily)<br /><br /> 
 
        <strong>Teen Challenge (Singapore)</strong><br /> 
        Tel: 6793 7933 (Monday–Friday, 9am–6pm)<br /><br /> 
 
        <strong>National Addictions Management Services (NAMS)</strong><br /> 
        Tel: 6732 6837 (Mon-Sun inclusive of PHs, 8am – 11pm)<br /><br /> 

        <strong> WE CARE Community Services </strong><br /> 
        Tel: 3165 8017 (Mondays to Fridays. Voicemail after hours, 10 am - 7 pm)<br /><br /> 
 
        <em>If you are inneed drug-related assistance, please call the Central Narcotics Bureau (CNB) hotline at 1800 325 6666*.</em> 
        </p> 
      </div>

      </div>

  );
}

