import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards'

import {EffectCards} from 'swiper/modules';

const Project = () => {
  return (
    <div className='h-screen flex items-center justify-center' id='project'>
      <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className='h-[500px] w-[250px] sm:w-[500px]'>
        <SwiperSlide className='bg-red-600 rounded-3xl '>
          <div className='flex flex-col items-center justify-center h-[450px] w-full sm:w-[400px] m-auto my-5'>
            <p className='py-3'>Ecommerce</p>
            <img src='https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-project-management-png-image_5687733.png' alt='project' className='h-[500px] w-[290px] sm:w-[490px] p-5 ' />
            <a href='facebook.com' className='px-10 py-2 text-center bg-slate-200 rounded-3xl border border-solid border-black transition hover:bg-transparent duration-500' >Preview</a>
          </div>
        </SwiperSlide>

        <SwiperSlide className='bg-red-600 rounded-3xl '>
          <div className='flex flex-col items-center justify-center h-[450px] w-full sm:w-[400px] m-auto my-5'>
            <p className='py-3'>Ecommerce</p>
            <img src='https://cdn-icons-png.flaticon.com/512/1087/1087815.png' alt='project' className='h-[500px] w-[290px] sm:w-[490px] p-5' />
            <a href='facebook.com' className='px-10 py-2 text-center bg-slate-200 rounded-3xl border border-solid border-black transition hover:bg-transparent duration-500' >Preview</a>
          </div>
        </SwiperSlide>

        <SwiperSlide className='bg-red-600 rounded-3xl '>
          <div className='flex flex-col items-center justify-center h-[450px] w-full sm:w-[400px] m-auto my-5'>
            <p className='py-3'>Ecommerce</p>
            <img src='https://cdn-icons-png.flaticon.com/512/5956/5956592.png' alt='project' className='h-[500px] w-[290px] sm:w-[490px] p-5' />
            <a href='facebook.com' className='px-10 py-2 text-center bg-slate-200 rounded-3xl border border-solid border-black transition hover:bg-transparent duration-500' >Preview</a>
          </div>
        </SwiperSlide>

        <SwiperSlide className='bg-red-600 rounded-3xl '>
          <div className='flex flex-col items-center justify-center h-[450px] w-full sm:w-[400px] m-auto my-5'>
            <p className='py-3'>Ecommerce</p>
            <img src='https://img.pikbest.com/png-images/startup-project-vector-graphic-element_1403059.png!f305cw' alt='project' className='h-[500px] w-[290px] sm:w-[490px] p-5' />
            <a href='facebook.com' className='px-10 py-2 text-center bg-slate-200 rounded-3xl border border-solid border-black transition hover:bg-transparent duration-500' >Preview</a>
          </div>
        </SwiperSlide>

        <SwiperSlide className='bg-red-600 rounded-3xl '>
          <div className='flex flex-col items-center justify-center h-[450px] w-full sm:w-[400px] m-auto my-5'>
            <p className='py-3'>Ecommerce</p>
            <img src='https://espaitic.upc.edu/en/shared/icons/project.png' alt='project' className='h-[500px] w-[290px] sm:w-[490px] p-5' />
            <a href='facebook.com' className='px-10 py-2 text-center bg-slate-200 rounded-3xl border border-solid border-black transition hover:bg-transparent duration-500' >Preview</a>
          </div>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  )
}

export default Project