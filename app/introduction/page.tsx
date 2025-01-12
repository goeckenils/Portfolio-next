// Suggested code may be subject to a license. Learn more: ~LicenseLog:3376522749.
"use client"
import Image from 'next/image'

interface WorkProps {}

const Intro: React.FC<WorkProps> = () => {
  return (
    <main className="h-screen">
     <div className="flex h-screen">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
        <div 	

        className="pt-72 aspect-w-3 aspect-h-4 overflow-hidden rounded-lg">
            <div         style={{paddingTop: 240}} >
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, arcu et faucibus condimentum, nibh erat volutpat
            lectus, id efficitur diam tellus non magna.
          </p>
            </div>

        </div>
          {/* Ensure the image container takes the full height */}
          <div className="relative h-full w-full"> 
            <Image fill src="/images/silver-image.png" alt="picture of me" 	style={{objectFit: "cover"}} />
         </div>
        </div>

      </div>
    </main>
  );
};

export default Intro;
