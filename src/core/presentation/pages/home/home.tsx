import Image from 'next/image';
import BuildingImage from '~/core/presentation/common/images/building.png';
import { SquareIcon } from './components';

function HomePage() {
  return (
    <main className='px-90px py-36px' role='main' aria-label='Página inicial'>
      <header className='flex justify-between'>
        <div className='flex flex-col gap-4px'>
          <h1 className='text-white text-21px'>Finexps</h1>
          <div className='bg-blueMedium bg-opacity-20 w-149px flex justify-center rounded-8px'>
            <p className='text-14px text-blueMedium'>Em desenvolvimento</p>
          </div>
        </div>
        <div className='flex gap-17px'>
          <button
            type='button'
            className='w-105px h-38px bg-transparent border-1px border-greenLight text-greenLight hover:bg-green hover:border-green hover:text-white rounded-6px text-14px hover:duration-200 transition-colors duration-15'
          >
            Entrar
          </button>
          <button
            type='button'
            className='w-133px h-38px bg-white1 border-1px text-  rounded-6px text-14px hover:bg-gray7 hover:duration-200 transition-colors duration-150 shadow-1px'
          >
            Criar uma conta
          </button>
        </div>
      </header>
      <section className='py-160px flex items-center justify-between'>
        <div className='flex flex-col gap-16px'>
          <div className='w-453px'>
            <p className='text-60px font-semiBold text-transparent bg-clip-text bg-gradient-to-r from-green1 to-gray8 text-48px leading-70px'>
              Você no controle das despesas
            </p>
          </div>
          <div className='w-629px'>
            <p className='text-gray9 text-16px'>
              Agora você pode controlar as suas despesas de forma simples e
              rápida. Com o Finexps você fica no controle de tudo que entra e
              sai do seu bolso.
            </p>
          </div>
          <div className='flex gap-8px items-center text-gray9 mt-4'>
            <p>Pressione</p>
            <p className='bg-gray9 px-4px text-black rounded-3px text-14px'>
              C
            </p>
            <p>para criar uma conta</p>
          </div>
        </div>
        <div className='mr-8'>
          <SquareIcon />
        </div>
      </section>
      <Image
        src={BuildingImage}
        alt='Station'
        className='absolute top-0 left-0 w-full-vw h-full-vh object-cover -z-20'
        placeholder='blur'
      />
    </main>
  );
}

export default HomePage;
