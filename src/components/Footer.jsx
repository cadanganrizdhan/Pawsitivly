import '../style/Footer.css'

const Footer = () => {
  return (
    <>
    <div className="flex flex-col pt-16 bg-blue-100">
      <div className="flex z-10 flex-col self-center px-5 w-full max-w-[1199px] max-md:max-w-full">
        <div className="self-start ml-11 text-4xl font-bold tracking-tight leading-9 text-zinc-800 max-md:max-w-full">
          Get In Touch!
          <br />
          <span className="font-light text-zinc-800">
            For every new update from us
          </span>
        </div>
        <div className="shrink-0 self-center mt-7 max-w-full h-px border border-solid bg-zinc-800 border-zinc-800 w-[1070px]" />
        <div className="flex gap-5 justify-between items-start mt-5 max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col mt-3.5">
            <div className="flex flex-col pr-12 pl-5 whitespace-nowrap max-md:px-5">
              <div className="self-start text-base font-bold text-zinc-800">
                About
              </div>
              <div className="self-end mt-6 text-sm leading-5 text-black">
                (+62)83878907645
              </div>
            </div>
            <div className="flex gap-0 mt-5 text-base text-black">
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 w-14 aspect-[1.3]"
              />
              <div className="flex-auto my-auto">Mon - Sun: 8AM - 8PM</div>
            </div>
          </div>
          <div className="flex flex-col mt-2 text-base text-black">
            <div className="font-bold text-zinc-800">Help & Support</div>
            <div className="mt-6">discussion forum</div>
            <div className="mt-6">Support Center</div>
            <div className="mt-6">FAQ</div>
          </div>
          <div className="flex flex-col text-base text-zinc-800">
            <div className="font-bold">Sitemap</div>
            <div className="mt-6">About Us</div>
            <div className="mt-2.5">Our Service</div>
            <div className="mt-3">Blog</div>
            <div className="mt-3">Contact</div>
          </div>
          <div className="flex flex-col self-stretch">
            <div className="text-base font-bold text-zinc-800">NewsLetter</div>
            <div className="justify-center items-center px-16 py-5 mt-3 text-base text-black bg-white rounded-xl border border-solid border-zinc-800 max-md:px-5">
              Your email
            </div>
            <div className="mt-6 text-base font-bold text-zinc-800">
              Follow us
            </div>
            <div className="flex gap-5 mt-4 max-md:pr-5">
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 w-8 aspect-[0.97]"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 aspect-[1.25] w-[41px]"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 aspect-[1.15] w-[38px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="items-center px-16 pt-3 pb-5 w-full text-base text-center bg-blue-100 text-neutral-900 max-md:px-5 max-md:max-w-full">
        Copyright 2024 By Pawsitively. All Rights Reserved
      </div>
    </div>
    </>
  )
}

export default Footer
