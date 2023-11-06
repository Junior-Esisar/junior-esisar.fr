export default function NotFoundPage() {
  return (
    <main>
      <div className='mx-auto flex h-screen max-w-screen-xl items-center justify-start px-4 md:px-8'>
        <div className='mx-auto max-w-lg flex-1 items-center justify-center md:flex md:max-w-none'>
          <div className='mt-12 max-w-lg flex-1 space-y-3 md:mt-0'>
            <h3 className='font-semibold text-purple-600'>404 Error</h3>
            <p className='text-4xl font-semibold text-gray-800 sm:text-5xl'>
              Page not found
            </p>
            <p className='text-gray-600'>
              Sorry, the page you are looking for could not be found or has been
              removed.
            </p>
            <a
              href='javascript:void(0)'
              className='inline-flex items-center gap-x-1 font-medium text-purple-600 duration-150 hover:text-purple-400'
            >
              Go back
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-5 w-5'
              >
                <path
                  fillRule='evenodd'
                  d='M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}