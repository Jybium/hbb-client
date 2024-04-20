<main className="h-screen w-full">
  <section className="md:flex justify-center content-center w-full md:h-[82%] bg-background">
    <section className="md:flex grid justify-between items-center md:h-[80%] m-auto w-[90%]">
      <div>
        <Image
          src={Logo}
          alt="logo"
          width={400}
          height={400}
          priority
          className="block w-[65%] md:w-[400px] mx-auto md:mx-0 md:max-w-full"
        />
      </div>
      <section className="md:w-[57%] w-full">
        <div className="text-white">
          <h1 className="text-[32px] font-[500] leading-[40px] text-white md:text-[64px] md:leading-[81px]">
            {landingPage[text].heading}
          </h1>
          <p className="text-lg mt-4 mb-16">{landingPage[text].text}</p>
        </div>
        <div className="flex gap-6 pb-7 md:pb-0">
          <Button
            asChild
            className={`${
              text === 1
                ? "bg-base2 text-white"
                : "bg-white text-text border border-white"
            } px-[48px] py-[14px] md:py-[20px] rounded-[40px] `}
          >
            <p
              className="cursor-pointer py-5"
              onClick={() => setShowModal(true)}
            >
              Sign Up
            </p>
          </Button>
          <Button
            asChild
            className="px-[48px] py-[14px] md:py-[20px] rounded-[40px] border border-white text-white"
          >
            <Link href="/log-in" className="text-white py-5">
              Log in
            </Link>
          </Button>
        </div>
      </section>
    </section>
  </section>
  <div className="md:h-1/6 h-fit">
    <Footer />
  </div>
  <div
    className={`top-0 left-1/2 transform -translate-x-1/2  absolute overflow-y-hidden z-40  w-full h-full  ${
      showModal ? "top-1/2 transform -translate-y-1/2" : "-translate-y-full"
    } ease-in-out duration-500`}
  >
    <Modal
      isOpen={showModal}
      onClose={handleModalClose}
      onYesClick={handleYesClick}
      question="Are you over 20?"
      button1Text="Yes, I am"
      button2Text="No, cancel"
      button1Style={button1Style}
      button2Style={button2Style}
    />
  </div>
</main>;
