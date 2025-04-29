import Image from 'next/image';

const YKTrade = () => {
  return (
    <div className='relative grid grid-cols-12 gap-4'>
      <div className='col-span-7 text-[var(--heading)] font-roboto '>
        <h2 className='text-5xl font-bold mb-20'>YK TRADE</h2>
        <div className='p-10 bg-[var(--default)]/4 space-y-4 pr-[calc(2/7*100%)]'>
          <h3 className='text-3xl font-bold opacity-80'>Our Story</h3>
          <p>
            Zhejiang YIKAI Import and Export Co., Ltd. specializes in hydraulic systems for construction machinery, focusing on supplying core components such as pumps, cylinders,
            and control valves for dump trucks, forklifts, and excavators. We have established a global hydraulic system service network covering research and development,
            production, and sales, with business extending to over 30 countries worldwide.
          </p>

          <h4 className='text-2xl font-bold opacity-80'>Dual Manufacturing Engines</h4>

          <div className='pl-4 space-y-6 '>
            <div className='space-y-2'>
              <h4 className='text-xl font-bold opacity-80'>Hangzhou Xizi Ship Hydraulic Equipment Manufacturing Co., Ltd.</h4>
              <ul className='space-y-2'>
                <li className='flex items-center gap-2'>
                  <i className='bi bi-check-circle text-xl text-[var(--accent)]'></i>
                  <span>30 years of technical expertise in cylinders and brackets, utilizing five-axis CNC machining and laser cladding processes</span>
                </li>
                <li className='flex items-center gap-2'>
                  <i className='bi bi-check-circle text-xl text-[var(--accent)]'></i>
                  <span>Innovative stepped sealing structure design, with fatigue life exceeding 150,000 cycles</span>
                </li>
              </ul>
            </div>

            <div className='space-y-2'>
              <h4 className='text-xl font-bold opacity-80'>Zhejiang Xinzheng Machinery Manufacturing Co., Ltd.</h4>
              <ul className='space-y-2'>
                <li className='flex items-center gap-2'>
                  <i className='bi bi-check-circle text-xl text-[var(--accent)]'></i>
                  <span>Hydraulic gear pump precision meets DIN Grade 8 standards, with volumetric efficiency &gt;92%</span>
                </li>
                <li className='flex items-center gap-2'>
                  <i className='bi bi-check-circle text-xl text-[var(--accent)]'></i>
                  <span>Certified with TS/CE/ISO 9001 triple certification systems</span>
                </li>
              </ul>
            </div>
          </div>
          <p>
            Zhejiang YIKAI Import and Export Co., Ltd. adheres to the philosophy of &quot;Quality Builds Brand, Service Wins the Future.&quot; We continuously improve our technical
            and service capabilities, constantly innovate, expand our business boundaries, and are committed to becoming a leading global supplier of hydraulic system products for
            construction machinery, injecting strong momentum into the development of the construction machinery industry.
          </p>
        </div>
      </div>

      <div className='col-span-5 '>
        <div className='w-full aspect-[4/3] scale-[calc(7/5)] translate-y-[20%] -translate-x-[20%] relative'>
          <Image src='/images/about/about.png' alt='about' fill className='object-cover pl-4' />
        </div>
      </div>
    </div>
  );
};

export default YKTrade;
