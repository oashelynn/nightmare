import Image from "next/image";
import Lottie from "lottie-react";
import animatedCheckbox from "./checkbox.json"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, scrollTween } from "gsap/dist/ScrollTrigger";


const interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.25],
      type: "stop",
      frames: [0],
    },
    {
      visibility: [0.25, 0.75],
      type: "seek",
      frames: [0, 55],
    }
  ]
}

const choices = [
  'Explosive revenue growth potential',
  'Proven SaaS model',
  'Diverse and experienced team',
  'Public exit experience',
  'Patent-pending technology',
  'Your future begins'
]

const IMAGES = [
	{
		src: "/screenshot/homebook 2.png",
		alt: "Purple Line",
		w: 875,
		h: 419,
		id: 'one'
	},
	{
		src: "/screenshot/Image.png",
		alt: "Purple Line",
		w: 201,
		h: 408,
		id: 'two'
	},
	{
		src: "/screenshot/connectbook5 3.png",
		alt: "Purple Line",
		w: 875,
		h: 419,
		id: 'three'
	},
	{
		src: "/screenshot/connectphone 2.png",
		alt: "Purple Line",
		w: 201,
		h: 408,
		id: 'four'
	},
	{
		src: "/screenshot/traxbook 2.png",
		alt: "Purple Line",
		w: 875,
		h: 419,
		id: 'five'
	},
]


const Future = () => {

	// const containerRef = useRef(null);
	// const imagesRef = useRef([]);

	// useEffect(() => {
	// let sections = gsap.utils.toArray(".horizon");

	// let scrollTween = gsap.to(sections, {
	// 		xPercent: -100 * (sections.length - 1),
	// 		ease: "none", // <-- IMPORTANT!
	// 		scrollTrigger: {
	// 			trigger: ".carousel",
	// 			pin: true,
	// 			scrub: 0.1,
	// 			//snap: directionalSnap(1 / (sections.length - 1)),
	// 			end: "+=3000"
	// 		}
	// 	});


	// 	// only show the relevant section's markers at any given time
	// 		gsap.set(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end", {autoAlpha: 0});
	// 		["one","two","three","four", "five"].forEach((triggerClass, i) => {
	// 			ScrollTrigger.create({
	// 				trigger: "." + triggerClass,
	// 				containerAnimation: scrollTween,
	// 				start: "left 30%",
	// 				end: i === 4 ? "right right" : "right 30%",
	// 				markers: false,
	// 				onToggle: self => gsap.to(".marker-" + (i+1), {duration: 0.25, autoAlpha: self.isActive ? 1 : 0})
	// 			});
	// 		});

  // }, []);

  return (
		<div className="bg-black text-white py-[20px] text-center font-sysui">
			<h1 className="text-[58px] lg:text-[88px] my-[83px] text-center font-semibold">
				Your future awaits...
			</h1>
			{/* <div  className="carousel flex flex-nowrap h-full w-[300%] justify-center items-center">
				{IMAGES.map((x,i) => (
					<section className={`${x.id} ho0rizon`} >
					<Image
						key={x.src+"_"+i}
						src={x.src}
						alt="Purple Line"
						width={x.w}
						height={x.h}
						className="object-cover"
					/></section>
				))}
			</div> */}
			<h2 className="text-[60px] font-semibold mt-[120px] mb-[90px]">Start your adventure.</h2>
			<div className="flex justify-center">
				 <div className="flex flex-col lg:h-[240px] w-1/2 flex-wrap justify-center">
					{choices.map((choice, i) =>
						<div className="flex gap-[22px] w-max items-center" key={"choice_"+i}>
							<Lottie
								animationData={animatedCheckbox}
								style={{height: 75}}
								interactivity={interactivity}
							/>
							<p>{choice}</p>
						</div>
					)}
				</div>
			</div>
			<div className="lg:my-[80px] my-5">
				<Image
					src="/screenshot/owlanim.gif"
					alt="Owl Animation"
					width={382}
					height={253}
					className="m-auto flex lg:w-[764px]"
				/>
			</div>
			<div className="text-center lg:py-[34px] py-[64px] justify-center relative z-10">
				<h3 className="lg:text-[80px] text-4xl font-semibold py-8 lg:py-[60px]">Invest with confidence today</h3>
				<button className="h-[52px] lg:h-[80px] px-[48px] bg-primary-purple
					hover:bg-primary-purple50 transition-all rounded-xl">I’m joining the Budbo Team</button>
			</div>
			<div className="-translate-y-full -z-1  lg:h-[375px] h-[232px">
				<Image
					src="/investors/invest today.svg"
					alt=""
					width={3000}
					height={375}
					className="lg:h-[475px] h-[232px] w-[90%] m-auto"
				/>
			</div>
		</div>
  );
};

export default Future;
