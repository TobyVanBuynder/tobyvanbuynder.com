import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { Button } from './ui/Button'
import { getIconByName } from '@/utils/getIconByName'

const Hero = () => {
    return (
        <section id="hero" className="pb-8 pt-8" /* TODO: fix bug causing these spotlights to scale width of website*/>
            <Spotlight className="-top-40 -left-10 md:-left:32 md:-top-20 h-screen" />
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw}" fill="purple" />
            <Spotlight className="-top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.03] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className="flex justify-center relative my-16 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">Toby Van Buynder</h2>

                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl overflow-hidden"
                        words="Creative Developer / Game Programmer"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        based in Copenhagen, Denmark
                    </p>

                    <a href="#shipped-projects">
                        <Button title='Show My Work' icon={getIconByName('locationArrow', 1)} position={'right'} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero