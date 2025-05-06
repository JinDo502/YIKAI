const Map = () => {
  return (
    <div className='grid grid-cols-12 gap-4 px-4 md:px-0'>
      <div className='col-span-12 md:col-span-6 flex flex-col gap-2 md:gap-4'>
        <div className='shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-lg p-8'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='flex flex-col items-center justify-center border-2 border-dotted border-[var(--accent)] rounded-full h-14 w-14'>
              <i className='bi bi-geo-alt text-2xl text-[var(--accent)]'></i>
            </div>
            <h3 className='text-xl font-bold text-[var(--heading)]'>Address 1</h3>
            <p className='text-sm text-[var(--heading)]'>Hangzhou Xizi Shipping Hydraulic Pressure Engineering Machinery Limited Company</p>
          </div>
        </div>

        <div className='shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-lg'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.081693127346!2d120.25727337458557!3d30.4054240013793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x344ca22e81298875%3A0xf8bf6da951dc6b51!2sHangzhou%20Xizi%20Shipping%20Hydraulic%20Pressure%20Engineering%20Machinery%20Limited%20Company!5e0!3m2!1sen!2smy!4v1733659908719!5m2!1sen!2smy'
            style={{ border: '0', width: '100%', height: '400px' }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </div>

      <div className='col-span-12 md:col-span-6 flex flex-col gap-2 md:gap-4 '>
        <div className='shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-lg p-8'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='flex flex-col items-center justify-center border-2 border-dotted border-[var(--accent)] rounded-full h-14 w-14'>
              <i className='bi bi-geo-alt text-2xl text-[var(--accent)]'></i>
            </div>
            <h3 className='text-xl font-bold text-[var(--heading)]'>Address 2</h3>
            <p className='text-sm text-[var(--heading)]'>Zhejiang Xinzheng Machinery Manufacturing Co., Ltd.</p>
          </div>
        </div>
        <div className='shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-lg'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27364.397030569216!2d119.94483609207767!3d30.98304809727673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b4a4d624c6dc87%3A0x1ef4777d940674e8!2sHongqiaozhen%2C%20Changxing%20County%2C%20Huzhou%2C%20Zhejiang%2C%20China%2C%20313106!5e0!3m2!1sen!2smy!4v1733660165461!5m2!1sen!2smy'
            style={{ border: '0', width: '100%', height: '400px' }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </div>
    </div>
  );
};

export default Map;
