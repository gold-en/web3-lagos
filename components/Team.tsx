import Link from "next/link";
const Team = () => {
  return (
    <>
      <footer className="text-3xl text-center w-[1440px] h-[310px] text-white bg-[#0D2033]">
        <div className="pt-[92px] pb-[34px]">
          <h3 className="mb-[49px]">Powered by web3Bridge</h3>
          <Link href="#">Event@web3bridge.com</Link>
        </div>
      </footer>
    </>
  );
};
export default Team;

// import EmailIcon from "./Icons/EmailIcon"
// import InstagramIcon from "./Icons/InstagramIcon"
// import TwitterIcon from "./Icons/TwitterIcon"

// const Team =()=>{
//     return (
//         <>
//          <section className="max-w-6xl m-auto py-16 text-center [&>div]:my-3 text-white">
//         <h2 className="text-5xl font-bold text-gray-300">
//           {" "}
//           Team
//           <br />
//           &
//           <br />
//           Contact Details
//         </h2>
//         <div>Contact:</div>
//         <div className="flex items-center justify-center">

//           <EmailIcon className="inline-block mr-1 text-xl font-bold" />
//           <a href="mailto:ayodeji@web3bridge.com">ayodeji@web3bridge.com</a>
//         </div>
//         <div className="">
//           <div className="flex items-center justify-center">
//             <a target="_blank" href="https://twitter.com/Web3Bridge">

//               <TwitterIcon className="inline-block mr-1 text-xl font-bold " />
//             </a>
//             <a target="_blank" href="https://instagram.com/web3bridge">

//               <InstagramIcon className="inline-block mr-3 text-xl font-bold " />
//             </a>
//             @web3bridge
//           </div>
//           <div>
//             <a target="_blank" href="https://www.web3bridge.com">
//               https://www.web3bridge.com
//             </a>
//           </div>
//         </div>
//       </section>
//         </>

//     )
// }

// export default Team
