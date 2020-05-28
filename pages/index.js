import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MyBucky - Download de iOS app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 mt-16 lg:mt-32">
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-black sm:text-5xl sm:leading-tight md:text-6xl text-center lg:text-left">
              Een <span className="text-blue-500">bucketlist</span> bijhouden
              was nog nooit zo <span className="text-blue-500">leuk</span>
            </h2>

            <p className="mt-3 text-base text-black sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0 text-center lg:text-left">
              MyBucky is een mobiele applicatie waarmee je jouw eigen bucketlist
              kan bijhouden.
            </p>

            <div className="w-full flex flex-center justify-center lg:block">
              <button
                href="#download"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-4"
              >
                <a
                  href="#download"
                  className="block py-2 px-4 md:py-4 md:px-12"
                >
                  Download app
                </a>
              </button>
            </div>
          </div>

          <div>
            <img src="/img/mybucky-ios.png" className="img-responsive" />
          </div>
        </div>
      </div>

      <div className="bg-blue-500 w-max height-auto p-16">
        <div className="container mx-auto">
          <h3 className="text-4xl tracking-tight text-center leading-10 font-extrabold text-white sm:text-3xl sm:leading-tight md:text-4xl mb-8 lg:mb-16">
            Alle voordelen op een rijtje
          </h3>

          <div className="grid gap-16 md:gap-8 lg:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                className="mb-4"
              >
                <path d="M13 16v5a1 1 0 0 1-1 1H9l-3-6a2 2 0 0 1-2-2 2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2 0-1.1.9-2 2-2h7.59l4-4H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2.41l-4-4H13zm0-2h1.41l4 4H20V4h-1.59l-4 4H13v6zm-2 0V8H6v2H4v2h2v2h5zm0 2H8.24l2 4H11v-4z" />
              </svg>
              <h4 className="text-white text-l md:text-xl text-center leading-8 font-normal">
                Push notificaties op basis van locatie
              </h4>
            </div>

            <div className="flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                className="mb-4"
              >
                <path d="M7 5H5v14h14V5h-2v10a1 1 0 0 1-1.45.9L12 14.11l-3.55 1.77A1 1 0 0 1 7 15V5zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm4 2v8.38l2.55-1.27a1 1 0 0 1 .9 0L15 13.38V5H9z" />
              </svg>
              <h4 className="text-white text-l md:text-xl text-center leading-8 font-normal">
                Interactieve kaart met populaire doelen
              </h4>
            </div>

            <div className="flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                className="mb-4"
              >
                <path d="M11 20v-2.08a6 6 0 0 1-4.24-3A4.02 4.02 0 0 1 2 11V6c0-1.1.9-2 2-2h2c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v5a4 4 0 0 1-4.76 3.93A6 6 0 0 1 13 17.92V20h4a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h4zm6.92-7H18a2 2 0 0 0 2-2V6h-2v6c0 .34-.03.67-.08 1zM6.08 13A6.04 6.04 0 0 1 6 12V6H4v5a2 2 0 0 0 2.08 2zM8 4v8a4 4 0 1 0 8 0V4H8z" />
              </svg>
              <h4 className="text-white text-l md:text-xl text-center leading-8 font-normal">
                Laat je inspireren door persoonlijke content
              </h4>
            </div>

            <div className="flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                className="mb-4"
              >
                <path d="M20 7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h2.38l1.73-3.45A1 1 0 0 1 9 3h6a1 1 0 0 1 .9.55L17.61 7H20zM9.62 5L7.89 8.45A1 1 0 0 1 7 9H4v10h16V9h-3a1 1 0 0 1-.9-.55L14.39 5H9.62zM12 17a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              </svg>
              <h4 className="text-white text-l md:text-xl text-center leading-8 font-normal">
                Laat je inspireren door verhalen van andere gebruikers
              </h4>
            </div>

            <div className="flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                className="mb-4"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm1-7h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H7a1 1 0 0 1 0-2h2V7a1 1 0 1 1 2 0v2z" />
              </svg>
              <h4 className="text-white text-l md:text-xl text-center leading-8 font-normal">
                Motiveer jezelf door reminders van je doelen in te stellen
              </h4>
            </div>

            <div className="flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                className="mb-4"
              >
                <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5zm8 6h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2z" />
              </svg>
              <h4 className="text-white text-l md:text-xl text-center leading-8 font-normal">
                Laat je inspireren door populaire doelen van andere gebruikers
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-max height-auto pt-16 pl-16 pr-16 md:pt-32">
        <div className="container mx-auto">
          <div className="grid gap-4 md:gap-8 lg:gap-16 grid-cols-1 lg:grid-cols-2 grid-flow-row-dense">
            <div className="hidden lg:block">
              <img src="/img/ios.png" className="img-responsive" />
            </div>

            <div className="mb-8 lg:mb-0" id="download">
              <h3 className="text-4xl tracking-tight leading-10 font-bold text-blue-500 sm:text-3xl sm:leading-tight md:text-4xl text-center lg:text-left">
                Download de app
              </h3>

              <p className="mt-3 text-base text-black sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0 text-center lg:text-left">
                Inmiddels is voor zowel Android als iOS de mobiele applicatie
                van MyBucky gerealiseerd. Met de app kan je jouw eigen
                bucketlist eenvoudig bijhouden en zit je nergens aan vast. Ook
                zonder profiel kan je een bucketlist bij houden!
              </p>

              <p className="mt-3 text-base text-black sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0 text-center lg:text-left">
                De Android app is te verkrijgen in de{' '}
                <a href="#" className="text-blue-500">
                  Google Play Store
                </a>
                . De iOS app is te verkrijgen in de{' '}
                <a href="#" className="text-blue-500">
                  App store
                </a>
                .
              </p>
            </div>

            <div className="block lg:hidden">
              <img src="/img/ios.png" className="img-responsive" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-500 w-max height-auto p-16">
        <div className="container mx-auto">
          <h3 className="text-4xl tracking-tight text-center leading-10 font-extrabold text-white sm:text-3xl sm:leading-tight md:text-4xl mb-4">
            Contact
          </h3>

          <p className="text-base text-white text-center sm:text-lg md:text-xl lg:mx-0">
            Stuur een e-mail naar support@mybucky.com
          </p>
        </div>
      </div>

      <style jsx global>{`
        html,
        body {
          scroll-behavior: smooth;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        *::selection {
          background-color: #4299e1;
          color: white;
        }
      `}</style>
    </div>
  )
}
